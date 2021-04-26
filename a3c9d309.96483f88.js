(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{382:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),l=(n(0),n(579)),i={id:"ssp",title:"Random number generator (RNG)",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/ssp",id:"Product/iMCU/W7500/Peripherals-internal/ssp",isDocsHomePage:!1,title:"Random number generator (RNG)",description:"********************",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\ssp.md",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/ssp",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/ssp.md",sidebar:"docs",previous:{title:"EXTI Sleep example",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/sleep"},next:{title:"System tick timer",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/systick"}},u=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]},{value:"Flow Chart",id:"flow-chart",children:[]}],c={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"file    : Random_number_generation/readme.md"),Object(l.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(l.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(l.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(l.b)("li",{parentName:"ul"},"brief   : Description of random number generation example.")),Object(l.b)("hr",null),Object(l.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"example-description"},"Example Description"),Object(l.b)("p",null,"This example shows how to use RNG of W7500."),Object(l.b)("p",null,"In this example:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"1) Read power on initial random number"),Object(l.b)("li",{parentName:"ul"},"2) Read manual random number"),Object(l.b)("li",{parentName:"ul"},"3) Change Seed value & polynomial and read manual random number")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"directory-contents"},"Directory contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/main.c                                (Main program)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_it.c                           (Interrupt Handlers)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_it.h                           (Interrupt Handlers Header file)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_conf.h                         (Library Configuration file)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/MDK/W7500x_Random_number_generation.uvproj     (MDK Project file)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/GCC/Makefile                          (GCC Make file)")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"No need to hardware setup")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(l.b)("p",null,"In order to make the program work, you must do the following :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(l.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(l.b)("li",{parentName:"ul"},"Run the example."),Object(l.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(l.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'"',Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://forum.wiznet.io/%22"}),'https://forum.wiznet.io/"'))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flow-chart"},"Flow Chart"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Read power on random number"),Object(l.b)("li",{parentName:"ul"},"Intialize to change RNG mode to manual run"),Object(l.b)("li",{parentName:"ul"},"Run RNG and STOP"),Object(l.b)("li",{parentName:"ul"},"Read generated random number"),Object(l.b)("li",{parentName:"ul"},"Change seed value or polynomial"),Object(l.b)("li",{parentName:"ul"},"And Run RNG and STOP again & read random number")),Object(l.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}b.isMDXComponent=!0},579:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,O=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?a.a.createElement(O,o(o({ref:t},c),{},{components:n})):a.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);