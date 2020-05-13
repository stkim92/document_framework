(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{436:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),i=(n(0),n(623)),o={id:"exercise_4_pwm_kor",title:"Exercise 4. PWM(Kor)",date:new Date("2020-04-08T00:00:00.000Z")},c={id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_kor",title:"Exercise 4. PWM(Kor)",description:"# \ud29c\ud1a0\ub9ac\uc5bc \uc608\uc81c4. PWM\uc744 \uc774\uc6a9\ud574 \ubd80\uc800 \uc6b8\ub9ac\uae30\r",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500-Mbed-Starter-Kit\\Exercise_4._PWM(Kor).md",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_4_pwm_kor",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/Exercise_4._PWM(Kor).md",sidebar:"someSidebar",previous:{title:"Exercise 3. Switch(Kor)",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_3_switch_kor"},next:{title:"Exercise 5. Variable resistor(Kor)",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500-Mbed-Starter-Kit/exercise_5_variable_resistor_kor"}},l=[{value:"\uac1c\uc694",id:"\uac1c\uc694",children:[]},{value:"\uc900\ube44\ubb3c",id:"\uc900\ube44\ubb3c",children:[]},{value:"\ud558\ub4dc\uc6e8\uc5b4",id:"\ud558\ub4dc\uc6e8\uc5b4",children:[{value:"\ud68c\ub85c\ub3c4",id:"\ud68c\ub85c\ub3c4",children:[]},{value:"\uc5f0\uacb0\ub3c4",id:"\uc5f0\uacb0\ub3c4",children:[]}]},{value:"\uc18c\ud504\ud2b8\uc6e8\uc5b4",id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4",children:[{value:"Example Code",id:"example-code",children:[]},{value:"\uc2e4\ud589 \ubc29\ubc95 \ubc0f \uacb0\uacfc",id:"\uc2e4\ud589-\ubc29\ubc95-\ubc0f-\uacb0\uacfc",children:[]}]},{value:"\ud559\uc2b5 \uc790\ub8cc",id:"\ud559\uc2b5-\uc790\ub8cc",children:[]},{value:"\uad00\ub828 \ub9c1\ud06c",id:"\uad00\ub828-\ub9c1\ud06c",children:[]},{value:"\ub2e4\uc74c \uc608\uc81c",id:"\ub2e4\uc74c-\uc608\uc81c",children:[]}],b={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\ud29c\ud1a0\ub9ac\uc5bc-\uc608\uc81c4-pwm\uc744-\uc774\uc6a9\ud574-\ubd80\uc800-\uc6b8\ub9ac\uae30"},"\ud29c\ud1a0\ub9ac\uc5bc \uc608\uc81c4. PWM\uc744 \uc774\uc6a9\ud574 \ubd80\uc800 \uc6b8\ub9ac\uae30"),Object(i.b)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),Object(i.b)("p",null,"\uc774 \uc608\uc81c\ub294 PWM\uc744 \uc774\uc6a9\ud574 buzzer\ub97c \uc6b8\ub9ac\ub294 \uc2e4\uc2b5\uc5d0 \uad00\ud55c \uac83\uc774\ub2e4. PWM\uc740 Pulse Width Modulation\uc758\n\uc57d\uc790\uc774\ub2e4. \ud2b9\uc815\ud55c \ud384\uc2a4\uc758 \ud3ed\uc744 \uac00\uc9c4 \ub514\uc9c0\ud138 \ud30c\ud615\uc744 \ub9cc\ub4dc\ub294 \ub370 \uc0ac\uc6a9\uc774\ub41c\ub2e4. WIZwiki \ubcf4\ub4dc\uc758 W7500 \uce69 \ub0b4\ubd80\uc758\nPWM \ubaa8\ub4c8\uc744 \uc124\uc815\ud558\uba74 \ub2e4\uc591\ud55c \ud30c\ud615\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub2e4. PWM\uc744 \uc774\uc6a9\ud574 \ub192\ub0ae\uc774\uac00 \ub2e4\ub978 \uc18c\ub9ac \ucd9c\ub825, LED \ubc1d\uae30 \uc870\uc808, \ubaa8\ud130 \uad6c\ub3d9\n\ub4f1\uc744 \ud560 \uc218 \uc788\ub2e4."),Object(i.b)("h2",{id:"\uc900\ube44\ubb3c"},"\uc900\ube44\ubb3c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WIZwiki-W7500 \ubcf4\ub4dc"),Object(i.b)("li",{parentName:"ul"},"USB \ucf00\uc774\ube14"),Object(i.b)("li",{parentName:"ul"},"Breadboard (\ube75\ud310)"),Object(i.b)("li",{parentName:"ul"},"Jumper wire"),Object(i.b)("li",{parentName:"ul"},"Magnetic Buzzer")),Object(i.b)("h2",{id:"\ud558\ub4dc\uc6e8\uc5b4"},"\ud558\ub4dc\uc6e8\uc5b4"),Object(i.b)("h3",{id:"\ud68c\ub85c\ub3c4"},"\ud68c\ub85c\ub3c4"),Object(i.b)("p",null,"\uc804\uccb4 \ud68c\ub85c\ub3c4\ub294 \uc544\ub798\uc640 \uac19\ub2e4."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/4_pwm_buzzer_schem.png",alt:null}))),Object(i.b)("h3",{id:"\uc5f0\uacb0\ub3c4"},"\uc5f0\uacb0\ub3c4"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/document_framework/img/products/wizwiki_mbed_kit/kit_en/4_board_all.jpg",alt:null}))),Object(i.b)("h2",{id:"\uc18c\ud504\ud2b8\uc6e8\uc5b4"},"\uc18c\ud504\ud2b8\uc6e8\uc5b4"),Object(i.b)("h3",{id:"example-code"},"Example Code"),Object(i.b)("p",null,"\uc608\uc81c \ucf54\ub4dc\uc774\ub2e4. mbed \ud658\uacbd\uc5d0\uc11c main.c\uc5d0 \uc544\ub798 code\ub97c \ubcf5\uc0ac\ud574 \ubd99\uc5ec\ub123\uae30 \ud55c \ud6c4 \ucef4\ud30c\uc77c\ud55c\ub2e4."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'#include "mbed.h"\n\n#define VOLUME 0.02\n#define BPM 100.0\n\nPwmOut pwm_pin(D3);\n\n// Plays a sound with the defined frequency, duration, and volume\nvoid playNote(float frequency, float duration, float volume) {\n    pwm_pin.period(1.0/frequency);\n    pwm_pin = volume/2.0;\n    wait(duration);\n    pwm_pin = 0.0;\n}\n\nint main()\n{\n    float beat_duration;\n\n    // Calculate duration of a quarter note from bpm\n    beat_duration = 60.0 / BPM;\n\n    // Loop forever\n    while(1) {\n\nplayNote(261.626, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(391.995, (0.75 * beat_duration), VOLUME);\n\nplayNote(261.626, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(391.995, (0.75 * beat_duration), VOLUME);\n                        \nplayNote(440.000, (0.75 * beat_duration), VOLUME);\nplayNote(440.000, (0.75 * beat_duration), VOLUME);\nplayNote(440.000, (0.75 * beat_duration), VOLUME);\nplayNote(391.995, ((2 * beat_duration) - 0.1), VOLUME);\nwait(0.1);\n\nplayNote(349.228, (0.75 * beat_duration), VOLUME);\nplayNote(349.228, (0.75 * beat_duration), VOLUME);\nplayNote(349.228, (0.75 * beat_duration), VOLUME);\n\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\nplayNote(329.628, (0.75 * beat_duration), VOLUME);\n\nplayNote(293.665, (0.75 * beat_duration), VOLUME);\nplayNote(293.665, (0.75 * beat_duration), VOLUME);\nplayNote(293.665, (0.75 * beat_duration), VOLUME);\n\n//playNote(261.626, ((2 * beat_duration) - 0.1), VOLUME);\nplayNote(261.626, ((3 * beat_duration) - 0.1), VOLUME);\nwait(0.1);\n\n    }\n}\n')),Object(i.b)("h3",{id:"\uc2e4\ud589-\ubc29\ubc95-\ubc0f-\uacb0\uacfc"},"\uc2e4\ud589 \ubc29\ubc95 \ubc0f \uacb0\uacfc"),Object(i.b)("p",null,"\ucf54\ub4dc\ub97c \uc2e4\ud589\uc2dc\ud0a4\uba74, PWM \ub514\uc9c0\ud138 \uc2e0\ud638\uac00 \ubd80\uc800\ub97c \uc6b8\ub824 \uac04\ub2e8\ud55c \uc74c\uc545\uc774 \uc5f0\uc8fc\ub41c\ub2e4."),Object(i.b)("h2",{id:"\ud559\uc2b5-\uc790\ub8cc"},"\ud559\uc2b5 \uc790\ub8cc"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"PWM")),Object(i.b)("p",null,"\ud83c\udf0e",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Pulse-width_modulation"}),"https://en.wikipedia.org/wiki/Pulse-width_modulation")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Piano key frequencies")),Object(i.b)("p",null,"\ud83c\udf0e",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Piano_key_frequencies"}),"https://en.wikipedia.org/wiki/Piano_key_frequencies")),Object(i.b)("h2",{id:"\uad00\ub828-\ub9c1\ud06c"},"\uad00\ub828 \ub9c1\ud06c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"Tutorial(Kor).md"}),"\uc2a4\ud0c0\ud130 \ud0b7 \ud29c\ud1a0\ub9ac\uc5bc"))),Object(i.b)("h2",{id:"\ub2e4\uc74c-\uc608\uc81c"},"\ub2e4\uc74c \uc608\uc81c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"Exercise_5._Variable_resistor(Kor).md"}),"\uc608\uc81c5. \uac00\ubcc0\uc800\ud56d\uae30\ub97c \uc774\uc6a9\ud574 \uc544\ub0a0\ub85c\uadf8 \uac12 \uc77d\uc5b4\ub0b4\uae30"))))}u.isMDXComponent=!0},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,O=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?a.a.createElement(O,c({ref:t},b,{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);