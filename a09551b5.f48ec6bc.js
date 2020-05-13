(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{442:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),o=(n(0),n(626)),i={id:"at_command_set",title:"AT Command Set",date:new Date("2020-05-12T00:00:00.000Z")},c={id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set",title:"AT Command Set",description:"## AT Command Set \r",source:"@site/docs\\Product\\Wi-Fi-Module\\WizFi250\\Programers-Guide\\AT_Command_Set.md",permalink:"/document_framework/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/AT_Command_Set.md",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/document_framework/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/overview"},next:{title:"IO Pin",permalink:"/document_framework/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin"}},s=[{value:"AT Command Set",id:"at-command-set",children:[]},{value:"Responses",id:"responses",children:[]}],m={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"at-command-set"},"AT Command Set"),Object(o.b)("p",null,"This section provides a list of WizFi250 AT commands and their effects.\nUsers can input commands and parameters through USART line. Every\ncommand starts with the characters \u201cAT\u201d. Any other initial character\nwill cause an error in return. Commands and parameters are all ASCII\ncharacters, e.g. When you input 'AT+MMSG=1', you can input ASCII\ncharacters 'A', 'T', '+', 'M', 'M', 'S', 'G', '=', '1' and 'Enter Key'\nwhich should be CR(0x0d), but neither CRLF(0x0d, 0x0a) nor LF(0x0a).  "),Object(o.b)("p",null,"Some parameters are mandatory and the others are optional. (refer to\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/products/wizfi250/wizfi250pg/at_command_set-command_list"}),"Command\nTables"),")\nParameters must be entered in an order of format column given by the\ncommand tables. Even though an optional parameter is not used, the comma\ndelimiters must still be included in the command. In most cases, valid\ncommands return the characters ","[","OK","]",". Invalid inputs return ","[","ERROR","]",".\nThe possible responses sent by WizFi250 to the user side are described\nat ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/products/wizfi250/wizfi250pg/at_command_set-responses"}),"Responses"),'.\nBelow is a possible example which users can input. As you can see,\nWizFi250 return "',"\\","r","\\",'n" back instead of "',"\\","r\", which means user (host\nsystem) always handle '","\\","r","\\","n' as a only delimiter."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"input by user")),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"AT\\r (0x61 0x74 0x0d)"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Output from WizFi250")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AT\\r\\n","[OK]","\\r\\n (0x0d 0x0a 0x5b 0x4f 0x4b 0x5d 0x0d 0x0a)(* \u201cAT\\r\\n\u201d is Echo back of user input)")))),Object(o.b)("h2",{id:"responses"},"Responses"),Object(o.b)("p",null,"Responses are listed below.\n|",Object(o.b)("strong",{parentName:"p"},"Response"),"|",Object(o.b)("strong",{parentName:"p"},"Meaning"),"|\n|-------|------|\n|","[OK]","|Command Request Success|\n|","[ERROR]","\t|Command Request Fail|\n|","[ERROR: INVALID INPUT]","\t|Wrong command or parameter|\n|","[ERROR: INVALID SCID]","\t|Wrong Socket ID|\n|","[ERROR: WiFi Status]","\t|Wrong WiFi Status (Some commands work only with Wi-Fi Joined status)|\n|","[ERROR: Mode Status]","|\tWrong Mode Status (Some commands do not work in Data mode)|\n|","[CONNECT x]","\t|TCP Connection established & Socket Open|\n|","[DISCONNECT x]","\t|TCP Connection closed & Socket Close|\n|","[Link-Up Event]","\t|WiFi Connection was established|\n|","[Link-Down Event]","\t|WiFi Connection was closed|\n|","[Reset Event]","\t|System reset occurred (not by user)|"))}d.isMDXComponent=!0},626:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),d=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=d(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,b=u["".concat(i,".").concat(p)]||u[p]||l[p]||o;return n?a.a.createElement(b,c({ref:t},m,{components:n})):a.a.createElement(b,c({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);