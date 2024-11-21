import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as t,a as i,o as l}from"./app-Cz6B8gUp.js";const n={};function h(d,s){return l(),e("div",null,s[0]||(s[0]=[t(`<h1 id="sed-行文本修改" tabindex="-1"><a class="header-anchor" href="#sed-行文本修改"><span>sed - 行文本修改</span></a></h1><p>sed 命令可以直接修改文件内容，适合在脚本里使用，达到直接修改文件内容的目的</p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [选项] </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;[动作]&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 文件名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>选项</th><th>作用</th></tr></thead><tbody><tr><td>-n</td><td>只输出 &quot;[动作]&quot; 处理过的那一行的字符串</td></tr><tr><td>-e</td><td>允许对输入数据应用多条sed编辑 sed -e &quot;1 a abc&quot; -e &quot;5 a cba&quot; a.txt</td></tr><tr><td>-i</td><td>用sed的修改结果直接修改读取数据的文件，而不是由屏幕输出</td></tr><tr><td>-r</td><td>支持正则表达式</td></tr></tbody></table><table><thead><tr><th>动作</th><th>作用</th></tr></thead><tbody><tr><td>5 a abc</td><td>在第5行下面加一行字符串 abc，abc 在第6行</td></tr><tr><td>5 c abc</td><td>把第5行替换成 abc</td></tr><tr><td>5 i abc</td><td>在第5行这里插入一行字符串 abc，abc 在第5行，第5行下移到第6行</td></tr><tr><td>5 d</td><td>删除第5行，第6行上移到第5行</td></tr><tr><td>5 p</td><td>输出第5行</td></tr><tr><td>5 s/abc/cba/1</td><td>把第5行的第一个 abc 替换为 cba，可以省略为 5s/abc/cba/</td></tr><tr><td>5 s/abc/cba/g</td><td>把第5行的每一个 abc 替换为 cba</td></tr><tr><td>5 s/abc/cba/2g</td><td>把第5行的第2个及以后的每一个 abc 替换为 cba</td></tr></tbody></table><h2 id="其他示例" tabindex="-1"><a class="header-anchor" href="#其他示例"><span>其他示例</span></a></h2><h3 id="范围操作" tabindex="-1"><a class="header-anchor" href="#范围操作"><span>范围操作</span></a></h3><p>如 2,5 表示第2行、第3行、第4行、第5行都执行这个动作</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2 3 4 5 行下面都加一行abc</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2,5 a abc&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a.txt</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2 3 4 5 行都删除</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2,5 d&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是 &quot;[动作]&quot; c 不是每一行都替换，而是2到5行这四行替换为一行 abc</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;2,5 c abc&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>$ 表示最后一行</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 把第5行到最后一行的每一个 abc 都替换为 cba</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;5,$ s/abc/cba/g&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>没有指定范围就是全部行</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 清空</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;d&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a.txt</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 每一行都替换</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;s/abc/cba/g&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="s-替换操作-详解" tabindex="-1"><a class="header-anchor" href="#s-替换操作-详解"><span>s 替换操作 详解</span></a></h3><table><thead><tr><th>动作</th><th>作用</th></tr></thead><tbody><tr><td>2,5</td><td>s/abc/cba/g ; 5,$ s/cba/abc/g 支持分号分隔，从而不用 sed -e 动作1 -e 动作2</td></tr><tr><td>1,5</td><td>s/^/#/ 1到5行前面加#</td></tr><tr><td>5,10</td><td>s/$/;/ 5到10行最后加;</td></tr><tr><td>s/user/&amp;name/g</td><td>把所有的 user 替换为 username，变量&amp;就是被匹配的变量 user</td></tr></tbody></table><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h4><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mandatory.yaml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 一次 sed ，多次替换</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ri</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s#quay.io#quay.azk8s.cn#g;/authorization/s#v1beta1#v1#g&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mandatory.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匹配操作" tabindex="-1"><a class="header-anchor" href="#匹配操作"><span>匹配操作</span></a></h3><table><thead><tr><th>动作</th><th>作用</th></tr></thead><tbody><tr><td>/IPADDR/ =</td><td>匹配到有 IPADDR 的哪一行，然后获取行号</td></tr><tr><td>/PermitRootLogin/ s/^/#/</td><td>匹配到 PermitRootLogin 那一行，然后注释掉</td></tr><tr><td>/&lt;Directory &quot;/home/www&quot;&gt;/,/&lt;/Directory&gt;/ c AllowOverride None\\nRequire all granted</td><td>从 &lt;Directory &quot;/home/www&quot;&gt; 到 &lt;/Directory&gt;</td></tr></tbody></table><h3 id="动作嵌套" tabindex="-1"><a class="header-anchor" href="#动作嵌套"><span>动作嵌套</span></a></h3>`,23),i("table",null,[i("thead",null,[i("tr",null,[i("th",null,"动作"),i("th",null,"作用")])]),i("tbody",null,[i("tr",null,[i("td",{a:"",d:""},"/c/"),i("td",null,"先匹配 c，再匹配到 a 后删除该行")]),i("tr",null,[i("td",null,"1,5 {/a/{/b/ d }}"),i("td",null,"在1到5行内，先匹配到 a 在这一行再匹配到 b ，就把这行删掉")]),i("tr",null,[i("td",null,[i("code",null,"1,$ {/^#/ d ; /^$/ d ;s/^ *//g}")]),i("td",null,"从第一行到最后一行，如果匹配到以#开头，则删除；如果是空行，也删除；如果前面有空格，则去除空格")])])],-1),t(`<h2 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h2><p>取引号内的值</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a.txt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">eqfqefeq</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;xyzabc&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">efqevqer</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/.*&quot;(.+)&quot;.*/\\1/&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xyzabc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>去空格</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除行首空格</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/^[ \\t]*//g&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除行末空格</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/[ \\t]*$//g&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 删除所有空格</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1.txt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;s/[[:space:]]//g&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>隔行提取</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;1~2p&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 打印奇数行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;2~2p&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 打印偶数行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sed</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;1~3p&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 打印 1,4,7,10,13... 行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const p=a(n,[["render",h],["__file","sed.html.vue"]]),c=JSON.parse('{"path":"/linux/%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7/sed.html","title":"sed - 行文本修改","lang":"zh-CN","frontmatter":{"date":"2022-01-09T00:00:00.000Z","category":"命令行工具","tag":["Linux","行文本处理","脚本命令"],"description":"sed - 行文本修改 sed 命令可以直接修改文件内容，适合在脚本里使用，达到直接修改文件内容的目的 用法 其他示例 范围操作 如 2,5 表示第2行、第3行、第4行、第5行都执行这个动作 但是 \\"[动作]\\" c 不是每一行都替换，而是2到5行这四行替换为一行 abc $ 表示最后一行 没有指定范围就是全部行 s 替换操作 详解 示例 匹配操作 动作...","head":[["meta",{"property":"og:url","content":"https://xiangcheng.site/linux/%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7/sed.html"}],["meta",{"property":"og:site_name","content":"大橙的运维宝典"}],["meta",{"property":"og:title","content":"sed - 行文本修改"}],["meta",{"property":"og:description","content":"sed - 行文本修改 sed 命令可以直接修改文件内容，适合在脚本里使用，达到直接修改文件内容的目的 用法 其他示例 范围操作 如 2,5 表示第2行、第3行、第4行、第5行都执行这个动作 但是 \\"[动作]\\" c 不是每一行都替换，而是2到5行这四行替换为一行 abc $ 表示最后一行 没有指定范围就是全部行 s 替换操作 详解 示例 匹配操作 动作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T18:45:08.000Z"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"行文本处理"}],["meta",{"property":"article:tag","content":"脚本命令"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-21T18:45:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sed - 行文本修改\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-21T18:45:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"其他示例","slug":"其他示例","link":"#其他示例","children":[{"level":3,"title":"范围操作","slug":"范围操作","link":"#范围操作","children":[]},{"level":3,"title":"s 替换操作 详解","slug":"s-替换操作-详解","link":"#s-替换操作-详解","children":[]},{"level":3,"title":"匹配操作","slug":"匹配操作","link":"#匹配操作","children":[]},{"level":3,"title":"动作嵌套","slug":"动作嵌套","link":"#动作嵌套","children":[]}]},{"level":2,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]}],"git":{"createdTime":1732214708000,"updatedTime":1732214708000,"contributors":[{"name":"daCheng","email":"xiangxiaoc@outlook.com","commits":1}]},"readingTime":{"minutes":2.76,"words":828},"filePathRelative":"linux/命令行工具/sed.md","localizedDate":"2022年1月9日","excerpt":"\\n<p>sed 命令可以直接修改文件内容，适合在脚本里使用，达到直接修改文件内容的目的</p>\\n<h2>用法</h2>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">sed</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [选项] </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"[动作]\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> 文件名</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,c as data};
