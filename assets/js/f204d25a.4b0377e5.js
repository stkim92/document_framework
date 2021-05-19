(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[50202],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return c},kt:function(){return A}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(i),A=n,f=u["".concat(l,".").concat(A)]||u[A]||d[A]||a;return i?r.createElement(f,o(o({ref:t},c),{},{components:i})):r.createElement(f,o({ref:t},c))}));function A(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},53944:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=i(74034),n=i(79973),a=(i(67294),i(3905)),o={id:"how_to_upgrade_firmware",title:"How to Upgrade Firmware",date:new Date("2020-04-24T00:00:00.000Z")},s={unversionedId:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware",id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware",isDocsHomePage:!1,title:"How to Upgrade Firmware",description:"Serial Line-APP+DCT",source:"@site/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/How_to_Upgrade_Firmware.md",sourceDirName:"Product/Wi-Fi-Module/WizFi250/Programers-Guide",slug:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/How_to_Upgrade_Firmware.md",version:"current",frontMatter:{id:"how_to_upgrade_firmware",title:"How to Upgrade Firmware",date:"2020-04-24T00:00:00.000Z"},sidebar:"docs",previous:{title:"How to Use Web Configuration",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_use_web_configuration"},next:{title:"Examples - Association & Disassociation",permalink:"/Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_association_disassociation"}},l=[{value:"Serial Line-APP+DCT",id:"serial-line-appdct",children:[]},{value:"Wi-Fi OTA(Over the Air) - APP",id:"wi-fi-otaover-the-air---app",children:[{value:"Start OTA mode using AT+FOTA Command",id:"start-ota-mode-using-atfota-command",children:[]},{value:"Start OTA mode using WEB Server",id:"start-ota-mode-using-web-server",children:[]},{value:"Start OTA mode using FUNCTION pin",id:"start-ota-mode-using-function-pin",children:[]},{value:"Upload newest firmware in OTA mode",id:"upload-newest-firmware-in-ota-mode",children:[]}]},{value:"Firmware Recovery",id:"firmware-recovery",children:[]}],p={toc:l};function c(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"serial-line-appdct"},"Serial Line-APP+DCT"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download WIZSmartScript from WIZnet homepage and install it"),(0,a.kt)("li",{parentName:"ol"},"Run WizFi250 in Boot Mode. (refer to boot pin in the PIN Description)"),(0,a.kt)("li",{parentName:"ol"},"Run WIZSmartScript and fill in options(RED) as below. (COM Port should match yours)\nAnd Click the 'Start Script' buton (Yellow).")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(85344).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Check the log that shows up as below. After 4 seconds, download will be started. First, write the DCT, then write the WizFi250 application firmware. If it is a success step1 message and step2 message. ( execute \u201c02-A. Flash Write(app) if step2 fails )\n\u261e If you want to change firmware binary file, just copy it to 'AppFWFile' folder.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6924).Z})),(0,a.kt)("h2",{id:"wi-fi-otaover-the-air---app"},"Wi-Fi OTA(Over the Air) - APP"),(0,a.kt)("h3",{id:"start-ota-mode-using-atfota-command"},"Start OTA mode using AT+FOTA Command"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Turn on OTA mode by entering the command as below.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AT+FOTA"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"[OK]")),(0,a.kt)("h3",{id:"start-ota-mode-using-web-server"},"Start OTA mode using WEB Server"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run WizFi250 in command mode, and operate the WizFi250 as below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"AT+WLEAVE\n[OK]\n\nAT+FWEBS=1,A\n[OK]\n\nAT+WSET=1,(SSID)\n[OK]\n\nAT+WSEC=1,(EncryptionType),(PreSharedKey)\n[OK]\n\nAT+WNET=0,192.168.0.2,255.255.255.0,192.168.0.2\n[OK]\n\nAT+WJOIN\n[OK]\n\n[Link-Up Event]\nIP Addr    : 192.168.0.1\nGateway    : 192.168.0.1\n[OK]\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Connect your PC Wi-Fi to the Wizfi250, open the web browser and enter the IP address of WizFi250 which you can find by using 'AT+WSTAT'")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(5293).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click the 'Over the Air' icon")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(10054).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Click the 'Change to OTA mode' button, then WizFi250 will enter OTA mode.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(81581).Z})),(0,a.kt)("h3",{id:"start-ota-mode-using-function-pin"},"Start OTA mode using FUNCTION pin"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If entered the OTA Mode using FUNCTION pin, you will see messages as below.(Refer to FUNCTION Pin Usage)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(17818).Z})),(0,a.kt)("h3",{id:"upload-newest-firmware-in-ota-mode"},"Upload newest firmware in OTA mode"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Now you can connect to the WizFi250 OTA Access Point from your PC. Connect your PC WLAN to the AP which the name WIZFI",(0,a.kt)("em",{parentName:"li"},"OTA"),"(MAC-Address).")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(14667).Z})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the WEB browser and go to 'wizfi250.wiznet.com'. (If the browser failed to find the page, disconnect the other network connections and try again). When successful, it should look like below.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the 'Delete App' button, and wait until internal flash memory is erased.\n(Before writing firmware, internal flash must be erased. Otherwise it does not work properly.).\n",(0,a.kt)("img",{src:i(52803).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After erase, click the second button, \u2018Choose File\u2019, and select the firmware file you want to upload.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the second button, 'Select file', and choose the FW file you want to upgrade. And finally, click the 'Upgrade' button to start upgrading. ",(0,a.kt)("strong",{parentName:"p"},"( You have to use APP.bin file. This file is in WIZSmartScript\\AppFWFile\\Version\\APP.bin )"),"\n",(0,a.kt)("img",{src:i(19881).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wait for a second until upgrade is finished and check if it shows a complete message as below.\n",(0,a.kt)("img",{src:i(99917).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check if WizFi250 is upgraded and works well."))),(0,a.kt)("h2",{id:"firmware-recovery"},"Firmware Recovery"),(0,a.kt)("p",null,"This section explains how to recover firmware when a critical problem occurred in WizFi250 application firmware."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Input low signal to BOOT pin and FUNCTION pin."),(0,a.kt)("li",{parentName:"ol"},"Reboot WizFi250"),(0,a.kt)("li",{parentName:"ol"},"If WizFi250 starts the firmware procedure you will see a serial message as below. If this procedure succeeds, WizFi250 will be reset to factory default firmware.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(39730).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"If you want to upload newest firmware to WizFi250, you have to use OTA mode.\nFor detailed information for starting OTA mode, refer to Wi-Fi OTA."),(0,a.kt)("li",{parentName:"ol"},"Afterwards, you can upload newest firmware using web browser. For detailed information for uploading newest firmware in web page, refer to Wi-Fi OTA - Upload newest firmware in OTA mode.")))}c.isMDXComponent=!0},10054:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-13-9147773a4afdf55cdf48e6048b59b77b.png"},85344:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-14-1e99e0ca44e3a2818705678812ba4ea4.png"},6924:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-15-1c543a4f3e614e15c71c5d27e51d44be.png"},81581:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-16-f4d26f4af1d0d233452f2d3c233d250f.png"},17818:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWAAAACMCAIAAAG69dTAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAemSURBVHhe7dztlps6DIXh3v9NTx22cCQZeUgCDWne5wdHbBSGOIr7sbrOn58LsIf48ycU/dgtF89y7t134iFWPMTKHkLz349S1U1vPsRhN3oFD7HiIVbbD+En//Dvwuj0H7DHZR7i7XiIlc2ExiIdu3Z6qtN/wB48xIqHWN3nvx9HKe+nrTjEYTd6BQ+x4iFW+SE09qLTfjyP/bD3usZD2H/f6jIPcftI1g/Ffzp78sbXn+t/eA+HYCEMC2FYCMNCmNtCaNtffimwdelF4/NN6epm/5hcze359jxl77n+W3rO//munsBCGBbCsBDmthDa//xRWi12vvKJb0j5qcfDnXLTT2RrfNIyfxAWwvDVMCyE+X0h9K3577879zdZvdXx6thZvfaDfPwbOAoLYVgIw0IYFsKwEIaFMCyEYSEMC2HyQoy/oT7KxX9j/vxC+J49b3K889jzRu98FBbiilgIw0IYFsKwEIaFMCyEYSEMC2GOWYjxt88f5/4GxjdT1aPqtecdD3fKTT9RW98bO/tiLIRhIQwLYVgCw0IYFsKwEAhsIPyvG6r9cZSupmJ8VUtE9a9HvIutfvWRVB9P6kzF+Cqfz494Lz4DBAwEAgYCAQOBgIFAwEAgYCAQMBAIGAgEDAQCGwj/18bpL5JT4TvF55OjtFpUV0dvzMf+1JOKfpTlyr0H3sbqqB4XLuWdz+dH2dPjzfvH42bR+LpJp5D7wh2yQP4mR93zDFd+tvdiURAwEAgYCAQMBAIGAgEDgYCBQMBAIGAgENwHwv/NXVV38wYl7Sg9GaWrqdh8lQ8/sb44e9BH34lyf5R5Pkp3SMX4Kp98Yn19n/Ss+AduA9FGuFOKr8VAIGAgEDAQCJgABAwEAgYCAQOBgIFAcBsI/eFi848Yk7Bf8j2t9qfSk/FSsxniXfJHpWLPRzj2pLzzDarnR7zR/QPoH4n4MFE49rRCdNr1pF/dPEqr8UbbH0+3+QmlzlSML/ENqqsj3o6PAQEDgYCBQMBAIGAgEDAQCBgIBAwEAgYCAQOBgIFAwEAgYCAQMBAIGAgEDAQCBgIBA4GAgUDAQCCwgej/xjX9k1f/b19b7U9FyZjvN3/t/vv3np0Ps7Pt2+RFVDEubso7n+85yp4eGfOxP/WkYrOn8TU6W5S+OmnhfCE67ZTsOXbt1Of9KLcOR0nPl5bwqnRMhfiwGxM0G4s4nvain3Y+nx9lT4837x+Pm0XjaxkTNBtr97TPWnQGYtN9IF5fIH8H3bCx84u58rO9F4uCgIFAwEAgYCAQMBAIGAgEDAQCBgIBA4GAgUDAQCBgIBAwEAgYCAQMBAIGAgEDgYCBQGAD4f89WVV3CvulzZ7k0fu02p92qceqz6mv78n3M2nQqT/6wqt6Up74/BPri3v+zfQ8NevUh006ldTpC9Fp4vNPrC/OHvShd6KwX0pFuirpVFJnKiYvkU+sr++TnhX/AAOB4DYQbU/rlOJrMRAIGAgEDAQCBgIBA4GAgUDAQCBgAhAwEAgYCAQMBAIGAgEDgYCBAFAKG4T93dTCoqn9naJ+sSiGYhcWY1JJnel07qFm4Hvs+kbpklgUQ7ELBd/ja5knvq6op0m1P22UiEUrS+t+4NvkL8D4rfCJr5t0OuebfS3zxNeV3tOPqXixBr7Q9vT7L4avk8mlkW/2tcwTX1dSTz/txRM18OXCN0HfDbFoYdHCopWlC4tq1rewaDWGPvF1JfX4U9WiRCxaWVr3A9+GLwCAEhsEgBIbBIASGwSAEhsEgBIbBIASGwSAEhsEgBIbBIASGwSAEhsEgBIbBIASGwSAEhsEgBIbBIASGwSAEhsEgBIbBIASGwSAUtgg7H/DuLBoYdHCohiKXViMScV3+vpfeuXn+tf6+hX+PqpFydPsLguLgKkwKJuj40NfyzzxdcX3jHWnUCxa+XCsG52KRQuLVpbW/Zt8m68bnYpF9Q9tLFpZuhiTRqFYFDt93W2GwKYwKJuj40NfyzzxdcX3vF43Ot3kGx6tK+rx7ILj80drmSdj3eh0NL8KeOXMdT70tcwTX1d8z1G15/NH6z18/xm17EmkyrtfG4DugZkTi1Zj6BNfT6hNLIphY+nCopUPVSe61Fm6L7eo5tt83ei08+FYNzrtNsNGeWPnC4uGe45+bQC6MCiXGp09D7OnBwmLhv0YFAAlNggAJTYIACU2CAAlNggAJTYIACU2CAAlNggAJTYIACU2CAAlNggAJTYIACU2CAAlNggAJTYIACU2CAAlNggAJTYIAKX7BlH9n8gezSf0ErFoMSbPefQ+6heLYih2YTEmlaqTXM7OcYi8stVyP5qPqk7lnl2IlyyK9xlrT3nF9/ha5omv56pOcjk7x4u217Ra7kfz0WbnZuj5BtWNTr0q3+SbfS3zxNd7VP3kcnaOp+XVrJb40XwuvSqdig+rOplcGvlmX8s88fVc1UkuZ+d40X1NqyV+NJ/QS8SilaULi2LY+FD1SFfFopr1LSxajaFPfF2pesjl7ByHYGUBlNggAJRsg2i/SdukqwC+ExsEgBIbBIASGwSAEhsEgBIbBIASGwSAEhsEgBJbAIASGwSAEhsEgBIbBIASGwSAEhsEgMLPz19dY1BFaGJ31QAAAABJRU5ErkJggg=="},14667:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-18-b48668376506713785efa0d77683f90f.png"},52803:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-19-2d970716668cc76522124bcdfdc37956.png"},5293:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-2-ea6159929ca5ac46174a9ec88d8819d4.png"},19881:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-20-0c36bf5f6c7faf12b667369f085b1243.png"},99917:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-21-a9ae4b5b3c4ac733770880aae45f9dc4.png"},39730:function(e,t,i){"use strict";t.Z=i.p+"assets/images/wizfi250pg-22-fa5dd809f04600db3dcf4914f15c70bf.png"}}]);