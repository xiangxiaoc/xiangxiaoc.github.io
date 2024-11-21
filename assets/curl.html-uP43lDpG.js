import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as l}from"./app-Cz6B8gUp.js";const t={};function n(h,i){return l(),a("div",null,i[0]||(i[0]=[e(`<h1 id="curl-发起-http-请求" tabindex="-1"><a class="header-anchor" href="#curl-发起-http-请求"><span>curl - 发起 http 请求</span></a></h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>用法</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [arg] </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;[condition]{code}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> FILE</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FILE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ...</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"> # 管道传递</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p><ul><li>-F 指定分隔符，例如 -F &#39;,&#39;</li><li>-v 通过 awk 识别的变量指定参数 <ul><li>-v OFS 指定输出的分隔符</li></ul></li></ul><h2 id="awk-代码语法" tabindex="-1"><a class="header-anchor" href="#awk-代码语法"><span>awk 代码语法</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 打印第二列为 Stopped 第一列的值</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	if ($2 == &quot;Stopped&quot;) {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">		print $1</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">	}</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><h3 id="不打印第一列" tabindex="-1"><a class="header-anchor" href="#不打印第一列"><span>不打印第一列</span></a></h3><p>循环打印每列法</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  for(col=2;col&lt;=NF;col++)</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  print $col</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}&#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $filename</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一列置空法（主要作用体现在可以将一列中的每个值再次计算）</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  $1=&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  print $0</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}&#39;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $filename</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="具体案例" tabindex="-1"><a class="header-anchor" href="#具体案例"><span>具体案例</span></a></h2><ol><li>杀死僵尸进程</li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ps</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -A</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stat,ppid,pid,cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;^[Zz]&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">awk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;{print $2}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xargs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> kill</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -9</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,17)]))}const k=s(t,[["render",n],["__file","curl.html.vue"]]),d=JSON.parse(`{"path":"/linux/%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7/curl.html","title":"curl - 发起 http 请求","lang":"zh-CN","frontmatter":{"date":"2022-01-09T00:00:00.000Z","category":"命令行工具","tag":["Linux","行文本处理","Shell"],"description":"curl - 发起 http 请求 简介 用法 参数 -F 指定分隔符，例如 -F ',' -v 通过 awk 识别的变量指定参数 -v OFS 指定输出的分隔符 awk 代码语法 案例 不打印第一列 循环打印每列法 第一列置空法（主要作用体现在可以将一列中的每个值再次计算） 具体案例 杀死僵尸进程","head":[["meta",{"property":"og:url","content":"https://xiangcheng.site/linux/%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7/curl.html"}],["meta",{"property":"og:site_name","content":"大橙的运维宝典"}],["meta",{"property":"og:title","content":"curl - 发起 http 请求"}],["meta",{"property":"og:description","content":"curl - 发起 http 请求 简介 用法 参数 -F 指定分隔符，例如 -F ',' -v 通过 awk 识别的变量指定参数 -v OFS 指定输出的分隔符 awk 代码语法 案例 不打印第一列 循环打印每列法 第一列置空法（主要作用体现在可以将一列中的每个值再次计算） 具体案例 杀死僵尸进程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T18:45:08.000Z"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"行文本处理"}],["meta",{"property":"article:tag","content":"Shell"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-21T18:45:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"curl - 发起 http 请求\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-21T18:45:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"awk 代码语法","slug":"awk-代码语法","link":"#awk-代码语法","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[{"level":3,"title":"不打印第一列","slug":"不打印第一列","link":"#不打印第一列","children":[]}]},{"level":2,"title":"具体案例","slug":"具体案例","link":"#具体案例","children":[]}],"git":{"createdTime":1732214708000,"updatedTime":1732214708000,"contributors":[{"name":"daCheng","email":"xiangxiaoc@outlook.com","commits":1}]},"readingTime":{"minutes":0.62,"words":187},"filePathRelative":"linux/命令行工具/curl.md","localizedDate":"2022年1月9日","excerpt":"\\n<h2>简介</h2>\\n<p>用法</p>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">awk</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> [arg] </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'[condition]{code}'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> FILE</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">cat</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> FILE</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> | </span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">awk</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> ...</span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"> # 管道传递</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{k as comp,d as data};
