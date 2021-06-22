(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[30712],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),u=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(r),m=a,k=c["".concat(d,".").concat(m)]||c[m]||s[m]||i;return r?n.createElement(k,o(o({ref:e},p),{},{components:r})):n.createElement(k,o({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},45051:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],l={id:"overview",title:"Overview",date:new Date("2020-04-15T00:00:00.000Z")},d=void 0,u={unversionedId:"Product/ioModule/WIZ550io/overview",id:"Product/ioModule/WIZ550io/overview",isDocsHomePage:!1,title:"Overview",description:"WIZ550io",source:"@site/docs/Product/ioModule/WIZ550io/Overview.md",sourceDirName:"Product/ioModule/WIZ550io",slug:"/Product/ioModule/WIZ550io/overview",permalink:"/Product/ioModule/WIZ550io/overview",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/ioModule/WIZ550io/Overview.md",version:"current",frontMatter:{id:"overview",title:"Overview",date:"2020-04-15T00:00:00.000Z"},sidebar:"docs",previous:{title:"WIZ850io",permalink:"/Product/ioModule/WIZ850io/wiz850io"},next:{title:"Hardware Pins",permalink:"/Product/ioModule/WIZ550io/hardware_pins"}},p=[{value:"WIZ550io",id:"wiz550io",children:[{value:"Datasheet",id:"datasheet",children:[]},{value:"Datasheet History",id:"datasheet-history",children:[]},{value:"WIZ550io History",id:"wiz550io-history",children:[]}]}],s={toc:p};function c(t){var e=t.components,l=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"wiz550io"},"WIZ550io"),(0,i.kt)("p",null,"WIZ550io is an auto configurable Ethernet controller that includes a\nW5500 (TCP/IP hardwired chip and PHY embedded), a transformer and RJ45."),(0,i.kt)("p",null,"It has a unique real MAC address and configures the network setting\nautomatically. When powered on, WIZ550io initializes itself \u2026 with\nembedded real MAC and sets the default IP address (192.168.1.2) and it\ncan be pinged. Therefore, users are not required to write MAC and\nnetwork information like IP address, Subnet mask and Gateway address.\nThe WIZ550io is an ideal product for users who want to develop their\nInternet enabling systems rapidly."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(3394).Z})),(0,i.kt)("p",null,"For more information on the ",(0,i.kt)("a",{parentName:"p",href:"../../iEthernet/w5500/overview"},"W5500")," chip inside\nthe ",(0,i.kt)("a",{parentName:"p",href:"overview"},"WIZ550io")," module please also refer to\nthe chip's datasheet: ",(0,i.kt)("a",{parentName:"p",href:"../../iEthernet/w5500/datasheet"},"datasheet")),(0,i.kt)("h3",{id:"datasheet"},"Datasheet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5500/w5500_ds_v109e.pdf",target:"_blank"},"W5500 Datasheet v1.0.9 - English")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"/img/products/w5500/w5500_ds_v109k.pdf",target:"_blank"},"W5500 Datasheet v1.0.9 - Korean"))),(0,i.kt)("h3",{id:"datasheet-history"},"Datasheet History"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Date"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,i.kt)("td",{parentName:"tr",align:null},"2013-08-01"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial Release")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.1"),(0,i.kt)("td",{parentName:"tr",align:null},"2013-09-13"),(0,i.kt)("td",{parentName:"tr",align:null},"Corrected duplicated statements and typing errors (P.14, 23, 24, 28, 39, 51) Corrected descriptions (P.35)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.2"),(0,i.kt)("td",{parentName:"tr",align:null},"2013-11-14"),(0,i.kt)("td",{parentName:"tr",align:null},"Changed \u201cdescriptions of pin at 1.1 Pin Descriptions\u201d (P.10) starting \u201dIt must be tied to GND to NC (PIN38..42)\u201d / 2. corrected typing error: starting \u201c0x02 to 0x42 value of SOCK_MACRAW at 4.2 Socket Registers(P.50)\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.3"),(0,i.kt)("td",{parentName:"tr",align:null},"2014-05-29"),(0,i.kt)("td",{parentName:"tr",align:null},"Corrected \u201cSn_MSSR at 4.2 Socket Register\u201d (P.53): wrong descriptions of Sn_MSSR about FMTU/MTU")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.4"),(0,i.kt)("td",{parentName:"tr",align:null},"2014-06-13"),(0,i.kt)("td",{parentName:"tr",align:null},"1. Added Note about reading size register value (P.56, 58) / 2. Added IR Reflow Temperature Profile (P.66)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.5"),(0,i.kt)("td",{parentName:"tr",align:null},"2014-11-11"),(0,i.kt)("td",{parentName:"tr",align:null},"1. Added description for MISO pin (P.11):The SCSn signal defines MISO pin output value / 2. Modified the register notation (P.33), Modified the register notation \u201cSn_IR at 4.2 Socket Register\u201d (P.49) :from ","[R]"," to ","[RCW1]"," / 3. Corrected typing error: from DICON to DISCON of Sn_SR at 4.2 Socket Register (P.50)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.6"),(0,i.kt)("td",{parentName:"tr",align:null},"2014-12-30"),(0,i.kt)("td",{parentName:"tr",align:null},"Corrected typing error : from 0x02 to 0x42 value of SOCK_MACRAW \u201cSn_CR at 4.2 Socket Registers\u201d(P.46)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.7"),(0,i.kt)("td",{parentName:"tr",align:null},"2016-02-24"),(0,i.kt)("td",{parentName:"tr",align:null},"1. Corrected Interrupt Assert Wait Time function (P.34) / 2. Notice PLLclk is 150MHz (P.34)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.8"),(0,i.kt)("td",{parentName:"tr",align:null},"2017-05-19"),(0,i.kt)("td",{parentName:"tr",align:null},"1. Corrected Driver Level Range Unit uW/MHz to uW (P.60)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0.9"),(0,i.kt)("td",{parentName:"tr",align:null},"2019-05-22"),(0,i.kt)("td",{parentName:"tr",align:null},"1. Corrected Sn_IMR Description (P.55) 2. Corrected Junction temperature Min value TJ (P.57) 3. Added Maximum junction temperature TJMAX (P.58)")))),(0,i.kt)("h3",{id:"wiz550io-history"},"WIZ550io History"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Date"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"2013-08-01"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial Release")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.1"),(0,i.kt)("td",{parentName:"tr",align:null},"2014-01-17"),(0,i.kt)("td",{parentName:"tr",align:null},"Changed \u201cExternal Transformer + RJ-45 to MAGJACK(inside transformer)\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.2"),(0,i.kt)("td",{parentName:"tr",align:null},"2015-04-20"),(0,i.kt)("td",{parentName:"tr",align:null},"Added \u201cResistor 33R in MDI line. because EMI issue.\u201dChanged \u201cPCB artwork. because changed develop tool(PADS \u2192 Altium)\u201d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1.3"),(0,i.kt)("td",{parentName:"tr",align:null},"2018-08-10"),(0,i.kt)("td",{parentName:"tr",align:null},"Modified \u201cinner 2 layer copper foil (3V3D). This copper foil plated below of CHAND area. It may affect ESD.\u201d")))))}c.isMDXComponent=!0},3394:function(t,e,r){"use strict";e.Z=r.p+"assets/images/wiz550io_small_005-9d1067bee79f607efa5deed52195334c.png"}}]);