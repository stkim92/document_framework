(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[45827],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return a}})},44996:function(e,t,r){"use strict";r.d(t,{C:function(){return i},Z:function(){return o}});var n=r(52263),a=r(13919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,u=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(u)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+s:s}(i,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},82023:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o=r(44996),u={id:"asg210",title:"Overview",date:new Date("2020-09-15T00:00:00.000Z")},l={unversionedId:"Product/Azure-Sphere/asg210",id:"Product/Azure-Sphere/asg210",isDocsHomePage:!1,title:"Overview",description:"Introduction",source:"@site/docs/Product/Azure-Sphere/ASG210.md",sourceDirName:"Product/Azure-Sphere",slug:"/Product/Azure-Sphere/asg210",permalink:"/Product/Azure-Sphere/asg210",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Azure-Sphere/ASG210.md",version:"current",frontMatter:{id:"asg210",title:"Overview",date:"2020-09-15T00:00:00.000Z"},sidebar:"docs",previous:{title:"Products",permalink:"/"},next:{title:"Datasheet",permalink:"/Product/Azure-Sphere/asg210_datasheet"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"System Architecture",id:"system-architecture",children:[]},{value:"Features",id:"features",children:[]},{value:"Key Benefits",id:"key-benefits",children:[]},{value:"Target Applications",id:"target-applications",children:[]},{value:"Product Handling",id:"product-handling",children:[]}],s={toc:c};function p(e){var t=e.components,u=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("img",{src:(0,o.Z)("img/AzureSphere/overview/ASG210_20210210.png"),width:"500"}),(0,i.kt)("p",null,"WIZnet\u2019s ASG210 including Azure Sphere MT3620 combo designed by USI is an Azure Sphere guardian module designed to retrofit the brownfield systems that seek to add data communication with cloud service and secure remote access. ASG210 supports various interfaces - GPIOs/I2C/UART (RS232/485/422) \u2013 and public network connectivity \u2013 Wi-Fi(Ext-Ant)/Ethernet - to help reduce additional cost and add high-level security and cloud service."),(0,i.kt)("p",null,"ASG210\u2019s Azure Sphere module supports high-level security system for cloud services. In public network, Data transmissions are encrypted, all Azure Sphere OS and application updates are delivered securely via Microsoft Azure Sphere Security Service, and authentication ensures the module only communicates with trusted hosts. With ASG210, On-premise systems can more confidently communicate existing devices with the cloud to operate more efficiently."),(0,i.kt)("p",null,"WIZnet ASG210 includes Azure Sphere systems. Customers will need an Azure tenant, which is free, to enable the automated Azure Sphere security and OS updates."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ASG210 Case Version"),(0,i.kt)("th",{parentName:"tr",align:null},"ASG210 (Non-Case Version)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"ASG210 Case Version",src:r(63193).Z})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{alt:"ASG210 (Non-Case Version)",src:r(45142).Z}))))),(0,i.kt)("h2",{id:"system-architecture"},"System Architecture"),(0,i.kt)("img",{src:(0,o.Z)("img/AzureSphere/overview/system_architecture.png"),width:"800"}),(0,i.kt)("p",null,"ASG210 provides various interfaces for connecting to the public cloud while maintaining the existing On-premise system infrastructure. Customers can experience Microsoft\u2019s high level of security and software updates for brownfield and greenfield equipment with ASG210."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"USI Azure Sphere MT3620 Combo features:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ARM Cortex-A7, 4MB SRAM"),(0,i.kt)("li",{parentName:"ul"},"2x ARM Cortex-M4, 192KB TCM, 64KB SRAM (per Core)"),(0,i.kt)("li",{parentName:"ul"},"Dual-band 2.5/5GHz 802.11 a/b/g/n Wi-Fi with Ext.antenna and PCB antenna"),(0,i.kt)("li",{parentName:"ul"},"BT5.0 with U.FL Ext.antenna"))),(0,i.kt)("li",{parentName:"ul"},"Data transfer between private network and public network"),(0,i.kt)("li",{parentName:"ul"},"Supports GPIOs/I2C/UART(RS232/485/422) interfaces"),(0,i.kt)("li",{parentName:"ul"},"Support Private Network Configuration via Configuration tool"),(0,i.kt)("li",{parentName:"ul"},"Support Micro SD Card slot (UART to SDCard)"),(0,i.kt)("li",{parentName:"ul"},"1x User button, 5x Status LEDs, 1x Power LED"),(0,i.kt)("li",{parentName:"ul"},"Auto switching between Wi-Fi and Ethernet for public networks"),(0,i.kt)("li",{parentName:"ul"},"5V DC Power Regulation (2A max, with over voltage protection)"),(0,i.kt)("li",{parentName:"ul"},"Dimentions: 80.0mm x 75.0mm x 18.0mm"),(0,i.kt)("li",{parentName:"ul"},"Debugger connector for ASG Debugger board\n(ASG Debugger board supports program and debug Azure Sphere Cores(A7/2x M4 Cores), download and debug BLE with JLINK interface)")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ASG210 Dual Ethernet, User/Reset button and Power connector"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:(0,o.Z)("img/AzureSphere/overview/asg210_userbutton.png"),width:"500"}))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ASG210 I2C/GPIOs/UART Interface connectors"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:(0,o.Z)("img/AzureSphere/overview/asg210_uartinterface.png"),width:"500"}))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ASG210 Debugger connector and SDCard slot"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{src:(0,o.Z)("img/AzureSphere/overview/asg210_debugger.png"),width:"500"}))))),(0,i.kt)("h2",{id:"key-benefits"},"Key Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Securely connect On-premise system:"),(0,i.kt)("p",{parentName:"li"},"Retrofit existing equipment easily and cost-effectively with a comprehensive, cloud connectivity solution with high-level security system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Device Management Service:"),(0,i.kt)("p",{parentName:"li"},"ASG210 support securely remote monitor and configurate equipment to increase efficiency, reduce costs and improve the customer cloud experience."))),(0,i.kt)("h2",{id:"target-applications"},"Target Applications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Secure Public networks"),(0,i.kt)("li",{parentName:"ul"},"Smart Retail and Smart Supply Chain"),(0,i.kt)("li",{parentName:"ul"},"Smart City and Smart Farm"),(0,i.kt)("li",{parentName:"ul"},"Factory and Building Automation"),(0,i.kt)("li",{parentName:"ul"},"Smart Energy and Smart Grids")),(0,i.kt)("img",{src:(0,o.Z)("img/AzureSphere/overview/security_system.png"),width:"700"}),(0,i.kt)("h2",{id:"product-handling"},"Product Handling"),(0,i.kt)("p",null,"To Program and operate ASG210, the below components, Debugger, Micro USB cable and 5V2A power adapter, are needed."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"These components are optional and available for purchase separately.")),(0,i.kt)("img",{src:(0,o.Z)("img/AzureSphere/overview/ASG210_components_20210210.png"),width:"700"}))}p.isMDXComponent=!0},63193:function(e,t,r){"use strict";t.Z=r.p+"assets/images/asg210_case-4e743518a2014f2d74eca80a7f54c63f.png"},45142:function(e,t,r){"use strict";t.Z=r.p+"assets/images/asg210_non_case-e19a40a74fe8156242d5d384cf0eac42.png"}}]);