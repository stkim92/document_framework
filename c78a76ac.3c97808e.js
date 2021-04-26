(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{458:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(578)),o={id:"ethernet_library_for_ioShield_A",title:"Using WIZnet Ethernet Library for ioShield-A",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/Open-Source-Hardware/ethernet_library_for_ioShield_A",id:"Product/Open-Source-Hardware/ethernet_library_for_ioShield_A",isDocsHomePage:!1,title:"Using WIZnet Ethernet Library for ioShield-A",description:"Connecting to the Internet using the W5500 powered Ethernet Shield",source:"@site/docs\\Product\\Open-Source-Hardware\\ethernet_library_for_ioShield_A.md",permalink:"/Products/Product/Open-Source-Hardware/ethernet_library_for_ioShield_A",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/ethernet_library_for_ioShield_A.md",sidebar:"docs",previous:{title:"ioShield-A",permalink:"/Products/Product/Open-Source-Hardware/ioshield_a"},next:{title:"ioShield-K",permalink:"/Products/Product/Open-Source-Hardware/ioshield_k"}},l=[{value:"Arduino Ethernet Library",id:"arduino-ethernet-library",children:[]},{value:"Update Ethernet Library",id:"update-ethernet-library",children:[]},{value:"Change code depending WIZnet chip, W5100, W5200 or W5500",id:"change-code-depending-wiznet-chip-w5100-w5200-or-w5500",children:[]},{value:"Examples",id:"examples",children:[]}],b={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Connecting to the Internet using the W5500 powered Ethernet Shield"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#arduino-ethernet-library"}),"Arduino Ethernet Library")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#update-ethernet-library"}),"Update Ethernet Library")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#change-code-depending-wiznet-chip-w5100-w5200-or-w5500"}),"Change code")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#examples"}),"Examples"))),Object(i.b)("h2",{id:"arduino-ethernet-library"},"Arduino Ethernet Library"),Object(i.b)("p",null,"from : ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://arduino.cc/en/Reference/Ethernet"}),"http://arduino.cc/en/Reference/Ethernet")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Arduino Ethernet Shield allows an Arduino board to connect to the\ninternet. It can serve as either a server accepting incoming\nconnections or a client making outgoing ones. The library supports up\nto four concurrent connection (incoming or outgoing or a combination).")),Object(i.b)("p",null,"For more details, please visit : ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://arduino.cc/en/Reference/Ethernet"}),"Arduino Ethernet Library\nPage"),"."),Object(i.b)("p",null,"Before COMPILING THE SOFTWARE, ",Object(i.b)("strong",{parentName:"p"},"Download\nand install Arduino 1.0.5")," from the Arduino software page."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Note: Certain functions may not work in earlier versions.")," Before\nusing this library, please update ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Main/Software"}),"the latest verison of Arduino\nSoftware"),"."),Object(i.b)("li",{parentName:"ul"},"See the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Guide/HomePage"}),"Getting Started with\nArduino"),"."),Object(i.b)("li",{parentName:"ul"},"See the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/Foundations"}),"foundations page from\nArduino")," for in-depth\ndescription of core concepts of the Arduino hardware and software"),Object(i.b)("li",{parentName:"ul"},"See the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Hacking/HomePage"}),"hacking page from\nArduino")," for information on\nextending and modifying the Arduino hardware and software"),Object(i.b)("li",{parentName:"ul"},"See the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/Links"}),"Links page from\nArduino"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://playground.arduino.cc/"}),"Playground page from\nArduino")," for other documentation.")),Object(i.b)("h2",{id:"update-ethernet-library"},"Update Ethernet Library"),Object(i.b)("p",null,"To use ioShiled-A(WIZ550io), you need to update new WIZnet Ethernet\nLibrary. Because ioShield-A use W5500 new chipset instead of W5100 which\nis used original Ethernet Shield."),Object(i.b)("p",null,"The first step is to download the latest version of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ_Ethernet_Library.git"}),"Wiznet Ethernet\nLibrary from\nGitHub"),"."),Object(i.b)("hr",null),Object(i.b)("p",null,"How to update the Ethernet library."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},'Open the archive and extract the file "WIZ',"_","Ether","_",'Library.zip"'),"\nto a convenient spot (I use the Desktop). "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},'Put(Overwrite) the "Ethernet" folder in this library to the\nlibraries folder in the Arduino Installation Folder'),' (for example,\nnormaly you can find Arduino libraries folder as "C:',"\\","Program\nFiles","\\","Arduino","\\","libraries","\\",'".), \\<del',">",' or select "Sketch -',">"," Import\nLibrary... -",">",' Add Library..." in Aruino IDE, and select the folder\nloacation. and then, you can see the new directory in your "My\nDocument/Arduino/libraries/".\\</del',">",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"/img/osh/ioshield-a/cap_2013-08-27_11-10-53-747.png",alt:null}))," ")),Object(i.b)("h2",{id:"change-code-depending-wiznet-chip-w5100-w5200-or-w5500"},"Change code depending WIZnet chip, W5100, W5200 or W5500"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'Select the define variable in "Ethernet/utility/W5100.h". When you\nuse WIZ550io, ioShield-Series, you uncomment "',"#","define\nW5500","_","ETHERNET","_",'SHIELD".')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:'title="w5100.h"',title:'"w5100.h"'}),"\n/* \n* Copyright (c) 2013 by WIZnet <support@wiznet.co.kr> \n* This file is free software; you can redistribute it and/or modify \n* it under the terms of either the GNU General Public License version 2 \n* or the GNU Lesser General Public License version 2.1, both as \n* published by the Free Software Foundation. \n*/\n\n#ifndef W5100_H_INCLUDED \n#define W5100_H_INCLUDED\n\n#include <avr/pgmspace.h> \n#include <SPI.h>\n\ntypedef uint8_t SOCKET;\n\n//#define W5100_ETHERNET_SHIELD // original ethernet shield from Arduino \n//#define W5200_ETHERNET_SHIELD // Ethernet Shield version 2 from Seeed. \n#define W5500_ETHERNET_SHIELD // ioShield Series\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,'Now you are ready to go to "File -',">"," Example -",">",' Ethernet", and select\nexamples what you want. There are many simple examples in Ethernet\nLibrary Folder as like\n',Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/osh/ioshield-a/cap_2013-08-26_15-51-17-988.png",alt:null}))),Object(i.b)("hr",null),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"twitter_test"}),"Test Twitter"),": A Twitter Simple\nPosting or refer ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://playground.arduino.cc/Code/TwitterLibrary"}),"http://playground.arduino.cc/Code/TwitterLibrary")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http_client"}),"Test HTTP Client(WebClient)"),": A\nSimple HTTP Client test")),Object(i.b)("p",null,"Basically, you can refer the usage for each examples in Arduino site."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/ChatServer"}),"http://arduino.cc/en/Tutorial/ChatServer"),": set up a simple chat\nserver."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/WebClient"}),"http://arduino.cc/en/Tutorial/WebClient"),": make a HTTP request."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/WebClientRepeating"}),"http://arduino.cc/en/Tutorial/WebClientRepeating"),": Make repeated\nHTTP requests."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/WebServer"}),"http://arduino.cc/en/Tutorial/WebServer"),": host a simple HTML page\nthat displays analog sensor values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/PachubeClient"}),"XivelyClient"),": connect\nto ",Object(i.b)("del",{parentName:"li"},"pachube.com")," ",Object(i.b)("strong",{parentName:"li"},"xively.com"),", a free datalogging site. ",Object(i.b)("strong",{parentName:"li"},"not a\nbig change except service name.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/PachubeClientString"}),"XivelyClientString"),":\nsend strings to ",Object(i.b)("del",{parentName:"li"},"pachube.com")," ",Object(i.b)("strong",{parentName:"li"},"xively.com"),". ",Object(i.b)("strong",{parentName:"li"},"not a big change\nexcept service name.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/BarometricPressureWebServer"}),"http://arduino.cc/en/Tutorial/BarometricPressureWebServer"),": outputs\nthe values from a barometric pressure sensor as a web page."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/UDPSendReceiveString"}),"http://arduino.cc/en/Tutorial/UDPSendReceiveString"),": Send and\nreceive text strings via UDP."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/UdpNtpClient"}),"http://arduino.cc/en/Tutorial/UdpNtpClient"),": Query a Network Time\nProtocol (NTP) server using UDP."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/DnsWebClient"}),"http://arduino.cc/en/Tutorial/DnsWebClient"),": DNS and DHCP-based Web\nclient."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/DhcpChatServer"}),"http://arduino.cc/en/Tutorial/DhcpChatServer"),": A simple DHCP Chat\nServer"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/DhcpAddressPrinter"}),"http://arduino.cc/en/Tutorial/DhcpAddressPrinter"),": Get an IP\naddress via DHCP and print it out"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino.cc/en/Tutorial/TelnetClient"}),"http://arduino.cc/en/Tutorial/TelnetClient"),": A simple Telnet client")))}u.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,s=p["".concat(o,".").concat(h)]||p[h]||d[h]||i;return r?a.a.createElement(s,c(c({ref:t},b),{},{components:r})):a.a.createElement(s,c({ref:t},b))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);