(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{366:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var l=r(2),c=r(9),n=(r(0),r(629)),a={},o={id:"Product/iMCU/W7500P/Peripherals-internal/crg",title:"crg",description:"# Clock Reset Generator(CRG)\r",source:"@site/docs\\Product\\iMCU\\W7500P\\Peripherals-internal\\crg.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/crg",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/crg.md"},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[{value:"Reset",id:"reset",children:[]},{value:"Clock",id:"clock",children:[]}]},{value:"Functional description",id:"functional-description",children:[{value:"External Oscillator Clock",id:"external-oscillator-clock",children:[]},{value:"RC oscillator clock",id:"rc-oscillator-clock",children:[]},{value:"PLL",id:"pll",children:[]},{value:"Generated clock",id:"generated-clock",children:[]}]}],b={rightToc:i};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(l.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"clock-reset-generatorcrg"},"Clock Reset Generator(CRG)"),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"CRG is clock reset generator block for W7500 System. It provides every clock/reset for all other block include CPU and peripherals. CRG includes PLL and POR."),Object(n.b)("h2",{id:"features"},"Features"),Object(n.b)("h3",{id:"reset"},"Reset"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Three type of reset \u2013 external reset, Power reset, system reset"),Object(n.b)("li",{parentName:"ul"},"External reset is generated by low level on the RSTn pin (external reset)"),Object(n.b)("li",{parentName:"ul"},"Power reset is generated by Power-on reset (POR)"),Object(n.b)("li",{parentName:"ul"},"Power on reset is generated by POR"),Object(n.b)("li",{parentName:"ul"},"System reset is generated when one of the following events occurs")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Watchdog event"),Object(n.b)("li",{parentName:"ul"},"After remapping"),Object(n.b)("li",{parentName:"ul"},"Software reset (SYSRESETREQ bis in Cortex-M0. Refer to the Cortex-M0 technical reference manual for more detail)")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Power reset sets all registers to their reset values"),Object(n.b)("li",{parentName:"ul"},"System reset sets all registers to their reset values except the CRG block registers and remap register to protect remap value")),Object(n.b)("h3",{id:"clock"},"Clock"),Object(n.b)("p",null,"Two clock sources can be used to drive the system clock."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"External oscillator clock (8MHz ~ 24MHz) (OCLK)"),Object(n.b)("li",{parentName:"ul"},"Internal 8MHz RC oscillator clock (RCLK)")),Object(n.b)("p",null,"One additional clock source"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"32.768KHz low speed external crystal which derives the real time clock.")),Object(n.b)("p",null,"There is a PLL\nOne PLL is integrated"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Input clock range is from 8MHz to 24MHz"),Object(n.b)("li",{parentName:"ul"},"Frequency can be generated by M/N/OD registers. (refer register description)"),Object(n.b)("li",{parentName:"ul"},"Bypass option enabled")),Object(n.b)("p",null,"There are many generated clocks for independent operating with system clock"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"System clock (FCLK) "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(l.a)({parentName:"pre"},{}),"  ADC clock (ADCCLK)\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(l.a)({parentName:"pre"},{}),"  SSP0, SSP1 clock (SSPCLK)\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(l.a)({parentName:"pre"},{}),"  UART0, UART1 clock (UARTCLK)\n"))),Object(n.b)("li",{parentName:"ul"},"Two Timer clocks (TIMCLK0, TIMCLK1)"),Object(n.b)("li",{parentName:"ul"},"8ea PWM clocks (PWMCLK0 - PWMCLK7)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(l.a)({parentName:"pre"},{}),"  Real time clock (RTCCLK)\n"))),Object(n.b)("li",{parentName:"ul"},"WDOG clock (WDOGCLK)"),Object(n.b)("li",{parentName:"ul"},"Random number generator clock (RNGCLK)")),Object(n.b)("p",null,"RNGCLK have only one source (pll output) and no prescaler\nSome of the generated clocks turn off automatically when CPU enters sleep mode."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ADCCLK, RNGCLK")),Object(n.b)("p",null,"Generate two Hardware TCPIP Clocks (MII_RXC, MII_TXC) are from external PADs.",Object(n.b)("br",{parentName:"p"}),"\n","Hardware TCPIP Clocks can be gated by register control.",Object(n.b)("br",{parentName:"p"}),"\n","All clocks generated from CRG can be monitored."),Object(n.b)("h2",{id:"functional-description"},"Functional description"),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/document_frameworkc/img/products/w7500p/peripheral/crg_block_diagram.png",alt:null,title:"CRG block diagram"}))),Object(n.b)("h3",{id:"external-oscillator-clock"},"External Oscillator Clock"),Object(n.b)("p",null,"External oscillator clock (OCLK) can be generated from two possible clock source"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"External crystal/ceramic resonator (8 to 24MHz external oscillator)"),Object(n.b)("li",{parentName:"ul"},"User external clock ")),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/table1.jpg",alt:null,title:"Table1. External oscillator clock sources"}))),Object(n.b)("h3",{id:"rc-oscillator-clock"},"RC oscillator clock"),Object(n.b)("p",null,"RC oscillator clock (RCLK) signal is generated from an internal 8MHz RC oscillator.",Object(n.b)("br",{parentName:"p"}),"\n","RC oscillator has the advantage of providing a clock source at low cost (no external components).",Object(n.b)("br",{parentName:"p"}),"\n","However accuracy of RC oscillator is less than external crystal or ceramic resonator."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Accuracy : 1% at ",Object(n.b)("a",{href:"http://www.codecogs.com/eqnedit.php?latex=T_A",target:"_blank"},Object(n.b)("img",{src:"http://latex.codecogs.com/gif.latex?T_A",title:"T_A"})),"= 25\u2103 (User don\u2019t need to calibration)")),Object(n.b)("h3",{id:"pll"},"PLL"),Object(n.b)("p",null,"The internal PLL can be used to multiply the External Oscillator Clock (OCLK) or RC Oscillator Clock (RCLK). PLL input can be selected by register.\nPLL output clock can be generated by following the equations below."),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/pll_formula.jpg",alt:null,title:"PLL formula.jpg"}))),Object(n.b)("h3",{id:"generated-clock"},"Generated clock"),Object(n.b)("p",null,"Each generated clock source can be selected among 3 clock source as independent by each clock source select register"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"PLL output clock (MCLK)"),Object(n.b)("li",{parentName:"ul"},"Internal 8MHz RC oscillator clock (RCLK)"),Object(n.b)("li",{parentName:"ul"},"External oscillator clock (8MHz ~ 24MHz) (OCLK)")),Object(n.b)("p",null,"Each generated clock has own prescaler which can be select individually by each prescale value register"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"FCLK, ADCCLK, SSPCLK, UARTCLK : 1/1, 1/2, 1/4, 1/8"),Object(n.b)("li",{parentName:"ul"},"TIMCLK0, TIMCLK1, PWMCLK0 \u2013 PWMCLK7, WDOGCLK : 1/1, 1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128")))}u.isMDXComponent=!0},629:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var l=r(0),c=r.n(l);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,c=function(e,t){if(null==e)return{};var r,l,c={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var b=c.a.createContext({}),u=function(e){var t=c.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},s=function(e){var t=u(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(l.forwardRef)((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,a=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=l,O=s["".concat(a,".").concat(d)]||s[d]||p[d]||n;return r?c.a.createElement(O,o({ref:t},b,{components:r})):c.a.createElement(O,o({ref:t},b))}));function O(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,a=new Array(n);a[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var b=2;b<n;b++)a[b]=r[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);