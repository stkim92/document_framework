(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{227:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(9),i=(r(0),r(620)),o={},c={id:"Product/iMCU/W7500/Peripherals-internal/SD_Card_LED",title:"SD_Card_LED",description:"# SSP SDcard_LED example",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/SD_Card_LED.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/SD_Card_LED",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/SD_Card_LED.md"},l=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],u={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"ssp-sdcard_led-example"},"SSP SDcard_LED example"),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"file    : SSP/SD_Card_LED/readme.md"),Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of the SSP SD_Card_LED example.")),Object(i.b)("hr",null),Object(i.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-description"},"Example Description"),Object(i.b)("p",null,"This example provides a description of how to set a communication to SDCard."),Object(i.b)("p",null,"SDCard is configured SSP1 as master are with 8bit data size."),Object(i.b)("p",null,"After enabling both SSP1, the first single data block to transfer Buffer Block Tx except the last ones.\nblock size is 512 and receive Buffer Block Rx read to SDCard except the last ones."),Object(i.b)("p",null,"Once the transfer is completed a comparison is done and TransferStatus1 gives the data transfer status for each data transfer direction where it is PASSED if transmitted and received data are the same otherwise it is FAILED.\nAfter check of TransferStatus1, if Status is PASSED LED ON BLUE and if Status is FAILED LED ON RED."),Object(i.b)("p",null,"After single data block test, the second multi block data to transfer Buffer MultiBlock Tx except the last ones.\nblock size is 512 * 32 and receive Buffer MultiBlock Rx read to SDCard except the last ones."),Object(i.b)("p",null,"Once the transfer is completed a comparison is done and TransferStatus2 gives the data transfer status for each data transfer direction where it is PASSED if transmitted and received data are the same otherwise it is FAILED.\nAfter check of TransferStatus2, if Status is PASSED LED ON GREEN and if Status is FAILED LED ON RED."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory-contents"},"Directory contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/main.c                                   (Main program)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.c                              (Interrupt Handlers)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.h                              (Interrupt Handlers Header file)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/W7500x_conf.h                            (Library Configuration file)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/MDK/W7500x_SSP_SD_Card_LED.uvproj        (MDK Project file)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/GCC/Makefile                             (GCC Make file)")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"input micro SD card"),Object(i.b)("li",{parentName:"ul"},"Set SSP1 is master and datasize is 8bits"),Object(i.b)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin."),Object(i.b)("li",{parentName:"ul"},"Use LED(G) connected to PC_09 pin."),Object(i.b)("li",{parentName:"ul"},"Use LED(B) connected to PC_05 pin."),Object(i.b)("li",{parentName:"ul"},"In order to use the LED to be changed from PAD_AF0 to PAD_AF1.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(i.b)("p",null,"In order to make the program work, you must do the following :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(i.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(i.b)("li",{parentName:"ul"},"Run the example."),Object(i.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(i.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))))),Object(i.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}b.isMDXComponent=!0},620:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,O=s["".concat(o,".").concat(d)]||s[d]||p[d]||i;return r?a.a.createElement(O,c({ref:t},u,{components:r})):a.a.createElement(O,c({ref:t},u))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);