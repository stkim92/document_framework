(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[16171],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return m},kt:function(){return g}});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var u=r.createContext({}),d=function(t){var n=r.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m=function(t){var n=d(t.components);return r.createElement(u.Provider,{value:n},t.children)},o={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(e),g=a,N=k["".concat(u,".").concat(g)]||k[g]||o[g]||l;return e?r.createElement(N,i(i({ref:n},m),{},{components:e})):r.createElement(N,i({ref:n},m))}));function g(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var l=e.length,i=new Array(l);i[0]=k;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var d=2;d<l;d++)i[d]=e[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}k.displayName="MDXCreateElement"},80338:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var r=e(22122),a=e(19756),l=(e(67294),e(3905)),i=["components"],p={id:"interrupt_and_event",title:"Interrupt and Events",date:new Date("2020-04-03T00:00:00.000Z")},u=void 0,d={unversionedId:"Product/iMCU/W7500P/interrupt_and_event",id:"Product/iMCU/W7500P/interrupt_and_event",isDocsHomePage:!1,title:"Interrupt and Events",description:"Introduction",source:"@site/docs/Product/iMCU/W7500P/Interrupt_and_Event.md",sourceDirName:"Product/iMCU/W7500P",slug:"/Product/iMCU/W7500P/interrupt_and_event",permalink:"/Product/iMCU/W7500P/interrupt_and_event",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500P/Interrupt_and_Event.md",version:"current",frontMatter:{id:"interrupt_and_event",title:"Interrupt and Events",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"System and Memory overview",permalink:"/Product/iMCU/W7500P/system_and_memory"},next:{title:"Power Supply",permalink:"/Product/iMCU/W7500P/power_supply"}},m=[{value:"Introduction",id:"introduction",children:[]},{value:"Interrupt assignments",id:"interrupt-assignments",children:[]},{value:"Event",id:"event",children:[]}],o={toc:m};function k(t){var n=t.components,e=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"W7500P contains interrupt service and event service as below"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"25 interrupt request (IRQ) lines"),(0,l.kt)("li",{parentName:"ul"},"One NonMaskable Interrupt(NMI)"),(0,l.kt)("li",{parentName:"ul"},"One event signal")),(0,l.kt)("h2",{id:"interrupt-assignments"},"Interrupt assignments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"IRQ/NMI"),(0,l.kt)("th",{parentName:"tr",align:null},"Device"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Address"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NMI"),(0,l.kt)("td",{parentName:"tr",align:null},"Watchdog timer"),(0,l.kt)("td",{parentName:"tr",align:null},"Watchdog timer interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0008")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[0]"),(0,l.kt)("td",{parentName:"tr",align:null},"SSP0"),(0,l.kt)("td",{parentName:"tr",align:null},"SSP0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0040")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[1]"),(0,l.kt)("td",{parentName:"tr",align:null},"SSP1"),(0,l.kt)("td",{parentName:"tr",align:null},"SSP1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0044")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[2]"),(0,l.kt)("td",{parentName:"tr",align:null},"UART0"),(0,l.kt)("td",{parentName:"tr",align:null},"UART0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0048")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[3]"),(0,l.kt)("td",{parentName:"tr",align:null},"UART1"),(0,l.kt)("td",{parentName:"tr",align:null},"UART1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_004C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[4]"),(0,l.kt)("td",{parentName:"tr",align:null},"UART2"),(0,l.kt)("td",{parentName:"tr",align:null},"UART2 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0050")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[5]"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C0"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0054")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[6]"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C1"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0058")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[7]"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO0"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_005c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[8]"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO1"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0060")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[9]"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO2"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO2 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0064")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[10]"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO3"),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO3 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0068")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[11]"),(0,l.kt)("td",{parentName:"tr",align:null},"DMA"),(0,l.kt)("td",{parentName:"tr",align:null},"DMA channel 1 ~ channel 5 interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_006C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[12]"),(0,l.kt)("td",{parentName:"tr",align:null},"Dualtimer0"),(0,l.kt)("td",{parentName:"tr",align:null},"Dualtimer0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0070")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[13]"),(0,l.kt)("td",{parentName:"tr",align:null},"Dualtimer1"),(0,l.kt)("td",{parentName:"tr",align:null},"Dualtimer1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0074")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[14]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM0"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM0 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0078")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[15]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM1"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM1 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_007C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[16]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM2"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM2 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0080")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[17]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM3"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM3 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0084")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[18]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM4"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM4 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0088")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[19]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM5"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM5 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_008C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[20]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM6"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM6 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0090")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[21]"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM7"),(0,l.kt)("td",{parentName:"tr",align:null},"PWM7 global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0094")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[22]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_0098")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[23]"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC acquisition end interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_009C")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[24]"),(0,l.kt)("td",{parentName:"tr",align:null},"TCPIP"),(0,l.kt)("td",{parentName:"tr",align:null},"TCPIP global interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_00A0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[25]"),(0,l.kt)("td",{parentName:"tr",align:null},"EXT_INT"),(0,l.kt)("td",{parentName:"tr",align:null},"External pin interrupt"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_00A4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[26]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_00A8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[27]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_00AC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[28]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_00B0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[29]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_00B4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[30]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_00B8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IRQ","[31]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0x0000_00BC")))),(0,l.kt)("h2",{id:"event"},"Event"),(0,l.kt)("p",null,"W7500 is able to handle internal events in order to wake up the core(WFE). The wakeup event can be generated by"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When DMA process finished")))}k.isMDXComponent=!0}}]);