(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[26895],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1404:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var o=n(74034),r=n(79973),a=(n(67294),n(3905)),i={id:"open_source_hardware_coocox",title:"CooCox",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/Open-Source-Hardware/open_source_hardware_coocox",id:"Product/Open-Source-Hardware/open_source_hardware_coocox",isDocsHomePage:!1,title:"CooCox",description:"Visit to the Web site",source:"@site/docs/Product/Open-Source-Hardware/CooCox.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/open_source_hardware_coocox",permalink:"/Product/Open-Source-Hardware/open_source_hardware_coocox",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/CooCox.md",version:"current",frontMatter:{id:"open_source_hardware_coocox",title:"CooCox",date:"2020-04-03T00:00:00.000Z"}},l=[{value:"Installation",id:"installation",children:[]},{value:"CooCox Open IDE",id:"coocox-open-ide",children:[]},{value:"Tool-chains setting in CoIDE",id:"tool-chains-setting-in-coide",children:[]},{value:"CoX-Peripheral Interface",id:"cox-peripheral-interface",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Visit to the Web site"),(0,a.kt)("p",null,"URL :\ud83c\udf0e",(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/Index.html"},"http://www.coocox.org/Index.html"),"]","(",(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/Index.html"},"http://www.coocox.org/Index.html"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"CoIDE just provides development environment without\ntool-chains. So you need to install tool-chains at first. We use ARM gcc\n4.7 for tool-chains."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ARM GCC 4.7 Features:")),(0,a.kt)("p",null,"-"," All GCC 4.7 features, plus latest mainline features - Additional code\nsize optimizations - Newlib-nano: newlib branch optimized for code size"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://launchpad.net/gcc-arm-embedded/+download"},"Download the latest\narm-gcc-embbed")),(0,a.kt)("h2",{id:"coocox-open-ide"},"CooCox Open IDE"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CooCox")," provides integration development environment\ncalled ",(0,a.kt)("strong",{parentName:"p"},"CoIDE")," for ARM Cortex M series microcontrollers. ",(0,a.kt)("strong",{parentName:"p"},"CoIDE"),"\nsupports ARM gcc based development environment of ",(0,a.kt)("strong",{parentName:"p"},"eclipse"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"System requirements:")),(0,a.kt)("p",null,"-"," Windows XP SP3 / Windows Vista / Windows 7"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Features:")),(0,a.kt)("p",null,"-"," Free to use - Full functional IDE - Component-oriented development\nplatform - Internet-based, efficient integration of network resources -\nIntegrates CoOS - Peripheral registers"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/CooCox_CoIDE.htm"},"CoIDE Download and learn\nmore")," "),(0,a.kt)("h2",{id:"tool-chains-setting-in-coide"},"Tool-chains setting in CoIDE"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Before you use CoIDE to start your project, you need to\nconfig the GCC compiler at first."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/CoIDE/Compiler_Settings.html"},"Compiler Setting in\nCoIDE")),(0,a.kt)("h2",{id:"cox-peripheral-interface"},"CoX-Peripheral Interface"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cox-Peripheral interface")," is Common Wrapper Interface to\nport peripheral easily which is different in each vendors. If SPI is\ndesigned by Cox-Peripheral Interface starting as x(e.g. xGPIOModeSet),\nyou can operate by changing just SPI interface PIN setting in each MCUs\nor EVB-boards."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.coocox.org/COX.html"},"Learn more")))}u.isMDXComponent=!0}}]);