(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{578:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(578)),o={id:"all_pages",title:"All Pages (ENG)",date:new Date("2020-04-07T00:00:00.000Z")},c={unversionedId:"Product/iEthernet/W5500/all_pages",id:"Product/iEthernet/W5500/all_pages",isDocsHomePage:!1,title:"All Pages (ENG)",description:"W5500",source:"@site/docs\\Product\\iEthernet\\W5500\\All_Pages.md",permalink:"/docs/Product/iEthernet/W5500/all_pages",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/All_Pages.md",sidebar:"docs",previous:{title:"ESD Test Document",permalink:"/docs/Product/iEthernet/W5500/Application/esd_test_document"},next:{title:"All Pages (JAPANESE)",permalink:"/docs/Product/iEthernet/W5500/all_pages_jp"}},l=[{value:"W5500",id:"w5500",children:[{value:"Overview",id:"overview",children:[]}]},{value:"Features",id:"features",children:[{value:"Language",id:"language",children:[]},{value:"Material",id:"material",children:[]}]},{value:"See Also",id:"see-also",children:[]},{value:"Where to Buy",id:"where-to-buy",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"w5500"},"W5500"),Object(i.b)("h3",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w5500/img_w5500h.jpg",alt:"W5500 Photo 1"}))),Object(i.b)("p",null,"The W5500 chip is a Hardwired Internet controller designed as a full\nhardwired TCP/IP stack with WIZnet technology. W5500 provides Internet\nconnectivity to your embedded systems by using SPI(Serial Peripheral\nInterface). SPI provides easy connection via external MCU to W5500. The\nclock speed of W5500 SPI supports upto 80MHz."),Object(i.b)("p",null,"Since W5500 integrates the Hardwired TCP/IP stack with 10/100 Ethernet\nMAC and PHY, it is truly a one-chip solution for the stable internet\nconnectivity. WIZnet's Hardwired TCP/IP stack supports TCP, UDP, IPv4,\nICMP, ARP, IGMP, and PPPoE - and it has been proven through various\napplications over the last decade."),Object(i.b)("p",null,"W5500 provides 8 independent SOCKETs to be used simultaneously and 32KB\ninternal memory for data communication. Users can develop an Ethernet\napplication easily by using the simple W5500 SOCKET program instead of\nhandling a complex Ethernet controller. W5500 also provides WOL (Wake on\nLAN) and a Power Down Mode in order to reduce power consumption."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Supports following Hardwired TCP/IP Protocols : TCP, UDP, ICMP,\nIPv4, ARP, IGMP, PPPoE"),Object(i.b)("li",{parentName:"ul"},"Supports 8 independent sockets simultaneously"),Object(i.b)("li",{parentName:"ul"},"Supports Power down mode"),Object(i.b)("li",{parentName:"ul"},"Supports Wake on LAN over UDP"),Object(i.b)("li",{parentName:"ul"},"Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)"),Object(i.b)("li",{parentName:"ul"},"Internal 32Kbytes Memory for Tx/Rx Buffers"),Object(i.b)("li",{parentName:"ul"},"10BaseT/100BaseTX Ethernet PHY embedded"),Object(i.b)("li",{parentName:"ul"},"Support Auto Negotiation (Full and half duplex, 10 and 100-based)"),Object(i.b)("li",{parentName:"ul"},"Not support IP Fragmentation"),Object(i.b)("li",{parentName:"ul"},"3.3V operation with 5V I/O signal tolerance"),Object(i.b)("li",{parentName:"ul"},"LED outputs (Full/Half duplex, Link, Speed, Active)"),Object(i.b)("li",{parentName:"ul"},"48 Pin LQFP Lead-Free Package (7x7mm, 0.5mm pitch)")),Object(i.b)("h3",{id:"language"},"Language"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Product/iEthernet/W5500/all_pages_jp"}),"Japanese.Ver"))),Object(i.b)("h3",{id:"material"},"Material"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Product/iEthernet/W5500/datasheet"}),"W5500 Datasheet")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"driver"}),"W5500 Driver")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Product/iEthernet/W5500/ref_schematic"}),"W5500 Reference Schematic")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"migration_from_w5200"}),"Migration from W5200 to W5500")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Product/iEthernet/W5500/Application/tcp"}),"W5500 TCP Function")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Product/iEthernet/W5500/Application/udp"}),"W5500 UDP Function")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Product/iEthernet/W5500/Application/ipraw"}),"W5500 Application Note (IPRAW)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Product/iEthernet/W5500/Application/pppoe"}),"W5500 Application Note (PPPoE)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Product/iEthernet/W5500/Application/spi_performance"}),"W5500 Confirmation of ESD Test"))),Object(i.b)("h2",{id:"see-also"},"See Also"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.wiznet.co.kr/product-item/w5500"}),"WIZnet Website -\nW5500")," : W5500 Chip\nfeatures, Pin assignment and Hardware Ref. Design Guide"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://forum.wiznet.io/"}),"WizWiki\nForum")," : WIZnet Forum for Technical\nsupport and Project shared"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"where-to-buy"},"Where to Buy"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w5500/buynow.png",alt:"WIZnet Online Shop"})),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.shopwiznet.com/"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/dollar.png",alt:"WIZnetUS Online Shop,\nUSA"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://shop.wiznet.eu/"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/european-euro.png",alt:"WIZnetEU Online Shop,\nGermany"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://shop.wiznet.co.kr/"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"/img/products/w5500/w5500_evb/icons/won.png",alt:"WIZnetKorea Online Shop,\nKorea"})))))}b.isMDXComponent=!0}}]);