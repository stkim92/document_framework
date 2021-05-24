(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[4349],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return p},kt:function(){return m}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(i),m=r,h=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return i?n.createElement(h,l(l({ref:t},p),{},{components:i})):n.createElement(h,l({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}s.displayName="MDXCreateElement"},78599:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var n=i(74034),r=i(79973),a=(i(67294),i(3905)),l={id:"wizfi310_shield",title:"WizFi310 Shield",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/Open-Source-Hardware/wizfi310_shield",id:"Product/Open-Source-Hardware/wizfi310_shield",isDocsHomePage:!1,title:"WizFi310 Shield",description:"WizFi310 Shield",source:"@site/docs/Product/Open-Source-Hardware/WizFi310_Shield.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/wizfi310_shield",permalink:"/Product/Open-Source-Hardware/wizfi310_shield",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/WizFi310_Shield.md",version:"current",frontMatter:{id:"wizfi310_shield",title:"WizFi310 Shield",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"WizArduino MEGA WIFI",permalink:"/Product/Open-Source-Hardware/wizarduino_mega_wifi"},next:{title:"W5500 Ethernet Shield",permalink:"/Product/Open-Source-Hardware/w5500_ethernet_shield"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[{value:"WizFi310",id:"wizfi310",children:[]},{value:"ETC",id:"etc",children:[]}]},{value:"WizFi310 Shield Callout &amp; Pinmap",id:"wizfi310-shield-callout--pinmap",children:[]},{value:"H/W Configurations",id:"hw-configurations",children:[{value:"DIP Switch Configurations",id:"dip-switch-configurations",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Technical Refernce",id:"technical-refernce",children:[]},{value:"ETC",id:"etc-1",children:[]},{value:"See Also",id:"see-also",children:[]}]}],c={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WizFi310 Shield",src:i(50063).Z})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This document describes the contents of WizFi310 Shield. WizFi310 Shield\nis a Shield with built-in WizFi310 WiFi module of WIZnet."),(0,a.kt)("p",null,"Because WizFi310 Shield is Pin Compatible with Arduino, it can be used\nin Arduino, and it can be used in Arduino Pin Compatible development\nplatform. It is also used on the WIZWiki Platform."),(0,a.kt)("p",null,"In addition, an temprature/humidity sensor and an CDS sensor are built\nin."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"wizfi310"},"WizFi310"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single band 2.4GHz IEEE 802.11b/g/n"),(0,a.kt)("li",{parentName:"ul"},"72.2Mbps receive PHY rate and 72.2Mbps transmit PHY rate using 20MHz\nbandwidth"),(0,a.kt)("li",{parentName:"ul"},"150Mbps receive PHY rate and 150Mbps transmit PHY rate using 40MHz\nbandwidth"),(0,a.kt)("li",{parentName:"ul"},"Low power consumption & excellent power management performance\nextend battery life."),(0,a.kt)("li",{parentName:"ul"},"Easy for integration into mobile and handheld device with flexible\nsystem configuration."),(0,a.kt)("li",{parentName:"ul"},"Serial Interface : UART"),(0,a.kt)("li",{parentName:"ul"},"UART Max Baud : 921600 bps"),(0,a.kt)("li",{parentName:"ul"},"Soft AP",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Enough memory retention"),(0,a.kt)("li",{parentName:"ul"},"Wi-Fi Security (WEP, WPA/WPA2PSK)"),(0,a.kt)("li",{parentName:"ul"},"L2 Switching "))),(0,a.kt)("li",{parentName:"ul"},"OTA(Over The Air F/W Upgrading)")),(0,a.kt)("h3",{id:"etc"},"ETC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Built-in UART to USB chip",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CP2104-GM"),(0,a.kt)("li",{parentName:"ul"},"Micro USB B Type Connector"))),(0,a.kt)("li",{parentName:"ul"},"UART Selector",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"J1, J2, J3"),(0,a.kt)("li",{parentName:"ul"},"2.54mm Pin Header"))),(0,a.kt)("li",{parentName:"ul"},"Built-in Sensors",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Temprature/Humidity sensor : DHT11"),(0,a.kt)("li",{parentName:"ul"},"CDS Sensor : GL5537"))),(0,a.kt)("li",{parentName:"ul"},"Built-in Tact Switchs",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"System Reset Switch: SW2"),(0,a.kt)("li",{parentName:"ul"},"WiFi Reset Switch: SW3"),(0,a.kt)("li",{parentName:"ul"},"WiFi Function Switch: SW4"))),(0,a.kt)("li",{parentName:"ul"},"Built-in LED Indicators",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"D13 LED"),(0,a.kt)("li",{parentName:"ul"},"WizFi310 MODE/WiFi LED"),(0,a.kt)("li",{parentName:"ul"},"WizFi310 RXD/TXD LED"))),(0,a.kt)("li",{parentName:"ul"},"Built-in Level Shifters",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The voltage of the RXD/TXD signal changes according to the main\nboard platform voltage."))),(0,a.kt)("li",{parentName:"ul"},"Built-in DIP Switchs",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"UART RXD/TXD Selector : SW1"),(0,a.kt)("li",{parentName:"ul"},"Digital/Analog PIN Selector : SW5"),(0,a.kt)("li",{parentName:"ul"},"UART RTS/CTS Selector : SW6")))),(0,a.kt)("h2",{id:"wizfi310-shield-callout--pinmap"},"WizFi310 Shield Callout & Pinmap"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WizFi310 Shield Pinmap",src:i(48266).Z})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"hw-configurations"},"H/W Configurations"),(0,a.kt)("h3",{id:"dip-switch-configurations"},"DIP Switch Configurations"),(0,a.kt)("h4",{id:"sw1---rxdtxd-selector-dip-switch"},"SW1 - RXD/TXD Selector DIP Switch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ON")," : RXD/TXD of WizFi310 connect to USB",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It is possible to communicate with WizFi310 using USB."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OFF")," : RXD/TXD of WizFi310 connect to J1 and J3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"UART Pin Header, Arduino PIN"),(0,a.kt)("li",{parentName:"ul"},"If the jumper cap is not attached to the UART pin header, it\nwill not be connected to the arduino pin.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Pin 1 : RXD\nPin 2 : TXD\n")),(0,a.kt)("h4",{id:"sw6---rtscts-selector-dip-switch"},"SW6 - RTS/CTS Selector DIP Switch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ON")," : RTS/CTS of WizFi310 connect to D6 and D7"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OFF")," : RTS/CTS of WizFi310 not connect to anywhere"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If the state of SW5 is ON, D6 and D7 of UART jumper can not be\nused."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Pin 1 : RTS - D6\nPin 2 : CTS - D7\n")),(0,a.kt)("h4",{id:"sw5---aruduino-pin-selector-dip-switch"},"SW5 - Aruduino Pin Selector DIP Switch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ON")," : Connect to Arduino Pin"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OFF")," : Not connect to anywhere")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Pin 1 : A0 - CDS\nPin 2 : D14 - DHT11\nPin 3 : D9 - WizFi310 Reset Pin\n")),(0,a.kt)("h4",{id:"uart-selector-jumper"},"UART Selector Jumper"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"It can be used when SW2 is OFF.")),(0,a.kt)("li",{parentName:"ul"},"You have to specify the desired Arduino pin, use Jumper Cap to\nconnect J1 to J2, and J3 to J2.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default : J1(RXD) - D1, J3(TXD) - D0"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"If the state of SW5 is ON, D6 and D7 of UART jumper can not be\nused."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"J1 : RXD\nJ2 : D0 ~ D8\nJ3 : TXD\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getting-started"},"Getting Started"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"technical-refernce"},"Technical Refernce"),(0,a.kt)("h4",{id:"datasheet"},"Datasheet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../Product/Wi-Fi-Module/WizFi310/datasheet"},"WizFi310 Datasheet"))),(0,a.kt)("h4",{id:"schematic"},"Schematic"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/wizfi310_shield/wizfi310_shield_sch_v100.zip",target:"_blank"},"WizFi310 Shield Schematic(Altium)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/wizfi310_shield/wizfi310_shield_sch_v100.pdf",target:"_blank"},"WizFi310 Shield Schematic(PDF)"))),(0,a.kt)("h4",{id:"partlist"},"Partlist"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"/img/osh/wizfi310_shield/wizfi310_shield_pl_v100_170329.pdf",target:"_blank"},"WizFi310 Shield Partlist"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"etc-1"},"ETC"),(0,a.kt)("h4",{id:"serial-port-driver"},"Serial Port Driver"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"http://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"},"CP210x USB to UART Bridge VCP Drivers"))),(0,a.kt)("h4",{id:"sensor-datasheets"},"Sensor Datasheets"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{href:"http://www.micropik.com/PDF/dht11.pdf",target:"_blank"},"DHT11 Humidity & Temperature Sensor Datasheet")),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{href:"https://www.kth.se/social/files/54ef17dbf27654753f437c56/GL5537.pdf",target:"_blank"},"GL5537 Datasheet"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf0e",(0,a.kt)("a",{parentName:"li",href:"https://forum.wiznet.io/"},"WizWiki Forum")," : WIZnet Forum for Technical support and Project shared")),(0,a.kt)("hr",null))}p.isMDXComponent=!0},50063:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi310_shield_1-4763c35ea467026ad51d7af93b10c144.png"},48266:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi310_shield_pinmap-51333e49e6213a191242cc0aadc5bec4.png"}}]);