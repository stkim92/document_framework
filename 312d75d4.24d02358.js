(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{225:function(t,e,b){"use strict";b.r(e),b.d(e,"frontMatter",(function(){return c})),b.d(e,"metadata",(function(){return r})),b.d(e,"rightToc",(function(){return O})),b.d(e,"default",(function(){return u}));var l=b(2),n=b(9),a=(b(0),b(626)),c={id:"datasheet_hardware_spec_characteristics-[EN]",title:"Datasheet(Hardware Spec, Characteristics)-[EN]",date:new Date("2020-04-16T00:00:00.000Z")},r={id:"Product/S2E-Module/WIZ550SR/datasheet_hardware_spec_characteristics-[EN]",title:"Datasheet(Hardware Spec, Characteristics)-[EN]",description:"## Content\r",source:"@site/docs\\Product\\S2E-Module\\WIZ550SR\\Datasheet(Hardware_Spec,_Characteristics)-[EN].md",permalink:"/document_framework/docs/Product/S2E-Module/WIZ550SR/datasheet_hardware_spec_characteristics-[EN]",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/S2E-Module/WIZ550SR/Datasheet(Hardware_Spec,_Characteristics)-[EN].md",sidebar:"someSidebar",previous:{title:"Datasheet(Hardware Spec, Characteristics)-[KO]",permalink:"/document_framework/docs/Product/S2E-Module/WIZ550SR/datasheet_hardware_spec_characteristics-[KO]"},next:{title:"Download",permalink:"/document_framework/docs/Product/S2E-Module/WIZ550SR/download"}},O=[{value:"Content",id:"content",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Hardware Specification",id:"hardware-specification",children:[{value:"WIZ550SR",id:"wiz550sr",children:[]},{value:"WIZ550SR EVB",id:"wiz550sr-evb",children:[]}]},{value:"Electrical Characteristics",id:"electrical-characteristics",children:[{value:"Operating conditions at power-up / power-down",id:"operating-conditions-at-power-up--power-down",children:[]},{value:"DC Characteristics",id:"dc-characteristics",children:[]},{value:"nRST pin Characterisrics",id:"nrst-pin-characterisrics",children:[]},{value:"Power Dissipation",id:"power-dissipation",children:[]}]},{value:"Schematics &amp; BOM",id:"schematics--bom",children:[{value:"Ref. Schematic",id:"ref-schematic",children:[]},{value:"WIZ550SR BOM",id:"wiz550sr-bom",children:[]},{value:"WIZ550SR EVB BOM",id:"wiz550sr-evb-bom",children:[]}]},{value:"Dimension",id:"dimension",children:[]},{value:"See Also",id:"see-also",children:[]}],j={rightToc:O};function u(t){var e=t.components,b=Object(n.a)(t,["components"]);return Object(a.b)("wrapper",Object(l.a)({},j,b,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("h1",{id:"wiz550sr-datasheet"},"WIZ550SR Datasheet"),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"This page provides information about the hardware description of\nWIZ550SR as following:  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Hardware Specification"),Object(a.b)("li",{parentName:"ul"},"Electrical Characteristics"),Object(a.b)("li",{parentName:"ul"},"Schematic"),Object(a.b)("li",{parentName:"ul"},"Dimension")),Object(a.b)("p",null,"The revision history will be updated in this page in case of any changes\nof hardware specification or exterior design."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"hardware-specification"},"Hardware Specification"),Object(a.b)("h3",{id:"wiz550sr"},"WIZ550SR"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Very small size Serial to Ethernet Module."),Object(a.b)("li",{parentName:"ul"},"WIZnet TCP/IP Chip ",Object(a.b)("strong",{parentName:"li"},"W5500"),"."),Object(a.b)("li",{parentName:"ul"},"STM32F103RCT6."),Object(a.b)("li",{parentName:"ul"},"Not include a transformer and RJ45."),Object(a.b)("li",{parentName:"ul"},"2.00mm Pitch Pin Header Type, 1x11."),Object(a.b)("li",{parentName:"ul"},"Support the ",Object(a.b)("strong",{parentName:"li"},"MDI"),"(Medium Dependent Interface).",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"TXN, TXP, RXN, RXP"))),Object(a.b)("li",{parentName:"ul"},"Support the ",Object(a.b)("strong",{parentName:"li"},"UART")," interface.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"RXD, TXD, RTS, CTS, DSR(Option), DTR(Option)"),Object(a.b)("li",{parentName:"ul"},"Support the RS-232C Interface."),Object(a.b)("li",{parentName:"ul"},"Will be soppoted the RS-422/485 Interface."))),Object(a.b)("li",{parentName:"ul"},"Support the Debug UART.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"DEBUG RXD, DEBUG TXD"))),Object(a.b)("li",{parentName:"ul"},"Support the PHY Status Output.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Active LED, Link LED"))),Object(a.b)("li",{parentName:"ul"},"Support the STATUS output.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"LOW : TCP Connect."),Object(a.b)("li",{parentName:"ul"},"HIGH : TCP Diconnect."))),Object(a.b)("li",{parentName:"ul"},"System Pins.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"RESET : System Reset, Active Low."),Object(a.b)("li",{parentName:"ul"},"BOOT0 : MCU BOOT mode operation, Active High."),Object(a.b)("li",{parentName:"ul"},"H/W TRIG : App BOOT mode operation, Active Low."))),Object(a.b)("li",{parentName:"ul"},"Support the Indicator LED.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Power LED(LD3)."),Object(a.b)("li",{parentName:"ul"},"LED 0(LD1) : "),Object(a.b)("li",{parentName:"ul"},"LED 1(LD2) : "))),Object(a.b)("li",{parentName:"ul"},"Support the Pin Header Hole for Firmware upload.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"2.54mm Pitch, Not Mount."))),Object(a.b)("li",{parentName:"ul"},"Support the Pin Header Hole for SWD.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"1.27mm Pitch, Not Mount."))),Object(a.b)("li",{parentName:"ul"},"Include eeprom for data storage."),Object(a.b)("li",{parentName:"ul"},"Operation Temperature : -40\u2103 ","~"," 85\u2103"),Object(a.b)("li",{parentName:"ul"},"Size : 22mm x 24mm x 13mm")),Object(a.b)("h4",{id:"wiz550sr-pin-out"},"WIZ550SR Pin Out"),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"/products/wiz550sr/wiz550sr_ds/wiz550sr_pinmap.png%20",alt:"WIZ550SR Pin\nOut"})),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_pinmap.png",alt:"WIZ550SR Pin\nOut"}))),Object(a.b)("h4",{id:"wiz550sr-pin-description"},"WIZ550SR Pin Description"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",{class:"header"},Object(a.b)("th",null,"Ref No."),Object(a.b)("th",null,"Pin No."),Object(a.b)("th",null,"Symbol"),Object(a.b)("th",null,"Type"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,"J1"),Object(a.b)("td",null,Object(a.b)("strong",null,"1")),Object(a.b)("td",null,Object(a.b)("strong",null,"3.3V")),Object(a.b)("td",null,Object(a.b)("strong",null,"P")),Object(a.b)("td",null,Object(a.b)("strong",null,"+3.3V Input Power"))),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"2")),Object(a.b)("td",null,Object(a.b)("strong",null,"3.3V_OUT")),Object(a.b)("td",null,Object(a.b)("strong",null,"P")),Object(a.b)("td",null,Object(a.b)("strong",null,"+3.3V Output Power."),Object(a.b)("br",null),"This pin is connected to the TX resistor of MDI signal and Center TAP of RJ45.")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"3")),Object(a.b)("td",null,Object(a.b)("strong",null,"TXN")),Object(a.b)("td",null,Object(a.b)("strong",null,"O")),Object(a.b)("td",null,Object(a.b)("strong",null,"MDI Signal.")," TX Positive.")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"4")),Object(a.b)("td",null,Object(a.b)("strong",null,"TXP")),Object(a.b)("td",null,Object(a.b)("strong",null,"O")),Object(a.b)("td",null,Object(a.b)("strong",null,"MDI Signal.")," TX Negative.")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"5")),Object(a.b)("td",null,Object(a.b)("strong",null,"GND")),Object(a.b)("td",null,Object(a.b)("strong",null,"P")),Object(a.b)("td",null,Object(a.b)("strong",null,"Ground."))),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"6")),Object(a.b)("td",null,Object(a.b)("strong",null,"RXN")),Object(a.b)("td",null,Object(a.b)("strong",null,"I")),Object(a.b)("td",null,Object(a.b)("strong",null,"MDI Signal.")," RX Negative.")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"7")),Object(a.b)("td",null,Object(a.b)("strong",null,"RXP")),Object(a.b)("td",null,Object(a.b)("strong",null,"I")),Object(a.b)("td",null,Object(a.b)("strong",null,"MDI Signal.")," RX Positive.")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"8")),Object(a.b)("td",null,Object(a.b)("strong",null,"GND")),Object(a.b)("td",null,Object(a.b)("strong",null,"P")),Object(a.b)("td",null,Object(a.b)("strong",null,"Ground."))),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"9")),Object(a.b)("td",null,Object(a.b)("strong",null,"ACT LED")),Object(a.b)("td",null,Object(a.b)("strong",null,"O")),Object(a.b)("td",null,Object(a.b)("strong",null,"PHY Active LED"))),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"10")),Object(a.b)("td",null,Object(a.b)("strong",null,"LINK LED")),Object(a.b)("td",null,Object(a.b)("strong",null,"O")),Object(a.b)("td",null,Object(a.b)("strong",null,"PHY Link LED"))),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"11")),Object(a.b)("td",null,Object(a.b)("strong",null,"GND")),Object(a.b)("td",null,Object(a.b)("strong",null,"P")),Object(a.b)("td",null,Object(a.b)("strong",null,"Ground."))))),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",{class:"header"},Object(a.b)("th",null,"Ref No."),Object(a.b)("th",null,"Pin No."),Object(a.b)("th",null,"Symbol"),Object(a.b)("th",null,"Type"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,"J2"),Object(a.b)("td",null,Object(a.b)("strong",null,"1")),Object(a.b)("td",null,Object(a.b)("strong",null,"RXD")),Object(a.b)("td",null,Object(a.b)("strong",null,"I")),Object(a.b)("td",null,Object(a.b)("strong",null,"Data UART.")," Recieve Pin.")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"2")),Object(a.b)("td",null,Object(a.b)("strong",null,"TXD")),Object(a.b)("td",null,Object(a.b)("strong",null,"O")),Object(a.b)("td",null,Object(a.b)("strong",null,"Data UART.")," Transmit Pin.")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"3")),Object(a.b)("td",null,Object(a.b)("strong",null,"RTS")),Object(a.b)("td",null,Object(a.b)("strong",null,"O")),Object(a.b)("td",null,Object(a.b)("strong",null,"Data UART.")," Request to Send Pin.")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"4")),Object(a.b)("td",null,Object(a.b)("strong",null,"CTS")),Object(a.b)("td",null,Object(a.b)("strong",null,"I")),Object(a.b)("td",null,Object(a.b)("strong",null,"Data UART.")," Clear to Send Pin.")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"5")),Object(a.b)("td",null,Object(a.b)("strong",null,"DEBUG_RX")),Object(a.b)("td",null,Object(a.b)("strong",null,"I")),Object(a.b)("td",null,Object(a.b)("strong",null,"Debug UART.")," Recieve Pin.")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"6")),Object(a.b)("td",null,Object(a.b)("strong",null,"DEBUG_TX")),Object(a.b)("td",null,Object(a.b)("strong",null,"O")),Object(a.b)("td",null,Object(a.b)("strong",null,"Debug UART.")," Transmit Pin.")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"7")),Object(a.b)("td",null,Object(a.b)("strong",null,"GND")),Object(a.b)("td",null,Object(a.b)("strong",null,"P")),Object(a.b)("td",null,Object(a.b)("strong",null,"Ground."))),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"8")),Object(a.b)("td",null,Object(a.b)("strong",null,"BOOT0")),Object(a.b)("td",null,Object(a.b)("strong",null,"I")),Object(a.b)("td",null,Object(a.b)("strong",null,"MCU Boot.")," Active High")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"9")),Object(a.b)("td",null,Object(a.b)("strong",null,"nRST")),Object(a.b)("td",null,Object(a.b)("strong",null,"I")),Object(a.b)("td",null,Object(a.b)("strong",null,"Reset.")," Active Low")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"10")),Object(a.b)("td",null,Object(a.b)("strong",null,"STATUS")),Object(a.b)("td",null,Object(a.b)("strong",null,"O")),Object(a.b)("td",null,Object(a.b)("strong",null,"Status Output."),Object(a.b)("br",null),"High : Disconnect.",Object(a.b)("br",null),"Low : Connect.")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,":::"),Object(a.b)("td",null,Object(a.b)("strong",null,"11")),Object(a.b)("td",null,Object(a.b)("strong",null,"nH/W TRIG")),Object(a.b)("td",null,Object(a.b)("strong",null,"I")),Object(a.b)("td",null,Object(a.b)("strong",null,"App Boot."),Object(a.b)("br",null),"Hardware TRIG Input. Active Low")))),Object(a.b)("h4",{id:"wiz550sr-block-diagram"},"WIZ550SR Block Diagram"),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_block_diagram.png",alt:"WIZ550SR Block\nDiagram"}))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"wiz550sr-evb"},"WIZ550SR EVB"),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_2.png",alt:"WIZ550SR\nEVB"}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZ550SR Developer Board."),Object(a.b)("li",{parentName:"ul"},"USB to UART chip, FT2232D."),Object(a.b)("li",{parentName:"ul"},"RJ45 with Transformer, RB1-1D5B8K1A."),Object(a.b)("li",{parentName:"ul"},"RESET Tact SW."),Object(a.b)("li",{parentName:"ul"},"BOOT0 Tact SW."),Object(a.b)("li",{parentName:"ul"},"H/W Trig Tact SW."),Object(a.b)("li",{parentName:"ul"},"LED Indicators."),Object(a.b)("li",{parentName:"ul"},"Micro USB.")),Object(a.b)("h4",{id:"wiz550sr-evb-call-out"},"WIZ550SR EVB Call Out"),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_callout.png",alt:"WIZ550SR EVB Call\nOut"}))),Object(a.b)("h4",{id:"wiz550sr-evb-block-diagram"},"WIZ550SR EVB Block Diagram"),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_block_diagram.png",alt:"WIZ550SR Block\nDiagram"}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"electrical-characteristics"},"Electrical Characteristics"),Object(a.b)("h3",{id:"operating-conditions-at-power-up--power-down"},"Operating conditions at power-up / power-down"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Symbol"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Parameter"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Conditions"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Min"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Max"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Unit"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"T",Object(a.b)("em",{parentName:"td"},"VDD")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"V",Object(a.b)("em",{parentName:"strong"},"DD")," rise time rate")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"0"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"us/V")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),":::"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"V",Object(a.b)("em",{parentName:"strong"},"DD")," fall time rate")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),":::"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"20"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),":::")))),Object(a.b)("h3",{id:"dc-characteristics"},"DC Characteristics"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",{class:"header"},Object(a.b)("th",null,"Symbol"),Object(a.b)("th",null,"Parameter"),Object(a.b)("th",null,"Pins"),Object(a.b)("th",null,"Min"),Object(a.b)("th",null,"Typ"),Object(a.b)("th",null,"Max"),Object(a.b)("th",null,"Unit"))),Object(a.b)("tbody",null,Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,"V",Object(a.b)("em",null,"DD")),Object(a.b)("td",null,Object(a.b)("strong",null,"Supply voltage")),Object(a.b)("td",null,"3.3V"),Object(a.b)("td",null,"2.97"),Object(a.b)("td",null,"3.3"),Object(a.b)("td",null,"3.6"),Object(a.b)("td",null,"V")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,"V",Object(a.b)("em",null,"IL")),Object(a.b)("td",null,Object(a.b)("strong",null,"High level input voltage")),Object(a.b)("td",null,"ALL"),Object(a.b)("td",null,"1.833"),Object(a.b)("td",null),Object(a.b)("td",null,"3.6"),Object(a.b)("td",null,"V")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,"V",Object(a.b)("em",null,"IH")),Object(a.b)("td",null,Object(a.b)("strong",null,"Low level input voltage")),Object(a.b)("td",null,"ALL"),Object(a.b)("td",null,"-0.3"),Object(a.b)("td",null),Object(a.b)("td",null,"1.166"),Object(a.b)("td",null,"V")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,"V",Object(a.b)("em",null,"OL")),Object(a.b)("td",null,Object(a.b)("strong",null,"Low level output voltage")),Object(a.b)("td",null,"ALL"),Object(a.b)("td",null),Object(a.b)("td",null),Object(a.b)("td",null,"0.4"),Object(a.b)("td",null,"V")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,"V",Object(a.b)("em",null,"OH")),Object(a.b)("td",null,Object(a.b)("strong",null,"High level output voltage")),Object(a.b)("td",null,"ALL"),Object(a.b)("td",null,"3.0"),Object(a.b)("td",null),Object(a.b)("td",null),Object(a.b)("td",null,"V")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,"L",Object(a.b)("em",null,"OL")),Object(a.b)("td",null,Object(a.b)("strong",null,"Low level input Current"),Object(a.b)("br",null),"Sink Current"),Object(a.b)("td",null,"ALL"),Object(a.b)("td",null),Object(a.b)("td",null),Object(a.b)("td",null,"-25"),Object(a.b)("td",null,"mA")),Object(a.b)("tr",{class:"odd"},Object(a.b)("td",null,"L",Object(a.b)("em",null,"OH")),Object(a.b)("td",null,Object(a.b)("strong",null,"High level output Current"),Object(a.b)("br",null),"Source Current"),Object(a.b)("td",null,"ALL"),Object(a.b)("td",null),Object(a.b)("td",null),Object(a.b)("td",null,"25"),Object(a.b)("td",null,"mA")),Object(a.b)("tr",{class:"even"},Object(a.b)("td",null,"I",Object(a.b)("em",null,"DD")),Object(a.b)("td",null,Object(a.b)("strong",null,"Supply Current",Object(a.b)("br",null),"(Normal operation mode)")),Object(a.b)("td",null,"3.3V"),Object(a.b)("td",null),Object(a.b)("td",null,"TBD"),Object(a.b)("td",null),Object(a.b)("td",null,"mA")))),Object(a.b)("h3",{id:"nrst-pin-characterisrics"},"nRST pin Characterisrics"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Symbol"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Parameter"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Conditions"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Min"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Typ"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Max"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Unit"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"V",Object(a.b)("em",{parentName:"td"},"IL(nRST)")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"NRST Input low level voltage")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-","0.5"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"0.8"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"V")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"V",Object(a.b)("em",{parentName:"td"},"IH(nRST)")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"NRST Input high level voltage")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-","2"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"3.8V"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"V")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"V",Object(a.b)("em",{parentName:"td"},"hys(nRST)")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"NRST Schmitt trigger voltage hysteresis")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"200"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"mV")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"R",Object(a.b)("em",{parentName:"td"},"PU")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Weak pull-up equivalent resistor")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"30"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"40"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"50"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"k\u03a9")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"V",Object(a.b)("em",{parentName:"td"},"F(nRST)")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"NRST Input filtered pulse")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"100"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"ns")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"V",Object(a.b)("em",{parentName:"td"},"NF(nRST)")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"NRST Input not filtered pulse")),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"300"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"ns")))),Object(a.b)("h3",{id:"power-dissipation"},"Power Dissipation"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Condition"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Min"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Typ"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Max"),Object(a.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Unit"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"100M Link"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"180"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"mA")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"10M Link"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"TBD"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"mA")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Un-Link (Auto-negotiation mode)"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"TBD"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"mA")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"100M Transmitting"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"TBD"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"mA")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"10M Transmitting"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"TBD"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"mA")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"Power Down mode"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"TBD"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"-"),Object(a.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"mA")))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"schematics--bom"},"Schematics & BOM"),Object(a.b)("h3",{id:"ref-schematic"},"Ref. Schematic"),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_v1.0_ref_sch.png",alt:"WIZ550SR Ref\nSchematic"})),"  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZ550SR Ref Schematic :\n",Object(a.b)("img",Object(l.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_v100_ref_sch_160526.pdf",alt:"Download"})),"  ",Object(a.b)("h3",Object(l.a)({parentName:"li"},{id:"wiz550sr-schematic"}),"WIZ550SR Schematic")),Object(a.b)("li",{parentName:"ul"},"WIZ550SR V1.0 Schematic :\n",Object(a.b)("img",Object(l.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_sch_v100.zip",alt:"Download(Altium)"})),"  ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"WIZ550SR V1.0 Schematic :\n",Object(a.b)("img",Object(l.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_sch_v100.pdf",alt:"Download(PDF)"})),"  ")))),Object(a.b)("h3",{id:"wiz550sr-bom"},"WIZ550SR BOM"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZ550SR V1.0 BOM:\n",Object(a.b)("img",Object(l.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_bom_v100_160511.pdf",alt:"Download"})),"  ",Object(a.b)("h3",Object(l.a)({parentName:"li"},{id:"wiz550sr-evb-schematic"}),"WIZ550SR EVB Schematic")),Object(a.b)("li",{parentName:"ul"},"WIZ550SR EVB V1.0 Schematic :\n",Object(a.b)("img",Object(l.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_sch_v100.zip",alt:"Download(Altium)"})),Object(a.b)("br",{parentName:"li"}),"*"," WIZ550SR EVB V1.0 Schematic :\n",Object(a.b)("img",Object(l.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_sch_v100.pdf",alt:"Download(PDF)"})),"  ")),Object(a.b)("h3",{id:"wiz550sr-evb-bom"},"WIZ550SR EVB BOM"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZ550SR EVB V1.0 BOM :\n",Object(a.b)("img",Object(l.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_evb_bom_v100_160512.pdf",alt:"Download"})),"  ")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"dimension"},"Dimension"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZ550SR V1.0 3D PDF :\n",Object(a.b)("img",Object(l.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_v1.0_3d.pdf",alt:"Download"})),Object(a.b)("br",{parentName:"li"}),"*"," This PDF must be run using the 'Adobe Acrobat'.")),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550sr/wiz550sr_ds/wiz550sr_dimension.jpg",alt:"WIZ550SR\nDimension"}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"see-also"},"See Also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(l.a)({parentName:"li"},{href:"http://www.wizwiki.net/forum"}),"WizWiki Forum")," : WIZnet Forum for Technical support and Project shared")),Object(a.b)("hr",null))}u.isMDXComponent=!0},626:function(t,e,b){"use strict";b.d(e,"a",(function(){return i})),b.d(e,"b",(function(){return s}));var l=b(0),n=b.n(l);function a(t,e,b){return e in t?Object.defineProperty(t,e,{value:b,enumerable:!0,configurable:!0,writable:!0}):t[e]=b,t}function c(t,e){var b=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),b.push.apply(b,l)}return b}function r(t){for(var e=1;e<arguments.length;e++){var b=null!=arguments[e]?arguments[e]:{};e%2?c(Object(b),!0).forEach((function(e){a(t,e,b[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(b)):c(Object(b)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(b,e))}))}return t}function O(t,e){if(null==t)return{};var b,l,n=function(t,e){if(null==t)return{};var b,l,n={},a=Object.keys(t);for(l=0;l<a.length;l++)b=a[l],e.indexOf(b)>=0||(n[b]=t[b]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)b=a[l],e.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(t,b)&&(n[b]=t[b])}return n}var j=n.a.createContext({}),u=function(t){var e=n.a.useContext(j),b=e;return t&&(b="function"==typeof t?t(e):r({},e,{},t)),b},i=function(t){var e=u(t.components);return n.a.createElement(j.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},o=Object(l.forwardRef)((function(t,e){var b=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),i=u(b),o=l,s=i["".concat(c,".").concat(o)]||i[o]||d[o]||a;return b?n.a.createElement(s,r({ref:e},j,{components:b})):n.a.createElement(s,r({ref:e},j))}));function s(t,e){var b=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=b.length,c=new Array(a);c[0]=o;var r={};for(var O in e)hasOwnProperty.call(e,O)&&(r[O]=e[O]);r.originalType=t,r.mdxType="string"==typeof t?t:l,c[1]=r;for(var j=2;j<a;j++)c[j]=b[j];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,b)}o.displayName="MDXCreateElement"}}]);