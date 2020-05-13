(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{517:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(9),a=(n(0),n(530)),o={id:"multi_device_configuration",title:"Multi Device Configuration",date:new Date("2020-04-09T00:00:00.000Z")},c={id:"Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/multi_device_configuration",title:"Multi Device Configuration",description:"CLI Configuration Tool Tutorial \\#4\r",source:"@site/docs\\Product\\S2E-Module\\WIZ750SR\\CLI_Config_Tool_Tutorial\\Multi_device_configuration.md",permalink:"/document_framework/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/multi_device_configuration",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/Multi_device_configuration.md",sidebar:"someSidebar",previous:{title:"File Options",permalink:"/document_framework/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/file_options"},next:{title:"Overview Environment",permalink:"/document_framework/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/overview_environment"}},l=[{value:"1. Usage",id:"1-usage",children:[]},{value:"2. Set device",id:"2-set-device",children:[{value:"Example #1: baud rate",id:"example-1-baud-rate",children:[]}]},{value:"3. Firmware update: Multi devices",id:"3-firmware-update-multi-devices",children:[{value:"Step 1: Download Firmware",id:"step-1-download-firmware",children:[]},{value:"Step 2: Set IP address",id:"step-2-set-ip-address",children:[]},{value:"Step 3: Firmware update",id:"step-3-firmware-update",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"CLI Configuration Tool Tutorial ","#","4"),Object(a.b)("h1",{id:"multi-device-configuration"},"Multi device configuration"),Object(a.b)("p",null,"You can use the multi-device configuration when you need to set up and\nconfigure multiple devices.",Object(a.b)("br",{parentName:"p"}),"\n","You can ",Object(a.b)("strong",{parentName:"p"},"set multiple devices")," with ",Object(a.b)("strong",{parentName:"p"},"one command input"),"."),Object(a.b)("p",null,"In this tutorial will use three WIZ750SR + EVB boards for testing."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"1-usage"},"1. Usage"),Object(a.b)("p",null,"The basic command format for multi devices configuration is as follows."),Object(a.b)("p",null,"'-a' is all device config option."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -a [Options ...]\n")),Object(a.b)("p",null,"\\<WRAP center round important 60%",">"," Multi-device configuration is based\non ",Object(a.b)("strong",{parentName:"p"},"mac","_","list.txt"),", so the ",Object(a.b)("strong",{parentName:"p"},"search command must be preceded"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -s\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Mac address list clearing"),Object(a.b)("br",{parentName:"p"}),"\n","If you want to clear mac","_","list, you can use -c/--clear option."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -c\n")),Object(a.b)("p",null,"or delete the mac","_","list.txt file, It's optional. \\</WRAP",">"),Object(a.b)("p",null,"You can see the available options with the -h/--help option."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Refer to previous tutorial: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"How_to_use_CLI_Config_Tool.md"}),"How to use CLI Config")," ")),Object(a.b)("h2",{id:"2-set-device"},"2. Set device"),Object(a.b)("p",null,"These are some examples of setting multi devices."),Object(a.b)("h3",{id:"example-1-baud-rate"},"Example #1: baud rate"),Object(a.b)("p",null,"First, search devices on the network. If there is old mac","_","list.txt, use\n-c option or delete the file."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/multi/01.clear.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/multi/02.search.png",alt:null}))),Object(a.b)("p",null,"Next, use the --baud0 option to set the channel 0 serial baud rate.",Object(a.b)("br",{parentName:"p"}),"\n","Since WIZ750SR is a 1 port device, use '--baud0' option of Channel ","#","0\nOptions."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"//--baud0 BAUD0         baud rate (300|600|1200|1800|2400|4800|9600|14400|19200|28800|38400|57600|115200|230400)//\n")),Object(a.b)("p",null,"To set the baud rate to 9600 of searched devices, set like this."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -a --baud0 230400\n\n")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/multi/multi_setbaud.png",alt:null}))),Object(a.b)("p",null,"You can check the configuration complete message."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"3-firmware-update-multi-devices"},"3. Firmware update: Multi devices"),Object(a.b)("h3",{id:"step-1-download-firmware"},"Step 1: Download Firmware"),Object(a.b)("p",null,"You can get firmware file from below links.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ750SR/releases"}),"Official release\nversion")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ750SR/tree/master/Projects/S2E_App/bin"}),"Development\nversion"))),Object(a.b)("p",null,"You must use ",Object(a.b)("strong",{parentName:"p"},"App Boot firmware")," file when doing this."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"step-2-set-ip-address"},"Step 2: Set IP address"),Object(a.b)("p",null,"When do firmware upload, need TCP connection with the device to send\nFirmware file.",Object(a.b)("br",{parentName:"p"}),"\n","So first, use ",Object(a.b)("strong",{parentName:"p"},"-m/--multiset")," option for set IP address to the ",Object(a.b)("strong",{parentName:"p"},"same\nnetwork-band as host"),"."),Object(a.b)("p",null,"If your host IP address is '192.168.50.80', you can set like this."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -m 192.168.50.100\n\n")),Object(a.b)("p",null,"The parameter can be set to the random IP that not used."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/multi/multi_fw_m.png",alt:null}))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"step-3-firmware-update"},"Step 3: Firmware update"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -a -u W7500x_S2E_App.bin\n")),Object(a.b)("p",null,"If the firmware file is in the project directory, set the parameter to\nfile name like this.",Object(a.b)("br",{parentName:"p"}),"\n","Otherwise, enter the full path."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/multi/multi_fw_1.png",alt:null}))," Start to update.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/multi/multi_fw_2.png",alt:null}))," TCP connection for\neach device.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/multi/multi_fw_3.png",alt:null}))," Firmware upload\nsuccess about multiple devices."))}p.isMDXComponent=!0},530:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||a;return n?i.a.createElement(m,c({ref:t},u,{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);