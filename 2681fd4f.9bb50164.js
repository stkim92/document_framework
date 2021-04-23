(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(578)),i={id:"how_to_use_cli_config_tool",title:"How to use CLI Config Tool",date:new Date("2020-04-09T00:00:00.000Z")},c={unversionedId:"Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/how_to_use_cli_config_tool",id:"Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/how_to_use_cli_config_tool",isDocsHomePage:!1,title:"How to use CLI Config Tool",description:"CLI Configuration Tool Tutorial \\#2",source:"@site/docs\\Product\\S2E-Module\\WIZ752SR-12x-Series\\WIZ752SR-125\\CLI_Config_Tool_Tutorial\\How_to_use_CLI_Config_Tool.md",permalink:"/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/how_to_use_cli_config_tool",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/How_to_use_CLI_Config_Tool.md",sidebar:"docs",previous:{title:"Overview Environment",permalink:"/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/overview_environment"},next:{title:"Single Device Configuration",permalink:"/docs/Product/S2E-Module/WIZ752SR-12x-Series/WIZ752SR-125/CLI_Config_Tool_Tutorial/single_device_configuration"}},l=[{value:"How to Start",id:"how-to-start",children:[{value:"Download Config Tool",id:"download-config-tool",children:[]},{value:"Use terminal program",id:"use-terminal-program",children:[]}]},{value:"Available Options",id:"available-options",children:[]},{value:"Search devices",id:"search-devices",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"CLI Configuration Tool Tutorial ","#","2"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"how-to-start"},"How to Start"),Object(a.b)("h3",{id:"download-config-tool"},"Download Config Tool"),Object(a.b)("p",null,"The latest version tool can be downloaded at ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZnet-S2E-Tool"}),"WIZnet-S2E-Tool github page"),"."),Object(a.b)("h3",{id:"use-terminal-program"},"Use terminal program"),Object(a.b)("p",null,"For the CLI, you can use the terminal program built in the windows.",Object(a.b)("br",{parentName:"p"}),"\n","Command prompt(cmd.exe) or windows powershell or ETC."),Object(a.b)("p",null,"In this tutorial, will use command prompt."),Object(a.b)("p",null," ",Object(a.b)("strong",{parentName:"p"},"Using cmd.exe")),Object(a.b)("p",null,"You can go to the path where config tool is located after running cmd.exe, but if you go into the tool directory and run cmd, you can start from that path."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/configtool/option/cmd_direct.png",alt:null}))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"available-options"},"Available Options"),Object(a.b)("p",null,"You can see available options and detail description as following command."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"python wizconfig.py -h\n")),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/configtool/option/option_help.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"optional arguments:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"  -h, --help            show this help message and exit\n  -d MACADDR, --device MACADDR\n                        Device mac address to configuration\n  -a, --all             Configuration about all devices (in mac_list.txt)\n  -c, --clear           Mac list clear\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Configuration:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"  -s, --search          Search devices (in same network)\n  -r, --reset           Reboot device\n  -f, --factory         Factory reset\n  -m ipaddr, --multiset ipaddr\n                        Set IP address for all devices in 'mac_list.txt'. Parameter is first address.\n  -u FWFILE, --upload FWFILE\n                        Firmware upload from file\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"General Options:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"  --alloc {0,1}         IP address allocation method (0: Static, 1: DHCP)\n  --ip IP               Local ip address\n  --subnet SUBNET       Subnet mask\n  --gw GW               Gateway address\n  --dns DNS             DNS server address\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Channel ","#","0 Options:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"  --port0 PORT0         Local port number\n  --nmode0 {0,1,2,3}    Network operation mode (0: tcpclient, 1: tcpserver, 2: mixed, 3: udp)\n  --rip0 IP             Remote host IP address / Domain\n  --rport0 PORT         Remote host port number\n  --baud0 BAUD0         baud rate (300|600|1200|1800|2400|4800|9600|14400|19200|28800|38400|57600|115200|230400)\n  --data0 {0,1}         data bit (0: 7-bit, 1: 8-bit)\n  --parity0 {0,1,2}     parity bit (0: NONE, 1: ODD, 2: EVEN)\n  --stop0 {0,1}         stop bit (0: 1-bit, 1: 2-bit)\n  --flow0 {0,1,2}       flow control (0: NONE, 1: XON/XOFF, 2: RTS/CTS)\n  --time0 TIME0         Time delimiter (0: Not use / 1~65535: Data packing time (Unit: millisecond))\n  --size0 SIZE0         Data size delimiter (0: Not use / 1~255: Data packing size (Unit: byte))\n  --char0 CHAR0         Designated character delimiter (00: Not use / Other: Designated character)\n  --it timer            Inactivity timer value for TCP connection close\n                        when there is no data exchange (0: Not use / 1~65535: timer value)\n  --ka {0,1}            Keep-alive packet transmit enable for checking TCP connection established\n  --ki number           Initial TCP keep-alive packet transmission interval value\n                        (0: Not use / 1~65535: Initial Keep-alive packet transmission interval (Unit: millisecond))\n  --ke number           TCP Keep-alive packet transmission retry interval value\n                        (0: Not use / 1~65535: Keep-alive packet transmission retry interval (Unit: millisecond))\n  --ri number           TCP client reconnection interval value [TCP client only]\n                        (0: Not use / 1~65535: TCP client reconnection interval (Unit: millisecond))\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Channel ","#","1 Options:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"  --port1 PORT1         Local port number\n  --nmode1 {0,1,2,3}    Network operation mode (0: tcpclient, 1: tcpserver, 2: mixed, 3: udp)\n  --rip1 IP             Remote host IP address / Domain\n  --rport1 PORT         Remote host port number\n  --baud1 BAUD1         baud rate (300|600|1200|1800|2400|4800|9600|14400|19200|28800|38400|57600|115200|230400)\n  --data1 {0,1}         data bit (0: 7-bit, 1: 8-bit)\n  --parity1 {0,1,2}     parity bit (0: NONE, 1: ODD, 2: EVEN)\n  --stop1 {0,1}         stop bit (0: 1-bit, 1: 2-bit)\n  --flow1 {0,1,2}       flow control (0: NONE, 1: XON/XOFF, 2: RTS/CTS)\n  --time1 TIME1         Time delimiter (0: Not use / 1~65535: Data packing time (Unit: millisecond))\n  --size1 SIZE1         Data size delimiter (0: Not use / 1~255: Data packing size (Unit: byte))\n  --char1 CHAR1         Designated character delimiter (00: Not use / Other: Designated character)\n  --rv timer            Inactivity timer value for TCP connection close\n                        when there is no data exchange (0: Not use / 1~65535: timer value)\n  --ra {0,1}            Keep-alive packet transmit enable for checking TCP connection established\n  --rs number           Initial TCP keep-alive packet transmission interval value\n                        (0: Not use / 1~65535: Initial Keep-alive packet transmission interval (Unit: millisecond))\n  --re number           TCP Keep-alive packet transmission retry interval value\n                        (0: Not use / 1~65535: Keep-alive packet transmission retry interval (Unit: millisecond))\n  --rr number           TCP client reconnection interval value [TCP client only]\n                        (0: Not use / 1~65535: TCP client reconnection interval (Unit: millisecond))\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"UART Command mode switch settings:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"  --te {0,1}            Serial command mode switch code enable\n  --ss 3-byte hex       Serial command mode switch code (default: 2B2B2B)\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ETC options:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"  --cp {0,1}            TCP connection password enable [TCP server mode only]\n  --np pw               TCP connection password (string, up to 8 bytes / default: None) [TCP server mode only]\n  --sp value            Search identification code (string, up to 8 bytes / default: None)\n  --dg {0,1}            Serial debug message enable (Debug UART port)\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Configuration from File:")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"  --setfile SETFILE     File name to Set\n  --getfile GETFILE     File name to Get info. Refer default command(cmd_oneport.txt or cmd_twoport.txt).\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"<About Channel ","#","N Options",">"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"1 Port S2E devices"),Object(a.b)("br",{parentName:"p"}),"\n","Use Channel ","#","0 Options only.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"2 Port S2E devices"),Object(a.b)("br",{parentName:"p"}),"\n","Use both Channel ","#","0 Options & Channel ","#","1 Options."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"search-devices"},"Search devices"),Object(a.b)("p",null,"You can search for devices using the -s / --search option."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"python wizconfig.py -s\n")),Object(a.b)("p",null,"Search result printed as standard out, and the mac address of the\nsearched devices is recorded in ",Object(a.b)("strong",{parentName:"p"},"mac","_","list.txt")," file."),Object(a.b)("p",null,"If new device is found, it is displayed as 'New Device', and this is\ndetermined by whether it is recorded in mac","_","list.txt."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/configtool/option/option_search_new.png",alt:null}))),Object(a.b)("p",null,"If you search for the same device again, you can see that 'New device'\nis not displayed."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/products/configtool/option/option_search_old.png",alt:null}))))}p.isMDXComponent=!0},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);