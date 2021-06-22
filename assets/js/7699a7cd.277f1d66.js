(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[15076],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28582:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],l={id:"exercise_3_switch_eng",title:"Exercise 3. Switch(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},c="Blinking LED with a switch",u={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_eng",isDocsHomePage:!1,title:"Exercise 3. Switch(Eng)",description:"Outline",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_3._Switch(Eng).md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_eng",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_eng",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_3._Switch(Eng).md",version:"current",frontMatter:{id:"exercise_3_switch_eng",title:"Exercise 3. Switch(Eng)",date:"2020-04-08T00:00:00.000Z"},sidebar:"docs",previous:{title:"Exercise 2. Serial port(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_2_serial_port_eng"},next:{title:"Exercise 4. PWM(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_eng"}},d=[{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Hardware",id:"hardware",children:[{value:"The Circuit",id:"the-circuit",children:[]},{value:"Connections",id:"connections",children:[]}]},{value:"Software",id:"software",children:[{value:"Example Code",id:"example-code",children:[]},{value:"How to run and test result",id:"how-to-run-and-test-result",children:[]}]},{value:"Related Links",id:"related-links",children:[]}],s={toc:d};function p(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blinking-led-with-a-switch"},"Blinking LED with a switch"),(0,a.kt)("h2",{id:"outline"},"Outline"),(0,a.kt)("p",null,"This is an exercise to blink an LED with a switch. Users can learn how\nto put digital input into the WIZwiki board with a switch. Users can\nlearn how to get digital output from a specified pin in the WIZwiki\nboard."),(0,a.kt)("h2",{id:"what-you-need"},"What you need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WIZwiki-W7500"),(0,a.kt)("li",{parentName:"ul"},"USB cable"),(0,a.kt)("li",{parentName:"ul"},"Breadboard"),(0,a.kt)("li",{parentName:"ul"},"Jumper wire"),(0,a.kt)("li",{parentName:"ul"},"Switch"),(0,a.kt)("li",{parentName:"ul"},"LED"),(0,a.kt)("li",{parentName:"ul"},"Resistor (330 Ohm)"),(0,a.kt)("li",{parentName:"ul"},"Test S/W : In order to check serial data, terminal program is\nrequired on the PC. Tera Term is used in this exercise.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(90342).Z})),(0,a.kt)("h2",{id:"hardware"},"Hardware"),(0,a.kt)("h3",{id:"the-circuit"},"The Circuit"),(0,a.kt)("p",null,"This is the circuit for this example. ",(0,a.kt)("img",{alt:"Button and LED",src:n(99528).Z})),(0,a.kt)("p",null,"The LED for this example is placed on the WIZwiki board and it is shown\nin the red box in the cicuit below. ",(0,a.kt)("img",{alt:"RGB LED",src:n(33393).Z})),(0,a.kt)("h3",{id:"connections"},"Connections"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(33393).Z})),(0,a.kt)("h2",{id:"software"},"Software"),(0,a.kt)("h3",{id:"example-code"},"Example Code"),(0,a.kt)("p",null,"Below are the example codes. Delete the default code and copy/paste the\ncodes below and compile."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "mbed.h"\n\nDigitalOut myled(LED1);\nDigitalIn mybutton(D6);\n\nint main(/) {\n    while(1) {\n        if (mybutton == 1)\n          myled = 0;\n        else\n          myled = 1;\n    }\n}\n')),(0,a.kt)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),(0,a.kt)("p",null,"DigitalOut myled(LED1) part configures LED1 as an output mode. DigitalIn\nmybutton(D6) part configures D6 pin as an input mode."),(0,a.kt)("p",null,"When pushing a button, the LED turns on. When 3.3V drives to D6 pin,\nmybutton will be recognized as \u201c1\u201d, myled becomes \u201c0\u201d. When myled\nbecomes \u201c0\u201d, then the LED1 on the WIZwiki board turns on."),(0,a.kt)("p",null,"When you release the button, the LED turns off."),(0,a.kt)("p",null,"To learn Class and API like the DigitalOut and DigitalIn parts of the\nabove example code, refer to the mbed Handbook page.\n\ud83c\udf0e",(0,a.kt)("a",{parentName:"p",href:"https://developer.mbed.org/handbook/Homepage"},"https://developer.mbed.org/handbook/Homepage")),(0,a.kt)("h2",{id:"related-links"},"Related Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"tutorial_eng"},"Starter Kit Tutorial"))))}p.isMDXComponent=!0},90342:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2_teraterm-bf3e17219345832f5d3c216be91179d7.png"},33393:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3_board_all-3a482ce4078aa85757af915180cd066d.png"},99528:function(e,t,n){"use strict";t.Z=n.p+"assets/images/button_led_scheme-55a49fbb6b6891b511ca126b332441ed.png"}}]);