(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[84930],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return p},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,s=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(s,i(i({ref:e},p),{},{components:a})):n.createElement(s,i({ref:e},p))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},46099:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d},default:function(){return p}});var n=a(74034),r=a(79973),l=(a(67294),a(3905)),i={id:"at_command_set",title:"AT Command Set",date:new Date("2020-05-12T00:00:00.000Z")},m={unversionedId:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set",id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set",isDocsHomePage:!1,title:"AT Command Set",description:"This section provides a list of WizFi250 AT commands and their effects.",source:"@site/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/AT_Command_Set.md",sourceDirName:"Product/Wi-Fi-Module/WizFi250/Programers-Guide",slug:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/AT_Command_Set.md",version:"current",frontMatter:{id:"at_command_set",title:"AT Command Set",date:"2020-05-12T00:00:00.000Z"},sidebar:"docs",previous:{title:"Overview",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/overview"},next:{title:"IO Pin",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin"}},d=[{value:"Responses",id:"responses",children:[]},{value:"Command list",id:"command-list",children:[{value:"Basic Commands",id:"basic-commands",children:[]}]}],o={toc:d};function p(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This section provides a list of WizFi250 AT commands and their effects.\nUsers can input commands and parameters through USART line. Every\ncommand starts with the characters \u201cAT\u201d. Any other initial character\nwill cause an error in return. Commands and parameters are all ASCII\ncharacters, e.g. When you input 'AT+MMSG=1', you can input ASCII\ncharacters 'A', 'T', '+', 'M', 'M', 'S', 'G', '=', '1' and 'Enter Key'\nwhich should be CR(0x0d), but neither CRLF(0x0d, 0x0a) nor LF(0x0a).  "),(0,l.kt)("p",null,"Some parameters are mandatory and the others are optional. (refer to\n",(0,l.kt)("a",{parentName:"p",href:"#command-list"},"Command Tables"),")\nParameters must be entered in an order of format column given by the\ncommand tables. Even though an optional parameter is not used, the comma\ndelimiters must still be included in the command. In most cases, valid\ncommands return the characters ","[","OK","]",". Invalid inputs return ","[","ERROR","]",".\nThe possible responses sent by WizFi250 to the user side are described\nat ",(0,l.kt)("a",{parentName:"p",href:"#responses"},"Responses"),'.\nBelow is a possible example which users can input. As you can see,\nWizFi250 return "',"\\","r","\\",'n" back instead of "',"\\","r\", which means user (host\nsystem) always handle '","\\","r","\\","n' as a only delimiter."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"input by user")),(0,l.kt)("th",{parentName:"tr",align:null},"AT\\r (0x61 0x74 0x0d)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Output from WizFi250")),(0,l.kt)("td",{parentName:"tr",align:null},"AT\\r\\n","[OK]","\\r\\n (0x0d 0x0a 0x5b 0x4f 0x4b 0x5d 0x0d 0x0a)(* \u201cAT\\r\\n\u201d is Echo back of user input)")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("p",null,"Responses are listed below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","OK","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Command Request Success")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","ERROR","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Command Request Fail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","ERROR: INVALID INPUT","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Wrong command or parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","ERROR: INVALID SCID","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Wrong Socket ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","ERROR: WiFi Status","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Wrong WiFi Status (Some commands work only with Wi-Fi Joined status)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","ERROR: Mode Status","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Wrong Mode Status (Some commands do not work in Data mode)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","CONNECT x","]"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP Connection established & Socket Open")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","DISCONNECT x","]"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP Connection closed & Socket Close")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","Link-Up Event","]"),(0,l.kt)("td",{parentName:"tr",align:null},"WiFi Connection was established")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","Link-Down Event","]"),(0,l.kt)("td",{parentName:"tr",align:null},"WiFi Connection was closed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[","Reset Event","]"),(0,l.kt)("td",{parentName:"tr",align:null},"System reset occurred (not by user)")))),(0,l.kt)("h2",{id:"command-list"},"Command list"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"/"},"Basic Commands")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT"},"AT")),(0,l.kt)("td",{parentName:"tr",align:null},"Terminal Check")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/"},"WiFi Commands")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WJOIN"},"AT+WJOIN")),(0,l.kt)("td",{parentName:"tr",align:null},"WiFi Association")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WLEAVE"},"AT+WLEAVE")),(0,l.kt)("td",{parentName:"tr",align:null},"WiFi Disassociation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WSCAN"},"AT+WSCAN")),(0,l.kt)("td",{parentName:"tr",align:null},"WiFi Scan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WSET"},"AT+WSET")),(0,l.kt)("td",{parentName:"tr",align:null},"WiFi Configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WSEC"},"AT+WSEC")),(0,l.kt)("td",{parentName:"tr",align:null},"WiFi Security Configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WNET"},"AT+WNET")),(0,l.kt)("td",{parentName:"tr",align:null},"Network Configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WSTAT"},"AT+WSTAT")),(0,l.kt)("td",{parentName:"tr",align:null},"Get Current WiFi Status")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WREG"},"AT+WREG")),(0,l.kt)("td",{parentName:"tr",align:null},"Country Configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WWPS"},"AT+WWPS")),(0,l.kt)("td",{parentName:"tr",align:null},"WiFi WPS Connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WANT"},"AT+WANT")),(0,l.kt)("td",{parentName:"tr",align:null},"WiFi Antenna Configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WP2P_START"},"AT+WP2P","_","START")),(0,l.kt)("td",{parentName:"tr",align:null},"Start WiFi Direct")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WP2P_STOP"},"AT+WP2P","_","STOP")),(0,l.kt)("td",{parentName:"tr",align:null},"Stop WiFi Direct")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WP2P_PEERLIST"},"AT+WP2P","_","PEERLIST")),(0,l.kt)("td",{parentName:"tr",align:null},"Get WiFi Direct peer list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WP2P_INVITE"},"AT+WP2P","_","INVITE")),(0,l.kt)("td",{parentName:"tr",align:null},"Invite WiFi Direct peer ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+WCHECK"},"AT+WCHECK")),(0,l.kt)("td",{parentName:"tr",align:null},"Check Wi-Fi status using Ping and Re-association with AP")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"/"},"Network Commands")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+SCON"},"AT+SCON")),(0,l.kt)("td",{parentName:"tr",align:null},"Socket Open/Connect")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+SMGMT"},"AT+SMGMT")),(0,l.kt)("td",{parentName:"tr",align:null},"Socket Management")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+SSEND"},"AT+SSEND")),(0,l.kt)("td",{parentName:"tr",align:null},"Data Send")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+SDATA"},"AT+SDATA")),(0,l.kt)("td",{parentName:"tr",align:null},"Return to Data Mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+SFORM"},"AT+SFORM")),(0,l.kt)("td",{parentName:"tr",align:null},"Define Data Receive Header Form")))),(0,l.kt)("p",null,"\\<WRAP half column",">"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"/"},"Management Commands")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MPROF"},"AT+MPROF")),(0,l.kt)("td",{parentName:"tr",align:null},"Profile Management")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MFDEF"},"AT+MFDEF")),(0,l.kt)("td",{parentName:"tr",align:null},"Perform Factory Reset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MRESET"},"AT+MRESET")),(0,l.kt)("td",{parentName:"tr",align:null},"Perform System Reset")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MMSG"},"AT+MMSG")),(0,l.kt)("td",{parentName:"tr",align:null},"Set Message Print Level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MMAC"},"AT+MMAC")),(0,l.kt)("td",{parentName:"tr",align:null},"Set MAC Address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MINFO"},"AT+MINFO")),(0,l.kt)("td",{parentName:"tr",align:null},"Get System Information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MECHO"},"AT+MECHO")),(0,l.kt)("td",{parentName:"tr",align:null},"Set Echo Mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MHELP"},"AT+MHELP")),(0,l.kt)("td",{parentName:"tr",align:null},"Print Command Description and Usage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MMCUPS"},"AT+MMCUPS")),(0,l.kt)("td",{parentName:"tr",align:null},"MCU Power Save Enable/Disable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MWIFIPS"},"AT+MWIFIPS")),(0,l.kt)("td",{parentName:"tr",align:null},"Wi-Fi Power Save Enable/Disable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MCWUI"},"AT+MCWUI")),(0,l.kt)("td",{parentName:"tr",align:null},"Change WebServer User Information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+USET"},"AT+USET")),(0,l.kt)("td",{parentName:"tr",align:null},"UART Configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MSPI"},"AT+MSPI")),(0,l.kt)("td",{parentName:"tr",align:null},"SPI Configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+MAIRCMD"},"AT+MAIRCMD")),(0,l.kt)("td",{parentName:"tr",align:null},"Air Command Configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/products/wizfi250/wizfi250pg/at_command_set#at_mevtmsg"},"AT+MEVTMSG")),(0,l.kt)("td",{parentName:"tr",align:null},"Print ","[","Listen x","]"," as soon as it opens up a socket through TCP server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/products/wizfi250/wizfi250pg/at_command_set#at_mevtform"},"AT+MEVTFORM")),(0,l.kt)("td",{parentName:"tr",align:null},"Event Message Form")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"th",href:"/"},"Function Commands")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+FPING"},"AT+FPING")),(0,l.kt)("td",{parentName:"tr",align:null},"PING Test")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+FDNS"},"AT+FDNS")),(0,l.kt)("td",{parentName:"tr",align:null},"DNS Query")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+FWEBS"},"AT+FWEBS")),(0,l.kt)("td",{parentName:"tr",align:null},"Launch Web Server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+FGPIO"},"AT+FGPIO")),(0,l.kt)("td",{parentName:"tr",align:null},"GPIO Control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+FSOCK"},"AT+FSOCK")),(0,l.kt)("td",{parentName:"tr",align:null},"SOCKET Extension Option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#AT+FOTA"},"AT+FOTA")),(0,l.kt)("td",{parentName:"tr",align:null},"Launch OTA Mode")))),(0,l.kt)("h3",{id:"basic-commands"},"Basic Commands"),(0,l.kt)("p",null,"Basic commands are listed below."),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"at"},"AT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Format:"))),(0,l.kt)("code",null,"AT"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Meaning:")," Terminal Check")),(0,l.kt)("p",null,"Check if AT Command Terminal is working."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Response:"))),(0,l.kt)("code",null,"[OK]"))}p.isMDXComponent=!0}}]);