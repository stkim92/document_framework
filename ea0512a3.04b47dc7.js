(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{498:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(9),a=(n(0),n(530)),l={},o={id:"Product/iMCU/W7500/Peripherals-internal/blink_led",title:"blink_led",description:"# GPIO Blink_LED example",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/blink_led.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/blink_led",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/blink_led.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],b={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"gpio-blink_led-example"},"GPIO Blink_LED example"),Object(a.b)("hr",null),Object(a.b)("p",null,"(C) COPYRIGHT 2015 WIZnet"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"file    : GPIO/Blink_LED/readme.md"),Object(a.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(a.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(a.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(a.b)("li",{parentName:"ul"},"brief   : Description of the GPIO Blink_LED example.")),Object(a.b)("hr",null),Object(a.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS\nWITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE\nTIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT\nOR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT\nOF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION\nCONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"example-description"},"Example Description"),Object(a.b)("p",null,"GPIO ports are connected on APB2 bus, using UB_MASKED and LB_MASKED registers\n2 cycles are required to set a pin and another cycle to reset it. So GPIO pins\ncan toggle at AHB clock divided by 4."),Object(a.b)("p",null,"This example describes how to use UB_MASKED and LB_MASKED\n(Port Bit GPIO_SetBits/GPIO_ResetBits Register)"),Object(a.b)("p",null,"PC_05, PC_08, PC_09(configured in output pushpull mode) toggles in a forever\nloop:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set Pin_5 and Pin_8 and Pin_9 by setting corresponding bits\nin GPIO_SetBits register."),Object(a.b)("li",{parentName:"ul"},"Reset Pin_5 and Pin_8 and Pin_9 by setting corresponding bits\nin GPIO_ResetBits register.")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"directory-contents"},"Directory contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"GPIO/LED_Blink/main.c                                 (Main program)"),Object(a.b)("li",{parentName:"ul"},"GPIO/LED_Blink/MDK/W7500x_GPIO_Blink_LED.uvproj       (Project file)")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up "),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin"),Object(a.b)("li",{parentName:"ul"},"Use LED(G) connected to PC_09 pin"),Object(a.b)("li",{parentName:"ul"},"Use LED(B) connected to PC_05 pin"),Object(a.b)("li",{parentName:"ul"},"In order to use the LED to be changed from PAD_AF0 to PAD_AF1.")))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(a.b)("p",null,"In order to make the program work, you must do the following :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(a.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(a.b)("li",{parentName:"ul"},"Run the example."),Object(a.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(a.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'"',Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))))),Object(a.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}u.isMDXComponent=!0},530:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),u=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,d=p["".concat(l,".").concat(s)]||p[s]||O[s]||a;return n?i.a.createElement(d,o({ref:t},b,{components:n})):i.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<a;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);