(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(617)),i={},l={id:"Product/iMCU/W7500P/Peripherals-internal/deadzonegeneration",title:"deadzonegeneration",description:"# Dead-Zone generation example\r",source:"@site/docs\\Product\\iMCU\\W7500P\\Peripherals-internal\\deadzonegeneration.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/deadzonegeneration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/deadzonegeneration.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"dead-zone-generation-example"},"Dead-Zone generation example"),Object(o.b)("hr",null),Object(o.b)("p",null,"(C) COPYRIGHT 2015 WIZnet"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"file    : PWM/DeadZoneGeneration/readme.md"),Object(o.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(o.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(o.b)("li",{parentName:"ul"},"date    : 01-May-2015"),Object(o.b)("li",{parentName:"ul"},"brief   : Description of the Dead-zone generation example.")),Object(o.b)("hr",null),Object(o.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"example-description"},"Example Description"),Object(o.b)("p",null,"This example shows how to use the PWM peripheral to run Dead-zone generation."),Object(o.b)("p",null,"The PWM channel 0 frequency is set to SystemCoreClock(Hz), the Prescaler is 2\nso the PWM channel 0 counter clock is 10 MHz. SystemCoreClock is set to 20 MHz."),Object(o.b)("p",null,"The PWM channel 0 is set as up-count and periodic mode, and the dead-zone counter value is set as 100. The PWM output is enabled. So as a result, the output of PWM channel 1 is inverted the PWM channel 0 output."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"note:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If you want to use the PWM channel 0 as dead-zone generation, the PWM channel 1 output MUST be disabled.")))),Object(o.b)("p",null,"The PWM channel 0 output is mapped to PC_00, and inverted output is mapped to PC_01(The PWM channel 1 output). "),Object(o.b)("hr",null),Object(o.b)("h3",{id:"directory-contents"},"Directory contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/main.c                        (Main program) "),Object(o.b)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/W7500x_it.c                   (Interrupt Handlers)"),Object(o.b)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/W7500x_it.h                   (Interrupt Handlers Header file)"),Object(o.b)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/W7500x_conf.h                 (Library Configuration file)"),Object(o.b)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/MDK/W7500x_PWM_DeadZoneGeneration.uvproj (MDK Project file)"),Object(o.b)("li",{parentName:"ul"},"PWM/DeadZoneGeneration/GCC/Makefile                  (GCC Make file)")),Object(o.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),Object(o.b)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),Object(o.b)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"PA_00 pin generates the PWM channel 0 output signal."),Object(o.b)("li",{parentName:"ul"},"PA_01 pin generates the inverted PWM channel 0 output signal.        "),Object(o.b)("li",{parentName:"ul"},"In order to use the PWM channel 0(PA_00) to be changed from PAD_AF0 to PAD_AF2."),Object(o.b)("li",{parentName:"ul"},"In order to use the inverted PWM channel 0(PA_01) to be changed from PAD_AF0 to PAD_AF2.")))),Object(o.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(o.b)("p",null,"In order to make the program work, you must do the following :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(o.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(o.b)("li",{parentName:"ul"},"Run the example."),Object(o.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(o.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"',Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))))),Object(o.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd. "))}p.isMDXComponent=!0},617:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,O=b["".concat(i,".").concat(s)]||b[s]||d[s]||o;return n?a.a.createElement(O,l({ref:t},u,{components:n})):a.a.createElement(O,l({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);