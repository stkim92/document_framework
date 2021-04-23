(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{294:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(6),i=(r(0),r(578)),o={id:"ioshield_a",title:"ioShield-A",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/Open-Source-Hardware/ioshield_a",id:"Product/Open-Source-Hardware/ioshield_a",isDocsHomePage:!1,title:"ioShield-A",description:"Overview",source:"@site/docs\\Product\\Open-Source-Hardware\\ioShield-A.md",permalink:"/docs/Product/Open-Source-Hardware/ioshield_a",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/ioShield-A.md",sidebar:"docs",previous:{title:"W5500 \u30a4\u30fc\u30b5\u30cd\u30c3\u30c8\u30b7\u30fc\u30eb\u30c9",permalink:"/docs/Product/Open-Source-Hardware/w5500_ethernet_shield_jp"},next:{title:"Using WIZnet Ethernet Library for ioShield-A",permalink:"/docs/Product/Open-Source-Hardware/ethernet_library_for_ioShield_A"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Available Board List",id:"available-board-list",children:[]},{value:"Available Resource",id:"available-resource",children:[]}],d={rightToc:l};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/osh/ioshield-a/io_s_a.png",alt:null}))," ioShield-A allows an Arduino board to\nconnect to the Internet."),Object(i.b)("p",null,"It is based on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../ioModule/WIZ550io/overview"}),"WIZ550io network module"),"\nwhich uses ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../iEthernet/W5500/datasheet"}),"WIZnet W5500 ethernet chip(W5500\nDatasheet)"),". The WIZnet W5500 provides a\nnetwork (TCP/IP) stack capable of both TCP and UDP. It supports up to\neight simultaneous socket connections. And, when Powered on and nRESET\ntriggered, WIZ550io initializes itself with embedded real MAC and\ndefault IP address and can be pinged from user\u2019s computer."),Object(i.b)("p",null,"As ioShield uses W5500 chipset, instead of W5100 which was used before\nin the Arduino Ethernet Shield, users needs to use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"WIZnet Ethernet\nLibrary"),"."),Object(i.b)("h2",{id:"available-board-list"},"Available Board List"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Arduino Board",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://arduino.cc/en/Main/ArduinoBoardUno"}),"Arduino board (e.g. the\nUno)")),Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://arduino.cc/en/Main/ArduinoBoardLeonardo"}),"Arduino\nLeonardo")))),Object(i.b)("li",{parentName:"ul"},"Arduino-compatible Board",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.seeedstudio.com/wiki/Seeeduino_v3.0"}),"Seeeduino v3.0"),"\n: Based on \ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://arduino.cc/en/Main/ArduinoBoardDuemilanove"}),"Arduino\nDuemilanove"))))),Object(i.b)("hr",null),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"}," Although you have non-AVR\nArduino-compatible board, you could use ioShield Hardware. But you\nshould use adequate S/W libraries for each chipsets. please refer to\neach product's web site.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cookie Board : Based on ARM Cortex-M3/M0\n\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.coocox.org/Cookie.html"}),"http://www.coocox.org/Cookie.html")),Object(i.b)("li",{parentName:"ul"},"GR-Sakura Board : Based on Renesas 32-bit RX63N\n\ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.renesas.com/products/promotion/gr/index.jsp#board"}),"http://www.renesas.com/products/promotion/gr/index.jsp#board")),Object(i.b)("li",{parentName:"ul"},"Chipkit : Based on Microchip PIC series \ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://chipkit.net/"}),"http://chipkit.net/"))),Object(i.b)("blockquote",null),Object(i.b)("h2",{id:"available-resource"},"Available Resource"),Object(i.b)("p",null,"All design files and source codes for the ioShield can be found on\nGitHub:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hardware Ver1.0: schematic(",Object(i.b)("a",{href:"/img/osh/ioshield-a/ioshield-a_v1_0_pl_130904.pdf",target:"_blank"},"PDF file](/img/osh/ioshield-a/ioshield-a.pdf)), schematic & PCB file(",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/img/osh/ioshield-a/ioshield-a_eaglecad.zip"}),"Eagle CAD"),"), Part List([PDF file"),")"),Object(i.b)("li",{parentName:"ul"},"Hardware Ver1.1: schematic(",Object(i.b)("a",{href:"/img/osh/ioshield-a/ioshield-a_v1_1_pl_140120.pdf",target:"_blank"},"PDF file](/img/osh/ioshield-a/ioshield-a_v1.1_sch.pdf)), schematic & PCB file(",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/img/osh/ioshield-a/ver1_1.zip"}),"Eagle CAD"),"), Part List([PDF file"),")"),Object(i.b)("li",{parentName:"ul"},"Ethernet Library : \ud83c\udf0e",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ_Ethernet_Library"}),"https://github.com/Wiznet/WIZ_Ethernet_Library"))))}b.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),b=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=b(r),p=a,h=u["".concat(o,".").concat(p)]||u[p]||s[p]||i;return r?n.a.createElement(h,c(c({ref:t},d),{},{components:r})):n.a.createElement(h,c({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=r[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);