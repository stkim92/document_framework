(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{280:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(626)),i={},l={id:"Product/iMCU/W7500P/Peripherals-internal/Loopback",title:"Loopback",description:"# SSP Loopback example",source:"@site/docs/Product/iMCU/W7500P/Peripherals-internal/Loopback.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/Loopback",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/Loopback.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],b={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"ssp-loopback-example"},"SSP Loopback example"),Object(o.b)("hr",null),Object(o.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"file    : SSP/Loopback/readme.md"),Object(o.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(o.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(o.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(o.b)("li",{parentName:"ul"},"brief   : Description of the SSP Loopback example.")),Object(o.b)("hr",null),Object(o.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"example-description"},"Example Description"),Object(o.b)("p",null,"This example provides a description of how to set a communication between two SSPs in MO mode and performs a transfer from Master to Slave by Interrnal Loopback."),Object(o.b)("p",null,"SSP0 is configured as master and SSP1 as slave both are with 16bit data size."),Object(o.b)("p",null,"After enabling both SSPs, the first data from set value 0x50 followed by the first data send by the master. The same procedure is done for the remaining data to transfer except the last ones."),Object(o.b)("p",null,"Last data from SSP0 transmit buffer is save to SSP1 receive buffer."),Object(o.b)("p",null,"Once the transfer is completed a comparison is done and TransferStatus gives the data transfer status for each data transfer direction where it is PASSED if transmitted and received data are the same otherwise it is FAILED.\nAfter check of TransferStatus, if Status is PASSED LED ON GREEN and if Status is FAILED LED ON RED."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"directory-contents"},"Directory contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SSP/Loopback/main.c                                   (Main program)"),Object(o.b)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.c                              (Interrupt Handlers)"),Object(o.b)("li",{parentName:"ul"},"SSP/Loopback/W7500x_it.h                              (Interrupt Handlers Header file)"),Object(o.b)("li",{parentName:"ul"},"SSP/Loopback/W7500x_conf.h                            (Library Configuration file)"),Object(o.b)("li",{parentName:"ul"},"SSP/Loopback/MDK/W7500x_SSP_Loopback.uvproj           (MDK Project file)"),Object(o.b)("li",{parentName:"ul"},"SSP/Loopback/GCC/Makefile                             (GCC Make file)")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This example has been tested with WIZnet WIZwiki W7500 platform.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"To select the WIZnet WIZwiki platform used to run the example.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"WIZwiki W7500 Set-up"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Set SSP0 is master and datasize is 16bits"),Object(o.b)("li",{parentName:"ul"},"Set SSP1 is Slave and datasize is 16bits"),Object(o.b)("li",{parentName:"ul"},"Connect SSP0 SSEL (PA.05) pin to SSP1 SSEL (PB.00) Pin"),Object(o.b)("li",{parentName:"ul"},"Connect SSP0 SCLK (PA.06) pin to SSP1 SCLK (PB.01) Pin"),Object(o.b)("li",{parentName:"ul"},"Connect SSP0 MISO (PA.07) pin to SSP1 MISO (PB.02) Pin"),Object(o.b)("li",{parentName:"ul"},"Connect SSP0 MOSI (PA.08) pin to SSP1 MOSI (PB.03) Pin"),Object(o.b)("li",{parentName:"ul"},"Use LED(R) connected to PC_08 pin."),Object(o.b)("li",{parentName:"ul"},"Use LED(G) connected to PC_09 pin."),Object(o.b)("li",{parentName:"ul"},"In order to use the LED to be changed from PAD_AF0 to PAD_AF1.")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(o.b)("p",null,"In order to make the program work, you must do the following :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(o.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(o.b)("li",{parentName:"ul"},"Run the example."),Object(o.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(o.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"',Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))))),Object(o.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd.>"))}p.isMDXComponent=!0},626:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(r),O=n,m=u["".concat(i,".").concat(O)]||u[O]||s[O]||o;return r?a.a.createElement(m,l({ref:t},b,{components:r})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);