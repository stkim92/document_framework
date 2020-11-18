(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{238:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),c=(n(0),n(584)),a={id:"booting_sequence",title:"Booting Sequence",date:new Date("2020-04-03T00:00:00.000Z")},i={unversionedId:"Product/iMCU/W7500/booting_sequence",id:"Product/iMCU/W7500/booting_sequence",isDocsHomePage:!1,title:"Booting Sequence",description:"W7500 has three different boot modes that can be selected through the BOOT pin and TEST pin.",source:"@site/docs\\Product\\iMCU\\W7500\\Booting_Sequence.md",permalink:"/docs/Product/iMCU/W7500/booting_sequence",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Booting_Sequence.md",sidebar:"docs",previous:{title:"Power Supply",permalink:"/docs/Product/iMCU/W7500/power_supply"},next:{title:"Electrical Characteristics",permalink:"/docs/Product/iMCU/W7500/electrical_characteristics_w7500"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"W7500 has three different boot modes that can be selected through the BOOT pin and TEST pin."),Object(c.b)("table",{class:"tg"},Object(c.b)("tr",null,Object(c.b)("th",{class:"tg-huh2",colspan:"2"},"Mode Selection"),Object(c.b)("th",{class:"tg-s6z2",rowspan:"2"},"Mode"),Object(c.b)("th",{class:"tg-huh2",rowspan:"2"},"Aliasing")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"TEST"),Object(c.b)("td",{class:"tg-s6z2"},"BOOT")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0"),Object(c.b)("td",{class:"tg-s6z2"},"0"),Object(c.b)("td",{class:"tg-s6z2"},"APP"),Object(c.b)("td",{class:"tg-031e"},"User code execute in Main Flash memory")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0"),Object(c.b)("td",{class:"tg-s6z2"},"1"),Object(c.b)("td",{class:"tg-s6z2"},"ISP"),Object(c.b)("td",{class:"tg-031e"},"In this mode, W7500 can support ISP function in order to control flash using serial interface."))),Object(c.b)("p",null,"When W7500 is reset by hardware, it will be operated as below in embedded boot code."),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w7500/operation_boot_code.jpg",alt:'Figure 1 operation of boot code"'}))))}u.isMDXComponent=!0},584:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(a,".").concat(d)]||b[d]||p[d]||c;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);