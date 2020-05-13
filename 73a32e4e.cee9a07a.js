(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{362:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),i=r(9),a=(r(0),r(608)),o={},l={id:"Product/iMCU/W7500/Peripherals-internal/dualtimer",title:"dualtimer",description:"# Dual Timer\r",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\dualtimer.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/dualtimer",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/dualtimer.md"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Clock and clock enable",id:"clock-and-clock-enable",children:[]},{value:"Timer size",id:"timer-size",children:[]},{value:"Prescaler",id:"prescaler",children:[]},{value:"Repetition mode",id:"repetition-mode",children:[]},{value:"Interrupt",id:"interrupt",children:[]},{value:"Operation",id:"operation",children:[]},{value:"How to set the dual timers",id:"how-to-set-the-dual-timers",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],u={rightToc:c};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"dual-timer"},"Dual Timer"),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The dual timer consists two programmable 32-bit or 16-bit Free-running counters(FRCs) that can generate interrupts when they reach 0. There are two dual timers and 4 FRCs. One dual timers has one interrupt handler, resulting in two interrupts of timers. Also one dual timer has one clock but two clock enable signals. Users can select one repetition modes one-shot or wrapping mode, and wrapping mode consists free-running and periodic mode. Two FRCs are one set so two FRCs has one clock, reset, and interrupt but each FRC has an individual clock enable. "),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"One dual timer has two Free-Running Counters(FRCs)."),Object(a.b)("li",{parentName:"ul"},"One dual timer has one interrupt handler and one clock."),Object(a.b)("li",{parentName:"ul"},"One dual timer has two clock enable signals."),Object(a.b)("li",{parentName:"ul"},"There are 2 dual timers."),Object(a.b)("li",{parentName:"ul"},"A 32-bit or a 16-bit down counter."),Object(a.b)("li",{parentName:"ul"},"One of the following repetition modes: one-shot and wrapping mode."),Object(a.b)("li",{parentName:"ul"},"One of the following wrapping modes: Free-running and periodic mode."),Object(a.b)("li",{parentName:"ul"},"There is prescaler that can divide down the clock rate by 1, 16, or 256.")),Object(a.b)("p",null,'![](/document_framework/img/products/w7500p/peripheral/dualtimer_block_diagram.jpg"Figure 1 DualTimer block diagram")'),Object(a.b)("h2",{id:"functional-description"},"Functional description"),Object(a.b)("h3",{id:"clock-and-clock-enable"},"Clock and clock enable"),Object(a.b)("p",null,"The dual timers contain PCLK and TIMERCLK clock inputs. PCLK is the main APB system clock and is used by the register interface. TIMERCLK is the input to the prescale units and the decrementing counters. PCLK and TIMERCLK are synchronous."),Object(a.b)("p",null,"The dual timers consist two programmable 32-bit Free-Running Counters(FRC) which operate independently. The two timers operate from one TIMERCLK but Each FRC is controlled independently by individual clock enable."),Object(a.b)("h3",{id:"timer-size"},"Timer size"),Object(a.b)("p",null,"User can select FRC as 16-bit or 32-bit by using control register."),Object(a.b)("h3",{id:"prescaler"},"Prescaler"),Object(a.b)("p",null,"The timer has a prescaler that can divide down the enabled clock rate by 1, 16 or 256."),Object(a.b)("h3",{id:"repetition-mode"},"Repetition mode"),Object(a.b)("p",null,"There are two repetition mode: one-shot and wrapping mode.",Object(a.b)("br",{parentName:"p"}),"\n","Wrapping mode has two mode: free-running and periodic mode."),Object(a.b)("h4",{id:"one-shot-mode"},"One-shot mode"),Object(a.b)("p",null,"The counter generates an interrupt once. When the counter reaches 0, it halts until users reprogram it. Users can do this as below:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clear the one-shot count bit in the control register, in which case the count proceeds according to the selection of wrapping mode(free-running or periodic mode)."),Object(a.b)("li",{parentName:"ul"},"Writing a new value to the Load Value register.")),Object(a.b)("h4",{id:"wrapping-mode"},"Wrapping mode"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Free-running mode")),Object(a.b)("p",null,"The counter wraps after reaching its zero value, and continues to count down from the maximum value. This is the default mode."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Periodic mode")),Object(a.b)("p",null,"The counter generates an interrupt at a constant interval, reloading the original value after wrapping past zero."),Object(a.b)("h3",{id:"interrupt"},"Interrupt"),Object(a.b)("p",null,"An interrupt is generated when the counter reaches 0 and is only cleared when the interrupt clear register is accessed.",Object(a.b)("br",{parentName:"p"}),"\n","The register holds the value until the interrupt is cleared."),Object(a.b)("p",null,"Users can mask interrupts by writing 0 to the Interrupt Enable bit in the control register.",Object(a.b)("br",{parentName:"p"}),"\n","Users can read the following from status registers:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Raw interrupt status before masking."),Object(a.b)("li",{parentName:"ul"},"Final interrupt status after masking.")),Object(a.b)("p",null,"The interrupts from the individual timers after masking are logically ORed into a combined interrupt."),Object(a.b)("h3",{id:"operation"},"Operation"),Object(a.b)("p",null,"The operation of each timer is identical. The timer is loaded by writing to the load register and counts down to 0 if enabled. When a counter is already running, writing to the load register causes the counter to immediately restart at the new value. Writing to the background load value has no effect on the current count. In periodic mode, the counter continues to decrease to 0 and restart from the new load value."),Object(a.b)("p",null,"An interrupt is generated when 0 is reached. Users can clear the interrupt by writing to the clear register. If users select one-shot mode, the counter halts when it reaches 0 until users deselect one-shot mode or write a new load value."),Object(a.b)("p",null,"Otherwise, after reaching a zero count, if the timer is operating in free-running mode, it continues to decrease from its maximum value. If users select periodic mode, the timer reloads the count value from the load register and continues to decrease. In this mode, the counter effectively generates a periodic interrupt."),Object(a.b)("h3",{id:"how-to-set-the-dual-timers"},"How to set the dual timers"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/dualtimer_flow_chart.jpg",alt:null,title:"Figure 2 The DualTimer setting flow"}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/timerrun"}),"Dual Timer Timerun example"))))}s.isMDXComponent=!0},608:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},d=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),b=n,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||a;return r?i.a.createElement(m,l({ref:t},u,{components:r})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);