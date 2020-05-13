(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{481:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),a=(r(0),r(623)),i={id:"download",title:"Download",date:new Date("2020-04-16T00:00:00.000Z")},c={id:"Product/S2E-Module/WIZ550S2E/download",title:"Download",description:"## Content\r",source:"@site/docs\\Product\\S2E-Module\\WIZ550S2E\\Download.md",permalink:"/document_framework/docs/Product/S2E-Module/WIZ550S2E/download",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/S2E-Module/WIZ550S2E/Download.md",sidebar:"someSidebar",previous:{title:"Tutorial(Eng)",permalink:"/document_framework/docs/Product/S2E-Module/WIZ550S2E/tutorial_eng"},next:{title:"ioModule",permalink:"/document_framework/docs/Product/ioModule/iomodule"}},b=[{value:"Content",id:"content",children:[]},{value:"Firmware",id:"firmware",children:[{value:"Binary",id:"binary",children:[]},{value:"Archive",id:"archive",children:[]},{value:"Firmware upload(TFTP) guide",id:"firmware-uploadtftp-guide",children:[]},{value:"Source code",id:"source-code",children:[]}]},{value:"Configuration Tool",id:"configuration-tool",children:[{value:"ConfigTool",id:"configtool",children:[]},{value:"Configuration Tool \uc2e4\ud589 \uac00\uc774\ub4dc",id:"configuration-tool-\uc2e4\ud589-\uac00\uc774\ub4dc",children:[]},{value:"Source code",id:"source-code-1",children:[]}]}],l={rightToc:b};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("h1",{id:"wiz550s2e-download"},"WIZ550S2E Download"),Object(a.b)("h2",{id:"firmware"},"Firmware"),Object(a.b)("h3",{id:"binary"},"Binary"),Object(a.b)("p",null,"We will use the \ud83c\udf0e",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E/releases"}),"release"),"\npage of wiz550s2e's in github.  "),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/Wiznet/WIZ550S2E-Modbus/releases/download/v1.4.0/Binary_v140.zip",alt:"Ver 1.4.0 - Modbus\nVer"})),"  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Added features - Modbus"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Source code - ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ550S2E-Modbus"}),"https://github.com/Wiznet/WIZ550S2E-Modbus")),Object(a.b)("li",{parentName:"ul"},"v1.31 Configuration Tool or later is required.")))),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/Wiznet/WIZ550S2E/releases/download/v1.3.0/Binary_v130.zip",alt:"Ver 1.3.0 - MQTT\nVer"})),"  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Added features - MQTT")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"  * Source code - https://github.com/Wiznet/WIZ550S2E\n  * AT+MQTTSET : (AT command) This command is used to initialize the necessary parameters of MQTT connection(set information automatically saved)\n  * AT+MQTTCON : (AT command) Implement MQTT to connect the Broker\n  * AT+MQTTPUB : (AT command) Publish the message to subscribed Client(set topic automatically saved)\n  * AT+MQTTSUB : (AT command) Such topics will be pushed to the WIZ550S2E when received by the Broker(set topic automatically saved)\n")),Object(a.b)("h3",{id:"archive"},"Archive"),Object(a.b)("p",null,"For more information about the changes for each version, please see\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E/blob/master/README.md#RevisionHistory"}),"Revision\nHistory"),Object(a.b)("br",{parentName:"p"}),"\n","For all revision binary files including below, you can see at the\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E/releases"}),"release")," page of\nwiz550s2e's in GitHub."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550s2e/binary_v1.0.3.zip",alt:"Ver 1.0.3"}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550s2e/binary_v1.0.2.zip",alt:"Ver 1.0.2"}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550s2e/binary_v1.0.1.zip",alt:"Ver 1.0.1"}))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/document_framework/img/products/wiz550s2e/wiz550s2e.zip",alt:"Ver 1.0.0"})))),Object(a.b)("h3",{id:"firmware-uploadtftp-guide"},"Firmware upload(TFTP) guide"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiz550s2e_fw_uploading_tftp.pdf",alt:"Guide Document"})),"  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Notice"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a working gateway is needed"),Object(a.b)("li",{parentName:"ul"},"pc and module has to same subnet"),Object(a.b)("li",{parentName:"ul"},"WIZ550S2E must be done Factory reset, After a firmware update. (Factory reset pin Active Low > 5sec)")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wiz550s2e/without_subtitle.mp4",alt:"Guide Video"}))),Object(a.b)("h3",{id:"source-code"},"Source code"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/github.png",alt:null})),"\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E"}),"https://github.com/Wiznet/WIZ550S2E")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"configuration-tool"},"Configuration Tool"),Object(a.b)("h3",{id:"configtool"},"ConfigTool"),Object(a.b)("p",null,"We will not upload files in here.",Object(a.b)("br",{parentName:"p"}),"\n","We will use the\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZnet_Configuration_Tool/releases"}),"release"),"\npage of configuration's in github.  "),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://github.com/Wiznet/WIZnet_Configuration_Tool/releases/download/v1.3.1/WIZnet_Configuration_Tool.jar",alt:"Ver\n1.31"})),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiznet_configuration_tool_ver1.10.zip",alt:"Ver 1.10"})),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/products/wiz550sr/wiz550sr_download/wiznet_configuration_tool_ver1.03.zip",alt:"Ver\n1.03"})),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiznet_configuration_tool_ver1.02.zip",alt:"Ver 1.02"})),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiz550s2e_configuration_tool_ver1.00_0724.zip",alt:"Ver\n1.00"}))),Object(a.b)("h3",{id:"configuration-tool-\uc2e4\ud589-\uac00\uc774\ub4dc"},"Configuration Tool \uc2e4\ud589 \uac00\uc774\ub4dc"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/github.png",alt:null})),"\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E"}),"https://github.com/Wiznet/WIZ550S2E")),Object(a.b)("h3",{id:"source-code-1"},"Source code"),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/github.png",alt:null})),"\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZnet_Configuration_Tool"}),"https://github.com/Wiznet/WIZnet_Configuration_Tool")))}u.isMDXComponent=!0},623:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,s=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return r?o.a.createElement(s,c({ref:t},l,{components:r})):o.a.createElement(s,c({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);