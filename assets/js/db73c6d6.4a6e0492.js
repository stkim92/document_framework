(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[51387],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74134:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i={id:"socket_less_command",title:"SOCKET-less Command",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/iEthernet/W5100S/Application-Note/socket_less_command",id:"Product/iEthernet/W5100S/Application-Note/socket_less_command",isDocsHomePage:!1,title:"SOCKET-less Command",description:"Overview",source:"@site/docs/Product/iEthernet/W5100S/Application-Note/SOCKET-less_Command.md",sourceDirName:"Product/iEthernet/W5100S/Application-Note",slug:"/Product/iEthernet/W5100S/Application-Note/socket_less_command",permalink:"/Product/iEthernet/W5100S/Application-Note/socket_less_command",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Application-Note/SOCKET-less_Command.md",version:"current",frontMatter:{id:"socket_less_command",title:"SOCKET-less Command",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"PPPoE",permalink:"/Product/iEthernet/W5100S/Application-Note/pppoe"},next:{title:"Interrupt",permalink:"/Product/iEthernet/W5100S/Application-Note/interrupt"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Development Environment",id:"development-environment",children:[]},{value:"Application note",id:"application-note",children:[{value:"Revision history",id:"revision-history",children:[]}]},{value:"Reference Code",id:"reference-code",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SLC(SOCKET-less Command)")," can handle ARP and PING Request Packet without SOCKET Open.\nIf ARP and PING Reply Packet are received within the Retransmission Time configured by SLRCR and SLRTR, ARP and PING Interrupt are occurred. "),(0,a.kt)("h2",{id:"development-environment"},"Development Environment"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MCU : Not yet"),(0,a.kt)("li",{parentName:"ul"},"Used program: ")),(0,a.kt)("h2",{id:"application-note"},"Application note"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"revision-history"},"Revision history"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",{class:"header"},(0,a.kt)("th",null,"Version"),(0,a.kt)("th",null,"Date"),(0,a.kt)("th",null,"Download"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",{class:"odd"},(0,a.kt)("td",null,"1.0.0"),(0,a.kt)("td",null,"2018-04-01"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_slc_v100k.pdf",target:"_blank"},"w5100s_an_slc_v100k.pdf"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"/img/products/w5100s/application/w5100s_an_slc_v100e.pdf",target:"_blank"},"w5100s_an_slc_v100e.pdf"))))),(0,a.kt)("h2",{id:"reference-code"},"Reference Code"),(0,a.kt)("hr",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Date"),(0,a.kt)("th",{parentName:"tr",align:null},"Download"),(0,a.kt)("th",{parentName:"tr",align:null},"ETC"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2018-09-03"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"/img/products/w5100s/application/w5100s_evb_an_coide_slc_v100.zip",target:"_blank"},"W5100S","_","EVB","_","AN","_","CoIDE","_","SLC","_","V100.zip")),(0,a.kt)("td",{parentName:"tr",align:null},"Initial Version")))),(0,a.kt)("p",null,"For more information ",(0,a.kt)("a",{parentName:"p",href:"../document"},"W5100s")," chip please\nalso refer to the chip's datasheet:"))}u.isMDXComponent=!0}}]);