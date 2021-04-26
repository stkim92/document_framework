(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{485:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),i=r(6),o=(r(0),r(578)),a={id:"using_cmsis_dap_debugger",title:"Using CMSIS-DAP Debugger",date:new Date("2020-04-07T00:00:00.000Z")},c={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/using_cmsis_dap_debugger",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/using_cmsis_dap_debugger",isDocsHomePage:!1,title:"Using CMSIS-DAP Debugger",description:"CMSIS-DAP does support USB cable and Debugger as well. You need to Set Flash Algorithm to use CMSIS-DAP Debugger in Keil.",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500\\Using_the_CMSIS-DAP.md",permalink:"/Products/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/using_cmsis_dap_debugger",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/Using_the_CMSIS-DAP.md",sidebar:"docs",previous:{title:"How to write the firmware into CMSIS-DAP",permalink:"/Products/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_cmsis_dap"},next:{title:"How to install Keil uVision MDK-Lite version",permalink:"/Products/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_install_keil_uvision"}},l=[{value:"To Follow",id:"to-follow",children:[]}],u={rightToc:l};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"set_flash_algorithm.md"}),"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil.  "),Object(o.b)("h3",{id:"to-follow"},"To Follow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_1.jpg",alt:null})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg",alt:null})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg",alt:null})),"  ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or ",Object(o.b)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_4.jpg",alt:null}))))))}s.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,d=p["".concat(a,".").concat(m)]||p[m]||b[m]||o;return r?i.a.createElement(d,c(c({ref:t},u),{},{components:r})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);