(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(516)),c={id:"getting_started_w6100evb",title:"Getting Started with the W6100-EVB",date:new Date("2020-04-03T00:00:00.000Z")},i={unversionedId:"Product/iEthernet/W6100/getting_started_w6100evb",id:"Product/iEthernet/W6100/getting_started_w6100evb",isDocsHomePage:!1,title:"Getting Started with the W6100-EVB",description:"Check the board",source:"@site/docs/Product/iEthernet/W6100/getting_started.md",permalink:"/docs/Product/iEthernet/W6100/getting_started_w6100evb",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W6100/getting_started.md"},b=[{value:"Check the board",id:"check-the-board",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"How to upload firmware",id:"how-to-upload-firmware",children:[{value:"Flash programming via UART",id:"flash-programming-via-uart",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"check-the-board"},"Check the board"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"If you've just purchased W6100-EVB, let the following points for the\nchecking board check & operation at the first time."),Object(a.b)("br",{parentName:"p"}),"\n","Connect your board to a PC using USB and connect LAN cable. ",Object(a.b)("strong",{parentName:"p"},"USB is\nMicro B USB type.")," W6100-EVB doesn't care uses Micro USB B type or\nDC-JACK(DC-5V) ",Object(a.b)("strong",{parentName:"p"},"Don't forget: It\nmust be supplied DC-5V"),Object(a.b)("br",{parentName:"p"}),"\n","The W6100-EVB can use be Micro USB B type or DC-JACK to the power\nsupply. Users can the choice that one of both."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"LAN Connector"),Object(a.b)("br",{parentName:"p"}),"\n","When users did connect to LAN cable, users should be check\nRJ-45(ethernet connector) LEDs. There are two indicator LEDs in RJ-45.\nOrange LED indicates 100M ACT. Green LED indicates LINK."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"hello-world"},"Hello World"),Object(a.b)("p",null,'This section is descriptive to W6100-EVB operation. let the following\npoints for the board operation. W6100-EVB supported to eclipse loopback\nexample code. Make new W6100-EVB Project is clicking on this link. If\nyou want to know "How to download the program" click on this link.'),Object(a.b)("h4",{id:"1-serial-debug-message-print-out"},"1","."," Serial Debug message print out"),Object(a.b)("p",null,'The board outputs serial "debug" message via Micro B USB port (virtual\nCOM Port). This will give you info about network configuration and\nloopback socket.',Object(a.b)("br",{parentName:"p"}),"\n","Check the virtual COM port number in your system's properties.",Object(a.b)("br",{parentName:"p"}),"\n","Please connect with any terminal to that serial port with\n",Object(a.b)("strong",{parentName:"p"},"115200.8.N.1"),"."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w6100/w6100_evb/debug_msg.jpg",alt:null}))),Object(a.b)("h4",{id:"4-loopback-test"},"4","."," Loopback test"),Object(a.b)("p",null,"If you need detailed figures, please refer\nto the below link.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:""}),"TCP and\nUDP loopback\ntest")),Object(a.b)("p",null,"The loopback example runs with a TCP session and a UDP session."),Object(a.b)("p",null,"First, Board and your PC should have the network config with the same\nnetwork range.",Object(a.b)("br",{parentName:"p"}),"\n","If you want to modify board-side, edit the following code in\n","[","src",">",">","LB","_","main.c","]"," with the same range which your PC has. If you want\nto modify your PC-side, refer to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:""}),"IP\nconfiguration"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"wiz_NetInfo gWIZNETINFO = { .mac = {0x00,0x08,0xdc,0x57,0x57,0x20},\n                            .ip = {192,168,11,16},\n                            .sn = {255, 255, 255, 0},\n                            .gw = {192, 168, 11, 1},\n                            .dns = {8, 8, 8, 8},\n                            .dhcp = NETINFO_STATIC,\n                            .lla = {0xfe,0x80, 0x00,0x00,\n                                 0x00,0x00, 0x00,0x00,\n                                 0x02,0x08, 0xdc,0xff,\n                                 0xfe,0x57, 0x57,0x61},\n                            .gua={0x20,0x01,0x02,0xb8,\n                                 0x00,0x10,0x00,0x01,\n                                 0x02,0x08,0xdc,0xff,\n                                 0xfe,0x57,0x57,0x61},\n                            .sn6={0xff,0xff,0xff,0xff,\n                                 0xff,0xff,0xff,0xff,\n                                 0x00,0x00,0x00, 0x00,\n                                 0x00,0x00,0x00,0x00},\n                            .gw6={0xfe, 0x80, 0x00,0x00,\n                                  0x00,0x00,0x00,0x00,\n                                  0x02,0x00, 0x87,0xff,\n                                  0xfe,0x08, 0x4c,0x81},\n                            };\n\n")),Object(a.b)("h5",{id:"tcp"},"TCP"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Port 5000 : IPv6"),Object(a.b)("li",{parentName:"ul"},"Port 5001 : IPv4")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Connect to Board ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Using ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:""}),"Hercules test program")," or\nothers, try to connect to board with xxx.xxx.xxx.xxx listen port\n5000."))),Object(a.b)("li",{parentName:"ol"},"When connected",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"send data to board "),Object(a.b)("li",{parentName:"ul"},"check whether the loopback data is same to what it sent before."))),Object(a.b)("li",{parentName:"ol"},"When failed to connect",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Check link status."),Object(a.b)("li",{parentName:"ul"},"Check ping test"),Object(a.b)("li",{parentName:"ul"},"Check network config."),Object(a.b)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"firmware"},"Firmware"),Object(a.b)("p",null,"W6100-EVB firmware project based on TrueSTUDIO. For more details about\nTrueSTUDIO, please refer to below link."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Download the Libraries and\nApplication example source code for W6100-EVB")),Object(a.b)("p",null,"\ud83c\udf0e",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Wiznet/"}),"https://github.com/Wiznet/")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"how-to-upload-firmware"},"How to upload firmware"),Object(a.b)("h3",{id:"flash-programming-via-uart"},"Flash programming via UART"),Object(a.b)("h4",{id:"1-how-to-use-w6100-evb-isp-mode"},"1","."," How to use W6100-EVB ISP mode"),Object(a.b)("p",null,"Press the 'Boot0' push button switch on board until turn on the board\nafter reset or power supply."),Object(a.b)("h4",{id:"2-run-the-stmicroelectronics-flash-loader-demonstrator"},"2","."," Run the STMicroelectronics Flash loader demonstrator"),Object(a.b)("p",null,"STMicroelectronics Flash loader demonstrator is a program to perform\nin-system programming (ISP) of the MCU flash via its UART.",Object(a.b)("br",{parentName:"p"}),"\n","\ud83c\udf0e",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.st.com/en/development-tools/flasher-stm32.html"}),"'ST Flash lodaer\ndemonstrator' download\npage")),Object(a.b)("h4",{id:"3-tool-settings"},"3","."," Tool settings"),Object(a.b)("p",null,"Set the settings on main window of Flash loader demonstrator program. It\nis easy to set along with each step.",Object(a.b)("br",{parentName:"p"}),"\n","The figure below shows the default configuration for W6100-EVB."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w6100/w6100_evb/4.png",alt:null}))),Object(a.b)("h4",{id:"4-click-to-next-button"},"4","."," Click to 'Next' button"),Object(a.b)("p",null,"refer to below pictures If you do not go to the next page in flash\nloader demonstrator, users try again this action. 'Press the 'Boot0'\npush button switch on board until turn on the board after reset or power\nsupply.'"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w6100/w6100_evb/5.png",alt:null})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w6100/w6100_evb/6.png",alt:null})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w6100/w6100_evb/7.png",alt:null})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w6100/w6100_evb/8.png",alt:null})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w6100/w6100_evb/9.png",alt:null}))),Object(a.b)("h4",{id:"5-run-the-new-program"},"5","."," Run the new program"),Object(a.b)("p",null,"After finish to flash programming and board reset, The MCU do running\nthe program",Object(a.b)("br",{parentName:"p"}),"\n","When the running to loopback program, as below picture serial debug\nmessage print out. ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/w6100/w6100_evb/debug_msg.jpg",alt:null}))),Object(a.b)("hr",null))}p.isMDXComponent=!0},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||a;return n?o.a.createElement(m,i(i({ref:t},l),{},{components:n})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);