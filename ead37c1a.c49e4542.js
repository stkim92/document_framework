(window.webpackJsonp=window.webpackJsonp||[]).push([[437],{572:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(2),i=r(9),a=(r(0),r(620)),l={},o={id:"Product/iMCU/W7500P/Peripherals-internal/timerrun",title:"timerrun",description:"# Dual Timer TimerRun example\r",source:"@site/docs\\Product\\iMCU\\W7500P\\Peripherals-internal\\timerrun.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/timerrun",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/timerrun.md"},u=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],c={rightToc:u};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"dual-timer-timerrun-example"},"Dual Timer TimerRun example"),Object(a.b)("hr",null),Object(a.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"file    : DualTimer/TimerRun/readme.md"),Object(a.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(a.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(a.b)("li",{parentName:"ul"},"date    : 01-May-2015"),Object(a.b)("li",{parentName:"ul"},"brief   : Description of the Dual timer TimerRun example.")),Object(a.b)("hr",null),Object(a.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"example-description"},"Example Description"),Object(a.b)("p",null,"This example shows how to use the Dual timer peripheral to run. Only dual timer 0-0 is working in this example."),Object(a.b)("p",null,"The Dual timer 0-0 frequency is set to SystemCoreClock(Hz), and the clock is divided by 16.\nSystemCoreClock is set to 20 MHz."),Object(a.b)("p",null,"The dual timer is configured in wrapping mode and periodic mode. The counter size is 32-bit.\nThe interrupt is enabled. "),Object(a.b)("p",null,"When the Counter reaches 0, the interrupt is occurred and RED LED(PC.08) is toggled every times. "),Object(a.b)("hr",null),Object(a.b)("h3",{id:"directory-contents"},"Directory contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"DualTimer/TimerRun/main.c                  (Main program) "),Object(a.b)("li",{parentName:"ul"},"DualTimer/TimerRun/W7500x_it.c             (Interrupt Handlers)"),Object(a.b)("li",{parentName:"ul"},"DualTimer/TimerRun/W7500x_it.h             (Interrupt Handlers Header file)"),Object(a.b)("li",{parentName:"ul"},"DualTimer/TimerRun/W7500x_conf.h           (Library Configuration file)"),Object(a.b)("li",{parentName:"ul"},"DualTimer/TimerRun/MDK/W7500x_Dualtimer_TimerRun.uvproj     (MDK Project file)"),Object(a.b)("li",{parentName:"ul"},"DualTimer/TimerRun/GCC/Makefile            (GCC Make file)")),Object(a.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),Object(a.b)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example.  "),Object(a.b)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Use RED LED connected to PC_08 pin.    "),Object(a.b)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1.    ")))),Object(a.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(a.b)("p",null,"In order to make the program work, you must do the following :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Open your preferred toolchain.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Run the example.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If you have any questions, please use the forum site."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'"',Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))),Object(a.b)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))))}b.isMDXComponent=!0},620:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=b(r),O=n,s=p["".concat(l,".").concat(O)]||p[O]||m[O]||a;return r?i.a.createElement(s,o({ref:t},c,{components:r})):i.a.createElement(s,o({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=O;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);