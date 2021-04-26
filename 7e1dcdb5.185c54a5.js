(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{311:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),i=(r(0),r(578)),l={id:"all_pages",title:"All Pages",date:new Date("2020-04-03T00:00:00.000Z")},b={unversionedId:"Product/iEthernet/W5100S/all_pages",id:"Product/iEthernet/W5100S/all_pages",isDocsHomePage:!1,title:"All Pages",description:"Overview",source:"@site/docs\\Product\\iEthernet\\W5100S\\All_Pages.md",permalink:"/Products/Product/iEthernet/W5100S/all_pages",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/All_Pages.md",sidebar:"docs",previous:{title:"Make New W5100S-EVB Projects using Eclipse",permalink:"/Products/Product/iEthernet/W5100S/w5100s_projects_eclipse"},next:{title:"Overview",permalink:"/Products/Product/iEthernet/W5500/overview"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Pin MAP",id:"pin-map",children:[]},{value:"Features",id:"features",children:[]},{value:"Target Application",id:"target-application",children:[]},{value:"ioLibrary",id:"iolibrary",children:[]},{value:"For more information on ioLibrary, click \ud83c\udf0eW5500 Driver",id:"for-more-information-on-iolibrary-click-w5500-driver",children:[]},{value:"Data Sheet",id:"data-sheet",children:[]},{value:"W5100S vs W5100 Comparison Sheet",id:"w5100s-vs-w5100-comparison-sheet",children:[]},{value:"Application Note",id:"application-note",children:[]},{value:"Hardware Design Guide",id:"hardware-design-guide",children:[]},{value:"External Transformer Type",id:"external-transformer-type",children:[]},{value:"RJ45 with Transformer Type",id:"rj45-with-transformer-type",children:[]},{value:"W5100S Comparison Sheet",id:"w5100s-comparison-sheet",children:[{value:"document",id:"document",children:[]}]},{value:"Overview",id:"overview-2",children:[]},{value:"Features",id:"features-1",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Make New W5100S-EVB Projects",id:"make-new-w5100s-evb-projects",children:[]},{value:"Technical Reference",id:"technical-reference",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Where to Buy",id:"where-to-buy",children:[]}],o={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_pm.png",alt:null}))),Object(i.b)("p",null,"W5100S is an embedded Internet controller designed as a full hardwired\nTCP/IP with WIZnet technology. W5100S provides internet connectivity to\nyour embedded system by using SPI (Serial Peripheral Interface) or\nParallel System BUS. SPI and Parallel System BUS provide easy connection\nvia external MCU to W5100S. The clock speed of W5100S SPI supports upto\n70MHz and the Parallel System Bus supports higher speed network\ncommunication than SPI."),Object(i.b)("p",null,"Since W5100S integrates the Hardwired TCP/IP stack with 10/100 Ethernet\nMAC and PHY, it is truly a one-chip solution for the stable internet\nconnectivity. WIZnet\u2019s hardwired TCP/IP stack supports TCP, UDP, IPv4,\nICMP, ARP, IGMP, and PPPoE - and it has been proven through various\napplications over the last decade."),Object(i.b)("p",null,"W5100S provides four independent SOCKETs to be used simultaneously and\n16KB internal memory for data communication. Users can develop an\nEthernet application easily by using the simple W5100S SOCKET program\ninstead of handling a complex Ethernet controller. W5100S also provides\nWOL (Wake on LAN) and a Power Down Mode in order to reduce power\nconsumption."),Object(i.b)("p",null,"W5100S is a low-cost chip that exceeds its predecessor, W5100. Existing\nfirmware using W5100 can be used on W5100S without modification. W5100S\nhas two types of packages, 48 Pin LQFP & QFN Lead-Free Package."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_diagram.png",alt:"W5100S Block diagram"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"pin-map"},"Pin MAP"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_pinmap.png",alt:"W5100S Pin map"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Support Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE"),Object(i.b)("li",{parentName:"ul"},"Support 4 Independent Hardware SOCKETs simultaneously"),Object(i.b)("li",{parentName:"ul"},"Support SOCKET-less Command: ARP-Request, PING-Request"),Object(i.b)("li",{parentName:"ul"},"Support Ethernet Power Down Mode & Main Clock gating for power save"),Object(i.b)("li",{parentName:"ul"},"Support Wake on LAN over UDP"),Object(i.b)("li",{parentName:"ul"},"Support Serial & Parallel Host Interface: High Speed SPI(MODE 0/3), Parallel System Bus with 2 Address signal & 8bits Data"),Object(i.b)("li",{parentName:"ul"},"Internal 16 Kbytes Memory for TX/ RX Buffers "),Object(i.b)("li",{parentName:"ul"},"Not support IP Fragmentation"),Object(i.b)("li",{parentName:"ul"},"Not Maintain ARP-cache Table "),Object(i.b)("li",{parentName:"ul"},"10BaseT/100BaseTX Ethernet PHY Integrated"),Object(i.b)("li",{parentName:"ul"},"Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)"),Object(i.b)("li",{parentName:"ul"},"Support Auto-MDIX when Auto-Negotiation Mode."),Object(i.b)("li",{parentName:"ul"},"3.3V operation with 5V I/O signal tolerance"),Object(i.b)("li",{parentName:"ul"},"LED outputs (Full/Half Duplex, Link, 10/100 Speed, Active)"),Object(i.b)("li",{parentName:"ul"},"Two types of packages: 48 Pin LQFP & QFN Lead-Free Package (7x7mm, 0.5mm pitch)")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"target-application"},"Target Application"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"User product based on W5100 : No need to modify Firmware"),Object(i.b)("li",{parentName:"ul"},"Home Network Devices: Set-Top Boxes, PVRs, Digital Media Adapters"),Object(i.b)("li",{parentName:"ul"},"Serial-to-Ethernet: Access Controls, LED displays, Wireless AP\nrelays, etc."),Object(i.b)("li",{parentName:"ul"},"Parallel-to-Ethernet: POS / Mini Printers, Copiers"),Object(i.b)("li",{parentName:"ul"},"USB-to-Ethernet: Storage Devices, Network Printers"),Object(i.b)("li",{parentName:"ul"},"GPIO-to-Ethernet: Home Network Sensors"),Object(i.b)("li",{parentName:"ul"},"Security Systems: DVRs, Network Cameras, Kiosks"),Object(i.b)("li",{parentName:"ul"},"Factory, Building, Home Automations"),Object(i.b)("li",{parentName:"ul"},"Medical Monitoring Equipment"),Object(i.b)("li",{parentName:"ul"},"Embedded Servers"),Object(i.b)("li",{parentName:"ul"},"Internet of Things (IoT) Devices"),Object(i.b)("li",{parentName:"ul"},"IoT Cloud Devices")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"driver"},"Driver"),Object(i.b)("p",null,"The ioLibrary means ",Object(i.b)("strong",{parentName:"p"},'"Internet Offload Library"')," for WIZnet chip. It\nincludes ",Object(i.b)("strong",{parentName:"p"},"drivers")," and ",Object(i.b)("strong",{parentName:"p"},"application protocols"),". The ioLibrary can be\nused for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"overview"}),"W5100S")," application designs. These\nwill be updated continuously."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"iolibrary"},"ioLibrary"),Object(i.b)("h4",{id:"overview-1"},"Overview"),Object(i.b)("p",null,"This driver provides the Berkeley Socket type APIs. The function names\nof this ioLibrary","_","BSD are the same as the function names of the\nioLibrary."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Directory Structure ",Object(i.b)("img",Object(a.a)({parentName:"li"},{src:"/img/products/w5100s/w5100s_iolibrary.png",alt:null})),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ethernet : SOCKET APIs like BSD & WIZCHIP(W5500,W5200 and etc)\nDriver"),Object(i.b)("li",{parentName:"ul"},"Internet : ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"DHCP client "),Object(i.b)("li",{parentName:"ul"},"DNS client "),Object(i.b)("li",{parentName:"ul"},"FTP client"),Object(i.b)("li",{parentName:"ul"},"FTP Server"),Object(i.b)("li",{parentName:"ul"},"Http Server"),Object(i.b)("li",{parentName:"ul"},"SNMP"),Object(i.b)("li",{parentName:"ul"},"SNTP"),Object(i.b)("li",{parentName:"ul"},"TFTP")))))),Object(i.b)("h4",{id:"download"},"Download"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ioLibrary : latest version")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"ioLibrary GitHub Repository")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/Wiznet/ioLibrary_Driver"}),"https://github.com/Wiznet/ioLibrary_Driver"))),Object(i.b)("h2",{id:"for-more-information-on-iolibrary-click-w5500-driver"},"For more information on ioLibrary, click \ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"h2"},{href:"driver"}),"W5500 Driver")),Object(i.b)("h2",{id:"data-sheet"},"Data Sheet"),Object(i.b)("h4",{id:"korean"},"Korean"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/w5100s_ds_v125k.pdf",target:"_blank"},"W5100S Datasheet v1.2.5"))),Object(i.b)("h4",{id:"english"},"English"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/w5100s_ds_v125e.pdf",target:"_blank"},"W5100S Datasheet v1.2.5"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"w5100s-vs-w5100-comparison-sheet"},"W5100S vs W5100 Comparison Sheet"),Object(i.b)("h4",{id:"korean-1"},"Korean"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/application/w5100svsw5100_cs_v110k.pdf",target:"_blank"},"W5100S vs W5100 Comparison Sheet v1.1.0"))),Object(i.b)("h4",{id:"english-1"},"English"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/application/w5100svsw5100_cs_v110e.pdf",target:"_blank"},"W5100S vs W5100 Comparison Sheet v1.1.0"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"application-note"},"Application Note"),Object(i.b)("h4",{id:"korean-2"},"Korean"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/w5100s_an_ipraw_v100k.pdf",target:"_blank"},"W5100S IPRAW v1.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/application/w5100s_an_pppoe_v100k.pdf",target:"_blank"},"W5100S PPPoE v1.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/application/w5100s_an_slc_v100k.pdf",target:"_blank"},"W5100S SLC v1.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v110k.pdf",target:"_blank"},"W5100S Interrupt v1.1.0"))),Object(i.b)("h4",{id:"english-2"},"English"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/w5100s_an_ipraw_v100e.pdf",target:"_blank"},"W5100S IPRAW v1.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/application/w5100s_an_pppoe_v100e.pdf",target:"_blank"},"W5100S PPPoE v1.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/application/w5100s_an_slc_v100e.pdf",target:"_blank"},"W5100S SLC v1.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v100e.pdf",target:"_blank"},"W5100S Interrupt v1.0.0"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"hardware-design-guide"},"Hardware Design Guide"),Object(i.b)("h4",{id:"korean-3"},"Korean"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/w5100s_crystal_selection_guide_v100k.pdf",target:"_blank"},"Crystal Selection Guide v1.0.0"))),Object(i.b)("h4",{id:"english-3"},"English"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"/img/products/w5100s/w5100s_crystal_selection_guide_v100e.pdf",target:"_blank"},"Crystal Selection Guide v1.0.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/Products/Product/iEthernet/W5100S/document"}),"IR Reflow Profile"))),Object(i.b)("hr",null),Object(i.b)("p",null," Reference Schematic"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"external-transformer-type"},"External Transformer Type"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S/Reference%20Schematic"}),"Go to github"),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/ref_sch/w5100s_ref_schematic_v110_use_trans.jpg",alt:null}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"rj45-with-transformer-type"},"RJ45 with Transformer Type"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S/Reference%20Schematic"}),"Go to github"),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/ref_sch/w5100s_ref_schematic_v110_use_trans.jpg",alt:null}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"w5100s-comparison-sheet"},"W5100S Comparison Sheet"),Object(i.b)("p",null,"Functionally, ",Object(i.b)("strong",{parentName:"p"},"W5100S")," is very similar to ",Object(i.b)("strong",{parentName:"p"},"W5100 and W5500"),', with\nslightly different Hardware Specification. And Software can be shared.\nFor example, Software written for the W5100 or W5500 is compatible with\nHardware for the W5100S. However, there are some differences between\nW5100S and W5100/W5500 have in Software and Hardware. The difference are\ndescribed in the document titled "W5100S comparison sheet" below.'),Object(i.b)("hr",null),Object(i.b)("h3",{id:"document"},"document"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",{class:"header"},Object(i.b)("th",null,"Version"),Object(i.b)("th",null,"Date"),Object(i.b)("th",null,"Download"))),Object(i.b)("tbody",null,Object(i.b)("tr",{class:"odd"},Object(i.b)("td",null,"1.0.0"),Object(i.b)("td",null,"2018-04-01"),Object(i.b)("td",null,Object(i.b)("embed",{src:"/img/products/w5100s/w5100s_cp_v100k.pdf",class:"align-center"}),Object(i.b)("br",null),Object(i.b)("embed",{src:"/img/products/w5100s/w5100s_cp_v100e.pdf",class:"align-center"}))))),"--- # W5100S Application Refer to the following application examples --- * [TCP](TCP.md) * [UDP](UDP.md) * [IPRAW](IPRAW.md) * [PPPoE](PPPoE.md) * [SOCKET-less Command](SOCKET-less_Command.md) * [Interrupt](Interrupt.md) * [DMA](DMA.md) W5100S-EVB",Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"W5100S chip development platform for ",Object(i.b)("strong",{parentName:"li"},"net-enabled")," microcontroller\napplications"),Object(i.b)("li",{parentName:"ul"},"Ethernet (W5100S Hardwired TCP/IP chip) and 32-bit ARM\xae Cortex\u2122-M3\nbased designs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Arduino Pin-compatible")," platform hardware.")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"overview-2"},"Overview"),Object(i.b)("p",null,"W5100S-EVB is an evaluation board for W5100S chip based on the 32-bit\nARM\xae Cortex\u2122-M3 microcontroller. It is the easy way to develop internet\nconnection for efficient and small embedded systems using W5100S,\nWIZnet's hardwired TCP/IP embedded Ethernet controller. It has been\ndesigned to be hardware pin-compatible with 'Arduino shields' for the\n'Arduino UNO Rev3' and other footprint-compatible boards."),Object(i.b)("p",null,"It is based on the STM STM32F103VCT6 MCU with a 32-bit ARM\xae Cortex\u2122-M3\ncore running at Maximum 72MHz. It includes 256 or 512kB Flash memory,\n64kB SRAM various interfaces, including BUS(Flexible static memory\ncontroller), SPI/SSP, I2C, UART, ADC, PWM and other I/O interfaces.\nAdditionally, Two programmable push button switches, one RGB LED and a\n10/100 Base-Tx RJ-45 connector with an integrated transformer are on\nboard to implement embedded networking applications."),Object(i.b)("p",null,"The W5100S-EVB provides benefits in developing easier and powerful\nnetwork applications on small form-factor and non-OS based embedded\ndevices using the W5100S chip."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/w5100s-evb_partdescription.png",alt:null}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"features-1"},"Features"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"WIZnet W5100S Hardwired TCP/IP chip")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hardwired TCP/IP embedded Ethernet controller"),Object(i.b)("li",{parentName:"ul"},"Parallel Host Interface (External BUS Interface)"),Object(i.b)("li",{parentName:"ul"},"SPI (Serial Peripheral Interface) Microcontroller Interface"),Object(i.b)("li",{parentName:"ul"},"16kB internal Tx/Rx socket buffer memory (4 socket)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Support SOCKET-less Command: ARP-Request, PING-Request")),Object(i.b)("li",{parentName:"ul"},"Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)"),Object(i.b)("li",{parentName:"ul"},"Support Auto-MDIX when Auto-Negotiation Mode."),Object(i.b)("li",{parentName:"ul"},"Hardwired TCP/IP stack supports TCP, UDP, WOL over UDP, ICMP,\nIGMPv1/v2, IPv4, ARP,PPPoE protocols"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("img",Object(a.a)({parentName:"li"},{src:"/img/link.png",alt:null}))," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/Products/Product/iEthernet/W5100S/overview"}),"W5100s Product page"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"STMicroelectronics STM32F103VCT6 MCU")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"32-bit ARM\xae Cortex\u2122-M3 microcontroller running at up to 50MHz"),Object(i.b)("li",{parentName:"ul"},"256 Kbytes of Flash memory"),Object(i.b)("li",{parentName:"ul"},"48 Kbytes of SRAM"),Object(i.b)("li",{parentName:"ul"},"5 \xd7 USARTs"),Object(i.b)("li",{parentName:"ul"},"4 \xd7 16-bit timers, 2 \xd7 basic timers"),Object(i.b)("li",{parentName:"ul"},"3 \xd7 SPIs, 2 \xd7 I2Ss, 2 \xd7 I2Cs"),Object(i.b)("li",{parentName:"ul"},"USB, CAN, 2 \xd7 PWM timers"),Object(i.b)("li",{parentName:"ul"},"3 \xd7 ADCs, 2 \xd7 DACs, 1 \xd7 SDIO"),Object(i.b)("li",{parentName:"ul"},"FSMC (100- and 144-pin packages)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("img",Object(a.a)({parentName:"li"},{src:"/img/link.png",alt:null}))," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"}),"STMicroelectronics STM32F103VCT6 Product page"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Connectors")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1-Channel 10/100Mbps Ethernet Connector (RJ45 with transformer)"),Object(i.b)("li",{parentName:"ul"},"Virtual COM Port(UART via Micro USB B type) \u2013\n",Object(i.b)("img",Object(a.a)({parentName:"li"},{src:"/img/link.png",alt:null}))," ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"}),"CP2104 Drivers Download Page")),Object(i.b)("li",{parentName:"ul"},"Expansion 80 GPIOs (Include analog Peripheral using 12bit ADC)"),Object(i.b)("li",{parentName:"ul"},"Pin-compatible with Arduino Shields designed for the UNO Rev3"),Object(i.b)("li",{parentName:"ul"},"Digital pins D0 to D15, Analog inputs A0 to A5, the power header and\nEtc."),Object(i.b)("li",{parentName:"ul"},"ARM standard debug connector: 5-pin Cortex debug connector for SWD\n(Serial Wire Debug)")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Others")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"2 x User's Push button switches"),Object(i.b)("li",{parentName:"ul"},"1 x RGB LED"),Object(i.b)("li",{parentName:"ul"},"Industrial temperature specified (-40 to +85 degrees Celsius)"),Object(i.b)("li",{parentName:"ul"},"[","Reset","]"," and ","[","boot0","]"," ISP access push button switch")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Form-factor")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dimension : 90 X 80 X 15(H) (Unit : mm)"),Object(i.b)("li",{parentName:"ul"},"5V DC power supply"),Object(i.b)("li",{parentName:"ul"},"GPIO Input Voltage : 0 ","~"," 5V"),Object(i.b)("li",{parentName:"ul"},"GPIO Output Voltage : 0 ","~"," 3.3V"),Object(i.b)("li",{parentName:"ul"},"4-layer PCB (FR-4 material, 1.6T, 1oz)")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Arduino Compatible with SWD Header Pinout")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/arduino_swd_pinout.png",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"External Pinout (left side)")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/expansion_pinout_left_v3.png",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"External Pinout (Right side)")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/expansion_pinout_right_v3.png",alt:null}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"firmware"},"Firmware"),Object(i.b)("p",null,"W5100S-EVB firmware project based on Eclipse IDE. For more details about\nEclipse IDE, please refer to below link. ",Object(i.b)("strong",{parentName:"p"},"DMA example")," has been added\nto the project."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Download the Libraries and\nApplication example source code for W5100S-EVB"),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/github.png",alt:null})),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Wiznet/W5100S-EVB"}),"https://github.com/Wiznet/W5100S-EVB")),Object(i.b)("p",null," ",Object(i.b)("strong",{parentName:"p"},"DMA User Guide"),"  "),Object(i.b)("a",{href:"/img/products/w5100s/w5100s_evb/w5100s_an_dma_v100k.pdf",target:"_blank"},"W5100S DMA V1.0.0 Korean.pdf"),"For More information about DMA, click [DMA](Application-Note/dma)",Object(i.b)("hr",null),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/link.png",alt:null}))," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"w5100s_getting_started"}),"Getting Started")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/link.png",alt:null}))," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"w5100s_getting_started#how_to_upload_to_firmware"}),"How to uploading to firmware")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"make-new-w5100s-evb-projects"},"Make New W5100S-EVB Projects"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/link.png",alt:null}))," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"w5100s_projects_eclipse"}),"Make New W5100S-EVB Projects using Eclipse")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/link.png",alt:null}))," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"w5100s_projects_truestudio"}),"Make New W5100S-EVB Projects using TrueSTUDIO")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"technical-reference"},"Technical Reference"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Datasheet")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/products/w5100S/datasheet#W5100S%20Datasheet"}),"datasheet","#","W5100S Datasheet")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.st.com/en/microcontrollers/stm32f103vc.html"}),"STMicroelectronics STM32F103VCT6 Datasheet")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.silabs.com/products/interface/usb-bridges/classic-usb-bridges/device.cp2104"}),"Virtual COM Port:\nCP2104 COM Port Datasheet")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",{href:"http://www.ti.com/lit/ds/symlink/sn74lvc1g04.pdf",target:"_blank"},"SINGLE INVERTER GATE SN74LVC1G04DBVR Datasheet")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",{href:"https://assets.nexperia.com/documents/data-sheet/74HC_HCT573.pdf",target:"_blank"},"Octal D-type transparent latch; 3-state 74HC573PW Datasheet")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",{href:"https://www.nxp.com/docs/en/data-sheet/74CBTLV3257.pdf",target:"_blank"},"Quad 1-of-2 multiplexer 74CBTLV3257PW Datasheet"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Schematic & Part list")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S"}),"Go to Github"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Dimension")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"W5100S-EVB Rev1.0 Dimension(unit:mm)")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/w5100s-evb_dimension.png",alt:null}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"see-also"},"See Also"),Object(i.b)("p",null,"\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.wiznet.io/product-item/w5100s"}),"WIZnet Website - W5100S")," : W5100S Chip\nfeatures, Pin assignment and Hardware Ref. Design Guide"),Object(i.b)("p",null,"\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://forum.wiznet.io"}),"WizWiki Forum")," : WIZnet Forum for Technical support and\nProject shared"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"where-to-buy"},"Where to Buy"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5500/buynow.png",alt:"WIZnet Online Shop"})),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.shopwiznet.com/"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/dollar.png",alt:"WIZnetUS Online Shop, USA"}))),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://shop.wiznet.eu/"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/european-euro.png",alt:"WIZnetEU Online Shop, Germany"}))),"\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://shop.wiznet.co.kr/"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/won.png",alt:"WIZnetKorea Online Shop, Korea"})))))}p.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,d=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return r?n.a.createElement(d,b(b({ref:t},o),{},{components:r})):n.a.createElement(d,b({ref:t},o))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<i;o++)l[o]=r[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);