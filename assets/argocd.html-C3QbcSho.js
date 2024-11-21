import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as l}from"./app-Cz6B8gUp.js";const e={};function t(h,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="argocd-sdk-go-代码操作-argo-cd" tabindex="-1"><a class="header-anchor" href="#argocd-sdk-go-代码操作-argo-cd"><span>argocd SDK - go 代码操作 Argo CD</span></a></h1><h3 id="一、argoproj-argo-cd-sdk简介" tabindex="-1"><a class="header-anchor" href="#一、argoproj-argo-cd-sdk简介"><span>一、<code>argoproj/argo - cd</code> SDK简介</span></a></h3><p><code>argoproj/argo - cd</code> SDK是用于与Argo CD（一个用于在Kubernetes环境中进行持续交付的工具）进行交互的Go语言开发套件。它允许开发者在自己的Go程序中实现对Argo CD功能的调用，如应用管理、同步操作、获取应用状态等。</p><h3 id="二、go-get安装" tabindex="-1"><a class="header-anchor" href="#二、go-get安装"><span>二、<code>go get</code>安装</span></a></h3><p>要安装<code>argoproj/argo - cd</code> SDK，可以在命令行中使用以下<code>go get</code>命令：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> github.com/argoproj/argo-cd/v2/pkg/apiclient</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这将把<code>argoproj/argo - cd</code> SDK相关的代码和依赖下载到你的<code>GOPATH</code>或<code>GOMODULE</code>环境指定的目录下，之后你就可以在Go项目中导入和使用它了。</p><h3 id="三、简单的常用操作示例" tabindex="-1"><a class="header-anchor" href="#三、简单的常用操作示例"><span>三、简单的常用操作示例</span></a></h3><ol><li><strong>初始化客户端连接</strong></li></ol><p>以下是一个简单的示例代码，用于初始化<code>argo - cd</code>客户端与Argo CD服务器建立连接：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;context&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;fmt&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;net/http&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;github.com/argoproj/argo-cd/v2/pkg/apiclient&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;github.com/argoproj/argo-cd/v2/pkg/apiclient/application&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    corev1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;k8s.io/api/core/v1&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    metav1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;k8s.io/apimachinery/pkg/1/api/meta/v1&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;k8s.io/client-go/kubernetes&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;k8s.io/client-go/rest&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 创建Kubernetes配置</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> rest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">InitConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> err</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;无法初始化Kubernetes配置:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 创建Kubernetes客户端</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    kubeClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> kubernetes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">NewForConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> err</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;无法创建Kubernetes客户端:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 创建Argo CD REST配置</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    argoCDConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> apiclient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Config</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 根据你的Argo CD服务器设置URL</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        ServerAddr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://your-argocd-server-url&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">        // 如果需要认证，设置相应的认证信息</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        Insecure</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 创建Argo CD客户端</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    argoCDClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> apiclient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">NewClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">argoCDConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> err</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;无法创建Argo CD客户端:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 获取应用程序客户端</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    appClient</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> argoCDClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ApplicationService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 列出应用程序</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    listOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> metav1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ListOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{}</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    apps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> appClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Background</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">listOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> err</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;无法列出应用程序:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Argo CD中的应用程序:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> _</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> range</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> apps</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">app</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中：</p><ul><li>首先初始化<code>Kubernetes</code>配置和客户端，这是因为<code>Argo CD</code>运行在<code>Kubernetes</code>环境中，部分操作可能依赖于<code>Kubernetes</code> API。</li><li>然后创建<code>Argo CD</code>客户端的配置，设置<code>ServerAddr</code>为<code>Argo CD</code>服务器的地址。这里<code>Insecure</code>设置为<code>true</code>表示跳过证书验证（在生产环境中应使用正确的证书配置）。</li><li>使用配置创建<code>Argo CD</code>客户端，并获取应用程序客户端。</li><li>最后通过应用程序客户端列出<code>Argo CD</code>中的应用程序。</li></ul><ol start="2"><li><strong>同步应用程序</strong></li></ol><p>以下是一个简单的同步<code>Argo CD</code>应用程序的示例：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;context&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;fmt&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;net/http&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;github.com/argoproj/argo-cd/v2/pkg/apiclient&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;github.com/argoproj/argo-cd/v2/pkg/apiclient/application&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    corev1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;k8s.io/api/core/v1&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    metav1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;k8s.io/apimachinery/pkg/1/api/meta/v1&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;k8s.io/client-go/kubernetes&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;k8s.io/client-go/rest&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // （前面创建Kubernetes配置和客户端，以及Argo CD客户端的步骤省略，与上例类似）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    appClient</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> argoCDClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ApplicationService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 假设要同步的应用程序名称为&quot;your-app-name&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    syncOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> application</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">SyncOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        Revision</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 可以指定特定的版本进行同步，如果为空则使用默认策略</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    _</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> appClient</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Sync</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Background</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;your-app-name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">&amp;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">syncOptions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> err</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> nil</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;无法同步应用程序:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;应用程序同步成功&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，创建<code>Argo CD</code>客户端和应用程序客户端后，通过<code>Sync</code>方法对指定名称的应用程序进行同步，传递<code>SyncOptions</code>来指定同步相关的参数（这里使用默认的同步版本）。</p><h3 id="四、常见注意事项" tabindex="-1"><a class="header-anchor" href="#四、常见注意事项"><span>四、常见注意事项</span></a></h3><ol><li><p><strong>认证和授权问题</strong> 如果<code>Argo CD</code>服务器启用了认证（通常情况下会这样），需要正确配置客户端的认证信息。这可能涉及到使用用户名/密码、令牌或者基于证书的认证方式。确保你的<code>Go</code>程序有足够的权限来执行所需的操作，例如访问应用程序信息、触发同步等，否则会遇到权限拒绝的错误。</p></li><li><p><strong>服务器地址和网络配置</strong> 在创建<code>Argo CD</code>客户端时，确保<code>ServerAddr</code>设置为正确的<code>Argo CD</code>服务器地址。同时，要注意网络连接问题，包括防火墙规则、网络代理等，因为客户端需要与<code>Argo CD</code>服务器进行网络通信。如果网络不通畅，操作会失败。</p></li><li><p><strong>版本兼容性</strong><code>argoproj/argo - cd</code> SDK版本可能需要与<code>Argo CD</code>服务器版本以及相关的<code>Kubernetes</code>版本兼容。在升级<code>SDK</code>或<code>Argo CD</code>服务器时，要检查它们之间的兼容性，避免出现不兼容导致的功能异常或错误。例如，新的<code>SDK</code>版本可能对某些API进行了更改，而旧的<code>Argo CD</code>服务器可能不支持这些新的调用方式。</p></li><li><p><strong>资源管理和错误处理</strong> 在使用<code>SDK</code>进行操作时，如创建大量应用程序或频繁同步操作，要注意资源的合理使用，避免过度消耗系统资源。同时，要全面地处理可能出现的错误，<code>SDK</code>操作可能因为各种原因失败，如网络问题、服务器端错误、数据不一致等，要在代码中正确处理这些错误情况，以提高程序的稳定性和可靠性。</p></li></ol>`,19)]))}const r=i(e,[["render",t],["__file","argocd.html.vue"]]),d=JSON.parse('{"path":"/golang/%E4%B8%89%E6%96%B9%E5%BA%93/argocd.html","title":"argocd SDK - go 代码操作 Argo CD","lang":"zh-CN","frontmatter":{"date":"2022-01-09T00:00:00.000Z","category":"Go","description":"argocd SDK - go 代码操作 Argo CD 一、argoproj/argo - cd SDK简介 argoproj/argo - cd SDK是用于与Argo CD（一个用于在Kubernetes环境中进行持续交付的工具）进行交互的Go语言开发套件。它允许开发者在自己的Go程序中实现对Argo CD功能的调用，如应用管理、同步操作、获取应...","head":[["meta",{"property":"og:url","content":"https://xiangcheng.site/golang/%E4%B8%89%E6%96%B9%E5%BA%93/argocd.html"}],["meta",{"property":"og:site_name","content":"大橙的运维宝典"}],["meta",{"property":"og:title","content":"argocd SDK - go 代码操作 Argo CD"}],["meta",{"property":"og:description","content":"argocd SDK - go 代码操作 Argo CD 一、argoproj/argo - cd SDK简介 argoproj/argo - cd SDK是用于与Argo CD（一个用于在Kubernetes环境中进行持续交付的工具）进行交互的Go语言开发套件。它允许开发者在自己的Go程序中实现对Argo CD功能的调用，如应用管理、同步操作、获取应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T18:45:08.000Z"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-21T18:45:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"argocd SDK - go 代码操作 Argo CD\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-21T18:45:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"一、argoproj/argo - cd SDK简介","slug":"一、argoproj-argo-cd-sdk简介","link":"#一、argoproj-argo-cd-sdk简介","children":[]},{"level":3,"title":"二、go get安装","slug":"二、go-get安装","link":"#二、go-get安装","children":[]},{"level":3,"title":"三、简单的常用操作示例","slug":"三、简单的常用操作示例","link":"#三、简单的常用操作示例","children":[]},{"level":3,"title":"四、常见注意事项","slug":"四、常见注意事项","link":"#四、常见注意事项","children":[]}],"git":{"createdTime":1732214708000,"updatedTime":1732214708000,"contributors":[{"name":"daCheng","email":"xiangxiaoc@outlook.com","commits":1}]},"readingTime":{"minutes":4.14,"words":1241},"filePathRelative":"golang/三方库/argocd.md","localizedDate":"2022年1月9日","excerpt":"\\n<h3>一、<code>argoproj/argo - cd</code> SDK简介</h3>\\n<p><code>argoproj/argo - cd</code> SDK是用于与Argo CD（一个用于在Kubernetes环境中进行持续交付的工具）进行交互的Go语言开发套件。它允许开发者在自己的Go程序中实现对Argo CD功能的调用，如应用管理、同步操作、获取应用状态等。</p>\\n<h3>二、<code>go get</code>安装</h3>\\n<p>要安装<code>argoproj/argo - cd</code> SDK，可以在命令行中使用以下<code>go get</code>命令：</p>","autoDesc":true}');export{r as comp,d as data};
