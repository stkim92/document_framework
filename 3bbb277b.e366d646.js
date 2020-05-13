(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{241:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),l=(r(0),r(530)),o={},i={id:"Product/iMCU/W7500P/Peripherals-internal/flowcontrol",title:"flowcontrol",description:"# UART HardwareControl example",source:"@site/docs/Product/iMCU/W7500P/Peripherals-internal/flowcontrol.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/flowcontrol",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/flowcontrol.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],b={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"uart-hardwarecontrol-example"},"UART HardwareControl example"),Object(l.b)("hr",null),Object(l.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"file    : UART/Uart_HardwareFlowControl/readme.md "),Object(l.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(l.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(l.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(l.b)("li",{parentName:"ul"},"brief   : Description of the Uart HardwareFlowControl example.")),Object(l.b)("hr",null),Object(l.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"example-description"},"Example Description"),Object(l.b)("p",null,"This example provides a description of how to use the UART with hardware flow\ncontrol and communicate with another UART.(UART0 and UART1 connect)\nFirst, the UART2 send the debug data to the hyperterminal.\nThe receive buffer have a RxBufferSize bytes as maximum."),Object(l.b)("p",null,"The UART0/UART1 is configured as follow:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"BaudRate = 115200 baud  "),Object(l.b)("li",{parentName:"ul"},"Word Length = 8 Bits"),Object(l.b)("li",{parentName:"ul"},"One Stop Bit"),Object(l.b)("li",{parentName:"ul"},"No parity"),Object(l.b)("li",{parentName:"ul"},"Hardware flow control enabled (RTS and CTS signals)"),Object(l.b)("li",{parentName:"ul"},"Receive and transmit enable"),Object(l.b)("li",{parentName:"ul"},"Enable FIFOs(FEN of UART_LCR-H)")),Object(l.b)("p",null,"This example describes that the data send from UART0 to UART1.\nThe interrupts are generated when the fill level progresses through the\ntrigger level."),Object(l.b)("p",null,"UART1 Check Point when RX status operate"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The bit RXFF of UARTFR(6) confirm '1'"),Object(l.b)("li",{parentName:"ol"},"The bit BUSY of UARTFR(3) confirm '1'"),Object(l.b)("li",{parentName:"ol"},"Send RTS as '1' (RTS of UARTCR(11))and the nUARTRTS pin is LOW.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"directory-contents"},"Directory contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/main.c                                            (Main program)"),Object(l.b)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/W7500x_conf.h                                     (Library Configuration file)"),Object(l.b)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/W7500x_it.h                                       (Interrupt handlers header file)"),Object(l.b)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/W7500x_it.c                                       (Interrupt handlers)"),Object(l.b)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/MDK/W7500x_Uart_HardwareFlowContolTest.uvproj     (Project file)"),Object(l.b)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/GCC/Makefile                        \t\t\t(GCC Make file)")),Object(l.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This example runs on W7500 Connectivity line Devices."),Object(l.b)("li",{parentName:"ul"},"W7500 Set-up")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"   --------------            --------------\n  |    UART0     |          |    UART1     |\n  |              |          |              |\n  |   (PA_13)TXD |----------|   RXD(PB_03) |\n  |   (PA_14)RXD |----------|   TXD(PB_02) |\n  |   (PA_11)CTS |----------|   RTS(PB_01) |\n  |   (PA_12)RTS |----------|   CTS(PB_00) |\n  |              |          |              |\n  |              |          |              |\n   --------------            --------------\n\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"CTS(PA11) and RTS(PB00) connected."),Object(l.b)("li",{parentName:"ul"},"RTS(PA12) and CTS(PB01) connected."),Object(l.b)("li",{parentName:"ul"},"TXD(PA13) and RXD(PB02) connected."),Object(l.b)("li",{parentName:"ul"},"RXD(PA14) and TXD(PB03) connected.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(l.b)("p",null,"In order to make the program work, you must do the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Copy all source files from this example folder to the template folder under\nProject\\Peripheral_Example"),Object(l.b)("li",{parentName:"ul"},"Open your preferred toolchain "),Object(l.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory"),Object(l.b)("li",{parentName:"ul"},"Run the example ")),Object(l.b)("hr",null),Object(l.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}u.isMDXComponent=!0},530:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(r),O=n,m=p["".concat(o,".").concat(O)]||p[O]||d[O]||l;return r?a.a.createElement(m,i({ref:t},b,{components:r})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<l;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);