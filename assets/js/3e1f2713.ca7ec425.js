(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[83247],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=i(r),f=o,k=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(k,c(c({ref:t},p),{},{components:r})):n.createElement(k,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83296:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),c={id:"loopback",title:"Loopback",date:new Date("2020-04-03T00:00:00.000Z")},u={unversionedId:"Product/Open-Source-Hardware/loopback",id:"Product/Open-Source-Hardware/loopback",isDocsHomePage:!1,title:"Loopback",description:"TCP Server Loopback",source:"@site/docs/Product/Open-Source-Hardware/loopback.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/loopback",permalink:"/Product/Open-Source-Hardware/loopback",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/loopback.md",version:"current",frontMatter:{id:"loopback",title:"Loopback",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"HTTP Client",permalink:"/Product/Open-Source-Hardware/http_client"},next:{title:"Energy Micro",permalink:"/Product/Open-Source-Hardware/Energy_micro"}},l=[{value:"TCP Server Loopback",id:"tcp-server-loopback",children:[]},{value:"UDP Loopback",id:"udp-loopback",children:[]}],i={toc:l};function p(e){var t=e.components,c=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},i,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tcp-server-loopback"},"TCP Server Loopback"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Download : ",(0,a.kt)("a",{href:"/img/osh/cookie/w5500_cookie_v100.zip",target:"_blank"},"Project download"),",",(0,a.kt)("a",{parentName:"strong",href:"http://www.hw-group.com/products/hercules/index_en.html"},"Hercules test program")," ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select TCP Client tab in Hercules and type Server IP address\ndisplaying in Tera Term at Module IP and port number box.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(74975).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click Connect. "),(0,a.kt)("li",{parentName:"ul"},"If connection is done successfully, you can see\nmessage as follows.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(72065).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type data you want to send and click Send button. If you want to send\nstring data, uncheck HEX checkbox. "),(0,a.kt)("li",{parentName:"ul"},"After send data, you can see sent\ndata and received data.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(82029).Z})),(0,a.kt)("h2",{id:"udp-loopback"},"UDP Loopback"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select UDP tab in Hercules and type IP address and port number displaying in Tera Term at Module IP and Port box in Hercules. And then, type port number you want in Local port box and click Listen button. Now, UDP socket opened.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5371).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type data you want to send and click Send button. If you want to send string data, uncheck HEX checkbox. "),(0,a.kt)("li",{parentName:"ul"},"After send data, you can see sent data and received data.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(87478).Z})))}p.isMDXComponent=!0},74975:function(e,t,r){"use strict";t.Z=r.p+"assets/images/loopback2-21dcd3fa6fa13aa8155a6533907a33d6.jpg"},72065:function(e,t,r){"use strict";t.Z=r.p+"assets/images/loopback4-545e3acf2eeda824107a3a4ed023e987.jpg"},82029:function(e,t,r){"use strict";t.Z=r.p+"assets/images/loopback5-adff5ab4266b1d6fdc1f5070528f6ef1.jpg"},5371:function(e,t,r){"use strict";t.Z=r.p+"assets/images/loopback7-5f2e37089e1c2144590c1181c9f4b9f5.jpg"},87478:function(e,t,r){"use strict";t.Z=r.p+"assets/images/loopback8-4d804d9b858f2bb2ee366ccc3fa27cc5.jpg"}}]);