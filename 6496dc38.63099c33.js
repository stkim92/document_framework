(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{252:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(2),i=r(6),a=(r(0),r(578)),o={id:"driver",title:"Driver",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/iEthernet/W5100S/driver",id:"Product/iEthernet/W5100S/driver",isDocsHomePage:!1,title:"Driver",description:'The ioLibrary means "Internet Offload Library" for WIZnet chip. It',source:"@site/docs\\Product\\iEthernet\\W5100S\\Driver.md",permalink:"/docs/Product/iEthernet/W5100S/driver",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Driver.md",sidebar:"docs",previous:{title:"Document",permalink:"/docs/Product/iEthernet/W5100S/document"},next:{title:"Reference Schematics",permalink:"/docs/Product/iEthernet/W5100S/ref_schematic"}},b=[{value:"ioLibrary",id:"iolibrary",children:[]}],l={rightToc:b};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ioLibrary means ",Object(a.b)("strong",{parentName:"p"},'"Internet Offload Library"')," for WIZnet chip. It\nincludes ",Object(a.b)("strong",{parentName:"p"},"drivers")," and ",Object(a.b)("strong",{parentName:"p"},"application protocols"),". The ioLibrary can be\nused for ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Product/iEthernet/W5100S/overviewt"}),"W5100S")," application designs. These\nwill be updated continuously."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"iolibrary"},"ioLibrary"),Object(a.b)("h4",{id:"overview"},"Overview"),Object(a.b)("p",null,"This driver provides the Berkeley Socket type APIs. The function names\nof this ioLibrary","_","BSD are the same as the function names of the\nioLibrary."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Directory Structure ",Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/w5100s/w5100s_iolibrary.png",alt:null})),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Ethernet : SOCKET APIs like BSD & WIZCHIP(W5500,W5200 and etc)\nDriver"),Object(a.b)("li",{parentName:"ul"},"Internet : ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"DHCP client "),Object(a.b)("li",{parentName:"ul"},"DNS client "),Object(a.b)("li",{parentName:"ul"},"FTP client"),Object(a.b)("li",{parentName:"ul"},"FTP Server"),Object(a.b)("li",{parentName:"ul"},"Http Server"),Object(a.b)("li",{parentName:"ul"},"SNMP"),Object(a.b)("li",{parentName:"ul"},"SNTP"),Object(a.b)("li",{parentName:"ul"},"TFTP")))))),Object(a.b)("h4",{id:"download"},"Download"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ioLibrary : latest version")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ioLibrary GitHub Repository")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/Wiznet/ioLibrary_Driver"}),"https://github.com/Wiznet/ioLibrary_Driver"))),Object(a.b)("p",null,"For more information on ioLibrary, click \ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../W5500/driver"}),"W5500 Driver")))}p.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||a;return r?i.a.createElement(m,c(c({ref:t},l),{},{components:r})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);