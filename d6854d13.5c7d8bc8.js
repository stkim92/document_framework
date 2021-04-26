(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{492:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var i=r(2),n=r(6),a=(r(0),r(578)),o={id:"how_to_write_firmware_wizwiki_w7500eco",title:"How to write firmware into WIZwiki W7500ECO",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_write_firmware_wizwiki_w7500eco",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_write_firmware_wizwiki_w7500eco",isDocsHomePage:!1,title:"How to write firmware into WIZwiki W7500ECO",description:"There are three ways to write firmware into WIZwiki-W7500ECO.",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500ECO\\how_to_write_firmware_wizwiki_w7500eco.md",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_write_firmware_wizwiki_w7500eco",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_write_firmware_wizwiki_w7500eco.md",sidebar:"docs",previous:{title:"How to install WIZwiki-W7500ECO serial driver",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_install_wizwiki_w7500eco_driver"},next:{title:"How to write the firmware into CMSIS-DAP",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_write_firmware_into_cmsis_dap"}},c=[{value:"Examples Binary",id:"examples-binary",children:[]},{value:"Using the CMSIS-DAP (Drag and Drop)",id:"using-the-cmsis-dap-drag-and-drop",children:[]},{value:"Using CMSIS-DAP Debugger",id:"using-cmsis-dap-debugger",children:[{value:"To Follow",id:"to-follow",children:[]},{value:"Reference",id:"reference",children:[]}]},{value:"Using the ISP",id:"using-the-isp",children:[]}],b={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are three ways to write firmware into WIZwiki-W7500ECO."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using the CMSIS-DAP (Drag and Drop)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"../WIZwiki-W7500/using_cmsis_dap_debugger"}),"Using the CMSIS-DAP")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"../../W7500/documents/appnote/How_to_use_ISP_tool.md"}),"Go to ISP tool manual & Program download"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"examples-binary"},"Examples Binary"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"/img/products/w7500/overview/w7500x_wztoe_manu.zip",target:"_blank"},"Hardware test & Loop back binary")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"/img/products/w7500/overview/wizwki-w7500_led_blink.zip",target:"_blank"},"LED Blink binary")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"/img/products/w7500/overview/wizwki-w7500_serial_led.zip",target:"_blank"},"Serial Out binary"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-the-cmsis-dap-drag-and-drop"},"Using the CMSIS-DAP (Drag and Drop)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When you connect the USB cable to the WIZwiki-W7500ECO, PC\nrecognized as a removable disk. Removable disk name is MBED.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'You "drag and drop" or copy the firmware to the removable disk, the\nfirmware writing progress has completed.',Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/start_getting_started/drap_n_drop.png",alt:"Drag and\ndrop"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After completing the firmware writing, open to check the removable\ndisk.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'If "fail.txt" file is exists in the removable disk, it means writing\nthe firmware has failed.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After pressing the Reset button (SW1) of WIZwiki- W7500ECO, please\nrepeat the steps from step 2."))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-cmsis-dap-debugger"},"Using CMSIS-DAP Debugger"),Object(a.b)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil.  "),Object(a.b)("h3",{id:"to-follow"},"To Follow"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_1.jpg",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg",alt:null})),"  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or ",Object(a.b)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_4.jpg",alt:null}))))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reference"},"Reference"),Object(a.b)("p",null," ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Set Flash Algorithm")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-the-isp"},"Using the ISP"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"W7500 ISP Program")),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../../iMCU/W7500/documents/appnote/how_to_use_isp_tool"}),"Go to ISP tool manual & Program download")),Object(a.b)("p",null,"When W7500 is in the boot mode, firmware writing is possible via the ISP\nsince WIZwiki-W7500 has built-in an ISP header. As ISP header supports\nthe UART signals, you need a converter like TTL to RS232 or TTL to USB\nin order to connect to your PC.",Object(a.b)("br",{parentName:"p"}),"\n","Please refer the block diagram setting as below.  "),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_block_2.png",alt:"ISP Block Diagram"}))),Object(a.b)("p",null,"To follow"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Run "W7500',"_",'ISP (20xxxxxx) .exe".  ')),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp.png",alt:"ISP Program"}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"To make WIZwiki-W7500 enter the Boot Mode, supply power once while pressing the SW2,BOOT switch."),"  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Select the device connected to the ISP header from "Serial Port" and\nclick "Open". If you entered Boot Mode successfully, then "Serial Open\nComplete" message will be printed on the status bar at the bottom of\nwindow.  '))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Before click the open button of ISP tool, we suggest you to test it\nin other terminal windows.",Object(a.b)("br",{parentName:"strong"}),'After opening serial port using the terminal windows,enter the capital\n"U". If it is in the ISP mode, you can see the returned character.'))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_set.png",alt:"ISP Program Setting"}))),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Click "Browse" to select the binary file.',Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_start.png",alt:"ISP Program Binary Select"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Click "ISP Start" button, then the firmware writing will be\nperformed.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After the firmware writing completes, the window like below will pop\nup."))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_complete.png",alt:"ISP Complete"}))),Object(a.b)("hr",null))}p.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},w=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(r),w=i,u=s["".concat(o,".").concat(w)]||s[w]||m[w]||a;return r?n.a.createElement(u,l(l({ref:t},b),{},{components:r})):n.a.createElement(u,l({ref:t},b))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=w;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var b=2;b<a;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}w.displayName="MDXCreateElement"}}]);