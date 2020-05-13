(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),c=(n(0),n(623)),l={id:"w6100_evb",title:"W6100-EVB",date:new Date("2020-04-03T00:00:00.000Z")},i={id:"Product/iEthernet/W6100/w6100_evb",title:"W6100-EVB",description:"# W6100 EVB \r",source:"@site/docs\\Product\\iEthernet\\W6100\\W6100-EVB.md",permalink:"/document_framework/docs/Product/iEthernet/W6100/w6100_evb",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W6100/W6100-EVB.md",sidebar:"someSidebar",previous:{title:"Application Note",permalink:"/document_framework/docs/Product/iEthernet/W6100/application_note"},next:{title:"Overview",permalink:"/document_framework/docs/Product/iEthernet/W5100S/overview"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Make New EVB Projects",id:"make-new-evb-projects",children:[]},{value:"Technical Reference",id:"technical-reference",children:[]},{value:"See Also",id:"see-also",children:[]}],o={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"w6100-evb"},"W6100 EVB"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"W6100 chip development platform for ",Object(c.b)("strong",{parentName:"li"},"net-enabled")," microcontroller\napplications"),Object(c.b)("li",{parentName:"ul"},"Ethernet (W6100 Hardwired TCP/IP chip) and 32-bit ARM\xae Cortex\u2122-M3\nbased designs"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Arduino Pin-compatible")," platform hardware.")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"W6100-EVB is an evaluation board for W6100 chip based on the 32-bit ARM\xae\nCortex\u2122-M3 microcontroller. It is the easy way to develop internet\nconnection for efficient and small embedded systems using W6100,\nWIZnet's hardwired TCP/IP embedded Ethernet controller. It has been\ndesigned to be hardware pin-compatible with 'Arduino shields' for the\n'Arduino UNO Rev3' and other footprint-compatible boards."),Object(c.b)("p",null,"It is based on the STM STM32F103VCT6 MCU with a 32-bit ARM\xae Cortex\u2122-M3\ncore running at Maximum 72MHz. It includes 256 or 512kB Flash memory,\n64kB SRAM various interfaces, including BUS(Flexible static memory\ncontroller), SPI/SSP, I2C, UART, ADC, PWM and other I/O interfaces.\nAdditionally, Two programmable push button switches, one RGB LED and a\n10/100 Base-Tx RJ-45 connector with an integrated transformer are on\nboard to implement embedded networking applications."),Object(c.b)("p",null,"The W6100-EVB provides benefits in developing easier and powerful\nnetwork applications on small form-factor and non-OS based embedded\ndevices using the W6100 chip."),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/w6100/w6100_evb/w6100-evb_callout.png",alt:null}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"features"},"Features"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"WIZnet W6100 Hardwired TCP/IP chip")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Hardwired TCP/IP embedded Ethernet controller"),Object(c.b)("li",{parentName:"ul"},"Parallel Host Interface (External BUS Interface)"),Object(c.b)("li",{parentName:"ul"},"SPI (Serial Peripheral Interface) Microcontroller Interface"),Object(c.b)("li",{parentName:"ul"},"32kB internal Tx/Rx socket buffer memory (8 socket)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Support SOCKET-less Command: ARP-Request, PING-Request")),Object(c.b)("li",{parentName:"ul"},"Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)"),Object(c.b)("li",{parentName:"ul"},"Support Auto-MDIX when Auto-Negotiation Mode."),Object(c.b)("li",{parentName:"ul"},"Hardwired TCP/IP stack supports TCP, UDP, ",Object(c.b)("strong",{parentName:"li"},"IPv6"),", IPv4,\n",Object(c.b)("strong",{parentName:"li"},"ICMPv6"),", ICMPv4, IGMP, ",Object(c.b)("strong",{parentName:"li"},"MLDv1"),", ARP, PPPoE protocols")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/products/W6100/start"}),"W6100 Product\npage"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"STMicroelectronics STM32F103VCT6 MCU")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"32-bit ARM\xae Cortex\u2122-M3 microcontroller running at up to 75MHz"),Object(c.b)("li",{parentName:"ul"},"256 Kbytes of Flash memory"),Object(c.b)("li",{parentName:"ul"},"48 Kbytes of SRAM"),Object(c.b)("li",{parentName:"ul"},"5 \xd7 USARTs"),Object(c.b)("li",{parentName:"ul"},"4 \xd7 16-bit timers, 2 \xd7 basic timers"),Object(c.b)("li",{parentName:"ul"},"3 \xd7 SPIs, 2 \xd7 I2Ss, 2 \xd7 I2Cs"),Object(c.b)("li",{parentName:"ul"},"USB, CAN, 2 \xd7 PWM timers"),Object(c.b)("li",{parentName:"ul"},"3 \xd7 ADCs, 2 \xd7 DACs, 1 \xd7 SDIO"),Object(c.b)("li",{parentName:"ul"},"FSMC (100- and 144-pin packages)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("img",Object(r.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"}),"STMicroelectronics\nSTM32F103VCT6 Product\npage"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Connectors")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"1-Channel 10/100Mbps Ethernet Connector (RJ45 with transformer)"),Object(c.b)("li",{parentName:"ul"},"Virtual COM Port(UART via Micro USB B type) \u2013\n\ud83c\udf0e",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"}),"CP2104 Drivers\nDownload\nPage")),Object(c.b)("li",{parentName:"ul"},"Expansion 80 GPIOs (Include analog Peripheral using 12bit ADC)"),Object(c.b)("li",{parentName:"ul"},"Pin-compatible with Arduino Shields designed for the UNO Rev3"),Object(c.b)("li",{parentName:"ul"},"Digital pins D0 to D15, Analog inputs A0 to A5, the power header and\nEtc."),Object(c.b)("li",{parentName:"ul"},"ARM standard debug connector: 5-pin Cortex debug connector for SWD\n(Serial Wire Debug)")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Others")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"2 x User's Push button switches"),Object(c.b)("li",{parentName:"ul"},"1 x RGB LED"),Object(c.b)("li",{parentName:"ul"},"Industrial temperature specified (-40 to +85 degrees Celsius)"),Object(c.b)("li",{parentName:"ul"},"[","Reset","]"," and ","[","boot0","]"," ISP access push button switch")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Form-factor")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Dimension : 90 X 80 X 15(H) (Unit : mm)"),Object(c.b)("li",{parentName:"ul"},"5V DC power supply"),Object(c.b)("li",{parentName:"ul"},"GPIO Input Voltage : 0 ","~"," 5V"),Object(c.b)("li",{parentName:"ul"},"GPIO Output Voltage : 0 ","~"," 3.3V"),Object(c.b)("li",{parentName:"ul"},"4-layer PCB (FR-4 material, 1.6T, 1oz)")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Arduino Compatible with SWD Header Pinout")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/w6100/w6100_evb/w6100-evb_pinout_1.png",alt:null}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"External Pinout (left side)")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/w6100/w6100_evb/w6100-evb_pinout_2.png",alt:null}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"External Pinout (Right side)")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/w6100/w6100_evb/w6100-evb_pinout_3.png",alt:null}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"firmware"},"Firmware"),Object(c.b)("p",null,"W6100-EVB firmware project based on Eclipse IDE. For more details about\nEclipse IDE, please refer to below link."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Download the Libraries and\nApplication example source code for W6100-EVB"),"\n",Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/github.png",alt:null})),"\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Wiznet/W6100_EVB"}),"https://github.com/Wiznet/W6100_EVB")," "),Object(c.b)("hr",null),Object(c.b)("h2",{id:"getting-started"},"Getting Started"),Object(c.b)("p",null,"\ud83c\udf0e",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/document_framework/docs/Product/iEthernet/W6100/getting_started"}),"Getting\nStarted")),Object(c.b)("p",null,"\ud83c\udf0e",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/document_framework/docs/Product/iEthernet/W6100/getting_started#how_to_uploading_to_firmware"}),"How to uploading to\nfirmware")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"make-new-evb-projects"},"Make New EVB Projects"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"It is the same as W5100-EVB")),Object(c.b)("p",null,"\ud83c\udf0e",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/document_framework/docs/Product/iEthernet/W6100/make_a_new_projects_eclipse"}),"Make New EVB Projects\nusing Eclipse")),Object(c.b)("p",null,"\ud83c\udf0e",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/document_framework/docs/Product/iEthernet/W6100/make_a_new_projects_truestudio"}),"Make New EVB Projects\nusing\nTrueSTUDIO")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"technical-reference"},"Technical Reference"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Datasheet")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:""}),"W6100 Datasheet")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"}),"STMicroelectronics STM32F103VCT6\nDatasheet")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"}),"Virtual COM Port:\nCP2104 COM Port\nDatasheet")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.ti.com/lit/ds/symlink/sn74lvc1g04.pdf"}),"SINGLE INVERTER\nGATE SN74LVC1G04DBVR\nDatasheet")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://assets.nexperia.com/documents/data-sheet/74HC_HCT573.pdf"}),"Octal D-type\ntransparent latch; 3-state 74HC573PW\nDatasheet")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.nxp.com/docs/en/data-sheet/74CBTLV3257.pdf"}),"Quad 1-of-2\nmultiplexer 74CBTLV3257PW\nDatasheet"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Schematic & Part list")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W6100"}),"Go to\nGithub"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Dimension")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"W6100-EVB Rev1.1 Dimension(unit:mm)")),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/w6100/w6100_evb/w6100_wiki_dimension.png",alt:null}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"see-also"},"See Also"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.wiznet.io/product-item/w6100"}),"WIZnet Website -\nW6100")," : W6100 Chip features,\nPin assignment and Hardware Ref. Design Guide"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://forum.wiznet.io/"}),"WizWiki\nForum")," : WIZnet Forum for Technical support\nand Project shared"),Object(c.b)("hr",null))}p.isMDXComponent=!0},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||c;return n?a.a.createElement(d,i({ref:t},o,{components:n})):a.a.createElement(d,i({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);