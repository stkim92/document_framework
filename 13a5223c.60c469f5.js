(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),i=(r(0),r(582)),l={},o={id:"Product/iMCU/W7500/Peripherals-internal/init",title:"init",description:"# I2C Read/Write example",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/init.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/init",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/init.md"},c=[{value:"Example Description",id:"example-description",children:[]},{value:"Directory contents",id:"directory-contents",children:[]},{value:"Hardware and Software environment",id:"hardware-and-software-environment",children:[]},{value:"How to use it ?",id:"how-to-use-it-",children:[]},{value:"Flow Chart",id:"flow-chart",children:[]}],b={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"i2c-readwrite-example"},"I2C Read/Write example"),Object(i.b)("hr",null),Object(i.b)("p",null,"(C) COPYRIGHT 2015 WIZnet Co.,Ltd."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"file    : I2C/I2C_Init/readme.md "),Object(i.b)("li",{parentName:"ul"},"author  : IOP Team"),Object(i.b)("li",{parentName:"ul"},"version : V1.0.0"),Object(i.b)("li",{parentName:"ul"},"date    : 1-May-2015"),Object(i.b)("li",{parentName:"ul"},"brief   : Description of the I2C Data Read/Write example.")),Object(i.b)("hr",null),Object(i.b)("p",null,"THE PRESENT FIRMWARE WHICH IS FOR GUIDANCE ONLY AIMS AT PROVIDING CUSTOMERS WITH CODING INFORMATION REGARDING THEIR PRODUCTS IN ORDER FOR THEM TO SAVE TIME. AS A RESULT, WIZNET SHALL NOT BE HELD LIABLE FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL DAMAGES WITH RESPECT TO ANY CLAIMS ARISING FROM THE CONTENT OF SUCH FIRMWARE AND/OR THE USE MADE BY CUSTOMERS OF THE CODING INFORMATION CONTAINED HEREIN IN CONNECTION WITH THEIR PRODUCTS."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"example-description"},"Example Description"),Object(i.b)("p",null,"This example provides a description of how to use a Read/Write operation.\nThis example provides the elementary steps to control the following modules and\nuse them in an application:"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory-contents"},"Directory contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"I2C/I2C_Init/main.c                            (Main program)"),Object(i.b)("li",{parentName:"ul"},"I2C/I2C_Init/W7500x_it.c                       (Interrupt Handlers)"),Object(i.b)("li",{parentName:"ul"},"I2C/I2C_Init/W7500x_it.h                       (Interrupt Handlers Header file)"),Object(i.b)("li",{parentName:"ul"},"I2C/I2C_Init/W7500x_conf.h                     (Library Configuration file)"),Object(i.b)("li",{parentName:"ul"},"I2C/I2C_Init/MDK/W7500x_I2C_Init.uvproj         (Project file)"),Object(i.b)("li",{parentName:"ul"},"I2C/I2C_Init/GCC/Makefile                      (GCC Make file)")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"hardware-and-software-environment"},"Hardware and Software environment"),Object(i.b)("p",null,"   | --W7500--    ---slave--   |\n|         |      |          |\n|     SDA |------| SDA      |\n|     SCL |------| SCL      |\n|         |      |          |\n|         |      |          |"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"---------       -----------\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"how-to-use-it-"},"How to use it ?"),Object(i.b)("p",null,"In order to make the program work, you must do the following :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open your preferred toolchain."),Object(i.b)("li",{parentName:"ul"},"Rebuild all files and load your image into target memory."),Object(i.b)("li",{parentName:"ul"},"Run the example."),Object(i.b)("li",{parentName:"ul"},"WIZwiki W7500 where the Flash memory density ranges 128Kbytes."),Object(i.b)("li",{parentName:"ul"},"If you have any questions, please use the forum site.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"',Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://wizwiki.net/forum/%22"}),'http://wizwiki.net/forum/"'))))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"flow-chart"},"Flow Chart"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Master Init"),Object(i.b)("li",{parentName:"ul"},"Device address send from W7500 to EEPROM"),Object(i.b)("li",{parentName:"ul"},"START enable"),Object(i.b)("li",{parentName:"ul"},"Confirm the Ack Receive"),Object(i.b)("li",{parentName:"ul"},"Slave address send from W7500 to EEPROM"),Object(i.b)("li",{parentName:"ul"},"Confirm the Ack Receive"),Object(i.b)("li",{parentName:"ul"},"Send the data from W7500 to EEPROM"),Object(i.b)("li",{parentName:"ul"},"Restart enable"),Object(i.b)("li",{parentName:"ul"},"Confirm the Ack Receive"),Object(i.b)("li",{parentName:"ul"},"Receive the data"),Object(i.b)("li",{parentName:"ul"},"Transmit the Ack transmission"),Object(i.b)("li",{parentName:"ul"},"STOP enable")),Object(i.b)("p",null,"\xa9"," COPYRIGHT 2015 WIZnet Co.,Ltd."))}u.isMDXComponent=!0},582:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(l,".").concat(m)]||p[m]||O[m]||i;return r?a.a.createElement(d,o({ref:t},b,{components:r})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);