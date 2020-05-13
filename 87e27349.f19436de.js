(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{392:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),l=r(9),o=(r(0),r(620)),c={id:"power_supply",title:"Power Supply",date:new Date("2020-04-03T00:00:00.000Z")},a={id:"Product/iMCU/W7500/power_supply",title:"Power Supply",description:"# Power supply",source:"@site/docs/Product/iMCU/W7500/Power_Supply.md",permalink:"/document_framework/docs/Product/iMCU/W7500/power_supply",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Power_Supply.md",sidebar:"someSidebar",previous:{title:"Interrupt and Event",permalink:"/document_framework/docs/Product/iMCU/W7500/interrupt_and_event"},next:{title:"Booting Sequence",permalink:"/document_framework/docs/Product/iMCU/W7500/booting_sequence"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Voltage regulator",id:"voltage-regulator",children:[]},{value:"Power supply supervisor",id:"power-supply-supervisor",children:[]},{value:"Low power modes",id:"low-power-modes",children:[{value:"Sleep mode vs. Deep sleep mode",id:"sleep-mode-vs-deep-sleep-mode",children:[]},{value:"Peripheral clock gating",id:"peripheral-clock-gating",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"power-supply"},"Power supply"),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"W7500 embeds a voltage regulator in order to supply the internal 1.5V digital power domain."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Require a 2.7V ~ 5.5V operating supply voltage (VDD)"),Object(o.b)("li",{parentName:"ul"},"ADC ref voltage is same as VDD")),Object(o.b)("h2",{id:"voltage-regulator"},"Voltage regulator"),Object(o.b)("p",null,"The voltage regulator is always enabled after Reset and works on in only one mode."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In Run mode, the regulator supplies full power to the 1.5V domain."),Object(o.b)("li",{parentName:"ul"},"There is no power down or sleep mode.")),Object(o.b)("h2",{id:"power-supply-supervisor"},"Power supply supervisor"),Object(o.b)("p",null,"W7500 has an integrated reset (POR) circuit which is always active and ensure proper operation above a threshold of 0.6V"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The POR monitors only the VDD supply voltage. During the startup phase VDD must arrive first and be greater than or equal to 0.6V")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/por_reset_waveform.jpg",alt:"Figure 1 POR reset waveform"}))),Object(o.b)("h2",{id:"low-power-modes"},"Low power modes"),Object(o.b)("p",null,"W7500 is in RUN mode after a system or power reset. There are two low power modes to save power when the CPU does not need to be kept running. These modes are useful for instances like when the CPU is waiting for an external interrupt. Please note that there is no power-off mode for W7500."),Object(o.b)("p",null,"The device features two low power modes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sleep mode"),Object(o.b)("li",{parentName:"ul"},"Deep Sleep mode")),Object(o.b)("p",null,"Additionally, the power consumption can be reducing by following method:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"User can slow down the system clocks"),Object(o.b)("li",{parentName:"ul"},"User can block the clocks to the peripherals while they are unused.")),Object(o.b)("h3",{id:"sleep-mode-vs-deep-sleep-mode"},"Sleep mode vs. Deep sleep mode"),Object(o.b)("p",null,"W7500 has two kinds of sleep modes. One is Sleep mode and the other is Deep sleep mode.\nTwo of them are almost the same except the clock gated peripherals kinds. "),Object(o.b)("table",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Mode"),Object(o.b)("th",null,"Entry"),Object(o.b)("th",null,"Wakeup"),Object(o.b)("th",null,"Effect-on-clocks")),Object(o.b)("tr",null,Object(o.b)("td",{rowspan:"2"},"Sleep mode"),Object(o.b)("td",null,"DEEPSLEEP = 0",Object(o.b)("br",null),"Enable WFI"),Object(o.b)("td",null,"Any interrupt"),Object(o.b)("td",{rowspan:"2"},"CPU Clock OFF",Object(o.b)("br",null),"APB Bus Clock ON",Object(o.b)("br",null),"AHB Bus Clock ON",Object(o.b)("br",null),"Memory Clock ON")),Object(o.b)("tr",null,Object(o.b)("td",null,"DEEPSLEEP = 0",Object(o.b)("br",null),"Enable WFE"),Object(o.b)("td",null,"Wakeup event")),Object(o.b)("tr",null,Object(o.b)("td",{rowspan:"2"},"Deep Sleep mode"),Object(o.b)("td",null,"DEEPSLEEP = 1",Object(o.b)("br",null),"Enable WFI"),Object(o.b)("td",null,"Any interrupt"),Object(o.b)("td",{rowspan:"2"},"CPU Clock OFF",Object(o.b)("br",null),"APB Bus Clock OFF",Object(o.b)("br",null),"AHB Bus Clock OFF",Object(o.b)("br",null),"Memory Clock OFF")),Object(o.b)("tr",null,Object(o.b)("td",null,"DEEPSLEEP = 1",Object(o.b)("br",null),"Enable WFE"),Object(o.b)("td",null,"Wakeup event"))),Object(o.b)("h3",{id:"peripheral-clock-gating"},"Peripheral clock gating"),Object(o.b)("p",null,"In Run mode, individual clocks can be stopped at any time to reduce power.\nPeripheral clock gating is controlled by the CRG block.\nBelow is the list of clocks which can be gating in CRG block."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ADC clock (ADCCLK)"),Object(o.b)("li",{parentName:"ul"},"SSP0, SSP1 clock (SSPCLK)"),Object(o.b)("li",{parentName:"ul"},"UART0, UART1 clock (UARTCLK)"),Object(o.b)("li",{parentName:"ul"},"Two Timer clocks (TIMCLK0, TIMCLK1)"),Object(o.b)("li",{parentName:"ul"},"8 PWM clocks (PWMCLK0 ~ PWMCLK7)"),Object(o.b)("li",{parentName:"ul"},"WDOG clock (WDOGCLK)"),Object(o.b)("li",{parentName:"ul"},"Random number generator clock (RNGCLK)")))}p.isMDXComponent=!0},620:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return O}));var n=r(0),l=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},i=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),i=p(r),d=n,O=i["".concat(c,".").concat(d)]||i[d]||s[d]||o;return r?l.a.createElement(O,a({ref:t},b,{components:r})):l.a.createElement(O,a({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var b=2;b<o;b++)c[b]=r[b];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);