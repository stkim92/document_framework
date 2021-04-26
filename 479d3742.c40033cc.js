(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{190:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return s})),b.d(t,"metadata",(function(){return n})),b.d(t,"rightToc",(function(){return a})),b.d(t,"default",(function(){return i}));var r=b(2),c=b(6),l=(b(0),b(578)),s={id:"toe",title:"TCP/IP core Offload Engine (TOE)",date:new Date("2020-04-03T00:00:00.000Z")},n={unversionedId:"Product/iMCU/W7500/Peripherals-internal/toe",id:"Product/iMCU/W7500/Peripherals-internal/toe",isDocsHomePage:!1,title:"TCP/IP core Offload Engine (TOE)",description:"Introduction",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\toe.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/toe",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/toe.md",sidebar:"docs",previous:{title:"Dual Timer TimerRun example",permalink:"/Product/iMCU/W7500/Peripherals-internal/timerrun"},next:{title:"Universal Asynchronous Receive Transmit (UART)",permalink:"/Product/iMCU/W7500/Peripherals-internal/uart"}},a=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[]},{value:"TOE Memory map",id:"toe-memory-map",children:[{value:"Common register map",id:"common-register-map",children:[]},{value:"Socket register map",id:"socket-register-map",children:[]},{value:"Memory",id:"memory",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],o={rightToc:a};function i(e){var t=e.components,b=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,b,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"The TCP/IPCore Offlead Engine (TOE) is a Hardwired TCP/IP embedded Ethernet controller that provides easier Internet connection to embedded systems. TOE enables users to have Internet connectivity in their applications by using the TCP/IP stack.\nWIZnet\u2018s Hardwired TCP/IP is the market-proven technology that supports TCP, UDP, IPv4, ICMP, ARP, IGMP, and PPPoE protocols. TOE embeds the 32Kbyte internal memory buffer for the Ethernet packet processing. Using TOE allows users to implement the Ethernet application by adding the simple socket program. It\u2019s faster and easier than using any other Embedded Ethernet solutions. 8 independent hardware sockets can be used simultaneously.\nTOE also provides WOL (Wake on LAN) to reduce power consumption of the system."),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Supports Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE"),Object(l.b)("li",{parentName:"ul"},"Supports 8 independent sockets simultaneously"),Object(l.b)("li",{parentName:"ul"},"Supports Power down mode"),Object(l.b)("li",{parentName:"ul"},"Supports Wake on LAN over UDP"),Object(l.b)("li",{parentName:"ul"},"Internal 32Kbytes Memory for TX/RX Buffers"),Object(l.b)("li",{parentName:"ul"},"Not supports IP Fragmentation")),Object(l.b)("h2",{id:"functional-description"},"Functional description"),Object(l.b)("p",null,"The below Figure shows the TOE block diagram."),Object(l.b)("p",null,Object(l.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/wztoe_diagram.gif",alt:null,title:"Figure 1 TOE block diagram"}))),Object(l.b)("h2",{id:"toe-memory-map"},"TOE Memory map"),Object(l.b)("p",null,"TOE has one Common Register Block, eight Socket Register Blocks, and TX/RX Buffer Blocks allocated to each Socket. The below Figure shows the selected block by the base address and the available offset address range of Socket TX/RX Buffer Blocks. Each Socket\u2019s TX Buffer Block physically exists in one 16KB TX memory and is initially allocated with 2KB. Also, Each Socket\u2019s RX Buffer Block physically exists in one 16KB RX Memory and is initially allocated with 2KB.\nRegardless of the allocated size of each Socket TX/RX Buffer, it can be accessible within the 16 bits offset address range (From 0x0000 to 0xFFFF).\nRefer to ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/Product/iMCU/W7500/Peripherals-internal/toe#memory"}),"Memory")," for more information about 16KB TX/RX Memory organization and access method."),Object(l.b)("p",null,Object(l.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/wztoe_memory_map.jpg",alt:null,title:"Figure 2 TOE memory map "}))),Object(l.b)("h3",{id:"common-register-map"},"Common register map"),Object(l.b)("p",null,"Common Register Block configures the general information of TOE such as IP and MAC address. The below Table defines the offset address of registers in this block. Refer to ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/Product/iMCU/W7500/Peripherals-internal/toe#memory"}),"Memory")," for more details about each register."),Object(l.b)("table",{class:"tg"},Object(l.b)("tr",null,Object(l.b)("th",{class:"tg-s6z2"},"Offset",Object(l.b)("br",null),"  "),Object(l.b)("th",{class:"tg-s6z2"},"Register",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0000",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"TOE Version (VERSIONR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2000",Object(l.b)("br",null)),Object(l.b)("td",{class:"tg-s6z2"},"TICKCLOK (TCLKR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2100",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Interrupt (IR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2104",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Interrupt Mask (IMR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2108",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Interrupt Clear (IRCR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2110",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Interrupt (SIR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2114",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Mask (SIMR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2300",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Mode (MR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2400",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"PPP Timer (PTIMER)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2404",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"PPP Magic (PMAGIC)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2408",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"PPP Destination MAC Address (PHAR1)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x240C",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"PPP Destination MAC address (PHAR0)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2410",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"PPP Session Identification (PSID)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x2414",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"PPP Maximum Segment Size (PMSS)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x6000",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Source Hardware Address (SHAR1)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x6004",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Source Hardware Address (SHAR0)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x6008",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Gateway Address (GA)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x600C",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Subnet Mask (SUB)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x6010",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Source IP Address (SIP)")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x6020",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Network Configuration Lock (NCONFL)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x6040",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Retry Time (RTR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x6044",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Retry Counter (RCR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x6050",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Unreachable IP Address (UIP)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-031e"},"0x6054",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-031e"},"Unreachable Port Address (UPORT)"))),Object(l.b)("h3",{id:"socket-register-map"},"Socket register map"),Object(l.b)("p",null,"TOE supports 8 Sockets for communication channel. Each Socket is controlled by Socket n Register (n = 0,\u2026,7  ,where n is socket number). <Table 2> defines the 16bits Offset Address of registers in Socket n Register Block.\nRefer to ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/Product/iMCU/W7500/Peripherals-internal/toe#memory"}),"Memory")," for more details about each register."),Object(l.b)("table",{class:"tg"},Object(l.b)("tr",null,Object(l.b)("th",{class:"tg-s6z2"},"Offset",Object(l.b)("br",null),"  "),Object(l.b)("th",{class:"tg-s6z2"},"Register",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0000",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Mode (Sn_MR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0010",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Command (Sn_CR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0020",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Interrupt (Sn_IR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0024",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Interrupt Mask (Sn_IMR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0028",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Interrupt Clear (Sn_ICR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0030",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Status (Sn_SR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0100",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Protocol Number (Sn_PNR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0104",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket IP Type of Service (Sn_TOS)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0108",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket TTL (Sn_TTLR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x010C",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Fragment Offset (Sn_FRAG)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0110",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Maximum Segment (Sn_MSSR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0114",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Port Number (Sn_PORT)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0118",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Destination Hardware address0 (Sn_DHAR0)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x011C",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Destination Hardware address1 (Sn_DHAR1)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0120",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Destination Port Number (Sn_DPORTR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0124",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Destination IP Address (Sn_DIPR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0180",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Keep Alive Timer (Sn_KATMR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0184",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Retry Time (Sn_RTR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0188",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket Retry Counter (Sn_RCR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0200",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket TX Memory Size (Sn_TMSR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0204",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket TX Free Size (Sn_TXFSR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0208",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket TX Read Pointer (Sn_TXRDR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x020C",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket TX Write Pointer (Sn_TXWR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0220",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket RX Memory Size (Sn_TMSR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0224",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket RX Received Size (Sn_RSR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0228",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket RX Read Pointer (Sn_RXRDR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x022C",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket RX Write Pointer (Sn_RXWR)",Object(l.b)("br",null),"  ")),Object(l.b)("tr",null,Object(l.b)("td",{class:"tg-s6z2"},"0x0400",Object(l.b)("br",null),"  "),Object(l.b)("td",{class:"tg-s6z2"},"Socket TCP Status (Sn_TSR)",Object(l.b)("br",null),"  "))),Object(l.b)("h3",{id:"memory"},"Memory"),Object(l.b)("p",null,"TOE has one 16KB TX memory for Socket n TX Buffer Blocks and one 16KB RX memory for Socket n RX buffer Blocks."),Object(l.b)("p",null,"16KB TX memory is initially allocated in 2KB size for each Socket TX Buffer Block (2KB X 8 = 16KB). The initial allocated 2KB size of Socket n TX Buffer can be re-allocated by using \u2018Socket n TX Buffer Size Register (Sn_TXBUF_SIZE)\u2019.\nOnce all Sn_TXBUF_SIZE registers have been configured, Socket TX Buffer is allocated with the configured size of 16KB TX Memory and is assigned sequentially from Socket 0 to Socket 7. Its physical memory address is automatically determined in 16KB TX memory. Therefore, the total sum of Sn_TXBUF_SIZE should not exceed 16 in case of error in data transmission."),Object(l.b)("p",null,"The 16KB RX memory allocation method is the same as the 16KB TX memory allocation method. 16KB RX memory is initially allocated into 2KB size for each Socket RX Buffer Block (2KB X 8 = 16KB). The initial allocated 2KB size of Socket n RX Buffer can be re-allocated by using \u2018Socket n RX Buffer Size Register (Sn_RXBUF_SIZE)\u2019."),Object(l.b)("p",null,"When all Sn_RXBUF_SIZE registers have been configured, the Socket RX Buffer is allocated with the configured size in 16KB RX Memory and is assigned sequentially from Socket 0 to Socket 7. The physical memory address of the Socket RX Buffer is automatically determined in 16KB RX memory. Therefore, the total sum of Sn_RXBUF_SIZE should not exceed 16 or data reception error will occur. "),Object(l.b)("p",null,"For 16KB TX/RX memory allocation, refer to Sn_TXBUF_SIZE & Sn_RXBUF_SIZE in ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/Product/iMCU/W7500/Peripherals-internal/toe#socket_register_map"}),"Socket register map")," . The Socket n TX Buffer Block allocated in 16KB TX memory is buffer for saving data to be transmitted by host. The 16bits Offset Address of Socket n TX Buffer Block has 64KB address space ranged from 0x0000 to 0xFFFF, and is configured with reference to \u2018Socket n TX Write Pointer Register (Sn_TX_WR)\u2019 & \u2018Socket n TX Read Pointer Register(Sn_RX_RD)\u2019. However, the 16bits Offset Address automatically converts into the physical address to be accessible in 16KB TX memory such as ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/img/products/w7500p/peripheral/wztoe_memory_map.jpg"}),"The upper Figure"),". Refer to ","[Socket register map]","(/Product/iMCU/W7500/Peripherals-internal/toe#socket register map) for Sn_TX_WR & Sn_TX_RD."),Object(l.b)("p",null,"The Socket n RX Buffer Block allocated in 16KB RX memory is buffer for saving the received data through the Ethernet. The 16bits Offset Address of Socket n RX Buffer Block has 64KB address space ranged from 0x0000 to 0xFFFF, and is configured with reference to \u2018Socket n RX RD Pointer Register (Sn_RX_RD)\u2019 & \u2018Socket n RX Write Pointer Register (Sn_RX_WR)\u2019. However, the 16bits Offset Address automatically converts into the physical address to be accessible in 16KB RX memory such as ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/img/products/w7500p/peripheral/wztoe_memory_map.jpg"}),"The upper Figure"),". Refer to ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"/Product/iMCU/W7500/Peripherals-internal/toe#socket_register_map"}),"Socket register map")," for Sn_RX_RD & Sn_RX_WR."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"loopback.md"}),"TCP/UDP Loopback")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/deladhcpclient"}),"DHCP Client")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/dmdnsclient"}),"DNS Client"))))}i.isMDXComponent=!0},578:function(e,t,b){"use strict";b.d(t,"a",(function(){return u})),b.d(t,"b",(function(){return j}));var r=b(0),c=b.n(r);function l(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function s(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,r)}return b}function n(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?s(Object(b),!0).forEach((function(t){l(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):s(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function a(e,t){if(null==e)return{};var b,r,c=function(e,t){if(null==e)return{};var b,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)b=l[r],t.indexOf(b)>=0||(c[b]=e[b]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)b=l[r],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(c[b]=e[b])}return c}var o=c.a.createContext({}),i=function(e){var t=c.a.useContext(o),b=t;return e&&(b="function"==typeof e?e(t):n(n({},t),e)),b},u=function(e){var t=i(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var b=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),u=i(b),d=r,j=u["".concat(s,".").concat(d)]||u[d]||O[d]||l;return b?c.a.createElement(j,n(n({ref:t},o),{},{components:b})):c.a.createElement(j,n({ref:t},o))}));function j(e,t){var b=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=b.length,s=new Array(l);s[0]=d;var n={};for(var a in t)hasOwnProperty.call(t,a)&&(n[a]=t[a]);n.originalType=e,n.mdxType="string"==typeof e?e:r,s[1]=n;for(var o=2;o<l;o++)s[o]=b[o];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,b)}d.displayName="MDXCreateElement"}}]);