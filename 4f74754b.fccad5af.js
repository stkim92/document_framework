(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),l=n(6),a=(n(0),n(578)),i={id:"illumination_sensor",title:"ADC example (Illumination sensor)",date:new Date("2020-06-10T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/illumination_sensor",id:"Product/iMCU/W7500/Peripherals-internal/illumination_sensor",isDocsHomePage:!1,title:"ADC example (Illumination sensor)",description:"********************",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\illumination_sensor.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/illumination_sensor",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/illumination_sensor.md",sidebar:"docs",previous:{title:"Flash example (IAP example)",permalink:"/Product/iMCU/W7500/Peripherals-internal/iap_example"},next:{title:"I2C Read/Write example",permalink:"/Product/iMCU/W7500/Peripherals-internal/init"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]},{value:"Flow Chart",id:"flow-chart",children:[]}],u={rightToc:c};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"file    : Illumination_regled/readme.md"),Object(a.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(a.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(a.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(a.b)("li",{parentName:"ul"},"brief   : Description of the Illumination sensor & REG led toggle example.")),Object(a.b)("hr",null),Object(a.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"example-description"},"Example Description"),Object(a.b)("p",null,"This example shows how to use ADC of W7500.\nIn this example, ADC input is connected with illumination sensor. And control RGB led by illumination sensor value."),Object(a.b)("p",null,"In this example:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Set the Alternate function of PAD for this example."),Object(a.b)("li",{parentName:"ul"},"Sensing analog value of Illumination sensor."),Object(a.b)("li",{parentName:"ul"},"If dark, ON the led, if not, OFF the led with GPIO control.")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"directory-contents"},"Directory contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ADC/Illumination_regled/main.c                                (Main program)"),Object(a.b)("li",{parentName:"ul"},"ADC/Illumination_regled/W7500x_it.c                           (Interrupt Handlers)"),Object(a.b)("li",{parentName:"ul"},"ADC/Illumination_regled/W7500x_it.h                           (Interrupt Handlers Header file)"),Object(a.b)("li",{parentName:"ul"},"ADC/Illumination_regled/W7500x_conf.h                         (Library Configuration file)"),Object(a.b)("li",{parentName:"ul"},"ADC/Illumination_regled/MDK/W7500x_Illumination_regled.uvproj     (MDK Project file)"),Object(a.b)("li",{parentName:"ul"},"ADC/Illumination_regled/GCC/Makefile                          (GCC Make file)")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Use ADC input connected to PC_15(A0) pin."),Object(a.b)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin."),Object(a.b)("li",{parentName:"ul"},"Use LED(G) connected to PC_09 pin."),Object(a.b)("li",{parentName:"ul"},"Use LED(B) connected to PC_05 pin."),Object(a.b)("li",{parentName:"ul"},"In order to use the LEDs to be changed from PAD_AF0 to PAD_AF1.  "))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Hardware Connection"),Object(a.b)("p",{parentName:"li"}," 5V - 10K ohm register - PC_15(A0) - Illumination sensor - GND"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(a.b)("p",null,"In order to make the program work, you must do the following :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(a.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(a.b)("li",{parentName:"ul"},"Run the example."),Object(a.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(a.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'"',Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://forum.wiznet.io/%22"}),'https://forum.wiznet.io/"'))))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"flow-chart"},"Flow Chart"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Power on ADC"),Object(a.b)("li",{parentName:"ul"},"Select ADC channel"),Object(a.b)("li",{parentName:"ul"},"ADC start"),Object(a.b)("li",{parentName:"ul"},"Wait until EOC (end of conversion)"),Object(a.b)("li",{parentName:"ul"},"Read ADC value")),Object(a.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}b.isMDXComponent=!0},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=l.a.createContext({}),b=function(e){var t=l.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,O=p["".concat(i,".").concat(s)]||p[s]||m[s]||a;return n?l.a.createElement(O,o(o({ref:t},u),{},{components:n})):l.a.createElement(O,o({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);