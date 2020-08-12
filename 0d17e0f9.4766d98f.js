(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{516:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return w}));var i=r(0),n=r.n(i);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=i,w=s["".concat(o,".").concat(m)]||s[m]||u[m]||a;return r?n.a.createElement(w,b(b({ref:t},c),{},{components:r})):n.a.createElement(w,b({ref:t},c))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:i,o[1]=b;for(var c=2;c<a;c++)o[c]=r[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var i=r(2),n=r(6),a=(r(0),r(516)),o={id:"how_to_write_firmware_into_wizwiki_w7500",title:"How to write the firmware into WIZwiki-W7500",date:new Date("2020-04-07T00:00:00.000Z")},b={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",isDocsHomePage:!1,title:"How to write the firmware into WIZwiki-W7500",description:"There are four ways to write firmware into WIZwiki-W7500.",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500\\How_to_write_the_firmware_into_WIZwiki_W7500.md",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_write_the_firmware_into_WIZwiki_W7500.md"},l=[{value:"Examples Binary",id:"examples-binary",children:[]},{value:"Using the CMSIS-DAP (Drag and Drop)",id:"using-the-cmsis-dap-drag-and-drop",children:[]},{value:"Using CMSIS-DAP Debugger",id:"using-cmsis-dap-debugger",children:[{value:"To Follow",id:"to-follow",children:[]},{value:"Reference",id:"reference",children:[]}]},{value:"Using the ISP",id:"using-the-isp",children:[]},{value:"How to connect an external SWD debugger to WIZwiki-W7500",id:"how-to-connect-an-external-swd-debugger-to-wizwiki-w7500",children:[{value:"Using the SWD debugger",id:"using-the-swd-debugger",children:[]},{value:"Reference",id:"reference-1",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are four ways to write firmware into WIZwiki-W7500.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using the CMSIS-DAP (Drag and Drop)"),Object(a.b)("li",{parentName:"ul"},"Using the CMSIS-DAP (through Keil uVision5)"),Object(a.b)("li",{parentName:"ul"},"Go to ISP tool manual & Program download"),Object(a.b)("li",{parentName:"ul"},"Using the SWD Debugger")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"examples-binary"},"Examples Binary"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/img/products/w7500/overview/w7500x_wztoe_manu.zip"}),"Hardware test & Loop back binary")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/img/products/w7500/overview/wizwki-w7500_led_blink.zip"}),"LED Blink binary")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/img/products/w7500/overview/wizwki-w7500_serial_led.zip"}),"Serial Out binary"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-the-cmsis-dap-drag-and-drop"},"Using the CMSIS-DAP (Drag and Drop)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When you connect the USB cable to the WIZwiki-W7500, PC recognized\nas a removable disk. Removable disk name is MBED.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'You "drag and drop" or copy the firmware to the removable disk, the\nfirmware writing progress has completed.',Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/start_getting_started/drap_n_drop.png",alt:"Drag and drop"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After completing the firmware writing, open to check the removable\ndisk.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'If "fail.txt" file is exists in the removable disk, it means writing\nthe firmware has failed.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After pressing the Reset button (SW1) of WIZwiki- W7500, please\nrepeat the steps from step 2."))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-cmsis-dap-debugger"},"Using CMSIS-DAP Debugger"),Object(a.b)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil.  "),Object(a.b)("h3",{id:"to-follow"},"To Follow"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_1.jpg",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg",alt:null})),"  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or ",Object(a.b)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_4.jpg",alt:null}))))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reference"},"Reference"),Object(a.b)("p",null," ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Set Flash Algorithm")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-the-isp"},"Using the ISP"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"W7500 ISP Program")),Object(a.b)("p",null,Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../../iMCU/W7500/documents/appnote/how_to_use_isp_tool"}),"Go to ISP tool manual & Program download")),Object(a.b)("p",null,"When W7500 is in the boot mode, firmware writing is possible via the ISP\nsince WIZwiki-W7500 has built-in an ISP header. As ISP header supports\nthe UART signals, you need a converter like TTL to RS232 or TTL to USB\nin order to connect to your PC.",Object(a.b)("br",{parentName:"p"}),"\n","Please refer the block diagram setting as below.  "),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_block_2.png",alt:"ISP Block Diagram"}))),Object(a.b)("p",null,"To follow"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Run "W7500',"_",'ISP (20xxxxxx) .exe".  ')),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp.png",alt:"ISP Program"}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"To make WIZwiki-W7500 enter the Boot Mode, supply power once while pressing the SW2,BOOT switch."),"  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Select the device connected to the ISP header from "Serial Port" and\nclick "Open". If you entered Boot Mode successfully, then "Serial Open\nComplete" message will be printed on the status bar at the bottom of\nwindow.  '))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Before click the open button of ISP tool, we suggest you to test it\nin other terminal windows.",Object(a.b)("br",{parentName:"strong"}),'After opening serial port using the terminal windows,enter the capital\n"U". If it is in the ISP mode, you can see the returned character.'))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_set.png",alt:"ISP Program Setting"}))),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Click "Browse" to select the binary file.',Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_start.png",alt:"ISP Program Binary Select"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Click "ISP Start" button, then the firmware writing will be\nperformed.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After the firmware writing completes, the window like below will pop\nup."))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_complete.png",alt:"ISP Complete"}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"how-to-connect-an-external-swd-debugger-to-wizwiki-w7500"},"How to connect an external SWD debugger to WIZwiki-W7500"),Object(a.b)("p",null,"This page shows how to write and debug firmware in WIZwiki-W7500 with an external SWD debugger. When you need to debug firmware, you have two ways. One is debugging with an external SWD debugger and the other is using the CMSIS-DAP debugger. In this page, how to debug firmware with the SWD debugger is posted only."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"using-the-swd-debugger"},"Using the SWD debugger"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"You can find SWD Header in the middle of WIZwiki-W7500 and Debugger Sel Jumper with three caps above it.",Object(a.b)("br",{parentName:"p"}),"\n","Then open the J3, J4, J5 jumper cap in Debugger Sel Jumper.",Object(a.b)("br",{parentName:"p"}),"\n","Now, your WIZwiki-W7500 is ready to connect the SWD debugger.\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/swd_header_debugger_jumper.png",alt:null})),Object(a.b)("br",{parentName:"p"}),"\n","")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Connect ULINK debugger and SWD Header. At this moment, be careful of matching pin number.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Setting ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Flash Algorithm")," and ULINK debugger in Keil and",Object(a.b)("br",{parentName:"p"}),"\n","Download on WIZwiki-W7500. Then you can check the success message."))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/set_ulink_in_keil5.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/set_flash_in_keil.png",alt:null}))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reference-1"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"How to set Flash Algorithm"))),Object(a.b)("hr",null))}p.isMDXComponent=!0}}]);