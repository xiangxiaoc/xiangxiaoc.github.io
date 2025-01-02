import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as n}from"./app-DLQUPJEp.js";const t={};function l(r,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h1 id="account-管理本地账号" tabindex="-1"><a class="header-anchor" href="#account-管理本地账号"><span>account - 管理本地账号</span></a></h1><h2 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述"><span>一、概述</span></a></h2><p><code>argocd account</code> 命令用于管理 Argo CD 用户账户相关的操作，包括修改密码、获取用户信息等。</p><h2 id="二、常用操作示例" tabindex="-1"><a class="header-anchor" href="#二、常用操作示例"><span>二、常用操作示例</span></a></h2><h3 id="一-修改密码" tabindex="-1"><a class="header-anchor" href="#一-修改密码"><span>（一）修改密码</span></a></h3><ol><li><strong>命令格式</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> account</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update-password</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li><strong>操作步骤</strong><ul><li>执行该命令后，系统会提示输入当前密码和新密码。按照提示输入相应信息即可完成密码修改。例如：</li></ul></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> account</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update-password</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">*** Enter current password: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">*** Enter new password: </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">*** Confirm new password: </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Password</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> updated</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-获取当前用户信息" tabindex="-1"><a class="header-anchor" href="#二-获取当前用户信息"><span>（二）获取当前用户信息</span></a></h3><ol><li><strong>命令格式</strong></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> account</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get-user-info</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li><strong>操作步骤</strong><ul><li>执行此命令，会显示当前登录用户的相关信息，如用户名等。</li></ul></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> argocd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> account</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> get-user-info</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  &quot;name&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;your_username&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  &quot;enabled&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  &quot;groups&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    &quot;system:masters&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、注意事项" tabindex="-1"><a class="header-anchor" href="#三、注意事项"><span>三、注意事项</span></a></h2><ol><li><strong>密码安全</strong><ul><li>在修改密码时，确保新密码具有足够的强度。避免使用简单的、容易被猜到的密码，如纯数字、常见单词等。同时，要妥善保管好密码，不要将其泄露给无关人员。</li></ul></li><li><strong>权限问题</strong><ul><li>执行 <code>argocd account</code> 相关命令可能需要相应的权限。如果遇到权限不足的错误提示，需要检查用户的角色和权限配置，确保具有执行这些操作的权限。</li></ul></li><li><strong>备份重要信息</strong><ul><li>在进行可能影响用户账户（如修改密码）的操作之前，建议对相关的配置信息或重要数据进行备份，以防万一出现问题可以及时恢复。</li></ul></li></ol>`,16)]))}const o=s(t,[["render",l],["__file","account.html.vue"]]),c=JSON.parse('{"path":"/notes/CICD/Argo%20CD/argocd%20%E5%91%BD%E4%BB%A4/account.html","title":"account - 管理本地账号","lang":"zh-CN","frontmatter":{"date":"2022-01-09T00:00:00.000Z","category":"Argo","tag":["argocd 命令"],"description":"account - 管理本地账号 一、概述 argocd account 命令用于管理 Argo CD 用户账户相关的操作，包括修改密码、获取用户信息等。 二、常用操作示例 （一）修改密码 命令格式 操作步骤 执行该命令后，系统会提示输入当前密码和新密码。按照提示输入相应信息即可完成密码修改。例如： （二）获取当前用户信息 命令格式 操作步骤 执行此命...","head":[["meta",{"property":"og:url","content":"https://xiangcheng.site/notes/CICD/Argo%20CD/argocd%20%E5%91%BD%E4%BB%A4/account.html"}],["meta",{"property":"og:site_name","content":"大橙的运维宝典"}],["meta",{"property":"og:title","content":"account - 管理本地账号"}],["meta",{"property":"og:description","content":"account - 管理本地账号 一、概述 argocd account 命令用于管理 Argo CD 用户账户相关的操作，包括修改密码、获取用户信息等。 二、常用操作示例 （一）修改密码 命令格式 操作步骤 执行该命令后，系统会提示输入当前密码和新密码。按照提示输入相应信息即可完成密码修改。例如： （二）获取当前用户信息 命令格式 操作步骤 执行此命..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-02T07:54:44.000Z"}],["meta",{"property":"article:tag","content":"argocd 命令"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-02T07:54:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"account - 管理本地账号\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-09T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-02T07:54:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一、概述","slug":"一、概述","link":"#一、概述","children":[]},{"level":2,"title":"二、常用操作示例","slug":"二、常用操作示例","link":"#二、常用操作示例","children":[{"level":3,"title":"（一）修改密码","slug":"一-修改密码","link":"#一-修改密码","children":[]},{"level":3,"title":"（二）获取当前用户信息","slug":"二-获取当前用户信息","link":"#二-获取当前用户信息","children":[]}]},{"level":2,"title":"三、注意事项","slug":"三、注意事项","link":"#三、注意事项","children":[]}],"git":{"createdTime":1732214708000,"updatedTime":1735804484000,"contributors":[{"name":"daCheng","email":"xiangxiaoc@outlook.com","commits":1}]},"readingTime":{"minutes":1.31,"words":394},"filePathRelative":"notes/CICD/Argo CD/argocd 命令/account.md","localizedDate":"2022年1月9日","excerpt":"\\n<h2>一、概述</h2>\\n<p><code>argocd account</code> 命令用于管理 Argo CD 用户账户相关的操作，包括修改密码、获取用户信息等。</p>\\n<h2>二、常用操作示例</h2>\\n<h3>（一）修改密码</h3>\\n<ol>\\n<li><strong>命令格式</strong></li>\\n</ol>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">argocd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> account</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> update-password</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{o as comp,c as data};