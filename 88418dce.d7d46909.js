(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{391:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(9),a=(r(0),r(617)),o={},c={id:"Product/iMCU/W7500P/Peripherals-internal/systick",title:"systick",description:"# System tick timer",source:"@site/docs/Product/iMCU/W7500P/Peripherals-internal/systick.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/systick",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/systick.md"},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"system-tick-timer"},"System tick timer"),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"system tick timer(SysTick) is part of the ARM Cortex-M0 core"),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("p",null,"Simple 24bit timer.\nClocked internally by the system clock"),Object(a.b)("h2",{id:"functional-description"},"Functional description"),Object(a.b)("p",null,"The SysTick timer is an integral part of Cortex-M0. The SysTick timer is intended to generated a fixed 10 millisecond interrupt for use by an operating system or other system management software.\nSince the SysTick timer is a part of the Cortex-M0, it facilitates porting of software by\nproviding a standard timer that is available on Cortex-M0 based devices. The SysTick\ntimer can be used for : "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An RTOS tick timer which fires at a programmable rate (for example 100 Hz) and invokes a SysTick routine."),Object(a.b)("li",{parentName:"ul"},"A high-speed alarm timer using the core clock."),Object(a.b)("li",{parentName:"ul"},"A simple counter. Software can use this to measure time to completion and time used."),Object(a.b)("li",{parentName:"ul"},"An internal clock source control based on missing/meeting durations. The COUNTFLAG bit-field in the control and status register can be used to determine if an action completed within a set duration, as part of a dynamic clock management control loop.")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/delay"}),"Delay example"))))}u.isMDXComponent=!0},617:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return r?i.a.createElement(b,c({ref:t},s,{components:r})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);