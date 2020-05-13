(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{318:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return a})),n.d(e,"metadata",(function(){return r})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return u}));var b=n(2),l=n(9),c=(n(0),n(629)),a={id:"wiz850io",title:"WIZ850io",date:new Date("2020-04-15T00:00:00.000Z")},r={id:"Product/ioModule/WIZ850io/wiz850io",title:"WIZ850io",description:"## Overview\r",source:"@site/docs\\Product\\ioModule\\WIZ850io\\WIZ850io.md",permalink:"/document_framework/docs/Product/ioModule/WIZ850io/wiz850io",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/ioModule/WIZ850io/WIZ850io.md",sidebar:"someSidebar",previous:{title:"WIZ810SMJ",permalink:"/document_framework/docs/Product/ioModule/WIZ810SMJ/wiz810smj"},next:{title:"Overview",permalink:"/document_framework/docs/Product/ioModule/WIZ550io/overview"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Hardware Specification",id:"hardware-specification",children:[{value:"WIZ850io",id:"wiz850io",children:[]},{value:"Pin Out",id:"pin-out",children:[]}]},{value:"Pin Description",id:"pin-description",children:[]},{value:"Characteristic",id:"characteristic",children:[{value:"DC Charcteristic",id:"dc-charcteristic",children:[]},{value:"Power Dissipation",id:"power-dissipation",children:[]}]},{value:"SPI Operations",id:"spi-operations",children:[]},{value:"Timing Diagram",id:"timing-diagram",children:[{value:"Reset Timing",id:"reset-timing",children:[]},{value:"SPI Timing",id:"spi-timing",children:[]}]},{value:"Schematic",id:"schematic",children:[]},{value:"Dimension",id:"dimension",children:[]},{value:"See Also",id:"see-also",children:[]},{value:"Where to Buy",id:"where-to-buy",children:[]}],O={rightToc:i};function u(t){var e=t.components,n=Object(l.a)(t,["components"]);return Object(c.b)("wrapper",Object(b.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"WIZ850io is a compact size network module that includes a W5500 (TCP/IP\nhardwired chip and PHY embedded), a transformer and RJ45. It can be used\nas a component and no effort is required to interface W5500 and\nTransformer. The WIZ850io is an ideal option for users who want to\ndevelop their Internet enabling systems rapidly. WIZ850io is hardware\ncompatible with WIZ820io. WIZ820io users, to migrate to WIZ850io, need\nto modify the Firmware.  "),Object(c.b)("p",null,"For the detailed information on implementation of Hardware TCP/IP, refer\nto the ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"/products/w5500/start"}),"W5500 Datasheet"),"."),Object(c.b)("p",null,Object(c.b)("img",Object(b.a)({parentName:"p"},{src:"/document_framework/img/products/wiz850io/wiz850io.png",alt:"WIZ850io"})),"  "),Object(c.b)("hr",null),Object(c.b)("h2",{id:"hardware-specification"},"Hardware Specification"),Object(c.b)("h3",{id:"wiz850io"},"WIZ850io"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Plugin Network Module."),Object(c.b)("li",{parentName:"ul"},"Hardware compatible with WIZ820io."),Object(c.b)("li",{parentName:"ul"},"Usable without H/W design for W5500, Transformer & RJ45."),Object(c.b)("li",{parentName:"ul"},"Fast evaluation for W5500 & MCU in the target board."),Object(c.b)("li",{parentName:"ul"},"Support high speed SPI interface."),Object(c.b)("li",{parentName:"ul"},"Support power down mode and Wake-on-LAN function"),Object(c.b)("li",{parentName:"ul"},"Very small form factor : 23mm x 25mm x 18mm"),Object(c.b)("li",{parentName:"ul"},"1 x 6, 2.54mm Pin Header x 2")),Object(c.b)("h3",{id:"pin-out"},"Pin Out"),Object(c.b)("p",null,Object(c.b)("img",Object(b.a)({parentName:"p"},{src:"/document_framework/img/products/wiz850io/wiz850io_pinmap.png",alt:"WIZ850io Pinmap"})),"  "),Object(c.b)("h2",{id:"pin-description"},"Pin Description"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",{class:"header"},Object(c.b)("th",null,Object(c.b)("strong",null,"Pin No.")),Object(c.b)("th",null),Object(c.b)("th",null,Object(c.b)("strong",null,"Pin Type")),Object(c.b)("th",null,"Pin Name"),Object(c.b)("th",null,Object(c.b)("strong",null,"Description")))),Object(c.b)("tbody",null,Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,"J1"),Object(c.b)("td",null,Object(c.b)("strong",null,"1")),Object(c.b)("td",null,Object(c.b)("strong",null,"P")),Object(c.b)("td",null,Object(c.b)("strong",null,"GND")),Object(c.b)("td",null,Object(c.b)("strong",null,"Ground"))),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"2")),Object(c.b)("td",null,Object(c.b)("strong",null,"P")),Object(c.b)("td",null,Object(c.b)("strong",null,"GND")),Object(c.b)("td",null,Object(c.b)("strong",null,"Ground"))),Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"3")),Object(c.b)("td",null,Object(c.b)("strong",null,"I")),Object(c.b)("td",null,Object(c.b)("strong",null,"MOSI")),Object(c.b)("td",null,Object(c.b)("strong",null,"SPI Master Out Slave In"),Object(c.b)("br",null),"This pin is used for SPI MOSI signal pin")),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"4")),Object(c.b)("td",null,Object(c.b)("strong",null,"I")),Object(c.b)("td",null,Object(c.b)("strong",null,"SCLK")),Object(c.b)("td",null,Object(c.b)("strong",null,"SPI Clock"),Object(c.b)("br",null),"This pin is used for SPI Clock Signal pin")),Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"5")),Object(c.b)("td",null,Object(c.b)("strong",null,"I")),Object(c.b)("td",null,Object(c.b)("strong",null,"SCNn")),Object(c.b)("td",null,Object(c.b)("strong",null,"SPI Slave Select"),Object(c.b)("br",null),"This pin is used for SPI Slave Select Signal Pin when using SPI interface")),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"6")),Object(c.b)("td",null,Object(c.b)("strong",null,"I")),Object(c.b)("td",null,Object(c.b)("strong",null,"INTn")),Object(c.b)("td",null,Object(c.b)("strong",null,"W5500 Interrupt")," : Low activity",Object(c.b)("br",null),"This pin is used for indicating event like socket TCP connection, disconnection, data receiving timeout, WOL(Wake on Lan) and so on occurred in W5500 inside WIZ550io.",Object(c.b)("br",null),"The interrupt is cleared by writing IR register or Sn_IR. All interrupts are maskable.")))),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",{class:"header"},Object(c.b)("th",null,Object(c.b)("strong",null,"Pin No.")),Object(c.b)("th",null),Object(c.b)("th",null,Object(c.b)("strong",null,"Pin Type")),Object(c.b)("th",null,"Pin Name"),Object(c.b)("th",null,Object(c.b)("strong",null,"Description")))),Object(c.b)("tbody",null,Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,"J2"),Object(c.b)("td",null,Object(c.b)("strong",null,"1")),Object(c.b)("td",null,Object(c.b)("strong",null,"P")),Object(c.b)("td",null,Object(c.b)("strong",null,"GND")),Object(c.b)("td",null,Object(c.b)("strong",null,"Ground"))),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"2")),Object(c.b)("td",null,Object(c.b)("strong",null,"P")),Object(c.b)("td",null,Object(c.b)("strong",null,"3.3V")),Object(c.b)("td",null,Object(c.b)("strong",null,"Power")," : 3.3V power supply")),Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"3")),Object(c.b)("td",null,Object(c.b)("strong",null,"P")),Object(c.b)("td",null,Object(c.b)("strong",null,"3.3V")),Object(c.b)("td",null,Object(c.b)("strong",null,"Power")," : 3.3V power supply")),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"4")),Object(c.b)("td",null,Object(c.b)("strong",null,"-")),Object(c.b)("td",null,Object(c.b)("strong",null,"NC")),Object(c.b)("td",null,Object(c.b)("strong",null,"Not Connect"))),Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"5")),Object(c.b)("td",null,Object(c.b)("strong",null,"I")),Object(c.b)("td",null,Object(c.b)("strong",null,"RSTn")),Object(c.b)("td",null,Object(c.b)("strong",null,"Reset")," : Low activity",Object(c.b)("br",null),"Hold at least 500us after asserted to LOW and keep HIGH until next Reset needed.")),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,":::"),Object(c.b)("td",null,Object(c.b)("strong",null,"6")),Object(c.b)("td",null,Object(c.b)("strong",null,"O")),Object(c.b)("td",null,Object(c.b)("strong",null,"MISO")),Object(c.b)("td",null,Object(c.b)("strong",null,"SPI Master In Slave Out"),Object(c.b)("br",null),"This pin is used for SPI MISO signal pin")))),Object(c.b)("p",null,"User need to wait for 50ms after this pin is changed to HIGH to\ncommunicate with WIZ850io. (Refer to 5. Timing Diagram)"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"characteristic"},"Characteristic"),Object(c.b)("h3",{id:"dc-charcteristic"},"DC Charcteristic"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",{class:"header"},Object(c.b)("th",null,"Symbol"),Object(c.b)("th",null,"Parameter"),Object(c.b)("th",null,"Pins"),Object(c.b)("th",null,"Min"),Object(c.b)("th",null,"Typ"),Object(c.b)("th",null,"Max"),Object(c.b)("th",null,"Unit"))),Object(c.b)("tbody",null,Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,"V",Object(c.b)("em",null,"DD")),Object(c.b)("td",null,Object(c.b)("strong",null,"Supply voltage")),Object(c.b)("td",null,"3.3V"),Object(c.b)("td",null,"2.97"),Object(c.b)("td",null,"3.3"),Object(c.b)("td",null,"3.63"),Object(c.b)("td",null,"V")),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,"V",Object(c.b)("em",null,"IL")),Object(c.b)("td",null,Object(c.b)("strong",null,"High level input voltage")),Object(c.b)("td",null,"ALL"),Object(c.b)("td",null,"2.0"),Object(c.b)("td",null),Object(c.b)("td",null,"5.5"),Object(c.b)("td",null,"V")),Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,"V",Object(c.b)("em",null,"IH")),Object(c.b)("td",null,Object(c.b)("strong",null,"Low level input voltage")),Object(c.b)("td",null,"ALL"),Object(c.b)("td",null,"-0.3"),Object(c.b)("td",null),Object(c.b)("td",null,"0.8"),Object(c.b)("td",null,"V")),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,"V",Object(c.b)("em",null,"OL")),Object(c.b)("td",null,Object(c.b)("strong",null,"Low level output voltage")),Object(c.b)("td",null,"ALL"),Object(c.b)("td",null),Object(c.b)("td",null),Object(c.b)("td",null,"0.4"),Object(c.b)("td",null,"V")),Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,"V",Object(c.b)("em",null,"OH")),Object(c.b)("td",null,Object(c.b)("strong",null,"High level output voltage")),Object(c.b)("td",null,"ALL"),Object(c.b)("td",null,"2.4"),Object(c.b)("td",null),Object(c.b)("td",null),Object(c.b)("td",null,"V")),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,"L",Object(c.b)("em",null,"OL")),Object(c.b)("td",null,Object(c.b)("strong",null,"Low level output Current")),Object(c.b)("td",null,"ALL"),Object(c.b)("td",null,"8.6"),Object(c.b)("td",null,"13.9"),Object(c.b)("td",null,"18.9"),Object(c.b)("td",null,"mA")),Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,"L",Object(c.b)("em",null,"OH")),Object(c.b)("td",null,Object(c.b)("strong",null,"High level output Current")),Object(c.b)("td",null,"ALL"),Object(c.b)("td",null,"12.5"),Object(c.b)("td",null,"26.9"),Object(c.b)("td",null,"47.1"),Object(c.b)("td",null,"mA")),Object(c.b)("tr",{class:"even"},Object(c.b)("td",null,"I",Object(c.b)("em",null,"DD")),Object(c.b)("td",null,Object(c.b)("strong",null,"Supply Current",Object(c.b)("br",null),"(Normal operation mode)")),Object(c.b)("td",null,"3.3V"),Object(c.b)("td",null),Object(c.b)("td",null,"132"),Object(c.b)("td",null),Object(c.b)("td",null,"mA")),Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,"L",Object(c.b)("em",null,"OH")),Object(c.b)("td",null,Object(c.b)("strong",null,"Supply Current",Object(c.b)("br",null),"(Power Down mode)")),Object(c.b)("td",null,"3.3V"),Object(c.b)("td",null),Object(c.b)("td",null,"13"),Object(c.b)("td",null),Object(c.b)("td",null,"mA")))),Object(c.b)("h3",{id:"power-dissipation"},"Power Dissipation"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Condition"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Min"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Typ"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Max"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Unit"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"100M Link"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"128"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"10M Link"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"75"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Un-Link (Auto-negotiation mode)"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"65"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"100M Transmitting"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"132"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"10M Transmitting"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"79"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Power Down mode"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"13"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"mA")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"spi-operations"},"SPI Operations"),Object(c.b)("p",null,"As WIZ850io consists of W5500 and others, SPI operation of WIZ850io\nfollows one of W5500. For more information about SPI operation of\nWIZ850io, please refer to ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"/products/w5500/start"}),"W5500 Datasheet"),"."),Object(c.b)("hr",null),Object(c.b)("h2",{id:"timing-diagram"},"Timing Diagram"),Object(c.b)("h3",{id:"reset-timing"},"Reset Timing"),Object(c.b)("p",null,Object(c.b)("img",Object(b.a)({parentName:"p"},{src:"/document_framework/img/products/wiz850io/wiz850io_reset_timing.png",alt:"WIZ850io Reset Timing"}))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Symbol"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Min"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Max"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TRC"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Reset Cycle Time"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"500us"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TPL"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Internal Auto Configuration Time"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"50ms")))),Object(c.b)("h3",{id:"spi-timing"},"SPI Timing"),Object(c.b)("p",null,Object(c.b)("img",Object(b.a)({parentName:"p"},{src:"/products/spi_timing.jpg",alt:"WIZ850io SPI Timing"}))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Symbol"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Min"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Max"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Units"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Fsck"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SCLK Clock Frequency"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"80"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"MHz")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TWH"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SCLK High duration"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ns")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TWL"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"SCLK Low duration"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ns")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"TCS"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"nSCS High duration"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"5"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"ns")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"schematic"},"Schematic"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Revision 1.0 ",Object(c.b)("img",Object(b.a)({parentName:"li"},{src:"/document_framework/img/products/wiz850io/wiz850io_sch_v100.pdf",alt:"WIZ850io Rev1.0\nSchematic(PDF)"}))),Object(c.b)("li",{parentName:"ul"},"Revision 1.0 ",Object(c.b)("img",Object(b.a)({parentName:"li"},{src:"/document_framework/img/products/wiz850io/wiz850io_sch_v100.zip",alt:"WIZ850io Rev1.0\nSchematic(Altium)"})))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"dimension"},"Dimension"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"WIZ850io V1.0 3D PDF :\n",Object(c.b)("img",Object(b.a)({parentName:"li"},{src:"/document_framework/img/products/wiz850io/wiz850io_v100_3d.pdf",alt:"Download"})),Object(c.b)("br",{parentName:"li"}),"*"," This PDF must be run using the 'Adobe Acrobat'.")),Object(c.b)("p",null,Object(c.b)("img",Object(b.a)({parentName:"p"},{src:"/document_framework/img/products/wiz850io/wiz850io_dimension.png",alt:"WIZ850io Dimension"}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"see-also"},"See Also"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e","[http://www.wizwiki.net/forum|WizWiki Forum]"," : WIZnet Forum for Technical support and Project shared")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"where-to-buy"},"Where to Buy"),Object(c.b)("p",null,Object(c.b)("img",Object(b.a)({parentName:"p"},{src:"/products/w5500/buynow.png",alt:"WIZnet Online Shop"})),Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"http://www.shopwiznet.com/"}),Object(c.b)("img",Object(b.a)({parentName:"a"},{src:"/products/w5500/w5500_evb/icons/dollar.png",alt:"WIZnetUS Online Shop, USA"}))),"\n",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"http://shop.wiznet.eu/"}),Object(c.b)("img",Object(b.a)({parentName:"a"},{src:"/products/w5500/w5500_evb/icons/european-euro.png",alt:"WIZnetEU Online Shop, Germany"}))),"\n",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"http://shop.wiznet.co.kr/"}),Object(c.b)("img",Object(b.a)({parentName:"a"},{src:"/products/w5500/w5500_evb/icons/won.png",alt:"WIZnetKorea Online Shop, Korea"})))))}u.isMDXComponent=!0},629:function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return s}));var b=n(0),l=n.n(b);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,b)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,b,l=function(t,e){if(null==t)return{};var n,b,l={},c=Object.keys(t);for(b=0;b<c.length;b++)n=c[b],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(b=0;b<c.length;b++)n=c[b],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var O=l.a.createContext({}),u=function(t){var e=l.a.useContext(O),n=e;return t&&(n="function"==typeof t?t(e):r({},e,{},t)),n},j=function(t){var e=u(t.components);return l.a.createElement(O.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},d=Object(b.forwardRef)((function(t,e){var n=t.components,b=t.mdxType,c=t.originalType,a=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),j=u(n),d=b,s=j["".concat(a,".").concat(d)]||j[d]||o[d]||c;return n?l.a.createElement(s,r({ref:e},O,{components:n})):l.a.createElement(s,r({ref:e},O))}));function s(t,e){var n=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var c=n.length,a=new Array(c);a[0]=d;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=t,r.mdxType="string"==typeof t?t:b,a[1]=r;for(var O=2;O<c;O++)a[O]=n[O];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);