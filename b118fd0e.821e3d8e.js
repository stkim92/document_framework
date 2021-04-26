(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{405:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(579)),c={id:"loopback",title:"Loopback",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/Open-Source-Hardware/loopback",id:"Product/Open-Source-Hardware/loopback",isDocsHomePage:!1,title:"Loopback",description:"TCP Server Loopback",source:"@site/docs\\Product\\Open-Source-Hardware\\loopback.md",permalink:"/docs/Product/Open-Source-Hardware/loopback",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/loopback.md",sidebar:"docs",previous:{title:"HTTP Client",permalink:"/docs/Product/Open-Source-Hardware/http_client"},next:{title:"Energy Micro",permalink:"/docs/Product/Open-Source-Hardware/Energy_micro"}},p=[{value:"TCP Server Loopback",id:"tcp-server-loopback",children:[]},{value:"UDP Loopback",id:"udp-loopback",children:[]}],i={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tcp-server-loopback"},"TCP Server Loopback"),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Download : ",Object(a.b)("a",{href:"/img/osh/cookie/w5500_cookie_v100.zip",target:"_blank"},"Project download"),",",Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"http://www.hw-group.com/products/hercules/index_en.html"}),"Hercules test program")," ")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select TCP Client tab in Hercules and type Server IP address\ndisplaying in Tera Term at Module IP and port number box.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/loopback2.jpg",alt:null}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click Connect. "),Object(a.b)("li",{parentName:"ul"},"If connection is done successfully, you can see\nmessage as follows.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/loopback4.jpg",alt:null}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type data you want to send and click Send button. If you want to send\nstring data, uncheck HEX checkbox. "),Object(a.b)("li",{parentName:"ul"},"After send data, you can see sent\ndata and received data.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/loopback5.jpg",alt:null}))),Object(a.b)("h2",{id:"udp-loopback"},"UDP Loopback"),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select UDP tab in Hercules and type IP address and port number displaying in Tera Term at Module IP and Port box in Hercules. And then, type port number you want in Local port box and click Listen button. Now, UDP socket opened.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/loopback7.jpg",alt:null}))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type data you want to send and click Send button. If you want to send string data, uncheck HEX checkbox. "),Object(a.b)("li",{parentName:"ul"},"After send data, you can see sent data and received data.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/loopback8.jpg",alt:null}))))}u.isMDXComponent=!0},579:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,m=b["".concat(c,".").concat(s)]||b[s]||d[s]||a;return n?o.a.createElement(m,l(l({ref:t},i),{},{components:n})):o.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);