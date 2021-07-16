(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[47341],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,s=m["".concat(u,".").concat(f)]||m[f]||d[f]||l;return n?r.createElement(s,a(a({ref:t},p),{},{components:n})):r.createElement(s,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33868:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(22122),o=n(19756),l=(n(67294),n(3905)),a=["components"],i={id:"Tutorial",title:"Tutorial",date:new Date("2020-04-03T00:00:00.000Z")},u=void 0,c={unversionedId:"Product/Open-Source-Hardware/Tutorial",id:"Product/Open-Source-Hardware/Tutorial",isDocsHomePage:!1,title:"Tutorial",description:"-----",source:"@site/docs/Product/Open-Source-Hardware/Tutorial.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/Tutorial",permalink:"/Product/Open-Source-Hardware/Tutorial",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/Tutorial.md",version:"current",frontMatter:{id:"Tutorial",title:"Tutorial",date:"2020-04-03T00:00:00.000Z"}},p=[{value:"Before Tutorial",id:"before-tutorial",children:[]},{value:"Tutorial Using CoIDE",id:"tutorial-using-coide",children:[]},{value:"Tutorial Using W5500",id:"tutorial-using-w5500",children:[]},{value:"Change code before compile",id:"change-code-before-compile",children:[]},{value:"Download :",id:"download-",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"before-tutorial"},"Before Tutorial"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download program file(CoIDE) and USB drive(ColinkEx) from ",(0,l.kt)("a",{parentName:"li",href:"http://www.coocox.org/CoCenter.html"},"http://www.coocox.org/CoCenter.htm"),".")),(0,l.kt)("h3",{id:"tutorial-using-coide"},"Tutorial Using CoIDE"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click the CoIDE icon")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'The welcome page is a convenient entry for \u201cBrowse in Repository\u201d,\n\u201cCreate a New Project\u201d, \u201cOpen a Project\u201d, refer to \u201cUser Guide\u201d and go\nto \u201cForum"')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A wizard window will pop up, enter a name for the project (my project\nname: LoopbackTest)),You can also modify the Project Path.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Choose a model. For example, select ''Chip Model', then click \u201cNext\u201d.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Select a chip. For example, select "M0516LBN"')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Click "Finish". CoIDE automatically generates LoopbackTest.coproj\nfile and one configuration: "LoopbackTest".')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Click the Repository Button"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check a component; for example, select\n'GPIO",(0,l.kt)("inlineCode",{parentName:"li"},"SPI"),"UART",(0,l.kt)("inlineCode",{parentName:"li"},"CoX.cookie.M051.config"),"C library''Retarget printf'. CoIDE\nwill automatically check the components, which are depended by the\nchecked component.")),(0,l.kt)("h3",{id:"tutorial-using-w5500"},"Tutorial Using W5500"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"change-code-before-compile"},"Change code before compile"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Select the file "stdio.h/printf.c". You want to use "printf", you have\nto add as below.')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\nvoid PrintChar(char c)\n{\n    /* Send a char like: \n       while(Transfer not completed);\n       Transmit a char;\n    */  \n   xUARTCharPut(xUART0_BASE,c); // additional items\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Select the define variable in "ethernet/w5500". You\nshould select interface mode and kind of chip. '),(0,l.kt)("blockquote",{parentName:"li"}),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'#define _WIZCHIP_                      5500   // 5100, 5200, 5500\n\n#if (_WIZCHIP_ == 5500)\n  #define _WIZCHIP_ID_                 "W5500\\0"\n//   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_FDM_\n   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_VDM_\n   #include "W5500/w5500.h"\n   \\<markdown\\> - Select the define variable in "common/common.h". You can\n')),(0,l.kt)("p",{parentName:"li"},"modify the Log Level. "))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-common.h"},"//------------------------------ Etc ------------------------------\n#define WIZ_LOG_LEVEL   2       // 0: No print,  1: Error,  2: Error+Log,  3: Error+Log+Debug\n")),(0,l.kt)("h2",{id:"download-"},"Download :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Enter the menu (view ",">"," Configuration)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can select the Hardware Adapter type(Colink EX)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In the project view, select the parent directory in which you want to\ncreate the Group (If you do not select the parent directory, the default\nis the root directory of the project), select Add Group and Add file in\ncontext menu")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You should make up same file path")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select the complie button. If necessary, you can select Rebuild to\nrecompile your project or select Clean to clean-up the project that has\nbeen compiled.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"compile result")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Click the "Download" button to download code to flash')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"download result")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can confirm the serial value through terminal program")))}m.isMDXComponent=!0}}]);