import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as i}from"./app-B3jraSy9.js";const s={};function l(p,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="ntp-系统时间同步服务" tabindex="-1"><a class="header-anchor" href="#ntp-系统时间同步服务"><span>NTP - 系统时间同步服务</span></a></h1><p>同步本机时间</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span><a href="#%E5%AE%89%E8%A3%85"></a>安装</span></a></h3><p>yum 包名称: ntp ntpdate</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span><a href="#%E9%85%8D%E7%BD%AE"></a>配置</span></a></h2><p><code>/etc/chrony.conf</code></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server &lt;time-server-host&gt; iburst</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 修改配置后重启 ntp server</span></span>
<span class="line"><span>systemctl restart chronyd</span></span>
<span class="line"><span># 开机自启</span></span>
<span class="line"><span>systemctl enable chronyd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ntpdate-工具" tabindex="-1"><a class="header-anchor" href="#ntpdate-工具"><span><a href="#ntpdate-%E5%B7%A5%E5%85%B7"></a>ntpdate 工具</span></a></h3><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 立即更新本机时间</span></span>
<span class="line"><span>ntpdate -u &lt;time-server-host&gt;</span></span>
<span class="line"><span># 调试查看连接并检测时间偏移</span></span>
<span class="line"><span>ntpdate -d &lt;time-server-host&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ntpq-p" tabindex="-1"><a class="header-anchor" href="#ntpq-p"><span><a href="#ntpq-p"></a>ntpq -p</span></a></h5><p>ntpq -p</p><ul><li>remote: 响应这个请求的NTP服务器的名称。</li><li>refid: NTP服务器使用的上一级ntp服务器。</li><li>st: remote远程服务器的级别.由于NTP是层型结构,有顶端的服务器,多层的Relay Server再到客户端.所以服务器从高到低级别可以设定为1-16. 为了减缓负荷和网络堵塞,原则上应该避免直接连接到级别为1的服务器的.</li><li>when: 上一次成功请求之后到现在的秒数。</li><li>poll: 本地机和远程服务器多少时间进行一次同步(单位为秒). 在一开始运行NTP的时候这个poll值会比较小,那样和服务器同步的频率也就增加了,可以尽快调整到正确的时间范围，之后poll值会逐渐增大,同步的频率也就会相应减小</li><li>reach: 这是一个八进制值,用来测试能否和服务器连接.每成功连接一次它的值就会增加</li><li>delay: 从本地机发送同步要求到ntp服务器的round trip time</li><li>offset: 主机通过NTP时钟同步与所同步时间源的时间偏移量，单位为毫秒（ms）。offset越接近于0,主机和ntp服务器的时间越接近</li><li>jitter: 这是一个用来做统计的值. 它统计了在特定个连续的连接数里offset的分布情况. 简单地说这个数值的绝对值越小，主机的时间就越精确</li></ul><h2 id="服务端配置" tabindex="-1"><a class="header-anchor" href="#服务端配置"><span><a href="#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%85%8D%E7%BD%AE"></a>服务端配置</span></a></h2><p>ubuntu: /etc/ntp.conf</p><h4 id="允许的ntp-client网段" tabindex="-1"><a class="header-anchor" href="#允许的ntp-client网段"><span><a href="#%E5%85%81%E8%AE%B8%E7%9A%84ntp-client%E7%BD%91%E6%AE%B5"></a>允许的NTP Client网段</span></a></h4><p>restrict 10.138.0.0 mask 255.255.0.0 nomodify</p>`,17)]))}const c=t(s,[["render",l],["__file","ntp.html.vue"]]),h=JSON.parse('{"path":"/linux/%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1/ntp.html","title":"NTP - 系统时间同步服务","lang":"zh-CN","frontmatter":{"date":"2022-01-09T00:00:00.000Z","category":"应用服务","tag":["Linux","系统基础服务"],"description":"NTP - 系统时间同步服务 同步本机时间 安装 yum 包名称: ntp ntpdate 配置 /etc/chrony.conf ntpdate 工具 ntpq -p ntpq -p remote: 响应这个请求的NTP服务器的名称。 refid: NTP服务器使用的上一级ntp服务器。 st: remote远程服务器的级别.由于NTP是层型结构,有...","head":[["meta",{"property":"og:url","content":"https://xiangcheng.site/linux/%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1/ntp.html"}],["meta",{"property":"og:site_name","content":"大橙的运维宝典"}],["meta",{"property":"og:title","content":"NTP - 系统时间同步服务"}],["meta",{"property":"og:description","content":"NTP - 系统时间同步服务 同步本机时间 安装 yum 包名称: ntp ntpdate 配置 /etc/chrony.conf ntpdate 工具 ntpq -p ntpq -p remote: 响应这个请求的NTP服务器的名称。 refid: NTP服务器使用的上一级ntp服务器。 st: remote远程服务器的级别.由于NTP是层型结构,有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-21T18:45:08.000Z"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"系统基础服务"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-21T18:45:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NTP - 系统时间同步服务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-21T18:45:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"ntpdate 工具","slug":"ntpdate-工具","link":"#ntpdate-工具","children":[]}]},{"level":2,"title":"服务端配置","slug":"服务端配置","link":"#服务端配置","children":[]}],"git":{"createdTime":1732214708000,"updatedTime":1732214708000,"contributors":[{"name":"daCheng","email":"xiangxiaoc@outlook.com","commits":1}]},"readingTime":{"minutes":1.79,"words":538},"filePathRelative":"linux/应用服务/ntp.md","localizedDate":"2022年1月9日","excerpt":"\\n<p>同步本机时间</p>\\n<h3><a class=\\"header-anchor\\" href=\\"#安装\\"><span></span></a><a href=\\"#%E5%AE%89%E8%A3%85\\"></a>安装</h3>\\n<p>yum 包名称: ntp ntpdate</p>\\n<h2><a class=\\"header-anchor\\" href=\\"#配置\\"><span></span></a><a href=\\"#%E9%85%8D%E7%BD%AE\\"></a>配置</h2>\\n<p><code>/etc/chrony.conf</code></p>\\n<div class=\\"language-plain line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"plain\\" data-title=\\"plain\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>server &lt;time-server-host&gt; iburst</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,h as data};