(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{483:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return b})),i.d(t,"default",(function(){return u}));var n=i(2),r=i(9),a=(i(0),i(620)),l={id:"wizfi310_shield",title:"WizFi310 Shield",date:new Date("2020-04-03T00:00:00.000Z")},c={id:"Product/Open-Source-Hardware/wizfi310_shield",title:"WizFi310 Shield",description:"# WizFi310 Shield\r",source:"@site/docs\\Product\\Open-Source-Hardware\\WizFi310_Shield.md",permalink:"/document_framework/docs/Product/Open-Source-Hardware/wizfi310_shield",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Open-Source-Hardware/WizFi310_Shield.md",sidebar:"someSidebar",previous:{title:"WizArduino MEGA WIFI",permalink:"/document_framework/docs/Product/Open-Source-Hardware/wizarduino_mega_wifi"},next:{title:"W5500 Ethernet Shield",permalink:"/document_framework/docs/Product/Open-Source-Hardware/w5500_ethernet_shield"}},b=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[{value:"WizFi310",id:"wizfi310",children:[]},{value:"ETC",id:"etc",children:[]},{value:"WizFi310 Shield Callout &amp; Pinmap",id:"wizfi310-shield-callout--pinmap",children:[]}]},{value:"H/W Configurations",id:"hw-configurations",children:[{value:"DIP Switch Configurations",id:"dip-switch-configurations",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Technical Refernce",id:"technical-refernce",children:[]},{value:"ETC",id:"etc-1",children:[]},{value:"See Also",id:"see-also",children:[]}]}],o={rightToc:b};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"wizfi310-shield"},"WizFi310 Shield"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/osh/wizfi310_shield/wizfi310_shield_1.png",alt:"WizFi310 Shield"}))),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"This document describes the contents of WizFi310 Shield. WizFi310 Shield\nis a Shield with built-in WizFi310 WiFi module of WIZnet."),Object(a.b)("p",null,"Because WizFi310 Shield is Pin Compatible with Arduino, it can be used\nin Arduino, and it can be used in Arduino Pin Compatible development\nplatform. It is also used on the WIZWiki Platform."),Object(a.b)("p",null,"In addition, an temprature/humidity sensor and an CDS sensor are built\nin."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("h3",{id:"wizfi310"},"WizFi310"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Single band 2.4GHz IEEE 802.11b/g/n"),Object(a.b)("li",{parentName:"ul"},"72.2Mbps receive PHY rate and 72.2Mbps transmit PHY rate using 20MHz\nbandwidth"),Object(a.b)("li",{parentName:"ul"},"150Mbps receive PHY rate and 150Mbps transmit PHY rate using 40MHz\nbandwidth"),Object(a.b)("li",{parentName:"ul"},"Low power consumption & excellent power management performance\nextend battery life."),Object(a.b)("li",{parentName:"ul"},"Easy for integration into mobile and handheld device with flexible\nsystem configuration."),Object(a.b)("li",{parentName:"ul"},"Serial Interface : UART"),Object(a.b)("li",{parentName:"ul"},"UART Max Baud : 921600 bps"),Object(a.b)("li",{parentName:"ul"},"Soft AP",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Enough memory retention"),Object(a.b)("li",{parentName:"ul"},"Wi-Fi Security (WEP, WPA/WPA2PSK)"),Object(a.b)("li",{parentName:"ul"},"L2 Switching "))),Object(a.b)("li",{parentName:"ul"},"OTA(Over The Air F/W Upgrading)")),Object(a.b)("h3",{id:"etc"},"ETC"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Built-in UART to USB chip",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"CP2104-GM"),Object(a.b)("li",{parentName:"ul"},"Micro USB B Type Connector"))),Object(a.b)("li",{parentName:"ul"},"UART Selector",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"J1, J2, J3"),Object(a.b)("li",{parentName:"ul"},"2.54mm Pin Header"))),Object(a.b)("li",{parentName:"ul"},"Built-in Sensors",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Temprature/Humidity sensor : DHT11"),Object(a.b)("li",{parentName:"ul"},"CDS Sensor : GL5537"))),Object(a.b)("li",{parentName:"ul"},"Built-in Tact Switchs",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"System Reset Switch: SW2"),Object(a.b)("li",{parentName:"ul"},"WiFi Reset Switch: SW3"),Object(a.b)("li",{parentName:"ul"},"WiFi Function Switch: SW4"))),Object(a.b)("li",{parentName:"ul"},"Built-in LED Indicators",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"D13 LED"),Object(a.b)("li",{parentName:"ul"},"WizFi310 MODE/WiFi LED"),Object(a.b)("li",{parentName:"ul"},"WizFi310 RXD/TXD LED"))),Object(a.b)("li",{parentName:"ul"},"Built-in Level Shifters",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"The voltage of the RXD/TXD signal changes according to the main\nboard platform voltage."))),Object(a.b)("li",{parentName:"ul"},"Built-in DIP Switchs",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"UART RXD/TXD Selector : SW1"),Object(a.b)("li",{parentName:"ul"},"Digital/Analog PIN Selector : SW5"),Object(a.b)("li",{parentName:"ul"},"UART RTS/CTS Selector : SW6")))),Object(a.b)("h3",{id:"wizfi310-shield-callout--pinmap"},"WizFi310 Shield Callout & Pinmap"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/osh/wizfi310_shield/wizfi310_shield_pinmap.png",alt:"WizFi310 Shield\nPinmap"}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"hw-configurations"},"H/W Configurations"),Object(a.b)("h3",{id:"dip-switch-configurations"},"DIP Switch Configurations"),Object(a.b)("h4",{id:"sw1---rxdtxd-selector-dip-switch"},"SW1 - RXD/TXD Selector DIP Switch"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ON")," : RXD/TXD of WizFi310 connect to USB",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"It is possible to communicate with WizFi310 using USB."))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OFF")," : RXD/TXD of WizFi310 connect to J1 and J3",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"UART Pin Header, Arduino PIN"),Object(a.b)("li",{parentName:"ul"},"If the jumper cap is not attached to the UART pin header, it\nwill not be connected to the arduino pin.")))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Pin 1 : RXD\nPin 2 : TXD\n")),Object(a.b)("h4",{id:"sw6---rtscts-selector-dip-switch"},"SW6 - RTS/CTS Selector DIP Switch"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ON")," : RTS/CTS of WizFi310 connect to D6 and D7"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OFF")," : RTS/CTS of WizFi310 not connect to anywhere"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"If the state of SW5 is ON, D6 and D7 of UART jumper can not be\nused."))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Pin 1 : RTS - D6\nPin 2 : CTS - D7\n")),Object(a.b)("h4",{id:"sw5---aruduino-pin-selector-dip-switch"},"SW5 - Aruduino Pin Selector DIP Switch"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"ON")," : Connect to Arduino Pin"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"OFF")," : Not connect to anywhere")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Pin 1 : A0 - CDS\nPin 2 : D14 - DHT11\nPin 3 : D9 - WizFi310 Reset Pin\n")),Object(a.b)("h4",{id:"uart-selector-jumper"},"UART Selector Jumper"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"It can be used when SW2 is OFF.")),Object(a.b)("li",{parentName:"ul"},"You have to specify the desired Arduino pin, use Jumper Cap to\nconnect J1 to J2, and J3 to J2.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Default : J1(RXD) - D1, J3(TXD) - D0"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"If the state of SW5 is ON, D6 and D7 of UART jumper can not be\nused."))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"J1 : RXD\nJ2 : D0 ~ D8\nJ3 : TXD\n")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"getting-started"},"Getting Started"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"technical-refernce"},"Technical Refernce"),Object(a.b)("h4",{id:"datasheet"},"Datasheet"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"WizFi310.md"}),"WizFi310 Datasheet"))),Object(a.b)("h4",{id:"schematic"},"Schematic"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/osh/wizfi310_shield/wizfi310_shield_sch_v100.zip",alt:"WizFi310 Shield\nSchematic(Altium)"})))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/osh/wizfi310_shield/wizfi310_shield_sch_v100.pdf",alt:"WizFi310 Shield\nSchematic(PDF)"}))),Object(a.b)("h4",Object(n.a)({parentName:"li"},{id:"partlist"}),"Partlist")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/osh/wizfi310_shield/wizfi310_shield_pl_v100_170329.pdf",alt:"WizFi310 Shield\nPartlist"}))))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"etc-1"},"ETC"),Object(a.b)("h4",{id:"serial-port-driver"},"Serial Port Driver"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"}),"CP210x USB to UART Bridge VCP\nDrivers"))),Object(a.b)("h4",{id:"sensor-datasheets"},"Sensor Datasheets"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.micropik.com/PDF/dht11.pdf"}),"DHT11 Humidity & Temperature Sensor\nDatasheet")),Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.kth.se/social/files/54ef17dbf27654753f437c56/GL5537.pdf"}),"GL5537\nDatasheet"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"see-also"},"See Also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e","[http://www.wizwiki.net/forum|WizWiki Forum]"," : WIZnet Forum for Technical support and Project shared")),Object(a.b)("hr",null))}u.isMDXComponent=!0},620:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return s}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function b(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):c({},t,{},e)),i},p=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(i),m=n,s=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return i?r.a.createElement(s,c({ref:t},o,{components:i})):r.a.createElement(s,c({ref:t},o))}));function s(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<a;o++)l[o]=i[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,i)}m.displayName="MDXCreateElement"}}]);