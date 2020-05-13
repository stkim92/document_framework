(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var r=n(2),i=n(9),a=(n(0),n(626)),l={id:"exercise_1_led_eng",title:"Exercise 1. LED(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},c={id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_1_led_eng",title:"Exercise 1. LED(Eng)",description:"# Tutorial Exercise 1. Blinking LED\r",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500-Mbed-Starter-Kit\\Exercise_1._LED(Eng).md",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_1_led_eng",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_1._LED(Eng).md",sidebar:"someSidebar",previous:{title:"Sign-up at ARM mbed(Eng)",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/sign_up_at_arm_mbed_eng"},next:{title:"Exercise 2. Serial port(Eng)",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_2_serial_port_eng"}},o=[{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Log on to mbed website",id:"log-on-to-mbed-website",children:[{value:"Example Code",id:"example-code",children:[]},{value:"Run exercise and Check test result",id:"run-exercise-and-check-test-result",children:[]}]},{value:"Related Links",id:"related-links",children:[]},{value:"Next Exercise",id:"next-exercise",children:[]}],b={rightToc:o};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"tutorial-exercise-1-blinking-led"},"Tutorial Exercise 1. Blinking LED"),Object(a.b)("h2",{id:"outline"},"Outline"),Object(a.b)("p",null,"Users can connect the mbed platform board with the PC and compile\nonline. Users can also blink the LED using the example program provided\nfor the platform board."),Object(a.b)("h2",{id:"what-you-need"},"What you need"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZwiki-W7500 board"),Object(a.b)("li",{parentName:"ul"},"USB cable")),Object(a.b)("h2",{id:"log-on-to-mbed-website"},"Log on to mbed website"),Object(a.b)("p",null,"Please log on to \ud83c\udf0e",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mbed.org"}),"mbed website"),"mbed website\nfor further testing. If you haven\u2019t signed up yet, please sign up.\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"Sign-up_at_ARM_mbed(Eng).md"}),"Sign-up at ARM mbed Developer\nSite")),Object(a.b)("h4",{id:"connect-the-pc-with-mbed-platform-board"},"Connect the PC with mbed platform board"),Object(a.b)("p",null,"Connect the PC with WIZwiki-W7500 using the USB cable.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/bd_usb_connected.jpg",alt:null}))," The PC will\nread the driver like a USB driver."),Object(a.b)("h4",{id:"open-the-mbed-compiler"},"Open the mbed compiler"),Object(a.b)("p",null,"Click \u201cOpen mbed Compiler\u201d as shown below."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/105_wizwiki.png",alt:null}))),Object(a.b)("p",null,"A pop-up will appear and \u201cBlinky LED Hello World\u201d will be set as the\ntemplate and \u201cmbed","_","blinky\u201d will be set as the Default program name."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/106_program_name.png",alt:null}))),Object(a.b)("p",null,"Click OK and the mbed","_","blinky program will be copied to my Program\nWorkspace."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/107_mbed_blinky_main.png",alt:null}))),Object(a.b)("p",null,"Clik the Compile icon from the menu to compile the example code. Success\nmessage will appear below if an error is not occurred during compiling."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/108_compile_end.png",alt:null}))),Object(a.b)("p",null,"Once compiling is successful, download the\nmbed","_","blinky","_","WIZWIKI-W7500.bin file to the PC."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/109_bin.png",alt:null}))),Object(a.b)("h3",{id:"example-code"},"Example Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'#include "mbed.h"\n\nDigitalOut myled(LED1);\n\nint main() {\n    while(1) {\n        myled = 1;\n        wait(0.2);\n        myled = 0;\n        wait(0.2);\n    }\n}\n')),Object(a.b)("h3",{id:"run-exercise-and-check-test-result"},"Run exercise and Check test result"),Object(a.b)("p",null,"Copy and paste the mbed","_","blinky","_","WIZWIKI","_","W7500.bin file to the mbed\ndriver (E: or F:) ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/110_copy.png",alt:null}))),Object(a.b)("p",null,"Then press the reset pin. The LED (blue circle) shown in the below image\nwill blink every 0.2 second. ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/wizwiki_led1.png",alt:"WIZwiki-W7500\nLED1"}))),Object(a.b)("p",null,"If the LED blinks successfully, it means that the example code is\noperating on the WIZwiki-W7500 board. This exercise making the LED blink\nis called \u201cHello World.\u201d"),Object(a.b)("p",null,"Users can test with different time value of the wait function."),Object(a.b)("h2",{id:"related-links"},"Related Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"Tutorial(Eng).md"}),"Starter Kit Tutorial"))),Object(a.b)("h2",{id:"next-exercise"},"Next Exercise"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"Exercise_2._Serial_port(Eng).md"}),"Exercise 2. Data output using serial port"))))}d.isMDXComponent=!0},626:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,s=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?i.a.createElement(s,c({ref:t},b,{components:n})):i.a.createElement(s,c({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<a;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);