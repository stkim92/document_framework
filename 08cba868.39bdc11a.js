(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{516:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,j=m["".concat(o,".").concat(u)]||m[u]||s[u]||c;return n?r.a.createElement(j,p(p({ref:t},i),{},{components:n})):r.a.createElement(j,p({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),c=(n(0),n(516)),o={id:"how_to_use_gcc_for_w7500_peripherals_examples",title:"How to use GCC for W7500 Peripherals Examples",date:new Date("2020-04-20T00:00:00.000Z")},p={unversionedId:"Product/iMCU/W7500/documents/appnote/how_to_use_gcc_for_w7500_peripherals_examples",id:"Product/iMCU/W7500/documents/appnote/how_to_use_gcc_for_w7500_peripherals_examples",isDocsHomePage:!1,title:"How to use GCC for W7500 Peripherals Examples",description:"How to use the makefile with windows7",source:"@site/docs\\Product\\iMCU\\W7500\\documents\\appnote\\How_to_use_GCC_for_W7500_Peripherals_Examples.md",permalink:"/docs/Product/iMCU/W7500/documents/appnote/how_to_use_gcc_for_w7500_peripherals_examples",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/documents/appnote/How_to_use_GCC_for_W7500_Peripherals_Examples.md"},b=[{value:"Step 1. Gunwin32 Installation",id:"step-1-gunwin32-installation",children:[]},{value:"Step 2. Arm gcc Installation",id:"step-2-arm-gcc-installation",children:[]},{value:"Step 3. Execute the makefile",id:"step-3-execute-the-makefile",children:[]}],i={rightToc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"how-to-use-the-makefile-with-windows7"},"How to use the makefile with windows7"),Object(c.b)("hr",null),Object(c.b)("p",null,"(C) COPYRIGHT 2015 WIZnet"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(c.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(c.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(c.b)("li",{parentName:"ul"},"brief   : Description use a makefile with windows7."),Object(c.b)("li",{parentName:"ul"},"develop environment : Windows 7 32/64bits"),Object(c.b)("li",{parentName:"ul"},"arm-gcc version : gcc-arm-none-eabi-4_9-2015q1-20150306-win32")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-1-gunwin32-installation"},"Step 1. Gunwin32 Installation"),Object(c.b)("p",null,"\u203b For reference, gunwin32 operate both windows7 32bit and 64bit"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Enter a ",Object(c.b)("strong",{parentName:"p"},"gnuwin32")," in web search engine or visit the ",Object(c.b)("a",{href:"http://gnuwin32.sourceforge.net/",title:"http://gnuwin32.sourceforge.net/"}," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://gnuwin32.sourceforge.net/"}),"http://gnuwin32.sourceforge.net/")),"\n",Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/1_gnuwin32.jpg",alt:"gnuwin32"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the packages in left category.\n",Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/2_gnuwin32.jpg",alt:"gnuwin32"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Find the ",Object(c.b)("strong",{parentName:"p"},"Make")," file using scroll and click, Click the ",Object(c.b)("strong",{parentName:"p"},"Setup program")," in Download.\n",Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/3_gnuwin32.jpg",alt:"gnuwin32"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"When download time left as '0', you get the ",Object(c.b)("strong",{parentName:"p"},"setup file"),".\n",Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/4_gnuwin32.jpg",alt:"gnuwin32"})))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Finish the setup,copy the program setup path(you reach until ",Object(c.b)("strong",{parentName:"p"},"make.exe"),")"))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/5_gnuwin32.jpg",alt:"gnuwin32"}))),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"In my case,the setup path is ",Object(c.b)("strong",{parentName:"li"},"C:\\Program Files\\GnuWin32\\bin"))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/6_gnuwin32.jpg",alt:"gnuwin32"}))),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"Computer")," ",">"," ",Object(c.b)("strong",{parentName:"li"},"click the right of mouse"),"  ",">","  ",Object(c.b)("strong",{parentName:"li"},"properties")," ",">","  ",Object(c.b)("strong",{parentName:"li"},"Advanced")," ",">"," ",Object(c.b)("strong",{parentName:"li"},"Environment Variables")," ",">"," ",Object(c.b)("strong",{parentName:"li"},"System variables")," ",">","  ",Object(c.b)("strong",{parentName:"li"},"Edit"),">","  ",Object(c.b)("strong",{parentName:"li"}," variable value")," Copy and Paste.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/7_gnuwin32.jpg",alt:"gnuwin32"}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-2-arm-gcc-installation"},"Step 2. Arm gcc Installation"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"You can download the setup file from the ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://launchpad.net/gcc-arm-embedded/+download"}),'"https://launchpad.net/gcc-arm-embedded/+download"'),"\n(main post of ",Object(c.b)("strong",null,"2015.04.16"),")")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/1_armgcc.jpg",alt:"armgcc"})),"\n2. Download the ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe"}),"gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe"))," because I use the Windows7 32bit."),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"After choice the Language selection, click the ",Object(c.b)("strong",{parentName:"li"},"'OK'"))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/2_armgcc.jpg",alt:"armgcc"}))),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"The installation path setup and click the ",Object(c.b)("strong",{parentName:"li"},"'NEXT'"),", click the ",Object(c.b)("strong",{parentName:"li"},"'NEXT'")," again.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/4_armgcc.jpg",alt:"armgcc"}))),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},'Finally,Check the box "',Object(c.b)("strong",{parentName:"li"},"Add path to environment variale"),'" and click the ',Object(c.b)("strong",{parentName:"li"},"'Finish'"),"\n(If you check the box, It will automatically set the environment variable.)")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/5_armgcc.jpg",alt:"armgcc"}))),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"The command window will be opened,you can know the arm gcc setup path it. ")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/6_make.jpg",alt:"make"}))),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},"Confirm the version of arm gcc using the command of below.",Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"arm-none-eabi-gcc --version")))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/7_make.jpg",alt:"make"}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"step-3-execute-the-makefile"},"Step 3. Execute the makefile"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"You set the path, you want to compile gcc compile. and enter the ",Object(c.b)("strong",{parentName:"li"},"make"),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"make")," ")))),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/8_make.jpg",alt:"make"}))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"You can see the compile as below.\n",Object(c.b)("img",Object(a.a)({parentName:"li"},{src:"/img/products/w7500/documents/appnote/9_make.jpg",alt:"make"})))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"If success, the files will create. The path of make file is a place the makefile.")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/10_make.jpg",alt:"make"}))),Object(c.b)("h1",{id:"when-compile-error-occur"},"When compile error occur"),Object(c.b)("p",null,"If you can't compile or you don't create the files, you directly set the environment variable."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Computer")," ",">"," ",Object(c.b)("strong",{parentName:"p"},"click the right of mouse"),"  ",">","  ",Object(c.b)("strong",{parentName:"p"},"properties")," ",">","  ",Object(c.b)("strong",{parentName:"p"},"Advanced")," ",">"," ",Object(c.b)("strong",{parentName:"p"},"Environment Variables")," ",">"," ",Object(c.b)("strong",{parentName:"p"},"System variables")," ",">","  ",Object(c.b)("strong",{parentName:"p"},"Edit"),">","  ",Object(c.b)("strong",{parentName:"p"},"variable value")," Copy and Paste."),Object(c.b)("p",{parentName:"blockquote"},"Copy path is ",Object(c.b)("strong",{parentName:"p"},"c:\\Program Files\\GNU Tools ARM Embedded\\4.9 2015q1\\bin")," : setup path")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/documents/appnote/7_gnuwin32.jpg",alt:"gnuwin32"}))))}l.isMDXComponent=!0}}]);