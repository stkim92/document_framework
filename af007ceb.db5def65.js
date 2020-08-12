(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{362:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return a})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return o}));var l=n(2),r=n(6),b=(n(0),n(516)),c={id:"padcon",title:"Pad Controller(PADCON)",date:new Date("2020-04-03T00:00:00.000Z")},a={unversionedId:"Product/iMCU/W7500/Peripherals-internal/padcon",id:"Product/iMCU/W7500/Peripherals-internal/padcon",isDocsHomePage:!1,title:"Pad Controller(PADCON)",description:"Introduction",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\padcon.md",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/padcon",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/padcon.md"},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[]}],i={rightToc:u};function o(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(b.b)("wrapper",Object(l.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"introduction"},"Introduction"),Object(b.b)("p",null,"Pads of W7500 are controllable. User can control pad\u2019s characteristic."),Object(b.b)("h2",{id:"features"},"Features"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"W7500 have digital I/O pads and digital/analog mux I/O pads"),Object(b.b)("li",{parentName:"ul"},"Controllable characteristics of pad are pull-up, pull-down, driving strength, input enable and CMOS/Schmitt trigger input buffer"),Object(b.b)("li",{parentName:"ul"},"Each pad can be control individually by register.")),Object(b.b)("h2",{id:"functional-description"},"Functional description"),Object(b.b)("p",null,"The below Figure shows the function schematic of digital I/O pad of W7500."),Object(b.b)("p",null,Object(b.b)("img",Object(l.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/schem_digital_iopad.jpg",alt:null,title:"Figure 1 function schematic of digital I/O pad"}))),Object(b.b)("p",null,"The below Figure shows the function schematic of digital/analog mux IO pad of W7500"),Object(b.b)("p",null,Object(b.b)("img",Object(l.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/schem_a_d_iopad.jpg",alt:null,title:"Figure 2 function schematic of analog/digital mux I/O pad"}))),Object(b.b)("p",null,"Initials of Pad diagram is same as below."),Object(b.b)("p",null,"P - PAD",Object(b.b)("br",{parentName:"p"}),"\n","YA \u2013 Analog Input (connect to ADC input)",Object(b.b)("br",{parentName:"p"}),"\n","Y \u2013 Digital Input",Object(b.b)("br",{parentName:"p"}),"\n","IE \u2013 Input buffer enable "),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("th",{colspan:"2"},"Condition"),Object(b.b)("th",null,"A"),Object(b.b)("th",null,"Y"),Object(b.b)("th",null,"P")),Object(b.b)("tr",null,Object(b.b)("td",{rowspan:"2"},"Input buffer enable",Object(b.b)("br",null),"(IE =1)"),Object(b.b)("td",null,"Output mode"),Object(b.b)("td",null,"OUT"),Object(b.b)("td",null,"OUT"),Object(b.b)("td",null,"OUT")),Object(b.b)("tr",null,Object(b.b)("td",null,"Input mode"),Object(b.b)("td",null,"No use"),Object(b.b)("td",null,"IN"),Object(b.b)("td",null,"IN")),Object(b.b)("tr",null,Object(b.b)("td",{rowspan:"2"},"Input buffer enable",Object(b.b)("br",null),"(IE = 0)"),Object(b.b)("td",null,"Output mode"),Object(b.b)("td",null,"OUT"),Object(b.b)("td",null,"Low(0)"),Object(b.b)("td",null,"OUT")),Object(b.b)("tr",null,Object(b.b)("td",null,"Input mode"),Object(b.b)("td",null,"No use"),Object(b.b)("td",null,"IN"),Object(b.b)("td",null,"IN"))),Object(b.b)("p",null,"CS \u2013 CMOS/Schmitt trigger input buffer select",Object(b.b)("br",{parentName:"p"}),"\n","PU \u2013 Pull-up enable",Object(b.b)("br",{parentName:"p"}),"\n","A \u2013 Digital Output",Object(b.b)("br",{parentName:"p"}),"\n","DS \u2013 Driving strength select"),Object(b.b)("table",null,Object(b.b)("tr",null,Object(b.b)("th",{colspan:"2"},"Condition"),Object(b.b)("th",{colspan:"2"},"Rise/Fall Time(nSec)"),Object(b.b)("th",{colspan:"2"},"Propagation Delay(nSec)")),Object(b.b)("tr",null,Object(b.b)("td",null,"Driving Strength"),Object(b.b)("td",null,"Capacitance loading"),Object(b.b)("td",null,"Min"),Object(b.b)("td",null,"Max"),Object(b.b)("td",null,"Min"),Object(b.b)("td",null,"Max")),Object(b.b)("tr",null,Object(b.b)("td",{rowspan:"2"},"High",Object(b.b)("br",null),"(DS = 1)"),Object(b.b)("td",null,"25pF"),Object(b.b)("td",null,"4"),Object(b.b)("td",null,"18"),Object(b.b)("td",null,"7"),Object(b.b)("td",null,"27")),Object(b.b)("tr",null,Object(b.b)("td",null,"100pF"),Object(b.b)("td",null,"11"),Object(b.b)("td",null,"53"),Object(b.b)("td",null,"11"),Object(b.b)("td",null,"44")),Object(b.b)("tr",null,Object(b.b)("td",{rowspan:"2"},"Low",Object(b.b)("br",null),"(DS = 0)"),Object(b.b)("td",null,"25pF"),Object(b.b)("td",null,"1"),Object(b.b)("td",null,"8"),Object(b.b)("td",null,"4"),Object(b.b)("td",null,"16")),Object(b.b)("tr",null,Object(b.b)("td",null,"100pF"),Object(b.b)("td",null,"4"),Object(b.b)("td",null,"23"),Object(b.b)("td",null,"7"),Object(b.b)("td",null))),Object(b.b)("p",null,"PD \u2013 Pull-down enable  "),Object(b.b)("p",null,"User can set pad condition with IE, CS, PU/PD, DS by register.",Object(b.b)("br",{parentName:"p"}),"\n","And pads are can be controlled individually. "))}o.isMDXComponent=!0},516:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return j}));var l=n(0),r=n.n(l);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},b=Object.keys(t);for(l=0;l<b.length;l++)n=b[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);for(l=0;l<b.length;l++)n=b[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=r.a.createContext({}),o=function(t){var e=r.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=o(t.components);return r.a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},O=r.a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,b=t.originalType,c=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),d=o(n),O=l,j=d["".concat(c,".").concat(O)]||d[O]||p[O]||b;return n?r.a.createElement(j,a(a({ref:e},i),{},{components:n})):r.a.createElement(j,a({ref:e},i))}));function j(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var b=n.length,c=new Array(b);c[0]=O;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:l,c[1]=a;for(var i=2;i<b;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);