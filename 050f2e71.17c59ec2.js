(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{578:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var i=n(0),r=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,s=p["".concat(a,".").concat(m)]||p[m]||u[m]||l;return n?r.a.createElement(s,c(c({ref:t},b),{},{components:n})):r.a.createElement(s,c({ref:t},b))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var b=2;b<l;b++)a[b]=n[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var i=n(2),r=n(6),l=(n(0),n(578)),a={id:"exercise_1_led_eng",title:"Exercise 1. LED(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},c={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_1_led_eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_1_led_eng",isDocsHomePage:!1,title:"Exercise 1. LED(Eng)",description:"Blinking LED",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500-Mbed-Starter-Kit\\Exercise_1._LED(Eng).md",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_1_led_eng",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_1._LED(Eng).md",sidebar:"docs",previous:{title:"Sign-up at ARM mbed(Eng)",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign_up_at_arm_mbed_eng"},next:{title:"Exercise 2. Serial port(Eng)",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_2_serial_port_eng"}},o=[{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Log on to mbed website",id:"log-on-to-mbed-website",children:[{value:"Example Code",id:"example-code",children:[]},{value:"Run exercise and Check test result",id:"run-exercise-and-check-test-result",children:[]}]},{value:"Related Links",id:"related-links",children:[]}],b={rightToc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"blinking-led"},"Blinking LED"),Object(l.b)("h2",{id:"outline"},"Outline"),Object(l.b)("p",null,"Users can connect the mbed platform board with the PC and compile\nonline. Users can also blink the LED using the example program provided\nfor the platform board."),Object(l.b)("h2",{id:"what-you-need"},"What you need"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"WIZwiki-W7500 board"),Object(l.b)("li",{parentName:"ul"},"USB cable")),Object(l.b)("h2",{id:"log-on-to-mbed-website"},"Log on to mbed website"),Object(l.b)("p",null,"Please log on to \ud83c\udf0e",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.mbed.org"}),"mbed website"),"mbed website\nfor further testing. If you haven\u2019t signed up yet, please sign up.\n",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"sign_up_at_arm_mbed_eng"}),"Sign-up at ARM mbed Developer\nSite")),Object(l.b)("h4",{id:"connect-the-pc-with-mbed-platform-board"},"Connect the PC with mbed platform board"),Object(l.b)("p",null,"Connect the PC with WIZwiki-W7500 using the USB cable.\n",Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/bd_usb_connected.jpg",alt:null}))," The PC will\nread the driver like a USB driver."),Object(l.b)("h4",{id:"open-the-mbed-compiler"},"Open the mbed compiler"),Object(l.b)("p",null,"Click \u201cOpen mbed Compiler\u201d as shown below."),Object(l.b)("p",null,Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/105_wizwiki.png",alt:null}))),Object(l.b)("p",null,"A pop-up will appear and \u201cBlinky LED Hello World\u201d will be set as the\ntemplate and \u201cmbed","_","blinky\u201d will be set as the Default program name."),Object(l.b)("p",null,Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/106_program_name.png",alt:null}))),Object(l.b)("p",null,"Click OK and the mbed","_","blinky program will be copied to my Program\nWorkspace."),Object(l.b)("p",null,Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/107_mbed_blinky_main.png",alt:null}))),Object(l.b)("p",null,"Clik the Compile icon from the menu to compile the example code. Success\nmessage will appear below if an error is not occurred during compiling."),Object(l.b)("p",null,Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/108_compile_end.png",alt:null}))),Object(l.b)("p",null,"Once compiling is successful, download the\nmbed","_","blinky","_","WIZWIKI-W7500.bin file to the PC."),Object(l.b)("p",null,Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/109_bin.png",alt:null}))),Object(l.b)("h3",{id:"example-code"},"Example Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),'#include "mbed.h"\n\nDigitalOut myled(LED1);\n\nint main() {\n    while(1) {\n        myled = 1;\n        wait(0.2);\n        myled = 0;\n        wait(0.2);\n    }\n}\n')),Object(l.b)("h3",{id:"run-exercise-and-check-test-result"},"Run exercise and Check test result"),Object(l.b)("p",null,"Copy and paste the mbed","_","blinky","_","WIZWIKI","_","W7500.bin file to the mbed\ndriver (E: or F:) ",Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/110_copy.png",alt:null}))),Object(l.b)("p",null,"Then press the reset pin. The LED (blue circle) shown in the below image\nwill blink every 0.2 second. ",Object(l.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/wizwiki_led1.png",alt:"WIZwiki-W7500\nLED1"}))),Object(l.b)("p",null,"If the LED blinks successfully, it means that the example code is\noperating on the WIZwiki-W7500 board. This exercise making the LED blink\nis called \u201cHello World.\u201d"),Object(l.b)("p",null,"Users can test with different time value of the wait function."),Object(l.b)("h2",{id:"related-links"},"Related Links"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(i.a)({parentName:"li"},{href:"tutorial_eng"}),"Starter Kit Tutorial"))))}d.isMDXComponent=!0}}]);