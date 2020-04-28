(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),b=(n(0),n(259)),c={id:"w5500_evb",title:"W5500-EVB",date:new Date("2020-04-07T00:00:00.000Z")},l={id:"Product/iEthernet/W5500/W5500-EVB/w5500_evb",title:"W5500-EVB",description:"## Content\r",source:"@site/docs\\Product\\iEthernet\\W5500\\W5500-EVB\\W5500-EVB.md",permalink:"/docs/Product/iEthernet/W5500/W5500-EVB/w5500_evb",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5500/W5500-EVB/W5500-EVB.md",sidebar:"someSidebar",previous:{title:"All Pages",permalink:"/docs/Product/iEthernet/W5500/all_pages"},next:{title:"Getting Started",permalink:"/docs/Product/iEthernet/W5500/W5500-EVB/getting_started"}},i=[{value:"Content",id:"content",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Make New W5500 EVB Projects",id:"make-new-w5500-evb-projects",children:[]},{value:"Technical Reference",id:"technical-reference",children:[]},{value:"Etc.",id:"etc",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Where to Buy",id:"where-to-buy",children:[]}],o={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"content"},"Content"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"W5500 chip development platform for ",Object(b.b)("strong",{parentName:"li"},"net enabled")," microcotroller\napplications"),Object(b.b)("li",{parentName:"ul"},"Ethernet (W5500 Hardwired TCP/IP chip) and 32-bit ARM\xae Cortex\u2122-M0\nbased designs"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Arduino Pin-compatible")," platform hardware. ")),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/w5500-evb_side.png",alt:"W5500 EVB Rev1.0"}))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"overview"},"Overview"),Object(b.b)("p",null,"W5500 EVB is an evaluation board for W5500 chip based on the 32-bit ARM\xae\nCortex\u2122-M0 microcontroller. It is the easy way to develop internet\nconnection for efficient and small embedded systems using W5500,\nWIZnet's hardwired TCP/IP embedded Ethernet controller. It has been\ndesigned to be hardware pin-compatible with 'Arduino shields' for the\n'Arduino UNO Rev3' and other footprint-compatible boards."),Object(b.b)("p",null,"It is based on the NXP LPC11E36 MCU with a 32-bit ARM\xae Cortex\u2122-M0 core\nrunning at 50MHz. It includes 96kB Flash memory, 12kB SRAM, 4kB EEPROM\nand various interfaces, including SPI/SSP, I2C, UART, ADC, PWM and other\nI/O interfaces. Additionally, the on-board temperature sensor /\npotentiometer is ready for useful ADC control examples. Two programmable\npush button switches, one RGB LED, an external 4-Mbit serial dataflash\nmemory and a 10/100 Base-Tx RJ-45 connector with an integrated\ntransformer are on board to implement embedded networking applications."),Object(b.b)("p",null,"The W5500 EVB provides benefits in developing easier and powerful\nnetwork applications on small form-factor and non-OS based embedded\ndevices using the W5500 chip."),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/w5500_evb_v1.0_composition.png",alt:"W5500 EVB\nRev1.0"}))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"features"},"Features"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"WIZnet W5500 Hardwired TCP/IP chip")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Hardwired TCP/IP embedded Ethernet controller"),Object(b.b)("li",{parentName:"ul"},"SPI (Serial Peripheral Interface) Microcontroller Interface"),Object(b.b)("li",{parentName:"ul"},"32kB internal Tx/Rx socket buffer memory"),Object(b.b)("li",{parentName:"ul"},"Hardwired TCP/IP stack supports TCP, UDP, IPv4, ICMP, ARP, IGMP, and\nPPPoE protocols"),Object(b.b)("li",{parentName:"ul"},"Easy to implement of the other network protocols"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"w5500.md"}),"W5500 Product page"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"NXP LPC11E36/501 MCU (LPC11E36FHN33)")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"32-bit ARM\xae Cortex\u2122-M0 microcontroller running at up to 50MHz"),Object(b.b)("li",{parentName:"ul"},"96kB on-chip flash program memory"),Object(b.b)("li",{parentName:"ul"},"12kB on-chip SRAM data memory"),Object(b.b)("li",{parentName:"ul"},"4kB on-chip EEPROM data memory"),Object(b.b)("li",{parentName:"ul"},"1 x UART"),Object(b.b)("li",{parentName:"ul"},"1 x I2C"),Object(b.b)("li",{parentName:"ul"},"2 x SPI/SSP"),Object(b.b)("li",{parentName:"ul"},"8 x 10-bit ADC"),Object(b.b)("li",{parentName:"ul"},"4 x Timer (16, 32-bit)"),Object(b.b)("li",{parentName:"ul"},"11 x PWM"),Object(b.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.nxp.com/products/microcontrollers/cortex_m0_m0/lpc1100/LPC11E36FHN33.html"}),"NXP LPC11E36FHN33\nProduct page"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"On-board Temperature sensor")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Microchip TC1047A (Temperature-to-Voltage Converter)"),Object(b.b)("li",{parentName:"ul"},"Supply Voltage Range: 2.7V to 4.4V"),Object(b.b)("li",{parentName:"ul"},"Wide Temperature Measurement Range: -40 to +125 celsius degrees"),Object(b.b)("li",{parentName:"ul"},"High Temperature Converter Accuracy: 2 celsius degrees, Max, at 25\ncelsius degrees"),Object(b.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.microchip.com/wwwproducts/Devices.aspx?product=TC1047"}),"Microchip TC1047A\nProduct\npage"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Connectors")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Pin-compatible with Arduino Shields designed for the UNO Rev3",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Digital pins D0 to D15, Analog inputs A0 to A5, the power header\nand Etc."))),Object(b.b)("li",{parentName:"ul"},"10/100Mbps Ethernet (RJ-45 with transformer)"),Object(b.b)("li",{parentName:"ul"},"Virtual COM Port(UART via USB Mini-B) - \ud83c\udf0e",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.ftdichip.com/Drivers/VCP.htm"}),"FTDI Drivers Download\nPage")),Object(b.b)("li",{parentName:"ul"},"ARM standard debug connector: 10-pin Cortex debug connector for SWD\n(Serial Wire Debug)")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Others")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"2 x User's Push button switches"),Object(b.b)("li",{parentName:"ul"},"1 x RGB LED"),Object(b.b)("li",{parentName:"ul"},"1 x Potentiometer (ADC)"),Object(b.b)("li",{parentName:"ul"},"External 4-Mbit serial dataflash (SPI, 2048 pages x 256/264\nbyte/page)"),Object(b.b)("li",{parentName:"ul"},"Industrial temperature specified (-40 to +85 degrees Celsius)"),Object(b.b)("li",{parentName:"ul"},"[","Reset","]"," and ","[","ISP mode","]","[","1","]"," Push button switch")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Form-factor")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Dimension : 93 X 53 X 17.3(H) (Unit : mm)"),Object(b.b)("li",{parentName:"ul"},"5V DC power supply and +5V/500mA from power supply USB connector"),Object(b.b)("li",{parentName:"ul"},"GPIO Input Voltage : 0 ","~"," 5V"),Object(b.b)("li",{parentName:"ul"},"GPIO Output Voltage : 0 ","~"," 3.3V"),Object(b.b)("li",{parentName:"ul"},"Two layer PCB (FR-4 material, 1.6T)")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Arduino Compatible Header Pinout")),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/w5500_evb_v1.0_arduino_pin_map.png",alt:"W5500 EVB Rev1.0 Arduino Compatible Header Pin\nMap"}))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"External Pinout")),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/w5500_evb_v1.0_external_pin_map.png",alt:"W5500 EVB Rev1.0 External Pin\nMap"}))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"firmware"},"Firmware"),Object(b.b)("p",null,"W5500 EVB firmware project based on LPCXpresso IDE. For more details about LPCXpresso IDE, please refer to \ud83c\udf0e","[NXP LPCXpresso platform page]","."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"LPCXpresso IDE Install & Activation Guide"),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"How_to_Install_and_Activate_LPCXpresso_IDE.md"}),"How to Install and Activate LPCXpresso IDE")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Download the Libraries and Application example source code for W5500-EVB"),"\n\ud83c\udf0e","[https://github.com/Wiznet/W5500_EVB]"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getting-started"},"Getting Started"),Object(b.b)("p",null," \ud83c\udf0e",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"Hello_World.md"}),"Hello World","!")),Object(b.b)("p",null," \ud83c\udf0e",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"downloading_a_new_program.md"}),"Downloading a new program")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"make-new-w5500-evb-projects"},"Make New W5500 EVB Projects"),Object(b.b)("p",null," \ud83c\udf0e",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"make_a_new_w5500_evb_project_with_lpcxpresso_ide.md"}),"Make a new W5500 EVB\nproject with LPCXpresso\nIDE")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"technical-reference"},"Technical Reference"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Datasheet")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:""}),"datasheet","#","W5500\nDatasheet")),Object(b.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.nxp.com/documents/data_sheet/LPC11E3X.pdf"}),"NXP LPC11E3x Datasheet")),Object(b.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"http://ww1.microchip.com/downloads/en/DeviceDoc/21498D.pdf"}),"Microchip\nTC1027/TC1047A\nDatasheet"),"\n(Temperature Sensor)"),Object(b.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(b.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/at45db041d-su.pdf",alt:"ATMEL AT45DB041D\nDatasheet"}))," (External\nDataflash Memory)")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Schematic")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/icons/download.png",alt:null}))," ",Object(b.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/w5500_evb_v1.0_140527.zip",alt:"W5500 EVB Rev1.0\nSchematic(Eagle\nCAD)"}))," (Last\nupdated on 2014-05-27)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/icons/download.png",alt:null}))," ",Object(b.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/w5500_evb_v1.0_140527.pdf",alt:"W5500 EVB Rev1.0\nSchematic(PDF)"})),"\n(Last updated on 2014-05-27)")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Part list")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/icons/download.png",alt:null}))," ",Object(b.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/w5500_evb_pl_140527-1.pdf",alt:"W5500 EVB Rev1.0\nPart List"})),"\n(Last updated on 2014-05-27)")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"W5500-EVB DXF files")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/w5500-evb-dxf.zip",alt:"W5500-EVB DXF File"})))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Dimension")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"W5500 EVB Rev1.0 Dimension : ")),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/w5500_evb_v1.0_demension.png",alt:null}))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"etc"},"Etc."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Virtual COM Port Drivers")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.ftdichip.com/Drivers/VCP.htm"}),"FTDI Virtual COM Port\nDrivers Page"))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"see-also"},"See Also"),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.wiznet.co.kr/product-item/w5500"}),"WIZnet Website -\nW5500")," : W5500 Chip\nfeatures, Pin assignment and Hardware Ref. Design Guide"),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.wizwiki.net/forum"}),"WizWiki\nForum")," : WIZnet Forum for Technical\nsupport and Project shared"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"where-to-buy"},"Where to Buy"),Object(b.b)("p",null,"\\<WRAP centeralign",">"),Object(b.b)("p",null,Object(b.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/buynow.png",alt:"WIZnet Online Shop"})),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.shopwiznet.com/"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"/products/w5500/w5500_evb/icons/dollar.png",alt:"WIZnetUS Online Shop,\nUSA"}))),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://shop.wiznet.eu/"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"/products/w5500/w5500_evb/icons/european-euro.png",alt:"WIZnetEU Online Shop,\nGermany"}))),"\n",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"http://shop.wiznet.co.kr/"}),Object(b.b)("img",Object(r.a)({parentName:"a"},{src:"/products/w5500/w5500_evb/icons/won.png",alt:"WIZnetKorea Online Shop,\nKorea"})))),Object(b.b)("p",null,"\\</WRAP",">"))}p.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||b;return n?a.a.createElement(d,l({ref:t},o,{components:n})):a.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);