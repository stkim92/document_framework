(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{485:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(516)),o={id:"interrupt",title:"Interrupt",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/iEthernet/W5100S/Application-Note/interrupt",id:"Product/iEthernet/W5100S/Application-Note/interrupt",isDocsHomePage:!1,title:"Interrupt",description:"Overview",source:"@site/docs/Product/iEthernet/W5100S/Application-Note/Interrupt.md",permalink:"/docs/Product/iEthernet/W5100S/Application-Note/interrupt",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Application-Note/Interrupt.md",sidebar:"someSidebar",previous:{title:"SOCKET-less Command",permalink:"/docs/Product/iEthernet/W5100S/Application-Note/socket_less_command"},next:{title:"DMA",permalink:"/docs/Product/iEthernet/W5100S/Application-Note/dma"}},l=[{value:"Development Environment",id:"development-environment",children:[]},{value:"Application note",id:"application-note",children:[{value:"Revision history",id:"revision-history",children:[]}]},{value:"Reference Code",id:"reference-code",children:[{value:"Revision history",id:"revision-history-1",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"overview"},"Overview"),Object(i.b)("p",null,"W5100S provides ",Object(i.b)("strong",{parentName:"p"},"INTn(Interrupt Pin)")," and HOST is notified when an Ethernet Communication\nEvent has occurred through ",Object(i.b)("strong",{parentName:"p"},"INTn"),". When an Ethernet Communication Process Event\n(IP Collision, WOL Packet Reception, Data Transmission, Reception for each\nSOCKET, etc.) occurs, the ",Object(i.b)("strong",{parentName:"p"},"INTn")," is asserted low"),Object(i.b)("h2",{id:"development-environment"},"Development Environment"),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"MCU : "),Object(i.b)("li",{parentName:"ul"},"Used program:-")),Object(i.b)("h2",{id:"application-note"},"Application note"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"revision-history"},"Revision history"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",{class:"header"},Object(i.b)("th",null,"Version"),Object(i.b)("th",null,"Date"),Object(i.b)("th",null,"Download"))),Object(i.b)("tbody",null,Object(i.b)("tr",{class:"odd"},Object(i.b)("td",null,"1.0.0"),Object(i.b)("td",null,"2018-04-01"),Object(i.b)("td",null,Object(i.b)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v110k.pdf",class:"align-center"},"w5100s_an_interrupt_v110k.pdf"),Object(i.b)("br",null),Object(i.b)("a",{href:"/img/products/w5100s/application/w5100s_an_interrupt_v100e.pdf",class:"align-center"},"w5100s_an_interrupt_v100e.pdf"))))),Object(i.b)("h2",{id:"reference-code"},"Reference Code"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"revision-history-1"},"Revision history"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Date"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Download"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"ETC"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/img/products/w5100s/application/w5100s_an_interrupt_v110k.pdf"}),"w5100s_an_interrupt_v110k.pdf")," ",Object(i.b)("br",null),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/img/products/w5100s/application/w5100s_an_interrupt_v100e.pdf"}),"w5100s_an_interrupt_v100e.pdf")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Initial Version")))),Object(i.b)("p",null,"For more information ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../document"}),"W5100s")," chip please\nalso refer to the chip's datasheet:"))}b.isMDXComponent=!0},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,O=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(O,c(c({ref:t},p),{},{components:n})):a.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);