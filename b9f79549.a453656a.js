(window.webpackJsonp=window.webpackJsonp||[]).push([[323],{384:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return j}));var n=a(2),r=a(6),b=(a(0),a(516)),l={id:"lm75_temperature",title:"I2C and LM75 Temperature Sensor communication example",date:new Date("2020-06-10T00:00:00.000Z")},c={unversionedId:"Product/iMCU/W7500/Peripherals-internal/lm75_temperature",id:"Product/iMCU/W7500/Peripherals-internal/lm75_temperature",isDocsHomePage:!1,title:"I2C and LM75 Temperature Sensor communication example",description:"********************",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\lm75_temperature.md",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/lm75_temperature",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/lm75_temperature.md"},O=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"LM75 Pin Configuration",id:"lm75-pin-configuration",children:[]},{value:"LM75 Pin Description",id:"lm75-pin-description",children:[{value:"LM75 register",id:"lm75-register",children:[]},{value:"LM75 Device Address",id:"lm75-device-address",children:[]},{value:"LM75 Temp register table",id:"lm75-temp-register-table",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]},{value:"Flow Chart",id:"flow-chart",children:[]}]}],i={rightToc:O};function j(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("hr",null),Object(b.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"file    : I2C/I2C_Temperture_LM75A/readme.md "),Object(b.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(b.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(b.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(b.b)("li",{parentName:"ul"},"brief   :  Description of the I2C and LM75 Temperature Sensor communication example.")),Object(b.b)("hr",null),Object(b.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"example-description"},"Example Description"),Object(b.b)("p",null,"This example provides a description of how to use I2C to communicate with a\nLM75 I2C temperature sensor is mounted on the evaluation board and used to get\ninstantaneous external temperature."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"directory-contents"},"Directory contents"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"I2C/I2C_Temperture_LM75A/main.c                              \t\t\t\t(Main program)"),Object(b.b)("li",{parentName:"ul"},"I2C/I2C_Temperture_LM75A/W7500x_it.c                       \t\t\t\t\t(Interrupt Handlers)"),Object(b.b)("li",{parentName:"ul"},"I2C/I2C_Temperture_LM75A/W7500x_it.h                     \t\t\t\t  \t(Interrupt Handlers Header file)"),Object(b.b)("li",{parentName:"ul"},"I2C/I2C_Temperture_LM75A/W7500x_conf.h                     \t\t\t\t\t(Library Configuration file)"),Object(b.b)("li",{parentName:"ul"},"I2C/I2C_Temperture_LM75A/MDK//W7500x_I2C_Temperture_LM75A.uvproj         \t(Project file)"),Object(b.b)("li",{parentName:"ul"},"I2C/I2C_Temperture_LM75A/GCC/Makefile                      \t\t\t\t\t(GCC Make file)")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"  --W7500--        --LM75--\n |         |      |        |\n |     SDA |------| SDA    |\n |     SCL |------| SCL    |\n |         |      |        |\n |         |      |        |\n  ---------       ---------\n")),Object(b.b)("h3",{id:"lm75-pin-configuration"},"LM75 Pin Configuration"),Object(b.b)("blockquote",null),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"     -----      \n  SDA |1   8| VCC\n  SCL |2   7| A0 \n  OS  |3   6| A1 \n  GND |4   5| A2 \n     -----\n")),Object(b.b)("h2",{id:"lm75-pin-description"},"LM75 Pin Description"),Object(b.b)("hr",null),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"PIN"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SYMBOL"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SDA"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Digital I/O. I2C serial bi-directional data line. Open Drain")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SCL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Digital input. I2C serial clock input.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OS"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overtemp Shutdown output. Open Drain.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GND"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ground. To be connected to the system ground.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Digital input. User-defined address bit2.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Digital input. User-defined address bit1.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"7"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Digital input. User-defined address bit0.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"VCC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Power supply.")))),Object(b.b)("h3",{id:"lm75-register"},"LM75 register"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"REG NAME"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Addr"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"R/W"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"RST Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Temp"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x00"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"R/W"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configuration Register.",Object(b.b)("br",null),"Contains a single 8-bit data byte.",Object(b.b)("br",null),"To set the device operating condition",Object(b.b)("br",null),"Default = 0.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Conf"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x01"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"R"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"N/A"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Temperature Register.",Object(b.b)("br",null),"Contains two 8-bit data bytes.",Object(b.b)("br",null),"To store the measured Temp data.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Thyrs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x02"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"R/W"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x5000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Over-temp Shutdown threshold Register.",Object(b.b)("br",null),"Contains two 8-bit data bytes.",Object(b.b)("br",null),"To store the over-temp shut-down Tos limit.",Object(b.b)("br",null)," Default = 80c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tos"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x03"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"R/W"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x4B00"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hysteresis Register.",Object(b.b)("br",null),"Contains two 8-bit data bytes.",Object(b.b)("br",null),"To store the hysteresis Thyst limit.",Object(b.b)("br",null),"                    Default = 75C.")))),Object(b.b)("h3",{id:"lm75-device-address"},"LM75 Device Address"),Object(b.b)("blockquote",null),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"       --- --- --- --- --- --- --- \n      | 1 | 0 | 0 | 1 |A2 | A1| A0|\n       --- --- --- --- --- --- --- \n                                LSB\n                                \n")),Object(b.b)("h3",{id:"lm75-temp-register-table"},"LM75 Temp register table"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Temp MS byte"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Temp LS byte"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MSB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LSB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MSB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LSB")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B7"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B7"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Temp data(11bits)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Not Used"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MSB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LSB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MSB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LSB")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D10"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D9"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D7"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"D0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"X")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(b.b)("p",null,"In order to make the program work, you must do the following :"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(b.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(b.b)("li",{parentName:"ul"},"Run the example."),Object(b.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(b.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},'"',Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"https://forum.wiznet.io/%22"}),'https://forum.wiznet.io/"'))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"flow-chart"},"Flow Chart"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Master Init"),Object(b.b)("li",{parentName:"ul"},"Slave address send from W7500 to LM75"),Object(b.b)("li",{parentName:"ul"},"START enable"),Object(b.b)("li",{parentName:"ul"},"Confirm the Ack Receive"),Object(b.b)("li",{parentName:"ul"},"Send the data from W7500 to LM75"),Object(b.b)("li",{parentName:"ul"},"Restart enable"),Object(b.b)("li",{parentName:"ul"},"Confirm the Ack Receive"),Object(b.b)("li",{parentName:"ul"},"Receive the data"),Object(b.b)("li",{parentName:"ul"},"Transmit the Ack transmission"),Object(b.b)("li",{parentName:"ul"},"STOP enable")),Object(b.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}j.isMDXComponent=!0},516:function(t,e,a){"use strict";a.d(e,"a",(function(){return u})),a.d(e,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=r.a.createContext({}),j=function(t){var e=r.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},u=function(t){var e=j(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,l=t.parentName,i=O(t,["components","mdxType","originalType","parentName"]),u=j(a),m=n,d=u["".concat(l,".").concat(m)]||u[m]||p[m]||b;return a?r.a.createElement(d,c(c({ref:e},i),{},{components:a})):r.a.createElement(d,c({ref:e},i))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,l=new Array(b);l[0]=m;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);