(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{348:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return b}));var o=n(2),l=n(9),i=(n(0),n(582)),c={id:"file_options",title:"File Options",date:new Date("2020-04-09T00:00:00.000Z")},a={id:"Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/file_options",title:"File Options",description:"CLI Configuration Tool Tutorial \\#5",source:"@site/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/File_Options.md",permalink:"/document_framework/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/file_options",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/File_Options.md",sidebar:"someSidebar",previous:{title:"CLI Config Tool Tutorial",permalink:"/document_framework/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/cli_config_tool_tutorial"},next:{title:"Multi Device Configuration",permalink:"/document_framework/docs/Product/S2E-Module/WIZ750SR/CLI_Config_Tool_Tutorial/multi_device_configuration"}},r=[{value:"1. Getfile option",id:"1-getfile-option",children:[{value:"Example 1: get all info",id:"example-1-get-all-info",children:[]},{value:"Example 2: getting part info",id:"example-2-getting-part-info",children:[]}]},{value:"2. Setfile option",id:"2-setfile-option",children:[{value:"Example 1: setfile",id:"example-1-setfile",children:[]}]}],p={rightToc:r};function b(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"CLI Configuration Tool Tutorial ","#","5"),Object(i.b)("h1",{id:"file-options"},"File Options"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"1-getfile-option"},"1. Getfile option"),Object(i.b)("p",null,"You can check configuration information of the device use --getfile\noption for CLI."),Object(i.b)("p",null,"There are example files named ",Object(i.b)("strong",{parentName:"p"},"cmd","_","oneport.txt")," and\n",Object(i.b)("strong",{parentName:"p"},"cmd","_","twoport.txt")," for using getfile option."),Object(i.b)("p",null,"These files contain ",Object(i.b)("span",{class:"underline"},"command list")," of each\n1 port and 2 port devices. This command list is used to get each\nconfiguration info from the device."),Object(i.b)("p",null,"Basic command format is as follows."),Object(i.b)("p",null,"for single device,"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:XX:XX:XX --getfile [file_name]\n\n")),Object(i.b)("p",null,"for multi devices,"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -a --getfile [file_name]\n")),Object(i.b)("p",null,"for detail description of command set, refer to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"../Command_Manual-%5BEN%5D.md"}),"WIZ750SR Command List"),"."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-1-get-all-info"},"Example 1: get all info"),Object(i.b)("p",null,"If you use the example file as it is, you can get all the information of\nthe device. Since the WIZ750SR is a 1 port device, use cmd","_","oneport.txt."),Object(i.b)("p",null,"Try to perform a device search first."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -s\n\n")),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/fileoption/02.search.png",alt:null}))),Object(i.b)("p",null,"You then use the getfile option to get information from a single device\nor multiple devices as follows."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single device")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:53:AE:93 --getfile cmd_oneport.txt\n\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Multi devices"),Object(i.b)("p",{parentName:"li"},"  python wizconfig.py -a --getfile cmd_oneport.txt"))),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/fileoption/single_getfile.png",alt:null}))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-2-getting-part-info"},"Example 2: getting part info"),Object(i.b)("p",null,"If you want to get only some necessary information, refer to\ncmd","_","oneport.txt and modify it or create a new file to include only\nnecessary commands."),Object(i.b)("p",null,"For example, if you want to get only the network configuration\ninformation, try as follows."),Object(i.b)("p",null,"1) Make new command list"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"cmd","_","net.txt")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"OP\nIM\nLI\nSM\nGW\nDS\nLP\nRH\nRP\n\n")),Object(i.b)("p",null,"2) Get information"),Object(i.b)("p",null,"Use getfile option with new command list file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Single device")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:53:AE:93 --getfile cmd_net.txt\n\n")),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/fileoption/single_getfile_short.png",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Multi devices"),Object(i.b)("p",{parentName:"li"},"  python wizconfig.py -a --getfile cmd_net.txt"))),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/fileoption/multi_getfile_short.png",alt:null}))),Object(i.b)("p",null,"You can use this after customizing according to your purpose and\nsituation."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"2-setfile-option"},"2. Setfile option"),Object(i.b)("p",null,"You can save the settings you want to keep to a file and set them with\nthe --setfile option.",Object(i.b)("br",{parentName:"p"}),"\n","It can be used as the macro."),Object(i.b)("p",null,"To use this option, you have to make command set. (command + parameter)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"for detail description of command set, refer to ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"../Command_Manual-%5BEN%5D.md"}),"WIZ750SR Command\nList"),".")),Object(i.b)("p",null,"List up and write the command set info you want to set a file."),Object(i.b)("p",null,"The basic command format is as follows."),Object(i.b)("p",null,"for single device,"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:XX:XX:XX --setfile [file_name]\n\n")),Object(i.b)("p",null,"for multi devices,"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -a --setfile [file_name]\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-1-setfile"},"Example 1: setfile"),Object(i.b)("p",null,"There is an example file in the project directory, 'set","_","cmd.txt'."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"set","_","cmd.txt")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"IM0\nLI192.168.0.25\nSM255.255.255.0\nGW192.168.0.1\nLP5000\nBR12\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"From top to bottom: local IP, Subnet mask, Gateway, Local port, Baud\nrate")),Object(i.b)("p",null,"and set as follows."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Single device"))),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -d 00:08:DC:53:AE:93 --setfile set_cmd.txt\n\n")),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/fileoption/single_setfile.png",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Check:")),Object(i.b)("p",{parentName:"li"},"  python wizconfig.py -d 00:08:DC:53:AE:93 --getfile set_cmd.txt"))),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/fileoption/single_setfile_get.png",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Multi devices"))),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -a --setfile set_cmd.txt\n\n")),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/fileoption/multi_setfile.png",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Check:")),Object(i.b)("p",{parentName:"li"},"  python wizconfig.py -a --getfile set_cmd.txt"))),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"/products/wiz750sr/clitool/fileoption/multi_setfile_get.png",alt:null}))),Object(i.b)("p",null,"The setfile option can be useful when you want to save and use multiple\noptions as shown above."))}b.isMDXComponent=!0},582:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var o=n(0),l=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),b=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=b(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=b(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?l.a.createElement(f,a({ref:t},p,{components:n})):l.a.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);