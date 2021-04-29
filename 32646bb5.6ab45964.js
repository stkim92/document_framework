(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(578)),o={id:"exercise_5_variable_resistor_eng",title:"Exercise 5. Variable resistor(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_eng",isDocsHomePage:!1,title:"Exercise 5. Variable resistor(Eng)",description:"Reading the analog value using a variable resistor",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500-Mbed-Starter-Kit\\Exercise_5._Variable_resistor(Eng).md",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_eng",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_5._Variable_resistor(Eng).md",sidebar:"docs",previous:{title:"Exercise 4. PWM(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_eng"},next:{title:"Exercise 6. Temperature sensor(Eng)",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_6_temperature_sensor_eng"}},c=[{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Hardware",id:"hardware",children:[{value:"The Circuit",id:"the-circuit",children:[]},{value:"Connections",id:"connections",children:[]}]},{value:"Software",id:"software",children:[{value:"Example Code",id:"example-code",children:[]},{value:"How to run and test result",id:"how-to-run-and-test-result",children:[]}]},{value:"Learning Resources",id:"learning-resources",children:[]},{value:"Related Links",id:"related-links",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"reading-the-analog-value-using-a-variable-resistor"},"Reading the analog value using a variable resistor"),Object(i.b)("h2",{id:"outline"},"Outline"),Object(i.b)("p",null,"This is an exercise to read Analog values made by variable resistor\n(potentiometer). The ADC (Analog Digital Converter) module of W7500 chip\nembedded in WIZwiki board is used. User can learn how to read sensor's\nanalog output data."),Object(i.b)("h2",{id:"what-you-need"},"What you need"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WIZwiki-W7500"),Object(i.b)("li",{parentName:"ul"},"USB cable"),Object(i.b)("li",{parentName:"ul"},"Breadboard"),Object(i.b)("li",{parentName:"ul"},"Jumper wire"),Object(i.b)("li",{parentName:"ul"},"Rotary Potentiometer (10K Ohm)")),Object(i.b)("h2",{id:"hardware"},"Hardware"),Object(i.b)("h3",{id:"the-circuit"},"The Circuit"),Object(i.b)("p",null,"This is the circuit for this example.\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/5_potentiometer_schem.png",alt:null}))),Object(i.b)("h3",{id:"connections"},"Connections"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/5_board_all.jpg",alt:"WIZwiki and a variable resistor"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/5_board_analog1.jpg",alt:null})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/5_board_analog2.jpg",alt:null}))),Object(i.b)("h2",{id:"software"},"Software"),Object(i.b)("h3",{id:"example-code"},"Example Code"),Object(i.b)("p",null,"Below are the example codes. Delete the default code and copy/paste the\ncodes below and compile."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-c"}),'#include "mbed.h"\n \nAnalogIn analog_value(A0);\n \nDigitalOut led(LED1);\n\nint main() {\n    float meas;\n    \n    printf("\\nAnalogIn example\\n");\n    \n    while(1) {\n        meas = analog_value.read(); // Converts and read the analog input value (value from 0.0 to 1.0)\n        meas = meas * 3300; // Change the value to be in the 0 to 3300 range\n        printf("measure = %.0f mV\\n", meas);\n        if (meas > 2000) { // If the value is greater than 2V then switch the LED on\n          led = 0;\n        }\n        else {\n          led = 1;\n        }\n        wait(0.2); // 200 ms\n    }\n}\n')),Object(i.b)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),Object(i.b)("p",null,"When you download the compiled binary to the WIZwiki board and push the\nreset button, check the serial port message as rotating the dial of\npotentiometer. You can see the measured value (mV unit) periodically."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/5_test_result.jpg",alt:null}))),Object(i.b)("p",null,"If user rotates the dial clock-wise, the measured value will increase.\nIf the measured value is above than 2000mV, then the LED1 of WIZwiki\nboard turns on. If the measured value is less than 2000mV, then the LED1\nturns off."),Object(i.b)("p",null,"The WIZwiki board can read analog values from external circuit and\nconvert them to digital values."),Object(i.b)("h2",{id:"learning-resources"},"Learning Resources"),Object(i.b)("p",null,"\ud83c\udf0e",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Potentiometer"}),"Potentiometer, from wikipedia")),Object(i.b)("p",null,"\ud83c\udf0e",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Analog-to-digital_converter"}),"Analog-to-digital converter, from wikipedia")),Object(i.b)("h2",{id:"related-links"},"Related Links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"tutorial_eng"}),"Starter Kit Tutorial"))))}u.isMDXComponent=!0},578:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return r?a.a.createElement(m,l(l({ref:t},s),{},{components:r})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);