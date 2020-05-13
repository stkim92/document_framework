(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{414:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(9),l=(r(0),r(608)),i={},o={id:"Product/iMCU/W7500P/Peripherals-internal/IAP_Example",title:"IAP_Example",description:"# Flash_example (IAP example)",source:"@site/docs/Product/iMCU/W7500P/Peripherals-internal/IAP_Example.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/IAP_Example",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/IAP_Example.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],p={rightToc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"flash_example-iap-example"},"Flash_example (IAP example)"),Object(l.b)("hr",null),Object(l.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"file    : Flash/IAP_Example/readme.md"),Object(l.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(l.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(l.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(l.b)("li",{parentName:"ul"},"brief   : Description of IAP example.")),Object(l.b)("hr",null),Object(l.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"example-description"},"Example Description"),Object(l.b)("p",null,"This example shows how to use IAP of W7500."),Object(l.b)("p",null,"In this example:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SET Start address of Data memory & flash memory"),Object(l.b)("li",{parentName:"ul"},"Data0 area Erase , Read and Write Test (Start address :  0x0003_FE00, Size : 256)"),Object(l.b)("li",{parentName:"ul"},"Data1 area Erase, Read and Write Test (Start address : 0x0003_FF00, Size : 256)"),Object(l.b)("li",{parentName:"ul"},"Code Flash Block Rease, Read and Write Test (Start address : 0x0001F000, Size : 4096)")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"directory-contents"},"Directory contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Flash/IAP_Example/main.c                                (Main program)"),Object(l.b)("li",{parentName:"ul"},"Flash/IAP_Example/W7500x_it.c                           (Interrupt Handlers)"),Object(l.b)("li",{parentName:"ul"},"Flash/IAP_Example/W7500x_it.h                           (Interrupt Handlers Header file)"),Object(l.b)("li",{parentName:"ul"},"Flash/IAP_Example/W7500x_conf.h                         (Library Configuration file)"),Object(l.b)("li",{parentName:"ul"},"Flash/IAP_Example/MDK/W7500x_IAP_Example.uvproj     (MDK Project file)"),Object(l.b)("li",{parentName:"ul"},"Flash/IAP_Example/GCC/Makefile                          (GCC Make file)")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"No need to hardware setup")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(l.b)("p",null,"In order to make the program work, you must do the following :"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(l.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(l.b)("li",{parentName:"ul"},"Run the example."),Object(l.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(l.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},'"',Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))))),Object(l.b)("hr",null),Object(l.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}u.isMDXComponent=!0},608:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},b=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(r),O=a,s=b["".concat(i,".").concat(O)]||b[O]||m[O]||l;return r?n.a.createElement(s,o({ref:t},p,{components:r})):n.a.createElement(s,o({ref:t},p))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=O;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);