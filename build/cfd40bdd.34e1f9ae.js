(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{418:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(516)),c={id:"cookie",title:"Cookie",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/Open-Source-Hardware/cookie",id:"Product/Open-Source-Hardware/cookie",isDocsHomePage:!1,title:"Cookie",description:"Overview",source:"@site/docs/Product/Open-Source-Hardware/cookie.md",permalink:"/docs/Product/Open-Source-Hardware/cookie",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/cookie.md"},i=[{value:"Overview",id:"overview",children:[]},{value:"Cookie board",id:"cookie-board",children:[]},{value:"CooCox",id:"coocox",children:[{value:"Installation",id:"installation",children:[]},{value:"CooCox Open IDE",id:"coocox-open-ide",children:[]},{value:"Tool-chains setting in CoIDE",id:"tool-chains-setting-in-coide",children:[]},{value:"CoX-Peripheral Interface",id:"cox-peripheral-interface",children:[]}]},{value:"Tutorial",id:"tutorial",children:[{value:"Before Tutorial",id:"before-tutorial",children:[]},{value:"Tutorial Using CoIDE",id:"tutorial-using-coide",children:[]},{value:"Tutorial Using W5500",id:"tutorial-using-w5500",children:[]},{value:"Change code before compile",id:"change-code-before-compile",children:[]},{value:"Example",id:"example",children:[]}]},{value:"IP Configuration",id:"ip-configuration",children:[]},{value:"TCP Server Loopback",id:"tcp-server-loopback",children:[]},{value:"UDP Loopback",id:"udp-loopback",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Cookie is Open-Source Hardware platform and is provided\nfrom CooCox. Cookie is Hardware compatible Arduino Board and based on\nCortex M core instead of AVR. So, it can use with Arduino Shield as\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"ioshield_a"}),"ioShield-A"),".\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"ioshield_a"}),"ioShield-A")," allows\nCookie to connect to the Internet."),Object(r.b)("p",null,"Cookie is developed on IDE as CoIDE provided from CooCox, and For\nreducing host dependency code provides with CoX peripheral interface\nlibrary."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"cookie-board"},"Cookie board"),Object(r.b)("hr",null),Object(r.b)("p",null,"Cookie is an open-source Arduino\u2122 form-factor compatible\nARM prototyping platform based on 32-bit ARM Cortex M0/3/4 MCUs plus\nhardware and software building blocks."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/cookie_numicro_v1_s.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/Cookie.html"}),"Learn more")),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/Cookie/Cookie_Nuvoton.html"}),"Cookie Numirco Edition")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"coocox"},"CooCox"),Object(r.b)("p",null,"Visit to the Web site"),Object(r.b)("p",null,"URL :\ud83c\udf0e",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/Index.html"}),"http://www.coocox.org/Index.html"),"]","(",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/Index.html"}),"http://www.coocox.org/Index.html"),"."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("hr",null),Object(r.b)("p",null,"CoIDE just provides development environment without\ntool-chains. So you need to install tool-chains at first. We use ARM gcc\n4.7 for tool-chains."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"ARM GCC 4.7 Features:")),Object(r.b)("p",null,"-"," All GCC 4.7 features, plus latest mainline features - Additional code\nsize optimizations - Newlib-nano: newlib branch optimized for code size"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://launchpad.net/gcc-arm-embedded/+download"}),"Download the latest\narm-gcc-embbed")),Object(r.b)("h3",{id:"coocox-open-ide"},"CooCox Open IDE"),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"CooCox")," provides integration development environment\ncalled ",Object(r.b)("strong",{parentName:"p"},"CoIDE")," for ARM Cortex M series microcontrollers. ",Object(r.b)("strong",{parentName:"p"},"CoIDE"),"\nsupports ARM gcc based development environment of ",Object(r.b)("strong",{parentName:"p"},"eclipse"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"System requirements:")),Object(r.b)("p",null,"-"," Windows XP SP3 / Windows Vista / Windows 7"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Features:")),Object(r.b)("p",null,"-"," Free to use - Full functional IDE - Component-oriented development\nplatform - Internet-based, efficient integration of network resources -\nIntegrates CoOS - Peripheral registers"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/CooCox_CoIDE.htm"}),"CoIDE Download and learn\nmore")," "),Object(r.b)("h3",{id:"tool-chains-setting-in-coide"},"Tool-chains setting in CoIDE"),Object(r.b)("hr",null),Object(r.b)("p",null,"Before you use CoIDE to start your project, you need to\nconfig the GCC compiler at first."),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/CoIDE/Compiler_Settings.html"}),"Compiler Setting in\nCoIDE")),Object(r.b)("h3",{id:"cox-peripheral-interface"},"CoX-Peripheral Interface"),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Cox-Peripheral interface")," is Common Wrapper Interface to\nport peripheral easily which is different in each vendors. If SPI is\ndesigned by Cox-Peripheral Interface starting as x(e.g. xGPIOModeSet),\nyou can operate by changing just SPI interface PIN setting in each MCUs\nor EVB-boards."),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/COX.html"}),"Learn more")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"tutorial"},"Tutorial"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"before-tutorial"},"Before Tutorial"),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/0.jpg",alt:null}))),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download program file(CoIDE) and USB drive(ColinkEx) from ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.coocox.org/CoCenter.html"}),"http://www.coocox.org/CoCenter.htm"),".")),Object(r.b)("h3",{id:"tutorial-using-coide"},"Tutorial Using CoIDE"),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click the CoIDE icon"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/1.jpg",alt:null})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'The welcome page is a convenient entry for \u201cBrowse in Repository\u201d,\n\u201cCreate a New Project\u201d, \u201cOpen a Project\u201d, refer to \u201cUser Guide\u201d and go\nto \u201cForum"'))),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/2.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A wizard window will pop up, enter a name for the project (my project\nname: LoopbackTest)),You can also modify the Project Path.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/4.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Choose a model. For example, select ''Chip Model', then click \u201cNext\u201d."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/5_chip.jpg",alt:null})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Select a chip. For example, select "M0516LBN"'),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/6_chip.jpg",alt:null})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Click "Finish". CoIDE automatically generates LoopbackTest.coproj\nfile and one configuration: "LoopbackTest".')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click the Repository Button "),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/7.jpg",alt:null})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Check a component; for example, select 'GPIO",Object(r.b)("inlineCode",{parentName:"p"},"SPI"),"UART",Object(r.b)("inlineCode",{parentName:"p"},"CoX.cookie.M051.config"),"C library''Retarget printf'. CoIDE will automatically check the components, which are depended by the checked component. "))),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/7_2.jpg",alt:null}))),Object(r.b)("h3",{id:"tutorial-using-w5500"},"Tutorial Using W5500"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"change-code-before-compile"},"Change code before compile"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Select the file "stdio.h/printf.c". You want to use "printf", you have\nto add as below.')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:'title="printf.c"',title:'"printf.c"'}),"void PrintChar(char c)\n{\n    /* Send a char like: \n       while(Transfer not completed);\n       Transmit a char;\n    */  \n   xUARTCharPut(xUART0_BASE,c); // additional items\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Select the define variable in "ethernet/w5500". You\nshould select interface mode and kind of chip. ')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:'title="wizfonfig.h"',title:'"wizfonfig.h"'}),'#define _WIZCHIP_                      5500   // 5100, 5200, 5500\n\n#if (_WIZCHIP_ == 5500)\n  #define _WIZCHIP_ID_                 "W5500\\0"\n//   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_FDM_\n  #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_VDM_\n  #include "W5500/w5500.h"\n\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Select the define variable in "common/common.h". You can modify the Log Level. ')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"//------------------------------ Etc ------------------------------\n#define WIZ_LOG_LEVEL   2       // 0: No print,  1: Error,  2: Error+Log,  3: Error+Log+Debug\n")),Object(r.b)("p",null,"**",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/img/osh/cookie/w5500_cookie_v100.zip"}),"Download:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enter the menu (view ",">"," Configuration)")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/7_3.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can select the Hardware Adapter type(Colink EX)")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/7_4.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the project view, select the parent directory in which you want to\ncreate the Group (If you do not select the parent directory, the default\nis the root directory of the project), select Add Group and Add file in\ncontext menu")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/8.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You should make up same file path")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/9.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select the complie button. If necessary, you can select Rebuild to\nrecompile your project or select Clean to clean-up the project that has\nbeen compiled.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/9_1.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"compile result"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/10.jpg",alt:null})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Click the "Download" button to download code to flash'))),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/10_1.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"download result"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/11.jpg",alt:null})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can confirm the serial value through terminal program"))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(o.a)({parentName:"strong"},{href:"#tcp-server-loopback"}),"Example for cookie board"))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"ip-configuration"},"IP Configuration"),Object(r.b)("hr",null),Object(r.b)("p",null,"If IP address of your PC and WIZ550io are different, you\nneed to configure your PC network setting."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click on the Start Menu and open the Control Panel."),Object(r.b)("li",{parentName:"ul"},"Enter to'Network and Internet' and enter to Network and Sharing Center."),Object(r.b)("li",{parentName:"ul"},"Click'Change adapter settings at left side.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/sharing_center.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Double click Local Area Connection icon and click Properties and\nenter IPv4 Properties.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/sharing_center2.png",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Then, set your IP address and subnet mask as same as WIZ550io's IP\naddress and subnet mask. "),Object(r.b)("li",{parentName:"ul"},"Or, you can add IP address by setting\nAdvanced. Click Advanced.. button.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/sharing_center3.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click Add... button and add IP address and subnet mask.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/sharing_center4.png",alt:null}))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"tcp-server-loopback"},"TCP Server Loopback"),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Download : ",Object(r.b)("a",Object(o.a)({parentName:"strong"},{href:"/img/osh/cookie/w5500_cookie_v100.zip"}),"Project download"),",",Object(r.b)("a",Object(o.a)({parentName:"strong"},{href:"http://www.hw-group.com/products/hercules/index_en.html"}),"Hercules test program")," ")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select TCP Client tab in Hercules and type Server IP address\ndisplaying in Tera Term at Module IP and port number box.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/loopback2.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click Connect. "),Object(r.b)("li",{parentName:"ul"},"If connection is done successfully, you can see\nmessage as follows.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/loopback4.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type data you want to send and click Send button. If you want to send\nstring data, uncheck HEX checkbox. "),Object(r.b)("li",{parentName:"ul"},"After send data, you can see sent\ndata and received data.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/loopback5.jpg",alt:null}))),Object(r.b)("h2",{id:"udp-loopback"},"UDP Loopback"),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select UDP tab in Hercules and type IP address and port number displaying in Tera Term at Module IP and Port box in Hercules. And then, type port number you want in Local port box and click Listen button. Now, UDP socket opened.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/loopback7.jpg",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type data you want to send and click Send button. If you want to send string data, uncheck HEX checkbox. "),Object(r.b)("li",{parentName:"ul"},"After send data, you can see sent data and received data.")),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"/img/osh/cookie/loopback8.jpg",alt:null}))))}p.isMDXComponent=!0},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),s=o,j=u["".concat(c,".").concat(s)]||u[s]||d[s]||r;return n?a.a.createElement(j,l(l({ref:t},b),{},{components:n})):a.a.createElement(j,l({ref:t},b))}));function j(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var b=2;b<r;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);