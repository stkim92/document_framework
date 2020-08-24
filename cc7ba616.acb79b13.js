(window.webpackJsonp=window.webpackJsonp||[]).push([[415],{469:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(581)),o={id:"wdtreset",title:"WDT Reset example",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/wdtreset",id:"Product/iMCU/W7500/Peripherals-internal/wdtreset",isDocsHomePage:!1,title:"WDT Reset example",description:"********************",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\wdtreset.md",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/wdtreset",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/wdtreset.md",sidebar:"docs",previous:{title:"Watchdog Timer (WDT)",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/wdt"},next:{title:"How to install KEIL",permalink:"/docs/Product/iMCU/W7500/documents/appnote/how_to_install_KEIL"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"file    : WDT/WDTReset/readme.md"),Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 01-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of the Watchdog timer reset example.")),Object(i.b)("hr",null),Object(i.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-description"},"Example Description"),Object(i.b)("p",null,"This example shows how to use the Watchdog timer peripheral to run and generate watchdog reset request signal. External interrupt is used for generating hardfault and watchdog timer reset. EXTI line is mapped to PA_00"),Object(i.b)("p",null,"The Watchdog timer frequency is set to SystemCoreClock(Hz). SystemCoreClock is set to 20 MHz."),Object(i.b)("p",null,"Reset information is checked at first, and then if reset is not occurred by watchdog timer, watchdog timer is set and started. Untill external interrupt is occurred, WDT counter is set and RED LED(PC_08) is toggled when WDT counter is under 0x1000."),Object(i.b)("p",null,"If reset is occurred by watchdog timer, WDT interrupt is cleared and RED LED(PC_08) is off and GREEN LED(PC_09) is on."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory-contents"},"Directory contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WDT/WDTReset/main.c                  (Main program) "),Object(i.b)("li",{parentName:"ul"},"WDT/WDTReset/W7500x_it.c             (Interrupt Handlers)"),Object(i.b)("li",{parentName:"ul"},"WDT/WDTReset/W7500x_it.h             (Interrupt Handlers Header file)"),Object(i.b)("li",{parentName:"ul"},"WDT/WDTReset/W7500x_conf.h           (Library Configuration file)"),Object(i.b)("li",{parentName:"ul"},"WDT/WDTReset/MDK/W7500x_WDT_WDTReset.uvproj     (MDK Project file)"),Object(i.b)("li",{parentName:"ul"},"WDT/WDTReset/GCC/Makefile            (GCC Make file)")),Object(i.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),Object(i.b)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example.  "),Object(i.b)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use RED LED connected to PC_08 pin."),Object(i.b)("li",{parentName:"ul"},"Use GREEN LED connected to PC_09 pin."),Object(i.b)("li",{parentName:"ul"},"Use EXTI connected to PA_00 pin."),Object(i.b)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),Object(i.b)("li",{parentName:"ul"},"In order to use the GREEN LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),Object(i.b)("li",{parentName:"ul"},"External input button has to be configured separately.  ")))),Object(i.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(i.b)("p",null,"In order to make the program work, you must do the following :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open your preferred toolchain.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run the example.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you have any questions, please use the forum site."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://forum.wiznet.io/%22"}),'https://forum.wiznet.io/"'))),Object(i.b)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd. "))))}p.isMDXComponent=!0},581:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);