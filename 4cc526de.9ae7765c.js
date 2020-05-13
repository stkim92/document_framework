(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{286:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),i=(r(0),r(608)),o={},c={id:"Product/iMCU/W7500P/Peripherals-internal/wdt",title:"wdt",description:"# Watchdog Timer(WDT)",source:"@site/docs/Product/iMCU/W7500P/Peripherals-internal/wdt.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/wdt",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/wdt.md"},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Clock",id:"clock",children:[]},{value:"Interrupt and reset request",id:"interrupt-and-reset-request",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"watchdog-timerwdt"},"Watchdog Timer(WDT)"),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The watchdog is based on a 32-bit down-counter that is initialized from the Reload Register, WDTLoad. The watchdog generates a regular interrupt depending on a programmed value. The counter decreases by one on each positive clock edge of watchdog clock."),Object(i.b)("p",null,"The watchdog monitors the interrupt and asserts a reset request signal when the counter reaches 0 and the counter is stopped. On the next enabled watchdog clock edge, the counter is reloaded from the WDTLoad Register and the countdown sequence continues. The watchdog reasserts the reset signal if the interrupt is not cleared by the time the counter next reaches 0."),Object(i.b)("p",null,"The watchdog applies a reset to a system in the event of a software failure to provide a way to recover from software crashes. Users can enable or disable the watchdog unit as required."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"32-bit down counter."),Object(i.b)("li",{parentName:"ul"},"Internally resets chip if not periodically reloaded."),Object(i.b)("li",{parentName:"ul"},"The watchdog timer has lock register for to prevent rogue software from disabling the watchdog timer functionality."),Object(i.b)("li",{parentName:"ul"},"The watchdog timer clock(WDTCLK) and system clock(PCLK) are synchronous.")),Object(i.b)("h2",{id:"functional-description"},"Functional description"),Object(i.b)("h3",{id:"clock"},"Clock"),Object(i.b)("p",null,"The watchdog timer contains PCLK and WDTCLK clock inputs.\nPCLK is the main APB system clock and is used by the register interface."),Object(i.b)("h3",{id:"interrupt-and-reset-request"},"Interrupt and reset request"),Object(i.b)("p",null,"An interrupt is generated when the counter reaches 0 and is only cleared when the interrupt clear register is accessed.\nThe register holds the value until the interrupt is cleared."),Object(i.b)("p",null,"Reset request is asserted when the counter reaches 0 repeatedly and is not reprogrammed.\nUsers can mask interrupts by writing 0 to the Interrupt Enable bit in the control register. Users can read the following from status registers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Raw interrupt status, before masking."),Object(i.b)("li",{parentName:"ul"},"Final interrupt status, after masking.")),Object(i.b)("p",null,"The below Figure shows Watchdog timer operation flow diagram"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/watchdog_timer_operation_flow_diagram.jpg",alt:null,title:"Figure 1 Watchdog timer operation flow diagram"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/wdtreset"}),"WDTReset example"))))}u.isMDXComponent=!0},608:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,b=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return r?a.a.createElement(b,c({ref:t},s,{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);