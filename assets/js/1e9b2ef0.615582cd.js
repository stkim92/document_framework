(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[67118],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return w},kt:function(){return p}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},w=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,w=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=n,k=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return r?i.createElement(k,a(a({ref:t},w),{},{components:r})):i.createElement(k,a({ref:t},w))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81230:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return w}});var i=r(74034),n=r(79973),o=(r(67294),r(3905)),a={id:"how_to_start_wizwiki_w7500eco_board",title:"How to start WIZwiki-W7500ECO Board",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board",isDocsHomePage:!1,title:"How to start WIZwiki-W7500ECO Board",description:"When you get a WIZwiki-W7500ECO platform board first on your hand, the",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/How_to_start_wizwiki_w7500eco_board.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/How_to_start_wizwiki_w7500eco_board.md",version:"current",frontMatter:{id:"how_to_start_wizwiki_w7500eco_board",title:"How to start WIZwiki-W7500ECO Board",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"How to Debug WIZwiki-W7500ECO",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_debug_wizwiki_w7500eco"},next:{title:"How to install WIZwiki-W7500ECO serial driver",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_install_wizwiki_w7500eco_driver"}},s=[{value:"To install the serial driver",id:"to-install-the-serial-driver",children:[]},{value:"Hardware self-test",id:"hardware-self-test",children:[]},{value:"Welcome to WIZwiki-W7500ECO",id:"welcome-to-wizwiki-w7500eco",children:[]}],c={toc:s};function w(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you get a WIZwiki-W7500ECO platform board first on your hand, the\nserial driver installation and hardware test are needed. Because\nWIZwiki-W7500ECO uses CMSIS-DAP firmware writing and does serial\ncommunicate through UART2 on W7500 (Target MCU).  "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"to-install-the-serial-driver"},"To install the serial driver"),(0,o.kt)("p",null,"To install the serial driver from ARM mbed, please refer to the below\nlink."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"how_to_install_wizwiki_w7500eco_driver"},"How to install WIZwiki-W7500ECO serial driver")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"hardware-self-test"},"Hardware self-test"),(0,o.kt)("p",null,"WIZwiki-W7500ECO has a built-in default firmware. You can do self-test\nwith the default firmware as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"*[[:products:wizwiki_w7500eco:start_getting_started:write_firmware&#examples_binary | Download WIZwiki-W7500ECO Examples Binary]]\n")),(0,o.kt)("p",null,"*","*"," Test Sequence ","*","*"),(0,o.kt)("p",null,"1","."," Connect Ethernet cable, USB cable to WIZwiki-W7500ECO. If you have a\nSD card, insert the SD card."),(0,o.kt)("p",null,"2","."," Run the Device Manager in Control panel and check which COM port is\nallocated to the USB port on WIZwiki-W7500ECO."),(0,o.kt)("p",null,"3","."," Press Reset SW, then LED1 and LED2 on WIZwiki-W7500 will be turned\non. If LED1 and LED2 are turned off, then press the Reset SW again."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<Serial setting>\nBaud rate : 115200\nData bits : 8\nParity : None\nStop bits : 1\nFlow : None\n")),(0,o.kt)("p",null,"4","."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"If you have a SD card,It will turn on LED1 and LED2.\nThe following message prints out to the serial port.\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Messages in case of a SD card inserted",src:r(78113).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"If you do not have a SD card,\nIt will turn on LED1 only.\nThe following message prints out to the serial port.\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Message in case of a SD card not inserted",src:r(13594).Z})),(0,o.kt)("p",null,"5","."," Run a command window and proceed with the ping test to\nWIZwiki-W7500ECO."),(0,o.kt)("p",null,"6","."," WIZwiki-W7500ECO operates as loopback server."),(0,o.kt)("p",null,"7","."," Make proceed with the ping test or loopback test with an IP of\n192.168.077.009 on WIZwiki-W7500ECO."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Necessarily, IP of the PC must also be set to 192.168.077.XXX.\n")),(0,o.kt)("p",null,"8","."," If you can do everything well, then your WIZwiki-W7500ECO doesn't\nhave any problem."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"/img/products/wizwiki_w7500eco/start_getting_started/wizwiki-w7500eco_wztoe_manu.zip",target:"_blank"},"Hardware test & Loop back binary"))),(0,o.kt)("p",null,"\\<WRAP centeralign",">"),(0,o.kt)("h2",{id:"welcome-to-wizwiki-w7500eco"},"Welcome to WIZwiki-W7500ECO"),(0,o.kt)("p",null,"\\</WRAP",">"))}w.isMDXComponent=!0},78113:function(e,t,r){"use strict";t.Z=r.p+"assets/images/wizwiki_serial_ok-20fa1796ea24d631e9aabc16642e85b2.png"},13594:function(e,t,r){"use strict";t.Z=r.p+"assets/images/wizwiki_serial_sdcard-94fc8d660395a0ee3140a0e8557c001c.png"}}]);