(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{372:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return i}));var n=a(2),b=a(6),r=(a(0),a(578)),c={id:"at_command_set",title:"AT Command Set",date:new Date("2020-05-12T00:00:00.000Z")},l={unversionedId:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set",id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set",isDocsHomePage:!1,title:"AT Command Set",description:"This section provides a list of WizFi250 AT commands and their effects.",source:"@site/docs\\Product\\Wi-Fi-Module\\WizFi250\\Programers-Guide\\AT_Command_Set.md",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/AT_Command_Set.md",sidebar:"docs",previous:{title:"Overview",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/overview"},next:{title:"IO Pin",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin"}},O=[{value:"Responses",id:"responses",children:[]},{value:"Command list",id:"command-list",children:[{value:"Basic Commands",id:"basic-commands",children:[]}]}],j={rightToc:O};function i(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section provides a list of WizFi250 AT commands and their effects.\nUsers can input commands and parameters through USART line. Every\ncommand starts with the characters \u201cAT\u201d. Any other initial character\nwill cause an error in return. Commands and parameters are all ASCII\ncharacters, e.g. When you input 'AT+MMSG=1', you can input ASCII\ncharacters 'A', 'T', '+', 'M', 'M', 'S', 'G', '=', '1' and 'Enter Key'\nwhich should be CR(0x0d), but neither CRLF(0x0d, 0x0a) nor LF(0x0a).  "),Object(r.b)("p",null,"Some parameters are mandatory and the others are optional. (refer to\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#command-list"}),"Command Tables"),")\nParameters must be entered in an order of format column given by the\ncommand tables. Even though an optional parameter is not used, the comma\ndelimiters must still be included in the command. In most cases, valid\ncommands return the characters ","[","OK","]",". Invalid inputs return ","[","ERROR","]",".\nThe possible responses sent by WizFi250 to the user side are described\nat ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#responses"}),"Responses"),'.\nBelow is a possible example which users can input. As you can see,\nWizFi250 return "',"\\","r","\\",'n" back instead of "',"\\","r\", which means user (host\nsystem) always handle '","\\","r","\\","n' as a only delimiter."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"input by user")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"AT\\r (0x61 0x74 0x0d)"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Output from WizFi250")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AT\\r\\n","[OK]","\\r\\n (0x0d 0x0a 0x5b 0x4f 0x4b 0x5d 0x0d 0x0a)(* \u201cAT\\r\\n\u201d is Echo back of user input)")))),Object(r.b)("h2",{id:"responses"},"Responses"),Object(r.b)("p",null,"Responses are listed below."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Response"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Meaning"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","OK","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Command Request Success")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","ERROR","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Command Request Fail")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","ERROR: INVALID INPUT","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wrong command or parameter")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","ERROR: INVALID SCID","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wrong Socket ID")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","ERROR: WiFi Status","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wrong WiFi Status (Some commands work only with Wi-Fi Joined status)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","ERROR: Mode Status","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wrong Mode Status (Some commands do not work in Data mode)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","CONNECT x","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TCP Connection established & Socket Open")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","DISCONNECT x","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TCP Connection closed & Socket Close")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","Link-Up Event","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi Connection was established")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","Link-Down Event","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi Connection was closed")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[","Reset Event","]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"System reset occurred (not by user)")))),Object(r.b)("h2",{id:"command-list"},"Command list"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:""}),"Basic Commands")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT"}),"AT")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Terminal Check")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:""}),"WiFi Commands")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WJOIN"}),"AT+WJOIN")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi Association")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WLEAVE"}),"AT+WLEAVE")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi Disassociation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WSCAN"}),"AT+WSCAN")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi Scan")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WSET"}),"AT+WSET")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WSEC"}),"AT+WSEC")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi Security Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WNET"}),"AT+WNET")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Network Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WSTAT"}),"AT+WSTAT")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get Current WiFi Status")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WREG"}),"AT+WREG")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Country Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WWPS"}),"AT+WWPS")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi WPS Connection")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WANT"}),"AT+WANT")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WiFi Antenna Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WP2P_START"}),"AT+WP2P","_","START")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Start WiFi Direct")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WP2P_STOP"}),"AT+WP2P","_","STOP")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stop WiFi Direct")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WP2P_PEERLIST"}),"AT+WP2P","_","PEERLIST")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get WiFi Direct peer list")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WP2P_INVITE"}),"AT+WP2P","_","INVITE")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Invite WiFi Direct peer ID")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+WCHECK"}),"AT+WCHECK")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Check Wi-Fi status using Ping and Re-association with AP")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:""}),"Network Commands")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+SCON"}),"AT+SCON")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Socket Open/Connect")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+SMGMT"}),"AT+SMGMT")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Socket Management")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+SSEND"}),"AT+SSEND")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Send")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+SDATA"}),"AT+SDATA")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Return to Data Mode")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+SFORM"}),"AT+SFORM")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Define Data Receive Header Form")))),Object(r.b)("p",null,"\\<WRAP half column",">"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:""}),"Management Commands")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MPROF"}),"AT+MPROF")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Profile Management")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MFDEF"}),"AT+MFDEF")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Perform Factory Reset")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MRESET"}),"AT+MRESET")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Perform System Reset")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MMSG"}),"AT+MMSG")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set Message Print Level")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MMAC"}),"AT+MMAC")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set MAC Address")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MINFO"}),"AT+MINFO")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Get System Information")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MECHO"}),"AT+MECHO")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set Echo Mode")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MHELP"}),"AT+MHELP")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print Command Description and Usage")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MMCUPS"}),"AT+MMCUPS")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MCU Power Save Enable/Disable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MWIFIPS"}),"AT+MWIFIPS")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wi-Fi Power Save Enable/Disable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MCWUI"}),"AT+MCWUI")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Change WebServer User Information")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+USET"}),"AT+USET")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"UART Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MSPI"}),"AT+MSPI")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SPI Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+MAIRCMD"}),"AT+MAIRCMD")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Air Command Configuration")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/products/wizfi250/wizfi250pg/at_command_set#at_mevtmsg"}),"AT+MEVTMSG")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Print ","[","Listen x","]"," as soon as it opens up a socket through TCP server.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/products/wizfi250/wizfi250pg/at_command_set#at_mevtform"}),"AT+MEVTFORM")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Event Message Form")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"th"},{href:""}),"Function Commands")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+FPING"}),"AT+FPING")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PING Test")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+FDNS"}),"AT+FDNS")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DNS Query")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+FWEBS"}),"AT+FWEBS")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Launch Web Server")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+FGPIO"}),"AT+FGPIO")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO Control")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+FSOCK"}),"AT+FSOCK")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SOCKET Extension Option")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"#AT+FOTA"}),"AT+FOTA")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Launch OTA Mode")))),Object(r.b)("h3",{id:"basic-commands"},"Basic Commands"),Object(r.b)("p",null,"Basic commands are listed below."),Object(r.b)("hr",null),Object(r.b)("h4",{id:"at"},"AT"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Format:"))),Object(r.b)("code",null,"AT"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Meaning:")," Terminal Check")),Object(r.b)("p",null,"Check if AT Command Terminal is working."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Response:"))),Object(r.b)("code",null,"[OK]"))}i.isMDXComponent=!0},578:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var j=b.a.createContext({}),i=function(e){var t=b.a.useContext(j),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=i(e.components);return b.a.createElement(j.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},o=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),m=i(a),o=n,p=m["".concat(c,".").concat(o)]||m[o]||d[o]||r;return a?b.a.createElement(p,l(l({ref:t},j),{},{components:a})):b.a.createElement(p,l({ref:t},j))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=o;var l={};for(var O in t)hasOwnProperty.call(t,O)&&(l[O]=t[O]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var j=2;j<r;j++)c[j]=a[j];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);