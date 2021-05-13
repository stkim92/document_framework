(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[83646],{3905:function(e,t,i){"use strict";i.d(t,{kt:function(){return d}});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,A=r(e,["components","mdxType","originalType","parentName"]),d=c(i),p=o,f=d["".concat(u,".").concat(p)]||d[p]||l[p]||s;return i?n.createElement(f,a(a({ref:t},A),{},{components:i})):n.createElement(f,a({ref:t},A))}));function d(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,a=new Array(s);a[0]=A;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var c=2;c<s;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}A.displayName="MDXCreateElement"},30219:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},metadata:function(){return r},toc:function(){return u},default:function(){return l}});var n=i(74034),o=i(79973),s=(i(67294),i(3905)),a={id:"how_to_use_web_configuration",title:"How to Use Web Configuration",date:new Date("2020-04-24T00:00:00.000Z")},r={unversionedId:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_use_web_configuration",id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_use_web_configuration",isDocsHomePage:!1,title:"How to Use Web Configuration",description:"Main Page",source:"@site/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/How_to_Use_Web_Configuration.md",sourceDirName:"Product/Wi-Fi-Module/WizFi250/Programers-Guide",slug:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_use_web_configuration",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_use_web_configuration",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/How_to_Use_Web_Configuration.md",version:"current",frontMatter:{id:"how_to_use_web_configuration",title:"How to Use Web Configuration",date:"2020-04-24T00:00:00.000Z"},sidebar:"docs",previous:{title:"IO Pin",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin"},next:{title:"How to Upgrade Firmware",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware"}},u=[{value:"Main Page",id:"main-page",children:[]},{value:"Serial to Wi-Fi Setting",id:"serial-to-wi-fi-setting",children:[{value:"Set AP Mode",id:"set-ap-mode",children:[]},{value:"Station Mode",id:"station-mode",children:[]}]},{value:"WPS(Push Button)",id:"wpspush-button",children:[]},{value:"WPS(PIN)",id:"wpspin",children:[]},{value:"Change to OTA Mode",id:"change-to-ota-mode",children:[]},{value:"GPIO Control",id:"gpio-control",children:[]},{value:"Serial Setting",id:"serial-setting",children:[]},{value:"User Information Setting",id:"user-information-setting",children:[]}],c={toc:u};function l(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"main-page"},"Main Page"),(0,s.kt)("p",null,"This picture shows the main page of WizFi250\u2019s web server. In order to enter this page, WizFi250 should operate as SoftAP mode or associate to target AP as STA mode.\nThe web server is launched automatically when joined to target AP or operate SoftAP. If you do not want to operate the web server, you can use ","<","AT+FWEBS",">"," command. For detailed information about ","<","AT+FWEBS",">"," command, refer to AT+FWEBS. After entering this page, users have to input user id and user password. Its default value is admin. If you want to change user id or user password, you can use ","<","AT+MCWUI",">"," command. For detailed information about ","<","AT+MCWUI",">"," command, refer to AT+MCWUI."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(56400).Z})),(0,s.kt)("p",null,"After input user information, user can choose an item to perform among below listed 5 items."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(5293).Z})),(0,s.kt)("h2",{id:"serial-to-wi-fi-setting"},"Serial to Wi-Fi Setting"),(0,s.kt)("p",null,"If you select \u201cS2W Setting & Scan Network\u201d icon, you can enter into web page as shown in this picture. On this page, you can set parameters for using AP Mode or Station Mode and TCP/UDP."),(0,s.kt)("h3",{id:"set-ap-mode"},"Set AP Mode"),(0,s.kt)("p",null,"If you want to use AP Mode and TCP Server, you can select parameter as showm on picture. If you want to use TCP Server or UDP Server, you don't need to input ","<","Remote IP",">"," and ","<","Remote Port",">","."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(5293).Z})),(0,s.kt)("p",null,"If WizFi250 was set successfully, you willsee the success message as below."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(76970).Z})),(0,s.kt)("p",null,"And after checking success result, click the ","<","Next_Step",">"," button in order to move on to the next page. If wrong value was inputted, WizFi250 will return fail message like below."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(90735).Z})),(0,s.kt)("p",null,"On the next page users can set AP information like SSID, Security and Security Key value as below."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(84340).Z})),(0,s.kt)("p",null,"If it finishes successfully, the user will see the message as below."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(81844).Z})),(0,s.kt)("h3",{id:"station-mode"},"Station Mode"),(0,s.kt)("p",null,"If the user seta Station Mode on this web page, the user can select protocol and other information as Remote IP, Remote Port and Local Port. In this example, we will explain how to set Station Mode and TCP Client."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(74475).Z})),(0,s.kt)("p",null,"If WizFi250 was set successfully, you will see the success message as below."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(26409).Z})),(0,s.kt)("p",null,"Then you can select DHCP mode or Static mode. In this example we chose DHCP mode. When using DHCP, it is not required to select IP information."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(22176).Z})),(0,s.kt)("p",null,"Enter a Password and then Select the ","<","Join",">"," button you want to associate to SSID."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(34902).Z})),(0,s.kt)("p",null,"If you can see \u201cDevice Started. Web server and access point stopped. See UART for further information.\u201d message in the web browser and \u201cSuccessfully joined\u201d message in the serial terminal, WizFi250 is associated to AP successfully.\nThis picture is serial message when WizFi250 is associated to AP successfully."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(46168).Z})),(0,s.kt)("h2",{id:"wpspush-button"},"WPS(Push Button)"),(0,s.kt)("p",null,"This section explains how to set the protocol as TCP or UDP and then associate to Access Point by WPS method. If you select \u201eWPS(Push button)\u201c, you can see the web page as on this picture. For more detailed information, refer to Serial to Wi-Fi Setting.\n",(0,s.kt)("img",{src:i(64960).Z})),(0,s.kt)("p",null,"If you click the next_step button after finishing the setting, the web page will be shown as below."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(41307).Z})),(0,s.kt)("p",null,"If you click the ","<","Go",">"," button on this web page, WizFi250 will scan the Access-Point in order to connect to it. The Access-Point must be set with ","<","WPS-PBC",">"," function as in this picture.\n( In this example, we used LINKSYS Access-Point )"),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(45493).Z})),(0,s.kt)("p",null,"This picture shows the log message stating that WizFi250 finished the WPS function successfully."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(10293).Z})),(0,s.kt)("h2",{id:"wpspin"},"WPS(PIN)"),(0,s.kt)("p",null,"This section explains how to set the protocol as TCP or UDP and then associate it to the Access Point by WPS method. If you select \u201cWPS(PIN)\u201c, you will see the webpage as shown in this picture. For detailed information, refer to ",(0,s.kt)("a",{parentName:"p",href:"/"},"Serial to Wi-Fi Setting"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(64960).Z})),(0,s.kt)("p",null,"If you click the next_step button after finishing the setting, the web page will be shown as below."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(56849).Z})),(0,s.kt)("p",null,"If you enter PIN number and click ","<","Go",">"," button, WizFi250 will scan the Access-Point in order to connect to it. Access-Point must be set as ","<","WPS-PIN",">"," function as below. ( In this example, we used LINKSYS Access-Point )"),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(51674).Z})),(0,s.kt)("p",null,"If the WPS-PIN function is successful, you will see a serial log message as on this picture."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(10293).Z})),(0,s.kt)("h2",{id:"change-to-ota-mode"},"Change to OTA Mode"),(0,s.kt)("p",null,"If you select \u201cChange to OTA Mode\u201d icon, you will see the web page as on this picture."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(10054).Z})),(0,s.kt)("p",null,"If you click the ","<","Change to OTA mode",">"," button on this page, WizFi250 will run in OTA Mode. For detailed information about OTA Mode, refer to ",(0,s.kt)("a",{parentName:"p",href:"/"},"Upload newest firmware in OTA mode")),(0,s.kt)("h2",{id:"gpio-control"},"GPIO Control"),(0,s.kt)("p",null,"If you select the \u201cGPIO Control\u201d icon you will see the web page as shown on this picture."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(55115).Z})),(0,s.kt)("p",null,"On this page, you can select \u201cGet GPIO Status\u201d menu or \u201cSet GPIO Status\u201d menu."),(0,s.kt)("p",null,"If you click \u201cNext\u201d button after selecting \u201cGet GPIO Status\u201d menu, you can see the web page as this picture."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(56148).Z})),(0,s.kt)("p",null,"On this page, you can check the real time GPIO status of WizFi250."),(0,s.kt)("p",null,"If you select \u201cSet GPIO Status\u201d menu, you will see the web page as on this picture."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(20191).Z})),(0,s.kt)("p",null,"On this page, you can set gpio mode and gpio value of WizFi250."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"When set as output mode\u2026 mode, WizFi250 will set gpio config value to",(0,s.kt)("br",{parentName:"li"}),"OUTPUT_PUSH_PULL."),(0,s.kt)("li",{parentName:"ul"},"When set as input mode, WizFi250 will set gpio config value to\nINPUT_HIGH_IMPEDANCE.")),(0,s.kt)("p",null,"For detailed information about it, refer to AT+FGPIO."),(0,s.kt)("h2",{id:"serial-setting"},"Serial Setting"),(0,s.kt)("p",null,"If you select \u201cSerial Setting\u201d icon, you can see the web page as this picture."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(13970).Z})),(0,s.kt)("p",null,"On this page, you can set serial information. When you select the ","<","Set Serial Config",">"," button after your choice values, WizFi250 will be restarted in order to change serial information.\nFor detailed information about it, refer to AT+USET."),(0,s.kt)("h2",{id:"user-information-setting"},"User Information Setting"),(0,s.kt)("p",null,"If you select the \u201eUser Information\u201c icon, you will see the web page as in this picture."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(24094).Z})),(0,s.kt)("p",null,"On this page, you can change user id and user password. For changing user information, you have to input current id and password."),(0,s.kt)("p",null,"If you select ","<","Setting",">"," button after input value, WizFi250 will be restarted in order to change user information.\nFor detailed information about it, refer to AT+MCWUI."))}l.isMDXComponent=!0},10293:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-10-1b4ef1327d4da831de24aa65eb05efc3.png"},56849:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-11-2208ceb5a78842bfcdd1ca50ca162b68.png"},51674:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-12-177682e1c575d62ef6e01dc283a8528d.png"},55115:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-13-1-d092ac6eb67de7636a0da0f06343af7a.png"},56148:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-13-2-8a0e861ccc983188f4e3b9733b3096e8.png"},20191:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-13-3-5c21f3360510c32ef48daf996c06ec4d.png"},10054:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-13-9147773a4afdf55cdf48e6048b59b77b.png"},56400:function(e,t){"use strict";t.Z="data:image/png;base64,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"},5293:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-2-ea6159929ca5ac46174a9ec88d8819d4.png"},13970:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-23-abe3e0cbbdc1529e0b2ece05336f85e9.png"},24094:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-24-bff5c47eb9fbf4d1250bc9c61174c399.png"},74475:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-3-1-0fc7898bc913a3a9ed13624eff9662db.png"},26409:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-4-1-db75be782498c92039ed62cb450e3d05.png"},64960:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-4-2-2d9af0a4815579338017f4524e0c0489.png"},76970:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-4-5f6bb73dac7ad79ec87cf8549629aefd.png"},84340:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-5-1-b007c8217d48b9ee5c733c146d74325e.png"},81844:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-5-2-498bb58d909157cfb91aea35b93205fc.png"},90735:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-5-12465f8f010144c78b8e317f80c42a7e.png"},34902:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-6-1-41147287b57dff2e2e6850f94fcc8d14.png"},22176:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-6-5ff06e9fd068bc2ffcd94f9a1bdb8ea3.png"},46168:function(e,t){"use strict";t.Z="data:image/png;base64,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"},41307:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-8-3c987811c61fdcece66ef6f04b33c77f.png"},45493:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-9-e5d6533a9795fcbd7bc6c7123f22f839.png"}}]);