(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{238:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(9),c=(r(0),r(547)),l={id:"network_exercise_1_tcp_loopback_kor",title:"Network Exercise 1. TCP loopback(Kor)",date:new Date("2020-04-08T00:00:00.000Z")},a={id:"Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/network_exercise_1_tcp_loopback_kor",title:"Network Exercise 1. TCP loopback(Kor)",description:"## Content",source:"@site/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/Network_Exercise_1._TCP_loopback(Kor).md",permalink:"/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/network_exercise_1_tcp_loopback_kor",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/Network_Exercise_1._TCP_loopback(Kor).md",sidebar:"someSidebar",previous:{title:"Exercise 7. Photoresistor(Kor)",permalink:"/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/exercise_7_photoresistor_kor"},next:{title:"Network Exercise 2. LED with TCP(Kor)",permalink:"/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/network_exercise_2_led_with_tcp_kor"}},b=[{value:"Content",id:"content",children:[]},{value:"\uac1c\uc694",id:"\uac1c\uc694",children:[]},{value:"\uc900\ube44\ubb3c",id:"\uc900\ube44\ubb3c",children:[]},{value:"\ud558\ub4dc\uc6e8\uc5b4",id:"\ud558\ub4dc\uc6e8\uc5b4",children:[{value:"\ud68c\ub85c\ub3c4",id:"\ud68c\ub85c\ub3c4",children:[]},{value:"\uc5f0\uacb0\ub3c4",id:"\uc5f0\uacb0\ub3c4",children:[]}]},{value:"\uc18c\ud504\ud2b8\uc6e8\uc5b4",id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4",children:[{value:"\ud14c\uc2a4\ud2b8\uc6a9 \ud504\ub85c\uadf8\ub7a8",id:"\ud14c\uc2a4\ud2b8\uc6a9-\ud504\ub85c\uadf8\ub7a8",children:[]},{value:"\uc2e4\ud589 \ubc29\ubc95 \ubc0f \uacb0\uacfc",id:"\uc2e4\ud589-\ubc29\ubc95-\ubc0f-\uacb0\uacfc",children:[]}]},{value:"\ud559\uc2b5 \uc790\ub8cc",id:"\ud559\uc2b5-\uc790\ub8cc",children:[]},{value:"\uad00\ub828 \ub9c1\ud06c",id:"\uad00\ub828-\ub9c1\ud06c",children:[]}],o={rightToc:b};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"content"},"Content"),Object(c.b)("h1",{id:"\ub124\ud2b8\uc6cc\ud06c-\uc608\uc81c1-tcp-\ub8e8\ud504\ubc31-\ud1b5\uc2e0-\ud14c\uc2a4\ud2b8\ud558\uae30"},"\ub124\ud2b8\uc6cc\ud06c \uc608\uc81c1. TCP \ub8e8\ud504\ubc31 \ud1b5\uc2e0 \ud14c\uc2a4\ud2b8\ud558\uae30"),Object(c.b)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),Object(c.b)("p",null,"TCP \ud504\ub85c\ud1a0\ucf5c\uc744 \uc0ac\uc6a9\ud574\uc11c Loopback \uc744 \uc2e4\ud589\uc2dc\ucf1c \ubcf4\ub294 \uc608\uc81c\uc774\ub2e4. PC\ub97c TCP Client\ub85c \ub3d9\uc791\uc2dc\ud0a4\uace0, WIZwiki\n\ubcf4\ub4dc\ub294 TCP Server\ub85c \ub3d9\uc791\uc2dc\ud0a8\ub2e4. TCP Client\uc5d0\uc11c \ubcf4\ub0b8 \uba54\uc2dc\uc9c0\ub97c \uadf8\ub300\ub85c \ub418\ub3cc\ub824 \ubc1b\ub294 \ub3d9\uc791\uc744 \ud55c\ub2e4."),Object(c.b)("p",null,"W7500\uc758 TOE (TCP/IP Offload Engine)\uc744 \uc774\uc6a9\ud574\uc11c \ub124\ud2b8\uc6cc\ud06c\ub97c \uad6c\ub3d9\uc2dc\ud0a4\ub294 \ubc29\ubc95\uc744 \ud559\uc2b5\ud560 \uc218 \uc788\ub2e4."),Object(c.b)("h2",{id:"\uc900\ube44\ubb3c"},"\uc900\ube44\ubb3c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"WIZwiki-W7500 \ubcf4\ub4dc"),Object(c.b)("li",{parentName:"ul"},"USB \ucf00\uc774\ube14"),Object(c.b)("li",{parentName:"ul"},"LAN \ucf00\uc774\ube14"),Object(c.b)("li",{parentName:"ul"},"\uacf5\uc720\uae30 (DHCP\uac00 \uc9c0\uc6d0\ub418\ub294 \uc720\uc120 \ub610\ub294 \uc720\ubb34\uc120 \uacf5\uc720\uae30)")),Object(c.b)("h2",{id:"\ud558\ub4dc\uc6e8\uc5b4"},"\ud558\ub4dc\uc6e8\uc5b4"),Object(c.b)("h3",{id:"\ud68c\ub85c\ub3c4"},"\ud68c\ub85c\ub3c4"),Object(c.b)("p",null,"\ud2b9\ubcc4\ud55c \ubd80\uac00 \ud68c\ub85c\uac00 \uc5c6\ub2e4."),Object(c.b)("h3",{id:"\uc5f0\uacb0\ub3c4"},"\uc5f0\uacb0\ub3c4"),Object(c.b)("p",null,"DHCP\uac00 \uc9c0\uc6d0\ub418\ub294 \uacf5\uc720\uae30\uc640 PC\ub97c LAN \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. \uacf5\uc720\uae30\uc640 WIZwiki \ubcf4\ub4dc\ub97c LAN \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. PC\uc640\nWIZwiki \ubcf4\ub4dc\ub97c USB \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/tcp_loopback_system_config.png",alt:null}))),Object(c.b)("h2",{id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4"),Object(c.b)("h3",{id:"\ud14c\uc2a4\ud2b8\uc6a9-\ud504\ub85c\uadf8\ub7a8"},"\ud14c\uc2a4\ud2b8\uc6a9 \ud504\ub85c\uadf8\ub7a8"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Terminal program",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"EX) Teraterm, Hercules, Hyperterminal \ub4f1"),Object(c.b)("li",{parentName:"ul"},"\uc2dc\ub9ac\uc5bc\ud3ec\ud2b8 \uba54\uc2dc\uc9c0 \ud655\uc778\uc6a9"),Object(c.b)("li",{parentName:"ul"},"\uc2dc\ub9ac\uc5bc\ud3ec\ud2b8 \uc0ac\uc6a9 \uc608\uc81c\ub294 \uc544\ub798 \ub9c1\ud06c\ub97c \ucc38\uc870",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/products/wizwiki_mbed_kit/kit_kr/tutorial_kr/exam2"}),"\ud29c\ud1a0\ub9ac\uc5bc \uc608\uc81c2. \uc2dc\ub9ac\uc5bc \ud3ec\ud2b8\ub97c \uc774\uc6a9\ud574 \ub370\uc774\ud130\n\ucd9c\ub825\ud558\uae30"))))))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"TCP/IP Client Server terminal program",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"EX) Hercules \ub4f1"),Object(c.b)("li",{parentName:"ul"},"TCP/IP Client Server terminal \uc744 \uc774\uc6a9\ud574 \uba54\uc2dc\uc9c0 \uc1a1\uc218\uc2e0\uc5d0 \uc0ac\uc6a9",Object(c.b)("h3",Object(n.a)({parentName:"li"},{id:"example-code"}),"Example Code"))))),Object(c.b)("p",null,"\uc544\ub798 \ud398\uc774\uc9c0\uc758 \uc608\uc81c \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4."),Object(c.b)("p",null,"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mbed.org/teams/WIZnet/code/TCPEchoServer-WIZwiki-W7500/?platform=WIZwiki-W7500"}),"https://developer.mbed.org/teams/WIZnet/code/TCPEchoServer-WIZwiki-W7500/?platform=WIZwiki-W7500")),Object(c.b)("p",null,'\uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c \ube68\uac04\uc0c9 \ubd80\ubd84\uc778 "Import this program" \ubd80\ubd84\uc744 \ud074\ub9ad\ud55c\ub2e4.'),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_1.jpg",alt:null}))),Object(c.b)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \ud31d\uc5c5 \ucc3d\uc774 \ub72c\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_2.jpg",alt:null}))),Object(c.b)("p",null,'"Source URL" \uacfc "Import As" \uac00 \ub514\ud3f4\ud2b8 \uac12\uc73c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\ub2e4. "Import Name"\ub3c4 \ub514\ud3f4\ud2b8\ub85c \uc124\uc815\ub418\uc5b4\n\uc788\ub294\ub370, \uc0ac\uc6a9\uc790\uac00 \uc6d0\ud558\uba74 \ubc14\uafc0 \uc218 \uc788\ub2e4. \ube68\uac04\uc0c9 \ubd80\ubd84\uc778 "Import"\ub97c \ud074\ub9ad\ud558\uba74 mbed \ucef4\ud30c\uc77c\ub7ec \ud658\uacbd\uc73c\ub85c \ud504\ub85c\uadf8\ub7a8\uc774\n\ubcf5\uc0ac\ub41c\ub2e4.'),Object(c.b)("h3",{id:"\uc2e4\ud589-\ubc29\ubc95-\ubc0f-\uacb0\uacfc"},"\uc2e4\ud589 \ubc29\ubc95 \ubc0f \uacb0\uacfc"),Object(c.b)("p",null,"PC\uc640 WIZwiki \ubcf4\ub4dc\ub97c USB \ucf00\uc774\ube14\ub85c \uc5f0\uacb0\ud55c\ub2e4. (\ubcf4\ub4dc\uc5d0 \uc804\uc6d0\uc774 \uacf5\uae09\ub418\uc5b4\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 \uc774\ubbf8 \uc5f0\uacb0 \ub418\uc5b4 \uc788\uc744 \uac83\uc774\ub2e4.)\nPC\uc5d0\uc11c \uc2dc\ub9ac\uc5bc\ud130\ubbf8\ub110 \ud504\ub85c\uadf8\ub7a8\uc744 \uc2e4\ud589\uc2dc\ud0a8\ub2e4. WIZwiki \ubcf4\ub4dc\uc758 Reset \uc2a4\uc704\uce58\ub97c \ub20c\ub7ec\uc900 \ud6c4\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ud655\uc778\ud55c\ub2e4.\n",Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_server1.jpg",alt:null}))),Object(c.b)("p",null,'PC\uc5d0\uc11c Hercules \ud504\ub85c\uadf8\ub7a8\uc744 \uad6c\ub3d9\ud55c\ub2e4. Hercules\uc5d0\uc11c TCP Client \uba54\ub274\ub97c \uc120\ud0dd\ud558\uace0, IP\uc640 Port\ub97c\n\uc124\uc815\ud55c\ub2e4. \uc544\ub798 \uadf8\ub9bc\uc758 "Ping" \ubc84\ud2bc\uc744 \ub204\ub978 \ud6c4 \uba54\uc2dc\uc9c0\ub97c \ud655\uc778\ud55c\ub2e4.\n',Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_client1.jpg",alt:null}))),Object(c.b)("p",null,'"Connect" \ubc84\ud2bc\uc744 \ub204\ub978 \ud6c4 \uc5f0\uacb0\uc744 \ud655\uc778\ud55c\ub2e4.\n',Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_client2.jpg",alt:null}))),Object(c.b)("p",null,"TCP Client \ud504\ub85c\uadf8\ub7a8\uc774 WIZwiki \ubcf4\ub4dc\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uace0, WIZwiki \ubcf4\ub4dc\uac00 \uc5ed\uc21c\uc73c\ub85c \ub41c \uba54\uc2dc\uc9c0\ub97c TCP\nClient\ub85c \ubcf4\ub0b8\ub2e4. \uc544\ub798 \uadf8\ub9bc\uc5d0\uc11c Loopback \ub41c \uba54\uc2dc\uc9c0\ub97c \ud655\uc778\ud55c\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_client3.jpg",alt:null}))),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_server2.jpg",alt:null}))),Object(c.b)("h2",{id:"\ud559\uc2b5-\uc790\ub8cc"},"\ud559\uc2b5 \uc790\ub8cc"),Object(c.b)("p",null,"\uc544\ub798\uc5d0 \uc704\uc988\ub124\ud2b8 \uc81c\ud488\uc5d0 \uc0ac\uc6a9\ud560 mbed \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc608\uc81c\ub4e4\uc774 \uc788\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mbed.org/teams/WIZnet/"}),"WIZnet \ud300 \ud398\uc774\uc9c0"))),Object(c.b)("p",null,"\uc544\ub798\uc5d0 \uc704\uc988\ub124\ud2b8\uc758 Hardware TCP/IP chip (W5500) \uacfc WIZnet TCP/IP Offload Engine\n(W7500)\uc744 \uc704\ud55c mbed \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc788\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mbed.org/teams/WIZnet/code/WIZnetInterface/"}),"WIZnetInterface\n\ud398\uc774\uc9c0"))),Object(c.b)("h2",{id:"\uad00\ub828-\ub9c1\ud06c"},"\uad00\ub828 \ub9c1\ud06c"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:""}),"\uc2a4\ud0c0\ud130 \ud0b7 \ud29c\ud1a0\ub9ac\uc5bc"))))}p.isMDXComponent=!0},547:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},u=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,O=u["".concat(l,".").concat(m)]||u[m]||d[m]||c;return r?i.a.createElement(O,a({ref:t},o,{components:r})):i.a.createElement(O,a({ref:t},o))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,l=new Array(c);l[0]=m;var a={};for(var b in t)hasOwnProperty.call(t,b)&&(a[b]=t[b]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var o=2;o<c;o++)l[o]=r[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);