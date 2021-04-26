(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{556:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(578)),o={id:"loopback",title:"SSP Loopback example",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/loopback",id:"Product/iMCU/W7500/Peripherals-internal/loopback",isDocsHomePage:!1,title:"SSP Loopback example",description:"********************",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\Loopback.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/loopback",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/Loopback.md",sidebar:"docs",previous:{title:"I2C and LM75 Temperature Sensor communication example",permalink:"/Product/iMCU/W7500/Peripherals-internal/lm75_temperature"},next:{title:"Pad Controller (PADCON)",permalink:"/Product/iMCU/W7500/Peripherals-internal/padcon"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],b={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"file    : SSP/Loopback/readme.md"),Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of the SSP Loopback example.")),Object(i.b)("hr",null),Object(i.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-description"},"Example Description"),Object(i.b)("p",null,"This example provides a description of how to set a communication between two SSPs in MO mode and performs a transfer from Master to Slave by Interrnal Loopback."),Object(i.b)("p",null,"SSP0 is configured as master and SSP1 as slave both are with 16bit data size."),Object(i.b)("p",null,"After enabling both SSPs, the first data from set value 0x50 followed by the first data send by the master. The same procedure is done for the remaining data to transfer except the last ones."),Object(i.b)("p",null,"Last data from SSP0 transmit buffer is save to SSP1 receive buffer."),Object(i.b)("p",null,"Once the transfer is completed a comparison is done and TransferStatus gives the data transfer status for each data transfer direction where it is PASSED if transmitted and received data are the same otherwise it is FAILED.\nAfter check of TransferStatus, if Status is PASSED LED ON GREEN and if Status is FAILED LED ON RED."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory-contents"},"Directory contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/main.c                                   (Main program)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.c                              (Interrupt Handlers)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.h                              (Interrupt Handlers Header file)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/W7500x_conf.h                            (Library Configuration file)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/MDK/W7500x_SSP_Loopback.uvproj           (MDK Project file)"),Object(i.b)("li",{parentName:"ul"},"SSP/Loopback/GCC/Makefile                             (GCC Make file)")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Set SSP0 is master and datasize is 16bits"),Object(i.b)("li",{parentName:"ul"},"Set SSP1 is Slave and datasize is 16bits"),Object(i.b)("li",{parentName:"ul"},"Connect SSP0 SSEL (PA.05) pin to SSP1 SSEL (PB.00) Pin"),Object(i.b)("li",{parentName:"ul"},"Connect SSP0 SCLK (PA.06) pin to SSP1 SCLK (PB.01) Pin"),Object(i.b)("li",{parentName:"ul"},"Connect SSP0 MISO (PA.07) pin to SSP1 MISO (PB.02) Pin"),Object(i.b)("li",{parentName:"ul"},"Connect SSP0 MOSI (PA.08) pin to SSP1 MOSI (PB.03) Pin"),Object(i.b)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin."),Object(i.b)("li",{parentName:"ul"},"Use LED(G) connected to PC_09 pin."),Object(i.b)("li",{parentName:"ul"},"In order to use the LED to be changed from PAD_AF0 to PAD_AF1.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(i.b)("p",null,"In order to make the program work, you must do the following :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(i.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(i.b)("li",{parentName:"ul"},"Run the example."),Object(i.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(i.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://forum.wiznet.io/%22"}),'https://forum.wiznet.io/"'))))),Object(i.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd.>"))}p.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,O=u["".concat(o,".").concat(m)]||u[m]||s[m]||i;return r?a.a.createElement(O,l(l({ref:t},b),{},{components:r})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);