(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(578)),c={id:"how_to_use_makefile_with_windows7",title:"How to use the makefile with windows 7",date:new Date("2020-04-08T00:00:00.000Z")},o={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_use_makefile_with_windows7",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_use_makefile_with_windows7",isDocsHomePage:!1,title:"How to use the makefile with windows 7",description:"********************",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500ECO\\How_to_use_gcc_for_W7500_Peripherals_Examples.md",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_use_makefile_with_windows7",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/How_to_use_gcc_for_W7500_Peripherals_Examples.md",sidebar:"docs",previous:{title:"How to use MDK for W7500 Peripherals Examples",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_use_mdk_for_w7500"},next:{title:"How to use ISP tool",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_use_isp_tool"}},b=[{value:"Step 1. Gunwin32 Installation",id:"step-1-gunwin32-installation",children:[]},{value:"Step 2. Arm gcc Installation",id:"step-2-arm-gcc-installation",children:[]},{value:"Step 3. Execute the makefile",id:"step-3-execute-the-makefile",children:[]}],l={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description use a makefile with windows7."),Object(i.b)("li",{parentName:"ul"},"develop environment : Windows 7 32/64bits"),Object(i.b)("li",{parentName:"ul"},"arm-gcc version : gcc-arm-none-eabi-4_9-2015q1-20150306-win32")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"step-1-gunwin32-installation"},"Step 1. Gunwin32 Installation"),Object(i.b)("p",null,"\u203b For reference, gunwin32 operate both windows7 32bit and 64bit"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter a ",Object(i.b)("strong",{parentName:"p"},"gnuwin32")," in web search engine or visit the ",Object(i.b)("a",{href:"http://gnuwin32.sourceforge.net/",title:"http://gnuwin32.sourceforge.net/"}," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://gnuwin32.sourceforge.net/"}),"http://gnuwin32.sourceforge.net/")),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/1_gnuwin32.jpg",alt:"gnuwin32",title:"gnuwin32"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click the packages in left category.\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/2_gnuwin32.jpg",alt:"gnuwin32",title:"gnuwin32"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Find the ",Object(i.b)("strong",{parentName:"p"},"Make")," file using scroll and click, Click the ",Object(i.b)("strong",{parentName:"p"},"Setup program")," in Download.\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/3_gnuwin32.jpg",alt:"gnuwin32",title:"gnuwin32"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When download time left as '0', you get the ",Object(i.b)("strong",{parentName:"p"},"setup file"),".\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/4_gnuwin32.jpg",alt:"gnuwin32",title:"gnuwin32"})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Finish the setup,copy the program setup path(you reach until ",Object(i.b)("strong",{parentName:"p"},"make.exe"),")"))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/5_gnuwin32.jpg",alt:"gnuwin32",title:"gnuwin32"}))),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"In my case,the setup path is ",Object(i.b)("strong",{parentName:"li"},"C:\\Program Files\\GnuWin32\\bin"))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/6_gnuwin32.jpg",alt:"gnuwin32",title:"gnuwin32"}))),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Computer")," ",">"," ",Object(i.b)("strong",{parentName:"li"},"click the right of mouse"),"  ",">","  ",Object(i.b)("strong",{parentName:"li"},"properties")," ",">","  ",Object(i.b)("strong",{parentName:"li"},"Advanced")," ",">"," ",Object(i.b)("strong",{parentName:"li"},"Environment Variables")," ",">"," ",Object(i.b)("strong",{parentName:"li"},"System variables")," ",">","  ",Object(i.b)("strong",{parentName:"li"},"Edit"),">","  ",Object(i.b)("strong",{parentName:"li"}," variable value")," Copy and Paste.")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/7_gnuwin32.jpg",alt:"gnuwin32",title:"gnuwin32"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"step-2-arm-gcc-installation"},"Step 2. Arm gcc Installation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You can download the setup file from the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://launchpad.net/gcc-arm-embedded/+download"}),'"https://launchpad.net/gcc-arm-embedded/+download"'),"\n(main post of ",Object(i.b)("strong",{parentName:"li"},"2015.04.16"),")")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/1_armgcc.jpg",alt:"armgcc",title:"armgcc"}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Download the ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe"}),"gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe"))," because I use the Windows7 32bit.")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"After choice the Language selection, click the ",Object(i.b)("strong",{parentName:"li"},"'OK'"))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/2_armgcc.jpg",alt:"armgcc ",title:"armgcc"}))),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"The installation path setup and click the ",Object(i.b)("strong",{parentName:"li"},"'NEXT'"),", click the ",Object(i.b)("strong",{parentName:"li"},"'NEXT'")," again.")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/4_armgcc.jpg",alt:"armgcc ",title:"armgcc"}))),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},'Finally, check the box "',Object(i.b)("strong",{parentName:"li"},"Add path to environment variale"),'" and click the ',Object(i.b)("strong",{parentName:"li"},"'Finish'"),"\n(If you check the box, It will automatically set the environment variable.)")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/5_armgcc.jpg",alt:"armgcc ",title:"armgcc"}))),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},"The command window will be opened,you can know the arm gcc setup path it. ")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/6_make.jpg",alt:"make",title:"make"}))),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"Confirm the version of arm gcc using the command of below.",Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"arm-none-eabi-gcc --version")))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/7_make.jpg",alt:"make",title:"make"}))),Object(i.b)("h2",{id:"step-3-execute-the-makefile"},"Step 3. Execute the makefile"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"You set the path, you want to compile gcc compile. and enter the ",Object(i.b)("strong",{parentName:"li"},"make"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"make")," ")))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/8_make.jpg",alt:"make",title:"make"}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"You can see the compile as below.\n",Object(i.b)("img",Object(a.a)({parentName:"li"},{src:"/img/products/w7500/overview/9_make.jpg",alt:"make",title:"make"})))),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"If success, the files will create. The path of make file is a place the makefile.")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/10_make.jpg",alt:"make",title:"make"}))),Object(i.b)("h1",{id:"when-compile-error-occur"},"When compile error occur"),Object(i.b)("p",null,"If you can't compile or you don't create the files, you directly set the environment variable."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Computer")," ",">"," ",Object(i.b)("strong",{parentName:"p"},"click the right of mouse"),"  ",">","  ",Object(i.b)("strong",{parentName:"p"},"properties")," ",">","  ",Object(i.b)("strong",{parentName:"p"},"Advanced")," ",">"," ",Object(i.b)("strong",{parentName:"p"},"Environment Variables")," ",">"," ",Object(i.b)("strong",{parentName:"p"},"System variables")," ",">","  ",Object(i.b)("strong",{parentName:"p"},"Edit"),">","  ",Object(i.b)("strong",{parentName:"p"},"variable value")," Copy and Paste.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Copy path is ",Object(i.b)("strong",{parentName:"p"},"c:\\Program Files\\GNU Tools ARM Embedded\\4.9 2015q1\\bin")," : setup path")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/7_gnuwin32.jpg",alt:"gnuwin32",title:"gnuwin32"}))))}p.isMDXComponent=!0},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return n?r.a.createElement(g,o(o({ref:t},l),{},{components:n})):r.a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);