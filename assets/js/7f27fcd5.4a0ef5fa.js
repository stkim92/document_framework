(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[46419],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,P=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(P,i(i({ref:t},c),{},{components:r})):n.createElement(P,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27602:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"overview",title:"Overview",date:new Date("2020-04-03T00:00:00.000Z")},u=void 0,s={unversionedId:"Product/iEthernet/W6100/overview",id:"Product/iEthernet/W6100/overview",isDocsHomePage:!1,title:"Overview",description:"Hardwired Dual TCP/IP Stack Controller",source:"@site/docs/Product/iEthernet/W6100/Overview.md",sourceDirName:"Product/iEthernet/W6100",slug:"/Product/iEthernet/W6100/overview",permalink:"/Product/iEthernet/W6100/overview",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W6100/Overview.md",version:"current",frontMatter:{id:"overview",title:"Overview",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"W6100",permalink:"/Product/iEthernet/W6100/w6100"},next:{title:"Document",permalink:"/Product/iEthernet/W6100/document"}},c=[{value:"Features",id:"features",children:[]},{value:"Target Application",id:"target-application",children:[]}],p={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(47).Z}),"\n",(0,o.kt)("strong",{parentName:"p"},"Hardwired Dual TCP/IP Stack Controller")),(0,o.kt)("p",null,"W6100 is a hardwired Internet controller chip supporting IPv4/IPv6 dual\nstack by adding IPv6 functions on the basis of WIZnet\u2019s patented\nhardwired TCP/IP core technology. W6100 supports TCP/IP protocols such\nas TCP, UDP, IPv6, IPv4, ICMPv6, ICMPv4, IGMP, ARP and PPPoE. W6100 also\nincludes 10Base-T / 10Base-Te / 100Base-TX Ethernet PHY and Ethernet MAC\nController which makes it suitable for embedded internet-enabled\ndevices."),(0,o.kt)("p",null,"W6100 has 8 independent hardwired SOCKETs and supports various\nSOCKET-less commands, which are for IPv6 auto-configuration, monitoring,\nand managing the network via ARP, PINGv4, and PINGv6."),(0,o.kt)("p",null,"W6100 supports two kinds of HOST interfaces; SPI and parallel system\nBUS. It has 32KB internal memory for sending and receiving data.\nDesigned for low power and low heat, W6100 provides WOL (Wake On LAN),\nEthernet PHY power down mode and etc. W6100 has two package types, 48\nLQFP and 48 QFN lead-free. Both versions are PIN-2-PIN compatible with\nW5100S."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(56020).Z})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support Hardwired TCP/IP Protocols : TCP, UDP, IPv6, IPv4, ICMPv6,\nICMPv4, IGMP, MLDv1, ARP, PPPoE"),(0,o.kt)("li",{parentName:"ul"},"Support IPv4/IPv6 Dual Stack"),(0,o.kt)("li",{parentName:"ul"},"Support 8 independent SOCKETs simultaneously with 32KB Memory"),(0,o.kt)("li",{parentName:"ul"},"Support SOCKET-less Command: ARP, PING, ICMPv6(PING, ARP,DAD,NA,RS)\nCommand for IPv6 Auto-configuration& Network Monitoring"),(0,o.kt)("li",{parentName:"ul"},"Support Ethernet Power Down Mode & System Clock Switching for power\nsave"),(0,o.kt)("li",{parentName:"ul"},"Support Wake on LAN over UDP"),(0,o.kt)("li",{parentName:"ul"},"Support Serial & Parallel Host Interface: High Speed SPI(MODE 0/3),\nSystem Bus with 2 Address signal & 8bit Data"),(0,o.kt)("li",{parentName:"ul"},"Internal 16Kbytes Memory for TX/ RX Buffers"),(0,o.kt)("li",{parentName:"ul"},"10BaseT / 10BaseTe / 100BaseTX Ethernet PHY Integrated"),(0,o.kt)("li",{parentName:"ul"},"Support Auto Negotiation (Full and half duplex, 10 and 100-based )"),(0,o.kt)("li",{parentName:"ul"},"Support Auto-MDIX only on Auto-Negotiation Mode"),(0,o.kt)("li",{parentName:"ul"},"Not support IP Fragmentation"),(0,o.kt)("li",{parentName:"ul"},"3V operation with 5V I/O signal tolerance"),(0,o.kt)("li",{parentName:"ul"},"Network Indicator LEDs (Full/Half Duplex, Link, 10/100 Speed,\nActive)"),(0,o.kt)("li",{parentName:"ul"},"48 Pin LQFP & QFN Lead-Free Package (7x7mm, 0.5mm pitch)"),(0,o.kt)("li",{parentName:"ul"},"W5100S PIN-2-PIN Compatible")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"target-application"},"Target Application"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Home Network Devices: Set-Top Boxes, PVRs, Digital Media Adapters"),(0,o.kt)("li",{parentName:"ul"},"Serial-to-Ethernet: Access Controls, LED displays, Wireless AP\nrelays, etc."),(0,o.kt)("li",{parentName:"ul"},"Parallel-to-Ethernet: POS / Mini Printers, Copiers"),(0,o.kt)("li",{parentName:"ul"},"USB-to-Ethernet: Storage Devices, Network Printers"),(0,o.kt)("li",{parentName:"ul"},"GPIO-to-Ethernet: Home Network Sensors"),(0,o.kt)("li",{parentName:"ul"},"Security Systems: DVRs, Network Cameras, Kiosks"),(0,o.kt)("li",{parentName:"ul"},"Factory, Building, Home Automations"),(0,o.kt)("li",{parentName:"ul"},"Medical Monitoring Equipment"),(0,o.kt)("li",{parentName:"ul"},"Embedded Servers"),(0,o.kt)("li",{parentName:"ul"},"Internet of Things (IoT) Devices"),(0,o.kt)("li",{parentName:"ul"},"IoT Cloud Devices")))}d.isMDXComponent=!0},47:function(e,t,r){"use strict";t.Z=r.p+"assets/images/w6100_4-788803081fad58e0c1de73ae1a3fca1b.jpg"},56020:function(e,t,r){"use strict";t.Z=r.p+"assets/images/w6100_block_diagram-61eebd9705cedea71d7a7bca991cc39e.png"}}]);