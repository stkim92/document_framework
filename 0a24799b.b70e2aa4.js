(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{578:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),O=r,s=p["".concat(b,".").concat(O)]||p[O]||u[O]||i;return a?n.a.createElement(s,o(o({ref:t},c),{},{components:a})):n.a.createElement(s,o({ref:t},c))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var c=2;c<i;c++)b[c]=a[c];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),i=(a(0),a(578)),b={id:"overview",title:"Overview",date:new Date("2020-04-15T00:00:00.000Z")},o={unversionedId:"Product/ioModule/WIZ550io/overview",id:"Product/ioModule/WIZ550io/overview",isDocsHomePage:!1,title:"Overview",description:"WIZ550io",source:"@site/docs\\Product\\ioModule\\WIZ550io\\Overview.md",permalink:"/Product/ioModule/WIZ550io/overview",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/ioModule/WIZ550io/Overview.md",sidebar:"docs",previous:{title:"WIZ850io",permalink:"/Product/ioModule/WIZ850io/wiz850io"},next:{title:"Hardware Pins",permalink:"/Product/ioModule/WIZ550io/hardware_pins"}},l=[{value:"WIZ550io",id:"wiz550io",children:[{value:"Datasheet",id:"datasheet",children:[]},{value:"Datasheet History",id:"datasheet-history",children:[]},{value:"WIZ550io History",id:"wiz550io-history",children:[]}]}],c={rightToc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"wiz550io"},"WIZ550io"),Object(i.b)("p",null,"WIZ550io is an auto configurable Ethernet controller that includes a\nW5500 (TCP/IP hardwired chip and PHY embedded), a transformer and RJ45."),Object(i.b)("p",null,"It has a unique real MAC address and configures the network setting\nautomatically. When powered on, WIZ550io initializes itself \u2026 with\nembedded real MAC and sets the default IP address (192.168.1.2) and it\ncan be pinged. Therefore, users are not required to write MAC and\nnetwork information like IP address, Subnet mask and Gateway address.\nThe WIZ550io is an ideal product for users who want to develop their\nInternet enabling systems rapidly."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wiz550io/wiz550io_small_005.png",alt:null}))),Object(i.b)("p",null,"For more information on the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../iEthernet/w5500/overview"}),"W5500")," chip inside\nthe ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"overview"}),"WIZ550io")," module please also refer to\nthe chip's datasheet: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../../iEthernet/w5500/datasheet"}),"datasheet")),Object(i.b)("h3",{id:"datasheet"},"Datasheet"),Object(i.b)("a",{href:"/img/products/w5500/w5500_ds_v109e.pdf",target:"_blank"},"W5500 Datasheet v1.0.9 - English"),Object(i.b)("a",{href:"/img/products/w5500/w5500_ds_v109k.pdf",target:"_blank"},"W5500 Datasheet v1.0.9 - Korean"),Object(i.b)("h3",{id:"datasheet-history"},"Datasheet History"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Date"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2013-08-01"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Initial Release")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2013-09-13"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Corrected duplicated statements and typing errors (P.14, 23, 24, 28, 39, 51) Corrected descriptions (P.35)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2013-11-14"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Changed \u201cdescriptions of pin at 1.1 Pin Descriptions\u201d (P.10) starting \u201dIt must be tied to GND to NC (PIN38..42)\u201d / 2. corrected typing error: starting \u201c0x02 to 0x42 value of SOCK_MACRAW at 4.2 Socket Registers(P.50)\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.3"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2014-05-29"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Corrected \u201cSn_MSSR at 4.2 Socket Register\u201d (P.53): wrong descriptions of Sn_MSSR about FMTU/MTU")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.4"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2014-06-13"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. Added Note about reading size register value (P.56, 58) / 2. Added IR Reflow Temperature Profile (P.66)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.5"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2014-11-11"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. Added description for MISO pin (P.11):The SCSn signal defines MISO pin output value / 2. Modified the register notation (P.33), Modified the register notation \u201cSn_IR at 4.2 Socket Register\u201d (P.49) :from ","[R]"," to ","[RCW1]"," / 3. Corrected typing error: from DICON to DISCON of Sn_SR at 4.2 Socket Register (P.50)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.6"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2014-12-30"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Corrected typing error : from 0x02 to 0x42 value of SOCK_MACRAW \u201cSn_CR at 4.2 Socket Registers\u201d(P.46)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.7"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2016-02-24"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. Corrected Interrupt Assert Wait Time function (P.34) / 2. Notice PLLclk is 150MHz (P.34)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.8"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2017-05-19"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. Corrected Driver Level Range Unit uW/MHz to uW (P.60)")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.9"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2019-05-22"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. Corrected Sn_IMR Description (P.55) 2. Corrected Junction temperature Min value TJ (P.57) 3. Added Maximum junction temperature TJMAX (P.58)")))),Object(i.b)("h3",{id:"wiz550io-history"},"WIZ550io History"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Date"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2013-08-01"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Initial Release")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.1"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2014-01-17"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Changed \u201cExternal Transformer + RJ-45 to MAGJACK(inside transformer)\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.2"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2015-04-20"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Added \u201cResistor 33R in MDI line. because EMI issue.\u201dChanged \u201cPCB artwork. because changed develop tool(PADS \u2192 Altium)\u201d")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.3"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2018-08-10"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modified \u201cinner 2 layer copper foil (3V3D). This copper foil plated below of CHAND area. It may affect ESD.\u201d")))))}d.isMDXComponent=!0}}]);