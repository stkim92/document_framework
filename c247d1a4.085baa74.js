(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{507:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(9),o=(r(0),r(626)),a={},c={id:"Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_install_WIZwiki_W7500_serial_driver",title:"How_to_install_WIZwiki_W7500_serial_driver",description:"# How to install WIZwiki-W7500 serial driver\r",source:"@site/docs\\Product\\Mbed-WIZwiki-Platform\\WIZwiki-W7500\\How_to_install_WIZwiki_W7500_serial_driver.md",permalink:"/document_framework/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_install_WIZwiki_W7500_serial_driver",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Mbed-WIZwiki-Platform/WIZwiki-W7500/How_to_install_WIZwiki_W7500_serial_driver.md"},l=[{value:"Overview",id:"overview",children:[]},{value:"Serial driver installation",id:"serial-driver-installation",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-to-install-wizwiki-w7500-serial-driver"},"How to install WIZwiki-W7500 serial driver"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"CMSIS-DAP of WIZwiki-W7500 has two functions. The first function is\nfirmware writing to the W7500 (Target MCU) through USB Interface. The\nsecond function is to receive and transmit data in the UART1 of W7500\nusing the USB Interface.",Object(o.b)("br",{parentName:"p"}),"\n","The first function is used without the driver, but the second function\nis used after install the driver.",Object(o.b)("br",{parentName:"p"}),"\n","CMSIS-DAP Interface of WIZwiKI-W7500 has shows as the photo below.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500/overview/cmsis-dap_block.png",alt:"CMSIS-DAP Interface"}))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"serial-driver-installation"},"Serial driver installation"),Object(o.b)("p",null,'The driver could be found on the LINK below, click on the "Download\nlatest driver" can download the latest driver.',Object(o.b)("br",{parentName:"p"}),"\n","\ud83c\udf0e",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://developer.mbed.org/handbook/Windows-serial-configuration"}),"ARM mbed Window serial configuration PAGE"),Object(o.b)("br",{parentName:"p"}),"\n",'If the driver is successfully installed, serial port that is created as\n"mbed Seral Port (COMn)" in Device Manager.'),Object(o.b)("hr",null))}u.isMDXComponent=!0},626:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,f=d["".concat(a,".").concat(p)]||d[p]||b[p]||o;return r?i.a.createElement(f,c({ref:t},s,{components:r})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);