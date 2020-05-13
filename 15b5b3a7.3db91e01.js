(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{190:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(9),i=(r(0),r(652)),a={},c={id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/Using_the_CMSIS-DAP",title:"Using_the_CMSIS-DAP",description:"## Using CMSIS-DAP Debugger",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/Using_the_CMSIS-DAP.md",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/Using_the_CMSIS-DAP",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/Using_the_CMSIS-DAP.md"},l=[{value:"Using CMSIS-DAP Debugger",id:"using-cmsis-dap-debugger",children:[{value:"To Follow",id:"to-follow",children:[]}]}],u={rightToc:l};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"using-cmsis-dap-debugger"},"Using CMSIS-DAP Debugger"),Object(i.b)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"set_flash_algorithm.md"}),"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil.  "),Object(i.b)("h3",{id:"to-follow"},"To Follow"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_w7500/cmsis_debug_1.jpg",alt:null})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device.\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg",alt:null})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'.\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg",alt:null})),"  ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or ",Object(i.b)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_w7500/cmsis_debug_4.jpg",alt:null}))))))}b.isMDXComponent=!0},652:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(r),m=n,g=p["".concat(a,".").concat(m)]||p[m]||s[m]||i;return r?o.a.createElement(g,c({ref:t},u,{components:r})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);