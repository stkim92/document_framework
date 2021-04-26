(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{566:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),i=(r(0),r(579)),c=r(582),o={id:"asg200",title:"Azure Sphere Guardian ASG200",date:new Date("2020-08-28T00:00:00.000Z")},u={unversionedId:"Product/Azure-Sphere/asg200",id:"Product/Azure-Sphere/asg200",isDocsHomePage:!1,title:"Azure Sphere Guardian ASG200",description:"Overview",source:"@site/docs\\Product\\Azure-Sphere\\ASG200.md",permalink:"/docs/Product/Azure-Sphere/asg200",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Azure-Sphere/ASG200.md",sidebar:"docs",previous:{title:"Certification",permalink:"/docs/Product/Wi-Fi-Module/WizFi630S/certificate"},next:{title:"Azure Sphere Guardian ASG210",permalink:"/docs/Product/Azure-Sphere/asg210"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Resources",id:"resources",children:[{value:"Software Checklist",id:"software-checklist",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"WIZnet Azure Sphere Guardian 200 (ASG200) is a product which provides Ethernet interfaces to both Public and Private Network. The general Azure Sphere Module supports only one ethernet Interface interacting with Azure Sphere Pluton OS. But ASG200 has an additional Ethernet interface which WIZnet Hardwired TCP/IP is embedded on, so that a legacy device having only ethernet interface can send data to the cloud server in Azure Sphere Security system."),Object(i.b)("p",null,"East to apply in brown field system, ASG200 supports a plenty of network application protocol libraries. ASG200 receives data from brown field system in private network and parses it. Then the data is secured and sent to Cloud server by ASG200."),Object(i.b)("img",{src:Object(c.a)("img/AzureSphere/ASG200.png"),width:"50%",title:"ASG200",alt:"ASG200"}),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Data transfer between the private network and the public network"),Object(i.b)("li",{parentName:"ul"},"Certificate management",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"By console"),Object(i.b)("li",{parentName:"ul"},"By Azure Sphere Service"),Object(i.b)("li",{parentName:"ul"},"By Configuration tool thru Ethernet (Under development)"))),Object(i.b)("li",{parentName:"ul"},"Support TLS session in private network"),Object(i.b)("li",{parentName:"ul"},"Auto switching between Wi-Fi and Ethernet for public networks optionally"),Object(i.b)("li",{parentName:"ul"},"Support USB interface for debug and programming")),Object(i.b)("h2",{id:"specification"},"Specification"),Object(i.b)("img",{src:Object(c.a)("img/AzureSphere/ASG200_spec_table.png"),width:"90%",title:"ASG200",alt:"ASG200"}),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("h3",{id:"software-checklist"},"Software Checklist"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ASG200 Application"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Github Repository"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ASG200_App"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/WIZnet-Azure-Sphere/ASG200_App"}),"Github Link"))))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Library and Samples"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Github Repository"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ASG200_m4_Software"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/WIZnet-Azure-Sphere/mt3620_m4_software"}),"Github Link"))))))}p.isMDXComponent=!0},579:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||i;return r?a.a.createElement(f,o(o({ref:t},l),{},{components:r})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},580:function(e,t,r){"use strict";var n=r(0),a=r(20);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},582:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var n=r(580),a=r(584);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,o=void 0!==c&&c,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(o)return t+r;var b=!r.startsWith(t)?t+r.replace(/^\//,""):r;return l?e+b:b}(i,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},584:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);