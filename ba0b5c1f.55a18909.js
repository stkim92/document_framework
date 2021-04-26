(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{426:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var o=r(2),n=r(6),i=(r(0),r(578)),a={id:"how_to_use_mdk_for_w7500",title:"How to use MDK for W7500 Peripherals Examples",date:new Date("2020-04-08T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_use_mdk_for_w7500",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_use_mdk_for_w7500",isDocsHomePage:!1,title:"How to use MDK for W7500 Peripherals Examples",description:"********************",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500P\\How_to_use_MDK_for_W7500_Peripherals_Examples.md",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_use_mdk_for_w7500",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/How_to_use_MDK_for_W7500_Peripherals_Examples.md",sidebar:"docs",previous:{title:"How to make W7500 Keil Project",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_make_w7500_keil_project"},next:{title:"How to use the makefile with windows 7",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500P/how_to_use_makefile_with_windows7"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Download W7500 library and example",id:"download-w7500-library-and-example",children:[]},{value:"Directory structure",id:"directory-structure",children:[]},{value:"Example of WZTOE directory",id:"example-of-wztoe-directory",children:[]},{value:"Open Keil project",id:"open-keil-project",children:[]},{value:"Compile",id:"compile",children:[]},{value:"Download code",id:"download-code",children:[]},{value:"Connect to WIZwiki-W7500 and do the loopback test",id:"connect-to-wizwiki-w7500-and-do-the-loopback-test",children:[]}],p={rightToc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of How to use W7500 Peripheral example with Keil project.")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This application note guides user to use W7500 peripheral examples with Keil uVision compiler. Here we use TCP/IP core Offload Engine(TOE) among W7500 peripherals and loopback test example as sample."),Object(i.b)("p",null,"This document is based on Keil uVision MDK-Lite version:5.14.0.0 compiler and WIZwiki-W7500 platform as hardware."),Object(i.b)("h2",{id:"download-w7500-library-and-example"},"Download W7500 library and example"),Object(i.b)("p",null,"You can download the library and example zip file at ","[link]",".\nDownload and abstract the file then you can see some folder."),Object(i.b)("h2",{id:"directory-structure"},"Directory structure"),Object(i.b)("p",null,"The extracted files consist of the CMSIS, driver and peripheral example.\nThe W7500 standard peripheral library provides a rich set of examples covering the main features of each peripheral. "),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/w7500/overview/directory.jpg",alt:null,title:"Figure 1 W7500 library and example directory"}))),Object(i.b)("h2",{id:"example-of-wztoe-directory"},"Example of WZTOE directory"),Object(i.b)("p",null,"In WZTOE folder, directory structure is as follows."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/w7500/overview/directory3.jpg",alt:null}))),Object(i.b)("p",null,"DHCPClient, DNSClient and LoopbackTest are example project and ioLibrary contains library of socket APIs, DHCP APIs, DNS APIs and etc."),Object(i.b)("p",null,"In LoopbackTest folder, directory structure is as follows."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/w7500/overview/directory2.jpg",alt:null}))),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"main.c")," file is main body of the project. "),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"retarget.c")," file is for using printf function for debug. "),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"W7500x_conf.h")," file contains all peripheral headers.\nIf you want to enable/disable peripheral header file, uncomment/comment the line."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"W7500x_it.c")," file contains interrupt handlers for the project."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"readme.md")," file contains the example description, hardware and software environment and description of how to use."),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"MDK")," folder is for Keil IDE compiler and the ",Object(i.b)("strong",{parentName:"p"},"GCC")," folder is for GCC compiler."),Object(i.b)("h2",{id:"open-keil-project"},"Open Keil project"),Object(i.b)("p",null,"In MDK directory is here a file: Keil project file. Double click the file, then Keil uVision will be opened."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/w7500/overview/project_explorer.jpg",alt:null}))),Object(i.b)("p",null,"You can see upper image at left side on your uVision. In ",Object(i.b)("strong",{parentName:"p"},"W7500x_Periph")," group are peripheral drivers which are used for this project.\nThe ",Object(i.b)("strong",{parentName:"p"},"User")," group contains main function."),Object(i.b)("h2",{id:"compile"},"Compile"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/w7500/overview/compile.jpg",alt:null}))),Object(i.b)("p",null,"Click the build icon on menu bar or 'F7'. Then compile will be done. After compile, ",Object(i.b)("strong",{parentName:"p"},"W7500x_WZTOE_Loopback.bin")," file is generated in Obj folder."),Object(i.b)("h2",{id:"download-code"},"Download code"),Object(i.b)("p",null,"WIZwiki-W7500 board supports CMSIS-DAP, so you can just drag & drop the code file to download into 'mbed' directory on your system."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/w7500/overview/draganddrop.jpg",alt:null}))),Object(i.b)("h2",{id:"connect-to-wizwiki-w7500-and-do-the-loopback-test"},"Connect to WIZwiki-W7500 and do the loopback test"),Object(i.b)("p",null,"Now, WIZwiki-W7500 is running TCP server: IP - 192.168.77.9, PORT - 5000.\nType IP address and Port number(This application note use Hercules as TCP client program). And then click 'Connect' button."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/w7500/overview/tcp_client1.jpg",alt:null}))),Object(i.b)("p",null,"After connection, send some string and you can see the same as you sent."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/w7500/overview/tcp_client2.jpg",alt:null}))))}b.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(r),s=o,m=d["".concat(a,".").concat(s)]||d[s]||u[s]||i;return r?n.a.createElement(m,l(l({ref:t},p),{},{components:r})):n.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);