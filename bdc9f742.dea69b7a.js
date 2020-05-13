(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{484:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(9),o=(r(0),r(629)),a={},l={id:"Product/iMCU/W7500/Peripherals-internal/timermode",title:"timermode",description:"# PWM Timer Mode example",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/timermode.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/timermode",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/timermode.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"pwm-timer-mode-example"},"PWM Timer Mode example"),Object(o.b)("hr",null),Object(o.b)("p",null,"(C) COPYRIGHT 2015 WIZnet"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"file    : PWM/TimerMode/readme.md"),Object(o.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(o.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(o.b)("li",{parentName:"ul"},"date    : 01-May-2015"),Object(o.b)("li",{parentName:"ul"},"brief   : Description of the PWM Timer Mode example.")),Object(o.b)("hr",null),Object(o.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"example-description"},"Example Description"),Object(o.b)("p",null,"This example shows how to use the PWM peripheral to run time mode."),Object(o.b)("p",null,"The PWM channel 0 frequency is set to SystemCoreClock(Hz), the Prescaler is 2\nso the PWM0 counter clock is 10 MHz.\nSystemCoreClock is set to 20 MHz."),Object(o.b)("p",null,"The PWM channel 0 is configured in Timer Mode and duty cycle is 50 %.\nTimer/Counter is up-count mode and periodic mode. 2 interrupts out of 3 interrupts\nare enabled: match and overflow interupt(capture interrupt is excepted)."),Object(o.b)("p",null,"When the Timer/Counter reaches the match value, RED LED(PC_08) is toggled every times,\nand when the Tiemr/Counter reaches the limit value, GREEN LED(PC_09) is toggled every times."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"directory-contents"},"Directory contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"PWM/TimerMode/main.c                  (Main program) "),Object(o.b)("li",{parentName:"ul"},"PWM/TimerMode/W7500x_it.c             (Interrupt Handlers)"),Object(o.b)("li",{parentName:"ul"},"PWM/TimerMode/W7500x_it.h             (Interrupt Handlers Header file)"),Object(o.b)("li",{parentName:"ul"},"PWM/TimerMode/W7500x_conf.h           (Library Configuration file)"),Object(o.b)("li",{parentName:"ul"},"PWM/TimerMode/MDK/W7500x_PWM_TimerMode.uvproj    (MDK Project file)"),Object(o.b)("li",{parentName:"ul"},"PWM/TimerMode/GCC/Makefile            (GCC Make file)")),Object(o.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),Object(o.b)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),Object(o.b)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Use RED LED connected to PC_08 pin."),Object(o.b)("li",{parentName:"ul"},"Use GREEN LED connected to PC_09 pin."),Object(o.b)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),Object(o.b)("li",{parentName:"ul"},"In order to use the GREEN LED(PC_09) to be changed from PAD_AF0 to PAD_AF1.")))),Object(o.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(o.b)("p",null,"In order to make the program work, you must do the following :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(o.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(o.b)("li",{parentName:"ul"},"Run the example."),Object(o.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(o.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"',Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))))),Object(o.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}p.isMDXComponent=!0},629:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,s=b["".concat(a,".").concat(d)]||b[d]||m[d]||o;return r?i.a.createElement(s,l({ref:t},u,{components:r})):i.a.createElement(s,l({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);