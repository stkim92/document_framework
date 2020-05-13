(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{562:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(582)),c={id:"ipraw",title:"IPRAW",date:new Date("2020-04-03T00:00:00.000Z")},i={id:"Product/iEthernet/W5100S/Application-Note/ipraw",title:"IPRAW",description:"## Content\r",source:"@site/docs\\Product\\iEthernet\\W5100S\\Application-Note\\IPRAW.md",permalink:"/document_framework/docs/Product/iEthernet/W5100S/Application-Note/ipraw",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5100S/Application-Note/IPRAW.md",sidebar:"someSidebar",previous:{title:"UDP",permalink:"/document_framework/docs/Product/iEthernet/W5100S/Application-Note/udp"},next:{title:"PPPoE",permalink:"/document_framework/docs/Product/iEthernet/W5100S/Application-Note/pppoe"}},l=[{value:"Content",id:"content",children:[]},{value:"Development Environment",id:"development-environment",children:[]},{value:"Application note",id:"application-note",children:[{value:"Revision history",id:"revision-history",children:[]}]},{value:"Reference Code",id:"reference-code",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"content"},"Content"),Object(o.b)("h1",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IPRAW Mode")," can handle Internet Protocol(IPv4) Layer\nCommunication by supporting variable Internet Protocol such as\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Control_Message_Protocol"}),"ICMP"),"(0x01),",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Internet_Group_Management_Protocol"}),"IGMP"),"(0x02),",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/IP_in_IP"}),"IPinIP"),"(0x04)\nand etc. PING Message is one type of ICMP Messages and W5100S supports\nPING Message by Hardware and SOCKET-less Command. But also, ",Object(o.b)("strong",{parentName:"p"},"IPRAW\nMode")," supports PING Message and the other types of ICMP Messages by\nHOST Process."),Object(o.b)("h2",{id:"development-environment"},"Development Environment"),Object(o.b)("hr",null),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MCU"),Object(o.b)("li",{parentName:"ul"},"Used program")),Object(o.b)("h2",{id:"application-note"},"Application note"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"revision-history"},"Revision history"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",{class:"header"},Object(o.b)("th",null,"Version"),Object(o.b)("th",null,"Date"),Object(o.b)("th",null,"Download"))),Object(o.b)("tbody",null,Object(o.b)("tr",{class:"odd"},Object(o.b)("td",null,"1.0.0"),Object(o.b)("td",null,"2018-04-01"),Object(o.b)("td",null,Object(o.b)("embed",{src:"/document_framework/img/products/w5100s/application/w5100s_an_ipraw_v110k.pdf",class:"align-right"}),Object(o.b)("br",null),Object(o.b)("embed",{src:"/document_framework/img/products/w5100s/application/w5100s_an_ipraw_v110e.pdf"}))))),Object(o.b)("h2",{id:"reference-code"},"Reference Code"),Object(o.b)("hr",null),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Date"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Download"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Etc"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2018-05-25"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("img",Object(r.a)({parentName:"td"},{src:"/document_framework/img/products/w5100s/application/w5100s_evb_an_coide_ipraw_v100.zip.zip",alt:"W5100S_EVB_AN_CoIDE_IPRAW_V100.zip"}))),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Initial Version")))),Object(o.b)("p",null,"For more information ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:""}),"W5100S")," chip please\nalso refer to the chip's datasheet:"))}p.isMDXComponent=!0},582:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,m=u["".concat(c,".").concat(s)]||u[s]||d[s]||o;return n?a.a.createElement(m,i({ref:t},b,{components:n})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);