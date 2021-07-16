(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[88863],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(n),k=a,s=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(s,i(i({ref:e},d),{},{components:n})):r.createElement(s,i({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24977:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i=["components"],o={id:"eeprom",title:"I2C and M24CXX EEPROM communication example",date:new Date("2020-06-10T00:00:00.000Z")},p=void 0,u={unversionedId:"Product/iMCU/W7500/Peripherals-internal/eeprom",id:"Product/iMCU/W7500/Peripherals-internal/eeprom",isDocsHomePage:!1,title:"I2C and M24CXX EEPROM communication example",description:"********************",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/eeprom.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/eeprom",permalink:"/Product/iMCU/W7500/Peripherals-internal/eeprom",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/eeprom.md",version:"current",frontMatter:{id:"eeprom",title:"I2C and M24CXX EEPROM communication example",date:"2020-06-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"DNS Client for TCP/IP Offload Engine example",permalink:"/Product/iMCU/W7500/Peripherals-internal/dmdnsclient"},next:{title:"External Interrupt (EXTI)",permalink:"/Product/iMCU/W7500/Peripherals-internal/exti"}},d=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"EEPROM M24Cxx Pin Configuration",id:"eeprom-m24cxx-pin-configuration",children:[]},{value:"EEPROM M24Cxx Pin Description",id:"eeprom-m24cxx-pin-description",children:[]},{value:"EEPROM M24Cxx Write Protect",id:"eeprom-m24cxx-write-protect",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]},{value:"Flow Chart",id:"flow-chart",children:[]}],m={toc:d};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"file    : I2C/I2C_EEPROM_24LC02B/readme.md "),(0,l.kt)("li",{parentName:"ul"},"author  : IOP Team"),(0,l.kt)("li",{parentName:"ul"},"version : V1.0.0"),(0,l.kt)("li",{parentName:"ul"},"date    : 1-May-2015"),(0,l.kt)("li",{parentName:"ul"},"brief   : Description of the I2C and M24CXX EEPROM communication example.")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"example-description"},"Example Description"),(0,l.kt)("p",null,"This example provides a basic example of how to use the I2C firmware library and\nan associate I2C EEPROM driver to communicate with an I2C EEPROM device (here the\nexample is interfacing with M24CXX EEPROMs where XX={01, 02, 04, 08, 16, 32, 64}."),(0,l.kt)("p",null,"I2C peripheral is configured in Master transmitter during write operation and in\nMaster receiver during read operation from I2C EEPROM. "),(0,l.kt)("p",null,"For M24C02 to M24C15 devices, one I2C EEPROM Block address where the program\nwill write the buffer have to be selected from the four address available,\nThe EEPROM addresses where the progran start the write and the read operations\nis defined in the main.c file"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"directory-contents"},"Directory contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/main.c                              \t(Main program)"),(0,l.kt)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/W7500x_it.c                       \t\t(Interrupt Handlers)"),(0,l.kt)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/W7500x_it.h                       \t\t(Interrupt Handlers Header file)"),(0,l.kt)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/W7500x_conf.h                     \t\t(Library Configuration file)"),(0,l.kt)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/MDK/W7500x_I2C_EEPROM_24LC02B.uvproj\t\t(Project file)"),(0,l.kt)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/GCC/Makefile                      \t\t(GCC Make file)")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," --W7500--        --EEPROM--\n |         |      |          |\n |     SDA |------| SDA      |\n |     SCL |------| SCL      |\n |         |      |          |\n |         |      |          |\n  ---------       -----------\n")),(0,l.kt)("h3",{id:"eeprom-m24cxx-pin-configuration"},"EEPROM M24Cxx Pin Configuration"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"A0|1   8|VCC\nA1|2   7|WP \nA2|3   6|SCL\n")),(0,l.kt)("p",null,"   GND|4   5|SD"),(0,l.kt)("h3",{id:"eeprom-m24cxx-pin-description"},"EEPROM M24Cxx Pin Description"),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PIN"),(0,l.kt)("th",{parentName:"tr",align:null},"SYMBOL"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"A0"),(0,l.kt)("td",{parentName:"tr",align:null},"Digital input. User-defined address bit0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"A1"),(0,l.kt)("td",{parentName:"tr",align:null},"Digital input. User-defined address bit1.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"A2"),(0,l.kt)("td",{parentName:"tr",align:null},"Digital input. User-defined address bit2.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"GND"),(0,l.kt)("td",{parentName:"tr",align:null},"Ground. To be connected to the system ground.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"SDA"),(0,l.kt)("td",{parentName:"tr",align:null},"Digital I/O. I2C serial bi-directional data line. Open Drain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"SCL"),(0,l.kt)("td",{parentName:"tr",align:null},"Digital input. I2C serial clock input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"WP"),(0,l.kt)("td",{parentName:"tr",align:null},"Write Protect")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"VCC"),(0,l.kt)("td",{parentName:"tr",align:null},"Power supply.")))),(0,l.kt)("h3",{id:"eeprom-m24cxx-write-protect"},"EEPROM M24Cxx Write Protect"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Part of the Array Protected"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WP Pin Status"),(0,l.kt)("td",{parentName:"tr",align:null},"24C01A"),(0,l.kt)("td",{parentName:"tr",align:null},"24C02"),(0,l.kt)("td",{parentName:"tr",align:null},"24C04"),(0,l.kt)("td",{parentName:"tr",align:null},"24C08A"),(0,l.kt)("td",{parentName:"tr",align:null},"24C16A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"At VCC"),(0,l.kt)("td",{parentName:"tr",align:null},"Full(1K)Array"),(0,l.kt)("td",{parentName:"tr",align:null},"Full(1K)Array"),(0,l.kt)("td",{parentName:"tr",align:null},"Full(1K)Array"),(0,l.kt)("td",{parentName:"tr",align:null},"Full(1K)Array"),(0,l.kt)("td",{parentName:"tr",align:null},"Full(1K)Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"At GND"),(0,l.kt)("td",{parentName:"tr",align:null},"Normal Read/Write Operations"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"EEPROM M24Cxx Device Address\n",">"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"       --- --- --- --- --- --- --- ---\n1K/2K | 1 | 0 | 1 | 0 | A2| A1| A0|R/W|  \n       --- --- --- --- --- --- --- ---\n                                   LSB\n       --- --- --- --- --- --- --- ---\n  4K  | 1 | 0 | 1 | 0 | A2| A1| P0|R/W|  \n       --- --- --- --- --- --- --- ---\n                                   LSB\n       --- --- --- --- --- --- --- ---\n  8K  | 1 | 0 | 1 | 0 | A2| P1| P0|R/W|  \n       --- --- --- --- --- --- --- ---\n                                   LSB\n       --- --- --- --- --- --- --- ---\n 16K  | 1 | 0 | 1 | 0 | P2| P1| P0|R/W|  \n       --- --- --- --- --- --- --- ---\n                                   LSB\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"how-to-use-it-"},"How to use it ?"),(0,l.kt)("p",null,"In order to make the program work, you must do the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copy all source files from this example folder to the template folder under\nProject\\Peripheral_Example"),(0,l.kt)("li",{parentName:"ul"},"Open your preferred toolchain "),(0,l.kt)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory"),(0,l.kt)("li",{parentName:"ul"},"Run the example ")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"flow-chart"},"Flow Chart"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Master Init"),(0,l.kt)("li",{parentName:"ul"},"Device address send from W7500 to EEPROM"),(0,l.kt)("li",{parentName:"ul"},"START enable"),(0,l.kt)("li",{parentName:"ul"},"Confirm the Ack Receive"),(0,l.kt)("li",{parentName:"ul"},"Slave address send from W7500 to EEPROM"),(0,l.kt)("li",{parentName:"ul"},"Confirm the Ack Receive"),(0,l.kt)("li",{parentName:"ul"},"Send the data from W7500 to EEPROM"),(0,l.kt)("li",{parentName:"ul"},"Restart enable"),(0,l.kt)("li",{parentName:"ul"},"Confirm the Ack Receive"),(0,l.kt)("li",{parentName:"ul"},"Receive the data"),(0,l.kt)("li",{parentName:"ul"},"Transmit the Ack transmission"),(0,l.kt)("li",{parentName:"ul"},"STOP enable")),(0,l.kt)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}c.isMDXComponent=!0}}]);