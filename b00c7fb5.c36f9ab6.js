(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{401:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var i=r(2),n=r(6),a=(r(0),r(578)),o={id:"firmware_upgrade_using_serial_interface",title:"Firmware Upgrade(Using Serial Interface)",date:new Date("2020-05-13T00:00:00.000Z")},c={unversionedId:"Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface",id:"Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface",isDocsHomePage:!1,title:"Firmware Upgrade(Using Serial Interface)",description:"WizFi310 can be upgraded using serial interface. These are methods how",source:"@site/docs\\Product\\Wi-Fi-Module\\WizFi310\\Programers-Guide\\Firmware_Upgrade(Using_Serial_Interface).md",permalink:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_serial_interface",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi310/Programers-Guide/Firmware_Upgrade(Using_Serial_Interface).md",sidebar:"docs",previous:{title:"AT Commands",permalink:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/at_commands"},next:{title:"Firmware Upgrade(Using OTA)",permalink:"/Product/Wi-Fi-Module/WizFi310/Programers-Guide/firmware_upgrade_using_ota"}},l=[{value:"Using Firmware Upgrade Tool",id:"using-firmware-upgrade-tool",children:[{value:"Step 1",id:"step-1",children:[]},{value:"Step 2",id:"step-2",children:[]},{value:"Step 3",id:"step-3",children:[]}]},{value:"Using TeraTerm",id:"using-teraterm",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"WizFi310 can be upgraded using serial interface. These are methods how\nto upload firmware using serial interface."),Object(a.b)("h2",{id:"using-firmware-upgrade-tool"},"Using Firmware Upgrade Tool"),Object(a.b)("p",null,"WIZnet supports ","<","WizFi310_Update_Tool",">"," for uploading firmware. This\ntool used XMODEM protocol with WizFi310 and it can be downloaded at\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../wizfi310_firmware_using_serial"}),"WizFi310 Firmware(Using Serial)"),"."),Object(a.b)("h3",{id:"step-1"},"Step 1"),Object(a.b)("p",null,'Execute "WizFi310_Update_Tool.exe" and select serial port and baud\nrate. For your information, WizFi310 is set to 115200 for default\nbaudrate.'),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/upgrade_tool_1.png",alt:null}))),Object(a.b)("h3",{id:"step-2"},"Step 2"),Object(a.b)("p",null,"If you push ","<","browse",">"," button, you can select binary file."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/upgrade_tool_2.png",alt:null}))),Object(a.b)("h3",{id:"step-3"},"Step 3"),Object(a.b)("p",null,"If you select ","<","Upload",">"," button, This tool will try to upload firmware\nto WizFi310 as below."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/upgrade_tool_3.png",alt:null}))),Object(a.b)("p",null,"If it is done successfully, you can see message as below."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/upgrade_tool_4.png",alt:null}))),Object(a.b)("p",null,"If this tool is displayed error message as below, you have to check your\nbinary whether it is right."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/upgrade_tool_5.png",alt:null}))),Object(a.b)("h2",{id:"using-teraterm"},"Using TeraTerm"),Object(a.b)("p",null,"TeraTerm is terminal emulator. This software is open source software\nunder BSD License. For more detailed information, Refer to it. \ud83c\udf0e(",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://ttssh2.osdn.jp/"}),"https://ttssh2.osdn.jp/"),") You can download TeraTerm at this URL. \ud83c\udf0e(",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.osdn.jp/projects/ttssh2/releases/"}),"https://en.osdn.jp/projects/ttssh2/releases/"),")"),Object(a.b)("p",null,"In order to set for upgrading firmware, You can use\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:""}),"AT+MUPGRADE"),"\ncommand."),Object(a.b)("h4",{id:"step-1-1"},"Step 1"),Object(a.b)("p",null,"After enter\n",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:""}),"AT+MUPGRADE"),"\nin TeraTerm after WizFi310 restart. It will display 'C' message as\nbelow."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/teraterm_1.png",alt:null}))),Object(a.b)("h4",{id:"step-2-1"},"Step 2"),Object(a.b)("p",null,"Select ","[File]","-","[Transfer]","-","[XMODEM]","-","[Send]","\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/teraterm_2.png",alt:null}))),Object(a.b)("h4",{id:"step-3-1"},"Step 3"),Object(a.b)("p",null,"Select binary file. ( In this case, you have to use CRC option. )"),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/teraterm_3.png",alt:null}))),Object(a.b)("h4",{id:"step-4"},"Step 4"),Object(a.b)("p",null,"After select binary, Teraterm will send binary via XMODEM and If it is\ndone successfully, WizFi310 will restart and display firmware version as\nbelow."),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/teraterm_4.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizfi310/wizfi310pg/teraterm_5.png",alt:null}))))}s.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||a;return r?n.a.createElement(m,c(c({ref:t},p),{},{components:r})):n.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);