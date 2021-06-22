(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[6684],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return w},kt:function(){return f}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},w=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,w=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=n,p=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?i.createElement(p,a(a({ref:t},w),{},{components:r})):i.createElement(p,a({ref:t},w))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11300:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return w},default:function(){return d}});var i=r(22122),n=r(19756),o=(r(67294),r(3905)),a=["components"],c={id:"how_to_install_wizwiki_w7500eco_driver",title:"How to install WIZwiki-W7500ECO serial driver",date:new Date("2020-04-07T00:00:00.000Z")},l=void 0,s={unversionedId:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_install_wizwiki_w7500eco_driver",id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_install_wizwiki_w7500eco_driver",isDocsHomePage:!1,title:"How to install WIZwiki-W7500ECO serial driver",description:"Overview",source:"@site/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/How_to_install_wizwiki_w7500eco_driver.md",sourceDirName:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO",slug:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_install_wizwiki_w7500eco_driver",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_install_wizwiki_w7500eco_driver",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/How_to_install_wizwiki_w7500eco_driver.md",version:"current",frontMatter:{id:"how_to_install_wizwiki_w7500eco_driver",title:"How to install WIZwiki-W7500ECO serial driver",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"How to start WIZwiki-W7500ECO Board",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_start_wizwiki_w7500eco_board"},next:{title:"How to write firmware into WIZwiki W7500ECO",permalink:"/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500ECO/how_to_write_firmware_wizwiki_w7500eco"}},w=[{value:"Overview",id:"overview",children:[]},{value:"Serial driver installation",id:"serial-driver-installation",children:[]}],u={toc:w};function d(e){var t=e.components,c=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"CMSIS-DAP of WIZwiki-W7500ECO has two functions. The first function is\nfirmware writing to the W7500 (Target MCU) through USB Interface. The\nsecond function is to receive and transmit data in the UART2 of W7500\nusing the USB Interface.",(0,o.kt)("br",{parentName:"p"}),"\n","The first function is used without the driver, but the second function\nis used after install the driver.",(0,o.kt)("br",{parentName:"p"}),"\n","CMSIS-DAP Interface of WIZwiKI-W7500ECO has shows as the photo below.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"CMSIS-DAP Interface",src:r(30465).Z})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"serial-driver-installation"},"Serial driver installation"),(0,o.kt)("p",null,'The driver could be found on the LINK below, click on the "Download\nlatest driver" can download the latest driver.',(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"http://developer.mbed.org/handbook/Windows-serial-configuration"},"ARM mbed Window serial configuration PAGE"),(0,o.kt)("br",{parentName:"p"}),"\n",'If the driver is successfully installed, serial port that is created as\n"mbed Seral Port (COMn)" in Device Manager.'),(0,o.kt)("hr",null))}d.isMDXComponent=!0},30465:function(e,t,r){"use strict";t.Z=r.p+"assets/images/wizwiki-w7500eco_cmsis-dap_block-013b7b25c5c2b9c4e3eecd8764301771.png"}}]);