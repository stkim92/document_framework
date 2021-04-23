(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{276:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return u}));var n=i(2),r=i(6),o=(i(0),i(578)),a={id:"how_to_debug_wizwiki_w7500eco",title:"How to Debug WIZwiki-W7500ECO",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco",isDocsHomePage:!1,title:"How to Debug WIZwiki-W7500ECO",description:"On the WIZwiki-W7500ECO, there is CMSIS-DAP to debug WIZwiki-W7500ECO.",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500ECO\\how_to_debug_wizwiki_w7500eco.md",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco.md",sidebar:"docs",previous:{title:"Ethernet Shield",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/eco-shield"},next:{title:"How to start WIZwiki-W7500ECO Board",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board"}},c=[{value:"Set Flash Algorithm",id:"set-flash-algorithm",children:[{value:"Download",id:"download",children:[]},{value:"To follow",id:"to-follow",children:[]}]},{value:"Using CMSIS-DAP Debugger",id:"using-cmsis-dap-debugger",children:[{value:"To Follow",id:"to-follow-1",children:[]}]}],b={rightToc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"On the WIZwiki-W7500ECO, there is CMSIS-DAP to debug WIZwiki-W7500ECO.\nAt first, you need to set Flash Algorithm to use debugging. This page\nshows how to set Flash Algorithm and how to use CMSIS-DAP Debugger."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"set-flash-algorithm"},"Set Flash Algorithm"),Object(o.b)("h3",{id:"download"},"Download"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"W7500 128KB Flash project:",Object(o.b)("a",{href:"/img/products/wizwiki_w7500/start_getting_started/w7500_128KB_flash.zip",target:"_blank"},"Download")),Object(o.b)("li",{parentName:"ul"},"W7500 128KB Flash file:",Object(o.b)("a",{href:"/img/products/wizwiki_w7500/start_getting_started/w7500_128_flm.zip",target:"_blank"},"Download"))),Object(o.b)("h3",{id:"to-follow"},"To follow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the attached File and unzip. Then you can find one folder\nand one file in it. In 'W7500","_","flash","_","algo","_","mdk' folder, open the\nproject and Build it.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/start_getting_started/flash_set.jpg",alt:null})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After build, you can check the generated files in project folder.\nBack to 'W7500","_","128","_","Flash' folder and copy 'W7500","_","128","_","FLM' flash\nalgorithm file into the Flash folder in Keil.\n",Object(o.b)("strong",{parentName:"p"},"C:","\\","Keil","_","v5","\\","ARM","\\","Flash"),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/start_getting_started/set_flash_algo2.png",alt:null}))))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"using-cmsis-dap-debugger"},"Using CMSIS-DAP Debugger"),Object(o.b)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../WIZwiki-W7500/how_to_debug_wizwiki_w7500#set_flash_algorithm"}),"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil."),Object(o.b)("h3",{id:"to-follow-1"},"To Follow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set\n'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/start_getting_started/cmsis_debug_1.jpg",alt:null})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings'\nmenu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight\nSW-DP' set on SW Device.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/start_getting_started/cmsis_debug_2-1.jpg",alt:null})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase\nFull Chip' in Download Function, '0x20000000 to 0x4000' in RAM for\nAlgorithm, Add 'W7500","_","128KB","_","FLASH' on Programming Algorithm. After\nchecking it with below figure, click 'OK'.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/start_getting_started/cmsis_debug_3-1.jpg",alt:null})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete\nmessage and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon'\nor ",Object(o.b)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/start_getting_started/cmsis_debug_4.jpg",alt:null}))))))}u.isMDXComponent=!0},578:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return g}));var n=i(0),r=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(i),p=n,g=s["".concat(a,".").concat(p)]||s[p]||d[p]||o;return i?r.a.createElement(g,l(l({ref:t},b),{},{components:i})):r.a.createElement(g,l({ref:t},b))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var b=2;b<o;b++)a[b]=i[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);