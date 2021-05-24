(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[92483],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40763:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=r(74034),n=r(79973),i=(r(67294),r(3905)),l={id:"all_pages",title:"All Pages",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/iEthernet/W5100S/all_pages",id:"Product/iEthernet/W5100S/all_pages",isDocsHomePage:!1,title:"All Pages",description:"Overview",source:"@site/docs/Product/iEthernet/W5100S/All_Pages.md",sourceDirName:"Product/iEthernet/W5100S",slug:"/Product/iEthernet/W5100S/all_pages",permalink:"/Product/iEthernet/W5100S/all_pages",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/All_Pages.md",version:"current",frontMatter:{id:"all_pages",title:"All Pages",date:"2020-04-03T00:00:00.000Z"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Pin MAP",id:"pin-map",children:[]},{value:"Features",id:"features",children:[]},{value:"Target Application",id:"target-application",children:[]},{value:"Driver",id:"driver",children:[]},{value:"ioLibrary",id:"iolibrary",children:[]},{value:"For more information on ioLibrary, click \ud83c\udf0eW5500 Driver",id:"for-more-information-on-iolibrary-click-w5500-driver",children:[]},{value:"Data Sheet",id:"data-sheet",children:[]},{value:"W5100S vs W5100 Comparison Sheet",id:"w5100s-vs-w5100-comparison-sheet",children:[]},{value:"Application Note",id:"application-note",children:[]},{value:"Hardware Design Guide",id:"hardware-design-guide",children:[]},{value:"External Transformer Type",id:"external-transformer-type",children:[]},{value:"RJ45 with Transformer Type",id:"rj45-with-transformer-type",children:[]},{value:"W5100S Comparison Sheet",id:"w5100s-comparison-sheet",children:[{value:"document",id:"document",children:[]}]},{value:"W5100S Application",id:"w5100s-application",children:[]}],s={toc:p};function u(e){var t=e.components,l=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(38432).Z})),(0,i.kt)("p",null,"W5100S is an embedded Internet controller designed as a full hardwired\nTCP/IP with WIZnet technology. W5100S provides internet connectivity to\nyour embedded system by using SPI (Serial Peripheral Interface) or\nParallel System BUS. SPI and Parallel System BUS provide easy connection\nvia external MCU to W5100S. The clock speed of W5100S SPI supports upto\n70MHz and the Parallel System Bus supports higher speed network\ncommunication than SPI."),(0,i.kt)("p",null,"Since W5100S integrates the Hardwired TCP/IP stack with 10/100 Ethernet\nMAC and PHY, it is truly a one-chip solution for the stable internet\nconnectivity. WIZnet\u2019s hardwired TCP/IP stack supports TCP, UDP, IPv4,\nICMP, ARP, IGMP, and PPPoE - and it has been proven through various\napplications over the last decade."),(0,i.kt)("p",null,"W5100S provides four independent SOCKETs to be used simultaneously and\n16KB internal memory for data communication. Users can develop an\nEthernet application easily by using the simple W5100S SOCKET program\ninstead of handling a complex Ethernet controller. W5100S also provides\nWOL (Wake on LAN) and a Power Down Mode in order to reduce power\nconsumption."),(0,i.kt)("p",null,"W5100S is a low-cost chip that exceeds its predecessor, W5100. Existing\nfirmware using W5100 can be used on W5100S without modification. W5100S\nhas two types of packages, 48 Pin LQFP & QFN Lead-Free Package."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"W5100S Block diagram",src:r(35418).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"pin-map"},"Pin MAP"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"W5100S Pin map",src:r(98950).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support Hardwired Internet Protocols: TCP, UDP, WOL over UDP, ICMP, IGMPv1/v2, IPv4, ARP, PPPoE"),(0,i.kt)("li",{parentName:"ul"},"Support 4 Independent Hardware SOCKETs simultaneously"),(0,i.kt)("li",{parentName:"ul"},"Support SOCKET-less Command: ARP-Request, PING-Request"),(0,i.kt)("li",{parentName:"ul"},"Support Ethernet Power Down Mode & Main Clock gating for power save"),(0,i.kt)("li",{parentName:"ul"},"Support Wake on LAN over UDP"),(0,i.kt)("li",{parentName:"ul"},"Support Serial & Parallel Host Interface: High Speed SPI(MODE 0/3), Parallel System Bus with 2 Address signal & 8bits Data"),(0,i.kt)("li",{parentName:"ul"},"Internal 16 Kbytes Memory for TX/ RX Buffers "),(0,i.kt)("li",{parentName:"ul"},"Not support IP Fragmentation"),(0,i.kt)("li",{parentName:"ul"},"Not Maintain ARP-cache Table "),(0,i.kt)("li",{parentName:"ul"},"10BaseT/100BaseTX Ethernet PHY Integrated"),(0,i.kt)("li",{parentName:"ul"},"Support Auto Negotiation (Full/Half Duplex, 10/100 Speed)"),(0,i.kt)("li",{parentName:"ul"},"Support Auto-MDIX when Auto-Negotiation Mode."),(0,i.kt)("li",{parentName:"ul"},"3.3V operation with 5V I/O signal tolerance"),(0,i.kt)("li",{parentName:"ul"},"LED outputs (Full/Half Duplex, Link, 10/100 Speed, Active)"),(0,i.kt)("li",{parentName:"ul"},"Two types of packages: 48 Pin LQFP & QFN Lead-Free Package (7x7mm, 0.5mm pitch)")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"target-application"},"Target Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User product based on W5100 : No need to modify Firmware"),(0,i.kt)("li",{parentName:"ul"},"Home Network Devices: Set-Top Boxes, PVRs, Digital Media Adapters"),(0,i.kt)("li",{parentName:"ul"},"Serial-to-Ethernet: Access Controls, LED displays, Wireless AP\nrelays, etc."),(0,i.kt)("li",{parentName:"ul"},"Parallel-to-Ethernet: POS / Mini Printers, Copiers"),(0,i.kt)("li",{parentName:"ul"},"USB-to-Ethernet: Storage Devices, Network Printers"),(0,i.kt)("li",{parentName:"ul"},"GPIO-to-Ethernet: Home Network Sensors"),(0,i.kt)("li",{parentName:"ul"},"Security Systems: DVRs, Network Cameras, Kiosks"),(0,i.kt)("li",{parentName:"ul"},"Factory, Building, Home Automations"),(0,i.kt)("li",{parentName:"ul"},"Medical Monitoring Equipment"),(0,i.kt)("li",{parentName:"ul"},"Embedded Servers"),(0,i.kt)("li",{parentName:"ul"},"Internet of Things (IoT) Devices"),(0,i.kt)("li",{parentName:"ul"},"IoT Cloud Devices")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"driver"},"Driver"),(0,i.kt)("p",null,"The ioLibrary means ",(0,i.kt)("strong",{parentName:"p"},'"Internet Offload Library"')," for WIZnet chip. It\nincludes ",(0,i.kt)("strong",{parentName:"p"},"drivers")," and ",(0,i.kt)("strong",{parentName:"p"},"application protocols"),". The ioLibrary can be\nused for ",(0,i.kt)("a",{parentName:"p",href:"overview"},"W5100S")," application designs. These\nwill be updated continuously."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"iolibrary"},"ioLibrary"),(0,i.kt)("h4",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,"This driver provides the Berkeley Socket type APIs. The function names\nof this ioLibrary","_","BSD are the same as the function names of the\nioLibrary."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Directory Structure ",(0,i.kt)("img",{src:r(69486).Z}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ethernet : SOCKET APIs like BSD & WIZCHIP(W5500,W5200 and etc)\nDriver"),(0,i.kt)("li",{parentName:"ul"},"Internet : ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DHCP client "),(0,i.kt)("li",{parentName:"ul"},"DNS client "),(0,i.kt)("li",{parentName:"ul"},"FTP client"),(0,i.kt)("li",{parentName:"ul"},"FTP Server"),(0,i.kt)("li",{parentName:"ul"},"Http Server"),(0,i.kt)("li",{parentName:"ul"},"SNMP"),(0,i.kt)("li",{parentName:"ul"},"SNTP"),(0,i.kt)("li",{parentName:"ul"},"TFTP")))))),(0,i.kt)("h4",{id:"download"},"Download"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ioLibrary : latest version")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ioLibrary GitHub Repository")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/Wiznet/ioLibrary_Driver"},"https://github.com/Wiznet/ioLibrary_Driver"))),(0,i.kt)("h2",{id:"for-more-information-on-iolibrary-click-w5500-driver"},"For more information on ioLibrary, click \ud83c\udf0e",(0,i.kt)("a",{parentName:"h2",href:"driver"},"W5500 Driver")),(0,i.kt)("h2",{id:"data-sheet"},"Data Sheet"),(0,i.kt)("h4",{id:"korean"},"Korean"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/w5100s_ds_v125k.pdf",target:"_blank"},"W5100S Datasheet v1.2.5"))),(0,i.kt)("h4",{id:"english"},"English"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/w5100s_ds_v125e.pdf",target:"_blank"},"W5100S Datasheet v1.2.5"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"w5100s-vs-w5100-comparison-sheet"},"W5100S vs W5100 Comparison Sheet"),(0,i.kt)("h4",{id:"korean-1"},"Korean"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100svsw5100_cs_v110k.pdf",target:"_blank"},"W5100S vs W5100 Comparison Sheet v1.1.0"))),(0,i.kt)("h4",{id:"english-1"},"English"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100svsw5100_cs_v110e.pdf",target:"_blank"},"W5100S vs W5100 Comparison Sheet v1.1.0"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"application-note"},"Application Note"),(0,i.kt)("h4",{id:"korean-2"},"Korean"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/w5100s_an_ipraw_v100k.pdf",target:"_blank"},"W5100S IPRAW v1.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_pppoe_v100k.pdf",target:"_blank"},"W5100S PPPoE v1.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_slc_v100k.pdf",target:"_blank"},"W5100S SLC v1.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v110k.pdf",target:"_blank"},"W5100S Interrupt v1.1.0"))),(0,i.kt)("h4",{id:"english-2"},"English"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/w5100s_an_ipraw_v100e.pdf",target:"_blank"},"W5100S IPRAW v1.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_pppoe_v100e.pdf",target:"_blank"},"W5100S PPPoE v1.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_slc_v100e.pdf",target:"_blank"},"W5100S SLC v1.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v100e.pdf",target:"_blank"},"W5100S Interrupt v1.0.0"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"hardware-design-guide"},"Hardware Design Guide"),(0,i.kt)("h4",{id:"korean-3"},"Korean"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/w5100s_crystal_selection_guide_v100k.pdf",target:"_blank"},"Crystal Selection Guide v1.0.0"))),(0,i.kt)("h4",{id:"english-3"},"English"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5100s/w5100s_crystal_selection_guide_v100e.pdf",target:"_blank"},"Crystal Selection Guide v1.0.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/document"},"IR Reflow Profile"))),(0,i.kt)("hr",null),(0,i.kt)("p",null," Reference Schematic"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"external-transformer-type"},"External Transformer Type"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S/Reference%20Schematic"},"Go to github"),"\n",(0,i.kt)("img",{src:r(14440).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"rj45-with-transformer-type"},"RJ45 with Transformer Type"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/02_iEthernet/W5100S/Reference%20Schematic"},"Go to github"),"\n",(0,i.kt)("img",{src:r(14440).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"w5100s-comparison-sheet"},"W5100S Comparison Sheet"),(0,i.kt)("p",null,"Functionally, ",(0,i.kt)("strong",{parentName:"p"},"W5100S")," is very similar to ",(0,i.kt)("strong",{parentName:"p"},"W5100 and W5500"),', with\nslightly different Hardware Specification. And Software can be shared.\nFor example, Software written for the W5100 or W5500 is compatible with\nHardware for the W5100S. However, there are some differences between\nW5100S and W5100/W5500 have in Software and Hardware. The difference are\ndescribed in the document titled "W5100S comparison sheet" below.'),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"document"},"document"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",{class:"header"},(0,i.kt)("th",null,"Version"),(0,i.kt)("th",null,"Date"),(0,i.kt)("th",null,"Download"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",{class:"odd"},(0,i.kt)("td",null,"1.0.0"),(0,i.kt)("td",null,"2018-04-01"),(0,i.kt)("td",null,(0,i.kt)("embed",{src:"/img/products/w5100s/w5100s_cp_v100k.pdf",class:"align-center"}),(0,i.kt)("br",null),(0,i.kt)("embed",{src:"/img/products/w5100s/w5100s_cp_v100e.pdf",class:"align-center"}))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"w5100s-application"},"W5100S Application"),(0,i.kt)("p",null,"Refer to the following application examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/Application-Note/tcp"},"TCP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/Application-Note/udp"},"UDP")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/Application-Note/ipraw"},"IPRAW")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/Application-Note/pppoe"},"PPPoE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/Application-Note/socket_less_command"},"SOCKET-less Command")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/Application-Note/interrupt"},"Interrupt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/Product/iEthernet/W5100S/Application-Note/dma"},"DMA"))))}u.isMDXComponent=!0},14440:function(e,t,r){"use strict";t.Z=r.p+"assets/images/w5100s_ref_schematic_v110_use_trans-cb528bde43c2ec583a1507eae71da3bd.jpg"},35418:function(e,t,r){"use strict";t.Z=r.p+"assets/images/w5100s_diagram-f974ca49b9a55fba8962efbefc4c911d.png"},69486:function(e,t,r){"use strict";t.Z=r.p+"assets/images/w5100s_iolibrary-638223977bb31d0e4d3fc2f991a09214.png"},98950:function(e,t,r){"use strict";t.Z=r.p+"assets/images/w5100s_pinmap-573e93f97bf3f970f64693a74421a9c8.png"},38432:function(e,t,r){"use strict";t.Z=r.p+"assets/images/w5100s_pm-b45bb30bfe0f881f00d407541d0ef828.png"}}]);