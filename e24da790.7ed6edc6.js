(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{565:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),c=(r(0),r(626)),b={id:"w5100s_evb",title:"W5100S-EVB",date:new Date("2020-04-03T00:00:00.000Z")},l={id:"Product/iEthernet/W5100S/w5100s_evb",title:"W5100S-EVB",description:"- W5100S chip development platform for **net-enabled** microcontroller",source:"@site/docs/Product/iEthernet/W5100S/W5100S-EVB.md",permalink:"/document_framework/docs/Product/iEthernet/W5100S/w5100s_evb",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5100S/W5100S-EVB.md",sidebar:"someSidebar",previous:{title:"All Pages",permalink:"/document_framework/docs/Product/iEthernet/W5100S/all_pages"},next:{title:"Overview",permalink:"/document_framework/docs/Product/iEthernet/W5500/overview"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Make New W5100S-EVB Projects",id:"make-new-w5100s-evb-projects",children:[]},{value:"Technical Reference",id:"technical-reference",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Where to Buy",id:"where-to-buy",children:[]}],o={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"W5100S chip development platform for ",Object(c.b)("strong",{parentName:"li"},"net-enabled")," microcontroller\napplications"),Object(c.b)("li",{parentName:"ul"},"Ethernet (W5100S Hardwired TCP/IP chip) and 32-bit ARM\xae Cortex\u2122-M3\nbased designs"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Arduino Pin-compatible")," platform hardware.")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"W5100S-EVB is an evaluation board for W5100S chip based on the 32-bit\nARM\xae Cortex\u2122-M3 microcontroller. It is the easy way to develop internet\nconnection for efficient and small embedded systems using W5100S,\nWIZnet's hardwired TCP/IP embedded Ethernet controller. It has been\ndesigned to be hardware pin-compatible with 'Arduino shields' for the\n'Arduino UNO Rev3' and other footprint-compatible boards."),Object(c.b)("p",null,"It is based on the STM STM32F103VCT6 MCU with a 32-bit ARM\xae Cortex\u2122-M3\ncore running at Maximum 72MHz. It includes 256 or 512kB Flash memory,\n64kB SRAM various interfaces, including BUS(Flexible static memory\ncontroller), SPI/SSP, I2C, UART, ADC, PWM and other I/O interfaces.\nAdditionally, Two programmable push button switches, one RGB LED and a\n10/100 Base-Tx RJ-45 connector with an integrated transformer are on\nboard to implement embedded networking applications."),Object(c.b)("p",null,"The W5100S-EVB provides benefits in developing easier and powerful\nnetwork applications on small form-factor and non-OS based embedded\ndevices using the W5100S chip."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5100s/w5100s_evb/w5100s-evb_partdescription.png",alt:null}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"features"},"Features"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"WIZnet W5100S Hardwired TCP/IP chip")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Hardwired TCP/IP embedded Ethernet controller"),Object(c.b)("li",{parentName:"ul"},"Parallel Host Interface (External BUS Interface)"),Object(c.b)("li",{parentName:"ul"},"SPI (Serial Peripheral Interface) Microcontroller Interface"),Object(c.b)("li",{parentName:"ul"},"16kB internal Tx/Rx socket buffer memory (4 socket)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Support SOCKET-less Command: ARP-Request, PING-Request")),Object(c.b)("li",{parentName:"ul"},"Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)"),Object(c.b)("li",{parentName:"ul"},"Support Auto-MDIX when Auto-Negotiation Mode."),Object(c.b)("li",{parentName:"ul"},"Hardwired TCP/IP stack supports TCP, UDP, WOL over UDP, ICMP,\nIGMPv1/v2, IPv4, ARP,PPPoE protocols"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/document_framework/docs/Product/iEthernet/W5100S/overview"}),"W5100s Product page"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"STMicroelectronics STM32F103VCT6 MCU")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"32-bit ARM\xae Cortex\u2122-M3 microcontroller running at up to 50MHz"),Object(c.b)("li",{parentName:"ul"},"256 Kbytes of Flash memory"),Object(c.b)("li",{parentName:"ul"},"48 Kbytes of SRAM"),Object(c.b)("li",{parentName:"ul"},"5 \xd7 USARTs"),Object(c.b)("li",{parentName:"ul"},"4 \xd7 16-bit timers, 2 \xd7 basic timers"),Object(c.b)("li",{parentName:"ul"},"3 \xd7 SPIs, 2 \xd7 I2Ss, 2 \xd7 I2Cs"),Object(c.b)("li",{parentName:"ul"},"USB, CAN, 2 \xd7 PWM timers"),Object(c.b)("li",{parentName:"ul"},"3 \xd7 ADCs, 2 \xd7 DACs, 1 \xd7 SDIO"),Object(c.b)("li",{parentName:"ul"},"FSMC (100- and 144-pin packages)"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"}),"STMicroelectronics STM32F103VCT6 Product page"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Connectors")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"1-Channel 10/100Mbps Ethernet Connector (RJ45 with transformer)"),Object(c.b)("li",{parentName:"ul"},"Virtual COM Port(UART via Micro USB B type) \u2013\n",Object(c.b)("img",Object(n.a)({parentName:"li"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"}),"CP2104 Drivers Download Page")),Object(c.b)("li",{parentName:"ul"},"Expansion 80 GPIOs (Include analog Peripheral using 12bit ADC)"),Object(c.b)("li",{parentName:"ul"},"Pin-compatible with Arduino Shields designed for the UNO Rev3"),Object(c.b)("li",{parentName:"ul"},"Digital pins D0 to D15, Analog inputs A0 to A5, the power header and\nEtc."),Object(c.b)("li",{parentName:"ul"},"ARM standard debug connector: 5-pin Cortex debug connector for SWD\n(Serial Wire Debug)")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Others")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"2 x User's Push button switches"),Object(c.b)("li",{parentName:"ul"},"1 x RGB LED"),Object(c.b)("li",{parentName:"ul"},"Industrial temperature specified (-40 to +85 degrees Celsius)"),Object(c.b)("li",{parentName:"ul"},"[","Reset","]"," and ","[","boot0","]"," ISP access push button switch")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Form-factor")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Dimension : 90 X 80 X 15(H) (Unit : mm)"),Object(c.b)("li",{parentName:"ul"},"5V DC power supply"),Object(c.b)("li",{parentName:"ul"},"GPIO Input Voltage : 0 ","~"," 5V"),Object(c.b)("li",{parentName:"ul"},"GPIO Output Voltage : 0 ","~"," 3.3V"),Object(c.b)("li",{parentName:"ul"},"4-layer PCB (FR-4 material, 1.6T, 1oz)")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Arduino Compatible with SWD Header Pinout")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5100s/w5100s_evb/arduino_swd_pinout.png",alt:null}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"External Pinout (left side)")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5100s/w5100s_evb/expansion_pinout_left_v3.png",alt:null}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"External Pinout (Right side)")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5100s/w5100s_evb/expansion_pinout_right_v3.png",alt:null}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"firmware"},"Firmware"),Object(c.b)("p",null,"W5100S-EVB firmware project based on Eclipse IDE. For more details about\nEclipse IDE, please refer to below link. ",Object(c.b)("strong",{parentName:"p"},"DMA example")," has been added\nto the project."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Download the Libraries and\nApplication example source code for W5100S-EVB"),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/github.png",alt:null})),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/W5100S-EVB"}),"https://github.com/Wiznet/W5100S-EVB")),Object(c.b)("p",null," ",Object(c.b)("strong",{parentName:"p"},"DMA User Guide"),Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5100s/w5100s_evb/w5100s_an_dma_v100k.pdf",alt:"W5100S DMA V1.0.0 Korean.pdf"})),"\nFor More information about DMA, click\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://wizwiki.net/wiki/doku.php?id=products:w5100s:w5100s_evb:dma"}),"DMA")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"getting-started"},"Getting Started"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/products/w5100s/w5100s_evb/getting_started"}),"Getting Started")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/products/w5100s/w5100s_evb/getting_started#how_to_uploading_to_firmware"}),"How to uploading to firmware")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"make-new-w5100s-evb-projects"},"Make New W5100S-EVB Projects"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/products/w5100s/w5100s_evb/make_a_new_projects_eclipse"}),"Make New W5100S-EVB Projects using Eclipse")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/products/w5100s/w5100s_evb/make_a_new_projects_truestudio"}),"Make New W5100S-EVB Projects using TrueSTUDIO")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"technical-reference"},"Technical Reference"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Datasheet")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/products/w5100S/datasheet#W5100S%20Datasheet"}),"datasheet","#","W5100S Datasheet")),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"}),"STMicroelectronics STM32F103VCT6 Datasheet")),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"}),"Virtual COM Port:\nCP2104 COM Port Datasheet")),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.ti.com/lit/ds/symlink/sn74lvc1g04.pdf"}),"SINGLE INVERTER GATE SN74LVC1G04DBVR Datasheet")),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://assets.nexperia.com/documents/data-sheet/74HC_HCT573.pdf"}),"Octal D-type transparent latch; 3-state 74HC573PW Datasheet")),Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.nxp.com/docs/en/data-sheet/74CBTLV3257.pdf"}),"Quad 1-of-2 multiplexer 74CBTLV3257PW Datasheet"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Schematic & Part list")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S"}),"Go to Github"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Dimension")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"W5100S-EVB Rev1.0 Dimension(unit:mm)")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5100s/w5100s_evb/w5100s-evb_dimension.png",alt:null}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"see-also"},"See Also"),Object(c.b)("p",null,"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.wiznet.io/product-item/w5100s"}),"WIZnet Website - W5100S")," : W5100S Chip\nfeatures, Pin assignment and Hardware Ref. Design Guide"),Object(c.b)("p",null,"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://forum.wiznet.io"}),"WizWiki Forum")," : WIZnet Forum for Technical support and\nProject shared"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"where-to-buy"},"Where to Buy"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/buynow.png",alt:"WIZnet Online Shop"})),Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.shopwiznet.com/"}),Object(c.b)("img",Object(n.a)({parentName:"a"},{src:"/products/w5500/w5500_evb/icons/dollar.png",alt:"WIZnetUS Online Shop, USA"}))),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://shop.wiznet.eu/"}),Object(c.b)("img",Object(n.a)({parentName:"a"},{src:"/products/w5500/w5500_evb/icons/european-euro.png",alt:"WIZnetEU Online Shop, Germany"}))),"\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://shop.wiznet.co.kr/"}),Object(c.b)("img",Object(n.a)({parentName:"a"},{src:"/products/w5500/w5500_evb/icons/won.png",alt:"WIZnetKorea Online Shop, Korea"})))))}p.isMDXComponent=!0},626:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,d=s["".concat(b,".").concat(m)]||s[m]||u[m]||c;return r?a.a.createElement(d,l({ref:t},o,{components:r})):a.a.createElement(d,l({ref:t},o))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,b=new Array(c);b[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=r[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);