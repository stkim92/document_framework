(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{248:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(2),i=r(6),n=(r(0),r(579)),o={id:"how_to_start_wizwiki_w7500_board",title:"How to start WIZwiki-W7500 Board",date:new Date("2020-04-07T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_start_wizwiki_w7500_board",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_start_wizwiki_w7500_board",isDocsHomePage:!1,title:"How to start WIZwiki-W7500 Board",description:"When you get a WIZwiki-W7500 platform board first on your hand, the",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500\\How_to_start_WIZwiki_W7500_Board.md",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_start_wizwiki_w7500_board",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_start_WIZwiki_W7500_Board.md",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/overview"},next:{title:"How to install WIZwiki-W7500 serial driver",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/how_to_install_wizwiki_7500_serial_driver"}},c=[{value:"To install the serial driver",id:"to-install-the-serial-driver",children:[]},{value:"Hardware self-test",id:"hardware-self-test",children:[]}],b={rightToc:c};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"When you get a WIZwiki-W7500 platform board first on your hand, the\nserial driver installation and hardware test are needed. Because\nWIZwiki-W7500 uses CMSIS-DAP firmware writing and does serial\ncommunicate through UART1 on W7500 (Target MCU).  "),Object(n.b)("hr",null),Object(n.b)("h2",{id:"to-install-the-serial-driver"},"To install the serial driver"),Object(n.b)("p",null,"To install the serial driver from ARM mbed, please refer to the below\nlink."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"how_to_install_wizwiki_7500_serial_driver"}),"How to install WIZwiki-W7500 serial driver"))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"hardware-self-test"},"Hardware self-test"),Object(n.b)("p",null,"WIZwiki-W7500 has a built-in default firmware. You can do self-test with\nthe default firmware as below."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"how_to_write_firmware_into_wizwiki_w7500#examples-binary"}),"Download WIZwiki-W7500 Examples Binary"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Test Sequence")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Connect Ethernet cable, USB cable to WIZwiki-W7500. If you have a SD\ncard, insert the SD card.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Run the Device Manager in Control panel and check which COM port is\nallocated to the USB port on WIZwiki-W7500.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Press Reset SW, then LED 'D4' on WIZwiki-W7500 will be turned on. If\nD4 is turned off, then press the Reset SW again."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"<Serial setting>\nBaud rate : 115200\nData bits : 8\nParity : None\nStop bits : 1\nFlow : None\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"  If you have a SD card,\nthe state of D4 will turn like this: White => White Blink => Yellow\nThe following message prints out to the serial port."))),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/wizwiki_serial_ok.png",alt:"Messages in case of a SD card inserted"}))),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"If you do not have a SD card,\nD4 of the state will turn like this: White => White Blink => Red\nThe following message prints out to the serial port.\n")),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500/overview/wizwiki_serial_sdcard.png",alt:"Message in case of a SD card not inserted"}))),Object(n.b)("ol",{start:5},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Run a command window and proceed with the ping test to\nWIZwiki-W7500.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"WIZwiki-W7500 operates as loopback server.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Make proceed with the ping test or loopback test with an IP of\n192.168.077.009 on WIZwiki-W7500."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"Necessarily, IP of the PC must also be set to 192.168.077.XXX.\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If you can do everything well, then your WIZwiki-W7500 doesn't have\nany problem."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{href:"/img/products/w7500/overview/w7500x_wztoe_manu.zip",target:"_blank"},"Hardware test binany download"))))))}s.isMDXComponent=!0},579:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},w=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(r),w=a,u=p["".concat(o,".").concat(w)]||p[w]||d[w]||n;return r?i.a.createElement(u,l(l({ref:t},b),{},{components:r})):i.a.createElement(u,l({ref:t},b))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=w;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<n;b++)o[b]=r[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}w.displayName="MDXCreateElement"}}]);