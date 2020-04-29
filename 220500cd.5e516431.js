(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(547)),i={id:"ipraw",title:"IPRAW",date:new Date("2020-04-03T00:00:00.000Z")},c={id:"Product/iEthernet/W5100S/Application Note/ipraw",title:"IPRAW",description:"## Content",source:"@site/docs/Product/iEthernet/W5100S/Application Note/IPRAW.md",permalink:"/document_framework/docs/Product/iEthernet/W5100S/Application Note/ipraw",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5100S/Application Note/IPRAW.md",sidebar:"someSidebar",previous:{title:"UDP",permalink:"/document_framework/docs/Product/iEthernet/W5100S/Application Note/udp"},next:{title:"PPPoE",permalink:"/document_framework/docs/Product/iEthernet/W5100S/Application Note/pppoe"}},l=[{value:"Content",id:"content",children:[]},{value:"Development Environment",id:"development-environment",children:[]},{value:"Application note",id:"application-note",children:[{value:"Revision history",id:"revision-history",children:[]}]},{value:"Reference Code",id:"reference-code",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"content"},"Content"),Object(o.b)("h1",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IPRAW Mode")," can handle Internet Protocol(IPv4) Layer\nCommunication by supporting variable Internet Protocol such as\n","[","ICMP","]","(",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Control_Message_Protocol"}),"http://en.wikipedia.org/wiki/Internet_Control_Message_Protocol"),")(0x01),","[","IGMP","]","(",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Group_Management_Protocol"}),"http://en.wikipedia.org/wiki/Internet_Group_Management_Protocol"),")(0x02),","[","IPinIP","]","(",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/IP_in_IP"}),"https://en.wikipedia.org/wiki/IP_in_IP"),")(0x04)\nand etc. PING Message is one type of ICMP Messages and W5100S supports\nPING Message by Hardware and SOCKET-less Command. But also, ",Object(o.b)("strong",{parentName:"p"},"IPRAW\nMode")," supports PING Message and the other types of ICMP Messages by\nHOST Process."),Object(o.b)("h2",{id:"development-environment"},"Development Environment"),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MCU : - Used program:")),Object(o.b)("h2",{id:"application-note"},"Application note"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"revision-history"},"Revision history"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",{class:"header"},Object(o.b)("th",null,"Version"),Object(o.b)("th",null,"Date"),Object(o.b)("th",null,"Download"))),Object(o.b)("tbody",null,Object(o.b)("tr",{class:"odd"},Object(o.b)("td",null,"1.0.0"),Object(o.b)("td",null,"2018-04-01"),Object(o.b)("td",null,Object(o.b)("embed",{src:"/products/w5100s/application/w5100s_an_ipraw_v110k.pdf",class:"align-right"}),Object(o.b)("br",null),Object(o.b)("embed",{src:"/products/w5100s/application/w5100s_an_ipraw_v110e.pdf"}))))),Object(o.b)("h2",{id:"reference-code"},"Reference Code"),Object(o.b)("hr",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Date"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Download"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Etc"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2018-05-25"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("img",Object(r.a)({parentName:"td"},{src:"/products/w5100s/application/w5100s_evb_an_coide_ipraw_v100.zip.zip",alt:"W5100S_EVB_AN_CoIDE_IPRAW_V100.zip"}))),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Initial Version")))),Object(o.b)("p",null,"For more information ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/products/w5100s/datasheet"}),"W5100S")," chip please\nalso refer to the chip's datasheet:"))}b.isMDXComponent=!0},547:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,O=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(O,c({ref:t},p,{components:n})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);