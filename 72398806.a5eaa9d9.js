(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{289:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),a=(n(0),n(578)),o={id:"exercise_3_switch_eng",title:"Exercise 3. Switch(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},c={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_eng",isDocsHomePage:!1,title:"Exercise 3. Switch(Eng)",description:"Blinking LED with a switch",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500-Mbed-Starter-Kit\\Exercise_3._Switch(Eng).md",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_eng",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_3._Switch(Eng).md",sidebar:"docs",previous:{title:"Exercise 2. Serial port(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_2_serial_port_eng"},next:{title:"Exercise 4. PWM(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_eng"}},l=[{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Hardware",id:"hardware",children:[{value:"The Circuit",id:"the-circuit",children:[]},{value:"Connections",id:"connections",children:[]}]},{value:"Software",id:"software",children:[{value:"Example Code",id:"example-code",children:[]},{value:"How to run and test result",id:"how-to-run-and-test-result",children:[]}]},{value:"Related Links",id:"related-links",children:[]}],d={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"blinking-led-with-a-switch"},"Blinking LED with a switch"),Object(a.b)("h2",{id:"outline"},"Outline"),Object(a.b)("p",null,"This is an exercise to blink an LED with a switch. Users can learn how\nto put digital input into the WIZwiki board with a switch. Users can\nlearn how to get digital output from a specified pin in the WIZwiki\nboard."),Object(a.b)("h2",{id:"what-you-need"},"What you need"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZwiki-W7500"),Object(a.b)("li",{parentName:"ul"},"USB cable"),Object(a.b)("li",{parentName:"ul"},"Breadboard"),Object(a.b)("li",{parentName:"ul"},"Jumper wire"),Object(a.b)("li",{parentName:"ul"},"Switch"),Object(a.b)("li",{parentName:"ul"},"LED"),Object(a.b)("li",{parentName:"ul"},"Resistor (330 Ohm)"),Object(a.b)("li",{parentName:"ul"},"Test S/W : In order to check serial data, terminal program is\nrequired on the PC. Tera Term is used in this exercise.")),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/2_teraterm.png",alt:null}))),Object(a.b)("h2",{id:"hardware"},"Hardware"),Object(a.b)("h3",{id:"the-circuit"},"The Circuit"),Object(a.b)("p",null,"This is the circuit for this example. ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/button_led_scheme.png",alt:"Button and\nLED"}))),Object(a.b)("p",null,"The LED for this example is placed on the WIZwiki board and it is shown\nin the red box in the cicuit below. ",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/3_board_all.png",alt:"RGB\nLED"}))),Object(a.b)("h3",{id:"connections"},"Connections"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/3_board_all.png",alt:null}))),Object(a.b)("h2",{id:"software"},"Software"),Object(a.b)("h3",{id:"example-code"},"Example Code"),Object(a.b)("p",null,"Below are the example codes. Delete the default code and copy/paste the\ncodes below and compile."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'#include "mbed.h"\n\nDigitalOut myled(LED1);\nDigitalIn mybutton(D6);\n\nint main() {\n    while(1) {\n        if (mybutton == 1)\n          myled = 0;\n        else\n          myled = 1;\n    }\n}\n')),Object(a.b)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),Object(a.b)("p",null,"DigitalOut myled(LED1) part configures LED1 as an output mode. DigitalIn\nmybutton(D6) part configures D6 pin as an input mode."),Object(a.b)("p",null,"When pushing a button, the LED turns on. When 3.3V drives to D6 pin,\nmybutton will be recognized as \u201c1\u201d, myled becomes \u201c0\u201d. When myled\nbecomes \u201c0\u201d, then the LED1 on the WIZwiki board turns on."),Object(a.b)("p",null,"When you release the button, the LED turns off."),Object(a.b)("p",null,"To learn Class and API like the DigitalOut and DigitalIn parts of the\nabove example code, refer to the mbed Handbook page.\n\ud83c\udf0e",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mbed.org/handbook/Homepage"}),"https://developer.mbed.org/handbook/Homepage")),Object(a.b)("h2",{id:"related-links"},"Related Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"tutorial_eng"}),"Starter Kit Tutorial"))))}b.isMDXComponent=!0},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),b=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,m=u["".concat(o,".").concat(p)]||u[p]||s[p]||a;return n?i.a.createElement(m,c(c({ref:t},d),{},{components:n})):i.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);