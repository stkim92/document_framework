(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[17290],{3905:function(t,n,e){"use strict";e.d(n,{kt:function(){return o}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=a.createContext({}),d=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),o=d(e),g=r,N=o["".concat(u,".").concat(g)]||o[g]||m[g]||l;return e?a.createElement(N,i(i({ref:n},k),{},{components:e})):a.createElement(N,i({ref:n},k))}));function o(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=e[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},37679:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=e(74034),r=e(79973),l=(e(67294),e(3905)),i={id:"interrupt_and_event",title:"Interrupt and Event",date:new Date("2020-04-03T00:00:00.000Z")},p={unversionedId:"Product/iMCU/W7500/interrupt_and_event",id:"Product/iMCU/W7500/interrupt_and_event",isDocsHomePage:!1,title:"Interrupt and Event",description:"Introduction W7500 contains",source:"@site/docs/Product/iMCU/W7500/Interrupt_and_Event.md",sourceDirName:"Product/iMCU/W7500",slug:"/Product/iMCU/W7500/interrupt_and_event",permalink:"/Product/iMCU/W7500/interrupt_and_event",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Interrupt_and_Event.md",version:"current",frontMatter:{id:"interrupt_and_event",title:"Interrupt and Event",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"System and Memory",permalink:"/Product/iMCU/W7500/system_and_memory"},next:{title:"Power Supply",permalink:"/Product/iMCU/W7500/power_supply"}},u=[{value:"Introduction W7500 contains",id:"introduction-w7500-contains",children:[]},{value:"Interrupt assignments",id:"interrupt-assignments",children:[]},{value:"Event",id:"event",children:[]}],d={toc:u};function m(t){var n=t.components,e=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction-w7500-contains"},"Introduction W7500 contains"),(0,l.kt)("p",null,"interrupt service and event service as below"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"25 interrupt request (IRQ) lines"),(0,l.kt)("li",{parentName:"ul"},"One NonMaskable Interrupt(NMI)"),(0,l.kt)("li",{parentName:"ul"},"One event signal")),(0,l.kt)("h2",{id:"interrupt-assignments"},"Interrupt assignments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"IRQ/NMI"),(0,l.kt)("th",{parentName:"tr",align:null},"Device"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Address"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NMI"),(0,l.kt)("td",{parentName:"tr",align:null},"Watchdog timer"),(0,l.kt)("td",{parentName:"tr",align:null},"Watchdog timer interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0008")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","0","]"),(0,l.kt)("td",{parentName:"tr",align:null},"SSP0"),(0,l.kt)("td",{parentName:"tr",align:null},"SSP0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0040")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","1","]"),(0,l.kt)("td",{parentName:"tr",align:null},"SSP1"),(0,l.kt)("td",{parentName:"tr",align:null},"SSP1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0044")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","2","]"),(0,l.kt)("td",{parentName:"tr",align:null},"UART0"),(0,l.kt)("td",{parentName:"tr",align:null},"UART0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0048")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","3","]"),(0,l.kt)("td",{parentName:"tr",align:null},"UART1"),(0,l.kt)("td",{parentName:"tr",align:null},"UART1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","004C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","4","]"),(0,l.kt)("td",{parentName:"tr",align:null},"UART2"),(0,l.kt)("td",{parentName:"tr",align:null},"UART2 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0050")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","5","]"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0054")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","6","]"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C1"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0058")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","7","]"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO0"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","005c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","8","]"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO1"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0060")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","9","]"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO2"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO2 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0064")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","10","]"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO3"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO3 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0068")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","11","]"),(0,l.kt)("td",{parentName:"tr",align:null},"DMA"),(0,l.kt)("td",{parentName:"tr",align:null},"DMA channel 1 ","~"," channel 5 interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","006C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","12","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Dualtimer0"),(0,l.kt)("td",{parentName:"tr",align:null},"Dualtimer0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0070")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","13","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Dualtimer1"),(0,l.kt)("td",{parentName:"tr",align:null},"Dualtimer1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0074")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","14","]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM0"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0078")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","15","]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM1"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","007C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","16","]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM2"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM2 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","17","]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM3"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM3 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0084")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","18","]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM4"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM4 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0088")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","19","]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM5"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM5 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","008C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","20","]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM6"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM6 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0090")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","21","]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM7"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM7 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0094")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","22","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","0098")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","23","]"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC acquisition end interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","009C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","24","]"),(0,l.kt)("td",{parentName:"tr",align:null},"TCPIP"),(0,l.kt)("td",{parentName:"tr",align:null},"TCPIP global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","00A0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","25","]"),(0,l.kt)("td",{parentName:"tr",align:null},"EXT","_","INT"),(0,l.kt)("td",{parentName:"tr",align:null},"External pin interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","00A4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","26","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","00A8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","27","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","00AC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","28","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","00B0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","29","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","00B4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","30","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000","_","00B8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[","31","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_00BC")))),(0,l.kt)("h2",{id:"event"},"Event"),(0,l.kt)("p",null,"W7500 is able to handle internal events in order to wake up the core(WFE). The wakeup event can be generated by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When DMA process finished")))}m.isMDXComponent=!0}}]);