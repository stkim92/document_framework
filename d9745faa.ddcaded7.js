(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{473:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return i}));var n=a(2),r=a(9),b=(a(0),a(530)),l={id:"interrupt_and_event",title:"Interrupt and Event",date:new Date("2020-04-03T00:00:00.000Z")},c={id:"Product/iMCU/W7500/interrupt_and_event",title:"Interrupt and Event",description:"# Interrupt and Events ",source:"@site/docs/Product/iMCU/W7500/Interrupt_and_Event.md",permalink:"/document_framework/docs/Product/iMCU/W7500/interrupt_and_event",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Interrupt_and_Event.md",sidebar:"someSidebar",previous:{title:"System and Memory",permalink:"/document_framework/docs/Product/iMCU/W7500/system_and_memory"},next:{title:"Power Supply",permalink:"/document_framework/docs/Product/iMCU/W7500/power_supply"}},O=[{value:"Introduction W7500 contains",id:"introduction-w7500-contains",children:[]},{value:"Interrupt assignments",id:"interrupt-assignments",children:[]},{value:"Event",id:"event",children:[]}],j={rightToc:O};function i(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(n.a)({},j,a,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interrupt-and-events"},"Interrupt and Events"),Object(b.b)("h2",{id:"introduction-w7500-contains"},"Introduction W7500 contains"),Object(b.b)("p",null,"interrupt service and event service as below"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"25 interrupt request (IRQ) lines"),Object(b.b)("li",{parentName:"ul"},"One NonMaskable Interrupt(NMI)"),Object(b.b)("li",{parentName:"ul"},"One event signal")),Object(b.b)("h2",{id:"interrupt-assignments"},"Interrupt assignments"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"IRQ/NMI"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Device"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Address"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NMI"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Watchdog timer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Watchdog timer interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0008")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","0","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SSP0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SSP0 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0040")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","1","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SSP1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SSP1 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0044")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","2","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UART0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UART0 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0048")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","3","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UART1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UART1 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","004C")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","4","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UART2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UART2 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0050")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","5","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I2C0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I2C0 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0054")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","6","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I2C1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"I2C1 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0058")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","7","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO0 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","005c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","8","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO1 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0060")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","9","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO2 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0064")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","10","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO3 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0068")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","11","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DMA"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DMA channel 1 ","~"," channel 5 interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","006C")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","12","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dualtimer0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dualtimer0 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0070")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","13","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dualtimer1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dualtimer1 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0074")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","14","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM0 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0078")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","15","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM1 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","007C")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","16","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM2 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0080")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","17","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM3 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0084")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","18","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM4"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM4 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0088")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","19","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM5 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","008C")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","20","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM6 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0090")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","21","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM7"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PWM7 global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0094")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","22","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","0098")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","23","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ADC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ADC acquisition end interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","009C")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","24","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TCPIP"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TCPIP global interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","00A0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","25","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"EXT","_","INT"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"External pin interrupt"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","00A4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","26","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","00A8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","27","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","00AC")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","28","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","00B0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","29","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","00B4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","30","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000","_","00B8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IRQ","[","31","]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0x0000_00BC")))),Object(b.b)("h2",{id:"event"},"Event"),Object(b.b)("p",null,"W7500 is able to handle internal events in order to wake up the core(WFE). The wakeup event can be generated by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"When DMA process finished")))}i.isMDXComponent=!0},530:function(t,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},b=Object.keys(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(n=0;n<b.length;n++)a=b[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var j=r.a.createContext({}),i=function(t){var e=r.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):c({},e,{},t)),a},p=function(t){var e=i(t.components);return r.a.createElement(j.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=Object(n.forwardRef)((function(t,e){var a=t.components,n=t.mdxType,b=t.originalType,l=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),p=i(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||b;return a?r.a.createElement(m,c({ref:e},j,{components:a})):r.a.createElement(m,c({ref:e},j))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var b=a.length,l=new Array(b);l[0]=d;var c={};for(var O in e)hasOwnProperty.call(e,O)&&(c[O]=e[O]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var j=2;j<b;j++)l[j]=a[j];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);