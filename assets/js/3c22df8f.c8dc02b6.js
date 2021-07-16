(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[3328],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18213:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),o=["components"],i={id:"flowcontrol",title:"UART Hardware Control example",date:new Date("2020-06-10T00:00:00.000Z")},u=void 0,p={unversionedId:"Product/iMCU/W7500/Peripherals-internal/flowcontrol",id:"Product/iMCU/W7500/Peripherals-internal/flowcontrol",isDocsHomePage:!1,title:"UART Hardware Control example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/flowcontrol.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/flowcontrol",permalink:"/Product/iMCU/W7500/Peripherals-internal/flowcontrol",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/flowcontrol.md",version:"current",frontMatter:{id:"flowcontrol",title:"UART Hardware Control example",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"Embedded Flash memory",permalink:"/Product/iMCU/W7500/Peripherals-internal/flash"},next:{title:"General Purpose Input/Outputs (GPIO)",permalink:"/Product/iMCU/W7500/Peripherals-internal/gpio"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"file    : UART/Uart_HardwareFlowControl/readme.md "),(0,l.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,l.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,l.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,l.kt)("li",{parentName:"ul"},"brief   : Description of the Uart HardwareFlowControl example.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"example-description"},"Example Description"),(0,l.kt)("p",null,"This example provides a description of how to use the UART with hardware flow\ncontrol and communicate with another UART.(UART0 and UART1 connect)\nFirst, the UART2 send the debug data to the hyperterminal.\nThe receive buffer have a RxBufferSize bytes as maximum."),(0,l.kt)("p",null,"The UART0/UART1 is configured as follow:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BaudRate = 115200 baud  "),(0,l.kt)("li",{parentName:"ul"},"Word Length = 8 Bits"),(0,l.kt)("li",{parentName:"ul"},"One Stop Bit"),(0,l.kt)("li",{parentName:"ul"},"No parity"),(0,l.kt)("li",{parentName:"ul"},"Hardware flow control enabled (RTS and CTS signals)"),(0,l.kt)("li",{parentName:"ul"},"Receive and transmit enable"),(0,l.kt)("li",{parentName:"ul"},"Enable FIFOs(FEN of UART_LCR-H)")),(0,l.kt)("p",null,"This example describes that the data send from UART0 to UART1.\nThe interrupts are generated when the fill level progresses through the\ntrigger level."),(0,l.kt)("p",null,"UART1 Check Point when RX status operate"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The bit RXFF of UARTFR(6) confirm '1'"),(0,l.kt)("li",{parentName:"ol"},"The bit BUSY of UARTFR(3) confirm '1'"),(0,l.kt)("li",{parentName:"ol"},"Send RTS as '1' (RTS of UARTCR(11))and the nUARTRTS pin is LOW.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/main.c                                            (Main program)"),(0,l.kt)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/W7500x_conf.h                                     (Library Configuration file)"),(0,l.kt)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/W7500x_it.h                                       (Interrupt handlers header file)"),(0,l.kt)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/W7500x_it.c                                       (Interrupt handlers)"),(0,l.kt)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/MDK/W7500x_Uart_HardwareFlowContolTest.uvproj     (Project file)"),(0,l.kt)("li",{parentName:"ul"},"UART/Uart_HardwareFlowControl/GCC/Makefile                        \t\t\t(GCC Make file)")),(0,l.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This example runs on W7500 Connectivity line Devices."),(0,l.kt)("li",{parentName:"ul"},"W7500 Set-up")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   --------------            --------------\n  |    UART0     |          |    UART1     |\n  |              |          |              |\n  |   (PA_13)TXD |----------|   RXD(PB_03) |\n  |   (PA_14)RXD |----------|   TXD(PB_02) |\n  |   (PA_11)CTS |----------|   RTS(PB_01) |\n  |   (PA_12)RTS |----------|   CTS(PB_00) |\n  |              |          |              |\n  |              |          |              |\n   --------------            --------------\n\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CTS(PA11) and RTS(PB00) connected."),(0,l.kt)("li",{parentName:"ul"},"RTS(PA12) and CTS(PB01) connected."),(0,l.kt)("li",{parentName:"ul"},"TXD(PA13) and RXD(PB02) connected."),(0,l.kt)("li",{parentName:"ul"},"RXD(PA14) and TXD(PB03) connected.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,l.kt)("p",null,"In order to make the program work, you must do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy all source files from this example folder to the template folder under\nProject\\Peripheral_Example"),(0,l.kt)("li",{parentName:"ul"},"Open your preferred toolchain "),(0,l.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory"),(0,l.kt)("li",{parentName:"ul"},"Run the example ")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}m.isMDXComponent=!0}}]);