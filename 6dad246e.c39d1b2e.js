(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(516)),c={id:"w5100s_getting_started",title:"Getting Started with W5100S-EVB",date:new Date("2020-04-09T00:00:00.000Z")},i={unversionedId:"Product/iEthernet/W5100S/w5100s_getting_started",id:"Product/iEthernet/W5100S/w5100s_getting_started",isDocsHomePage:!1,title:"Getting Started with W5100S-EVB",description:"Check the board",source:"@site/docs\\Product\\iEthernet\\W5100S\\w5100s_getting_started.md",permalink:"/docs/Product/iEthernet/W5100S/w5100s_getting_started",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/w5100s_getting_started.md"},b=[{value:"Check the board",id:"check-the-board",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"How to upload firmware",id:"how-to-upload-firmware",children:[{value:"Flash programming via UART",id:"flash-programming-via-uart",children:[]}]}],l={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"check-the-board"},"Check the board"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"If you've just purchased W5100S-EVB, let the following points for the\nchecking board check & operation at the first time."),Object(o.b)("br",{parentName:"p"}),"\n","Connect your board to a PC using USB and connect LAN cable. ",Object(o.b)("strong",{parentName:"p"},"USB is\nMicro B USB type.")," W5100S-EVB doesn't care uses Micro USB B type or\nDC-JACK(DC-5V)"),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Don't forget: It must be supplied DC-5V"),Object(o.b)("br",{parentName:"p"}),"\n","The W5100S-EVB can use be Micro USB B type or DC-JACK to the power\nsupply. Users can the choice that one of both."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When users did connect to LAN cable, users should be check\nRJ-45(ethernet connector) LEDs. There are two indicator LEDs in RJ-45.\nOrange LED indicates 100M ACT. Green LED indicates LINK."))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"hello-world"},"Hello World"),Object(o.b)("p",null,'This section is descriptive to W5100S-EVB operation. let the following\npoints for the board operation. W5100S-EVB supported to eclipse loopback\nexample code. Make new W5100S-EVB Project is clicking on this link. If\nyou want to know "How to download the program" click on this link.'),Object(o.b)("h4",{id:"1-serial-debug-message-print-out"},"1","."," Serial Debug message print out"),Object(o.b)("p",null,'The board outputs serial "debug" message via Micro B USB port (virtual\nCOM Port). This will give you info about network configuration and\nloopback socket.',Object(o.b)("br",{parentName:"p"}),"\n","Check the virtual COM port number in your system's properties.",Object(o.b)("br",{parentName:"p"}),"\n","Please connect with any terminal to that serial port with\n",Object(o.b)("strong",{parentName:"p"},"115200.8.N.1"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/serial_debug_v2.png",alt:null}))),Object(o.b)("h4",{id:"4-loopback-test"},"4","."," Loopback test"),Object(o.b)("p",null,"If you need detailed figures, please refer to the below link.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../Open-Source-Hardware/cookie#tcp-server-loopback"}),"TCP and UDP loopback test")),Object(o.b)("p",null,"The loopback example runs with a TCP session and a UDP session."),Object(o.b)("p",null,"First, Board and your PC should have the network config with the same\nnetwork range.",Object(o.b)("br",{parentName:"p"}),"\n","If you want to modify board-side, edit the following code in\n","[","src",">",">","LB","_","main.c","]"," with the same range which your PC has. If you want\nto modify your PC-side, refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../Open-Source-Hardware/cookie#ip-configuration"}),"IP configuration"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"wiz_NetInfo gWIZNETINFO = { .mac = {0x00, 0x08, 0xdc,0x00, 0xab, 0xcd}, //<-mac should be unique.\n                            .ip = {192, 168, 11, 15},\n                            .sn = {255,255,255,0},\n                            .gw = {192, 168, 11, 1},\n                            .dns = {168,126,63,1},\n                            .dhcp = NETINFO_STATIC };\n")),Object(o.b)("h5",{id:"tcp"},"TCP"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Connect to Board ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Using ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"../../Open-Source-Hardware/cookie#tcp-server-loopback"}),"Hercules test program")," or\nothers, try to connect to board with xxx.xxx.xxx.xxx listen port\n5000."))),Object(o.b)("li",{parentName:"ol"},"When connected",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"send data to board "),Object(o.b)("li",{parentName:"ul"},"check whether the loopback data is same to what it sent before."))),Object(o.b)("li",{parentName:"ol"},"When failed to connect",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Check link status."),Object(o.b)("li",{parentName:"ul"},"Check ping test"),Object(o.b)("li",{parentName:"ul"},"Check network config."),Object(o.b)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),Object(o.b)("h5",{id:"udp"},"UDP"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Send data",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Using ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/../../Open-Source-Hardware/cookie#tcp-server-loopback"}),"Hercules test program")," or\nothers, send to board's xxx.xxx.xxx.xxx port 3000."))),Object(o.b)("li",{parentName:"ol"},"When success",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"check to the loopback data"))),Object(o.b)("li",{parentName:"ol"},"When fail ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Check link status."),Object(o.b)("li",{parentName:"ul"},"Check ping test"),Object(o.b)("li",{parentName:"ul"},"Check network config."),Object(o.b)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"firmware"},"Firmware"),Object(o.b)("p",null,"W5100S-EVB firmware project based on Eclipse IDE. For more details about\nEclipse IDE, please refer to below link."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"}," Download the Libraries and Application example source code for W5100S-EVB "),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/github.png",alt:null})),"(",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Wiznet/W5100S-EVB"}),"https://github.com/Wiznet/W5100S-EVB"),")"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"how-to-upload-firmware"},"How to upload firmware"),Object(o.b)("h3",{id:"flash-programming-via-uart"},"Flash programming via UART"),Object(o.b)("h4",{id:"1-how-to-use-w5100s-evb-isp-mode"},"1","."," How to use W5100S-EVB ISP mode"),Object(o.b)("p",null,"Press the 'Boot0' push button switch on board until turn on the board\nafter reset or power supply."),Object(o.b)("h4",{id:"2-run-the-stmicroelectronics-flash-loader-demonstrator"},"2","."," Run the STMicroelectronics Flash loader demonstrator"),Object(o.b)("p",null,"STMicroelectronics Flash loader demonstrator is a program to perform\nin-system programming (ISP) of the MCU flash via its UART.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.st.com/en/development-tools/flasher-stm32.html"}),"'ST Flash loader demonstrator' download page")),Object(o.b)("h4",{id:"3-tool-settings"},"3","."," Tool settings"),Object(o.b)("p",null,"Set the settings on main window of Flash loader demonstrator program. It\nis easy to set along with each step.",Object(o.b)("br",{parentName:"p"}),"\n","The figure below shows the default configuration for W5100S-EVB."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/flash_down.png",alt:null}))),Object(o.b)("h4",{id:"4-click-to-next-button"},"4","."," Click to 'Next' button"),Object(o.b)("p",null,"refer to below pictures If you do not go to the next page in flash\nloader demonstrator, users try again this action. 'Press the 'Boot0'\npush button switch on board until turn on the board after reset or power\nsupply.' ",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/flash_down2.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/flash_down3.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/flash_down4.png",alt:null})),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/flash_down5.png",alt:null}))),Object(o.b)("h4",{id:"5-run-the-new-program"},"5","."," Run the new program"),Object(o.b)("p",null,"After finish to flash programming and board reset, The MCU do running\nthe program",Object(o.b)("br",{parentName:"p"}),"\n","When the running to loopback program, as below picture serial debug\nmessage print out. ",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5100s/w5100s_evb/serial_debug_v2.png",alt:null}))),Object(o.b)("hr",null))}s.isMDXComponent=!0},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);