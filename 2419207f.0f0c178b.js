(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),a=(n(0),n(578)),c={id:"open_source_hardware_all_pages",title:"All Pages (Open Source Hardware)",date:new Date("2020-04-03T00:00:00.000Z")},l={unversionedId:"Product/Open-Source-Hardware/open_source_hardware_all_pages",id:"Product/Open-Source-Hardware/open_source_hardware_all_pages",isDocsHomePage:!1,title:"All Pages (Open Source Hardware)",description:"Overview",source:"@site/docs\\Product\\Open-Source-Hardware\\open_source_hardware_all_pages.md",permalink:"/Products/Product/Open-Source-Hardware/open_source_hardware_all_pages",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/open_source_hardware_all_pages.md",sidebar:"docs",previous:{title:"CooCox",permalink:"/Products/Product/Open-Source-Hardware/open_source_hardware_coocox"},next:{title:"Design Guide",permalink:"/Products/Design-Guide/design_guide"}},i=[{value:"Cookie board",id:"cookie-board",children:[]},{value:"Installation",id:"installation",children:[]},{value:"CooCox Open IDE",id:"coocox-open-ide",children:[]},{value:"Tool-chains setting in CoIDE",id:"tool-chains-setting-in-coide",children:[]},{value:"CoX-Peripheral Interface",id:"cox-peripheral-interface",children:[]},{value:"Tutorial",id:"tutorial",children:[{value:"Before Tutorial",id:"before-tutorial",children:[]},{value:"Tutorial Using CoIDE",id:"tutorial-using-coide",children:[]},{value:"Tutorial Using W5500",id:"tutorial-using-w5500",children:[]},{value:"Change code before compile",id:"change-code-before-compile",children:[]}]},{value:"Download :",id:"download-",children:[]},{value:"Example :",id:"example-",children:[]},{value:"IP Configuration",id:"ip-configuration",children:[]},{value:"IP configuration in PC",id:"ip-configuration-in-pc",children:[]},{value:"TCP Server Loopback",id:"tcp-server-loopback",children:[{value:'Download : <a href="/img/osh/cookie/w5500_cookie_v100.zip" target="_blank">Project download</a>,Hercules test program',id:"download--project-downloadhercules-test-program",children:[]}]},{value:"UDP Loopback",id:"udp-loopback",children:[]}],b={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"overview"},"Overview"),Object(a.b)("p",null,"Cookie is Open-Source Hardware platform and is provided\nfrom CooCox. Cookie is Hardware compatible Arduino Board and based on\nCortex M core instead of AVR. So, it can use with Arduino Shield as\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/Products/Product/Open-Source-Hardware/ioshield_a"}),"ioShield-A"),".\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/Products/Product/Open-Source-Hardware/ioshield_a"}),"ioShield-A")," allows\nCookie to connect to the Internet."),Object(a.b)("p",null,"Cookie is developed on IDE as CoIDE provided from CooCox, and For\nreducing host dependency code provides with CoX peripheral interface\nlibrary."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"cookie-board"},"Cookie board"),Object(a.b)("hr",null),Object(a.b)("p",null,"Cookie is an open-source Arduino\u2122 form-factor compatible\nARM prototyping platform based on 32-bit ARM Cortex M0/3/4 MCUs plus\nhardware and software building blocks."),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/Cookie.html"}),"Learn more")),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/Cookie/Cookie_Nuvoton.html"}),"Cookie Numirco\nEdition")),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/Products/Product/Open-Source-Hardware/open_source_hardware_coocox"}),"CooCox")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/Products/Product/Open-Source-Hardware/Tutorial"}),"Tutorial")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/Products/Product/Open-Source-Hardware/IP_Configuration"}),"IP Configuration"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/Products/Product/Open-Source-Hardware/loopback"}),"loopback")))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"All_pages.md"}),"All pages"),"  ",Object(a.b)("h1",Object(o.a)({parentName:"li"},{id:"coocox"}),"CooCox"))),Object(a.b)("p",null,"Visit to the Web site"),Object(a.b)("p",null,"URL :\ud83c\udf0e",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/Index.html"}),"http://www.coocox.org/Index.html"),"]","(",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/Index.html"}),"http://www.coocox.org/Index.html"),"."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("hr",null),Object(a.b)("p",null,"CoIDE just provides development environment without\ntool-chains. So you need to install tool-chains at first. We use ARM gcc\n4.7 for tool-chains."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ARM GCC 4.7 Features:")),Object(a.b)("p",null,"-"," All GCC 4.7 features, plus latest mainline features - Additional code\nsize optimizations - Newlib-nano: newlib branch optimized for code size"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://launchpad.net/gcc-arm-embedded/+download"}),"Download the latest\narm-gcc-embbed")),Object(a.b)("h2",{id:"coocox-open-ide"},"CooCox Open IDE"),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"CooCox")," provides integration development environment\ncalled ",Object(a.b)("strong",{parentName:"p"},"CoIDE")," for ARM Cortex M series microcontrollers. ",Object(a.b)("strong",{parentName:"p"},"CoIDE"),"\nsupports ARM gcc based development environment of ",Object(a.b)("strong",{parentName:"p"},"eclipse"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"System requirements:")),Object(a.b)("p",null,"-"," Windows XP SP3 / Windows Vista / Windows 7"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Features:")),Object(a.b)("p",null,"-"," Free to use - Full functional IDE - Component-oriented development\nplatform - Internet-based, efficient integration of network resources -\nIntegrates CoOS - Peripheral registers"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/CooCox_CoIDE.htm"}),"CoIDE Download and learn\nmore")," "),Object(a.b)("h2",{id:"tool-chains-setting-in-coide"},"Tool-chains setting in CoIDE"),Object(a.b)("hr",null),Object(a.b)("p",null,"Before you use CoIDE to start your project, you need to\nconfig the GCC compiler at first."),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/CoIDE/Compiler_Settings.html"}),"Compiler Setting in\nCoIDE")),Object(a.b)("h2",{id:"cox-peripheral-interface"},"CoX-Peripheral Interface"),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Cox-Peripheral interface")," is Common Wrapper Interface to\nport peripheral easily which is different in each vendors. If SPI is\ndesigned by Cox-Peripheral Interface starting as x(e.g. xGPIOModeSet),\nyou can operate by changing just SPI interface PIN setting in each MCUs\nor EVB-boards."),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.coocox.org/COX.html"}),"Learn more")),Object(a.b)("h2",{id:"tutorial"},"Tutorial"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"before-tutorial"},"Before Tutorial"),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Download program file(CoIDE) and USB drive(ColinkEx) from ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.coocox.org/CoCenter.html"}),"http://www.coocox.org/CoCenter.htm"),".")),Object(a.b)("h3",{id:"tutorial-using-coide"},"Tutorial Using CoIDE"),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click the CoIDE icon")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'The welcome page is a convenient entry for \u201cBrowse in Repository\u201d,\n\u201cCreate a New Project\u201d, \u201cOpen a Project\u201d, refer to \u201cUser Guide\u201d and go\nto \u201cForum"')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A wizard window will pop up, enter a name for the project (my project\nname: LoopbackTest)),You can also modify the Project Path.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Choose a model. For example, select ''Chip Model', then click \u201cNext\u201d.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Select a chip. For example, select "M0516LBN"')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Click "Finish". CoIDE automatically generates LoopbackTest.coproj\nfile and one configuration: "LoopbackTest".')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Click the Repository Button"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Check a component; for example, select\n'GPIO",Object(a.b)("inlineCode",{parentName:"li"},"SPI"),"UART",Object(a.b)("inlineCode",{parentName:"li"},"CoX.cookie.M051.config"),"C library''Retarget printf'. CoIDE\nwill automatically check the components, which are depended by the\nchecked component.")),Object(a.b)("h3",{id:"tutorial-using-w5500"},"Tutorial Using W5500"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"change-code-before-compile"},"Change code before compile"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Select the file "stdio.h/printf.c". You want to use "printf", you have\nto add as below.')),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"\nvoid PrintChar(char c)\n{\n    /* Send a char like: \n       while(Transfer not completed);\n       Transmit a char;\n    */  \n   xUARTCharPut(xUART0_BASE,c); // additional items\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Select the define variable in "ethernet/w5500". You\nshould select interface mode and kind of chip. '),Object(a.b)("blockquote",{parentName:"li"}),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'#define _WIZCHIP_                      5500   // 5100, 5200, 5500\n\n#if (_WIZCHIP_ == 5500)\n  #define _WIZCHIP_ID_                 "W5500\\0"\n//   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_FDM_\n   #define _WIZCHIP_IO_MODE_           _WIZCHIP_IO_MODE_SPI_VDM_\n   #include "W5500/w5500.h"\n   \\<markdown\\> - Select the define variable in "common/common.h". You can\n')),Object(a.b)("p",{parentName:"li"},"modify the Log Level. "))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-common.h"}),"//------------------------------ Etc ------------------------------\n#define WIZ_LOG_LEVEL   2       // 0: No print,  1: Error,  2: Error+Log,  3: Error+Log+Debug\n")),Object(a.b)("h2",{id:"download-"},"Download :"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Enter the menu (view ",">"," Configuration)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can select the Hardware Adapter type(Colink EX)")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In the project view, select the parent directory in which you want to\ncreate the Group (If you do not select the parent directory, the default\nis the root directory of the project), select Add Group and Add file in\ncontext menu")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You should make up same file path")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select the complie button. If necessary, you can select Rebuild to\nrecompile your project or select Clean to clean-up the project that has\nbeen compiled.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"compile result")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Click the "Download" button to download code to flash')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"download result")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can confirm the serial value through terminal program")),Object(a.b)("h2",{id:"example-"},"Example :"),Object(a.b)("h2",{id:"ip-configuration"},"IP Configuration"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"ip-configuration-in-pc"},"IP configuration in PC"),Object(a.b)("hr",null),Object(a.b)("p",null,"If IP address of your PC and WIZ550io are different, you\nneed to configure your PC network setting."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click on the Start Menu and open the Control Panel."),Object(a.b)("li",{parentName:"ul"},"Enter to'Network and Internet' and enter to Network and Sharing Center."),Object(a.b)("li",{parentName:"ul"},"Click'Change adapter settings at left side.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Double click Local Area Connection icon and click Properties and\nenter IPv4 Properties.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Then, set your IP address and subnet mask as same as WIZ550io's IP\naddress and subnet mask. "),Object(a.b)("li",{parentName:"ul"},"Or, you can add IP address by setting\nAdvanced. Click Advanced.. button.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Click Add... button and add IP address and subnet mask.")),Object(a.b)("h2",{id:"tcp-server-loopback"},"TCP Server Loopback"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"download--project-downloadhercules-test-program"},"Download : ",Object(a.b)("a",{href:"/img/osh/cookie/w5500_cookie_v100.zip",target:"_blank"},"Project download"),",",Object(a.b)("a",Object(o.a)({parentName:"h3"},{href:"http://www.hw-group.com/products/hercules/index_en.html"}),"Hercules test program")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Select TCP Client tab in Hercules and type Server IP address\ndisplaying in Tera Term at Module IP and port number box.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Click Connect. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"If connection is done successfully, you can see\nmessage as follows.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Type data you want to send and click Send button. If you want to send\nstring data, uncheck HEX checkbox. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"After send data, you can see sent\ndata and received data."))),Object(a.b)("h2",{id:"udp-loopback"},"UDP Loopback"),Object(a.b)("hr",null),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select UDP tab in Hercules and type IP address and port\nnumber displaying in Tera Term at Module IP and Port box in Hercules.\nAnd then, type port number you want in Local port box and click Listen\nbutton. Now, UDP socket opened.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type data you want to send and click Send button. If you want to send\nstring data, uncheck HEX checkbox. "),Object(a.b)("li",{parentName:"ul"},"After send data, you can see sent\ndata and received data.")))}u.isMDXComponent=!0},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=u(n),s=o,O=p["".concat(c,".").concat(s)]||p[s]||d[s]||a;return n?r.a.createElement(O,l(l({ref:t},b),{},{components:n})):r.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var b=2;b<a;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);