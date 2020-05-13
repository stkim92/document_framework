(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{311:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(9),o=(r(0),r(530)),i={id:"system_and_memory",title:"System and Memory",date:new Date("2020-04-03T00:00:00.000Z")},c={id:"Product/iMCU/W7500P/system_and_memory",title:"System and Memory",description:"# System and Memory overview\r",source:"@site/docs\\Product\\iMCU\\W7500P\\System_and_Memory.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/system_and_memory",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/System_and_Memory.md",sidebar:"someSidebar",previous:{title:"Pin Assignment",permalink:"/document_framework/docs/Product/iMCU/W7500P/pin_assignment"},next:{title:"Interrupt and Event",permalink:"/document_framework/docs/Product/iMCU/W7500P/interrupt_and_event"}},l=[{value:"System architecture",id:"system-architecture",children:[]},{value:"Memory organization",id:"memory-organization",children:[{value:"Memory map",id:"memory-map",children:[]}]},{value:"System Configuration Controller (SYSCFG)",id:"system-configuration-controller-syscfg",children:[]}],m={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"system-and-memory-overview"},"System and Memory overview"),Object(o.b)("h2",{id:"system-architecture"},"System architecture"),Object(o.b)("p",null,"Main system consists of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ethernet:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"IP101G"))),Object(o.b)("li",{parentName:"ul"},"Two masters:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Cortex-M0 core"),Object(o.b)("li",{parentName:"ul"},"uDMAC(PL230, 6 channels)"))),Object(o.b)("li",{parentName:"ul"},"Ten slaves",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Internal BOOT ROM"),Object(o.b)("li",{parentName:"ul"},"Internal SRAM"),Object(o.b)("li",{parentName:"ul"},"Internal Flash Memory"),Object(o.b)("li",{parentName:"ul"},"Two AHB2APB bridge which connects all APB peripherals"),Object(o.b)("li",{parentName:"ul"},"Four AHB dedicated to 16-bit GPIOs"),Object(o.b)("li",{parentName:"ul"},"TCP/IP Hardware core")))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/w7500p_system_architecture.jpg",alt:"w7500p_system_architecture"}))),Object(o.b)("p",null,"AHB-Lite BUS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This bus connects the two masters (Cortex-M0 and uDMAC) and ten AHB slaves.")),Object(o.b)("p",null,"Two APB BUSs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"These buses connect Seventeen APB peripherals (Watchdog, two dual timers, pwm, two UARTs, simple UART, two I2Cs, two SSPs, random number generator, real time clock, 12bits analog digital converter, clock controller, IO configuration, PAD MUX controller)")),Object(o.b)("h2",{id:"memory-organization"},"Memory organization"),Object(o.b)("p",null,"Program memory, data memory, registers and I/O ports are organized within the same linear 4-Gbyte address space.\nThe bytes are coded in memory in Little Endian format. The lowest numbered byte in a word is considered the word\u2019s least significant byte and the highest numbered byte the most significant."),Object(o.b)("h3",{id:"memory-map"},"Memory map"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/memory_map.png",alt:"w7500_memory_map"}))),Object(o.b)("h2",{id:"system-configuration-controller-syscfg"},"System Configuration Controller (SYSCFG)"),Object(o.b)("p",null,"Main purposes of the system configuration controller are the following"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Control of the memory remap feature"),Object(o.b)("li",{parentName:"ul"},"The ability to enable an automatic reset if the system locks up"),Object(o.b)("li",{parentName:"ul"},"Information about the cause of the last reset")))}s.isMDXComponent=!0},530:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=a.a.createContext({}),s=function(e){var t=a.a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=n,d=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return r?a.a.createElement(d,c({ref:t},m,{components:r})):a.a.createElement(d,c({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<o;m++)i[m]=r[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);