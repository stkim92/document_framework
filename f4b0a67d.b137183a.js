(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{548:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(6),a=(n(0),n(578)),l={id:"Tutorial",title:"Tutorial",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/Open-Source-Hardware/Tutorial",id:"Product/Open-Source-Hardware/Tutorial",isDocsHomePage:!1,title:"Tutorial",description:"-----",source:"@site/docs\\Product\\Open-Source-Hardware\\Tutorial.md",permalink:"/Product/Open-Source-Hardware/Tutorial",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/Tutorial.md",sidebar:"docs",previous:{title:"Getting Started for Arduino",permalink:"/Product/Open-Source-Hardware/getting_started_arduino_jp"},next:{title:"IP Configuration",permalink:"/Product/Open-Source-Hardware/IP_Configuration"}},i=[{value:"Before Tutorial",id:"before-tutorial",children:[]},{value:"Tutorial Using CoIDE",id:"tutorial-using-coide",children:[]},{value:"Tutorial Using W5500",id:"tutorial-using-w5500",children:[]},{value:"Change code before compile",id:"change-code-before-compile",children:[]},{value:"Download :",id:"download-",children:[]}],u={rightToc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("h3",{id:"before-tutorial"},"Before Tutorial"),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Download program file(CoIDE) and USB drive(ColinkEx) from ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.coocox.org/CoCenter.html"}),"http://www.coocox.org/CoCenter.htm"),".")),Object(a.b)("h3",{id:"tutorial-using-coide"},"Tutorial Using CoIDE"),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click the CoIDE icon")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'The welcome page is a convenient entry for \u201cBrowse in Repository\u201d,\n\u201cCreate a New Project\u201d, \u201cOpen a Project\u201d, refer to \u201cUser Guide\u201d and go\nto \u201cForum"')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A wizard window will pop up, enter a name for the project (my project\nname: LoopbackTest)),You can also modify the Project Path.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Choose a model. For example, select ''Chip Model', then click \u201cNext\u201d.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Select a chip. For example, select "M0516LBN"')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Click "Finish". CoIDE automatically generates LoopbackTest.coproj\nfile and one configuration: "LoopbackTest".')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Click the Repository Button"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Check a component; for example, select\n'GPIO",Object(a.b)("inlineCode",{parentName:"li"},"SPI"),"UART",Object(a.b)("inlineCode",{parentName:"li"},"CoX.cookie.M051.config"),"C library''Retarget printf'. CoIDE\nwill automatically check the components, which are depended by the\nchecked component.")),Object(a.b)("h3",{id:"tutorial-using-w5500"},"Tutorial Using W5500"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"change-code-before-compile"},"Change code before compile"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Select the file "stdio.h/printf.c". You want to use "printf", you have\nto add as below.')),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"\nvoid PrintChar(char c)\n{\n    /* Send a char like: \n       while(Transfer not completed);\n       Transmit a char;\n    */  \n   xUARTCharPut(xUART0_BASE,c); // additional items\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Select the define variable in "ethernet/w5500". You\nshould select interface mode and kind of chip. '),Object(a.b)("blockquote",{parentName:"li"}),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'#define _WIZCHIP_                      5500   // 5100, 5200, 5500\n\n#if (_WIZCHIP_ == 5500)\n  #define _WIZCHIP_ID_                 "W5500\\0"\n//   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_FDM_\n   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_VDM_\n   #include "W5500/w5500.h"\n   \\<markdown\\> - Select the define variable in "common/common.h". You can\n')),Object(a.b)("p",{parentName:"li"},"modify the Log Level. "))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-common.h"}),"//------------------------------ Etc ------------------------------\n#define WIZ_LOG_LEVEL   2       // 0: No print,  1: Error,  2: Error+Log,  3: Error+Log+Debug\n")),Object(a.b)("h2",{id:"download-"},"Download :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Enter the menu (view ",">"," Configuration)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can select the Hardware Adapter type(Colink EX)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In the project view, select the parent directory in which you want to\ncreate the Group (If you do not select the parent directory, the default\nis the root directory of the project), select Add Group and Add file in\ncontext menu")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You should make up same file path")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select the complie button. If necessary, you can select Rebuild to\nrecompile your project or select Clean to clean-up the project that has\nbeen compiled.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"compile result")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Click the "Download" button to download code to flash')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"download result")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can confirm the serial value through terminal program")))}b.isMDXComponent=!0},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,O=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(O,c(c({ref:t},u),{},{components:n})):o.a.createElement(O,c({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);