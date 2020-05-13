(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{213:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(530)),o={},l={id:"Product/iMCU/W7500P/Peripherals-internal/capturemode",title:"capturemode",description:"# PWM Timer Mode example\r",source:"@site/docs\\Product\\iMCU\\W7500P\\Peripherals-internal\\capturemode.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/capturemode",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/capturemode.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"pwm-timer-mode-example"},"PWM Timer Mode example"),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"file    : PWM/CaptureMode/readme.md"),Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 01-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of the PWM Capture Mode example.")),Object(i.b)("hr",null),Object(i.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-description"},"Example Description"),Object(i.b)("p",null,"This example shows how to use the PWM peripheral to run capture mode."),Object(i.b)("p",null,"The PWM channel 0 frequency is set to SystemCoreClock(Hz), the Prescaler is 2\nso the PWM0 counter clock is 10 MHz. SystemCoreClock is set to 20 MHz."),Object(i.b)("p",null,"The PWM channel 0 is configured in Timer Mode and duty cycle is 50 %.\nTimer/Counter is up-count mode and periodic mode. Capture mode is rising edge detection. 1 interrupts out of 3 interrupts\nare enabled: capture interupt(match and overflow interrupt is excepted)."),Object(i.b)("p",null,"The Timer/Counter runs periodically and if capture signal(PC_00) is received, the Timer/Counter value is saved at capture register and capture interrupt is occurred. In capture interrupt handler, RED LED(PC_08) is toggled."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory-contents"},"Directory contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"PWM/CaptureMode/main.c                  (Main program) "),Object(i.b)("li",{parentName:"ul"},"PWM/CaptureMode/W7500x_it.c             (Interrupt Handlers)"),Object(i.b)("li",{parentName:"ul"},"PWM/CaptureMode/W7500x_it.h             (Interrupt Handlers Header file)"),Object(i.b)("li",{parentName:"ul"},"PWM/CaptureMode/W7500x_conf.h           (Library Configuration file)"),Object(i.b)("li",{parentName:"ul"},"PWM/CaptureMode/MDK/W7500x_PWM_CaptureMode.uvproj  (MDK Project file)"),Object(i.b)("li",{parentName:"ul"},"PWM/CaptureMode/GCC/Makefile            (GCC Make file)")),Object(i.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),Object(i.b)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),Object(i.b)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use the RED LED connected to PC_08 pin."),Object(i.b)("li",{parentName:"ul"},"Use the capture input connected to PC_00 pin."),Object(i.b)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),Object(i.b)("li",{parentName:"ul"},"In order to use the capature intput(PC_00) to be changed from PAD_AF0 to PAD_AF2."),Object(i.b)("li",{parentName:"ul"},"External input button has to be configured separately.")))),Object(i.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(i.b)("p",null,"In order to make the program work, you must do the following :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open your preferred toolchain.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run the example.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you have any questions, please use the forum site."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))),Object(i.b)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))))}p.isMDXComponent=!0},530:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,s=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return r?a.a.createElement(s,l({ref:t},u,{components:r})):a.a.createElement(s,l({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);