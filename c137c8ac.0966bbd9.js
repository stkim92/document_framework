(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{445:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(6),o=(r(0),r(579)),i={id:"system_and_memory",title:"System and Memory",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/iMCU/W7500/system_and_memory",id:"Product/iMCU/W7500/system_and_memory",isDocsHomePage:!1,title:"System and Memory",description:"System architecture",source:"@site/docs\\Product\\iMCU\\W7500\\System_and_Memory.md",permalink:"/docs/Product/iMCU/W7500/system_and_memory",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/System_and_Memory.md",sidebar:"docs",previous:{title:"Pin Assignment",permalink:"/docs/Product/iMCU/W7500/pin_assignment"},next:{title:"Interrupt and Event",permalink:"/docs/Product/iMCU/W7500/interrupt_and_event"}},l=[{value:"System architecture",id:"system-architecture",children:[]},{value:"Memory organization",id:"memory-organization",children:[{value:"Memory map",id:"memory-map",children:[]}]},{value:"System Configuration Controller (SYSCFG)",id:"system-configuration-controller-syscfg",children:[]}],s={rightToc:l};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"system-architecture"},"System architecture"),Object(o.b)("p",null,"Main system consists of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Two masters:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Cortex-M0 core"),Object(o.b)("li",{parentName:"ul"},"uDMAC(PL230, 6 channels)"))),Object(o.b)("li",{parentName:"ul"},"Ten slaves",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Internal BOOT ROM"),Object(o.b)("li",{parentName:"ul"},"Internal SRAM"),Object(o.b)("li",{parentName:"ul"},"Internal Flash Memory"),Object(o.b)("li",{parentName:"ul"},"Two AHB2APB bridge which connects all APB peripherals"),Object(o.b)("li",{parentName:"ul"},"Four AHB dedicated to 16-bit GPIOs"),Object(o.b)("li",{parentName:"ul"},"TCP/IP Hardware core")))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500/w7500_system_architecture.png",alt:"W7500 System Architecture"}))),Object(o.b)("p",null,"AHB-Lite BUS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This bus connects the two masters (Cortex-M0 and uDMAC) and ten AHB\nslaves.")),Object(o.b)("p",null,"Two APB BUSs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"These buses connect Seventeen APB peripherals (Watchdog, two dual\ntimers, pwm, two UARTs, simple UART, two I2Cs, two SSPs, random number\ngenerator, real time clock, 12bits analog digital converter, clock\ncontroller, IO configuration, PAD MUX controller)")),Object(o.b)("h2",{id:"memory-organization"},"Memory organization"),Object(o.b)("p",null,"Program memory, data memory, registers and I/O ports are organized\nwithin the same linear 4-Gbyte address space. The bytes are coded in\nmemory in Little Endian format. The lowest numbered byte in a word is\nconsidered the word\u2019s least significant byte and the highest numbered\nbyte the most significant."),Object(o.b)("h3",{id:"memory-map"},"Memory map"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w7500/memory_map.png",alt:"W7500 Memory map"}))),Object(o.b)("h2",{id:"system-configuration-controller-syscfg"},"System Configuration Controller (SYSCFG)"),Object(o.b)("p",null,"Main purposes of the system configuration controller are the following"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Control of the memory remap feature"),Object(o.b)("li",{parentName:"ul"},"The ability to enable an automatic reset if the system locks up"),Object(o.b)("li",{parentName:"ul"},"Information about the cause of the last reset")))}m.isMDXComponent=!0},579:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(r),p=n,d=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);