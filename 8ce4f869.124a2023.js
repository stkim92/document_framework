(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{338:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return w}));var n=r(2),i=r(6),a=(r(0),r(578)),o={id:"how_to_start_wizwiki_w7500eco_board",title:"How to start WIZwiki-W7500ECO Board",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board",isDocsHomePage:!1,title:"How to start WIZwiki-W7500ECO Board",description:"When you get a WIZwiki-W7500ECO platform board first on your hand, the",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500ECO\\How_to_start_wizwiki_w7500eco_board.md",permalink:"/Products/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/How_to_start_wizwiki_w7500eco_board.md",sidebar:"docs",previous:{title:"How to Debug WIZwiki-W7500ECO",permalink:"/Products/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco"},next:{title:"How to install WIZwiki-W7500ECO serial driver",permalink:"/Products/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_install_wizwiki_w7500eco_driver"}},c=[{value:"To install the serial driver",id:"to-install-the-serial-driver",children:[]},{value:"Hardware self-test",id:"hardware-self-test",children:[]},{value:"Welcome to WIZwiki-W7500ECO",id:"welcome-to-wizwiki-w7500eco",children:[]}],s={rightToc:c};function w(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When you get a WIZwiki-W7500ECO platform board first on your hand, the\nserial driver installation and hardware test are needed. Because\nWIZwiki-W7500ECO uses CMSIS-DAP firmware writing and does serial\ncommunicate through UART2 on W7500 (Target MCU).  "),Object(a.b)("hr",null),Object(a.b)("h2",{id:"to-install-the-serial-driver"},"To install the serial driver"),Object(a.b)("p",null,"To install the serial driver from ARM mbed, please refer to the below\nlink."),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"how_to_install_wizwiki_w7500eco_driver"}),"How to install WIZwiki-W7500ECO serial driver")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"hardware-self-test"},"Hardware self-test"),Object(a.b)("p",null,"WIZwiki-W7500ECO has a built-in default firmware. You can do self-test\nwith the default firmware as below."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"*[[:products:wizwiki_w7500eco:start_getting_started:write_firmware&#examples_binary | Download WIZwiki-W7500ECO Examples Binary]]\n")),Object(a.b)("p",null,"*","*"," Test Sequence ","*","*"),Object(a.b)("p",null,"1","."," Connect Ethernet cable, USB cable to WIZwiki-W7500ECO. If you have a\nSD card, insert the SD card."),Object(a.b)("p",null,"2","."," Run the Device Manager in Control panel and check which COM port is\nallocated to the USB port on WIZwiki-W7500ECO."),Object(a.b)("p",null,"3","."," Press Reset SW, then LED1 and LED2 on WIZwiki-W7500 will be turned\non. If LED1 and LED2 are turned off, then press the Reset SW again."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"<Serial setting>\nBaud rate : 115200\nData bits : 8\nParity : None\nStop bits : 1\nFlow : None\n")),Object(a.b)("p",null,"4","."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"If you have a SD card,It will turn on LED1 and LED2.\nThe following message prints out to the serial port.\n")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/wizwiki_serial_ok.png",alt:"Messages in case of a SD card\ninserted"}))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"If you do not have a SD card,\nIt will turn on LED1 only.\nThe following message prints out to the serial port.\n")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_w7500/getting_started/wizwiki_serial_sdcard.png",alt:"Message in case of a SD card not\ninserted"}))),Object(a.b)("p",null,"5","."," Run a command window and proceed with the ping test to\nWIZwiki-W7500ECO."),Object(a.b)("p",null,"6","."," WIZwiki-W7500ECO operates as loopback server."),Object(a.b)("p",null,"7","."," Make proceed with the ping test or loopback test with an IP of\n192.168.077.009 on WIZwiki-W7500ECO."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"Necessarily, IP of the PC must also be set to 192.168.077.XXX.\n")),Object(a.b)("p",null,"8","."," If you can do everything well, then your WIZwiki-W7500ECO doesn't\nhave any problem."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"/img/products/wizwiki_w7500eco/start_getting_started/wizwiki-w7500eco_wztoe_manu.zip",target:"_blank"},"Hardware test & Loop back binary"))),Object(a.b)("p",null,"\\<WRAP centeralign",">"),Object(a.b)("h2",{id:"welcome-to-wizwiki-w7500eco"},"Welcome to WIZwiki-W7500ECO"),Object(a.b)("p",null,"\\</WRAP",">"))}w.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),w=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=w(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=w(r),u=n,p=b["".concat(o,".").concat(u)]||b[u]||d[u]||a;return r?i.a.createElement(p,l(l({ref:t},s),{},{components:r})):i.a.createElement(p,l({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);