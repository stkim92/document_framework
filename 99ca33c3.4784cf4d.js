(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{432:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(9),a=(n(0),n(629)),i={id:"single_device_configuration",title:"Single Device Configuration",date:new Date("2020-04-09T00:00:00.000Z")},c={id:"Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/single_device_configuration",title:"Single Device Configuration",description:"CLI Configuration Tool Tutorial # 3\r",source:"@site/docs\\Product\\S2E-Module\\WIZ750SR\\CLI_Config_Tool_Tutorial\\Single_device_configuration.md",permalink:"/document_framework/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/single_device_configuration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/Single_device_configuration.md",sidebar:"someSidebar",previous:{title:"Overview Environment",permalink:"/document_framework/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/overview_environment"},next:{title:"Command Manual-[KO]",permalink:"/document_framework/docs/Product/S2E-Module/WIZ750SR/command_manual-[KO]"}},l=[{value:"1. Usage",id:"1-usage",children:[]},{value:"2. Set device",id:"2-set-device",children:[{value:"Example #1: baud rate",id:"example-1-baud-rate",children:[]},{value:"Example # 2: static IP",id:"example--2-static-ip",children:[]},{value:"Example #3: Client mode &amp; remote IP/Port",id:"example-3-client-mode--remote-ipport",children:[]}]},{value:"3. Firmware update",id:"3-firmware-update",children:[{value:"Step 1: Download Firmware",id:"step-1-download-firmware",children:[]},{value:"Step 2: Set IP address",id:"step-2-set-ip-address",children:[]},{value:"Step 3: Firmware update",id:"step-3-firmware-update",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"CLI Configuration Tool Tutorial # 3"),Object(a.b)("h1",{id:"single-device-configuration"},"Single device configuration"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"1-usage"},"1. Usage"),Object(a.b)("p",null,"The basic command format for single device configuration is as follows."),Object(a.b)("p",null,"'-d' is a device selection option and the parameter is the MAC address\nof the device to be set."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:XX:XX:XX [Options ...]\n")),Object(a.b)("p",null,"You can see the available options with the -h/--help option."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Refer to previous tutorial: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/products/wiz750sr/clitool/option/en"}),"How to use CLI\nConfig")," ")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"2-set-device"},"2. Set device"),Object(a.b)("p",null,"These are some examples about setting single device."),Object(a.b)("h3",{id:"example-1-baud-rate"},"Example ","#","1: baud rate"),Object(a.b)("p",null,"Use the --baud0 option to set the serial baud rate.",Object(a.b)("br",{parentName:"p"}),"\n","Since WIZ750SR is a 1 port device, use '--baud0' option of Channel ","#","0\nOptions."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"//--baud0 BAUD0         baud rate (300|600|1200|1800|2400|4800|9600|14400|19200|28800|38400|57600|115200|230400)//\n")),Object(a.b)("p",null,"To set the baud rate to 9600, set the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:53:AE:B7 --baud0 9600\n\n")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/configtool/single/set_baud.png",alt:null}))),Object(a.b)("p",null,"When the setting is completed, you can check the configuration result\nwith the message."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"example--2-static-ip"},"Example # 2: static IP"),Object(a.b)("p",null,"To set static IP, you need the following information may be:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"IP address"),Object(a.b)("li",{parentName:"ul"},"Subnet mask"),Object(a.b)("li",{parentName:"ul"},"gateway"),Object(a.b)("li",{parentName:"ul"},"DNS (optional)")),Object(a.b)("p",null,"And the options for these settings are:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"--ip IP               Local IP address\n--subnet SUBNET       Subnet mask\n--gw GW               Gateway address\n--dns DNS             DNS server address\n")),Object(a.b)("p",null,"You can set like this."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:53:AE:B7 --ip 192.168.50.100 --subnet 255.255.255.0 --gw 192.168.50.1 --dns 8.8.8.8\n\n")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/configtool/single/set_static.png",alt:null}))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"example-3-client-mode--remote-ipport"},"Example #3: Client mode & remote IP/Port"),Object(a.b)("p",null,"You can change the operation mode to client mode and test by changing\nthe remote IP and port according to your host PC environment."),Object(a.b)("p",null,"A description of the operating mode of WIZ750SR can be found here:",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../User's_Manual-%5BEN%5D.md"}),"WIZ750SR operation mode"),"."),Object(a.b)("p",null,"When operating in the Client mode, you could set up the remote IP and\nport information as well, because it requires the server information to\nbe connected."),Object(a.b)("p",null,"The required option setting information is as follows."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"--nmode0 {0,1,2,3}    Network operation mode (0: tcpclient, 1: tcpserver, 2: mixed, 3: udp)\n--rip0 IP             Remote host IP address / Domain\n--rport0 PORT         Remote host port number\n")),Object(a.b)("p",null,"And you can use the above option to set it as follows."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:53:AE:93 --nmode0 0 --rip0 192.168.50.80 --rport0 6000\n\n")),Object(a.b)("p",null,"Remote IP & port should be set according to the environment."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/single/single_client.png",alt:null}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"3-firmware-update"},"3. Firmware update"),Object(a.b)("h3",{id:"step-1-download-firmware"},"Step 1: Download Firmware"),Object(a.b)("p",null,"You can get firmware file from below links.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ750SR/releases"}),"Official release\nversion")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ750SR/tree/master/Projects/S2E_App/bin"}),"Development\nversion"))),Object(a.b)("p",null,"You must use ",Object(a.b)("strong",{parentName:"p"},"App Boot firmware")," file when doing this."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"step-2-set-ip-address"},"Step 2: Set IP address"),Object(a.b)("p",null,"When do firmware upload, need TCP connection with the device to send\nFirmware file.",Object(a.b)("br",{parentName:"p"}),"\n","So first, use ",Object(a.b)("strong",{parentName:"p"},"-m/--multiset")," option for set IP address to the ",Object(a.b)("strong",{parentName:"p"},"same\nnetwork-band as host"),"."),Object(a.b)("p",null,"If your host IP address is '192.168.50.80', you can set like this."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -m 192.168.50.100\n\n")),Object(a.b)("p",null,"The parameter can be set to the random IP that not used."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/single/fw_ipset.png",alt:null}))),Object(a.b)("hr",null),Object(a.b)("hr",null),Object(a.b)("h3",{id:"step-3-firmware-update"},"Step 3: Firmware update"),Object(a.b)("p",null,"If the firmware file is in the project directory, just enter the file\nname.",Object(a.b)("br",{parentName:"p"}),"\n","Otherwise, enter the full path."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:53:AE:B7 -u W7500x_S2E_App.bin\n\n\n")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/single/fw_up_1.png",alt:null}))," (skip)\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/single/fw_up_2.png",alt:null}))))}b.isMDXComponent=!0},629:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||a;return n?o.a.createElement(m,c({ref:t},p,{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);