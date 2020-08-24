(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{468:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),i=n(6),a=(n(0),n(581)),o={id:"exercise_4_pwm_eng",title:"Exercise 4. PWM(Eng)",date:new Date("2020-04-08T00:00:00.000Z")},l={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_eng",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_eng",isDocsHomePage:!1,title:"Exercise 4. PWM(Eng)",description:"Ringing a buzzer with PWM",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500-Mbed-Starter-Kit\\Exercise_4._PWM(Eng).md",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_eng",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_4._PWM(Eng).md",sidebar:"docs",previous:{title:"Exercise 3. Switch(Eng)",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_eng"},next:{title:"Exercise 5. Variable resistor(Eng)",permalink:"/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_eng"}},c=[{value:"Outline",id:"outline",children:[]},{value:"What you need",id:"what-you-need",children:[]},{value:"Hardware",id:"hardware",children:[{value:"The Circuit",id:"the-circuit",children:[]},{value:"Connections",id:"connections",children:[]}]},{value:"Software",id:"software",children:[{value:"Example Code",id:"example-code",children:[]},{value:"How to run and test result",id:"how-to-run-and-test-result",children:[]}]},{value:"Learning Resources",id:"learning-resources",children:[]},{value:"Related Links",id:"related-links",children:[]}],u={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"ringing-a-buzzer-with-pwm"},"Ringing a buzzer with PWM"),Object(a.b)("h2",{id:"outline"},"Outline"),Object(a.b)("p",null,"This is an exercise to ringing a buzzer with PWM. The PWM stands for\nPulse Width Modulation. The PWM is used for making digital waveform\nwhich has specific pulse width. The PWM module of W7500 chip embdded in\nWIZwiki board can makes various digital waveform. Using this PWM, user\ncan make high or low tone sound, control LED brightness and control\nmotor speeds."),Object(a.b)("h2",{id:"what-you-need"},"What you need"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WIZwiki-W7500"),Object(a.b)("li",{parentName:"ul"},"USB cable"),Object(a.b)("li",{parentName:"ul"},"Breadboard"),Object(a.b)("li",{parentName:"ul"},"Jumper wire"),Object(a.b)("li",{parentName:"ul"},"Magnetic Buzzer")),Object(a.b)("h2",{id:"hardware"},"Hardware"),Object(a.b)("h3",{id:"the-circuit"},"The Circuit"),Object(a.b)("p",null,"This is the circuit for this example.\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/4_pwm_buzzer_schem.png",alt:null}))),Object(a.b)("h3",{id:"connections"},"Connections"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/img/products/wizwiki_mbed_kit/kit_en/4_board_all.jpg",alt:null}))),Object(a.b)("h2",{id:"software"},"Software"),Object(a.b)("h3",{id:"example-code"},"Example Code"),Object(a.b)("p",null,"Below are the example codes. Delete the default code and copy/paste the\ncodes below and compile."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'#include "mbed.h"\n\n#define VOLUME 0.02\n#define BPM 100.0\n\nPwmOut pwm_pin(D3);\n\n// Plays a sound with the defined frequency, duration, and volume\nvoid playNote(float frequency, float duration, float volume) {\n    pwm_pin.period(1.0/frequency);\n    pwm_pin = volume/2.0;\n    wait(duration);\n    pwm_pin = 0.0;\n}\n\nint main()\n{\n    float beat_duration;\n\n    // Calculate duration of a quarter note from bpm\n    beat_duration = 60.0 / BPM;\n\n    // Loop forever\n    while(1) {\n\nplayNote(261.626, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(391.995, (0.75 * beat_duration), VOLUME);\n\nplayNote(261.626, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(391.995, (0.75 * beat_duration), VOLUME);\n                        \nplayNote(440.000, (0.75 * beat_duration), VOLUME);\nplayNote(440.000, (0.75 * beat_duration), VOLUME);\nplayNote(440.000, (0.75 * beat_duration), VOLUME);\nplayNote(391.995, ((2 * beat_duration) - 0.1), VOLUME);\nwait(0.1);\n\nplayNote(349.228, (0.75 * beat_duration), VOLUME);\nplayNote(349.228, (0.75 * beat_duration), VOLUME);\nplayNote(349.228, (0.75 * beat_duration), VOLUME);\n\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\n\nplayNote(293.665, (0.75 * beat_duration), VOLUME);\nplayNote(293.665, (0.75 * beat_duration), VOLUME);\nplayNote(293.665, (0.75 * beat_duration), VOLUME);\n\n//playNote(261.626, ((2 * beat_duration) - 0.1), VOLUME);\nplayNote(261.626, ((3 * beat_duration) - 0.1), VOLUME);\nwait(0.1);\n\n    }\n}\n')),Object(a.b)("h3",{id:"how-to-run-and-test-result"},"How to run and test result"),Object(a.b)("p",null,"When you download the compiled binary to the WIZwiki board and push the\nreset button, then the PWM digital signal drives a buzzer and plays a\nsimple music."),Object(a.b)("h2",{id:"learning-resources"},"Learning Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"PWM")),Object(a.b)("p",null,"\ud83c\udf0e",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Pulse-width_modulation"}),"https://en.wikipedia.org/wiki/Pulse-width_modulation")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Piano key frequencies")),Object(a.b)("p",null,"\ud83c\udf0e",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Piano_key_frequencies"}),"https://en.wikipedia.org/wiki/Piano_key_frequencies")),Object(a.b)("h2",{id:"related-links"},"Related Links"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"tutorial_eng"}),"Starter Kit Tutorial"))))}d.isMDXComponent=!0},581:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),d=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=d(n),s=r,m=b["".concat(o,".").concat(s)]||b[s]||p[s]||a;return n?i.a.createElement(m,l(l({ref:t},u),{},{components:n})):i.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);