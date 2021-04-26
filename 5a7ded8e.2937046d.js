(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{226:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(578)),l={id:"inter",title:"UART Interrupts example",date:new Date("2020-06-10T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/inter",id:"Product/iMCU/W7500/Peripherals-internal/inter",isDocsHomePage:!1,title:"UART Interrupts example",description:"********************",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\inter.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/inter",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/inter.md",sidebar:"docs",previous:{title:"I2C Read/Write example",permalink:"/Product/iMCU/W7500/Peripherals-internal/init"},next:{title:"EXTI LED Toggle example",permalink:"/Product/iMCU/W7500/Peripherals-internal/led_toggle"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"file    : UART/Interrupt/readme.md "),Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of the UART Interrupts example.")),Object(i.b)("hr",null),Object(i.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-description"},"Example Description"),Object(i.b)("p",null,"This example provides a basic communication between Uart0 and Uart1 using\ninterrupts.\nUart1 sends TxBuffer2 to Uart0 which sends TxBuffer1 to Uart1. The data received\nby Uart0 and Uart1 are stored respectively in RxBuffer1 and RxBuffer2. The data\ntransfer is managed in Uart0_IRQHandler and Uart1_IRQHandler in W7500x_it.c file"),Object(i.b)("p",null,"The UART0/UART1 is configured as follow:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"BaudRate = 115200 baud  "),Object(i.b)("li",{parentName:"ul"},"Word Length = 8 Bits"),Object(i.b)("li",{parentName:"ul"},"One Stop Bit"),Object(i.b)("li",{parentName:"ul"},"No parity"),Object(i.b)("li",{parentName:"ul"},"Hardware flow control disable"),Object(i.b)("li",{parentName:"ul"},"Receive and transmit enable")),Object(i.b)("p",null,"This example describes that the data send from UART0 to UART1."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory-contents"},"Directory contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"UART/Interrupt/main.c                                            (Main program)"),Object(i.b)("li",{parentName:"ul"},"UART/Interrupt/W7500x_conf.h                                     (Library Configuration file)"),Object(i.b)("li",{parentName:"ul"},"UART/Interrupt/W7500x_it.h                                       (Interrupt handlers header file)"),Object(i.b)("li",{parentName:"ul"},"UART/Interrupt/W7500x_it.c                                       (Interrupt handlers)"),Object(i.b)("li",{parentName:"ul"},"UART/Interrupt/MDK/W7500x_Uart_Interrupt.uvproj                  (Project file)"),Object(i.b)("li",{parentName:"ul"},"UART/Interrupt/GCC/Makefile                                       (GCC Make file)")),Object(i.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"This example runs on W7500 Connectivity line Devices."),Object(i.b)("li",{parentName:"ul"},"W7500 Set-up")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{})," --------------            --------------\n|    UART0     |          |     UART1    |\n|              |          |              |\n|   (PA_13)TXD |----------|   RXD(PB_03) |\n|   (PA_14)RXD |----------|   TXD(PB_02) |\n|              |          |              |\n|              |          |              |\n --------------            --------------\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"TXD(PA13) and RXD(PB_03) of UART1 connected."),Object(i.b)("li",{parentName:"ul"},"RXD(PA14) and TXD(PB_02) of UART1 connected.")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(i.b)("p",null,"In order to make the program work, you must do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy all source files from this example folder to the template folder under\nProject\\Peripheral_Example"),Object(i.b)("li",{parentName:"ul"},"Open your preferred toolchain "),Object(i.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory"),Object(i.b)("li",{parentName:"ul"},"Run the example ")),Object(i.b)("hr",null),Object(i.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}p.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=p(r),O=n,s=b["".concat(l,".").concat(O)]||b[O]||d[O]||i;return r?a.a.createElement(s,o(o({ref:t},u),{},{components:r})):a.a.createElement(s,o({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=O;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);