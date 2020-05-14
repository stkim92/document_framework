(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{550:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(652)),i={id:"getting_started",title:"Getting Started",date:new Date("2020-04-07T00:00:00.000Z")},c={id:"Product/iEthernet/W5500/W5500-EVB/getting_started",title:"Getting Started",description:"## Content",source:"@site/docs/Product/iEthernet/W5500/W5500-EVB/Getting_Started.md",permalink:"/document_framework/docs/Product/iEthernet/W5500/W5500-EVB/getting_started",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5500/W5500-EVB/Getting_Started.md",sidebar:"someSidebar",previous:{title:"W5500-EVB",permalink:"/document_framework/docs/Product/iEthernet/W5500/W5500-EVB/w5500_evb"},next:{title:"Make New Projects",permalink:"/document_framework/docs/Product/iEthernet/W5500/W5500-EVB/make_new_projects"}},b=[{value:"Content",id:"content",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"Firmware",id:"firmware",children:[]},{value:"Downloading a new program",id:"downloading-a-new-program",children:[{value:"Flash programming via UART",id:"flash-programming-via-uart",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"content"},"Content"),Object(o.b)("h1",{id:"getting-started"},"Getting Started"),Object(o.b)("h2",{id:"hello-world"},"Hello World"),Object(o.b)("p",null,"If you've just purchased W5500 EVB, let the following points for the\nchecking board operation at the first time."),Object(o.b)("p",null,"Connect your board to a PC using USB and connect LAN cable. ",Object(o.b)("strong",{parentName:"p"},"Don't forget : LAN cable should be\nconnected to the board"),Object(o.b)("br",{parentName:"p"}),"\n","The W5500 EVB Need to be LAN cable connected because default demo\nfirmware check the PHY link status periodically. If the LAN cable is not\nconnected, the board does not operate and RGB LED is not blinking."),Object(o.b)("h4",{id:"1-rgb-led-blinky"},"1. RGB LED blinky"),Object(o.b)("p",null,"If the board operate normal at the first time, On board RGB LED is\nblinking forever. The red, green and blue LEDs are blink alternated."),Object(o.b)("h4",{id:"2-onoff-the-rgb-led-blinky"},"2. On/Off the RGB LED blinky"),Object(o.b)("p",null,"The RGB LED status will be changed if the button1 (SW1) pressed (LED\nBlinky On/Off). In this case, the board outputs 'On' or 'Off' message\nvia serial debug port."),Object(o.b)("h4",{id:"3-serial-debug-message-print-out"},"3. Serial Debug message print out"),Object(o.b)("p",null,'The board outputs serial "debug" message via USB port (virtual COM\nPort). This will give you info about network configuration and loopback\nsocket.',Object(o.b)("br",{parentName:"p"}),"\n","Check the the virtual COM port number in your systems properties.",Object(o.b)("br",{parentName:"p"}),"\n","Please connect with any terminal to that serial port with\n",Object(o.b)("strong",{parentName:"p"},"115200.8.N.1"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/downloading_serial_printout_on_terminal.jpg",alt:null}))),Object(o.b)("h4",{id:"4-loopback-test"},"4. Loopback test"),Object(o.b)("p",null," The following is the\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/osh/energymicro/tinygecko#loopback"}),"loopback test procedure\nof the 'Tinygecko' board + W5500\nchip"),". (Network configuration\ninformation can vary among different firmware.)",Object(o.b)("br",{parentName:"p"}),"\n","Please progress the test in accordance with the following procedure.",Object(o.b)("br",{parentName:"p"}),"\n","If you need detailed figures, please refer to the next link.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/osh/cookie/loopback_test#TCP%20and%20UDP%20loopback%20test"}),"loopback","_","test","#","TCP and\nUDP loopback\ntest")),Object(o.b)("p",null,"The loopback example runs with a TCP session and a UDP session."),Object(o.b)("p",null,"First, Board and your PC should have the network config with the same\nnetwork range.",Object(o.b)("br",{parentName:"p"}),"\n","If you want to modify board-side, edit the following code in\n","[","src",">",">","LB","_","main.c","]"," with the same range which your PC has. If you want\nto modify your PC-side, refer to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/osh/cookie/ip_conf_b"}),"IP\nconfiguration"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"wiz_NetInfo gWIZNETINFO = { .mac = {0x00, 0x08, 0xdc,0x00, 0xab, 0xcd}, //<-mac should be unique.\n                            .ip = {192, 168, 1, 123},\n                            .sn = {255,255,255,0},\n                            .gw = {192, 168, 1, 1},\n                            .dns = {0,0,0,0},\n                            .dhcp = NETINFO_STATIC };\n")),Object(o.b)("h5",{id:"tcp"},"TCP"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Connect to Board ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Using ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/osh/cookie/loopback_test"}),"Hercules test program")," or\nothers, try to connect to board with xxx.xxx.xxx.xxx listen port\n5000."))),Object(o.b)("li",{parentName:"ol"},"When connected",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"send data to board "),Object(o.b)("li",{parentName:"ul"},"check whether the loopback data is same to what it sent before."))),Object(o.b)("li",{parentName:"ol"},"When failed to connect",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Check link status."),Object(o.b)("li",{parentName:"ul"},"Check ping test"),Object(o.b)("li",{parentName:"ul"},"Check network config."),Object(o.b)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),Object(o.b)("h5",{id:"udp"},"UDP"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Send data",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Using ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/osh/cookie/loopback_test"}),"Hercules test program")," or\nothers, send to board's xxx.xxx.xxx.xxx port 3000."))),Object(o.b)("li",{parentName:"ol"},"When success",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"check to the loopback data"))),Object(o.b)("li",{parentName:"ol"},"When fail ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Check link status."),Object(o.b)("li",{parentName:"ul"},"Check ping test"),Object(o.b)("li",{parentName:"ul"},"Check network config."),Object(o.b)("li",{parentName:"ul"},"Check the security program as virus vaccines and fire-wall on\nyour PC. ")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"firmware"},"Firmware"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/page%3Eproducts/w5500/w5500_evb/firmware",alt:"firmware"}))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"downloading-a-new-program"},"Downloading a new program"),Object(o.b)("h3",{id:"flash-programming-via-uart"},"Flash programming via UART"),Object(o.b)("h4",{id:"1-w5500-evb-enter-the-isp-mode"},"1. W5500 EVB enter the ISP mode"),Object(o.b)("p",null,"Press the 'ISP' push button switch on board until turn on the board\nafter reset or power supply."),Object(o.b)("h4",{id:"2-run-the-flash-magic-tool"},"2. Run the Flash Magic tool"),Object(o.b)("p",null,"Flash Magic is a program to perform in-system programming (ISP) of the\nLPC flash via its UART.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/icons/link.png",alt:null})),Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.flashmagictool.com/"}),"'Flash Magic' download\npage")),Object(o.b)("h4",{id:"3-tool-settings"},"3. Tool settings"),Object(o.b)("p",null,"Set the settings on main window of Flash Magic program. It is easy to\nset along with each step.",Object(o.b)("br",{parentName:"p"}),"\n","The figure below shows the default configuration for W5500 EVB."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/downloading_nxp_flashmagic_3_tempsensor_box.jpg",alt:null}))),Object(o.b)("h4",{id:"4-flash-programming-start"},"4. Flash programming start"),Object(o.b)("p",null,"Press the 'Start' button on main window of Flash Magic program."),Object(o.b)("h4",{id:"5-run-the-new-program"},"5. Run the new program"),Object(o.b)("p",null,"After flash programming and board reset, The MCU is now running the\nprogram;",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/downloading_serial_printout_on_terminal_tempsensor.jpg",alt:null}))),Object(o.b)("hr",null))}p.isMDXComponent=!0},652:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);