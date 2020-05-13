(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{456:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(9),a=(r(0),r(620)),i={},l={id:"Product/iMCU/W7500/Peripherals-internal/countermode",title:"countermode",description:"# PWM Counter Mode example\r",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\countermode.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/countermode",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/countermode.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"pwm-counter-mode-example"},"PWM Counter Mode example"),Object(a.b)("hr",null),Object(a.b)("p",null,"(C) COPYRIGHT 2015 WIZnet"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"file    : PWM/CounterMode/readme.md"),Object(a.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(a.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(a.b)("li",{parentName:"ul"},"date    : 01-May-2015"),Object(a.b)("li",{parentName:"ul"},"brief   : Description of the PWM Counter Mode example.")),Object(a.b)("hr",null),Object(a.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"example-description"},"Example Description"),Object(a.b)("p",null,"This example shows how to use the PWM peripheral to run counter mode."),Object(a.b)("p",null,"The PWM channel 0 frequency is set to SystemCoreClock(Hz). SystemCoreClock is set to 20 MHz."),Object(a.b)("p",null,"The PWM channel 0 is configured in rising edge counter mode, up-count mode, periodic mode. So the PWM channel 0 Timer/Counter is counted when input signal is triggered. 2 interrupts out of 3 interrupts are enabled: match and overflow interupt(capture interrupt is excepted)."),Object(a.b)("p",null,"The PWM channel 0 output pin(PC_00) is used for input."),Object(a.b)("p",null,"When the Timer/Counter reaches the match value, RED LED(PC_08) is toggled every times,\nand when the Tiemr/Counter reaches the limit value, GREEN LED(PC_09) is toggled every times."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"directory-contents"},"Directory contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"PWM/CounterMode/main.c                  (Main program) "),Object(a.b)("li",{parentName:"ul"},"PWM/CounterMode/W7500x_it.c             (Interrupt Handlers)"),Object(a.b)("li",{parentName:"ul"},"PWM/CounterMode/W7500x_it.h             (Interrupt Handlers Header file)"),Object(a.b)("li",{parentName:"ul"},"PWM/CounterMode/W7500x_conf.h           (Library Configuration file)"),Object(a.b)("li",{parentName:"ul"},"PWM/CounterMode/MDK/W7500x_PWM_CounterMode.uvproj    (MDK Project file)"),Object(a.b)("li",{parentName:"ul"},"PWM/CounterMode/GCC/Makefile            (GCC Make file)")),Object(a.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),Object(a.b)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),Object(a.b)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Use RED LED connected to PC_08 pin."),Object(a.b)("li",{parentName:"ul"},"Use GREEN LED connected to PC_09 pin."),Object(a.b)("li",{parentName:"ul"},"Use PC_00 for input signal."),Object(a.b)("li",{parentName:"ul"},"In order to use the RED LED(PC_08) to be changed from PAD_AF0 to PAD_AF1."),Object(a.b)("li",{parentName:"ul"},"In order to use the GREEN LED(PC_09) to be changed from PAD_AF0 to PAD_AF1."),Object(a.b)("li",{parentName:"ul"},"In order to use the PC_00 to be changed from PAD_AF0 to PAD_AF2."),Object(a.b)("li",{parentName:"ul"},"External input button has to be configured separately. ")))),Object(a.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(a.b)("p",null,"In order to make the program work, you must do the following :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Open your preferred toolchain.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Run the example.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If you have any questions, please use the forum site."),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'"',Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))),Object(a.b)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))))}p.isMDXComponent=!0},620:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,O=b["".concat(i,".").concat(d)]||b[d]||m[d]||a;return r?o.a.createElement(O,l({ref:t},u,{components:r})):o.a.createElement(O,l({ref:t},u))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);