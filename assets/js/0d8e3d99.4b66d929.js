(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[17145],{3905:function(e,t,r){"use strict";r.d(t,{kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=i,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70838:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(74034),i=r(79973),a=(r(67294),r(3905)),o={id:"wdt",title:"Watchdog Timer (WDT)",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/wdt",id:"Product/iMCU/W7500/Peripherals-internal/wdt",isDocsHomePage:!1,title:"Watchdog Timer (WDT)",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/wdt.md",sourceDirName:"Product/iMCU/W7500/Peripherals-internal",slug:"/Product/iMCU/W7500/Peripherals-internal/wdt",permalink:"/Product/iMCU/W7500/Peripherals-internal/wdt",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/wdt.md",version:"current",frontMatter:{id:"wdt",title:"Watchdog Timer (WDT)",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Universal Asynchronous Receive Transmit (UART)",permalink:"/Product/iMCU/W7500/Peripherals-internal/uart"},next:{title:"WDT Reset example",permalink:"/Product/iMCU/W7500/Peripherals-internal/wdtreset"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Clock",id:"clock",children:[]},{value:"Interrupt and reset request",id:"interrupt-and-reset-request",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],s={toc:c};function u(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The watchdog is based on a 32-bit down-counter that is initialized from the Reload Register, WDTLoad. The watchdog generates a regular interrupt depending on a programmed value. The counter decreases by one on each positive clock edge of watchdog clock."),(0,a.kt)("p",null,"The watchdog monitors the interrupt and asserts a reset request signal when the counter reaches 0 and the counter is stopped. On the next enabled watchdog clock edge, the counter is reloaded from the WDTLoad Register and the countdown sequence continues. The watchdog reasserts the reset signal if the interrupt is not cleared by the time the counter next reaches 0."),(0,a.kt)("p",null,"The watchdog applies a reset to a system in the event of a software failure to provide a way to recover from software crashes. Users can enable or disable the watchdog unit as required."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"32-bit down counter."),(0,a.kt)("li",{parentName:"ul"},"Internally resets chip if not periodically reloaded."),(0,a.kt)("li",{parentName:"ul"},"The watchdog timer has lock register for to prevent rogue software from disabling the watchdog timer functionality."),(0,a.kt)("li",{parentName:"ul"},"The watchdog timer clock(WDTCLK) and system clock(PCLK) are synchronous.")),(0,a.kt)("h2",{id:"functional-description"},"Functional description"),(0,a.kt)("h3",{id:"clock"},"Clock"),(0,a.kt)("p",null,"The watchdog timer contains PCLK and WDTCLK clock inputs.\nPCLK is the main APB system clock and is used by the register interface."),(0,a.kt)("h3",{id:"interrupt-and-reset-request"},"Interrupt and reset request"),(0,a.kt)("p",null,"An interrupt is generated when the counter reaches 0 and is only cleared when the interrupt clear register is accessed.\nThe register holds the value until the interrupt is cleared."),(0,a.kt)("p",null,"Reset request is asserted when the counter reaches 0 repeatedly and is not reprogrammed.\nUsers can mask interrupts by writing 0 to the Interrupt Enable bit in the control register. Users can read the following from status registers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Raw interrupt status, before masking."),(0,a.kt)("li",{parentName:"ul"},"Final interrupt status, after masking.")),(0,a.kt)("p",null,"The below Figure shows Watchdog timer operation flow diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(98523).Z,title:"Figure 1 Watchdog timer operation flow diagram"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Product/iMCU/W7500/Peripherals-internal/wdtreset"},"WDTReset example"))))}u.isMDXComponent=!0},98523:function(e,t,r){"use strict";t.Z=r.p+"assets/images/watchdog_timer_operation_flow_diagram-1d28c6fe0341af64122e447830fce1c6.jpg"}}]);