(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),c=(r(0),r(547)),i={id:"ref_schematic",title:"Ref. Schematic",date:new Date("2020-04-03T00:00:00.000Z")},o={id:"Product/iEthernet/W5500/ref_schematic",title:"Ref. Schematic",description:"## Content",source:"@site/docs/Product/iEthernet/W5500/Ref._Schematic.md",permalink:"/document_framework/docs/Product/iEthernet/W5500/ref_schematic",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5500/Ref._Schematic.md",sidebar:"someSidebar",previous:{title:"Datasheet",permalink:"/document_framework/docs/Product/iEthernet/W5500/datasheet"},next:{title:"TCP",permalink:"/document_framework/docs/Product/iEthernet/W5500/Application/tcp"}},p=[{value:"Content",id:"content",children:[]},{value:"External Transformer Type",id:"external-transformer-type",children:[]},{value:"RJ45 with Transformer Type",id:"rj45-with-transformer-type",children:[]},{value:"RJ45 with integrated Transformer and connected CT",id:"rj45-with-integrated-transformer-and-connected-ct",children:[]},{value:"Recommended RJ45 using W5500",id:"recommended-rj45-using-w5500",children:[]}],b={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"content"},"Content"),Object(c.b)("h1",{id:"reference-schematic"},"Reference Schematic"),Object(c.b)("h2",{id:"external-transformer-type"},"External Transformer Type"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/wiznet_schematic/ethernet_chip/w5500_sch_v110_use_trans_.pdf",alt:"W5500 Ref.Schematic - External\nTransformer"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_sch_v110_use_trans_.png",alt:"W5500 Ref.Schematic (External\nTransformer)"}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"rj45-with-transformer-type"},"RJ45 with Transformer Type"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/wiznet_schematic/ethernet_chip/w5500_sch_v110_use_mag_.pdf",alt:"W5500 Ref.Schematic - RJ45 with\nTransformer"})),"\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_sch_v110_use_mag_.png",alt:"W5500 Reference Schematic (RJ45 with\nTransformer)"}))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"rj45-with-integrated-transformer-and-connected-ct"},"RJ45 with integrated Transformer and connected CT"),Object(c.b)("p",null,"For using connected CT signals inside the Transformer or inside RJ45 the\nmatching network (2x 50R) of the RX+/- signals must be isolated from CT\n(3.3V). For that isolation we need C23 and C24.",Object(c.b)("br",{parentName:"p"}),"\n","Please refer to the following schematic:"),Object(c.b)("p",null,"\\<WRAP center round tip 80%",">"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"C23 and C24 must be added. Otherwise, W5500 won't operate well.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"And by connected center tap, Power dissipation may be raised.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"So, you'd better use a MAGJACK without connected center tap except\nthe case that you have to use one with connected center tap."))),Object(c.b)("p",null,"\\</WRAP",">","\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_schematic-connected-cts_003.jpg",alt:"w5500_schematic-connected-cts_003.jpg"})),Object(c.b)("br",{parentName:"p"}),"\n","The RJ45 from UDE (RB1-125BAG1A) is used in many of our ",Object(c.b)("strong",{parentName:"p"},"W5100")," and\n",Object(c.b)("strong",{parentName:"p"},"W7100A")," related Modules."),Object(c.b)("hr",null),Object(c.b)("h2",{id:"recommended-rj45-using-w5500"},"Recommended RJ45 using W5500"),Object(c.b)("h4",{id:"external-transformer"},"External Transformer"),Object(c.b)("p",null,"-"," H1102NL from Pulse\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:01.h1102nl_h325.pdf"}),"datasheet"),Object(c.b)("br",{parentName:"p"}),"\n","-"," LCZ3A1CB from CETUS\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:02.lcz3a1cb.pdf"}),"datasheet"),"  "),Object(c.b)("h4",{id:"rj45-with-integrated-transformer"},"RJ45 with integrated Transformer"),Object(c.b)("p",null,"-"," J1B121ZCCD from CETUS\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:1.j1b121zccd-v0-101115.pdf"}),"datasheet"),Object(c.b)("br",{parentName:"p"}),"\n","-"," J1B1211CCD from CETUS (used in ","*","1)\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:2.j1b1211ccd.pdf"}),"datasheet"),Object(c.b)("br",{parentName:"p"}),"\n","-"," RB1-1D5B8K1A from UDE\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:3.rb1-1d5b8k1a_287-00_.pdf"}),"datasheet"),Object(c.b)("br",{parentName:"p"}),"\n","-"," RB1-125BAG1A from UDE (used in ","*","2)\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:rb1-125bag1a_111-00_.pdf"}),"datasheet"),Object(c.b)("br",{parentName:"p"}),"\n","-"," J0011D21BNL from Pulse\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w5500:4.j0011d21bnl.pdf"}),"datasheet"),"  "),Object(c.b)("p",null,"*","1) we use the J1B1211CCD from CETUS in our\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"/products/w5500/w5500_evb/start"}),"W5500-EVB")),",\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"/products/wiz550io/start"}),"WIZ550io")),",\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"/products/wiz550s2e/start"}),"WIZ550S2E"))," and\n",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"strong"},{href:"/products/wiz550web/start"}),"WIZ550web"))," Modules.",Object(c.b)("br",{parentName:"p"}),"\n","*","2) we use the RB1-125BAG1A from UDE in most of our our ",Object(c.b)("strong",{parentName:"p"},"W5100")," &\n",Object(c.b)("strong",{parentName:"p"},"W7100A")," related Plug-In and Serial-to-Ethernet (S2E) Modules.",Object(c.b)("br",{parentName:"p"}),"\n","-","---"))}s.isMDXComponent=!0},547:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return l}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},m=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,l=m["".concat(i,".").concat(u)]||m[u]||d[u]||c;return r?a.a.createElement(l,o({ref:t},b,{components:r})):a.a.createElement(l,o({ref:t},b))}));function l(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<c;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);