(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[98805],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(r),d=i,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},38659:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),l={id:"timerrun",title:"Dual Timer TimerRun example",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/timerrun",id:"Product/iMCU/W7500/Peripherals-internal/timerrun",isDocsHomePage:!1,title:"Dual Timer TimerRun example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/timerrun.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/timerrun",permalink:"/Product/iMCU/W7500/Peripherals-internal/timerrun",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/timerrun.md",version:"current",frontMatter:{id:"timerrun",title:"Dual Timer TimerRun example",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"PWM Timer Mode example",permalink:"/Product/iMCU/W7500/Peripherals-internal/timermode"},next:{title:"TCP/IP core Offload Engine (TOE)",permalink:"/Product/iMCU/W7500/Peripherals-internal/toe"}},u=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],m={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"file    : DualTimer/TimerRun/readme.md"),(0,a.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,a.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,a.kt)("li",{parentName:"ul"},"date    : 01-May-2015"),(0,a.kt)("li",{parentName:"ul"},"brief   : Description of the Dual timer TimerRun example.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"example-description"},"Example Description"),(0,a.kt)("p",null,"This example shows how to use the Dual timer peripheral to run. Only dual timer 0-0 is working in this example."),(0,a.kt)("p",null,"The Dual timer 0-0 frequency is set to SystemCoreClock(Hz), and the clock is divided by 16.\nSystemCoreClock is set to 20 MHz."),(0,a.kt)("p",null,"The dual timer is configured in wrapping mode and periodic mode. The counter size is 32-bit.\nThe interrupt is enabled. "),(0,a.kt)("p",null,"When the Counter reaches 0, the interrupt is occurred and RED LED(PC.08) is toggled every times. "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DualTimer/TimerRun/main.c                  (Main program) "),(0,a.kt)("li",{parentName:"ul"},"DualTimer/TimerRun/W7500x_it.c             (Interrupt Handlers)"),(0,a.kt)("li",{parentName:"ul"},"DualTimer/TimerRun/W7500x_it.h             (Interrupt Handlers Header file)"),(0,a.kt)("li",{parentName:"ul"},"DualTimer/TimerRun/W7500x_conf.h           (Library Configuration file)"),(0,a.kt)("li",{parentName:"ul"},"DualTimer/TimerRun/MDK/W7500x_Dualtimer_TimerRun.uvproj     (MDK Project file)"),(0,a.kt)("li",{parentName:"ul"},"DualTimer/TimerRun/GCC/Makefile            (GCC Make file)")),(0,a.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),(0,a.kt)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example.  "),(0,a.kt)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use RED LED connected to PC_08 pin.    "),(0,a.kt)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1.    ")))),(0,a.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,a.kt)("p",null,"In order to make the program work, you must do the following :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open your preferred toolchain.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Run the example.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you have any questions, please use the forum site."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"',(0,a.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))),(0,a.kt)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))))}p.isMDXComponent=!0}}]);