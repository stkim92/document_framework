(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),c=(n(0),n(259)),o={id:"socket_less_command",title:"SOCKET-less Command",date:new Date("2020-04-03T00:00:00.000Z")},i={id:"Product/iEthernet/W5100S/Application Note/socket_less_command",title:"SOCKET-less Command",description:"## Content\r",source:"@site/docs\\Product\\iEthernet\\W5100S\\Application Note\\SOCKET-less_Command.md",permalink:"/docs/Product/iEthernet/W5100S/Application Note/socket_less_command",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5100S/Application Note/SOCKET-less_Command.md",sidebar:"someSidebar",previous:{title:"PPPoE",permalink:"/docs/Product/iEthernet/W5100S/Application Note/pppoe"},next:{title:"Interrupt",permalink:"/docs/Product/iEthernet/W5100S/Application Note/interrupt"}},l=[{value:"Content",id:"content",children:[]},{value:"Development Environment",id:"development-environment",children:[]},{value:"Application note",id:"application-note",children:[{value:"Revision history",id:"revision-history",children:[]}]},{value:"Reference Code",id:"reference-code",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"content"},"Content"),Object(c.b)("h1",{id:"overview"},"Overview"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"SLC(SOCKET-less Command)")," can handle ARP and PING Request Packet without SOCKET Open.\nIf ARP and PING Reply Packet are received within the Retransmission Time configured by SLRCR and SLRTR, ARP and PING Interrupt are occurred. "),Object(c.b)("h2",{id:"development-environment"},"Development Environment"),Object(c.b)("hr",null),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"MCU : Not yet"),Object(c.b)("li",{parentName:"ul"},"Used program: ")),Object(c.b)("h2",{id:"application-note"},"Application note"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"revision-history"},"Revision history"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",{class:"header"},Object(c.b)("th",null,"Version"),Object(c.b)("th",null,"Date"),Object(c.b)("th",null,"Download"))),Object(c.b)("tbody",null,Object(c.b)("tr",{class:"odd"},Object(c.b)("td",null,"1.0.0"),Object(c.b)("td",null,"2018-04-01"),Object(c.b)("td",null,Object(c.b)("embed",{src:"/products/w5100s/application/w5100s_an_slc_v100k.pdf"}),Object(c.b)("br",null),Object(c.b)("embed",{src:"/products/w5100s/application/w5100s_an_slc_v100e.pdf",class:"align-center"}))))),Object(c.b)("h2",{id:"reference-code"},"Reference Code"),Object(c.b)("hr",null),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Download"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"ETC"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2018-09-03"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("img",Object(r.a)({parentName:"td"},{src:"/products/w5100s/application/w5100s_evb_an_coide_slc_v100.zip",alt:"W5100S_EVB_AN_CoIDE_SLC_V100.zip"}))),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Initial Version")))),Object(c.b)("p",null,"For more information ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/products/w5100s/datasheet"}),"W5100s")," chip please\nalso refer to the chip's datasheet:"))}p.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,O=d["".concat(o,".").concat(s)]||d[s]||u[s]||c;return n?a.a.createElement(O,i({ref:t},b,{components:n})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);