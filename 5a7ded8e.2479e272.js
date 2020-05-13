(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{304:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(9),l=(r(0),r(620)),i={},o={id:"Product/iMCU/W7500/Peripherals-internal/inter",title:"inter",description:"# UART Interrupts example\r",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\inter.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/inter",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/inter.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],u={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"uart-interrupts-example"},"UART Interrupts example"),Object(l.b)("hr",null),Object(l.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"file    : UART/Interrupt/readme.md "),Object(l.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(l.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(l.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(l.b)("li",{parentName:"ul"},"brief   : Description of the UART Interrupts example.")),Object(l.b)("hr",null),Object(l.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"example-description"},"Example Description"),Object(l.b)("p",null,"This example provides a basic communication between Uart0 and Uart1 using\ninterrupts.\nUart1 sends TxBuffer2 to Uart0 which sends TxBuffer1 to Uart1. The data received\nby Uart0 and Uart1 are stored respectively in RxBuffer1 and RxBuffer2. The data\ntransfer is managed in Uart0_IRQHandler and Uart1_IRQHandler in W7500x_it.c file"),Object(l.b)("p",null,"The UART0/UART1 is configured as follow:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"BaudRate = 115200 baud  "),Object(l.b)("li",{parentName:"ul"},"Word Length = 8 Bits"),Object(l.b)("li",{parentName:"ul"},"One Stop Bit"),Object(l.b)("li",{parentName:"ul"},"No parity"),Object(l.b)("li",{parentName:"ul"},"Hardware flow control disable"),Object(l.b)("li",{parentName:"ul"},"Receive and transmit enable")),Object(l.b)("p",null,"This example describes that the data send from UART0 to UART1."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"directory-contents"},"Directory contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"UART/Interrupt/main.c                                            (Main program)"),Object(l.b)("li",{parentName:"ul"},"UART/Interrupt/W7500x_conf.h                                     (Library Configuration file)"),Object(l.b)("li",{parentName:"ul"},"UART/Interrupt/W7500x_it.h                                       (Interrupt handlers header file)"),Object(l.b)("li",{parentName:"ul"},"UART/Interrupt/W7500x_it.c                                       (Interrupt handlers)"),Object(l.b)("li",{parentName:"ul"},"UART/Interrupt/MDK/W7500x_Uart_Interrupt.uvproj                  (Project file)"),Object(l.b)("li",{parentName:"ul"},"UART/Interrupt/GCC/Makefile                                       (GCC Make file)")),Object(l.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This example runs on W7500 Connectivity line Devices."),Object(l.b)("li",{parentName:"ul"},"W7500 Set-up")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{})," --------------            --------------\n|    UART0     |          |     UART1    |\n|              |          |              |\n|   (PA_13)TXD |----------|   RXD(PB_03) |\n|   (PA_14)RXD |----------|   TXD(PB_02) |\n|              |          |              |\n|              |          |              |\n --------------            --------------\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"TXD(PA13) and RXD(PB_03) of UART1 connected."),Object(l.b)("li",{parentName:"ul"},"RXD(PA14) and TXD(PB_02) of UART1 connected.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(l.b)("p",null,"In order to make the program work, you must do the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Copy all source files from this example folder to the template folder under\nProject\\Peripheral_Example"),Object(l.b)("li",{parentName:"ul"},"Open your preferred toolchain "),Object(l.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory"),Object(l.b)("li",{parentName:"ul"},"Run the example ")),Object(l.b)("hr",null),Object(l.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}b.isMDXComponent=!0},620:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,s=p["".concat(i,".").concat(d)]||p[d]||O[d]||l;return r?a.a.createElement(s,o({ref:t},u,{components:r})):a.a.createElement(s,o({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);