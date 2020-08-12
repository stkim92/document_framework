(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{144:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var i=t(2),o=t(6),a=(t(0),t(516)),r={id:"examples_association_disassociation",title:"Examples - Association & Disassociation",date:new Date("2020-05-12T00:00:00.000Z")},s={unversionedId:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_association_disassociation",id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_association_disassociation",isDocsHomePage:!1,title:"Examples - Association & Disassociation",description:"Station Mode using WPA2 Static IP",source:"@site/docs\\Product\\Wi-Fi-Module\\WizFi250\\Programers-Guide\\Examples_Association_&_Disassociation.md",permalink:"/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_association_disassociation",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/Examples_Association_&_Disassociation.md",sidebar:"someSidebar",previous:{title:"How to Upgrade Firmware",permalink:"/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_upgrade_firmware"},next:{title:"Examples - Data Communication",permalink:"/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/examples_data_communication"}},c=[{value:"Station Mode using WPA2 Static IP",id:"station-mode-using-wpa2-static-ip",children:[]},{value:"Station Mode using WPA2 DHCP",id:"station-mode-using-wpa2-dhcp",children:[]},{value:"AP Mode using WPA2 Static IP",id:"ap-mode-using-wpa2-static-ip",children:[]}],d={rightToc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"station-mode-using-wpa2-static-ip"},"Station Mode using WPA2 Static IP"),Object(a.b)("p",null,"This section explains how to connect to AP using WizFi250 with static IP address. In this example, target AP information is as below. ( SSID : WizFiDemoAP, Security : WPA2, Key : 12345678 )"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"AT                  (Sent AT command with 0x0d (Hex of Enter button))\n[OK]                (Response meaning successful execution)\n\nAT+WSET=0,WizFiDemoAP   (AT command for setting WiFi association)\n[OK]\n\nAT+WSEC=0,WPA2,12345678 (AT command for setting WiFi security)\n[OK]\n\nAT+WNET=0,192.168.12.101,255.255.255.0,192.168.12.1 (AT command for setting Static IP address)\n[OK]\n\nAT+WJOIN            (AT command executing AP association)\nJoining : WizFiDemoAP\nSuccessfully joined : WizFiDemoAP\n\n[Link-Up Event]\n  IP Addr   : 192.168.12.101\n  Gateway   : 192.168.12.1\n[OK]\n\nAT+WLEAVE           (AT command making disassociation from AP association)\n\n[Link-Down Event]\n[OK]\n")),Object(a.b)("h2",{id:"station-mode-using-wpa2-dhcp"},"Station Mode using WPA2 DHCP"),Object(a.b)("p",null,"This section explains how to connect WizFi250 to target AP with DCHP Client Mode"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"AT                  (Sent AT command with 0x0d (Hex of Enter button))\n[OK]                (Response meaning successful execution)\n\nAT+WSET=0,WizFiDemoAP   (AT command for setting WiFi association)\n[OK]\n\nAT+WSEC=0,WPA2,12345678 (AT command for setting WiFi security)\n[OK]\n\nAT+WNET=1   (AT command for setting DHCP)\n[OK]\n\nAT+WJOIN            (AT command executing AP association)\nJoining : WizFiDemoAP\nSuccessfully joined : WizFiDemoAP\n\n[Link-Up Event]\n  IP Addr   : 192.168.12.13\n  Gateway   : 192.168.12.1\n[OK]\n\nAT+WLEAVE           (AT command making disassociation from AP association) \n\n[Link-Down Event]\n[OK]\n")),Object(a.b)("h2",{id:"ap-mode-using-wpa2-static-ip"},"AP Mode using WPA2 Static IP"),Object(a.b)("p",null,"This section explains how to set AP mode using WizFi250. In AP mode, WizFi250 have to set static IP address. (AT+WNET=0,xxx,xxx,xxx) After setting AP mode, WizFi250 will operate DHCP Server. Thus, when smart phone or other devices connect to WizFi250, WizFi250 will give IP address to connected device."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"AT                  (Sent AT command with 0x0d (Hex of Enter button))\n[OK]                (Response meaning successful execution)\n\nAT+WSET=1,WizFi250_AP   (AT command for setting WiFi association information)\n[OK]\n\nAT+WSEC=1,WPA2,12345678 (AT command for setting WiFi security)\n[OK]\n\nAT+WNET=0,192.168.12.105,255.255.255.0,192.168.12.1 (AT command for setting Static IP address)\n[OK]\n\nAT+WJOIN            (AT command executing run AP mode)\nJoining : WizFi250_AP\n\n[Link-Up Event]\n  IP Addr   : 192.168.12.105\n  Gateway   : 192.168.12.1\n[OK]\n\nAT+WLEAVE           (AT Command disassociating from AP association) \n\n[Link-Down Event]\n[OK]\n")))}u.isMDXComponent=!0},516:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return A}));var i=t(0),o=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),u=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},l=o.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=u(t),l=i,A=m["".concat(r,".").concat(l)]||m[l]||p[l]||a;return t?o.a.createElement(A,s(s({ref:n},d),{},{components:t})):o.a.createElement(A,s({ref:n},d))}));function A(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<a;d++)r[d]=t[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"}}]);