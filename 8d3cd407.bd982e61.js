(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{364:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return b}));var n=r(1),i=r(9),a=(r(0),r(547)),l={id:"exercise_2_serial_port_eng",title:"Exercise 2. Serial port(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},c={id:"Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/exercise_2_serial_port_eng",title:"Exercise 2. Serial port(Eng)",description:"## Content",source:"@site/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/Exercise_2._Serial_port(Eng).md",permalink:"/document_framework/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/exercise_2_serial_port_eng",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/Exercise_2._Serial_port(Eng).md",sidebar:"someSidebar",previous:{title:"Exercise 1. LED(Eng)",permalink:"/document_framework/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/exercise_1_led_eng"},next:{title:"Exercise 3. Switch(Eng)",permalink:"/document_framework/docs/Product/Mbed WIZwiki Platform/WIZwiki-W7500 Mbed Starter Kit/exercise_3_switch_eng"}},o=[{value:"Content",id:"content",children:[]},{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Hardware",id:"hardware",children:[]},{value:"Software",id:"software",children:[{value:"Example Code",id:"example-code",children:[]},{value:"How to run and test result",id:"how-to-run-and-test-result",children:[]}]},{value:"Another example",id:"another-example",children:[]},{value:"Related Links",id:"related-links",children:[]},{value:"Next Exercise",id:"next-exercise",children:[]}],d={rightToc:o};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("h1",{id:"tutorial-exercise-2-data-output-using-serial-port"},"Tutorial Exercise 2. Data Output using Serial Port"),Object(a.b)("h2",{id:"outline"},"Outline"),Object(a.b)("p",null,"Users can use the WIZwiki board\u2019s serial port to send data to PC or\nenter data in the PC and send it to the WIZwiki board. This exercise\nwill show users how to check messages on the PC while the implemented\ncode is operating on the WIZwiki-W7500 board."),Object(a.b)("h2",{id:"what-you-need"},"What you need"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"PC"),Object(a.b)("li",{parentName:"ul"},"WIZwiki-W7500"),Object(a.b)("li",{parentName:"ul"},"USB cable"),Object(a.b)("li",{parentName:"ul"},"Test S/W : In order to check serial data, terminal program is\nrequired on the PC. Tera Term is used in this exercise.")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/2_teraterm.png",alt:null}))),Object(a.b)("h2",{id:"hardware"},"Hardware"),Object(a.b)("p",null,"Connect the PC with WIZwiki-W7500 using the USB cable."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/bd_usb_connected.jpg",alt:null}))),Object(a.b)("h2",{id:"software"},"Software"),Object(a.b)("h3",{id:"example-code"},"Example Code"),Object(a.b)("p",null,"Below are the example codes. Delete the default code and copy/paste the\ncodes below and compile."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),'#include "mbed.h"\n\nDigitalOut myled(LED1);\nSerial pc(SERIAL_TX, SERIAL_RX);\n\nint count_blink = 0;\n\nint main() {\n    while(1) {\n        myled = 1;\n        //pc.printf("myled = 1\\n");\n        wait(0.2);\n        myled = 0;\n        //pc.printf("myled = 0\\n");\n        wait(0.2);\n        count_blink++;\n        pc.printf("The number of blink = %d\\n", count_blink);\n    }\n}\n')),Object(a.b)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),Object(a.b)("p",null,"First, change the program name from \u2018mbed-blinky\u2019 to any name (ex:\nserial)."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/2a.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/2b.png",alt:null}))),Object(a.b)("p",null,"Go to Program Workspace and select main.cpp and edit. Delete the default\ncode and copy/paste the example codes and compile. Set the Tera Term as\nshown below. ",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/2c.png",alt:null}))),Object(a.b)("p",null,"If the user connects the WIZwiki board with the PC, the port will be\nadded. Select COM11 (COM ","#"," could vary depending on the user\u2019s PC).\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/2d.png",alt:null}))),Object(a.b)("p",null,"The program results are as below.\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wizwiki_mbed_kit/kit_kr/2e.png",alt:null}))),Object(a.b)("h2",{id:"another-example"},"Another example"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Serial","_","HelloWorld","_","WIZwiki-W7500")),Object(a.b)("p",null,"This example can do both data output and input and is created by the\nWIZnet team. Click the link below and open main.cpp to copy/import/test\nthe code."),Object(a.b)("p",null,"\ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mbed.org/teams/WIZnet/code/Serial_HelloWorld_WIZwiki-W7500/"}),"https://developer.mbed.org/teams/WIZnet/code/Serial_HelloWorld_WIZwiki-W7500/")),Object(a.b)("h2",{id:"related-links"},"Related Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:""}),"Starter Kit Tutorial"))),Object(a.b)("h2",{id:"next-exercise"},"Next Exercise"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:""}),"Exercise 3. Blinking LED with a switch"))))}b.isMDXComponent=!0},547:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),b=function(e){var t=i.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=b(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=b(r),s=n,m=u["".concat(l,".").concat(s)]||u[s]||p[s]||a;return r?i.a.createElement(m,c({ref:t},d,{components:r})):i.a.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var d=2;d<a;d++)l[d]=r[d];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);