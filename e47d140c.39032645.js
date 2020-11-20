(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{521:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return o})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return b}));var r=i(2),n=i(6),a=(i(0),i(582)),o={id:"how_to_upgrade_firmware",title:"How to Upgrade Firmware",date:new Date("2020-04-24T00:00:00.000Z")},l={unversionedId:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware",id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware",isDocsHomePage:!1,title:"How to Upgrade Firmware",description:"Serial Line-APP+DCT",source:"@site/docs\\Product\\Wi-Fi-Module\\WizFi250\\Programers-Guide\\How_to_Upgrade_Firmware.md",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/How_to_Upgrade_Firmware.md",sidebar:"docs",previous:{title:"How to Use Web Configuration",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_use_web_configuration"},next:{title:"Examples - Association & Disassociation",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_association_disassociation"}},c=[{value:"Serial Line-APP+DCT",id:"serial-line-appdct",children:[]},{value:"Wi-Fi OTA(Over the Air) - APP",id:"wi-fi-otaover-the-air---app",children:[{value:"Start OTA mode using AT+FOTA Command",id:"start-ota-mode-using-atfota-command",children:[]},{value:"Start OTA mode using WEB Server",id:"start-ota-mode-using-web-server",children:[]},{value:"Start OTA mode using FUNCTION pin",id:"start-ota-mode-using-function-pin",children:[]},{value:"Upload newest firmware in OTA mode",id:"upload-newest-firmware-in-ota-mode",children:[]}]},{value:"Firmware Recovery",id:"firmware-recovery",children:[]}],p={rightToc:c};function b(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"serial-line-appdct"},"Serial Line-APP+DCT"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Download WIZSmartScript from WIZnet homepage and install it"),Object(a.b)("li",{parentName:"ol"},"Run WizFi250 in Boot Mode. (refer to boot pin in the PIN Description)"),Object(a.b)("li",{parentName:"ol"},"Run WIZSmartScript and fill in options(RED) as below. (COM Port should match yours)\nAnd Click the 'Start Script' buton (Yellow).")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-14.png",alt:null}))),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Check the log that shows up as below. After 4 seconds, download will be started. First, write the DCT, then write the WizFi250 application firmware. If it is a success step1 message and step2 message. ( execute \u201c02-A. Flash Write(app) if step2 fails )\n\u261e If you want to change firmware binary file, just copy it to 'AppFWFile' folder.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-15.png",alt:null}))),Object(a.b)("h2",{id:"wi-fi-otaover-the-air---app"},"Wi-Fi OTA(Over the Air) - APP"),Object(a.b)("h3",{id:"start-ota-mode-using-atfota-command"},"Start OTA mode using AT+FOTA Command"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Turn on OTA mode by entering the command as below.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"AT+FOTA"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"[OK]")),Object(a.b)("h3",{id:"start-ota-mode-using-web-server"},"Start OTA mode using WEB Server"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run WizFi250 in command mode, and operate the WizFi250 as below.")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"AT+WLEAVE\n[OK]\n\nAT+FWEBS=1,A\n[OK]\n\nAT+WSET=1,(SSID)\n[OK]\n\nAT+WSEC=1,(EncryptionType),(PreSharedKey)\n[OK]\n\nAT+WNET=0,192.168.0.2,255.255.255.0,192.168.0.2\n[OK]\n\nAT+WJOIN\n[OK]\n\n[Link-Up Event]\nIP Addr    : 192.168.0.1\nGateway    : 192.168.0.1\n[OK]\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Connect your PC Wi-Fi to the Wizfi250, open the web browser and enter the IP address of WizFi250 which you can find by using 'AT+WSTAT'")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-2.png",alt:null}))),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Click the 'Over the Air' icon")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-13.png",alt:null}))),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Click the 'Change to OTA mode' button, then WizFi250 will enter OTA mode.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-16.png",alt:null}))),Object(a.b)("h3",{id:"start-ota-mode-using-function-pin"},"Start OTA mode using FUNCTION pin"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"If entered the OTA Mode using FUNCTION pin, you will see messages as below.(Refer to FUNCTION Pin Usage)")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-17.png",alt:null}))),Object(a.b)("h3",{id:"upload-newest-firmware-in-ota-mode"},"Upload newest firmware in OTA mode"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Now you can connect to the WizFi250 OTA Access Point from your PC. Connect your PC WLAN to the AP which the name WIZFI",Object(a.b)("em",{parentName:"li"},"OTA"),"(MAC-Address).")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-18.png",alt:null}))),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open the WEB browser and go to 'wizfi250.wiznet.com'. (If the browser failed to find the page, disconnect the other network connections and try again). When successful, it should look like below.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click the 'Delete App' button, and wait until internal flash memory is erased.\n(Before writing firmware, internal flash must be erased. Otherwise it does not work properly.).\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-19.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After erase, click the second button, \u2018Choose File\u2019, and select the firmware file you want to upload.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click the second button, 'Select file', and choose the FW file you want to upgrade. And finally, click the 'Upgrade' button to start upgrading. ",Object(a.b)("strong",{parentName:"p"},"( You have to use APP.bin file. This file is in WIZSmartScript\\AppFWFile\\Version\\APP.bin )"),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-20.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Wait for a second until upgrade is finished and check if it shows a complete message as below.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-21.png",alt:null})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Check if WizFi250 is upgraded and works well."))),Object(a.b)("h2",{id:"firmware-recovery"},"Firmware Recovery"),Object(a.b)("p",null,"This section explains how to recover firmware when a critical problem occurred in WizFi250 application firmware."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Input low signal to BOOT pin and FUNCTION pin."),Object(a.b)("li",{parentName:"ol"},"Reboot WizFi250"),Object(a.b)("li",{parentName:"ol"},"If WizFi250 starts the firmware procedure you will see a serial message as below. If this procedure succeeds, WizFi250 will be reset to factory default firmware.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/wizfi250pg-22.png",alt:null}))),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"If you want to upload newest firmware to WizFi250, you have to use OTA mode.\nFor detailed information for starting OTA mode, refer to Wi-Fi OTA."),Object(a.b)("li",{parentName:"ol"},"Afterwards, you can upload newest firmware using web browser. For detailed information for uploading newest firmware in web page, refer to Wi-Fi OTA - Upload newest firmware in OTA mode.")))}b.isMDXComponent=!0},582:function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return m}));var r=i(0),n=i.n(r);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(i),d=r,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||a;return i?n.a.createElement(m,l(l({ref:t},p),{},{components:i})):n.a.createElement(m,l({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);