(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{436:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(578)),l={id:"pwmoutput",title:"PWM Output example",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/pwmoutput",id:"Product/iMCU/W7500/Peripherals-internal/pwmoutput",isDocsHomePage:!1,title:"PWM Output example",description:"********************",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\pwmoutput.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/pwmoutput",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/pwmoutput.md",sidebar:"docs",previous:{title:"Pulse Width Modulation (PWM)",permalink:"/Product/iMCU/W7500/Peripherals-internal/pwm"},next:{title:"RNG example (Random number generation example)",permalink:"/Product/iMCU/W7500/Peripherals-internal/rng_ex"}},u=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],c={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"file    : PWM/PWMOutput/readme.md"),Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 01-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of generation of the PWM output signal example.")),Object(i.b)("hr",null),Object(i.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-description"},"Example Description"),Object(i.b)("p",null,"This example shows how to use the PWM peripheral to generate PWM output signal."),Object(i.b)("p",null,"The PWM channel 3, 4, 5 frequency is set to SystemCoreClock(Hz), the Prescaler is 2\nso the PWM channel 3, 4, 5 counter clock is 10 MHz. SystemCoreClock is set to 20 MHz."),Object(i.b)("p",null,"The PWM channel 3, 4 is set as up-count and periodic mode and 5 is set as down-count and one-shot mode. So PWM channel 5 generates output signal once. The PWM channel 3, 4, 5 are all PWM output enabled."),Object(i.b)("p",null,"The PWM channel 3 is configured in Timer Mode and duty cycle is 80 % and 4 is 30 %."),Object(i.b)("p",null,"The PWM channel 3 is mapped to PA_06, 4 is mapped to PA_07 and 5 is mapped to PA_08."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory-contents"},"Directory contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"PWM/PWMOutput/main.c                  (Main program) "),Object(i.b)("li",{parentName:"ul"},"PWM/PWMOutput/W7500x_it.c             (Interrupt Handlers)"),Object(i.b)("li",{parentName:"ul"},"PWM/PWMOutput/W7500x_it.h             (Interrupt Handlers Header file)"),Object(i.b)("li",{parentName:"ul"},"PWM/PWMOutput/W7500x_conf.h           (Library Configuration file)"),Object(i.b)("li",{parentName:"ul"},"PWM/PWMOutput/MDK/PWMOutput.uvproj    (MDK Project file)"),Object(i.b)("li",{parentName:"ul"},"PWM/PWMOutput/GCC/Makefile            (GCC Make file)")),Object(i.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),Object(i.b)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),Object(i.b)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"PA_06 pin generates the PWM channel 4 output signal."),Object(i.b)("li",{parentName:"ul"},"PA_07 pin generates the PWM channel 5 output signal."),Object(i.b)("li",{parentName:"ul"},"PA_08 pin generates the PWM channel 6 output signal.    "),Object(i.b)("li",{parentName:"ul"},"In order to use the PWM channel 4(PA_06) to be changed from PAD_AF0 to PAD_AF3."),Object(i.b)("li",{parentName:"ul"},"In order to use the PWM channel 5(PA_07) to be changed from PAD_AF0 to PAD_AF3."),Object(i.b)("li",{parentName:"ul"},"In order to use the PWM channel 6(PA_08) to be changed from PAD_AF0 to PAD_AF3.    ")))),Object(i.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(i.b)("p",null,"In order to make the program work, you must do the following :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open your preferred toolchain.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run the example.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you have any questions, please use the forum site."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://forum.wiznet.io/%22"}),'https://forum.wiznet.io/"'))),Object(i.b)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))))}p.isMDXComponent=!0},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,O=b["".concat(l,".").concat(s)]||b[s]||m[s]||i;return n?a.a.createElement(O,o(o({ref:t},c),{},{components:n})):a.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);