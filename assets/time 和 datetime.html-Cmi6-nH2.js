import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as t,o as n}from"./app-Cz6B8gUp.js";const l={};function h(e,i){return n(),a("div",null,i[0]||(i[0]=[t(`<h1 id="time-和-datetime-内置时间处理" tabindex="-1"><a class="header-anchor" href="#time-和-datetime-内置时间处理"><span>time 和 datetime - 内置时间处理</span></a></h1><h2 id="datetime" tabindex="-1"><a class="header-anchor" href="#datetime"><span>datetime</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> datetime</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">####################</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># date 类</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">today </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> datetime.date.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">today</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">today.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">strftime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%y-%m-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 21-02-05</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">today.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">strftime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%Y-%m-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2021-02-05</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">today.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">strftime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/%Y&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 05/Feb/2021  nginx 日志</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 获取昨天的日期</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">yesterday </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> today </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> datetime.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">timedelta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">days</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">######################</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># datetime 类</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">now </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> datetime.datetime.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">now</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">now.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">strftime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%F</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 21-02-05</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">now.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">strftime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%Y-%m-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">_%H-%M-%S&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 2021-12-17_15-04-37</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">now.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">strftime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%Y%m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">_%H%M%S&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 20211217_150437</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">now.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">timestamp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 返回浮点型时间戳</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 获取一小时前的时间</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">one_hour_ago </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> now </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> datetime.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">timedelta</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">hours</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 时间戳转 datetime 对象</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">dt </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> datetime.datetime.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">fromtimestamp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1675753756</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 必须是 秒级时间戳 ( 200年内都是 10 位数字 )</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 具体的字符串格式转 datetime 对象</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">parsed_time </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> datetime.datetime.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">strptime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(time_str, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;%Y%m</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">%H%M%S&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 20211217150437</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="time" tabindex="-1"><a class="header-anchor" href="#time"><span>time</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> time</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># time 模块</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">now_timestamp </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> time.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">time</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#  1639724897.436</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const d=s(l,[["render",h],["__file","time 和 datetime.html.vue"]]),r=JSON.parse('{"path":"/python/%E5%86%85%E7%BD%AE%E5%BA%93/time%20%E5%92%8C%20datetime.html","title":"time 和 datetime - 内置时间处理","lang":"zh-CN","frontmatter":{"date":"2022-01-09T00:00:00.000Z","category":"python","tag":["python基础"],"description":"time 和 datetime - 内置时间处理 datetime time","head":[["meta",{"property":"og:url","content":"https://xiangcheng.site/python/%E5%86%85%E7%BD%AE%E5%BA%93/time%20%E5%92%8C%20datetime.html"}],["meta",{"property":"og:site_name","content":"大橙的运维宝典"}],["meta",{"property":"og:title","content":"time 和 datetime - 内置时间处理"}],["meta",{"property":"og:description","content":"time 和 datetime - 内置时间处理 datetime time"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T18:45:08.000Z"}],["meta",{"property":"article:tag","content":"python基础"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-21T18:45:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"time 和 datetime - 内置时间处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-21T18:45:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"datetime","slug":"datetime","link":"#datetime","children":[]},{"level":2,"title":"time","slug":"time","link":"#time","children":[]}],"git":{"createdTime":1732214708000,"updatedTime":1732214708000,"contributors":[{"name":"daCheng","email":"xiangxiaoc@outlook.com","commits":1}]},"readingTime":{"minutes":0.57,"words":172},"filePathRelative":"python/内置库/time 和 datetime.md","localizedDate":"2022年1月9日","excerpt":"\\n<h2>datetime</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> datetime</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">####################</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># date 类</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">today </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> datetime.date.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">today</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">today.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">strftime</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"%y-%m-</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">%d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)  </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 21-02-05</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">today.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">strftime</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"%Y-%m-</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">%d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)  </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 2021-02-05</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">today.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">strftime</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">%d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">/</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">%b</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">/%Y\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)  </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 05/Feb/2021  nginx 日志</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 获取昨天的日期</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">yesterday </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> today </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">-</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> datetime.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">timedelta</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">days</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">######################</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># datetime 类</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">now </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> datetime.datetime.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">now</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">now.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">strftime</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">%F</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)  </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 21-02-05</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">now.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">strftime</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"%Y-%m-</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">%d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">_%H-%M-%S\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)  </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 2021-12-17_15-04-37</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">now.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">strftime</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"%Y%m</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">%d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">_%H%M%S\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)  </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 20211217_150437</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">now.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">timestamp</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()  </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 返回浮点型时间戳</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 获取一小时前的时间</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">one_hour_ago </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> now </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">-</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> datetime.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">timedelta</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">hours</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 时间戳转 datetime 对象</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">dt </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> datetime.datetime.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">fromtimestamp</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1675753756</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 必须是 秒级时间戳 ( 200年内都是 10 位数字 )</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 具体的字符串格式转 datetime 对象</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">parsed_time </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> datetime.datetime.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#61AFEF\\">strptime</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(time_str, </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"%Y%m</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">%d</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">%H%M%S\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 20211217150437</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,r as data};
