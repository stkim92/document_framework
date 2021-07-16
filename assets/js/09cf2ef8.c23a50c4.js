(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[82780],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1999:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(22122),l=n(19756),i=(n(67294),n(3905)),a=["components"],o={id:"printf",title:"UART Polling example",date:new Date("2020-04-03T00:00:00.000Z")},u=void 0,p={unversionedId:"Product/iMCU/W7500/Peripherals-internal/printf",id:"Product/iMCU/W7500/Peripherals-internal/printf",isDocsHomePage:!1,title:"UART Polling example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/printf.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/printf",permalink:"/Product/iMCU/W7500/Peripherals-internal/printf",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/printf.md",version:"current",frontMatter:{id:"printf",title:"UART Polling example",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"UART Printf example",permalink:"/Product/iMCU/W7500/Peripherals-internal/polling"},next:{title:"Pulse Width Modulation (PWM)",permalink:"/Product/iMCU/W7500/Peripherals-internal/pwm"}},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]}],d={toc:c};function s(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"file    : UART/Polling/readme.md "),(0,i.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,i.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,i.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,i.kt)("li",{parentName:"ul"},"brief   : Description of the UART_Polling example.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"example-description"},"Example Description"),(0,i.kt)("p",null,"This example provides a basic communication between UART0 and UART1 using flags."),(0,i.kt)("p",null,'First, the UART0 sends TxBuffer to UART1. The UART1 reads the received data and\nstore it into RxBuffer.\nThe received data is then compared with the send ones and the result of this\ncomparison is stored in the "TransferStatus" variable.'),(0,i.kt)("p",null,"The UART0/UART1 is configured as follow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BaudRate = 115200 baud  "),(0,i.kt)("li",{parentName:"ul"},"Word Length = 8 Bits"),(0,i.kt)("li",{parentName:"ul"},"One Stop Bit"),(0,i.kt)("li",{parentName:"ul"},"No parity"),(0,i.kt)("li",{parentName:"ul"},"Hardware flow control disable"),(0,i.kt)("li",{parentName:"ul"},"Receive and transmit enable")),(0,i.kt)("p",null,"This example describes that the data send from UART0 to UART1."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"UART/Polling/main.c                                            (Main program)"),(0,i.kt)("li",{parentName:"ul"},"UART/Polling/W7500x_conf.h                                     (Library Configuration file)"),(0,i.kt)("li",{parentName:"ul"},"UART/Polling/W7500x_it.h                                       (Interrupt handlers header file)"),(0,i.kt)("li",{parentName:"ul"},"UART/Polling/W7500x_it.c                                       (Interrupt handlers)"),(0,i.kt)("li",{parentName:"ul"},"UART/Polling/MDK/W7500x_Uart_Polling.uvproj                    (Project file)"),(0,i.kt)("li",{parentName:"ul"},"UART/Polling/GCC/Makefile                        \t\t   \t  (GCC Make file)")),(0,i.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This example runs on W7500 Connectivity line Devices."),(0,i.kt)("li",{parentName:"ul"},"W7500 Set-up")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   --------------            --------------\n  |    UART0     |          |     UART1    |\n  |              |          |              |\n  |   (PA_13)TXD |----------|   RXD(PB_03) |\n  |   (PA_14)RXD |----------|   TXD(PB_03) |\n  |              |          |              |\n  |              |          |              |\n   --------------            --------------\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TXD(PA13) and  RXD(PB_03) connected."),(0,i.kt)("li",{parentName:"ul"},"RXD(PA14) and  TXD(PB_02) connected.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,i.kt)("p",null,"In order to make the program work, you must do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy all source files from this example folder to the template folder under\nProject\\Peripheral_Example"),(0,i.kt)("li",{parentName:"ul"},"Open your preferred toolchain "),(0,i.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory"),(0,i.kt)("li",{parentName:"ul"},"Run the example ")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}s.isMDXComponent=!0}}]);