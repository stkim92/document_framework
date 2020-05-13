(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),l=(n(0),n(652)),i={},o={id:"Product/iMCU/W7500/Peripherals-internal/printf",title:"printf",description:"# UART Polling example",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/printf.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/printf",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/printf.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],u={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"uart-polling-example"},"UART Polling example"),Object(l.b)("hr",null),Object(l.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"file    : UART/Polling/readme.md "),Object(l.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(l.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(l.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(l.b)("li",{parentName:"ul"},"brief   : Description of the UART_Polling example.")),Object(l.b)("hr",null),Object(l.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"example-description"},"Example Description"),Object(l.b)("p",null,"This example provides a basic communication between UART0 and UART1 using flags."),Object(l.b)("p",null,'First, the UART0 sends TxBuffer to UART1. The UART1 reads the received data and\nstore it into RxBuffer.\nThe received data is then compared with the send ones and the result of this\ncomparison is stored in the "TransferStatus" variable.'),Object(l.b)("p",null,"The UART0/UART1 is configured as follow:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"BaudRate = 115200 baud  "),Object(l.b)("li",{parentName:"ul"},"Word Length = 8 Bits"),Object(l.b)("li",{parentName:"ul"},"One Stop Bit"),Object(l.b)("li",{parentName:"ul"},"No parity"),Object(l.b)("li",{parentName:"ul"},"Hardware flow control disable"),Object(l.b)("li",{parentName:"ul"},"Receive and transmit enable")),Object(l.b)("p",null,"This example describes that the data send from UART0 to UART1."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"directory-contents"},"Directory contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"UART/Polling/main.c                                            (Main program)"),Object(l.b)("li",{parentName:"ul"},"UART/Polling/W7500x_conf.h                                     (Library Configuration file)"),Object(l.b)("li",{parentName:"ul"},"UART/Polling/W7500x_it.h                                       (Interrupt handlers header file)"),Object(l.b)("li",{parentName:"ul"},"UART/Polling/W7500x_it.c                                       (Interrupt handlers)"),Object(l.b)("li",{parentName:"ul"},"UART/Polling/MDK/W7500x_Uart_Polling.uvproj                    (Project file)"),Object(l.b)("li",{parentName:"ul"},"UART/Polling/GCC/Makefile                        \t\t   \t  (GCC Make file)")),Object(l.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This example runs on W7500 Connectivity line Devices."),Object(l.b)("li",{parentName:"ul"},"W7500 Set-up")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"   --------------            --------------\n  |    UART0     |          |     UART1    |\n  |              |          |              |\n  |   (PA_13)TXD |----------|   RXD(PB_03) |\n  |   (PA_14)RXD |----------|   TXD(PB_03) |\n  |              |          |              |\n  |              |          |              |\n   --------------            --------------\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"TXD(PA13) and  RXD(PB_03) connected."),Object(l.b)("li",{parentName:"ul"},"RXD(PA14) and  TXD(PB_02) connected.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(l.b)("p",null,"In order to make the program work, you must do the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Copy all source files from this example folder to the template folder under\nProject\\Peripheral_Example"),Object(l.b)("li",{parentName:"ul"},"Open your preferred toolchain "),Object(l.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory"),Object(l.b)("li",{parentName:"ul"},"Run the example ")),Object(l.b)("hr",null),Object(l.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}b.isMDXComponent=!0},652:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,s=p["".concat(i,".").concat(d)]||p[d]||O[d]||l;return n?a.a.createElement(s,o({ref:t},u,{components:n})):a.a.createElement(s,o({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);