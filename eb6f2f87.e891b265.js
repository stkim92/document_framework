(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{531:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return o}));var n=r(2),i=r(6),l=(r(0),r(578)),c={id:"network_exercise_2_led_with_tcp_kor",title:"\ub124\ud2b8\uc6cc\ud06c \uc608\uc81c2. TCP \ud1b5\uc2e0\uc73c\ub85c LED \uc81c\uc5b4\ud558\uae30",date:new Date("2020-04-08T00:00:00.000Z")},a={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_2_led_with_tcp_kor",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_2_led_with_tcp_kor",isDocsHomePage:!1,title:"\ub124\ud2b8\uc6cc\ud06c \uc608\uc81c2. TCP \ud1b5\uc2e0\uc73c\ub85c LED \uc81c\uc5b4\ud558\uae30",description:"\uac1c\uc694",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500-Mbed-Starter-Kit\\Network_Exercise_2._LED_with_TCP(Kor).md",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_2_led_with_tcp_kor",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Network_Exercise_2._LED_with_TCP(Kor).md",sidebar:"docs",previous:{title:"\ub124\ud2b8\uc6cc\ud06c \uc608\uc81c1. TCP \ub8e8\ud504\ubc31 \ud1b5\uc2e0 \ud14c\uc2a4\ud2b8\ud558\uae30",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/network_exercise_1_tcp_loopback_kor"},next:{title:"Kit \uad6c\uc131\ubb3c \ub370\uc774\ud130\uc2dc\ud2b8",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/kit_parts_datasheet_kor"}},b=[{value:"\uac1c\uc694",id:"\uac1c\uc694",children:[]},{value:"\uc900\ube44\ubb3c",id:"\uc900\ube44\ubb3c",children:[]},{value:"\ud558\ub4dc\uc6e8\uc5b4",id:"\ud558\ub4dc\uc6e8\uc5b4",children:[{value:"\ud68c\ub85c\ub3c4",id:"\ud68c\ub85c\ub3c4",children:[]},{value:"\uc5f0\uacb0\ub3c4",id:"\uc5f0\uacb0\ub3c4",children:[]}]},{value:"\uc18c\ud504\ud2b8\uc6e8\uc5b4",id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4",children:[{value:"\ud14c\uc2a4\ud2b8\uc6a9 \ud504\ub85c\uadf8\ub7a8",id:"\ud14c\uc2a4\ud2b8\uc6a9-\ud504\ub85c\uadf8\ub7a8",children:[]},{value:"Example Code",id:"example-code",children:[]},{value:"\uc2e4\ud589 \ubc29\ubc95 \ubc0f \uacb0\uacfc",id:"\uc2e4\ud589-\ubc29\ubc95-\ubc0f-\uacb0\uacfc",children:[]}]},{value:"\ud559\uc2b5 \uc790\ub8cc",id:"\ud559\uc2b5-\uc790\ub8cc",children:[]},{value:"\uad00\ub828 \ub9c1\ud06c",id:"\uad00\ub828-\ub9c1\ud06c",children:[]}],p={rightToc:b};function o(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),Object(l.b)("p",null,"TCP \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud574\uc11c \uc6d0\uaca9\uc73c\ub85c ",Object(l.b)("strong",{parentName:"p"},"LED \ucf1c\uae30\uc640 \ub044\uae30"),"\ub97c \uc2e4\ud589\uc2dc\ucf1c \ubcf4\ub294 \uc608\uc81c\uc774\ub2e4. PC\ub97c TCP Client\ub85c \ub3d9\uc791\uc2dc\ud0a4\uace0,\nWIZwiki \ubcf4\ub4dc\ub294 TCP Server\ub85c \ub3d9\uc791\uc2dc\ud0a8\ub2e4. W7500\uc758 TOE (TCP/IP Offload Engine)\uc744 \uc774\uc6a9\ud574\uc11c\n\ub124\ud2b8\uc6cc\ud06c\ub97c \uad6c\ub3d9\uc2dc\ud0a4\uba74\uc11c \uc704\uc988\uc704\ud0a4\uc5d0 \uc5f0\uacb0\ub41c \ucef4\ud3ec\ub10c\ud2b8 (\uc5ec\uae30\uc120 LED)\ub97c \uad6c\ub3d9\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \ud559\uc2b5\ud560 \uc218 \uc788\ub2e4."),Object(l.b)("h2",{id:"\uc900\ube44\ubb3c"},"\uc900\ube44\ubb3c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"WIZwiki-W7500 \ubcf4\ub4dc"),Object(l.b)("li",{parentName:"ul"},"USB \ucf00\uc774\ube14"),Object(l.b)("li",{parentName:"ul"},"LAN \ucf00\uc774\ube14"),Object(l.b)("li",{parentName:"ul"},"\uacf5\uc720\uae30 (DHCP\uac00 \uc9c0\uc6d0\ub418\ub294 \uc720\uc120 \uacf5\uc720\uae30 \ub610\ub294 \uc720\ubb34\uc120 \uacf5\uc720\uae30)")),Object(l.b)("h2",{id:"\ud558\ub4dc\uc6e8\uc5b4"},"\ud558\ub4dc\uc6e8\uc5b4"),Object(l.b)("h3",{id:"\ud68c\ub85c\ub3c4"},"\ud68c\ub85c\ub3c4"),Object(l.b)("p",null,"\ud2b9\ubcc4\ud55c \ubd80\uac00 \ud68c\ub85c\uac00 \ud544\uc694\uc5c6\ub2e4."),Object(l.b)("h3",{id:"\uc5f0\uacb0\ub3c4"},"\uc5f0\uacb0\ub3c4"),Object(l.b)("p",null,"DHCP\uac00 \uc9c0\uc6d0\ub418\ub294 \uacf5\uc720\uae30\uc640 PC\ub97c LAN \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. \uacf5\uc720\uae30\uc640 WIZwiki \ubcf4\ub4dc\ub97c LAN \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. PC\uc640\nWIZwiki \ubcf4\ub4dc\ub97c USB \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_kr/tcp_loopback_system_config.png",alt:null}))),Object(l.b)("h2",{id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4"),Object(l.b)("h3",{id:"\ud14c\uc2a4\ud2b8\uc6a9-\ud504\ub85c\uadf8\ub7a8"},"\ud14c\uc2a4\ud2b8\uc6a9 \ud504\ub85c\uadf8\ub7a8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Terminal program",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"EX) Teraterm, Hercules, Hyperterminal \ub4f1"),Object(l.b)("li",{parentName:"ul"},"\uc2dc\ub9ac\uc5bc\ud3ec\ud2b8 \uba54\uc2dc\uc9c0 \ud655\uc778\uc6a9"),Object(l.b)("li",{parentName:"ul"},"\uc2dc\ub9ac\uc5bc\ud3ec\ud2b8 \uc0ac\uc6a9 \uc608\uc81c\ub294 \uc544\ub798 \ub9c1\ud06c\ub97c \ucc38\uc870",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"exercise_2_serial_port_kor"}),"\ud29c\ud1a0\ub9ac\uc5bc \uc608\uc81c2. \uc2dc\ub9ac\uc5bc \ud3ec\ud2b8\ub97c \uc774\uc6a9\ud574 \ub370\uc774\ud130\n\ucd9c\ub825\ud558\uae30"))))))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"TCP/IP Client Server terminal program",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"EX) Hercules \ub4f1"),Object(l.b)("li",{parentName:"ul"},"TCP/IP Client Server terminal \uc744 \uc774\uc6a9\ud574 \uba54\uc2dc\uc9c0 \uc1a1\uc218\uc2e0\uc5d0 \uc0ac\uc6a9")))),Object(l.b)("h3",{id:"example-code"},"Example Code"),Object(l.b)("p",null,"\uc544\ub798 \ud398\uc774\uc9c0\uc758 \uc608\uc81c \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),Object(l.b)("p",null,"\ud83c\udf0e",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mbed.org/teams/WIZnet/code/TCP_LED_Control-WIZwiki-W7500/"}),"https://developer.mbed.org/teams/WIZnet/code/TCP_LED_Control-WIZwiki-W7500/")),Object(l.b)("h3",{id:"\uc2e4\ud589-\ubc29\ubc95-\ubc0f-\uacb0\uacfc"},"\uc2e4\ud589 \ubc29\ubc95 \ubc0f \uacb0\uacfc"),Object(l.b)("p",null,"PC\uc640 WIZwiki \ubcf4\ub4dc\ub97c USB \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. (\ubcf4\ub4dc\uc5d0 \uc804\uc6d0\uc774 \uacf5\uae09\ub418\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ubbf8 \uc5f0\uacb0 \ub418\uc5b4 \uc788\uc744 \uac83\uc774\ub2e4.)\nPC\uc5d0\uc11c \uc2dc\ub9ac\uc5bc\ud130\ubbf8\ub110 \ud504\ub85c\uadf8\ub7a8\uc744 \uc2e4\ud589\uc2dc\ud0a8\ub2e4. WIZwiki \ubcf4\ub4dc\uc758 Reset \uc2a4\uc704\uce58\ub97c \ub20c\ub7ec\uc900 \ud6c4\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ud655\uc778\ud55c\ub2e4. DHCP\uac00\n\ub3d9\uc791\ud574\uc11c Server\uc758 IP \uc8fc\uc18c(ex: 192.168.0.8)\uac00 \ud560\ub2f9\ub418\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/tcp_led_dhcp_1.jpg",alt:null}))),Object(l.b)("p",null,"PC\uc5d0\uc11c Hercules \ud504\ub85c\uadf8\ub7a8\uc744 \uad6c\ub3d9\ud55c\ub2e4. Hercules\uc5d0\uc11c TCP Client \uba54\ub274\ub97c \uc124\uc815\ud55c\ub2e4. \uc811\uc18d\ud558\uace0\uc790 \ud558\ub294\nServer\uc758 IP \uc8fc\uc18c (ex: 192.168.0.8)\ub97c \uc785\ub825\ud558\uace0, Ping\uc744 \ud074\ub9ad\ud558\uace0, Connect\ub97c \ud074\ub9ad\ud55c \ud6c4\uc758 \ubaa8\uc2b5\uc774\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_kr/tcp_led_client_1.jpg",alt:null}))),Object(l.b)("p",null,"TCP Server \uc5d0\uc11c \ucd9c\ub825\ud558\ub294 \uba54\uc2dc\uc9c0\ub97c Teraterm \uc5d0\uc11c \ubcf8 \ud654\uba74\uc774\ub2e4. PC\uc758 Client\uc5d0\uc11c Server\ub85c\nConnection \ub418\uc5c8\uc74c\uc744 \ud560 \uc218 \uc788\ub2e4. (ex: Connection from: 192.168.0.6)"),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_kr/tcp_led_server_1.jpg",alt:null})),"\n\uc774\uc81c\ubd80\ud130 WIZwiki \ubcf4\ub4dc\uc5d0 LED\ub97c \uc81c\uc5b4\ud574\ubcf8\ub2e4."),Object(l.b)("p",null,"PC\uc758 TCP Client\uc5d0\uc11c ",Object(l.b)("strong",{parentName:"p"},'"LED',"_",'ON"'),'\uc774\ub77c\ub294 \uba54\uc2dc\uc9c0\ub97c WIZwiki \ubcf4\ub4dc (TCP Server)\ub85c \ubcf4\ub0b4\uba74 LED\uac00\n\ucf1c\uc9c4\ub2e4. \uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c "LED',"_",'ON" \ubd80\ubd84\uc758 Send \ubc84\ud2bc\uc744 \ud074\ub9ad\ud55c\ub2e4.'),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_kr/tcp_led_on_client.jpg",alt:null}))),Object(l.b)("p",null,"\uc774 LED","_","ON \uba54\uc2dc\uc9c0\ub294 TCP Server \uce21\uc5d0\uc11c Parsing\uc774 \ub418\uace0, LED\uac00 \ucf1c\uc9c4\ub2e4. \uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c \ud30c\ub780\uc0c9 \ub3d9\uadf8\ub77c\ubbf8\n\ubd80\ubd84\uc758 LED\uac00 \ucf1c\uc9d0\uc744 \ud655\uc778\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_kr/tcp_led_on_off.png",alt:null}))),Object(l.b)("p",null,"LED\uac00 \ucf1c\uc9c0\ub294 \ub3d9\uc791 \uc774\uc678\uc5d0 \ub2e4\ub978 \uba54\uc2dc\uc9c0\ub3c4 \ud45c\uc2dc\ub41c\ub2e4. TCP Client \ud504\ub85c\uadf8\ub7a8\uc774 WIZwiki \ubcf4\ub4dc\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uace0,\nWIZwiki \ubcf4\ub4dc\uac00 \uba54\uc2dc\uc9c0\ub97c \ubc18\ub300\uc758 \uc21c\uc11c\ub85c TCP Client\ub85c \ubcf4\ub0b8\ub2e4."),Object(l.b)("p",null,"\uc544\ub798 \uadf8\ub9bc\uacfc \uac19\uc774 \uc2dc\ub9ac\uc5bc \ud3ec\ud2b8\ub85c Loopback \ub41c \uba54\uc2dc\uc9c0\ub97c \ud655\uc778\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_kr/tcp_led_on_server.jpg",alt:null}))),Object(l.b)("p",null,'PC\uc758 TCP Client\uc5d0\uc11c "LED',"_",'ON"\uc774 \uc544\ub2cc ',Object(l.b)("strong",{parentName:"p"},'"\uc544\ubb34 \uba54\uc2dc\uc9c0"'),"(ex: TEST)\ub97c WIZwiki \ubcf4\ub4dc (TCP\nServer)\ub85c \ubcf4\ub0b4\uba74 LED\uac00 \uaebc\uc9c4\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_kr/tcp_led_off_client.jpg",alt:null}))),Object(l.b)("p",null,"LED\uac00 \uaebc\uc9c0\ub294 \ub3d9\uc791 \uc774\uc678\uc5d0 \ub2e4\ub978 \uba54\uc2dc\uc9c0\ub3c4 \ud45c\uc2dc\ub41c\ub2e4. TCP Client \ud504\ub85c\uadf8\ub7a8\uc774 WIZwiki \ubcf4\ub4dc\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uace0,\nWIZwiki \ubcf4\ub4dc\uac00 \uba54\uc2dc\uc9c0\ub97c \ubc18\ub300\uc758 \uc21c\uc11c\ub85c TCP Client\ub85c \ubcf4\ub0b8\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_kr/tcp_led_off_server.jpg",alt:null}))),Object(l.b)("p",null,"\uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c \ud30c\ub780\uc0c9 \ub3d9\uadf8\ub77c\ubbf8 \ubd80\ubd84\uc758 LED\uac00 \uaebc\uc9d0\uc744 \ud655\uc778\ud55c\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_kr/tcp_led_on_off.png",alt:null}))),Object(l.b)("h2",{id:"\ud559\uc2b5-\uc790\ub8cc"},"\ud559\uc2b5 \uc790\ub8cc"),Object(l.b)("p",null,"\uc544\ub798\uc5d0 \uc704\uc988\ub124\ud2b8 \uc81c\ud488\uc5d0 \uc0ac\uc6a9\ud560 mbed \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc608\uc81c\ub4e4\uc774 \uc788\ub2e4."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mbed.org/teams/WIZnet/"}),"WIZnet \ud300 \ud398\uc774\uc9c0"))),Object(l.b)("p",null,"\uc544\ub798\uc5d0 \uc704\uc988\ub124\ud2b8\uc758 Hardware TCP/IP chip (W5500) \uacfc WIZnet TCP/IP Offload Engine\n(W7500)\uc744 \uc704\ud55c mbed \ub77c\uc774\ube0c\ub7ec\ub9ac"),Object(l.b)("p",null,"\uac00 \uc788\ub2e4."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mbed.org/teams/WIZnet/code/WIZnetInterface/"}),"WIZnetInterface \ud398\uc774\uc9c0"))),Object(l.b)("h2",{id:"\uad00\ub828-\ub9c1\ud06c"},"\uad00\ub828 \ub9c1\ud06c"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"tutorial_kor"}),"\uc2a4\ud0c0\ud130 \ud0b7 \ud29c\ud1a0\ub9ac\uc5bc"))))}o.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),i=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),o=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=o(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=o(r),m=n,O=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return r?i.a.createElement(O,a(a({ref:t},p),{},{components:r})):i.a.createElement(O,a({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=m;var a={};for(var b in t)hasOwnProperty.call(t,b)&&(a[b]=t[b]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<l;p++)c[p]=r[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);