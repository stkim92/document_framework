(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{376:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(9),i=(n(0),n(623)),a={},l={id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_debug_Wizwiki_W7500",title:"How_to_debug_Wizwiki_W7500",description:"# How to Debug WIZwiki-W7500\r",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500\\How_to_debug_Wizwiki_W7500.md",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_debug_Wizwiki_W7500",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_debug_Wizwiki_W7500.md"},c=[{value:"Set Flash Algorithm",id:"set-flash-algorithm",children:[{value:"Download",id:"download",children:[]},{value:"To follow",id:"to-follow",children:[]}]},{value:"Using ULINK Debugger",id:"using-ulink-debugger",children:[{value:"nTo Follow",id:"nto-follow",children:[]}]},{value:"When downloading multiple projects",id:"when-downloading-multiple-projects",children:[{value:"To Follow",id:"to-follow-1",children:[]},{value:"How to switch app &amp; boot for debug You just need reset device and",id:"how-to-switch-app--boot-for-debug-you-just-need-reset-device-and",children:[]}]}],b={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"how-to-debug-wizwiki-w7500"},"How to Debug WIZwiki-W7500"),Object(i.b)("p",null,"On the WIZwiki-W7500, there are SWD Header and CMSIS-DAP to debug\nWIZwiki-W7500. At first, you need to set Flash Algorithm to use\ndebugging. This page shows how to set Flash Algorithm and how to use\nULINK Debugger and CMSIS-DAP Debugger."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"set-flash-algorithm"},"Set Flash Algorithm"),Object(i.b)("h3",{id:"download"},"Download"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"W7500 128KB Flash project:\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/document_framework/img/products/w7500/overview/w7500_128kb_flash.zip"}),"Download"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"W7500 128KB Flash file:\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/document_framework/img/products/w7500/overview/w7500_128_flm.zip"}),"Download")))),Object(i.b)("h3",{id:"to-follow"},"To follow"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download the attached File and unzip. Then you can find one folder\nand one file in it. In 'W7500","_","flash","_","algo","_","mdk' folder, open the\nproject and Build it.\n",Object(i.b)("img",Object(o.a)({parentName:"li"},{src:"/document_framework/img/products/w7500/overview/flash_set.jpg",alt:null})))),Object(i.b)("p",null,"2","."," After build, you can check the generated files in project folder.\nBack to 'W7500","_","128","_","Flash' folder and copy 'W7500","_","128","_","FLM' flash\nalgorithm file into the Flash folder in Keil.\n",Object(i.b)("strong",{parentName:"p"},"C:","\\","Keil","_","v5","\\","ARM","\\","Flash"),"\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/overview/set_flash_algo2.png",alt:null}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"using-ulink-debugger"},"Using ULINK Debugger"),Object(i.b)("p",null,"To use ULINK Debugger, you should uncap SWD Debugger Sel Jumper usually\ndisconnected with cap. Do not forget to connect USB cable to supply\npower to the board."),Object(i.b)("h3",{id:"nto-follow"},"nTo Follow"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You can find SWD Header in the middle of WIZwiki-W7500 and Debugger\nSel Jumper with three caps above it. Then open the J3, J4, J5 jumper cap\nin Debugger Sel Jumper. Now, your WIZwiki-W7500 is ready to connect the\nSWD\ndebugger.",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/overview/swd_header_debugger_jumper.png",alt:null})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Connect ULINK debugger and SWD Header. At this moment, be careful of\nmatching pin number.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set\n'Debug' on top menu with choosing 'ULINK2/ME Cortex Debugger'.\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/overview/ulink_set1.jpg",alt:null})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click 'Utilities' next Debug and choose 'CMSIS-DAP Debugger'. Open\n'Setting' menu and unchecked 'SWJ' in Debug on top menu. Then confirm\n'ARM CoreSight SW-DP' set on SW Device.\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/overview/ulink_set2.jpg",alt:null})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click 'Flash Download'. Set 'Erase Full Chip' in Download Function,\ntype '0x20000000 to 0x4000' in RAM for Algorithm and Add\n'W7500","_","128KB","_","FLASH' on Programming Algorithm. After comparing with the\nfigure below, click 'OK'.\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/overview/ulink_set3-1.jpg",alt:null})))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete\nmessage and the ULINK Debugger at the bottom. Chick the 'Debug icon' or\n",Object(i.b)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/overview/ulink_set4.jpg",alt:null}))))),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/page%3Eproducts/wizwiki_w7500/start_getting_started/write_firmware/keil_cmsis_dap",alt:"keil_cmsis_dap"}))),Object(i.b)("h2",{id:"when-downloading-multiple-projects"},"When downloading multiple projects"),Object(i.b)("p",null,"In case of WIZ750SR code using W7500 chip, Boot and App project exist\nrespectively. Therefore, there is a problem when following the previous\nexplanations. Regardless of which debugger you use, you only need to pay\nattention to the following settings."),Object(i.b)("h3",{id:"to-follow-1"},"To Follow"),Object(i.b)("p",null,"-"," For general configuration, follow the previous instructions."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/overview/cmsis_debug_multi_project_1.png",alt:null}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click 'Utilities' in tap menu.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"And choose 'your debugger'.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open 'Setting' menu next to it and click 'Flash Download' in tap\nmenu.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Only set 'Erase Sectors', 'Program', 'Verify' in Download Function.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click W7500 128KB FLASH in Programming Algorithm and fill the\n","[Start][Size]"," Box."))),Object(i.b)("p",null," You can get ","[Start]"," address and ","[Size]"," from target information like figure below.\nIf everything is entered correctly, Click 'OK'."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/overview/cmsis_debug_target_info.png",alt:null}))),Object(i.b)("p",null,"The remaining steps can be followed by the previous description."),Object(i.b)("h3",{id:"how-to-switch-app--boot-for-debug-you-just-need-reset-device-and"},"How to switch app & boot for debug You just need reset device and"),Object(i.b)("p",null,"debug that you want!"),Object(i.b)("hr",null))}u.isMDXComponent=!0},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,s=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(s,l({ref:t},b,{components:n})):r.a.createElement(s,l({ref:t},b))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var b=2;b<i;b++)a[b]=n[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);