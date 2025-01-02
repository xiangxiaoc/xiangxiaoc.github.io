import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as e}from"./app-DLQUPJEp.js";const l={};function p(c,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="脚本参数" tabindex="-1"><a class="header-anchor" href="#脚本参数"><span>脚本参数</span></a></h1><h2 id="直接处理" tabindex="-1"><a class="header-anchor" href="#直接处理"><span>直接处理</span></a></h2><p>回顾一下</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$0   #即命令本身，相当于c/c++中的argv[0]</span></span>
<span class="line"><span>$1   #第一个参数</span></span>
<span class="line"><span>$2, $3, $4 ...   #第2、3、4个参数，依次类推</span></span>
<span class="line"><span>$#   #参数的个数，不包括命令本身</span></span>
<span class="line"><span>$@   #参数本身的列表，不包括命令本身</span></span>
<span class="line"><span>$*   #和$@相同，但&quot;$*&quot;和&quot;$@&quot;(加引号)并不同，</span></span>
<span class="line"><span>     #&quot;$*&quot;将所有的参数解释成一个字符串，而&quot;$@&quot;是一个参数数组</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getopts" tabindex="-1"><a class="header-anchor" href="#getopts"><span><a href="http://127.0.0.1:3334/md/?defaultMode=view&amp;fileId=F23AB7315C3C4E25BAAAB2BE2C29C48C#getopts" target="_blank" rel="noopener noreferrer"></a>getopts</span></a></h2><p>单个字符选项的情况（如：-n 10 -f file.txt等选项）</p><ul><li>getopts是bash的内部命令</li><li>getopts有两个参数，第一个参数是一个字符串，包括字符和“:”</li><li>每一个字符都是一个有效的选项（option），如果字符后面带有“:”，表示这个选项有自己的argument，argument保存在内置变量OPTARG中</li><li>$OPTIND总是存储原始$*中下一个要处理的元素位置</li><li>对于while getopts &quot;🅰️bc&quot; opt，第一个冒号表示忽略错误</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>echo original parameters=[$*]</span></span>
<span class="line"><span>echo original OPTIND=[$OPTIND]</span></span>
<span class="line"><span>while getopts &quot;:a:bc&quot; opt</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    case $opt in</span></span>
<span class="line"><span>        a)</span></span>
<span class="line"><span>            echo &quot;this is -a option. OPTARG=[$OPTARG] OPTIND=[$OPTIND]&quot;</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        b)</span></span>
<span class="line"><span>            echo &quot;this is -b option. OPTARG=[$OPTARG] OPTIND=[$OPTIND]&quot;</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        c)</span></span>
<span class="line"><span>            echo &quot;this is -c option. OPTARG=[$OPTARG] OPTIND=[$OPTIND]&quot;</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        ?)</span></span>
<span class="line"><span>            echo &quot;there is unrecognized parameter.&quot;</span></span>
<span class="line"><span>            exit 1</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>    esac</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>#通过shift $(($OPTIND - 1))的处理，$*中就只保留了除去选项内容的参数，</span></span>
<span class="line"><span>#可以在后面的shell程序中进行处理</span></span>
<span class="line"><span>shift $(($OPTIND - 1))</span></span>
<span class="line"><span>echo remaining parameters=[$*]</span></span>
<span class="line"><span>echo \\$1=[$1]</span></span>
<span class="line"><span>echo \\$2=[$2]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个例子</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>while getopts &quot;a:bc&quot; arg #选项后面的冒号表示该选项需要参数</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>        case $arg in</span></span>
<span class="line"><span>             a)</span></span>
<span class="line"><span>                echo &quot;a&#39;s arg:$OPTARG&quot; #参数存在$OPTARG中</span></span>
<span class="line"><span>                ;;</span></span>
<span class="line"><span>             b)</span></span>
<span class="line"><span>                echo &quot;b&quot;</span></span>
<span class="line"><span>                ;;</span></span>
<span class="line"><span>             c)</span></span>
<span class="line"><span>                echo &quot;c&quot;</span></span>
<span class="line"><span>                ;;</span></span>
<span class="line"><span>             ?)  #当有不认识的选项的时候arg为?</span></span>
<span class="line"><span>            echo &quot;unkonw argument&quot;</span></span>
<span class="line"><span>        exit 1</span></span>
<span class="line"><span>        ;;</span></span>
<span class="line"><span>        esac</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getopt" tabindex="-1"><a class="header-anchor" href="#getopt"><span><a href="http://127.0.0.1:3334/md/?defaultMode=view&amp;fileId=F23AB7315C3C4E25BAAAB2BE2C29C48C#getopt" target="_blank" rel="noopener noreferrer"></a>getopt</span></a></h2><p>可以处理单个字符选项，也可以处理长选项long-option（如：--prefix=/home等）</p><ul><li>getopt是一个外部命令，不是bash内置命令，Linux发行版通常会自带</li><li>getopt支持短选项和长选项</li><li>老版本的getopt问题较多，增强版getopt比较好用，执行命令getopt -T; echo $?，如果输出4，则代表是增强版的</li><li>如果短选项带argument且参数可选时，argument必须紧贴选项，如-carg 而不能是-c - arg</li><li>如果长选项带argument且参数可选时，argument和选项之间用“=”，如--clong=arg而不- 能是--clong arg</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>echo original parameters=[$@]</span></span>
<span class="line"><span>#-o或--options选项后面是可接受的短选项，如ab:c::，表示可接受的短选项为-a -b -c，</span></span>
<span class="line"><span>#其中-a选项不接参数，-b选项后必须接参数，-c选项的参数为可选的</span></span>
<span class="line"><span>#-l或--long选项后面是可接受的长选项，用逗号分开，冒号的意义同短选项。</span></span>
<span class="line"><span>#-n选项后接选项解析错误时提示的脚本名字</span></span>
<span class="line"><span>ARGS=\`getopt -o ab:c:: --long along,blong:,clong:: -n &quot;$0&quot; -- &quot;$@&quot;\`</span></span>
<span class="line"><span>if [ $? != 0 ]; then</span></span>
<span class="line"><span>    echo &quot;Terminating...&quot;</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>echo ARGS=[$ARGS]</span></span>
<span class="line"><span>#将规范化后的命令行参数分配至位置参数（$1,$2,...)</span></span>
<span class="line"><span>eval set -- &quot;\${ARGS}&quot;</span></span>
<span class="line"><span>echo formatted parameters=[$@]</span></span>
<span class="line"><span>while true</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>    case &quot;$1&quot; in</span></span>
<span class="line"><span>        -a|--along) </span></span>
<span class="line"><span>            echo &quot;Option a&quot;;</span></span>
<span class="line"><span>            shift</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        -b|--blong)</span></span>
<span class="line"><span>            echo &quot;Option b, argument $2&quot;;</span></span>
<span class="line"><span>            shift 2</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        -c|--clong)</span></span>
<span class="line"><span>            case &quot;$2&quot; in</span></span>
<span class="line"><span>                &quot;&quot;)</span></span>
<span class="line"><span>                    echo &quot;Option c, no argument&quot;;</span></span>
<span class="line"><span>                    shift 2  </span></span>
<span class="line"><span>                    ;;</span></span>
<span class="line"><span>                *)</span></span>
<span class="line"><span>                    echo &quot;Option c, argument $2&quot;;</span></span>
<span class="line"><span>                    shift 2;</span></span>
<span class="line"><span>                    ;;</span></span>
<span class="line"><span>            esac</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        --)</span></span>
<span class="line"><span>            shift</span></span>
<span class="line"><span>            break</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>        *)</span></span>
<span class="line"><span>            echo &quot;Internal error!&quot;</span></span>
<span class="line"><span>            exit 1</span></span>
<span class="line"><span>            ;;</span></span>
<span class="line"><span>    esac</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>#处理剩余的参数</span></span>
<span class="line"><span>echo remaining parameters=[$@]</span></span>
<span class="line"><span>echo \\$1=[$1]</span></span>
<span class="line"><span>echo \\$2=[$2]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试一下：</p><p>#短选项 ./getopt.sh -a -b1 -c2 file1 file2</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>original parameters=[-a -b1 -c2 file1 file2]</span></span>
<span class="line"><span>ARGS=[ -a -b &#39;1&#39; -c &#39;2&#39; -- &#39;file1&#39; &#39;file2&#39;]</span></span>
<span class="line"><span>formatted parameters=[-a -b 1 -c 2 -- file1 file2]</span></span>
<span class="line"><span>Option a</span></span>
<span class="line"><span>Option b, argument 1</span></span>
<span class="line"><span>Option c, argument 2</span></span>
<span class="line"><span>remaining parameters=[file1 file2]</span></span>
<span class="line"><span>$1=[file1]</span></span>
<span class="line"><span>$2=[file2]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#长选项 ./getopt.sh --along --blong=1 --clong=2 file1 file2</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>original parameters=[--along --blong=1 --clong=2 file1 file2]</span></span>
<span class="line"><span>ARGS=[ --along --blong &#39;1&#39; --clong &#39;2&#39; -- &#39;file1&#39; &#39;file2&#39;]</span></span>
<span class="line"><span>formatted parameters=[--along --blong 1 --clong 2 -- file1 file2]</span></span>
<span class="line"><span>Option a</span></span>
<span class="line"><span>Option b, argument 1</span></span>
<span class="line"><span>Option c, argument 2</span></span>
<span class="line"><span>remaining parameters=[file1 file2]</span></span>
<span class="line"><span>$1=[file1]</span></span>
<span class="line"><span>$2=[file2]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#长短混合</span></span>
<span class="line"><span># ./getopt.sh -a -b1 --clong=2 file1 file2</span></span>
<span class="line"><span>original parameters=[-a -b1 --clong=2 file1 file2]</span></span>
<span class="line"><span>ARGS=[ -a -b &#39;1&#39; --clong &#39;2&#39; -- &#39;file1&#39; &#39;file2&#39;]</span></span>
<span class="line"><span>formatted parameters=[-a -b 1 --clong 2 -- file1 file2]</span></span>
<span class="line"><span>Option a</span></span>
<span class="line"><span>Option b, argument 1</span></span>
<span class="line"><span>Option c, argument 2</span></span>
<span class="line"><span>remaining parameters=[file1 file2]</span></span>
<span class="line"><span>$1=[file1]</span></span>
<span class="line"><span>$2=[file2]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个例子</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#-o表示短选项，两个冒号表示该选项有一个可选参数，可选参数必须紧贴选项</span></span>
<span class="line"><span>#如-carg 而不能是-c arg</span></span>
<span class="line"><span>#--long表示长选项</span></span>
<span class="line"><span>#&quot;$@&quot;在上面解释过</span></span>
<span class="line"><span># -n:出错时的信息</span></span>
<span class="line"><span># -- ：举一个例子比较好理解：</span></span>
<span class="line"><span>#我们要创建一个名字为 &quot;-f&quot;的目录你会怎么办？</span></span>
<span class="line"><span># mkdir -f #不成功，因为-f会被mkdir当作选项来解析，这时就可以使用</span></span>
<span class="line"><span># mkdir -- -f 这样-f就不会被作为选项。</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>TEMP=\`getopt -o ab:c:: --long a-long,b-long:,c-long:: \\</span></span>
<span class="line"><span>     -n &#39;example.bash&#39; -- &quot;$@&quot;\`</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>if [ $? != 0 ] ; then echo &quot;Terminating...&quot; &gt;&amp;2 ; exit 1 ; fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Note the quotes around \`$TEMP&#39;: they are essential!</span></span>
<span class="line"><span>#set 会重新排列参数的顺序，也就是改变$1,$2...$n的值，这些值在getopt中重新排列过了</span></span>
<span class="line"><span>eval set -- &quot;$TEMP&quot;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>#经过getopt的处理，下面处理具体选项。</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>while true ; do</span></span>
<span class="line"><span>        case &quot;$1&quot; in</span></span>
<span class="line"><span>                -a|--a-long) echo &quot;Option a&quot; ; shift ;;</span></span>
<span class="line"><span>                -b|--b-long) echo &quot;Option b, argument \\\`$2&#39;&quot; ; shift 2 ;;</span></span>
<span class="line"><span>                -c|--c-long)</span></span>
<span class="line"><span>                        # c has an optional argument. As we are in quoted mode,</span></span>
<span class="line"><span>                        # an empty parameter will be generated if its optional</span></span>
<span class="line"><span>                        # argument is not found.</span></span>
<span class="line"><span>                        case &quot;$2&quot; in</span></span>
<span class="line"><span>                                &quot;&quot;) echo &quot;Option c, no argument&quot;; shift 2 ;;</span></span>
<span class="line"><span>                                *)  echo &quot;Option c, argument \\\`$2&#39;&quot; ; shift 2 ;;</span></span>
<span class="line"><span>                        esac ;;</span></span>
<span class="line"><span>                --) shift ; break ;;</span></span>
<span class="line"><span>                *) echo &quot;Internal error!&quot; ; exit 1 ;;</span></span>
<span class="line"><span>        esac</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span>echo &quot;Remaining arguments:&quot;</span></span>
<span class="line"><span>for arg do</span></span>
<span class="line"><span>   echo &#39;--&gt; &#39;&quot;\\\`$arg&#39;&quot; ;</span></span>
<span class="line"><span>done</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ bash test.sh -a -b arg arg1 -c</span></span>
<span class="line"><span>Option a</span></span>
<span class="line"><span>Option b, argument \`arg&#39;</span></span>
<span class="line"><span>Option c, no argument</span></span>
<span class="line"><span>Remaining arguments:</span></span>
<span class="line"><span>--&gt; \`arg1&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到,命令行中多了个arg1参数，在经过getopt和set之后，命令行会变为： -a -b arg -c -- arg1 $1指向-a,$2指向-b,$3指向arg,$ 4指向-c,$5指向--,而多出的arg1则被放到了最后</p><ol start="3"><li>举例 如将前面的ssh.exp、scp.exp封装起来，代码：</li></ol><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>######################  proc defination  ########################</span></span>
<span class="line"><span># ignore rule</span></span>
<span class="line"><span>ignore_init()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>        # ignore password</span></span>
<span class="line"><span>        array_ignore_pwd_length=0</span></span>
<span class="line"><span>        if [ -f ./ignore_pwd ]; then</span></span>
<span class="line"><span>                while read IGNORE_PWD</span></span>
<span class="line"><span>                do</span></span>
<span class="line"><span>                        array_ignore_pwd[$array_ignore_pwd_length]=$IGNORE_PWD</span></span>
<span class="line"><span>                        let array_ignore_pwd_length=$array_ignore_pwd_length+1</span></span>
<span class="line"><span>                done &lt; ./ignore_pwd</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        # ignore ip address</span></span>
<span class="line"><span>        array_ignore_ip_length=0</span></span>
<span class="line"><span>        if [ -f ./ignore_ip ]; then</span></span>
<span class="line"><span>                while read IGNORE_IP</span></span>
<span class="line"><span>                do</span></span>
<span class="line"><span>                        array_ignore_ip[$array_ignore_ip_length]=$IGNORE_IP</span></span>
<span class="line"><span>                        let array_ignore_ip_length=$array_ignore_ip_length+1</span></span>
<span class="line"><span>                done &lt; ./ignore_ip</span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>show_version()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>        echo &quot;version: 1.0&quot;</span></span>
<span class="line"><span>        echo &quot;updated date: 2014-01-09&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>show_usage()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>        echo -e &quot;\`printf %-16s &quot;Usage: $0&quot;\` [-h|--help]&quot;</span></span>
<span class="line"><span>        echo -e &quot;\`printf %-16s \` [-v|-V|--version]&quot;</span></span>
<span class="line"><span>        echo -e &quot;\`printf %-16s \` [-l|--iplist ... ]&quot;</span></span>
<span class="line"><span>        echo -e &quot;\`printf %-16s \` [-c|--config ... ]&quot;</span></span>
<span class="line"><span>        echo -e &quot;\`printf %-16s \` [-t|--sshtimeout ... ]&quot;</span></span>
<span class="line"><span>        echo -e &quot;\`printf %-16s \` [-T|--fttimeout ... ]&quot;</span></span>
<span class="line"><span>        echo -e &quot;\`printf %-16s \` [-L|--bwlimit ... ]&quot;</span></span>
<span class="line"><span>        echo -e &quot;\`printf %-16s \` [-n|--ignore]&quot;</span></span>
<span class="line"><span>        #echo &quot;ignr_flag: &#39;ignr&#39;-some ip will be ignored; otherwise-all ip will be handled&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># Default Parameters</span></span>
<span class="line"><span>myIFS=&quot;:::&quot;     # 配置文件中的分隔符</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>TOOLDIR=/root/scripts</span></span>
<span class="line"><span>cd $TOOLDIR</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>IPLIST=&quot;iplist.txt&quot;                     # IP列表，格式为IP 端口 用户名 密码</span></span>
<span class="line"><span>CONFIG_FILE=&quot;config.txt&quot;                # 命令列表和文件传送配置列表，关键字为com:::和file:::</span></span>
<span class="line"><span>IGNRFLAG=&quot;noignr&quot;                       # 如果置为ignr，则脚本会进行忽略条件的判断</span></span>
<span class="line"><span>SSHTIMEOUT=100                          # 远程命令执行相关操作的超时设定，单位为秒</span></span>
<span class="line"><span>SCPTIMEOUT=2000                         # 文件传送相关操作的超时设定，单位为秒</span></span>
<span class="line"><span>BWLIMIT=1024000                         # 文件传送的带宽限速，单位为kbit/s</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 入口参数分析</span></span>
<span class="line"><span>TEMP=\`getopt -o hvVl:c:t:T:L:n --long help,version,iplist:,config:,sshtimeout:,fttimeout:,bwlimit:,ignore -- &quot;$@&quot; 2&gt;/dev/null\`</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>[ $? != 0 ] &amp;&amp; echo -e &quot;\\033[31mERROR: unknown argument! \\033[0m\\n&quot; &amp;&amp; show_usage &amp;&amp; exit 1</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 会将符合getopt参数规则的参数摆在前面，其他摆在后面，并在最后面添加--</span></span>
<span class="line"><span>eval set -- &quot;$TEMP&quot;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>while :</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>        [ -z &quot;$1&quot; ] &amp;&amp; break;</span></span>
<span class="line"><span>        case &quot;$1&quot; in</span></span>
<span class="line"><span>                -h|--help)</span></span>
<span class="line"><span>                        show_usage; exit 0</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>                -v|-V|--version)</span></span>
<span class="line"><span>                        show_version; exit 0</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>                -l|--iplist)</span></span>
<span class="line"><span>                        IPLIST=$2; shift 2</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>                -c|--config)</span></span>
<span class="line"><span>                        CONFIG_FILE=$2; shift 2</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>                -t|--sshtimeout)</span></span>
<span class="line"><span>                        SSHTIMEOUT=$2; shift 2</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>                -T|--fttimeout)</span></span>
<span class="line"><span>                        SCPTIMEOUT=$2; shift 2</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>                -L|--bwlimit)</span></span>
<span class="line"><span>                        BWLIMIT=$2; shift 2</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>                -n|--ignore)</span></span>
<span class="line"><span>                        IGNRFLAG=&quot;ignr&quot;; shift</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>                --)</span></span>
<span class="line"><span>                        shift</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>                *)</span></span>
<span class="line"><span>                        echo -e &quot;\\033[31mERROR: unknown argument! \\033[0m\\n&quot; &amp;&amp; show_usage &amp;&amp; exit 1</span></span>
<span class="line"><span>                        ;;</span></span>
<span class="line"><span>        esac</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>################  main  #######################</span></span>
<span class="line"><span>BEGINDATETIME=\`date &quot;+%F %T&quot;\`</span></span>
<span class="line"><span>[ ! -f $IPLIST ] &amp;&amp; echo -e &quot;\\033[31mERROR: iplist \\&quot;$IPLIST\\&quot; not exists, please check! \\033[0m\\n&quot; &amp;&amp; exit 1</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>[ ! -f $CONFIG_FILE ] &amp;&amp; echo -e &quot;\\033[31mERROR: config \\&quot;$CONFIG_FILE\\&quot; not exists, please check! \\033[0m\\n&quot; &amp;&amp; exit 1</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>echo</span></span>
<span class="line"><span>echo &quot;You are using:&quot;</span></span>
<span class="line"><span>echo -e &quot;\`printf %-16s &quot;\\&quot;$CONFIG_FILE\\&quot;&quot;\` ---- as your config&quot;</span></span>
<span class="line"><span>echo -e &quot;\`printf %-16s &quot;\\&quot;$IPLIST\\&quot;&quot;\` ---- as your iplist&quot;</span></span>
<span class="line"><span>echo -e &quot;\`printf %-16s &quot;\\&quot;$SSHTIMEOUT\\&quot;&quot;\` ---- as your ssh timeout&quot;</span></span>
<span class="line"><span>echo -e &quot;\`printf %-16s &quot;\\&quot;$SCPTIMEOUT\\&quot;&quot;\` ---- as your scp timeout&quot;</span></span>
<span class="line"><span>echo -e &quot;\`printf %-16s &quot;\\&quot;$BWLIMIT\\&quot;&quot;\` ---- as your bwlimit&quot;</span></span>
<span class="line"><span>echo -e &quot;\`printf %-16s &quot;\\&quot;$IGNRFLAG\\&quot;&quot;\` ---- as your ignore flag&quot;</span></span>
<span class="line"><span>echo</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>[ -f ipnologin.txt ] &amp;&amp; rm -f ipnologin.txt</span></span>
<span class="line"><span>IPSEQ=0</span></span>
<span class="line"><span>while read IP PORT USER PASSWD PASSWD_2ND PASSWD_3RD PASSWD_4TH OTHERS</span></span>
<span class="line"><span>do</span></span>
<span class="line"><span>        [ -z &quot;\`echo $IP | grep -E &#39;^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}&#39;\`&quot; ] &amp;&amp; continue</span></span>
<span class="line"><span>        [ &quot;\`python $TOOLDIR/ckssh.py $IP $PORT\`&quot; == &#39;no&#39; ] &amp;&amp; echo &quot;$IP&quot; &gt;&gt; ipnologin.txt &amp;&amp; continue</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        let IPSEQ=$IPSEQ+1</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        # 如果启用了忽略，则进入忽略流程</span></span>
<span class="line"><span>        if [ $IGNRFLAG == &quot;ignr&quot; ]; then</span></span>
<span class="line"><span>                ignore_init</span></span>
<span class="line"><span>                ignored_flag=0</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                i=0</span></span>
<span class="line"><span>                while [ $i -lt $array_ignore_pwd_length ]</span></span>
<span class="line"><span>                do</span></span>
<span class="line"><span>                        [ \${PASSWD}x == \${array_ignore_pwd[$i]}x ] &amp;&amp; ignored_flag=1 &amp;&amp; break</span></span>
<span class="line"><span>                        let i=$i+1</span></span>
<span class="line"><span>                done</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                [ $ignored_flag -eq 1 ] &amp;&amp; continue</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                j=0</span></span>
<span class="line"><span>                while [ $j -lt $array_ignore_ip_length ]</span></span>
<span class="line"><span>                do</span></span>
<span class="line"><span>                        [ \${IP}x == \${array_ignore_ip[$j]}x ] &amp;&amp; ignored_flag=1 &amp;&amp; break</span></span>
<span class="line"><span>                        let j=$j+1</span></span>
<span class="line"><span>                done</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                [ $ignored_flag -eq 1 ] &amp;&amp; continue</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        ####### Try password from here ####</span></span>
<span class="line"><span>        for PW in $PASSWD $PASSWD_2ND $PASSWD_3RD $PASSWD_4TH</span></span>
<span class="line"><span>        do</span></span>
<span class="line"><span>                PASSWD_USE=$PW</span></span>
<span class="line"><span>                $TOOLDIR/ssh.exp $IP $USER $PW $PORT true $SSHTIMEOUT</span></span>
<span class="line"><span>                [ $? -eq 0 ] &amp;&amp; PASSWD_USE=$PW &amp;&amp; break</span></span>
<span class="line"><span>        done</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        # 针对一个$IP，执行配置文件中的一整套操作</span></span>
<span class="line"><span>        while read eachline</span></span>
<span class="line"><span>        do</span></span>
<span class="line"><span>                # 必须以com或file开头</span></span>
<span class="line"><span>                [ -z &quot;\`echo $eachline | grep -E &#39;^com|^file&#39;\`&quot; ] &amp;&amp; continue</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                myKEYWORD=\`echo $eachline | awk -F&quot;$myIFS&quot; &#39;{ print $1 }&#39;\`</span></span>
<span class="line"><span>                myCONFIGLINE=\`echo $eachline | awk -F&quot;$myIFS&quot; &#39;{ print $2 }&#39;\`</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                # 对配置文件中的预定义的可扩展特殊字符串进行扩展</span></span>
<span class="line"><span>                # 关键字#IP#，用$IP进行替换</span></span>
<span class="line"><span>                if [ ! -z &quot;\`echo &quot;$myCONFIGLINE&quot; | grep &#39;#IP#&#39;\`&quot; ]; then</span></span>
<span class="line"><span>                        myCONFIGLINE_temp=\`echo $myCONFIGLINE | sed &quot;s/#IP#/$IP/g&quot;\`</span></span>
<span class="line"><span>                        myCONFIGLINE=$myCONFIGLINE_temp</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                # 时间相关关键字，用当前时间进行替换</span></span>
<span class="line"><span>                if [ ! -z &quot;\`echo &quot;$myCONFIGLINE&quot; | grep &#39;#YYYY#&#39;\`&quot; ]; then</span></span>
<span class="line"><span>                        myYEAR=\`date +%Y\`</span></span>
<span class="line"><span>                        myCONFIGLINE_temp=\`echo $myCONFIGLINE | sed &quot;s/#YYYY#/$myYEAR/g&quot;\`</span></span>
<span class="line"><span>                        myCONFIGLINE=$myCONFIGLINE_temp</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                if [ ! -z &quot;\`echo &quot;$myCONFIGLINE&quot; | grep &#39;#MM#&#39;\`&quot; ]; then</span></span>
<span class="line"><span>                        myMONTH=\`date +%m\`</span></span>
<span class="line"><span>                        myCONFIGLINE_temp=\`echo $myCONFIGLINE | sed &quot;s/#MM#/$myMONTH/g&quot;\`</span></span>
<span class="line"><span>                        myCONFIGLINE=$myCONFIGLINE_temp</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                if [ ! -z &quot;\`echo &quot;$myCONFIGLINE&quot; | grep &#39;#DD#&#39;\`&quot; ]; then</span></span>
<span class="line"><span>                        myDATE=\`date +%d\`</span></span>
<span class="line"><span>                        myCONFIGLINE_temp=\`echo $myCONFIGLINE | sed &quot;s/#DD#/$myDATE/g&quot;\`</span></span>
<span class="line"><span>                        myCONFIGLINE=$myCONFIGLINE_temp</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                if [ ! -z &quot;\`echo &quot;$myCONFIGLINE&quot; | grep &#39;#hh#&#39;\`&quot; ]; then</span></span>
<span class="line"><span>                        myHOUR=\`date +%H\`</span></span>
<span class="line"><span>                        myCONFIGLINE_temp=\`echo $myCONFIGLINE | sed &quot;s/#hh#/$myHOUR/g&quot;\`</span></span>
<span class="line"><span>                        myCONFIGLINE=$myCONFIGLINE_temp</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                if [ ! -z &quot;\`echo &quot;$myCONFIGLINE&quot; | grep &#39;#mm#&#39;\`&quot; ]; then</span></span>
<span class="line"><span>                        myMINUTE=\`date +%M\`</span></span>
<span class="line"><span>                        myCONFIGLINE_temp=\`echo $myCONFIGLINE | sed &quot;s/#mm#/$myMINUTE/g&quot;\`</span></span>
<span class="line"><span>                        myCONFIGLINE=$myCONFIGLINE_temp</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                if [ ! -z &quot;\`echo &quot;$myCONFIGLINE&quot; | grep &#39;#ss#&#39;\`&quot; ]; then</span></span>
<span class="line"><span>                        mySECOND=\`date +%S\`</span></span>
<span class="line"><span>                        myCONFIGLINE_temp=\`echo $myCONFIGLINE | sed &quot;s/#ss#/$mySECOND/g&quot;\`</span></span>
<span class="line"><span>                        myCONFIGLINE=$myCONFIGLINE_temp</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                # IPSEQ关键字，用当前IP的序列号替换，从1开始</span></span>
<span class="line"><span>                if [ ! -z &quot;\`echo &quot;$myCONFIGLINE&quot; | grep &#39;#IPSEQ#&#39;\`&quot; ]; then</span></span>
<span class="line"><span>                        myCONFIGLINE_temp=\`echo $myCONFIGLINE | sed &quot;s/#IPSEQ#/$IPSEQ/g&quot;\`</span></span>
<span class="line"><span>                        myCONFIGLINE=$myCONFIGLINE_temp</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                # 配置文件中有关键字file:::，就调用scp.exp进行文件传送</span></span>
<span class="line"><span>                if [ &quot;$myKEYWORD&quot;x == &quot;file&quot;x ]; then</span></span>
<span class="line"><span>                        SOURCEFILE=\`echo $myCONFIGLINE | awk &#39;{ print $1 }&#39;\`</span></span>
<span class="line"><span>                        DESTDIR=\`echo $myCONFIGLINE | awk &#39;{ print $2 }&#39;\`</span></span>
<span class="line"><span>                        DIRECTION=\`echo $myCONFIGLINE | awk &#39;{ print $3 }&#39;\`</span></span>
<span class="line"><span>                        $TOOLDIR/scp.exp $IP $USER $PASSWD_USE $PORT $SOURCEFILE $DESTDIR $DIRECTION $BWLIMIT $SCPTIMEOUT</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                        [ $? -ne 0 ] &amp;&amp; echo -e &quot;\\033[31mSCP Try Out All Password Failed\\033[0m\\n&quot;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                # 配置文件中有关键字com:::，就调用ssh.exp进行远程命令执行</span></span>
<span class="line"><span>                elif [ &quot;$myKEYWORD&quot;x == &quot;com&quot;x ]; then</span></span>
<span class="line"><span>                        $TOOLDIR/ssh.exp $IP $USER $PASSWD_USE $PORT &quot;\${myCONFIGLINE}&quot; $SSHTIMEOUT</span></span>
<span class="line"><span>                        [ $? -ne 0 ] &amp;&amp; echo -e &quot;\\033[31mSSH Try Out All Password Failed\\033[0m\\n&quot;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>                else</span></span>
<span class="line"><span>                        echo &quot;ERROR: configuration wrong! [$eachline] &quot;</span></span>
<span class="line"><span>                        echo &quot;       where KEYWORD should not be [$myKEYWORD], but &#39;com&#39; or &#39;file&#39;&quot;</span></span>
<span class="line"><span>                        echo &quot;       if you dont want to run it, you can comment it with &#39;#&#39;&quot;</span></span>
<span class="line"><span>                        echo &quot;&quot;</span></span>
<span class="line"><span>                        exit</span></span>
<span class="line"><span>                fi</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>        done &lt; $CONFIG_FILE</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>done &lt; $IPLIST</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>ENDDATETIME=\`date &quot;+%F %T&quot;\`</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>echo &quot;$BEGINDATETIME -- $ENDDATETIME&quot;</span></span>
<span class="line"><span>echo &quot;$0 $* --excutes over!&quot;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>exit 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26)]))}const v=s(l,[["render",p],["__file","脚本参数.html.vue"]]),r=JSON.parse('{"path":"/notes/linux/Shell/%E8%84%9A%E6%9C%AC%E5%8F%82%E6%95%B0.html","title":"脚本参数","lang":"zh-CN","frontmatter":{"date":"2022-01-09T00:00:00.000Z","category":"Shell","tag":["语言特性"],"description":"脚本参数 直接处理 回顾一下 getopts 单个字符选项的情况（如：-n 10 -f file.txt等选项） getopts是bash的内部命令 getopts有两个参数，第一个参数是一个字符串，包括字符和“:” 每一个字符都是一个有效的选项（option），如果字符后面带有“:”，表示这个选项有自己的argument，argument保存在内置变...","head":[["meta",{"property":"og:url","content":"https://xiangcheng.site/notes/linux/Shell/%E8%84%9A%E6%9C%AC%E5%8F%82%E6%95%B0.html"}],["meta",{"property":"og:site_name","content":"大橙的运维宝典"}],["meta",{"property":"og:title","content":"脚本参数"}],["meta",{"property":"og:description","content":"脚本参数 直接处理 回顾一下 getopts 单个字符选项的情况（如：-n 10 -f file.txt等选项） getopts是bash的内部命令 getopts有两个参数，第一个参数是一个字符串，包括字符和“:” 每一个字符都是一个有效的选项（option），如果字符后面带有“:”，表示这个选项有自己的argument，argument保存在内置变..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-02T07:54:44.000Z"}],["meta",{"property":"article:tag","content":"语言特性"}],["meta",{"property":"article:published_time","content":"2022-01-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-02T07:54:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"脚本参数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-09T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-02T07:54:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"直接处理","slug":"直接处理","link":"#直接处理","children":[]},{"level":2,"title":"getopts","slug":"getopts","link":"#getopts","children":[]},{"level":2,"title":"getopt","slug":"getopt","link":"#getopt","children":[]}],"git":{"createdTime":1732214708000,"updatedTime":1735804484000,"contributors":[{"name":"daCheng","email":"xiangxiaoc@outlook.com","commits":1}]},"readingTime":{"minutes":8.33,"words":2499},"filePathRelative":"notes/linux/Shell/脚本参数.md","localizedDate":"2022年1月9日","excerpt":"\\n<h2>直接处理</h2>\\n<p>回顾一下</p>\\n<div class=\\"language-plain line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"plain\\" data-title=\\"plain\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>$0   #即命令本身，相当于c/c++中的argv[0]</span></span>\\n<span class=\\"line\\"><span>$1   #第一个参数</span></span>\\n<span class=\\"line\\"><span>$2, $3, $4 ...   #第2、3、4个参数，依次类推</span></span>\\n<span class=\\"line\\"><span>$#   #参数的个数，不包括命令本身</span></span>\\n<span class=\\"line\\"><span>$@   #参数本身的列表，不包括命令本身</span></span>\\n<span class=\\"line\\"><span>$*   #和$@相同，但\\"$*\\"和\\"$@\\"(加引号)并不同，</span></span>\\n<span class=\\"line\\"><span>     #\\"$*\\"将所有的参数解释成一个字符串，而\\"$@\\"是一个参数数组</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{v as comp,r as data};
