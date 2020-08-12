(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{170:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return b})),r.d(e,"metadata",(function(){return c})),r.d(e,"rightToc",(function(){return i})),r.d(e,"default",(function(){return u}));var n=r(2),l=r(6),o=(r(0),r(516)),b={id:"migration_from_w5200",title:"Migration from W5200",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/iEthernet/W5500/migration_from_w5200",id:"Product/iEthernet/W5500/migration_from_w5200",isDocsHomePage:!1,title:"Migration from W5200",description:"Migration from W5200 to W5500",source:"@site/docs/Product/iEthernet/W5500/Migration_from_W5200.md",permalink:"/docs/Product/iEthernet/W5500/migration_from_w5200",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/Migration_from_W5200.md",sidebar:"someSidebar",previous:{title:"Reference Schematic",permalink:"/docs/Product/iEthernet/W5500/ref_schematic"},next:{title:"W5500 TCP Function",permalink:"/docs/Product/iEthernet/W5500/Application/tcp"}},i=[{value:"Driver for W5200 Users",id:"driver-for-w5200-users",children:[]},{value:"W5500 vs W5200 Chip in Comparison",id:"w5500-vs-w5200-chip-in-comparison",children:[]}],a={rightToc:i};function u(t){var e=t.components,r=Object(l.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},a,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"migration-from-w5200-to-w5500"},"Migration from W5200 to W5500"),Object(o.b)("p",null,"This page explains migration materials to W5200 users."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"driver-for-w5200-users"},"Driver for W5200 Users"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download :  ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/w5500/w5500_cortexm3_firmware_for_legacy.zip"}),"w5500_cortexm3_firmware_for_legacy.zip"))),Object(o.b)("p",null,"This driver is provided only for current W5200 users to help with a fast migration to W5500. TTo ",Object(o.b)("strong",{parentName:"p"},"get the new or latest BSD version driver"),", splease refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"driver"}),"W5500 Driver")," page."),Object(o.b)("h3",{id:"w5500-vs-w5200-chip-in-comparison"},"W5500 vs W5200 Chip in Comparison"),Object(o.b)("table",null,Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Device"),Object(o.b)("th",null,"W5500"),Object(o.b)("th",null,"W5200")),Object(o.b)("tr",null,Object(o.b)("td",null,"Process"),Object(o.b)("td",null,"0.13um"),Object(o.b)("td",null,"0.18um")),Object(o.b)("tr",null,Object(o.b)("td",null,"Package"),Object(o.b)("td",null,"48 LQFP (7*7 mm^2)"),Object(o.b)("td",null,"48 QFN  (7*7 mm^2)")),Object(o.b)("tr",null,Object(o.b)("td",null,"IO Voltage / Core Voltage"),Object(o.b)("td",null,"3.3V / 1.2V "),Object(o.b)("td",null,"3.3V / 1.8V ")),Object(o.b)("tr",null,Object(o.b)("td",null,"Number of sockets"),Object(o.b)("td",null,"8 ea"),Object(o.b)("td",null,"8 ea")),Object(o.b)("tr",null,Object(o.b)("td",{rowspan:"4"},"SPI Frame"),Object(o.b)("td",null,"ADD1|ADD2|Control|Data0|Data1\u2026"),Object(o.b)("td",null,"ADD1|ADD0|OP+LEN1|LEN0|Data\u2026")),Object(o.b)("tr",null,Object(o.b)("td",null,"8bit |8bit |8bit |8bit | 8bit"),Object(o.b)("td",null,"8bit |8bit |1bit +7bit |8bit | 8bit")),Object(o.b)("tr",null,Object(o.b)("td",null,"Control 1 byte (Block selection, Read/Write selection, SPI mode selection)"),Object(o.b)("td",null,"OP Code 1 bit (Read/Write Selection)")),Object(o.b)("tr",null,Object(o.b)("td",null,"No Data Length field"),Object(o.b)("td",null,"Data Length 15bit")),Object(o.b)("tr",null,Object(o.b)("td",null,"Memory Access"),Object(o.b)("td",null,"TX Memory and RX Memory can be used for general data memory."),Object(o.b)("td",null,"TX Memory can be used for general data memory.")),Object(o.b)("tr",null,Object(o.b)("td",null,"MCU Bus Interface"),Object(o.b)("td",null,"SPI"),Object(o.b)("td",null,"SPI / 8bit parallel indirect bus mode")),Object(o.b)("tr",null,Object(o.b)("td",null,"Regulator Related Circuit"),Object(o.b)("td",null,"LDO output pin needs the capacitor. No need to supply the chip power (1.2V)."),Object(o.b)("td",null,"LDO output voltage (1.8V) must be applied to the chip power (1.8V) at the outer side of the chip package.")),Object(o.b)("tr",null,Object(o.b)("td",null,"PHY Power Down Setting"),Object(o.b)("td",null,"PHY's power down mode can be set by configuring PHY Register."),Object(o.b)("td",null,"PHY's power down mode can be set by external pin.")),Object(o.b)("tr",null,Object(o.b)("td",null,"WOL Function"),Object(o.b)("td",null,"WOL over UDP Support"),Object(o.b)("td",null,"WOL over Ethernet Support")),Object(o.b)("tr",null,Object(o.b)("td",null,"PHY Mode Setting"),Object(o.b)("td",null,"PHY mode can be set by Firmware"),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,"Status LED"),Object(o.b)("td",null,"4 LEDs (SPD / DUP / ACT / Link)"),Object(o.b)("td",null,"3 LEDs (SPD / DUP / Link)")),Object(o.b)("tr",null,Object(o.b)("td",null,"PHY Auto MDIX Function"),Object(o.b)("td",null,"No Support"),Object(o.b)("td",null,"Support")),Object(o.b)("tr",null,Object(o.b)("td",null,"Operating Current @100Mbps Full Link"),Object(o.b)("td",null,"Typical 132mA"),Object(o.b)("td",null,"Typical 160mA")))))}u.isMDXComponent=!0},516:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return s}));var n=r(0),l=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,l=function(t,e){if(null==t)return{};var r,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(l[r]=t[r]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(l[r]=t[r])}return l}var a=l.a.createContext({}),u=function(t){var e=l.a.useContext(a),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},d=function(t){var e=u(t.components);return l.a.createElement(a.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},O=l.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,b=t.parentName,a=i(t,["components","mdxType","originalType","parentName"]),d=u(r),O=n,s=d["".concat(b,".").concat(O)]||d[O]||p[O]||o;return r?l.a.createElement(s,c(c({ref:e},a),{},{components:r})):l.a.createElement(s,c({ref:e},a))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,b=new Array(o);b[0]=O;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,b[1]=c;for(var a=2;a<o;a++)b[a]=r[a];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);