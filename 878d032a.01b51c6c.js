(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{389:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),i=r(9),a=(r(0),r(608)),o={id:"network_exercise_2_led_with_tcp_eng",title:"Network Exercise 2. LED with TCP(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},c={id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_2_led_with_tcp_eng",title:"Network Exercise 2. LED with TCP(Eng)",description:"# Network Exercise 2. Controlling LED with TCP communication\r",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500-Mbed-Starter-Kit\\Network_Exercise_2._LED_with_TCP(Eng).md",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_2_led_with_tcp_eng",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Network_Exercise_2._LED_with_TCP(Eng).md",sidebar:"someSidebar",previous:{title:"Network Exercise 1. TCP loopback(Eng)",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_1_tcp_loopback_eng"},next:{title:"Open Source Hardware",permalink:"/document_framework/docs/Product/Open-Source-Hardware/open_source_hardware"}},l=[{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Hardware",id:"hardware",children:[{value:"The Circuit",id:"the-circuit",children:[]},{value:"Connections",id:"connections",children:[]}]},{value:"Software",id:"software",children:[{value:"Test Software",id:"test-software",children:[]},{value:"Example Code",id:"example-code",children:[]},{value:"How to run and test result",id:"how-to-run-and-test-result",children:[]}]},{value:"Learning Resources",id:"learning-resources",children:[]},{value:"Related Links",id:"related-links",children:[]}],b={rightToc:l};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"network-exercise-2-controlling-led-with-tcp-communication"},"Network Exercise 2. Controlling LED with TCP communication"),Object(a.b)("h2",{id:"outline"},"Outline"),Object(a.b)("p",null,"This is an exercise to turn LED on and off from remote site using TCP\nprotocol. The PC runs as a TCP Client and the WIZwiki board runs as a\nTCP Server. User can learn how to control the component (LED) connected\nto WIZwiki board using the TOE (TCP/IP Offload Engine) of W7500."),Object(a.b)("h2",{id:"what-you-need"},"What you need"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZwiki-W7500"),Object(a.b)("li",{parentName:"ul"},"USB cable"),Object(a.b)("li",{parentName:"ul"},"LAN cable"),Object(a.b)("li",{parentName:"ul"},"Hub switch (Router with DHCP function)")),Object(a.b)("h2",{id:"hardware"},"Hardware"),Object(a.b)("h3",{id:"the-circuit"},"The Circuit"),Object(a.b)("p",null,"No special circuit."),Object(a.b)("h3",{id:"connections"},"Connections"),Object(a.b)("p",null,"Connect the PC and the router (with DHCP function) with LAN cable.\nConnect the router and the WIZwiki board with LAN cable. Connect the PC\nand the WIZwiki board with USB cable."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/tcp_loopback_system_config_en.png",alt:null}))),Object(a.b)("h2",{id:"software"},"Software"),Object(a.b)("h3",{id:"test-software"},"Test Software"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Terminal program",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"EX) Teraterm, Hercules, Hyperterminal, etc."),Object(a.b)("li",{parentName:"ul"},"It is for serial port message checking"),Object(a.b)("li",{parentName:"ul"},"Refer to the next link for the serial port example")))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"Exercise_2._Serial_port(Eng).md"}),"Exercise 2. Data output using serial port"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TCP/IP Client Server terminal program",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"EX) Hercules, etc."),Object(a.b)("li",{parentName:"ul"},"It is for transmitting message using the TCP/IP Client Server\nterminal")))),Object(a.b)("h3",{id:"example-code"},"Example Code"),Object(a.b)("p",null,"Use the example code in the page below.\n\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mbed.org/teams/WIZnet/code/TCP_LED_Control-WIZwiki-W7500/"}),"https://developer.mbed.org/teams/WIZnet/code/TCP_LED_Control-WIZwiki-W7500/")),Object(a.b)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),Object(a.b)("p",null,"Execute serial terminal in PC. First press the Reset button of WIZwiki\nboard and check messages. User can see that Server IP Address (ex:\n192.168.0.8) is assigned by DHCP function."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/tcp_led_dhcp_1.jpg",alt:null}))),Object(a.b)("p",null,"Execute Hercules program in PC. Select TCP Client menu and configure the\nIP and Port. If user types the target Server IP Address (ex:\n192.168.0.8) and clicks the Ping button, this image will be shown.\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/tcp_led_client_1.jpg",alt:null}))),Object(a.b)("p",null,"The output message made by TCP server is shown in Terterm. User can know\nthe Client (PC) is connected to Server (WIZwiki board). (ex: Connection\nfrom: 192.168.0.6)"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/tcp_led_server_1.jpg",alt:null}))),Object(a.b)("p",null,"Now let's control the LED on the WIZwiki board. When the TCP Client of\nthe PC sends ",Object(a.b)("strong",{parentName:"p"},'"LED',"_",'ON"'),' message to the WIZwiki board (TCP Server),\nthen the LED turns on. Click the "Send" button on the red part in the\nfigure below.\n',Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/tcp_led_on_client.jpg",alt:null}))),Object(a.b)("p",null,"If the LED","_","ON message is parsed (translated) at the TCP Server side,\nthen LED turns on. Check the LED light on the blue circle turns on."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/tcp_led_on_off.png",alt:null}))),Object(a.b)("p",null,"Besides the LED turn on, the other message is shown The TCP Client sends\nmessage to WIZwiki board (TCP Server), then WIZwiki board sends reversed\nmessage to TCP Client. Check the message returned back from Server on\nTeraterm in the figure below."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/tcp_led_on_server.jpg",alt:null}))),Object(a.b)("p",null,"If ",Object(a.b)("strong",{parentName:"p"},'"Any messsage"'),'(ex: TEST) except the "LED',"_",'ON" message to the\nWIZwiki board (TCP Server), then the LED turns off.'),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/Wiznet/document_framework/blob/master/static/img/products/wizwiki_mbed_kit/kit_en/tcp_led_off_client.jpg",alt:null}))),Object(a.b)("p",null,"Besides the LED turn off, the other message is shown The TCP Client\nsends message to WIZwiki board (TCP Server), then WIZwiki board sends\nreversed message to TCP Client. Check the message returned back from\nServer on Teraterm in the figure below."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/tcp_led_off_server.jpg",alt:null}))),Object(a.b)("p",null,"Check the LED light on the blue circle turns off."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/tcp_led_on_off.png",alt:null}))),Object(a.b)("h2",{id:"learning-resources"},"Learning Resources"),Object(a.b)("p",null,"The WIZnet team page in the ARM mbed provides mbed libraries and\nexamples for WIZnet products."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mbed.org/teams/WIZnet/"}),"WIZnet Team page"))),Object(a.b)("p",null,"There are mbed libraries below which are used for Hardware TCP/IP chip\n(W5500) and WIZnet TCP/IP Offload Engine (W7500)."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mbed.org/teams/WIZnet/code/WIZnetInterface/"}),"WIZnetInterface page"))),Object(a.b)("h2",{id:"related-links"},"Related Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"Tutorial(Eng).md"}),"Starter Kit Tutorial"))))}s.isMDXComponent=!0},608:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=n,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||a;return r?i.a.createElement(m,c({ref:t},b,{components:r})):i.a.createElement(m,c({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<a;b++)o[b]=r[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);