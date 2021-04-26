(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{406:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),l=(r(0),r(579)),c={id:"dma",title:"Direct Memory Access (DMA)",date:new Date("2020-06-10T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/dma",id:"Product/iMCU/W7500/Peripherals-internal/dma",isDocsHomePage:!1,title:"Direct Memory Access (DMA)",description:"Introduction",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\dma.md",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/dma",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/dma.md",sidebar:"docs",previous:{title:"DHCP Client for TCP/IP Offload Engine example",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/deladhcpclient"},next:{title:"DNS Client for TCP/IP Offload Engine example",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/dmdnsclient"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"DMA request mapping",id:"dma-request-mapping",children:[]},{value:"DMA arbitration",id:"dma-arbitration",children:[]},{value:"DMA cycle types",id:"dma-cycle-types",children:[]}]}],s={rightToc:i};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"Direct memory access (DMA) is used in order to provide high-speed data transfer between peripherals and memory as well as memory to memory. Data can be quickly moved by DMA without any CPU actions. This keeps CPU resources free for other operations."),Object(l.b)("p",null,"The DMA controller has up to 6 channels in total, each dedicated to managing memory access requests from one or more peripherals. It has an arbiter for handling the priority between DMA requests. For more details, refer to \u201cPrimeCell\xae \u03bcDMA Controller (PL230)\u201d from the Technical Reference Manual"),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"6 channels"),Object(l.b)("li",{parentName:"ul"},"Each channel is connected to dedicated hardware DMA requests and software trigger is also supported on each channel."),Object(l.b)("li",{parentName:"ul"},"Priorities between requests from the DMA channels are software programmable (2 levels consisting of high, default)"),Object(l.b)("li",{parentName:"ul"},"Memory-to-memory transfer (software request only)"),Object(l.b)("li",{parentName:"ul"},"TCP/IP-to-memory transfer (software request only)"),Object(l.b)("li",{parentName:"ul"},"Access to Flash, SRAM, APB and AHB peripherals as source and destination")),Object(l.b)("h2",{id:"functional-description"},"Functional description"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/dma_block_diagram.jpg",alt:null,title:"Figure 1 DMA block diagram"}))),Object(l.b)("h3",{id:"dma-request-mapping"},"DMA request mapping"),Object(l.b)("p",null,"The hardware requests from the peripherals (UART0, UART1, SSP0, SSP1) are simply connected to the DMA. Refer to the below Table Summary of the DMA requests for each channel which lists the DMA requests for each channel."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Channel 1"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Channel 2"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Channel 3"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Channel 4"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Channel 5"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Channel 6"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hardware request"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SSP0_TX ",Object(l.b)("br",null)," SSP0_RX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SSP1_TX ",Object(l.b)("br",null)," SSP1_RX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UART0_TX ",Object(l.b)("br",null)," UART0_RX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UART1_TX ",Object(l.b)("br",null)," UART1_RX"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Channel 5"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Channel 6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Software request"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Support"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Support"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Support"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Support"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Support"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Support")))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Software request is only way to use DMA for memory-to-memory or TCP/IP-to-memory.")),Object(l.b)("h3",{id:"dma-arbitration"},"DMA arbitration"),Object(l.b)("p",null,"The controller can be configured to perform arbitration during a DMA cycle before and after a programmable number of transfers. This reduces the latency for servicing a higher priority channel.\nThe controller uses four bits in the channel control data structure that configures how many AHB bus transfers occur before the controller re-arbitrates. These bits are known as the R_power bits because the value R is raised to the power of two and this determines the arbitration rate. For example, if R = 4, then the arbitration rate is 2^4, which means the controller arbitrates every 16 DMA transfers."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Remark"),": Do not assign a low-priority channel with a large R_power value because this prevents the controller from servicing high-priority requests until it re-arbitrates."),Object(l.b)("p",null,"When N > 2",Object(l.b)("sup",null,"R")," and is not an integer multiple of 2",Object(l.b)("sup",null,"R")," then the controller always performs sequences of 2",Object(l.b)("sup",null,"R")," transfers until N < 2",Object(l.b)("sup",null,"R")," remain to be transferred. The controller performs the remaining N transfers at the end of the DMA cycle.  "),Object(l.b)("h3",{id:"dma-cycle-types"},"DMA cycle types"),Object(l.b)("p",null,"The cycle_ctrl bits in the channel control data structure contril how the DMA controller performs a cycle."),Object(l.b)("p",null,"The controller uses four cycle types described in this manual:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Invalid"),Object(l.b)("li",{parentName:"ul"},"Basic"),Object(l.b)("li",{parentName:"ul"},"Auto-request"),Object(l.b)("li",{parentName:"ul"},"Ping-pong")),Object(l.b)("p",null,"See ARM micro DMA (PL230) documentation for additional cycle types."),Object(l.b)("p",null,"For all cycle types, the controller arbitrates after 2",Object(l.b)("sup",null,"R"),"  DMA transfers. If a low-priority channel is set to a large 2",Object(l.b)("sup",null,"R"),"  value then it prevents all other channels from performing a DMA transfer until the low-priority DMA transfer completes. Therefore, the user must be cautious when setting the R_power bit in the channel_cfg data structure so that the latency for high-priority channels is not significantly increased."),Object(l.b)("h4",{id:"invalid-cycle"},"Invalid cycle"),Object(l.b)("p",null,"After the controller completes a DMA cycle, it sets the cycle type to invalid to prevent it from repeating the same DMA cycle."),Object(l.b)("h4",{id:"basic-cycle"},"Basic cycle"),Object(l.b)("p",null,"In this mode, the controller can be configured to use either the primary or the alternate channel control data structure. After the channel is enabled and the controller receives a request for this channel, the flow for basic cycle is as below:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The controller performs 2",Object(l.b)("sup",null,"R"),"  transfers.\nIf the number of transfers remaining is zero the flow continues at step 3."),Object(l.b)("li",{parentName:"ol"},"The controller arbitrates:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"If a higher-priority channel is requesting service, then the controller services that channel."),Object(l.b)("li",{parentName:"ul"},"If the peripheral or software signals a request to the controller, then it continues at step 1."))),Object(l.b)("li",{parentName:"ol"},"The controller sets dma_done","[c]"," signal for this channel HIGH for one system clock cycle. This indicates to the host processor that the DMA cycle is complete.")),Object(l.b)("h4",{id:"auto-request-cycle"},"Auto request cycle"),Object(l.b)("p",null,"When the controller operates in this mode, it is only necessary to receive a single request to enable the controller to complete the entire DMA cycle. This enables a large data transfer to occur, without significantly increasing the latency for servicing higher priority requests or requiring multiple requests from the processor or peripheral."),Object(l.b)("p",null,"The auto-request cycle is typically used for memory-to-memory requests. In this case, software generates the starting request for the 2^R transfers after setting up the DMA control data structure."),Object(l.b)("p",null,"In this mode, the controller can be configured to use either the primary or the alternate channel control data structure. After the channel is enabled and the controller receives a request for this channel, the flow for the auto-request cycle is as below:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The controller performs 2",Object(l.b)("sup",null,"R"),"  transfers. If the number of transfers remaining is zero the flow continues at step 3."),Object(l.b)("li",{parentName:"ol"},"The controller arbitrates if there are any transfers remaining after 2",Object(l.b)("sup",null,"R"),"  transfers. If the current channel c has the highest priority, the cycle continues at step 1."),Object(l.b)("li",{parentName:"ol"},"The controller sets dma_done","[c]"," signal for this channel HIGH for one system clock cycle. This indicates to the host processor that the DMA cycle is complete.")),Object(l.b)("h4",{id:"pingpong-cycle"},"Pingpong cycle"),Object(l.b)("p",null,"In this mode, the controller performs a DMA cycle using one of the data structures and then performs a DMA cycle using the other data structure. The controller continues to switch between primary and alternate structures until it either reads a data structure that is invalid, or until the user reprograms the cycle_type to basic, or until the host processor disables the channel."),Object(l.b)("p",null,"In ping-pong mode, the user can program or reprogram one of the two channel data structures (primary or alternate) while using the other channel data structure for the active transfer. When a transfer is done, the next transfer can be started immediately using the prepared channel data structure \u2013 provided that a higher priority channel does not require servicing. If the user does not reprogram the channel control data structure not in use for a transfer, the cycle type remains invalid (which is the value at the end of the last transfer using that structure) and the ping-pong cycle completes."),Object(l.b)("p",null,"The ping-pong cycle can be used for transfers to or from peripherals or for memory-to-memory transfers."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/dma_ping_pong.jpg",alt:null,title:"Figure 2 DMA ping pong cycle"}))),Object(l.b)("hr",null))}u.isMDXComponent=!0},579:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(r),h=n,m=b["".concat(c,".").concat(h)]||b[h]||p[h]||l;return r?a.a.createElement(m,o(o({ref:t},s),{},{components:r})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);