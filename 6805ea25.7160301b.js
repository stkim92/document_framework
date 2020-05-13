(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{342:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(9),l=(r(0),r(623)),c={id:"power_supply",title:"Power Supply",date:new Date("2020-04-03T00:00:00.000Z")},a={id:"Product/iMCU/W7500P/power_supply",title:"Power Supply",description:"## Introduction\r",source:"@site/docs\\Product\\iMCU\\W7500P\\Power_Supply.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/power_supply",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Power_Supply.md",sidebar:"someSidebar",previous:{title:"Interrupt and Event",permalink:"/document_framework/docs/Product/iMCU/W7500P/interrupt_and_event"},next:{title:"Booting Sequence",permalink:"/document_framework/docs/Product/iMCU/W7500P/booting_sequence"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Voltage regulator",id:"voltage-regulator",children:[]},{value:"Power supply supervisor",id:"power-supply-supervisor",children:[]},{value:"Low power modes",id:"low-power-modes",children:[{value:"Sleep mode vs. Deep sleep mode",id:"sleep-mode-vs-deep-sleep-mode",children:[]},{value:"Peripheral clock gating",id:"peripheral-clock-gating",children:[]}]}],i={rightToc:u};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"W7500P embeds a voltage regulator in order to supply the internal 1.5V digital power domain."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Require a 2.7V ~ 5.5V operating supply voltage (VDD)"),Object(l.b)("li",{parentName:"ul"},"ADC ref voltage is same as VDD")),Object(l.b)("h2",{id:"voltage-regulator"},"Voltage regulator"),Object(l.b)("p",null,"The voltage regulator is always enabled after Reset and works on in only one mode."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In Run mode, the regulator supplies full power to the 1.5V domain."),Object(l.b)("li",{parentName:"ul"},"There is no power down or sleep mode.")),Object(l.b)("h2",{id:"power-supply-supervisor"},"Power supply supervisor"),Object(l.b)("p",null,"W7500 has an integrated reset (POR) circuit which is always active and ensure proper operation above a threshold of 0.6V"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The POR monitors only the VDD supply voltage. During the startup phase VDD must arrive first and be greater than or equal to 0.6V")),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/por_reset_waveform.jpg",alt:"Figure 1 POR reset waveform"}))),Object(l.b)("h2",{id:"low-power-modes"},"Low power modes"),Object(l.b)("p",null,"W7500P is in RUN mode after a system or power reset. There are two low power modes to save power when the CPU does not need to be kept running. These modes are useful for instances like when the CPU is waiting for an external interrupt. Please note that there is no power-off mode for W7500P."),Object(l.b)("p",null,"The device features two low power modes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Sleep mode"),Object(l.b)("li",{parentName:"ul"},"Deep Sleep mode")),Object(l.b)("p",null,"Additionally, the power consumption can be reducing by following method:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"User can slow down the system clocks"),Object(l.b)("li",{parentName:"ul"},"User can block the clocks to the peripherals while they are unused.")),Object(l.b)("h3",{id:"sleep-mode-vs-deep-sleep-mode"},"Sleep mode vs. Deep sleep mode"),Object(l.b)("p",null,"W7500P has two kinds of sleep modes. One is Sleep mode and the other is Deep sleep mode.\nTwo of them are almost the same except the clock gated peripherals kinds. "),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("th",null,"Mode"),Object(l.b)("th",null,"Entry"),Object(l.b)("th",null,"Wakeup"),Object(l.b)("th",null,"Effect-on-clocks")),Object(l.b)("tr",null,Object(l.b)("td",{rowspan:"2"},"Sleep mode"),Object(l.b)("td",null,"DEEPSLEEP = 0",Object(l.b)("br",null),"Enable WFI"),Object(l.b)("td",null,"Any interrupt"),Object(l.b)("td",{rowspan:"2"},"CPU Clock OFF",Object(l.b)("br",null),"APB Bus Clock ON",Object(l.b)("br",null),"AHB Bus Clock ON",Object(l.b)("br",null),"Memory Clock ON")),Object(l.b)("tr",null,Object(l.b)("td",null,"DEEPSLEEP = 0",Object(l.b)("br",null),"Enable WFE"),Object(l.b)("td",null,"Wakeup event")),Object(l.b)("tr",null,Object(l.b)("td",{rowspan:"2"},"Deep Sleep mode"),Object(l.b)("td",null,"DEEPSLEEP = 1",Object(l.b)("br",null),"Enable WFI"),Object(l.b)("td",null,"Any interrupt"),Object(l.b)("td",{rowspan:"2"},"CPU Clock OFF",Object(l.b)("br",null),"APB Bus Clock OFF",Object(l.b)("br",null),"AHB Bus Clock OFF",Object(l.b)("br",null),"Memory Clock OFF")),Object(l.b)("tr",null,Object(l.b)("td",null,"DEEPSLEEP = 1",Object(l.b)("br",null),"Enable WFE"),Object(l.b)("td",null,"Wakeup event"))),Object(l.b)("h3",{id:"peripheral-clock-gating"},"Peripheral clock gating"),Object(l.b)("p",null,"In Run mode, individual clocks can be stopped at any time to reduce power.\nPeripheral clock gating is controlled by the CRG block.\nBelow is the list of clocks which can be gating in CRG block."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ADC clock (ADCCLK)"),Object(l.b)("li",{parentName:"ul"},"SSP0, SSP1 clock (SSPCLK)"),Object(l.b)("li",{parentName:"ul"},"UART0, UART1 clock (UARTCLK)"),Object(l.b)("li",{parentName:"ul"},"Two Timer clocks (TIMCLK0, TIMCLK1)"),Object(l.b)("li",{parentName:"ul"},"8 PWM clocks (PWMCLK0 ~ PWMCLK7)"),Object(l.b)("li",{parentName:"ul"},"WDOG clock (WDOGCLK)"),Object(l.b)("li",{parentName:"ul"},"Random number generator clock (RNGCLK)")))}b.isMDXComponent=!0},623:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},p=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||s[d]||l;return r?o.a.createElement(m,a({ref:t},i,{components:r})):o.a.createElement(m,a({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var i=2;i<l;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);