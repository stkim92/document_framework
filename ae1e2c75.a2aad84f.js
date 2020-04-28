(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),i=n(9),a=(n(0),n(259)),o={id:"design_guide",title:"Design Guide",date:new Date("2020-04-03T00:00:00.000Z")},c={id:"Design Guide/design_guide",title:"Design Guide",description:"## Content\r",source:"@site/docs\\Design Guide\\Design_Guide.md",permalink:"/docs/Design Guide/design_guide",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Design Guide/Design_Guide.md",sidebar:"someSidebar",previous:{title:"ioShield-L",permalink:"/docs/Product/Open Source Hardware/ioshield_l"},next:{title:"Hardware Design Guide",permalink:"/docs/Design Guide/hardware_design_guide"}},l=[{value:"Content",id:"content",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Design Guide List",id:"design-guide-list",children:[]},{value:"Limitation Note",id:"limitation-note",children:[]}],u={rightToc:l};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("h1",{id:"design-guide"},"Design Guide"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"You must refer to the Design Guide to make a product using WIZnet's\nchips. The Ethernet signal is a very sensitive signal for fast\nswitching. In addition, this Design Guide will help you design Hardware\nusing WIZnet's chips.: easily, quickly, accurately"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"design-guide-list"},"Design Guide List"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"Hardware_Design_Guide.md"}),"Hardware Design Guide")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"Package_Information.md"}),"Package Information")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"IR_Reflow_Profile.md"}),"IR Reflow profile")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"Eagle_CAD_Library_of_WIZnet_Products.md"}),"Eagle CAD Library of WIZnet Products"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"limitation-note"},"Limitation Note"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\uc601\ubb38 - ",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"document_framework/img/design_guide/limitation_note_-_arp_problem_in_the_nlb_environment_-_english_0312_.pdf",alt:"document_framework/img/design_guide/limitation_note_-_arp_problem_in_the_nlb_environment_-_english_0312_.pdf"}))),Object(a.b)("li",{parentName:"ul"},"\ud55c\uae00 - ",Object(a.b)("img",Object(r.a)({parentName:"li"},{src:"/document_framework/img/design_guide/limitation_note_-_arp_problem_in_the_nlb_environment_-_korean_0312_.pdf",alt:"document_framework/img/design_guide/limitation_note_-_arp_problem_in_the_nlb_environment_-_korean_0312_.pdf"})))),Object(a.b)("hr",null))}d.isMDXComponent=!0},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),d=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(o,".").concat(p)]||s[p]||b[p]||a;return n?i.a.createElement(m,c({ref:t},u,{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);