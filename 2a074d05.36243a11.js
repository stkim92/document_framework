(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{229:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(2),a=n(9),l=(n(0),n(623)),o={},i={id:"Product/iMCU/W7500/Peripherals-internal/ssp",title:"ssp",description:"# RNG example (Random number generation example)",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/ssp.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/ssp",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/ssp.md"},u=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]},{value:"Flow Chart",id:"flow-chart",children:[]}],b={rightToc:u};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"rng-example-random-number-generation-example"},"RNG example (Random number generation example)"),Object(l.b)("hr",null),Object(l.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"file    : Random_number_generation/readme.md"),Object(l.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(l.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(l.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(l.b)("li",{parentName:"ul"},"brief   : Description of random number generation example.")),Object(l.b)("hr",null),Object(l.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"example-description"},"Example Description"),Object(l.b)("p",null,"This example shows how to use RNG of W7500."),Object(l.b)("p",null,"In this example:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"1) Read power on initial random number"),Object(l.b)("li",{parentName:"ul"},"2) Read manual random number"),Object(l.b)("li",{parentName:"ul"},"3) Change Seed value & polynomial and read manual random number")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"directory-contents"},"Directory contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/main.c                                (Main program)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_it.c                           (Interrupt Handlers)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_it.h                           (Interrupt Handlers Header file)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/W7500x_conf.h                         (Library Configuration file)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/MDK/W7500x_Random_number_generation.uvproj     (MDK Project file)"),Object(l.b)("li",{parentName:"ul"},"RNG/Random_number_generation/GCC/Makefile                          (GCC Make file)")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"No need to hardware setup")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(l.b)("p",null,"In order to make the program work, you must do the following :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(l.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(l.b)("li",{parentName:"ul"},"Run the example."),Object(l.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(l.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'"',Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flow-chart"},"Flow Chart"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Read power on random number"),Object(l.b)("li",{parentName:"ul"},"Intialize to change RNG mode to manual run"),Object(l.b)("li",{parentName:"ul"},"Run RNG and STOP"),Object(l.b)("li",{parentName:"ul"},"Read generated random number"),Object(l.b)("li",{parentName:"ul"},"Change seed value or polynomial"),Object(l.b)("li",{parentName:"ul"},"And Run RNG and STOP again & read random number")),Object(l.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}c.isMDXComponent=!0},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),c=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},m=function(e){var t=c(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),m=c(n),O=r,d=m["".concat(o,".").concat(O)]||m[O]||p[O]||l;return n?a.a.createElement(d,i({ref:t},b,{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=O;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);