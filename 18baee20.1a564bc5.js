(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),c=(n(0),n(530)),b={id:"dma",title:"DMA",date:new Date("2020-04-03T00:00:00.000Z")},i={id:"Product/iEthernet/W5100S/Application-Note/dma",title:"DMA",description:"## Content",source:"@site/docs/Product/iEthernet/W5100S/Application-Note/DMA.md",permalink:"/document_framework/docs/Product/iEthernet/W5100S/Application-Note/dma",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5100S/Application-Note/DMA.md",sidebar:"someSidebar",previous:{title:"Interrupt",permalink:"/document_framework/docs/Product/iEthernet/W5100S/Application-Note/interrupt"},next:{title:"All Pages",permalink:"/document_framework/docs/Product/iEthernet/W5100S/all_pages"}},l=[{value:"Content",id:"content",children:[]},{value:"Development Environment",id:"development-environment",children:[{value:"Revision history",id:"revision-history",children:[]}]},{value:"Reference Code",id:"reference-code",children:[{value:"Revision history",id:"revision-history-1",children:[]}]},{value:"Comparison table",id:"comparison-table",children:[]}],o={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"content"},"Content"),Object(c.b)("h1",{id:"overview"},"Overview"),Object(c.b)("p",null,"W5100S-EVB support DMA(Direct Memory Addressing) of SPI Mode. To operate at its maximum speed, the SPI needs to be fed with the data for transmission and the data received on the Rx buffer should be read to avoid overrun."),Object(c.b)("h2",{id:"development-environment"},"Development Environment"),Object(c.b)("hr",null),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"MCU : STM32F103VC "),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"System Clock : 72MHz,  SPI2 clock : 18MHz(Max clock))"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Used program: Atollic True STUDIO ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"W5100S Setting"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Socket size : 8K, No Delay Ack ")),Object(c.b)("h2",Object(a.a)({parentName:"li"},{id:"application-note"}),"Application note"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"revision-history"},"Revision history"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Download"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2018-12-14"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("img",Object(a.a)({parentName:"td"},{src:"/document_framework/img/products/w5100s/w5100s_evb/w5100s_an_dma_v100k.pdf",alt:"W5100S_AN_DMA_V100K.pdf"})))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2019-04-16"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("img",Object(a.a)({parentName:"td"},{src:"/document_framework/img/products/w5100s/application/w5100s_an_dma_v100e.pdf",alt:"W5100S_AN_DMA_V100E.pdf"})))))),Object(c.b)("h2",{id:"reference-code"},"Reference Code"),Object(c.b)("hr",null),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Note")," : DMA reference code is designed for W5100S. But if you use the\nMCU of STM32F1xx,the other chips(W5100, W5100S, W5200, W5300, W5500) can\nuse this application."),Object(c.b)("h3",{id:"revision-history-1"},"Revision history"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Version"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Download"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"ETC"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1.0.0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2018-12-14"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("img",Object(a.a)({parentName:"td"},{src:"https://github.com/Wiznet/W5100S-EVB",alt:"https://github.com/Wiznet/W5100S-EVB"}))),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Initial Version")))),Object(c.b)("h2",{id:"comparison-table"},"Comparison table"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Opearation Peripherals"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Figure"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Opearation Peripherals"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Figure"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SPI"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("img",Object(a.a)({parentName:"td"},{src:"/document_framework/img/products/w5100s/w5100s_evb/spi_0.8mhz_8k_nd_2.jpg",alt:null}))),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SPI","_","DMA"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("img",Object(a.a)({parentName:"td"},{src:"/document_framework/img/products/w5100s/w5100s_evb/spi_dma_6.4mhz_8k_nd.jpg",alt:null})))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BUS"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("img",Object(a.a)({parentName:"td"},{src:"/document_framework/img/products/w5100s/w5100s_evb/bus_3.7mhz_8k_nd.jpg",alt:null}))),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BUS","_","DMA"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("img",Object(a.a)({parentName:"td"},{src:"/document_framework/img/products/w5100s/w5100s_evb/bus_dma_9.6mhz_8k_nd.jpg",alt:null})))))))}p.isMDXComponent=!0},530:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},m=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,O=m["".concat(b,".").concat(u)]||m[u]||d[u]||c;return n?r.a.createElement(O,i({ref:t},o,{components:n})):r.a.createElement(O,i({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<c;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);