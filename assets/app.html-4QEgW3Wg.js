import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as t}from"./app-DLQUPJEp.js";const l={};function h(n,i){return t(),a("div",null,i[0]||(i[0]=[e('<h1 id="app-核心命令-管理-argo-应用" tabindex="-1"><a class="header-anchor" href="#app-核心命令-管理-argo-应用"><span>app - 核心命令，管理 Argo 应用</span></a></h1><h2 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述"><span>一、概述</span></a></h2><p><code>argocd app</code>命令是用于管理 Argo CD 中的应用程序的重要工具。它可以实现创建、获取、同步、删除应用等多种操作，帮助用户在 Argo CD 环境中有效地管理应用的部署状态。</p><h2 id="二、常用操作示例" tabindex="-1"><a class="header-anchor" href="#二、常用操作示例"><span>二、常用操作示例</span></a></h2><h3 id="一-创建应用" tabindex="-1"><a class="header-anchor" href="#一-创建应用"><span>（一）创建应用</span></a></h3><ol><li><strong>命令格式</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">app_nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--repo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">repository_ur</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">l&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">path_in_rep</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">o&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--dest-server</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">destination_serve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">r&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">--dest-namespace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">destination_namespac</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li><strong>操作步骤</strong><ul><li>例如，创建一个名为<code>my-app</code> 的应用，其代码仓库地址为<code>https://github.com/myorg/my-repo.git</code>，应用配置在仓库中的路径为<code>manifests</code>，目标服务器为<code>https://kubernetes.default.svc</code>，目标命名空间为<code>my-namespace</code>：</li></ul></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my-app</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --repo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/myorg/my-repo.git</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --path</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> manifests</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dest-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://kubernetes.default.svc</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dest-namespace</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my-namespace</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="二-获取应用信息" tabindex="-1"><a class="header-anchor" href="#二-获取应用信息"><span>（二）获取应用信息</span></a></h3><ol><li><strong>命令格式</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">app_nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li><strong>操作步骤</strong><ul><li>若要获取名为<code>my-app</code>的应用信息，执行：</li></ul></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my-app</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>这将显示应用的当前状态、配置信息、同步状态等内容。</li></ul><h3 id="三-同步应用" tabindex="-1"><a class="header-anchor" href="#三-同步应用"><span>（三）同步应用</span></a></h3><ol><li><strong>命令格式</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sync</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">app_nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li><strong>操作步骤</strong><ul><li>当对应用的配置进行了更新后，可通过以下命令同步<code>my-app</code>：</li></ul></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sync</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my-app</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>此操作会使 Argo CD 根据新的配置将应用更新到目标环境。</li></ul><h3 id="四-删除应用" tabindex="-1"><a class="header-anchor" href="#四-删除应用"><span>（四）删除应用</span></a></h3><ol><li><strong>命令格式</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> delete</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">app_nam</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">e&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li><strong>操作步骤</strong><ul><li>若要删除<code>my-app</code>，执行：</li></ul></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> delete</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> my-app</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="三、注意事项" tabindex="-1"><a class="header-anchor" href="#三、注意事项"><span>三、注意事项</span></a></h2><ol><li><strong>配置准确性</strong><ul><li>在创建应用时，确保<code>--repo</code>、<code>--path</code>、<code>--dest-server</code>和<code>--dest-namespace</code>等参数的正确性。错误的参数可能导致应用无法正确部署或同步。</li></ul></li><li><strong>同步前确认</strong><ul><li>在执行同步操作之前，建议先查看应用的当前状态和配置变化，以避免意外的结果。特别是在多人协作环境中，可能存在其他人员同时对应用配置进行修改的情况。</li></ul></li><li><strong>删除谨慎操作</strong><ul><li>删除应用是不可逆的操作。在执行<code>argocd app delete</code>命令之前，要确保该应用确实不再需要，并且已经备份了相关的配置和数据（如果有需要）。</li></ul></li><li><strong>权限要求</strong><ul><li>执行<code>argocd app</code>的相关操作需要具有相应的权限。如果遇到权限不足的问题，需要联系系统管理员检查和调整权限设置。</li></ul></li></ol>',28)]))}const d=s(l,[["render",h],["__file","app.html.vue"]]),k=JSON.parse('{"path":"/notes/CICD/Argo%20CD/argocd%20%E5%91%BD%E4%BB%A4/app.html","title":"app - 核心命令，管理 Argo 应用","lang":"zh-CN","frontmatter":{"date":"2022-01-09T00:00:00.000Z","category":"Argo","tag":["argocd 命令"],"description":"app - 核心命令，管理 Argo 应用 一、概述 argocd app命令是用于管理 Argo CD 中的应用程序的重要工具。它可以实现创建、获取、同步、删除应用等多种操作，帮助用户在 Argo CD 环境中有效地管理应用的部署状态。 二、常用操作示例 （一）创建应用 命令格式 操作步骤 例如，创建一个名为my-app 的应用，其代码仓库地址为ht...","head":[["meta",{"property":"og:url","content":"https://xiangcheng.site/notes/CICD/Argo%20CD/argocd%20%E5%91%BD%E4%BB%A4/app.html"}],["meta",{"property":"og:site_name","content":"大橙的运维宝典"}],["meta",{"property":"og:title","content":"app - 核心命令，管理 Argo 应用"}],["meta",{"property":"og:description","content":"app - 核心命令，管理 Argo 应用 一、概述 argocd app命令是用于管理 Argo CD 中的应用程序的重要工具。它可以实现创建、获取、同步、删除应用等多种操作，帮助用户在 Argo CD 环境中有效地管理应用的部署状态。 二、常用操作示例 （一）创建应用 命令格式 操作步骤 例如，创建一个名为my-app 的应用，其代码仓库地址为ht..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-02T07:54:44.000Z"}],["meta",{"property":"article:tag","content":"argocd 命令"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-02T07:54:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"app - 核心命令，管理 Argo 应用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-09T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-02T07:54:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、概述","slug":"一、概述","link":"#一、概述","children":[]},{"level":2,"title":"二、常用操作示例","slug":"二、常用操作示例","link":"#二、常用操作示例","children":[{"level":3,"title":"（一）创建应用","slug":"一-创建应用","link":"#一-创建应用","children":[]},{"level":3,"title":"（二）获取应用信息","slug":"二-获取应用信息","link":"#二-获取应用信息","children":[]},{"level":3,"title":"（三）同步应用","slug":"三-同步应用","link":"#三-同步应用","children":[]},{"level":3,"title":"（四）删除应用","slug":"四-删除应用","link":"#四-删除应用","children":[]}]},{"level":2,"title":"三、注意事项","slug":"三、注意事项","link":"#三、注意事项","children":[]}],"git":{"createdTime":1732214708000,"updatedTime":1735804484000,"contributors":[{"name":"daCheng","email":"xiangxiaoc@outlook.com","commits":1}]},"readingTime":{"minutes":2.03,"words":608},"filePathRelative":"notes/CICD/Argo CD/argocd 命令/app.md","localizedDate":"2022年1月9日","excerpt":"\\n<h2>一、概述</h2>\\n<p><code>argocd app</code>命令是用于管理 Argo CD 中的应用程序的重要工具。它可以实现创建、获取、同步、删除应用等多种操作，帮助用户在 Argo CD\\n环境中有效地管理应用的部署状态。</p>\\n<h2>二、常用操作示例</h2>\\n<h3>（一）创建应用</h3>\\n<ol>\\n<li><strong>命令格式</strong></li>\\n</ol>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">argocd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> app</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> create</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">app_nam</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">e&gt; </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">--repo</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">repository_ur</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">l&gt; </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">--path</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">path_in_rep</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">o&gt; </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">--dest-server</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">destination_serve</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">r&gt; </span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">--dest-namespace</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">destination_namespac</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">e&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,k as data};