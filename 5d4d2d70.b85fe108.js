(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(2),r=n(6),i=(n(0),n(578)),a={id:"wiz107sr_um",title:"WIZ107SR User's Manual",date:new Date("2020-04-16T00:00:00.000Z")},s={unversionedId:"Product/S2E-Module/wiz107sr_um",id:"Product/S2E-Module/wiz107sr_um",isDocsHomePage:!1,title:"WIZ107SR User's Manual",description:"How to Start",source:"@site/docs\\Product\\S2E-Module\\wiz107sr_UM.md",permalink:"/Product/S2E-Module/wiz107sr_um",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/wiz107sr_UM.md",sidebar:"docs",previous:{title:"WIZ107SR",permalink:"/Product/S2E-Module/wiz107sr"},next:{title:"ioModule",permalink:"/Product/ioModule/iomodule"}},c=[{value:"How to Start",id:"how-to-start",children:[]},{value:"Configuration by Network",id:"configuration-by-network",children:[]},{value:"(1) Search",id:"1-search",children:[]},{value:"(2) Setting",id:"2-setting",children:[]},{value:"(3) new FW Upload",id:"3-new-fw-upload",children:[]},{value:"(4) Reset",id:"4-reset",children:[]},{value:"(5) Factory default settings",id:"5-factory-default-settings",children:[]},{value:"(6) Ping",id:"6-ping",children:[]},{value:"(8) EXIT",id:"8-exit",children:[]},{value:"(9) &quot;Serial to Ethernet&quot; search result list",id:"9-serial-to-ethernet-search-result-list",children:[]},{value:"(10) Network Seting",id:"10-network-seting",children:[]},{value:"(11) Network Operation Mode",id:"11-network-operation-mode",children:[]},{value:"(12) DDNS Setting",id:"12-ddns-setting",children:[]}],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"how-to-start"},"How to Start"),Object(i.b)("p",null,"As you can see in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/products/wiz107sr/wiz107sr_sch/start"}),"schematic"),"\nand at the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/products/wiz107sr/wiz107sr_EVB/start"}),"EVB")," the module\nprovide a 12 pin connection header (2.54mm = 100mil) with 3.3V TTL level\nIOs (5V tollerant) or +/-10V RS-232 level serial interface. Therefor the\nmodule need a stable 3.3V power suply to start operation.",Object(i.b)("br",{parentName:"p"}),"\n","As the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/products/w7100a/start"}),"W7100A")," chip provide Hardwired TCP/IP\nthere is no operation system inside this Serial-to-Ethernet Gateway. The\nfirmware is a 'simple' status machine and within a few ms the module\noperates normally with full performance.",Object(i.b)("br",{parentName:"p"}),"\n","To start the module need a configuration. There are 3 ways for that:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"by our Config Tool for Windows PCs over Ethernet / Internet"),Object(i.b)("li",{parentName:"ol"},'by serial command - after entering software triggered "command mode"\nusing the UART I/F'),Object(i.b)("li",{parentName:"ol"},"by hardware signal triggered config mode (also use the UART I/F)")),Object(i.b)("p",null,'Below the 3 configuration sections we will also show you some\napplication setup examples (Server, Client, mixed mode) - the "How to\nUse" section.'),Object(i.b)("h3",{id:"configuration-by-network"},"Configuration by Network"),Object(i.b)("p",null,"Please install our \ud83c\udf0e",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://eucache.wiznet.co.kr/sub_modules/en/product/product_detail.asp?Refid=706&page=1&cate1=5&cate2=8&cate3=0&pid=1092&cType=2"}),"Config\nTool"),"\non your Windows PC. It's open source so you can customize and check the\ninsides. Within this config tool you find also the Network setup part as\nthe first flag (part 10, 11 & 12):  "),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/wiz107sr/wiz107sr_um/wiz107sr_network.jpg",alt:null})),Object(i.b)("br",{parentName:"p"}),"\n",'The start position of our WIZ107SR / WIZ108SR config tool, after\n"Search".  '),Object(i.b)("h3",{id:"1-search"},"(1) Search"),Object(i.b)("p",null,'You always start with "Search".',Object(i.b)("br",{parentName:"p"}),"\n","The Search function (pop-up window) is used to find all devices existing\nin the same LAN or in WAN. By using UDP broadcast, all connected devices\nin the same subnet will be found. If the TCP unicast method is checked,\nthe specified IP address must be given. The founded device will be\nlisted in the \u201cSerial to Ethernet\u201d tree with it's MAC address. The\ncomplete modules current setup is transfered and can now be changed.",Object(i.b)("br",{parentName:"p"}),"\n","Please, note the identification code must be input if the device has\nbeen configured with an identification code.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/wiz107sr/wiz107sr_um/wiz107sr_search-udp.jpg",alt:null}))),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/wiz107sr/wiz107sr_um/wiz107sr_search-tcp.jpg",alt:null})),Object(i.b)("br",{parentName:"p"}),"\n","Search by UDP broadcast or IP address unicast - and identification code\nprotection as option.  "),Object(i.b)("h3",{id:"2-setting"},"(2) Setting"),Object(i.b)("p",null,"This function is to complete the configuration\nchange.",Object(i.b)("br",{parentName:"p"}),"\n","If (after search) you select the MAC Address from the \u201cSerial to\nEthernet\u201d tree, the current configuration value of the module will be\ndisplayed. Change the configuration and click \u201cSetting\u201d button to\ncomplete the configuration. The module will re-initialize with the\nchanged configuration. Changed value are permanently stored in the\nEEPROM of the module. Thus, the value is not removed even though power\nis disconnected.  "),Object(i.b)("h3",{id:"3-new-fw-upload"},"(3) new FW Upload"),Object(i.b)("p",null,'From time to time we offer a new firmware\n(FW) for function and bug-fix updates. You can easy update the FW "over\nthe air", means by Network. More about that function further down.  '),Object(i.b)("h3",{id:"4-reset"},"(4) Reset"),Object(i.b)("p",null,"You can reset and restart the selected module if you\nselect the MAC Address from the tree and click \u201cReset\u201d button.  "),Object(i.b)("h3",{id:"5-factory-default-settings"},"(5) Factory default settings"),Object(i.b)("p",null,"All configuration is set back to\nthe original Factory default values if you select the MAC Address from\nthe tree and click \u201cFactory\u201d button.  "),Object(i.b)("h3",{id:"6-ping"},"(6) Ping"),Object(i.b)("p",null,"It will Pop-up a Simple Ping application program, you\ncan test the ping operation."),Object(i.b)("h4",{id:"7-firewall"},"(7) Firewall"),Object(i.b)("p",null,"Popup the Windows Firewall setup program.  "),Object(i.b)("h3",{id:"8-exit"},"(8) EXIT"),Object(i.b)("p",null,"Close the configuration Tool Program.  "),Object(i.b)("h3",{id:"9-serial-to-ethernet-search-result-list"},'(9) "Serial to Ethernet" search result list'),Object(i.b)("p",null,"If you click\n\u201cSearch\u201d button, all modules' MAC address on a same subnet will be\ndisplayed in this area. You can see the basic information such as Model\nname, Firmware version, connection status ...  "),Object(i.b)("h3",{id:"10-network-seting"},"(10) Network Seting"),Object(i.b)("p",null,"Select IP setting mode, you can select a\nStatic setup or dynamic IP-address by DHCP.",Object(i.b)("br",{parentName:"p"}),"\n","(PPPoE mode is not supported in the WIZ107SR)  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Using a static IP Address:",Object(i.b)("br",{parentName:"li"}),"This is an option for setting WIZ107SR module\u2019s IP with static IP\naddress. Firstly, select the Modules' MAC address which you wanted to\nset as static IP in the board list. Then \u201cDevice IP, Subnet, Gateway\nbox\u201d will be enabled. Input a static IP address and click \u201csetting\u201d\nbutton. Then the Module is restarting with that IP address.  "),Object(i.b)("li",{parentName:"ul"},'DHCP: Set this option to use DHCP mode. Firstly, check \u2018DHCP\u2019 and\nclick \u2018Setting\u2019 button. If IP address is successfully acquired from DHCP\nserver, the MAC address will be displayed again on the configuration\nwindow. As it takes some time to acquire IP address from DHCP server you\nmight need to try "Search" a few times. When a module on the board list\nis displayed again and selected, the IP address, Subnet mask and Gateway\nare displayed. If the module could not acquire a new network information\nfrom a DHCP server, the IP address, Gateway Address and Subnet mask will\nbe initialized to 0.0.0.0. You might try again or try a static IP\nsetup.  ')),Object(i.b)("h3",{id:"11-network-operation-mode"},"(11) Network Operation Mode"),Object(i.b)("p",null,"Client / server / mixed : This is\nto select the communication method based on TCP. TCP is the protocol to\nestablish the connection before data communication, but UDP just\nprocesses the data communication without connection establishment. The\nNetwork mode of WIZ107SR can be divided into TCP Server, TCP Client and\nMixed mode according to the connection establishing method. At the TCP\nserver mode, WIZ107SR operates as server on the process of connection,\nand waits for the connection trial from the client. WIZ107SR operates as\nclient at the TCP Client mode on the process of connection, and tries to\nconnect to the server\u2019s IP and Port. Mixed modes supports both of Server\nand Client. The communication process of each mode is as below."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"TCP server mode Communication")),Object(i.b)("p",null,"At the TCP Server mode, WIZ107SR waits for the connection requests.\nCP Server mode can be useful when the monitoring center tries to connect\nto the device (where WIZ107SR is installed) in order to check the status\nor provide the commands. In normal time WIZ107SR is on the waiting\nstatus, and if there is any connection request (SYN) from the monitoring\ncenter, the connection is established (ESTABLISH), and data\ncommunication is processed (Data Transaction). Finally connection is\nclosed (FIN).",Object(i.b)("br",{parentName:"p"}),"\n","In order to operate this mode, Local IP, Subnet, Gateway Address and\nLocal Port Number should be configured first."),Object(i.b)("p",null,"The Data transmission proceeds as follows,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The host connects to the WIZ107SR which is configured as TCP Server\nmode.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"As the connection is established, data can be transmitted in both\ndirections \u2013 from the host to the WIZ107SR, and from the WIZ107SR to the\nhost."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"TCP client mode Communication")),Object(i.b)("p",null,"If WIZ107SR is set as TCP Client, it tries to establish connection to\nthe server. To operate this mode, Local IP, Subnet, Gateway Address,\nServer IP, and Server port number should be set. If server IP had domain\nname, use DNS function. In TCP Client mode, WIZ107SR can actively\nestablish a TCP connection to a host computer when power is supplied."),Object(i.b)("p",null,"The Data transmission proceeds as follows:"),Object(i.b)("p",null,"  1.As power is supplied, WIZ107SR board operating as TCP client mode\nactively establishes a connection to the server."),Object(i.b)("p",null,"  2.If the connection is complete, data can be transmitted in both\ndirections \u2013 from the host to the WIZ107SR and from WIZ107SR to the\nhost."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Mixed mode Communication")),Object(i.b)("p",null,"In this mode, WIZ107SR normally operates as TCP Server and waits for the\nconnection request from the peer. However, if WIZ107SR receives data\nfrom the serial device before connection is established, it changes to\nthe client mode and sends the data to the server IP. Therefore, at the\nmixed mode, the server mode is operated prior to the client mode.",Object(i.b)("br",{parentName:"p"}),"\n","As like TCP Server mode, the Mixed mode is useful for the case that the\nmonitoring center tries to connect to the serial device (in which\nWIZ107SR is used) to check device status. In addition to this, if any\nemergency occurs in the serial device, the module will change to Client\nmode to establish the connection to the server and deliver the emergency\nstatus of the device."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"UDP mode Communication")),Object(i.b)("p",null,"UDP is not a connection oriented protocol. But the communication port\nshould also be defined well. If the UDP mode is selected, the data from\nserial interface can be defined where to delivery via the \u201cSever IP\nAddress\u201d and \u201cPort\u201d, and the WIZ107SR can also be defined where to\nreceive Ethernet data from via the \u201cRemote Peer IP Address\u201d definition.\nIf the data destination and source are the same, the two IP address will\nalso be the same. Please note the destination and source are using the\nsame port.  "),Object(i.b)("h3",{id:"12-ddns-setting"},"(12) DDNS Setting"))}d.isMDXComponent=!0},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,p=u["".concat(a,".").concat(b)]||u[b]||h[b]||i;return n?r.a.createElement(p,s(s({ref:t},l),{},{components:n})):r.a.createElement(p,s({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);