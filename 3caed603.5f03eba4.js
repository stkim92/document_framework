(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{156:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return c})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return j}));var b=n(2),a=n(6),l=(n(0),n(516)),r={id:"all_pages",title:"WIZ550io",date:new Date("2020-04-15T00:00:00.000Z")},c={unversionedId:"Product/ioModule/WIZ550io/all_pages",id:"Product/ioModule/WIZ550io/all_pages",isDocsHomePage:!1,title:"WIZ550io",description:"Overview",source:"@site/docs\\Product\\ioModule\\WIZ550io\\All_Pages.md",permalink:"/docs/Product/ioModule/WIZ550io/all_pages",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/ioModule/WIZ550io/All_Pages.md"},i=[{value:"Overview",id:"overview",children:[{value:"Datasheet",id:"datasheet",children:[]},{value:"Datasheet History",id:"datasheet-history",children:[]},{value:"WIZ550io History",id:"wiz550io-history",children:[]}]},{value:"Hardware Pins of WIZ550io",id:"hardware-pins-of-wiz550io",children:[{value:"Pin Map",id:"pin-map",children:[]},{value:"Pin out",id:"pin-out",children:[]},{value:"Pin Description",id:"pin-description",children:[]}]},{value:"Characteristic",id:"characteristic",children:[{value:"DC Charcteristic",id:"dc-charcteristic",children:[]},{value:"Power Dissipation",id:"power-dissipation",children:[]}]},{value:"SPI Operations",id:"spi-operations",children:[{value:"Datasheet",id:"datasheet-1",children:[]},{value:"Datasheet History",id:"datasheet-history-1",children:[]},{value:"WIZ550io History",id:"wiz550io-history-1",children:[]}]},{value:"Timing Diagram",id:"timing-diagram",children:[{value:"Reset Timing",id:"reset-timing",children:[]},{value:"SPI Timing",id:"spi-timing",children:[]}]},{value:"Block Diagram",id:"block-diagram",children:[]},{value:"Schematic",id:"schematic",children:[]},{value:"PCB",id:"pcb",children:[]},{value:"Partlist",id:"partlist",children:[]},{value:"Related Products",id:"related-products",children:[]}],O={rightToc:i};function j(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(l.b)("wrapper",Object(b.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"WIZ550io is an auto configurable Ethernet controller that includes a\nW5500 (TCP/IP hardwired chip and PHY embedded), a transformer and RJ45."),Object(l.b)("p",null,"It has a unique real MAC address and configures the network setting\nautomatically. When powered on, WIZ550io initializes itself \u2026 with\nembedded real MAC and sets the default IP address (192.168.1.2) and it\ncan be pinged. Therefore, users are not required to write MAC and\nnetwork information like IP address, Subnet mask and Gateway address.\nThe WIZ550io is an ideal product for users who want to develop their\nInternet enabling systems rapidly."),Object(l.b)("p",null,Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_small_005.png",alt:null}))),Object(l.b)("p",null,"For more information on the ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"../../iEthernet/w5500/overview"}),"W5500")," chip inside\nthe ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"overview"}),"WIZ550io")," module please also refer to\nthe chip's datasheet: ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"../../iEthernet/w5500/datasheet"}),"datasheet")),Object(l.b)("h3",{id:"datasheet"},"Datasheet"),Object(l.b)("p",null,Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"/img/products/w5500/w5500_ds_v109e.pdf"}),"W5500 Datasheet v1.0.9 - English"),"\n",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"/img/products/w5500/w5500_ds_v109k.pdf"}),"W5500 Datasheet v1.0.9 - Korean")),Object(l.b)("h3",{id:"datasheet-history"},"Datasheet History"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Version"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Date"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2013-08-01"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Initial Release")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2013-09-13"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Corrected duplicated statements and typing errors (P.14, 23, 24, 28, 39, 51) Corrected descriptions (P.35)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2013-11-14"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Changed \u201cdescriptions of pin at 1.1 Pin Descriptions\u201d (P.10) starting \u201dIt must be tied to GND to NC (PIN38..42)\u201d / 2. corrected typing error: starting \u201c0x02 to 0x42 value of SOCK_MACRAW at 4.2 Socket Registers(P.50)\u201d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.3"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-05-29"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Corrected \u201cSn_MSSR at 4.2 Socket Register\u201d (P.53): wrong descriptions of Sn_MSSR about FMTU/MTU")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.4"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-06-13"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Added Note about reading size register value (P.56, 58) / 2. Added IR Reflow Temperature Profile (P.66)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.5"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-11-11"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Added description for MISO pin (P.11):The SCSn signal defines MISO pin output value / 2. Modified the register notation (P.33), Modified the register notation \u201cSn_IR at 4.2 Socket Register\u201d (P.49) :from ","[R]"," to ","[RCW1]"," / 3. Corrected typing error: from DICON to DISCON of Sn_SR at 4.2 Socket Register (P.50)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.6"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-12-30"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Corrected typing error : from 0x02 to 0x42 value of SOCK_MACRAW \u201cSn_CR at 4.2 Socket Registers\u201d(P.46)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.7"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2016-02-24"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Corrected Interrupt Assert Wait Time function (P.34) / 2. Notice PLLclk is 150MHz (P.34)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.8"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2017-05-19"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Corrected Driver Level Range Unit uW/MHz to uW (P.60)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.9"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2019-05-22"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Corrected Sn_IMR Description (P.55) 2. Corrected Junction temperature Min value TJ (P.57) 3. Added Maximum junction temperature TJMAX (P.58)")))),Object(l.b)("h3",{id:"wiz550io-history"},"WIZ550io History"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Version"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Date"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2013-08-01"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Initial Release")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-01-17"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Changed \u201cExternal Transformer + RJ-45 to MAGJACK(inside transformer)\u201d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2015-04-20"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Added \u201cResistor 33R in MDI line. because EMI issue.\u201dChanged \u201cPCB artwork. because changed develop tool(PADS \u2192 Altium)\u201d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.3"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2018-08-10"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Modified \u201cinner 2 layer copper foil (3V3D). This copper foil plated below of CHAND area. It may affect ESD.\u201d")))),Object(l.b)("h2",{id:"hardware-pins-of-wiz550io"},"Hardware Pins of WIZ550io"),Object(l.b)("h3",{id:"pin-map"},"Pin Map"),Object(l.b)("p",null,Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_pin_map.jpg",alt:null}))),Object(l.b)("h3",{id:"pin-out"},"Pin out"),Object(l.b)("p",null,Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_pinout_20140513_v4_mounthole_.jpg",alt:null}))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Revision 1.2 version pinout is same to revision1.1 version.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"pin-description"},"Pin Description"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",{class:"header"},Object(l.b)("th",null,Object(l.b)("strong",null,"Pin No.")),Object(l.b)("th",null),Object(l.b)("th",null,Object(l.b)("strong",null,"I/O")),Object(l.b)("th",null,"Pin Name"),Object(l.b)("th",null,Object(l.b)("strong",null,"Description")))),Object(l.b)("tbody",null,Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,"J1"),Object(l.b)("td",null,Object(l.b)("strong",null,"1")),Object(l.b)("td",null,Object(l.b)("strong",null,"P")),Object(l.b)("td",null,Object(l.b)("strong",null,"GND")),Object(l.b)("td",null,Object(l.b)("strong",null,"Ground"))),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"2")),Object(l.b)("td",null,Object(l.b)("strong",null,"P")),Object(l.b)("td",null,Object(l.b)("strong",null,"GND")),Object(l.b)("td",null,Object(l.b)("strong",null,"Ground"))),Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"3")),Object(l.b)("td",null,Object(l.b)("strong",null,"I")),Object(l.b)("td",null,Object(l.b)("strong",null,"MOSI")),Object(l.b)("td",null,Object(l.b)("strong",null,"SPI Master Out Slave In"),Object(l.b)("br",null),"This pin is used for SPI MOSI signal pin")),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"4")),Object(l.b)("td",null,Object(l.b)("strong",null,"O")),Object(l.b)("td",null,Object(l.b)("strong",null,"MISO")),Object(l.b)("td",null,Object(l.b)("strong",null,"SPI Master In Slave Out"),Object(l.b)("br",null),"This pin is used for SPI MISO signal pin")),Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"5")),Object(l.b)("td",null,Object(l.b)("strong",null,"I")),Object(l.b)("td",null,Object(l.b)("strong",null,"SCLK")),Object(l.b)("td",null,Object(l.b)("strong",null,"SPI Clock"),Object(l.b)("br",null),"This pin is used for SPI Clock Signal pin")),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"6")),Object(l.b)("td",null,Object(l.b)("strong",null,"I")),Object(l.b)("td",null,Object(l.b)("strong",null,"SCSn")),Object(l.b)("td",null,Object(l.b)("strong",null,"SPI Slave Select"),Object(l.b)("br",null),"This pin is used for SPI Slave Select Signal Pin when using SPI interface")),Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"7")),Object(l.b)("td",null,Object(l.b)("strong",null,"P")),Object(l.b)("td",null,Object(l.b)("strong",null,"3V3D")),Object(l.b)("td",null,Object(l.b)("strong",null,"Power"),": 3.3V Power Supply")),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"8")),Object(l.b)("td",null,Object(l.b)("strong",null,"P")),Object(l.b)("td",null,Object(l.b)("strong",null,"3V3D")),Object(l.b)("td",null,Object(l.b)("strong",null,"Power"),": 3.3V Power Supply")))),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",{class:"header"},Object(l.b)("th",null,Object(l.b)("strong",null,"Pin No.")),Object(l.b)("th",null),Object(l.b)("th",null,Object(l.b)("strong",null,"I/O")),Object(l.b)("th",null,Object(l.b)("strong",null,"Pin Name")),Object(l.b)("th",null,Object(l.b)("strong",null,"Description")))),Object(l.b)("tbody",null,Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,Object(l.b)("strong",null,"J2")),Object(l.b)("td",null,Object(l.b)("strong",null,"1")),Object(l.b)("td",null,Object(l.b)("strong",null,"P")),Object(l.b)("td",null,Object(l.b)("strong",null,"3V3D")),Object(l.b)("td",null,Object(l.b)("strong",null,"Power"),": 3.3V Power Supply")),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"2")),Object(l.b)("td",null,Object(l.b)("strong",null,"O")),Object(l.b)("td",null,Object(l.b)("strong",null,"RDY")),Object(l.b)("td",null,Object(l.b)("strong",null,"READY"),Object(l.b)("br",null),"This pin is asserted to low after power on.",Object(l.b)("br",null),"When RSTn is activated, WIZ550io does auto configuration with embedded MAC and default IP address.",Object(l.b)("br",null),"After configuration gets completed, WIZ550io raises this pin to HIGH in order to inform about the completion of WIZ550io\u2019s configuration.",Object(l.b)("br",null),"Host processor can only control WIZ55oio when RDY pin is HIGH.")),Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"3")),Object(l.b)("td",null,Object(l.b)("strong",null,"I")),Object(l.b)("td",null,Object(l.b)("strong",null,"RSTn")),Object(l.b)("td",null,Object(l.b)("strong",null,"Reset"),": Low activity",Object(l.b)("br",null),"This pin is to initialize WIZ550io.",Object(l.b)("br",null),"Hold at least 500us after asserted to LOW and wait for at least 150ms after it is changed to HIGH until WIY550io configured itself.")),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"4")),Object(l.b)("td",null,Object(l.b)("strong",null,"I")),Object(l.b)("td",null,Object(l.b)("strong",null,"NC")),Object(l.b)("td",null,Object(l.b)("strong",null,"Not Connected"))),Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"5")),Object(l.b)("td",null,Object(l.b)("strong",null,"O")),Object(l.b)("td",null,Object(l.b)("strong",null,"INTn")),Object(l.b)("td",null,Object(l.b)("strong",null,"Interrupt"),": Low activity",Object(l.b)("br",null),"This pin indicates that W5500 inside WIZ550io requires",Object(l.b)("br",null),"MCU's due to events like socket connection, disconnection, data receiving timeout and WOL (Wake on Lan).",Object(l.b)("br",null),"The interrupt is cleared by writing IR register or Sn_IR.",Object(l.b)("br",null),"All interrupts are maskable.")),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,":::"),Object(l.b)("td",null,Object(l.b)("strong",null,"6")),Object(l.b)("td",null,Object(l.b)("strong",null,"P")),Object(l.b)("td",null,Object(l.b)("strong",null,"GND")),Object(l.b)("td",null,Object(l.b)("strong",null,"Ground"))))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Caution"),Object(l.b)("br",{parentName:"p"}),"\n",Object(l.b)("em",{parentName:"p"},"Some users may want to reinitialize W5500 inside WIZ550io with SW reset,\nnot handling RSTn pin. It will make WIZ550io hang up due to clearance of\nall information in the registers of W5500. A tiny MCU inside WIZ550io\ninitializes W5500 with embedded MAC address and a default IP address and\nInitialization is triggered by RSTn."),"  "),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"In case of SW reset, all registers in W5500 will be cleared and WIZ550io\nwill not initialize itself. All information inside WIZ550io will be lost\nand WIZ550io will hang up instead."),"  "),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Therefore, we recommend HW reset instead of SW reset. Nevertheless, if\nusers want to use SW reset, we recommend to save MAC address and network\ninformation including IP address, Subnet mask and Gateway address before\nSW reset, and writing those information to WIZ550io after SW reset.")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"characteristic"},"Characteristic"),Object(l.b)("h3",{id:"dc-charcteristic"},"DC Charcteristic"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",{class:"header"},Object(l.b)("th",null,"Symbol"),Object(l.b)("th",null,"Parameter"),Object(l.b)("th",null,"Pins"),Object(l.b)("th",null,"Min"),Object(l.b)("th",null,"Typ"),Object(l.b)("th",null,"Max"),Object(l.b)("th",null,"Unit"))),Object(l.b)("tbody",null,Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,"V",Object(l.b)("em",null,"DD")),Object(l.b)("td",null,Object(l.b)("strong",null,"Supply voltage")),Object(l.b)("td",null,"3.3V"),Object(l.b)("td",null,"2.97"),Object(l.b)("td",null,"3.3"),Object(l.b)("td",null,"3.63"),Object(l.b)("td",null,"V")),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,"V",Object(l.b)("em",null,"IH")),Object(l.b)("td",null,Object(l.b)("strong",null,"High level input voltage")),Object(l.b)("td",null,"ALL"),Object(l.b)("td",null,"0.7*Vcc"),Object(l.b)("td",null),Object(l.b)("td",null,"5.5"),Object(l.b)("td",null,"V")),Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,"V",Object(l.b)("em",null,"IL")),Object(l.b)("td",null,Object(l.b)("strong",null,"Low level input voltage")),Object(l.b)("td",null,"ALL"),Object(l.b)("td",null,"-0.3"),Object(l.b)("td",null),Object(l.b)("td",null,"0.3*Vcc"),Object(l.b)("td",null,"V")),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,"V",Object(l.b)("em",null,"OH")),Object(l.b)("td",null,Object(l.b)("strong",null,"High level output voltage")),Object(l.b)("td",null,"ALL"),Object(l.b)("td",null,"2.9"),Object(l.b)("td",null,"3.3"),Object(l.b)("td",null),Object(l.b)("td",null,"V")),Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,"V",Object(l.b)("em",null,"OL")),Object(l.b)("td",null,Object(l.b)("strong",null,"Low level output voltage")),Object(l.b)("td",null,"ALL"),Object(l.b)("td",null,"0.0"),Object(l.b)("td",null),Object(l.b)("td",null,"0.52"),Object(l.b)("td",null,"V")),Object(l.b)("tr",{class:"even"},Object(l.b)("td",null,"I",Object(l.b)("em",null,"DD")),Object(l.b)("td",null,Object(l.b)("strong",null,"Supply Current",Object(l.b)("br",null),"(Normal operation mode)")),Object(l.b)("td",null,"3.3V"),Object(l.b)("td",null),Object(l.b)("td",null,"141"),Object(l.b)("td",null),Object(l.b)("td",null,"mA")),Object(l.b)("tr",{class:"odd"},Object(l.b)("td",null,"L",Object(l.b)("em",null,"OH")),Object(l.b)("td",null,Object(l.b)("strong",null,"Supply Current",Object(l.b)("br",null),"(Power Down mode)")),Object(l.b)("td",null,"3.3V"),Object(l.b)("td",null),Object(l.b)("td",null,"13"),Object(l.b)("td",null),Object(l.b)("td",null,"mA")))),Object(l.b)("h3",{id:"power-dissipation"},"Power Dissipation"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Condition"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Min"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Typ"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Max"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Unit"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"100M Link"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"135"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"10M Link"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"80"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Unlink (Auto-negotiation mode)"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"62"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"75"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"100M Transmitting"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"137"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"141"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"10M Transmitting"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"83"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Power Down mode"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"13"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"spi-operations"},"SPI Operations"),Object(l.b)("p",null,"There is a W5500 inside WIZ550io. Therefore SPI operation of WIZ550io follows one of W5500. For more information about SPI operation of\nWIZ550io, please refer to ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"../../iEthernet/w5500/datasheet"}),"W5500 Datasheet"),"."),Object(l.b)("h3",{id:"datasheet-1"},"Datasheet"),Object(l.b)("p",null,Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"/img/products/w5500/w5500_ds_v109e.pdf"}),"W5500 Datasheet v1.0.9 - English")),Object(l.b)("p",null,Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"/img/products/w5500/w5500_ds_v109k.pdf"}),"W5500 Datasheet v1.0.9 - Korean")),Object(l.b)("h3",{id:"datasheet-history-1"},"Datasheet History"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Version"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Date"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2013-08-01"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Initial Release")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2013-09-13"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Corrected duplicated statements and typing errors (P.14, 23, 24, 28, 39, 51) Corrected descriptions (P.35)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2013-11-14"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Changed \u201cdescriptions of pin at 1.1 Pin Descriptions\u201d (P.10) starting \u201dIt must be tied to GND to NC (PIN38..42)\u201d / 2. corrected typing error: starting \u201c0x02 to 0x42 value of SOCK_MACRAW at 4.2 Socket Registers(P.50)\u201d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.3"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-05-29"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Corrected \u201cSn_MSSR at 4.2 Socket Register\u201d (P.53): wrong descriptions of Sn_MSSR about FMTU/MTU")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.4"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-06-13"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Added Note about reading size register value (P.56, 58) / 2. Added IR Reflow Temperature Profile (P.66)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.5"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-11-11"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Added description for MISO pin (P.11):The SCSn signal defines MISO pin output value / 2. Modified the register notation (P.33), Modified the register notation \u201cSn_IR at 4.2 Socket Register\u201d (P.49) :from ","[R]"," to ","[RCW1]"," / 3. Corrected typing error: from DICON to DISCON of Sn_SR at 4.2 Socket Register (P.50)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.6"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-12-30"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Corrected typing error : from 0x02 to 0x42 value of SOCK_MACRAW \u201cSn_CR at 4.2 Socket Registers\u201d(P.46)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.7"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2016-02-24"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Corrected Interrupt Assert Wait Time function (P.34) / 2. Notice PLLclk is 150MHz (P.34)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.8"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2017-05-19"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Corrected Driver Level Range Unit uW/MHz to uW (P.60)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0.9"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2019-05-22"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1. Corrected Sn_IMR Description (P.55) 2. Corrected Junction temperature Min value TJ (P.57) 3. Added Maximum junction temperature TJMAX (P.58)")))),Object(l.b)("h3",{id:"wiz550io-history-1"},"WIZ550io History"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Version"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Date"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.0"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2013-08-01"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Initial Release")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.1"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2014-01-17"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Changed \u201cExternal Transformer + RJ-45 to MAGJACK(inside transformer)\u201d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.2"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2015-04-20"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Added \u201cResistor 33R in MDI line. because EMI issue.\u201dChanged \u201cPCB artwork. because changed develop tool(PADS \u2192 Altium)\u201d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"1.3"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2018-08-10"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Modified \u201cinner 2 layer copper foil (3V3D). This copper foil plated below of CHAND area. It may affect ESD.\u201d")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"timing-diagram"},"Timing Diagram"),Object(l.b)("h3",{id:"reset-timing"},"Reset Timing"),Object(l.b)("p",null,Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/nreset_rdy_timing.jpg",alt:null}))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Symbol"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Min"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Max"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TRC"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Reset Cycle Time"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"500us"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TPL"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Internal Auto Configuration Time"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"50ms")))),Object(l.b)("h3",{id:"spi-timing"},"SPI Timing"),Object(l.b)("p",null,Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/spi_timing.jpg",alt:null}))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Symbol"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Min"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Max"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Units"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Fsck"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SCLK Clock Frequency"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"80"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MHz")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TWH"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SCLK High duration"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ns")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TWL"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SCLK Low duration"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ns")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TCS"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"nSCS High duration"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"5"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ns")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"block-diagram"},"Block Diagram"),Object(l.b)("p",null,Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_blockdiagram_140207.png",alt:null}))),Object(l.b)("h2",{id:"schematic"},"Schematic"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Revision 1.0 ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/img/products/wiz550io/wiz550io-r1.0_0830_.pdf"}),"WIZ550io Rev1.0 Schematic")),Object(l.b)("li",{parentName:"ul"},"Revision 1.1 ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/img/products/wiz550io/wiz550io_v1_1_20140117.pdf"}),"WIZ550io Rev1.1 Schematic")),Object(l.b)("li",{parentName:"ul"},"Revision 1.2/1.3 ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/img/products/wiz550io/wiz550io_v1_2_schematic.pdf"}),"WIZ550io Rev1.2/1.3 Schematic"))),Object(l.b)("h2",{id:"pcb"},"PCB"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Revision 1.2 ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/img/products/wiz550io/wiz550io_v1.2.zip"}),"WIZ550io Rev1.2 PCB(Altium)")),Object(l.b)("li",{parentName:"ul"},"Revision 1.3 ",Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/img/products/wiz550io/wiz550io_v1.3.zip"}),"WIZ550io Rev1.3 PCB(Altium)"))),Object(l.b)("h2",{id:"partlist"},"Partlist"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Revision 1.0 Partlist ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"/img/products/wiz550io/wiz550io_v1_0_0830_pl.pdf"}),"WIZ550io Rev1.0 Partlist"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Revision 1.1 Partlist ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"/img/products/wiz550io/wiz550io_ver1.1_pl_140128_.pdf"}),"WIZ550io Rev1.1 Partlist"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Revision 1.2 Partlist ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"/img/products/wiz550io/wiz550io_ver1.2_pl.pdf"}),"WIZ550io Rev1.2 Partlist")),Object(l.b)("hr",{parentName:"li"}),Object(l.b)("h2",Object(b.a)({parentName:"li"},{id:"dimension"}),"Dimension"))),Object(l.b)("p",null,"WIZ550io Ver1.0"),Object(l.b)("p",null,Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_v1.0_dimension.jpg",alt:null}))),Object(l.b)("p",null,"WIZ550io Ver1.1"),Object(l.b)("p",null,"54mm(W) x 26mm(L) x 24mm(H) (\xb10.5)\n",Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_v1.1_dimension.png",alt:null}))),Object(l.b)("p",null,"WIZ550io Ver1.2"),Object(l.b)("p",null,"54mm(W) x 26mm(L) x 24mm(H) (\xb10.5)"),Object(l.b)("p",null,"Same to Ver1.1 and Ver1.2 PCB all size and hole size. There is little\nchange in all parts placement."),Object(l.b)("p",null,"*"," TOP ",Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_topview.png",alt:null}))),Object(l.b)("p",null,"*"," BOTTOM ",Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_bottomview.png",alt:null}))),Object(l.b)("p",null,"*"," Drill ",Object(l.b)("img",Object(b.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_drillview.png",alt:null}))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"related-products"},"Related Products"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/Product/Open-Source-Hardware/ioshield_a"}),"ioShield-A")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/Product/Open-Source-Hardware/ioshield_k"}),"ioShield-K")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/Product/Open-Source-Hardware/ioshield_l"}),"ioShield-L"))))}j.isMDXComponent=!0},516:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return p}));var b=n(0),a=n.n(b);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,b)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,b,a=function(t,e){if(null==t)return{};var n,b,a={},l=Object.keys(t);for(b=0;b<l.length;b++)n=l[b],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(b=0;b<l.length;b++)n=l[b],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var O=a.a.createContext({}),j=function(t){var e=a.a.useContext(O),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},o=function(t){var e=j(t.components);return a.a.createElement(O.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},u=a.a.forwardRef((function(t,e){var n=t.components,b=t.mdxType,l=t.originalType,r=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),o=j(n),u=b,p=o["".concat(r,".").concat(u)]||o[u]||d[u]||l;return n?a.a.createElement(p,c(c({ref:e},O),{},{components:n})):a.a.createElement(p,c({ref:e},O))}));function p(t,e){var n=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var l=n.length,r=new Array(l);r[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:b,r[1]=c;for(var O=2;O<l;O++)r[O]=n[O];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);