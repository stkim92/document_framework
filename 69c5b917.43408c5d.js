(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{341:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),i=(n(0),n(623)),l={},o={id:"Product/iMCU/W7500/Peripherals-internal/dnsclient",title:"dnsclient",description:"# DNSClient for TCPIP Offload Engine example",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/dnsclient.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/dnsclient",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/dnsclient.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],b={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"dnsclient-for-tcpip-offload-engine-example"},"DNSClient for TCPIP Offload Engine example"),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"file    : WZTOE/DNSClient/readme.md"),Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of the TCP adn UDP Loopback example.")),Object(i.b)("hr",null),Object(i.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-description"},"Example Description"),Object(i.b)("p",null,"This example shows how to use DNS Client in UDP mode."),Object(i.b)("p",null,"In this example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1) Domain Name Service Client in UDP mode"),Object(i.b)("li",{parentName:"ul"},"2) For more detail, please visit ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/tcp_function"}),"TCP Function description"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory-contents"},"Directory contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WZTOE/ioLibrary/Ethernet/socket.c                     (socket APIs)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/ioLibrary/Ethernet/wizchip_config.c             (WZTOE Config.)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/ioLibrary/Internet/dhcp.c                       (DHCP Client)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/ioLibrary/Internet/dns.c                        (DNS Client)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/ioLibrary/MDIO/W7500x_miim.c                    (mdio via gpio)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/DNSClient/main.c                                (Main program)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/DNSClient/W7500x_it.c                           (Interrupt Handlers)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/DNSClient/W7500x_it.h                           (Interrupt Handlers Header file)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/DNSClient/W7500x_conf.h                         (Library Configuration file)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/DNSClient/MDK/W7500x_WZTOE_DNSClient.uvproj  (MDK Project file)"),Object(i.b)("li",{parentName:"ul"},"WZTOE/DNSClient/GCC/Makefile                          (GCC Make file)")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use PB_14 and PB_15 for MDIO"),Object(i.b)("li",{parentName:"ul"},"In order to use IC+101 PHY to be set Pull-up and Strength at TXD","[3:0]"," and TXE"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Hardware Connection"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"PB_14 --- MDIO (@IC+101)"),Object(i.b)("li",{parentName:"ul"},"PB_15 --- MDC  (@IC+101)")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(i.b)("p",null,"In order to make the program work, you must do the following :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(i.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(i.b)("li",{parentName:"ul"},"Run the example."),Object(i.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(i.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))))),Object(i.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}u.isMDXComponent=!0},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||O[m]||i;return n?a.a.createElement(d,o({ref:t},b,{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);