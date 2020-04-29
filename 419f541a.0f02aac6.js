(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{254:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(9),a=(r(0),r(547)),c={id:"network_exercise_1_tcp_loopback_eng",title:"Network Exercise 1. TCP loopback(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},o={id:"Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/network_exercise_1_tcp_loopback_eng",title:"Network Exercise 1. TCP loopback(Eng)",description:"## Content",source:"@site/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/Network_Exercise_1._TCP_loopback(Eng).md",permalink:"/document_framework/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/network_exercise_1_tcp_loopback_eng",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/Network_Exercise_1._TCP_loopback(Eng).md",sidebar:"someSidebar",previous:{title:"Exercise 7. Photoresistor(Eng)",permalink:"/document_framework/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/exercise_7_photoresistor_eng"},next:{title:"Network Exercise 2. LED with TCP(Eng)",permalink:"/document_framework/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/network_exercise_2_led_with_tcp_eng"}},l=[{value:"Content",id:"content",children:[]},{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Hardware",id:"hardware",children:[{value:"The Circuit",id:"the-circuit",children:[]},{value:"Connections",id:"connections",children:[]}]},{value:"Software",id:"software",children:[{value:"Test Software",id:"test-software",children:[]},{value:"Example Code",id:"example-code",children:[]},{value:"How to run and test result",id:"how-to-run-and-test-result",children:[]}]},{value:"Learning Resources",id:"learning-resources",children:[]},{value:"Related Links",id:"related-links",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("h1",{id:"network-exercise-1-testing-tcp-loopback-communication"},"Network Exercise 1. Testing TCP loopback communication"),Object(a.b)("h2",{id:"outline"},"Outline"),Object(a.b)("p",null,"This is an exercise to test TCP loopback communication. The PC runs as a\nTCP Client and the WIZwiki board runs as a TCP Server. The TCP server\nreturns the messages sent by the TCP client."),Object(a.b)("p",null,"User can learn how to drive a network using the TOE (TCP/IP Offload\nEngine) of W7500."),Object(a.b)("h2",{id:"what-you-need"},"What you need"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZwiki-W7500"),Object(a.b)("li",{parentName:"ul"},"USB cable"),Object(a.b)("li",{parentName:"ul"},"LAN cable"),Object(a.b)("li",{parentName:"ul"},"Hub switch (Router with DHCP function)")),Object(a.b)("h2",{id:"hardware"},"Hardware"),Object(a.b)("h3",{id:"the-circuit"},"The Circuit"),Object(a.b)("p",null,"No special circuit."),Object(a.b)("h3",{id:"connections"},"Connections"),Object(a.b)("p",null,"Connect the PC and the router (with DHCP function) with LAN cable.\nConnect the router and the WIZwiki board with LAN cable. Connect the PC\nand the WIZwiki board with USB cable."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_en/tcp_loopback_system_config_en.png",alt:null}))),Object(a.b)("h2",{id:"software"},"Software"),Object(a.b)("h3",{id:"test-software"},"Test Software"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Terminal program",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"EX) Teraterm, Hercules, Hyperterminal, etc."),Object(a.b)("li",{parentName:"ul"},"It is for serial port message checking"),Object(a.b)("li",{parentName:"ul"},"Refer to the next link for the serial port example")))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:""}),"Exercise 2. Data output using serial port"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TCP/IP Client Server terminal program",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"EX) Hercules, etc."),Object(a.b)("li",{parentName:"ul"},"It is for transmitting message using the TCP/IP Client Server\nterminal")))),Object(a.b)("h3",{id:"example-code"},"Example Code"),Object(a.b)("p",null,"Use the example code in the page below."),Object(a.b)("p",null,"\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mbed.org/teams/WIZnet/code/TCPEchoServer-WIZwiki-W7500/?platform=WIZwiki-W7500"}),"https://developer.mbed.org/teams/WIZnet/code/TCPEchoServer-WIZwiki-W7500/?platform=WIZwiki-W7500")),Object(a.b)("p",null,'Click on the red part of the "Import this program" section in the figure\nbelow.'),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_1.jpg",alt:null}))),Object(a.b)("p",null,"A pop-up window will appear as shown below.\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_2.jpg",alt:null}))),Object(a.b)("p",null,'The "Source URL" and "Import As" have default values. User can change\nthe "Import Name" if one wants. If clicking on the red part of the\n"Import", the program is copied to the mbed compiler environment.'),Object(a.b)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),Object(a.b)("p",null,"Execute serial terminal in PC. First push Reset switch of WIZwiki board\nand check messages.\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_server1.jpg",alt:null}))),Object(a.b)("p",null,'Execute Hercules program in PC. Select TCP Client menu and configure the\nIP and Port. Click on the red part of the "Ping" button in the figure\nbelow. ',Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_client1.jpg",alt:null}))),Object(a.b)("p",null,'Click the "Connect" button and check connection.\n',Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_client2.jpg",alt:null}))),Object(a.b)("p",null,"The TCP Client sends a message to WIZwiki board and the WIZwiki board\nsends a reversed message to the TCP client. Check the Loopback message\nas shown below."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_client3.jpg",alt:null}))),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_server2.jpg",alt:null}))),Object(a.b)("h2",{id:"learning-resources"},"Learning Resources"),Object(a.b)("p",null,"The WIZnet team page in the ARM mbed provides mbed libraries and\nexamples for WIZnet products."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mbed.org/teams/WIZnet/"}),"WIZnet Team page"))),Object(a.b)("p",null,"There are mbed libraries below which are used for Hardware TCP/IP chip\n(W5500) and WIZnet TCP/IP Offload Engine (W7500)."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mbed.org/teams/WIZnet/code/WIZnetInterface/"}),"WIZnetInterface\npage"))),Object(a.b)("h2",{id:"related-links"},"Related Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:""}),"Starter Kit Tutorial"))))}p.isMDXComponent=!0},547:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},u=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return r?i.a.createElement(m,o({ref:t},b,{components:r})):i.a.createElement(m,o({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<a;b++)c[b]=r[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);