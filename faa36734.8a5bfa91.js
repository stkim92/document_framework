(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{561:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(582)),l={id:"exti",title:"External Interrupt (EXTI)",date:new Date("2020-06-10T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/exti",id:"Product/iMCU/W7500/Peripherals-internal/exti",isDocsHomePage:!1,title:"External Interrupt (EXTI)",description:"Introduction",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\exti.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/exti",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/exti.md",sidebar:"docs",previous:{title:"I2C and M24CXX EEPROM communication example",permalink:"/Product/iMCU/W7500/Peripherals-internal/eeprom"},next:{title:"Embedded Flash memory",permalink:"/Product/iMCU/W7500/Peripherals-internal/flash"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],p={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Each functional pads are connected to the external interrupt(EXTINT) source."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All functional pads can be used as an external interrupt source regardless of any set of pad function.  "),Object(i.b)("li",{parentName:"ul"},"External Interrupt controller has the following functions and can be controlled by registers."),Object(i.b)("li",{parentName:"ul"},"Interrupt mask (enable or disable, default : disable)"),Object(i.b)("li",{parentName:"ul"},"Interrupt polarity (rising or falling, default : rising)")),Object(i.b)("h2",{id:"functional-description"},"Functional description"),Object(i.b)("p",null,"All pads are connected to the control register individually. (External interrupt mask register and External Interrupt polarity register)",Object(i.b)("br",{parentName:"p"}),"\n","External interrupt working as following expression:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each pad interrupt = Interrupt mask & (Interrupt polarity ^ Pad input)"),Object(i.b)("li",{parentName:"ul"},"EXTINT = any Each pad interrupt")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/external_interrupt_diagram.jpg",alt:null,title:"Figure1 External Interrupt diagram"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/led_toggle"}),"EXTI LED_Toggle example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/Product/iMCU/W7500/Peripherals-internal/sleep"}),"EXTI Sleep example"))))}u.isMDXComponent=!0},582:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,m=s["".concat(l,".").concat(b)]||s[b]||d[b]||i;return r?a.a.createElement(m,o(o({ref:t},p),{},{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);