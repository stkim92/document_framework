(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{528:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var i=r(2),a=r(9),n=(r(0),r(582)),o={id:"how_to_upgrade_firmware",title:"How to Upgrade Firmware",date:new Date("2020-04-24T00:00:00.000Z")},c={id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware",title:"How to Upgrade Firmware",description:"## Content\r",source:"@site/docs\\Product\\Wi-Fi-Module\\WizFi250\\Programers-Guide\\How_to_Upgrade_Firmware.md",permalink:"/document_framework/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/How_to_Upgrade_Firmware.md",sidebar:"someSidebar",previous:{title:"IO Pin",permalink:"/document_framework/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin"},next:{title:"Examples - Association & Disassociation",permalink:"/document_framework/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_association_disassociation"}},l=[{value:"Content",id:"content",children:[]},{value:"How to Upgrade Firmware",id:"how-to-upgrade-firmware",children:[{value:"Serial Line-APP+DCT",id:"serial-line-appdct",children:[]},{value:"Wi-Fi OTA(Over the Air) - APP",id:"wi-fi-otaover-the-air---app",children:[]},{value:"Firmware Recovery",id:"firmware-recovery",children:[]}]}],p={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"content"},"Content"),Object(n.b)("h2",{id:"how-to-upgrade-firmware"},"How to Upgrade Firmware"),Object(n.b)("h3",{id:"serial-line-appdct"},"Serial Line-APP+DCT"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Download WIZSmartScript from WIZnet homepage and install it"),Object(n.b)("li",{parentName:"ol"},"Run WizFi250 in Boot Mode. (refer to boot pin in the PIN Description)"),Object(n.b)("li",{parentName:"ol"},"Run WIZSmartScript and fill in options(RED) as below. (COM Port should match yours)\nAnd Click the 'Start Script' buton (Yellow).")),Object(n.b)("p",null,Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-14.png",alt:null}))),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},"Check the log that shows up as below. After 4 seconds, download will be started. First, write the DCT, then write the WizFi250 application firmware. If it is a success step1 message and step2 message. ( execute \u201c02-A. Flash Write(app) if step2 fails )\n\u261e If you want to change firmware binary file, just copy it to 'AppFWFile' folder.\n",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-15.png",alt:null})))),Object(n.b)("h3",{id:"wi-fi-otaover-the-air---app"},"Wi-Fi OTA(Over the Air) - APP"),Object(n.b)("h4",{id:"start-ota-mode-using-atfota-command"},"Start OTA mode using AT+FOTA Command"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Turn on OTA mode by entering the command as below."),Object(n.b)("blockquote",{parentName:"li"}),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(i.a)({parentName:"pre"},{})," AT+FOTA\n [OK]\n")))),Object(n.b)("blockquote",null),Object(n.b)("h4",{id:"start-ota-mode-using-web-server"},"Start OTA mode using WEB Server"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Run WizFi250 in command mode, and operate the WizFi250 as below."),Object(n.b)("blockquote",{parentName:"li"}),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),"AT+WLEAVE\n[OK]\n")),Object(n.b)("p",{parentName:"li"},"   AT+FWEBS=1,A\n","[OK]"),Object(n.b)("p",{parentName:"li"},"   AT+WSET=1,(SSID)\n","[OK]"),Object(n.b)("p",{parentName:"li"},"   AT+WSEC=1,(EncryptionType),(PreSharedKey)\n","[OK]"),Object(n.b)("p",{parentName:"li"},"   AT+WNET=0,192.168.0.2,255.255.255.0,192.168.0.2\n","[OK]"),Object(n.b)("p",{parentName:"li"},"   AT+WJOIN\n","[OK]"),Object(n.b)("p",{parentName:"li"},"  ","[Link-Up Event]","\nIP Addr    : 192.168.0.1\nGateway    : 192.168.0.1\n","[OK]"),Object(n.b)("blockquote",{parentName:"li"})),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Connect your PC Wi-Fi to the Wizfi250, open the web browser and enter the IP address of WizFi250 which you can find by using 'AT+WSTAT'\n",Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-2.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the 'Over the Air' icon\n",Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-13.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the 'Change to OTA mode' button, then WizFi250 will enter OTA mode.\n",Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"/document_framewor/img/products/wizfi250/wizfi250pg/wizfi250pg-16.png",alt:null}))))),Object(n.b)("h4",{id:"start-ota-mode-using-function-pin"},"Start OTA mode using FUNCTION pin"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"If entered the OTA Mode using FUNCTION pin, you will see messages as below.(Refer to FUNCTION Pin Usage)\n",Object(n.b)("img",Object(i.a)({parentName:"li"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-17.png",alt:null})))),Object(n.b)("h4",{id:"upload-newest-firmware-in-ota-mode"},"Upload newest firmware in OTA mode"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Now you can connect to the WizFi250 OTA Access Point from your PC. Connect your PC WLAN to the AP which the name WIZFI",Object(n.b)("em",{parentName:"p"},"OTA"),"(MAC-Address).\n",Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-18.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Open the WEB browser and go to 'wizfi250.wiznet.com'. (If the browser failed to find the page, disconnect the other network connections and try again). When successful, it should look like below.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the 'Delete App' button, and wait until internal flash memory is erased.\n(Before writing firmware, internal flash must be erased. Otherwise it does not work properly.).\n",Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-19.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"After erase, click the second button, \u2018Choose File\u2019, and select the firmware file you want to upload.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click the second button, 'Select file', and choose the FW file you want to upgrade. And finally, click the 'Upgrade' button to start upgrading. ",Object(n.b)("strong",{parentName:"p"},"( You have to use APP.bin file. This file is in WIZSmartScript\\AppFWFile\\Version\\APP.bin )"),"\n",Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-20.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Wait for a second until upgrade is finished and check if it shows a complete message as below.\n",Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-21.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Check if WizFi250 is upgraded and works well."))),Object(n.b)("h3",{id:"firmware-recovery"},"Firmware Recovery"),Object(n.b)("p",null,"This section explains how to recover firmware when a critical problem occurred in WizFi250 application firmware."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Input low signal to BOOT pin and FUNCTION pin.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Reboot WizFi250")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If WizFi250 starts the firmware procedure you will see a serial message as below. If this procedure succeeds, WizFi250 will be reset to factory default firmware.\n",Object(n.b)("img",Object(i.a)({parentName:"p"},{src:"/document_framework/img/products/wizfi250/wizfi250pg/wizfi250pg-22.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If you want to upload newest firmware to WizFi250, you have to use OTA mode.\nFor detailed information for starting OTA mode, refer to Wi-Fi OTA.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Afterwards, you can upload newest firmware using web browser. For detailed information for uploading newest firmware in web page, refer to Wi-Fi OTA - Upload newest firmware in OTA mode."))))}b.isMDXComponent=!0},582:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},m=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=b(r),u=i,d=m["".concat(o,".").concat(u)]||m[u]||s[u]||n;return r?a.a.createElement(d,c({ref:t},p,{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<n;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);