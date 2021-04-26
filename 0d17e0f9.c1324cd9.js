(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{579:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return m}));var r=i(0),n=i.n(r);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function b(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},w=n.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(i),w=r,m=s["".concat(o,".").concat(w)]||s[w]||u[w]||a;return i?n.a.createElement(m,l(l({ref:t},c),{},{components:i})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=w;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=i[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}w.displayName="MDXCreateElement"},80:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return b})),i.d(t,"default",(function(){return p}));var r=i(2),n=i(6),a=(i(0),i(579)),o={id:"how_to_write_firmware_into_wizwiki_w7500",title:"How to write the firmware into WIZwiki-W7500",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",isDocsHomePage:!1,title:"How to write the firmware into WIZwiki-W7500",description:"There are four ways to write firmware into WIZwiki-W7500.",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500\\How_to_write_the_firmware_into_WIZwiki_W7500.md",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_write_firmware_into_wizwiki_w7500",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_write_the_firmware_into_WIZwiki_W7500.md",sidebar:"docs",previous:{title:"How to install WIZwiki-W7500 serial driver",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_install_wizwiki_7500_serial_driver"},next:{title:"How to Debug WIZwiki-W7500",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_debug_wizwiki_w7500"}},b=[{value:"Examples Binary",id:"examples-binary",children:[]},{value:"Using the CMSIS-DAP (Drag and Drop)",id:"using-the-cmsis-dap-drag-and-drop",children:[]},{value:"Using CMSIS-DAP Debugger",id:"using-cmsis-dap-debugger",children:[{value:"To Follow",id:"to-follow",children:[]},{value:"Reference",id:"reference",children:[]}]},{value:"Using the ISP",id:"using-the-isp",children:[]},{value:"How to connect an external SWD debugger to WIZwiki-W7500",id:"how-to-connect-an-external-swd-debugger-to-wizwiki-w7500",children:[{value:"Using the SWD debugger",id:"using-the-swd-debugger",children:[]},{value:"Reference",id:"reference-1",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are four ways to write firmware into WIZwiki-W7500.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using the CMSIS-DAP (Drag and Drop)"),Object(a.b)("li",{parentName:"ul"},"Using the CMSIS-DAP (through Keil uVision5)"),Object(a.b)("li",{parentName:"ul"},"Go to ISP tool manual & Program download"),Object(a.b)("li",{parentName:"ul"},"Using the SWD Debugger")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"examples-binary"},"Examples Binary"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"/img/products/w7500/overview/w7500x_wztoe_manu.zip",target:"_blank"},"Hardware test & Loop back binary")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"/img/products/w7500/overview/wizwki-w7500_led_blink.zip",target:"_blank"},"LED Blink binary")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"/img/products/w7500/overview/wizwki-w7500_serial_led.zip",target:"_blank"},"Serial Out binary"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-the-cmsis-dap-drag-and-drop"},"Using the CMSIS-DAP (Drag and Drop)"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When you connect the USB cable to the WIZwiki-W7500, PC recognized\nas a removable disk. Removable disk name is MBED.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'You "drag and drop" or copy the firmware to the removable disk, the\nfirmware writing progress has completed.',Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/start_getting_started/drap_n_drop.png",alt:"Drag and drop"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After completing the firmware writing, open to check the removable\ndisk.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'If "fail.txt" file is exists in the removable disk, it means writing\nthe firmware has failed.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After pressing the Reset button (SW1) of WIZwiki- W7500, please\nrepeat the steps from step 2."))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-cmsis-dap-debugger"},"Using CMSIS-DAP Debugger"),Object(a.b)("p",null,"CMSIS-DAP does support USB cable and Debugger as well. You need to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Set Flash Algorithm")," to use CMSIS-DAP Debugger in Keil.  "),Object(a.b)("h3",{id:"to-follow"},"To Follow"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_1.jpg",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg",alt:null})),"  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or ",Object(a.b)("strong",{parentName:"p"},"Ctrl+F5")," to debug.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/cmsis_debug_4.jpg",alt:null}))))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reference"},"Reference"),Object(a.b)("p",null," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Set Flash Algorithm")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"using-the-isp"},"Using the ISP"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"W7500 ISP Program")),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../../iMCU/W7500/documents/appnote/how_to_use_isp_tool"}),"Go to ISP tool manual & Program download")),Object(a.b)("p",null,"When W7500 is in the boot mode, firmware writing is possible via the ISP\nsince WIZwiki-W7500 has built-in an ISP header. As ISP header supports\nthe UART signals, you need a converter like TTL to RS232 or TTL to USB\nin order to connect to your PC.",Object(a.b)("br",{parentName:"p"}),"\n","Please refer the block diagram setting as below.  "),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_block_2.png",alt:"ISP Block Diagram"}))),Object(a.b)("p",null,"To follow"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'Run "W7500',"_",'ISP (20xxxxxx) .exe".  ')),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp.png",alt:"ISP Program"}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"To make WIZwiki-W7500 enter the Boot Mode, supply power once while pressing the SW2,BOOT switch."),"  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Select the device connected to the ISP header from "Serial Port" and\nclick "Open". If you entered Boot Mode successfully, then "Serial Open\nComplete" message will be printed on the status bar at the bottom of\nwindow.  '))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Before click the open button of ISP tool, we suggest you to test it\nin other terminal windows.",Object(a.b)("br",{parentName:"strong"}),'After opening serial port using the terminal windows,enter the capital\n"U". If it is in the ISP mode, you can see the returned character.'))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_set.png",alt:"ISP Program Setting"}))),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Click "Browse" to select the binary file.',Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_start.png",alt:"ISP Program Binary Select"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Click "ISP Start" button, then the firmware writing will be\nperformed.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After the firmware writing completes, the window like below will pop\nup."))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/isp_complete.png",alt:"ISP Complete"}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"how-to-connect-an-external-swd-debugger-to-wizwiki-w7500"},"How to connect an external SWD debugger to WIZwiki-W7500"),Object(a.b)("p",null,"This page shows how to write and debug firmware in WIZwiki-W7500 with an external SWD debugger. When you need to debug firmware, you have two ways. One is debugging with an external SWD debugger and the other is using the CMSIS-DAP debugger. In this page, how to debug firmware with the SWD debugger is posted only."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"using-the-swd-debugger"},"Using the SWD debugger"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"You can find SWD Header in the middle of WIZwiki-W7500 and Debugger Sel Jumper with three caps above it.",Object(a.b)("br",{parentName:"p"}),"\n","Then open the J3, J4, J5 jumper cap in Debugger Sel Jumper.",Object(a.b)("br",{parentName:"p"}),"\n","Now, your WIZwiki-W7500 is ready to connect the SWD debugger.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/swd_header_debugger_jumper.png",alt:null})),Object(a.b)("br",{parentName:"p"}),"\n","")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Connect ULINK debugger and SWD Header. At this moment, be careful of matching pin number.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Setting ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"Flash Algorithm")," and ULINK debugger in Keil and",Object(a.b)("br",{parentName:"p"}),"\n","Download on WIZwiki-W7500. Then you can check the success message."))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/set_ulink_in_keil5.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/set_flash_in_keil.png",alt:null}))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"reference-1"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"how_to_debug_wizwiki_w7500#set-flash-algorithm"}),"How to set Flash Algorithm"))),Object(a.b)("hr",null))}p.isMDXComponent=!0}}]);