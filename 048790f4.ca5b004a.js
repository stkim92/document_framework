(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{578:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(578)),o={id:"multi_device_configuration",title:"Multi Device Configuration",date:new Date("2020-04-09T00:00:00.000Z")},c={unversionedId:"Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/multi_device_configuration",id:"Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/multi_device_configuration",isDocsHomePage:!1,title:"Multi Device Configuration",description:"CLI Configuration Tool Tutorial #4",source:"@site/docs\\Product\\S2E-Module\\WIZ752SR-12x-Series\\WIZ752SR-120\\CLI_Config_Tool_Tutorial\\Multi_device_configuration.md",permalink:"/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/multi_device_configuration",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/Multi_device_configuration.md",sidebar:"docs",previous:{title:"Single Device Configuration",permalink:"/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/single_device_configuration"},next:{title:"File Options",permalink:"/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-120/CLI_Config_Tool_Tutorial/file_options"}},l=[{value:"1. Usage",id:"1-usage",children:[]},{value:"2. Set device",id:"2-set-device",children:[{value:"Example #1: baud rate",id:"example-1-baud-rate",children:[]}]},{value:"3. Firmware update: Multi devices",id:"3-firmware-update-multi-devices",children:[{value:"Step 1: Download Firmware",id:"step-1-download-firmware",children:[]},{value:"Step 2: Set IP address",id:"step-2-set-ip-address",children:[]},{value:"Step 3: Firmware update",id:"step-3-firmware-update",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"CLI Configuration Tool Tutorial #4"),Object(i.b)("p",null,"You can use the multi-device configuration when you need to set up and configure multiple devices.",Object(i.b)("br",{parentName:"p"}),"\n","You can ",Object(i.b)("strong",{parentName:"p"},"set multiple devices")," with ",Object(i.b)("strong",{parentName:"p"},"one command input"),"."),Object(i.b)("p",null,"In this tutorial will use three WIZ750SR + EVB boards for testing."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"1-usage"},"1. Usage"),Object(i.b)("p",null,"The basic command format for multi devices configuration is as follows."),Object(i.b)("p",null,"'-a' is all device config option."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"python wizconfig.py -a [Options ...]\n")),Object(i.b)("p",null,"Multi-device configuration is based\non ",Object(i.b)("strong",{parentName:"p"},"mac","_","list.txt"),", so the ",Object(i.b)("strong",{parentName:"p"},"search command must be preceded"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"python wizconfig.py -s\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Mac address list clearing"),"  "),Object(i.b)("p",null,"If you want to clear mac","_","list, you can use -c/--clear option."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python wizconfig.py -c\n")),Object(i.b)("p",null,"or delete the mac","_","list.txt file, It's optional."),Object(i.b)("p",null,"You can see the available options with the -h/--help option."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Refer to previous tutorial: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"How_to_use_CLI_Config_Tool"}),"How to use CLI Config")," ")),Object(i.b)("h2",{id:"2-set-device"},"2. Set device"),Object(i.b)("p",null,"These are some examples of setting multi devices."),Object(i.b)("h3",{id:"example-1-baud-rate"},"Example #1: baud rate"),Object(i.b)("p",null,"First, search devices on the network. If there is old mac","_","list.txt, use -c option or delete the file."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wiz750sr/clitool/multi/01.clear.png",alt:null}))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wiz750sr/clitool/multi/02.search.png",alt:null}))),Object(i.b)("p",null,"Next, use the --baud0 option to set the channel 0 serial baud rate.",Object(i.b)("br",{parentName:"p"}),"\n","Since WIZ750SR is a 1 port device, use '--baud0' option of Channel ","#","0\nOptions."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"//--baud0 BAUD0         baud rate (300|600|1200|1800|2400|4800|9600|14400|19200|28800|38400|57600|115200|230400)//\n")),Object(i.b)("p",null,"To set the baud rate to 9600 of searched devices, set like this."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"python wizconfig.py -a --baud0 230400\n")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wiz750sr/clitool/multi/multi_setbaud.png",alt:null}))),Object(i.b)("p",null,"You can check the configuration complete message."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"3-firmware-update-multi-devices"},"3. Firmware update: Multi devices"),Object(i.b)("h3",{id:"step-1-download-firmware"},"Step 1: Download Firmware"),Object(i.b)("p",null,"You can get firmware file from below links.  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ750SR/releases"}),"Official release version")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ750SR/tree/master/Projects/S2E_App/bin"}),"Development version"))),Object(i.b)("p",null,"You must use ",Object(i.b)("strong",{parentName:"p"},"App Boot firmware")," file when doing this."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"step-2-set-ip-address"},"Step 2: Set IP address"),Object(i.b)("p",null,"When do firmware upload, need TCP connection with the device to send Firmware file.",Object(i.b)("br",{parentName:"p"}),"\n","So first, use ",Object(i.b)("strong",{parentName:"p"},"-m/--multiset")," option for set IP address to the ",Object(i.b)("strong",{parentName:"p"},"same network-band as host"),"."),Object(i.b)("p",null,"If your host IP address is '192.168.50.80', you can set like this."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"python wizconfig.py -m 192.168.50.100\n")),Object(i.b)("p",null,"The parameter can be set to the random IP that not used."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wiz750sr/clitool/multi/multi_fw_m.png",alt:null}))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"step-3-firmware-update"},"Step 3: Firmware update"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"python wizconfig.py -a -u W7500x_S2E_App.bin\n")),Object(i.b)("p",null,"If the firmware file is in the project directory, set the parameter to file name like this.",Object(i.b)("br",{parentName:"p"}),"\n","Otherwise, enter the full path."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wiz750sr/clitool/multi/multi_fw_1.png",alt:null}))," Start to update.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wiz750sr/clitool/multi/multi_fw_2.png",alt:null}))," TCP connection for\neach device.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wiz750sr/clitool/multi/multi_fw_3.png",alt:null}))," Firmware upload\nsuccess about multiple devices."))}p.isMDXComponent=!0}}]);