(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{516:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(b,".").concat(m)]||u[m]||s[m]||c;return r?a.a.createElement(d,l(l({ref:t},o),{},{components:r})):a.a.createElement(d,l({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,b=new Array(c);b[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=r[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),c=(r(0),r(516)),b={id:"w5500_evb",title:"W5500-EVB",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/iEthernet/W5500/W5500-EVB/w5500_evb",id:"Product/iEthernet/W5500/W5500-EVB/w5500_evb",isDocsHomePage:!1,title:"W5500-EVB",description:"- W5500 chip development platform for net enabled microcotroller",source:"@site/docs\\Product\\iEthernet\\W5500\\W5500-EVB\\W5500-EVB.md",permalink:"/docs/Product/iEthernet/W5500/W5500-EVB/w5500_evb",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/W5500-EVB/W5500-EVB.md",sidebar:"someSidebar",previous:{title:"ESD Test Document",permalink:"/docs/Product/iEthernet/W5500/esd_test_document"},next:{title:"Getting Started",permalink:"/docs/Product/iEthernet/W5500/W5500-EVB/getting_started"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Make New W5500 EVB Projects",id:"make-new-w5500-evb-projects",children:[]},{value:"Technical Reference",id:"technical-reference",children:[]},{value:"Etc.",id:"etc",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Where to Buy",id:"where-to-buy",children:[]}],o={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"W5500 chip development platform for ",Object(c.b)("strong",{parentName:"li"},"net enabled")," microcotroller\napplications"),Object(c.b)("li",{parentName:"ul"},"Ethernet (W5500 Hardwired TCP/IP chip) and 32-bit ARM\xae Cortex\u2122-M0\nbased designs"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Arduino Pin-compatible")," platform hardware. ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/w5500-evb_side.png",alt:"W5500 EVB Rev1.0"}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"W5500 EVB is an evaluation board for W5500 chip based on the 32-bit ARM\xae\nCortex\u2122-M0 microcontroller. It is the easy way to develop internet\nconnection for efficient and small embedded systems using W5500,\nWIZnet's hardwired TCP/IP embedded Ethernet controller. It has been\ndesigned to be hardware pin-compatible with 'Arduino shields' for the\n'Arduino UNO Rev3' and other footprint-compatible boards."),Object(c.b)("p",null,"It is based on the NXP LPC11E36 MCU with a 32-bit ARM\xae Cortex\u2122-M0 core\nrunning at 50MHz. It includes 96kB Flash memory, 12kB SRAM, 4kB EEPROM\nand various interfaces, including SPI/SSP, I2C, UART, ADC, PWM and other\nI/O interfaces. Additionally, the on-board temperature sensor /\npotentiometer is ready for useful ADC control examples. Two programmable\npush button switches, one RGB LED, an external 4-Mbit serial dataflash\nmemory and a 10/100 Base-Tx RJ-45 connector with an integrated\ntransformer are on board to implement embedded networking applications."),Object(c.b)("p",null,"The W5500 EVB provides benefits in developing easier and powerful\nnetwork applications on small form-factor and non-OS based embedded\ndevices using the W5500 chip."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/w5500_evb_v1.0_composition.png",alt:"W5500 EVB\nRev1.0"}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"features"},"Features"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"WIZnet W5500 Hardwired TCP/IP chip")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Hardwired TCP/IP embedded Ethernet controller"),Object(c.b)("li",{parentName:"ul"},"SPI (Serial Peripheral Interface) Microcontroller Interface"),Object(c.b)("li",{parentName:"ul"},"32kB internal Tx/Rx socket buffer memory"),Object(c.b)("li",{parentName:"ul"},"Hardwired TCP/IP stack supports TCP, UDP, IPv4, ICMP, ARP, IGMP, and\nPPPoE protocols"),Object(c.b)("li",{parentName:"ul"},"Easy to implement of the other network protocols"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/W5500/Overview.md"}),"W5500 Product page"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"NXP LPC11E36/501 MCU (LPC11E36FHN33)")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"32-bit ARM\xae Cortex\u2122-M0 microcontroller running at up to 50MHz"),Object(c.b)("li",{parentName:"ul"},"96kB on-chip flash program memory"),Object(c.b)("li",{parentName:"ul"},"12kB on-chip SRAM data memory"),Object(c.b)("li",{parentName:"ul"},"4kB on-chip EEPROM data memory"),Object(c.b)("li",{parentName:"ul"},"1 x UART"),Object(c.b)("li",{parentName:"ul"},"1 x I2C"),Object(c.b)("li",{parentName:"ul"},"2 x SPI/SSP"),Object(c.b)("li",{parentName:"ul"},"8 x 10-bit ADC"),Object(c.b)("li",{parentName:"ul"},"4 x Timer (16, 32-bit)"),Object(c.b)("li",{parentName:"ul"},"11 x PWM"),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.nxp.com/products/microcontrollers/cortex_m0_m0/lpc1100/LPC11E36FHN33.html"}),"NXP LPC11E36FHN33 Product page"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"On-board Temperature sensor")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Microchip TC1047A (Temperature-to-Voltage Converter)"),Object(c.b)("li",{parentName:"ul"},"Supply Voltage Range: 2.7V to 4.4V"),Object(c.b)("li",{parentName:"ul"},"Wide Temperature Measurement Range: -40 to +125 celsius degrees"),Object(c.b)("li",{parentName:"ul"},"High Temperature Converter Accuracy: 2 celsius degrees, Max, at 25\ncelsius degrees"),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.microchip.com/wwwproducts/Devices.aspx?product=TC1047"}),"Microchip TC1047A Product page"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Connectors")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Pin-compatible with Arduino Shields designed for the UNO Rev3",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Digital pins D0 to D15, Analog inputs A0 to A5, the power header\nand Etc."))),Object(c.b)("li",{parentName:"ul"},"10/100Mbps Ethernet (RJ-45 with transformer)"),Object(c.b)("li",{parentName:"ul"},"Virtual COM Port(UART via USB Mini-B) - \ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.ftdichip.com/Drivers/VCP.htm"}),"FTDI Drivers Download\nPage")),Object(c.b)("li",{parentName:"ul"},"ARM standard debug connector: 10-pin Cortex debug connector for SWD\n(Serial Wire Debug)")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Others")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"2 x User's Push button switches"),Object(c.b)("li",{parentName:"ul"},"1 x RGB LED"),Object(c.b)("li",{parentName:"ul"},"1 x Potentiometer (ADC)"),Object(c.b)("li",{parentName:"ul"},"External 4-Mbit serial dataflash (SPI, 2048 pages x 256/264\nbyte/page)"),Object(c.b)("li",{parentName:"ul"},"Industrial temperature specified (-40 to +85 degrees Celsius)"),Object(c.b)("li",{parentName:"ul"},"[Reset]"," and ","[ISP mode][1]"," Push button switch")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Form-factor")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Dimension : 93 X 53 X 17.3(H) (Unit : mm)"),Object(c.b)("li",{parentName:"ul"},"5V DC power supply and +5V/500mA from power supply USB connector"),Object(c.b)("li",{parentName:"ul"},"GPIO Input Voltage : 0 ","~"," 5V"),Object(c.b)("li",{parentName:"ul"},"GPIO Output Voltage : 0 ","~"," 3.3V"),Object(c.b)("li",{parentName:"ul"},"Two layer PCB (FR-4 material, 1.6T)")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Arduino Compatible Header Pinout")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/w5500_evb_v1.0_arduino_pin_map.png",alt:"W5500 EVB Rev1.0 Arduino Compatible Header Pin Map"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"External Pinout")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/w5500_evb_v1.0_external_pin_map.png",alt:"W5500 EVB Rev1.0 External Pin Map"}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"firmware"},"Firmware"),Object(c.b)("p",null,"W5500 EVB firmware project based on LPCXpresso IDE. For more details about LPCXpresso IDE, please refer to \ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.lpcware.com/lpcxpresso"}),"NXP LPCXpresso platform page"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"LPCXpresso IDE Install & Activation Guide"),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"how_to_install_and_activate_lpcxpresso"}),"How to Install and Activate LPCXpresso IDE")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Download the Libraries and Application example source code for W5500-EVB"),"\n\ud83c\udf0e","[https://github.com/Wiznet/W5500_EVB]"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"getting-started"},"Getting Started"),Object(c.b)("p",null," \ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Product/iEthernet/W5500/W5500-EVB/getting_started"}),"Hello World","!")),Object(c.b)("p",null," \ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Product/iEthernet/W5500/W5500-EVB/getting_started#downloading_a_new_program"}),"Downloading a new program")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"make-new-w5500-evb-projects"},"Make New W5500 EVB Projects"),Object(c.b)("p",null," \ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Product/iEthernet/W5500/W5500-EVB/make_new_projects"}),"Make a new W5500 EVB\nproject with LPCXpresso IDE")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"technical-reference"},"Technical Reference"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Datasheet")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/Product/iEthernet/W5500/datasheet"}),"W5500 Datasheet")),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.nxp.com/documents/data_sheet/LPC11E3X.pdf"}),"NXP LPC11E3x Datasheet")),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://ww1.microchip.com/downloads/en/DeviceDoc/21498D.pdf"}),"Microchip TC1027/TC1047A Datasheet"),"\n(Temperature Sensor)"),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/w5500/w5500_evb/at45db041d-su.pdf"}),"ATMEL AT45DB041D Datasheet")," (External Dataflash Memory)")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Schematic")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/w5500/w5500_evb/icons/download.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/w5500/w5500_evb/w5500_evb_v1.0_140527.zip"}),"W5500 EVB Rev1.0 Schematic(Eagle CAD)")," (Last updated on 2014-05-27)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/w5500/w5500_evb/icons/download.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/w5500/w5500_evb/w5500_evb_v1.0_140527.pdf"}),"W5500 EVB Rev1.0 Schematic(PDF)"),"\n(Last updated on 2014-05-27)")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Part list")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/w5500/w5500_evb/icons/download.png",alt:null}))," ",Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/w5500/w5500_evb/w5500_evb_pl_140527-1.pdf",alt:"W5500 EVB Rev1.0 Part List"})),"\n(Last updated on 2014-05-27)")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"W5500-EVB DXF files")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/w5500/w5500_evb/w5500-evb-dxf.zip",alt:"W5500-EVB DXF File"})))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Dimension")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"W5500 EVB Rev1.0 Dimension : ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/w5500_evb_v1.0_demension.png",alt:null}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"etc"},"Etc."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Virtual COM Port Drivers")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.ftdichip.com/Drivers/VCP.htm"}),"FTDI Virtual COM Port\nDrivers Page"))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"see-also"},"See Also"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.wiznet.co.kr/product-item/w5500"}),"WIZnet Website - W5500")," : W5500 Chip\nfeatures, Pin assignment and Hardware Ref. Design Guide"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://forum.wiznet.io/"}),"WizWiki Forum")," : WIZnet Forum for Technical\nsupport and Project shared"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"where-to-buy"},"Where to Buy"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/buy_now.jpg",alt:"WIZnet Online Shop"})),Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.shopwiznet.com/"}),Object(c.b)("img",Object(n.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/dollar.png",alt:"WIZnetUS Online Shop, USA"}))),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://shop.wiznet.eu/"}),Object(c.b)("img",Object(n.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/european-euro.png",alt:"WIZnetEU Online Shop, Germany"}))),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://shop.wiznet.co.kr/"}),Object(c.b)("img",Object(n.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/won.png",alt:"WIZnetKorea Online Shop, Korea"})))))}p.isMDXComponent=!0}}]);