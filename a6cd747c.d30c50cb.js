(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{458:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(9),l=(n(0),n(629)),b={},c={id:"Product/iMCU/W7500/Peripherals-internal/eeprom",title:"eeprom",description:"# I2C and M24CXX EEPROM communication example\r",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\eeprom.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/eeprom",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/eeprom.md"},i=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"EEPROM M24Cxx Pin Configuration",id:"eeprom-m24cxx-pin-configuration",children:[]},{value:"EEPROM M24Cxx Pin Description",id:"eeprom-m24cxx-pin-description",children:[]},{value:"EEPROM M24Cxx Write Protect",id:"eeprom-m24cxx-write-protect",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]},{value:"Flow Chart",id:"flow-chart",children:[]}],O={rightToc:i};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"i2c-and-m24cxx-eeprom-communication-example"},"I2C and M24CXX EEPROM communication example"),Object(l.b)("hr",null),Object(l.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"file    : I2C/I2C_EEPROM_24LC02B/readme.md "),Object(l.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(l.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(l.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(l.b)("li",{parentName:"ul"},"brief   : Description of the I2C and M24CXX EEPROM communication example.")),Object(l.b)("hr",null),Object(l.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"example-description"},"Example Description"),Object(l.b)("p",null,"This example provides a basic example of how to use the I2C firmware library and\nan associate I2C EEPROM driver to communicate with an I2C EEPROM device (here the\nexample is interfacing with M24CXX EEPROMs where XX={01, 02, 04, 08, 16, 32, 64}."),Object(l.b)("p",null,"I2C peripheral is configured in Master transmitter during write operation and in\nMaster receiver during read operation from I2C EEPROM. "),Object(l.b)("p",null,"For M24C02 to M24C15 devices, one I2C EEPROM Block address where the program\nwill write the buffer have to be selected from the four address available,\nThe EEPROM addresses where the progran start the write and the read operations\nis defined in the main.c file"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"directory-contents"},"Directory contents"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/main.c                              \t(Main program)"),Object(l.b)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/W7500x_it.c                       \t\t(Interrupt Handlers)"),Object(l.b)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/W7500x_it.h                       \t\t(Interrupt Handlers Header file)"),Object(l.b)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/W7500x_conf.h                     \t\t(Library Configuration file)"),Object(l.b)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/MDK/W7500x_I2C_EEPROM_24LC02B.uvproj\t\t(Project file)"),Object(l.b)("li",{parentName:"ul"},"I2C/I2C_EEPROM_24LC02B/GCC/Makefile                      \t\t(GCC Make file)")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{})," --W7500--        --EEPROM--\n |         |      |          |\n |     SDA |------| SDA      |\n |     SCL |------| SCL      |\n |         |      |          |\n |         |      |          |\n  ---------       -----------\n")),Object(l.b)("h3",{id:"eeprom-m24cxx-pin-configuration"},"EEPROM M24Cxx Pin Configuration"),Object(l.b)("hr",null),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"A0|1   8|VCC\nA1|2   7|WP \nA2|3   6|SCL\n")),Object(l.b)("p",null,"   GND|4   5|SD"),Object(l.b)("h3",{id:"eeprom-m24cxx-pin-description"},"EEPROM M24Cxx Pin Description"),Object(l.b)("hr",null),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"PIN"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"SYMBOL"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A0"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Digital input. User-defined address bit0.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A1"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Digital input. User-defined address bit1.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A2"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Digital input. User-defined address bit2.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GND"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Ground. To be connected to the system ground.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SDA"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Digital I/O. I2C serial bi-directional data line. Open Drain")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"6"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SCL"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Digital input. I2C serial clock input.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"7"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WP"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Write Protect")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"VCC"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Power supply.")))),Object(l.b)("h3",{id:"eeprom-m24cxx-write-protect"},"EEPROM M24Cxx Write Protect"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Part of the Array Protected"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WP Pin Status"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"24C01A"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"24C02"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"24C04"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"24C08A"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"24C16A")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"At VCC"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Full(1K)Array"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Full(1K)Array"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Full(1K)Array"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Full(1K)Array"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Full(1K)Array")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"At GND"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Normal Read/Write Operations"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(l.b)("p",null,"EEPROM M24Cxx Device Address\n",">"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"       --- --- --- --- --- --- --- ---\n1K/2K | 1 | 0 | 1 | 0 | A2| A1| A0|R/W|  \n       --- --- --- --- --- --- --- ---\n                                   LSB\n       --- --- --- --- --- --- --- ---\n  4K  | 1 | 0 | 1 | 0 | A2| A1| P0|R/W|  \n       --- --- --- --- --- --- --- ---\n                                   LSB\n       --- --- --- --- --- --- --- ---\n  8K  | 1 | 0 | 1 | 0 | A2| P1| P0|R/W|  \n       --- --- --- --- --- --- --- ---\n                                   LSB\n       --- --- --- --- --- --- --- ---\n 16K  | 1 | 0 | 1 | 0 | P2| P1| P0|R/W|  \n       --- --- --- --- --- --- --- ---\n                                   LSB\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(l.b)("p",null,"In order to make the program work, you must do the following:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Copy all source files from this example folder to the template folder under\nProject\\Peripheral_Example"),Object(l.b)("li",{parentName:"ul"},"Open your preferred toolchain "),Object(l.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory"),Object(l.b)("li",{parentName:"ul"},"Run the example ")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flow-chart"},"Flow Chart"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Master Init"),Object(l.b)("li",{parentName:"ul"},"Device address send from W7500 to EEPROM"),Object(l.b)("li",{parentName:"ul"},"START enable"),Object(l.b)("li",{parentName:"ul"},"Confirm the Ack Receive"),Object(l.b)("li",{parentName:"ul"},"Slave address send from W7500 to EEPROM"),Object(l.b)("li",{parentName:"ul"},"Confirm the Ack Receive"),Object(l.b)("li",{parentName:"ul"},"Send the data from W7500 to EEPROM"),Object(l.b)("li",{parentName:"ul"},"Restart enable"),Object(l.b)("li",{parentName:"ul"},"Confirm the Ack Receive"),Object(l.b)("li",{parentName:"ul"},"Receive the data"),Object(l.b)("li",{parentName:"ul"},"Transmit the Ack transmission"),Object(l.b)("li",{parentName:"ul"},"STOP enable")),Object(l.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}o.isMDXComponent=!0},629:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=r.a.createContext({}),o=function(e){var t=r.a.useContext(O),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=o(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,m=p["".concat(b,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(m,c({ref:t},O,{components:n})):r.a.createElement(m,c({ref:t},O))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var O=2;O<l;O++)b[O]=n[O];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);