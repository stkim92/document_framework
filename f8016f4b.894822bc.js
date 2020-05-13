(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{609:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return b})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return u}));var a=i(2),r=i(9),n=(i(0),i(626)),b={id:"wizarduino_mega_wifi",title:"WizArduino MEGA WIFI",date:new Date("2020-04-03T00:00:00.000Z")},c={id:"Product/Open-Source-Hardware/wizarduino_mega_wifi",title:"WizArduino MEGA WIFI",description:"![](/document_framework/img/osh/wizarduino_mega_wifi/1st_1894_1.png)",source:"@site/docs/Product/Open-Source-Hardware/WizArduino_MEGA_WIFI.md",permalink:"/document_framework/docs/Product/Open-Source-Hardware/wizarduino_mega_wifi",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Open-Source-Hardware/WizArduino_MEGA_WIFI.md",sidebar:"someSidebar",previous:{title:"WizArduino M0 ETH",permalink:"/document_framework/docs/Product/Open-Source-Hardware/wizarduino_m0_eth"},next:{title:"WizFi310 Shield",permalink:"/document_framework/docs/Product/Open-Source-Hardware/wizfi310_shield"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Features",id:"features",children:[{value:"Hardware Features",id:"hardware-features",children:[]},{value:"WiFi Features",id:"wifi-features",children:[]},{value:"PinOut",id:"pinout",children:[]}]},{value:"Getting Started",id:"getting-started",children:[{value:"Basic",id:"basic",children:[]},{value:"WiFi",id:"wifi",children:[]}]},{value:"WiFi Library",id:"wifi-library",children:[{value:"GitHub",id:"github",children:[]},{value:"sketch",id:"sketch",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Maker Projects",id:"maker-projects",children:[]},{value:"Technical Reference",id:"technical-reference",children:[{value:"Schematic &amp; Reference Design",id:"schematic--reference-design",children:[]},{value:"Dimension",id:"dimension",children:[]},{value:"Part List",id:"part-list",children:[]}]},{value:"FAQ",id:"faq",children:[]},{value:"Where to Buy",id:"where-to-buy",children:[]}],o={rightToc:l};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/1st_1894_1.png",alt:null}))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"WizArduino MEGA WIFI\ub294 Arduino\uc758 \ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.arduino.org/products/boards/arduino-mega-2560"}),"MEGA 2560\nboard")," \ub97c \uae30\ubc18\uc73c\ub85c\n",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:""}),"WizFi310")," \uac00 \ucd94\uac00\ub418\uc5b4 Arduino UNO \ud50c\ub7ab\ud3fc\ucc98\ub7fc \uac04\ub2e8\ud558\uba74\uc11c\ub3c4\nIoT\uae30\ub2a5 \uad6c\ud604\uc744 \uc704\ud55c \uae30\ubcf8 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/mega2560_wizfi310_1.png",alt:null}))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Arduino MEGA 2560\uacfc WizFi310 \uc774 \ud569\uccd0\uc9c4")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"\uacbd\uc81c\uc801\uc778 WizArduino MEGA WIFI\uc640 \ud568\uaed8")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IoT, \ud648 \uc624\ud1a0\uba54\uc774\uc158, \ub85c\ubd07, \ub4dc\ub860 \ub4f1 \uba54\uc774\ucee4 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud574 \ubcf4\uc138\uc694.")),Object(n.b)("hr",null),Object(n.b)("h2",{id:"features"},"Features"),Object(n.b)("h3",{id:"hardware-features"},"Hardware Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Microcontroller : ATmega2560"),Object(n.b)("li",{parentName:"ul"},"Operating Voltage : 5V"),Object(n.b)("li",{parentName:"ul"},"Digital I/O Pins : 20 (of which 12 provide PWM output)"),Object(n.b)("li",{parentName:"ul"},"Analog Input Pins : 6"),Object(n.b)("li",{parentName:"ul"},"DC Current per I/O Pin : 20 mA"),Object(n.b)("li",{parentName:"ul"},"DC Current for 3.3V Pin : 50 mA"),Object(n.b)("li",{parentName:"ul"},"Flash Memory : 256 KB of which 8 KB used by bootloader"),Object(n.b)("li",{parentName:"ul"},"SRAM : 8 KB"),Object(n.b)("li",{parentName:"ul"},"EEPROM : 4 KB"),Object(n.b)("li",{parentName:"ul"},"Clock Speed : 16 MHz"),Object(n.b)("li",{parentName:"ul"},"PCB Size : 53 x 68.5mm")),Object(n.b)("h3",{id:"wifi-features"},"WiFi Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Single band 2.4GHz IEEE 802.11b/g/n"),Object(n.b)("li",{parentName:"ul"},"Serial Interface : UART"),Object(n.b)("li",{parentName:"ul"},"UART Max Baud : 921600 bps"),Object(n.b)("li",{parentName:"ul"},"Soft AP : Enough memory retention, Wi-Fi Security (WEP,\nWPA/WPA2PSK), L2 Switching"),Object(n.b)("li",{parentName:"ul"},"OTA(Over The Air F/W Upgrading)"),Object(n.b)("li",{parentName:"ul"},"\ub354 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"WizFi310.md"}),"WizFi310 WiKi page"),"\ub97c \ucc38\uace0 \ud558\uc138\uc694.")),Object(n.b)("h3",{id:"pinout"},"PinOut"),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_pinout_170316.png",alt:null}))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)("h3",{id:"basic"},"Basic"),Object(n.b)("p",null,"WizArduino MEGA WIFI\ub294 Arduino \uc758 MEGA 2560 board\uc640 \ud638\ud658 \ub429\ub2c8\ub2e4. Arduino IDE\ub97c \uc124\uce58\n\ud558\uace0, \ubcf4\ub4dc\ub97c \uc5f0\uacb0 \ud558\uc138\uc694. Select board \uc2dc Arduino MEGA 2560\ub97c \uc120\ud0dd \ud558\uc138\uc694."),Object(n.b)("p",null,"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uc544\ub798 \ud398\uc774\uc9c0\ub97c \ucc38\uace0 \ud558\uc138\uc694."),Object(n.b)("p",null,"\ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.arduino.org/learning/tutorials/first-steps-with-arduino-ide"}),"Arduino\norg")," "),Object(n.b)("p",null,"\ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.arduino.cc/en/Guide/HomePage"}),"Arduino cc"),"  "),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_jumper_cap_170320.png",alt:null}))),Object(n.b)("h3",{id:"wifi"},"WiFi"),Object(n.b)("h4",{id:"hardware"},"Hardware"),Object(n.b)("p",null,"WiFi \uae30\ub2a5\uc774\uc6a9\uc2dc \uc704 \uc0ac\uc9c4\uacfc \uac19\uc774 \ubcf4\ub4dc \uc6b0\uce21 \uc0c1\ub2e8\uc5d0 \uc704\uce58\ud55c 2x2 Pin Header\uac00 \uc1fc\ud2b8 \ub418\uc5b4 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"WiFi"),Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"MCU"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RX"),Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TX")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TX"),Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RX")))),Object(n.b)("h4",{id:"software"},"Software"),Object(n.b)("p",null,"WizArduino MEGA WIFI\ub0b4 WizFi310\uc740 Main Chip(ATmega 2560)\uacfc Serial\ub85c \uc5f0\uacb0\ub418\uc5b4\n\uc788\uc2b5\ub2c8\ub2e4. \uc5f0\uacb0\ub41c Serial \ubc88\ud638\ub294 3\ubc88\uc785\ub2c8\ub2e4. \uc544\ub798\uc640 \uac19\uc774 \ucd08\uae30\ud654 \uacfc\uc815\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),'#include "WizFi310.h"\nvoid setup()\n{\n    Serial3.begin(115200);\n    WiFi.init(&Serial3);\n}\n')),Object(n.b)("p",null,"WiFi \uc774\uc6a9 \uad00\ub828\ud558\uc5ec \ub354 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",Object(n.b)("strong",{parentName:"p"},"Examples/IoT")," \ub2e8\ub77d\uc744 \ucc38\uace0\ud574 \uc8fc\uc138\uc694."),Object(n.b)("hr",null),Object(n.b)("h2",{id:"wifi-library"},"WiFi Library"),Object(n.b)("p",null,"WizArduino MEGA WIFI\uc5d0\uc11c WiFi \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc744 \ud558\ub824\uba74 WizFi310\uc6a9 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.\nGitHub\uc640 \uc544\ub450\uc774\ub178 \uc2a4\ucf00\uce58\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc124\uce58 \ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \uc544\ub798\ub97c \ucc38\uace0 \ud558\uae30 \ubc14\ub78d\ub2c8\ub2e4."),Object(n.b)("h3",{id:"github"},"GitHub"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Dwonload \ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Wiznet/WizFi310_arduino_library"}),"WizFi310 Arduino\nLibrary"),"\n",Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/github_1.png",alt:null})),"\n",Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/github_2.png",alt:null})))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"\ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc740 zip\ud30c\uc77c\uc744 \uc555\ucd95\uc744 \ud480\uc5b4\uc11c \ud574\ub2f9 \ud3f4\ub354\ub97c ",Object(n.b)("strong",{parentName:"p"},"\ub0b4\ubb38\uc11c/Arduino/Libraries"),"\uc5d0 \ubcf5\uc0ac\ud569\ub2c8\ub2e4. "),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\uc555\ucd95\uc744 \ud480\uba74 \ud558\ub098\uc758 \ud3f4\ub354\uac00 \ub354 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \ud3f4\ub354\ub97c \ubcf5\uc0ac \ud574\uc57c\ud568\uc744 \uc8fc\uc758 \ud569\ub2c8\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\\","WizFi310","_","arduino","_","library-master",Object(n.b)("strong",{parentName:"li"},"WizFi310","_","arduino","_","library-master")))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"sketch\uc5d0\uc11c \uc544\ub798 \uc0ac\uc9c4\uacfc \uac19\uc774 WizFi310 \uc608\uc81c\uac00 \ub098\uc628\ub2e4\uba74 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58 \ub41c \uac83\uc785\ub2c8\ub2e4.\n",Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/github3.png",alt:null}))))),Object(n.b)("h3",{id:"sketch"},"sketch"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"\uba54\ub274\ud0ed\uc758 \uc2a4\ucf00\uce58 - \ub77c\uc774\ube0c\ub7ec\ub9ac \ud3ec\ud568\ud558\uae30 - ",Object(n.b)("strong",{parentName:"li"},"\ub77c\uc774\ube0c\ub7ec\ub9ac\n\uad00\ub9ac"),Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager1.png",alt:null}))),Object(n.b)("li",{parentName:"ol"},"\uac80\uc0c9\ub780\uc5d0\uc11c ",Object(n.b)("strong",{parentName:"li"},"wizfi"),"\n\uac80\uc0c9",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager3.png",alt:null}))),Object(n.b)("li",{parentName:"ol"},"\uac80\uc0c9\ub41c WizFi310 \ub77c\uc774\ube0c\ub7ec\ub9ac\n",Object(n.b)("strong",{parentName:"li"},"\uc124\uce58"),Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager4.png",alt:null})),Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager5.png",alt:null}))),Object(n.b)("li",{parentName:"ol"},"\uc124\uce58\uc644\ub8cc \ubc0f \uc608\uc81c\n\ud655\uc778",Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager6.png",alt:null})),Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager7.png",alt:null})))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"examples"},"Examples"),Object(n.b)("h4",{id:"iot"},"IoT"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://wiznetian.com/article/wizarduino-wifi-thingspeak-%EC%97%B0%EB%8F%99%ED%95%98%EA%B3%A0-%EC%84%BC%EC%84%9C-%EA%B0%92%EC%9D%84-%EB%B3%B4%EB%82%B4%EA%B8%B0/"}),"ThingSpeak\n\uc5f0\ub3d9")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://wiznetian.com/article/wizarduino-wifi%EB%A1%9C-openweathermap-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90%EC%84%9C-%EB%82%A0%EC%94%A8%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0/"}),"OpenWeatherMap\n\uc5f0\ub3d9")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://wiznetian.com/article/wizarduino-wifi-cloud%ec%97%90-%ec%84%bc%ec%84%9c-%ec%a0%95%eb%b3%b4-%ec%a0%80%ec%9e%a5%ed%95%98%ea%b8%b0-dweet-io/"}),"Dweet.io\n\uc5f0\ub3d9")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://wiznetian.com/article/wizaruino-wifi-coap-%ed%86%b5%ec%8b%a0%ed%95%98%ea%b8%b0/"}),"CoAP\n\ud1b5\uc2e0")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://wiznetian.com/article/wizarduino-wifi-ubidots-%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c-%ec%97%b0%eb%8f%99/"}),"Ubidots\n\uc5f0\ub3d9")),Object(n.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"http://wiznetian.com/article/wizarduino-wifimqtt-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/"}),"MQTT")),Object(n.b)("li",{parentName:"ul"},"You can find more examples at\n\ud83c\udf0e",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Wiznet/WizFi310_arduino_library/tree/master/examples"}),"WizFi310","_","arduino","_","library/examples"))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"maker-projects"},"Maker Projects"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Coming Soon")),Object(n.b)("hr",null),Object(n.b)("h2",{id:"technical-reference"},"Technical Reference"),Object(n.b)("h3",{id:"schematic--reference-design"},"Schematic & Reference Design"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_sch_170314.pdf",alt:"schematic.pdf"}))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_design_170314.zip",alt:"reference\ndesign.zip"})))),Object(n.b)("h3",{id:"dimension"},"Dimension"),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_dimension_170315.png",alt:null}))),Object(n.b)("h3",{id:"part-list"},"Part List"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("img",Object(a.a)({parentName:"li"},{src:"/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_ver1.0_pl_170320.pdf",alt:"Part\nList"})),"  ")),Object(n.b)("hr",null),Object(n.b)("h2",{id:"faq"},"FAQ"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"W5100S_(MKR-)Ethernet_Shield.md"}),"WizArduino MEGA WIFI\uc5d0 \uc7a5\ucc29\ub41c WizFi310\uacfc \ub2e4\ub978 WiFi\ubaa8\ub4c8\uacfc \ucc28\uc774\uc810\uc740\n\ubb54\uac00\uc694?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:""}),"WiFi \ud1b5\uc2e0 \uac70\ub9ac\ub294 \uc5b4\ub5bb\uac8c \ub418\ub098\uc694?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:""}),"WizArduino WiFi\uc5d0\uc11c Software Serial \uc0ac\uc6a9\ud558\ub294\n\ubc29\ubc95?"))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"where-to-buy"},"Where to Buy"),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/w5100s_ethernet_shield/start/buynow.png",alt:"WIZnet Online Shop"})),Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/osh/w5100s_ethernet_shield/start/won.png",alt:"WIZnetKorea Online Shop,\nKorea"}))),Object(n.b)("hr",null))}u.isMDXComponent=!0},626:function(e,t,i){"use strict";i.d(t,"a",(function(){return m})),i.d(t,"b",(function(){return O}));var a=i(0),r=i.n(a);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):c({},t,{},e)),i},m=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=u(i),d=a,O=m["".concat(b,".").concat(d)]||m[d]||p[d]||n;return i?r.a.createElement(O,c({ref:t},o,{components:i})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,b=new Array(n);b[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var o=2;o<n;o++)b[o]=i[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,i)}d.displayName="MDXCreateElement"}}]);