(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(516)),o={id:"adc",title:"Analog to Digital Converter(ADC)",date:new Date("2020-06-10T00:00:00.000Z")},l={unversionedId:"Product/iMCU/W7500/Peripherals-internal/adc",id:"Product/iMCU/W7500/Peripherals-internal/adc",isDocsHomePage:!1,title:"Analog to Digital Converter(ADC)",description:"Introduction",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/adc.md",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/adc",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/adc.md"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"ADC is a 12bit analog-to-digital converter. It has up to 9 multiplexed channels allowing to measure signals from 8 externals and 1 internal source.\nADC of various channels can be performed in single mode. The result of the ADC is stored in 12 bit register."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"12bit configuration resolution"),Object(i.b)("li",{parentName:"ul"},"Conversion time : Max 10MHz (Sampling time can be programmable)"),Object(i.b)("li",{parentName:"ul"},"8 channel for external analog inputs",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CH0 : PC_15"),Object(i.b)("li",{parentName:"ul"},"CH1 : PC_14"),Object(i.b)("li",{parentName:"ul"},"CH2 : PC_13"),Object(i.b)("li",{parentName:"ul"},"CH3 : PC_12"),Object(i.b)("li",{parentName:"ul"},"CH4 : PC_11"),Object(i.b)("li",{parentName:"ul"},"CH5 : PC_10"),Object(i.b)("li",{parentName:"ul"},"CH6 : PC_09"),Object(i.b)("li",{parentName:"ul"},"CH7 : PC_08"))),Object(i.b)("li",{parentName:"ul"},"1 channel for internal LDO(1.5v) voltage.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"CH15 : Internal voltage"))),Object(i.b)("li",{parentName:"ul"},"Start of conversion can be initiated by software."),Object(i.b)("li",{parentName:"ul"},"Convert selected inputs once per trigger."),Object(i.b)("li",{parentName:"ul"},"Interrupt generation at the end of conversion.")),Object(i.b)("h2",{id:"functional-description"},"Functional description"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/adc_block_diagram.jpg",alt:null,title:"Figure 1 ADC block diagram"}))),Object(i.b)("p",null,"###Operation ADC with non interrupt\nThe below Figure shows the flowchart of ADC operation with non-interrupt.",Object(i.b)("br",{parentName:"p"}),"\n","ADC can be used as below:  "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"ADC needs to be initialized before operation.",Object(i.b)("br",{parentName:"li"}),"To initialize the ADC, clear the PWD bit first.  "),Object(i.b)("li",{parentName:"ol"},"Select the ADC channel from 0 to 7 and 15 (initial core voltage).  "),Object(i.b)("li",{parentName:"ol"},"Run start ADC conversion by set ADC_SRT bit.  "),Object(i.b)("li",{parentName:"ol"},"Check INT bit to know finish of conversion.  "),Object(i.b)("li",{parentName:"ol"},"If INT bit is high (1), read ADC conversion data.  "),Object(i.b)("li",{parentName:"ol"},"Finally, ADC operation is finished by setting the PWD bit.  ")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/adc_flow_chart.jpg",alt:null,title:"Figure 2 ADC flow chart"}))),Object(i.b)("p",null,"###Operation ADC with interrupt\nThe below Figure shows the flowchart of ADC operation with interrupt.\nOperation is almost the same as the non-interrupt mode except checking INT register to know when enabling interrupt mask bit and conversion is completed. "),Object(i.b)("p",null,'![](/img/products/w7500p/peripheral/adc_flow_chart2.jpg"Figure 3 ADC flow chart2")'),Object(i.b)("hr",null),Object(i.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/Product/iMCU/W7500/Peripherals-internal/illumination_sensor"}),"ADC Illumination example"))))}b.isMDXComponent=!0},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);