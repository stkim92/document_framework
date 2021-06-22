(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[41928],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},82904:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l=["components"],o={id:"pwmoutput",title:"PWM Output example",date:new Date("2020-04-03T00:00:00.000Z")},u=void 0,p={unversionedId:"Product/iMCU/W7500/Peripherals-internal/pwmoutput",id:"Product/iMCU/W7500/Peripherals-internal/pwmoutput",isDocsHomePage:!1,title:"PWM Output example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/pwmoutput.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/pwmoutput",permalink:"/Product/iMCU/W7500/Peripherals-internal/pwmoutput",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/pwmoutput.md",version:"current",frontMatter:{id:"pwmoutput",title:"PWM Output example",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Pulse Width Modulation (PWM)",permalink:"/Product/iMCU/W7500/Peripherals-internal/pwm"},next:{title:"RNG example (Random number generation example)",permalink:"/Product/iMCU/W7500/Peripherals-internal/rng_ex"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],m={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file    : PWM/PWMOutput/readme.md"),(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 01-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of generation of the PWM output signal example.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZnet SHALL NOT BE HELD LIABLE FOR ANY\nDIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING\nFROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE\nCODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example-description"},"Example Description"),(0,i.kt)("p",null,"This example shows how to use the PWM peripheral to generate PWM output signal."),(0,i.kt)("p",null,"The PWM channel 3, 4, 5 frequency is set to SystemCoreClock(Hz), the Prescaler is 2\nso the PWM channel 3, 4, 5 counter clock is 10 MHz. SystemCoreClock is set to 20 MHz."),(0,i.kt)("p",null,"The PWM channel 3, 4 is set as up-count and periodic mode and 5 is set as down-count and one-shot mode. So PWM channel 5 generates output signal once. The PWM channel 3, 4, 5 are all PWM output enabled."),(0,i.kt)("p",null,"The PWM channel 3 is configured in Timer Mode and duty cycle is 80 % and 4 is 30 %."),(0,i.kt)("p",null,"The PWM channel 3 is mapped to PA_06, 4 is mapped to PA_07 and 5 is mapped to PA_08."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PWM/PWMOutput/main.c                  (Main program) "),(0,i.kt)("li",{parentName:"ul"},"PWM/PWMOutput/W7500x_it.c             (Interrupt Handlers)"),(0,i.kt)("li",{parentName:"ul"},"PWM/PWMOutput/W7500x_it.h             (Interrupt Handlers Header file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/PWMOutput/W7500x_conf.h           (Library Configuration file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/PWMOutput/MDK/PWMOutput.uvproj    (MDK Project file)"),(0,i.kt)("li",{parentName:"ul"},"PWM/PWMOutput/GCC/Makefile            (GCC Make file)")),(0,i.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This example has been tested with WIZnet WIZwiki W7500 platform."),(0,i.kt)("li",{parentName:"ul"},"To select the WIZnet WIZwiki platform used to run the example."),(0,i.kt)("li",{parentName:"ul"},"WIZwiki W7500 Set-up",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"PA_06 pin generates the PWM channel 4 output signal."),(0,i.kt)("li",{parentName:"ul"},"PA_07 pin generates the PWM channel 5 output signal."),(0,i.kt)("li",{parentName:"ul"},"PA_08 pin generates the PWM channel 6 output signal.    "),(0,i.kt)("li",{parentName:"ul"},"In order to use the PWM channel 4(PA_06) to be changed from PAD_AF0 to PAD_AF3."),(0,i.kt)("li",{parentName:"ul"},"In order to use the PWM channel 5(PA_07) to be changed from PAD_AF0 to PAD_AF3."),(0,i.kt)("li",{parentName:"ul"},"In order to use the PWM channel 6(PA_08) to be changed from PAD_AF0 to PAD_AF3.    ")))),(0,i.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"In order to make the program work, you must do the following :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open your preferred toolchain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rebuild all files and load your image into target memory.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run the example.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you have any questions, please use the forum site."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"',(0,i.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/%22"},'https://forum.wiznet.io/"'))),(0,i.kt)("p",{parentName:"li"},"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))))}s.isMDXComponent=!0}}]);