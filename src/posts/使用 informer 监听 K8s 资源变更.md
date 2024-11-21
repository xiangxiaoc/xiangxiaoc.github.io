---
date: 2024-04-01
category: K8s
tag:
  - K8s
---

# 使用 informer 监听 K8s 资源变更

watch 不稳定，一定会断线，改用 informer 获取资源变更事件

<!-- more -->

之前在实现 镜像部署到 k8s 集群后，自动在镜像仓库打 tag 的需求，中使用过 watch，在订阅 pod 创建 event。

后来询问网友知道了 k8s informer 机制，网上能搜到很多相关代码

大致可以分为四步：

1. 使用 SharedInformerFactory，并使用它来创建一个 Informer 工厂。
2. 根据你要监听的资源创建一个 Informer。这里我就通过 `factory.Core().V1().Events().Informer()` 创建事件 informer。
3. 绑定回调函数，这个函数会传入 event 对象作为参数，达到 event 对象后，实现你的逻辑即可。
4. 通过传入一个 channel 来启动这个 informer，它就可以以 goroutine 开始运行了，直到你关闭这个 channel。

下面是带了我创建镜像Tag业务的代码示例，也可以在网上去搜搜通用的示例，以免干扰对 informer 作用的理解。

```go
package app

import (
	"cloud-native-ops/pkg/models"
	"fmt"
	"github.com/wonderivan/logger"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/client-go/informers"
	"k8s.io/client-go/tools/cache"
	"time"
)

func runEventInformer() {
	// 创建共享 Informer 工厂
	// 使用 informer.NewSharedInformerFactory 方法创建一个共享 Informer 工厂。
	// 参数 time.Second*30 是一个时间间隔，用于指定共享 Informer 工厂在同步资源时的刷新间隔。
	// 刷新间隔设置为 10 秒，这意味着共享 Informer 工厂将每 10 秒从 Kubernetes API 中同步一次资源的状态。
	factory := informers.NewSharedInformerFactory(k8s.Client, time.Second*10)

	// 通过工厂创建 informer
	eventInformer := factory.Core().V1().Events().Informer()

	// 给 informer 绑定回调函数
	_, err := eventInformer.AddEventHandler(cache.ResourceEventHandlerFuncs{
		AddFunc:    onAdd,
		UpdateFunc: onUpdate,
		DeleteFunc: onDelete,
	})
	if err != nil {
		panic(err)
	}

	stopper := make(chan struct{})
	go eventInformer.Run(stopper)
	stopCollecter.Add(1)

	go func() {
		<-shutdownNotification
		logger.Info("Stopping event informer...")
		close(stopper)
		for {
			if eventInformer.IsStopped() {
				logger.Info("Event informer is stopped")
				stopCollecter.Done()
				break
			}
		}
	}()

}

// when a new pod is deployed the onAdd function would be invoked
// for now just print the event.
func onAdd(obj interface{}) {
	e := obj.(*corev1.Event)
	if e.Reason == "Pulled" {
		logger.Info("Added Pulled Event(namespace: %s): [%v] %s", e.Namespace, e.LastTimestamp.Time, e.Message)
		match := re.FindStringSubmatch(e.Message)
		if len(match) > 1 {
			imageFullAddr := match[1]
			image, err := models.NewContainerImage(imageFullAddr)
			if err != nil {
				return
			}
			harbor, exist := harbors[image.RegistryAddr]
			if !exist {
				logger.Warn("Container Image Registry not supported, %s", image.RegistryAddr)
				return
			}
			now := time.Now()
			tag := fmt.Sprintf("%s_%s_%s", TagPrefix, e.Namespace, now.Format("20060102-150405"))
			tagExist, existTag := image.CheckTagPrefixExistInRegistry(TagPrefix, harbor)
			if tagExist {
				logger.Info(`TagPrefix [%s] already exist: [%s]. Skip tag task: {"Image": "%s", "newTag": "%s"}`,
					TagPrefix, existTag, image.FullAddress, tag)
			} else {
				err = image.CreateTagInRegistry(tag, harbor)
				if err != nil {
					logger.Error(`Failed to tag: {"Image": "%s", "newTag": "%s", "err": "%v"}`, image.FullAddress, tag, err)
					return
				}
			}
			logger.Info(`Successfully tagged: {"Image": "%s", "newTag": "%s"}`, image.FullAddress, tag)
		}
	}
}

// when a pod is deleted the onDelete function would be invoked
// for now just print the event
func onDelete(obj interface{}) {
	//pod := obj.(*corev1.Pod)
	//podName := pod.GetName()
	//fmt.Println(time.Now(), "Pod deleted -> ", podName)
}

func onUpdate(obj interface{}, obj2 interface{}) {
	// Cast the obj as Pod
	//pod := obj.(*corev1.Pod)
	//podName := pod.GetName()
	//fmt.Println(time.Now(), " Pod updated -> ", podName)
}

```
