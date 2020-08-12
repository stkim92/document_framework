(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{256:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),i=(r(0),r(516)),o={id:"how_to_start_wizwiki_w7500_board",title:"How to start WIZwiki-W7500 Board",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_start_wizwiki_w7500_board",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_start_wizwiki_w7500_board",isDocsHomePage:!1,title:"How to start WIZwiki-W7500 Board",description:"When you get a WIZwiki-W7500 platform board first on your hand, the",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_start_WIZwiki_W7500_Board.md",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_start_wizwiki_w7500_board",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_start_WIZwiki_W7500_Board.md"},c=[{value:"To install the serial driver",id:"to-install-the-serial-driver",children:[]},{value:"Hardware self-test",id:"hardware-self-test",children:[]}],b={rightToc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When you get a WIZwiki-W7500 platform board first on your hand, the\nserial driver installation and hardware test are needed. Because\nWIZwiki-W7500 uses CMSIS-DAP firmware writing and does serial\ncommunicate through UART1 on W7500 (Target MCU).  "),Object(i.b)("hr",null),Object(i.b)("h2",{id:"to-install-the-serial-driver"},"To install the serial driver"),Object(i.b)("p",null,"To install the serial driver from ARM mbed, please refer to the below\nlink."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"how_to_install_wizwiki_7500_serial_driver"}),"How to install WIZwiki-W7500 serial driver"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"hardware-self-test"},"Hardware self-test"),Object(i.b)("p",null,"WIZwiki-W7500 has a built-in default firmware. You can do self-test with\nthe default firmware as below."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"how_to_write_firmware_into_wizwiki_w7500#examples-binary"}),"Download WIZwiki-W7500 Examples Binary"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Test Sequence")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Connect Ethernet cable, USB cable to WIZwiki-W7500. If you have a SD\ncard, insert the SD card.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run the Device Manager in Control panel and check which COM port is\nallocated to the USB port on WIZwiki-W7500.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Press Reset SW, then LED 'D4' on WIZwiki-W7500 will be turned on. If\nD4 is turned off, then press the Reset SW again."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"<Serial setting>\nBaud rate : 115200\nData bits : 8\nParity : None\nStop bits : 1\nFlow : None\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"  If you have a SD card,\nthe state of D4 will turn like this: White => White Blink => Yellow\nThe following message prints out to the serial port."))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/wizwiki_serial_ok.png",alt:"Messages in case of a SD card inserted"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"If you do not have a SD card,\nD4 of the state will turn like this: White => White Blink => Red\nThe following message prints out to the serial port.\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/wizwiki_serial_sdcard.png",alt:"Message in case of a SD card not inserted"}))),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run a command window and proceed with the ping test to\nWIZwiki-W7500.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"WIZwiki-W7500 operates as loopback server.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make proceed with the ping test or loopback test with an IP of\n192.168.077.009 on WIZwiki-W7500."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Necessarily, IP of the PC must also be set to 192.168.077.XXX.\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you can do everything well, then your WIZwiki-W7500 doesn't have\nany problem."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/img/products/w7500/overview/w7500x_wztoe_manu.zip"}),"Hardware test binany download"))))))}s.isMDXComponent=!0},516:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return w}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,w=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return r?n.a.createElement(w,l(l({ref:t},b),{},{components:r})):n.a.createElement(w,l({ref:t},b))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);