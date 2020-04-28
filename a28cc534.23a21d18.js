(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{217:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(259)),i={id:"ipraw",title:"IPRAW",date:new Date("2020-04-07T00:00:00.000Z")},p={id:"Product/iEthernet/W5500/Application/ipraw",title:"IPRAW",description:"## Content\r",source:"@site/docs\\Product\\iEthernet\\W5500\\Application\\IPRAW.md",permalink:"/docs/Product/iEthernet/W5500/Application/ipraw",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5500/Application/IPRAW.md",sidebar:"someSidebar",previous:{title:"UDP",permalink:"/docs/Product/iEthernet/W5500/Application/udp"},next:{title:"PPPoE",permalink:"/docs/Product/iEthernet/W5500/Application/pppoe"}},c=[{value:"Content",id:"content",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Overview",id:"overview-1",children:[]},{value:"Overview",id:"overview-2",children:[]}],l={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"content"},"Content"),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"W5500 IPRAW mode")," can handle IP layer's upper protocol\nin the TCP/IP Layer. W5500 IPRAW mode supports transport layer protocol\nsuch as\n","[","ICMP","]","(",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Control_Message_Protocol"}),"http://en.wikipedia.org/wiki/Internet_Control_Message_Protocol"),")(0x01),","[","IGMP","]","(",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Group_Management_Protocol"}),"http://en.wikipedia.org/wiki/Internet_Group_Management_Protocol"),")(0x02),","[","TCP","]","(",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Transmission_Control_Protocol"}),"http://en.wikipedia.org/wiki/Transmission_Control_Protocol"),")\n(0x06) and\n","[","UDP","]","(",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/User_Datagram_Protocol"}),"http://en.wikipedia.org/wiki/User_Datagram_Protocol"),")(0x11)\naccording to the protocol field of IP header, depending on the protocol\nnumber. The 'Ping' of ICMP is already implemented in W5500 as the\nHardwired but when the user needs, the host can directly process the\nICMP function include ping by opening the Socket n as an IPRAW mode."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/page%3Eproducts/w5500/application/ipraw/pingtest",alt:"pingtest"}))),Object(o.b)("p",null,"For more information ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/products/w5500/start"}),"W5500")," chip please also\nrefer to the chip's datasheet:\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/page%3Eproducts/w5500/datasheet",alt:"datasheet"}))),Object(o.b)("h2",{id:"overview-1"},"Overview"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"W5500 IPRAW mode")," can handle IP layer's upper protocol\nin the TCP/IP Layer. W5500 IPRAW mode supports transport layer protocol\nsuch as\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Control_Message_Protocol"}),"ICMP"),"(0x01),",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Group_Management_Protocol"}),"IGMP"),"(0x02),",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Transmission_Control_Protocol"}),"TCP"),"\n(0x06) and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/User_Datagram_Protocol"}),"UDP"),"(0x11)\naccording to the protocol field of IP header, depending on the protocol\nnumber. The 'Ping' of ICMP is already implemented in W5500 as the\nHardwired but when the user needs, the host can directly process the\nICMP function include ping by opening the Socket n as an IPRAW mode."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/page%3Eproducts/w5500/application/ipraw/pingtest",alt:"pingtest"}))),Object(o.b)("p",null,"For more information ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/products/w5500/start"}),"W5500")," chip please also\nrefer to the chip's datasheet:\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/page%3Eproducts/w5500/datasheet",alt:"datasheet"}))),Object(o.b)("h2",{id:"overview-2"},"Overview"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"W5500 IPRAW mode")," can handle IP layer's upper protocol\nin the TCP/IP Layer. W5500 IPRAW mode supports transport layer protocol\nsuch as\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Control_Message_Protocol"}),"ICMP"),"(0x01),",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Group_Management_Protocol"}),"IGMP"),"(0x02),",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Transmission_Control_Protocol"}),"TCP"),"\n(0x06) and\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/User_Datagram_Protocol"}),"UDP"),"(0x11)\naccording to the protocol field of IP header, depending on the protocol\nnumber. The 'Ping' of ICMP is already implemented in W5500 as the\nHardwired but when the user needs, the host can directly process the\nICMP function include ping by opening the Socket n as an IPRAW mode."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/page%3Eproducts/w5500/application/ipraw/pingtest",alt:"pingtest"}))),Object(o.b)("p",null,"For more information ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/products/w5500/start"}),"W5500")," chip please also\nrefer to the chip's datasheet:\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/page%3Eproducts/w5500/datasheet",alt:"datasheet"}))))}s.isMDXComponent=!0},259:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,h=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return r?a.a.createElement(h,p({ref:t},l,{components:r})):a.a.createElement(h,p({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);