(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{378:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),i=(r(0),r(516)),o={id:"download",title:"Download",date:new Date("2020-04-16T00:00:00.000Z")},c={unversionedId:"Product/S2E-Module/WIZ550S2E/download",id:"Product/S2E-Module/WIZ550S2E/download",isDocsHomePage:!1,title:"Download",description:"Firmware",source:"@site/docs\\Product\\S2E-Module\\WIZ550S2E\\Download.md",permalink:"/docs/Product/S2E-Module/WIZ550S2E/download",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ550S2E/Download.md",sidebar:"someSidebar",previous:{title:"Tutorial(Eng)",permalink:"/docs/Product/S2E-Module/WIZ550S2E/tutorial_eng"},next:{title:"ioModule",permalink:"/docs/Product/ioModule/iomodule"}},b=[{value:"Firmware",id:"firmware",children:[{value:"Binary",id:"binary",children:[]},{value:"Archive",id:"archive",children:[]},{value:"Firmware upload(TFTP) guide",id:"firmware-uploadtftp-guide",children:[]},{value:"Source code",id:"source-code",children:[]}]},{value:"Configuration Tool",id:"configuration-tool",children:[{value:"ConfigTool",id:"configtool",children:[]},{value:"Configuration Tool \uc2e4\ud589 \uac00\uc774\ub4dc",id:"configuration-tool-\uc2e4\ud589-\uac00\uc774\ub4dc",children:[]},{value:"Source code",id:"source-code-1",children:[]}]}],l={rightToc:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"firmware"},"Firmware"),Object(i.b)("h3",{id:"binary"},"Binary"),Object(i.b)("p",null,"We will use the \ud83c\udf0e",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E/releases"}),"release"),"\npage of wiz550s2e's in github.  "),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E-Modbus/releases/download/v1.4.0/Binary_v140.zip"}),"Ver 1.4.0 - Modbus Ver"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Added features - Modbus"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Source code - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ550S2E-Modbus"}),"https://github.com/Wiznet/WIZ550S2E-Modbus")),Object(i.b)("li",{parentName:"ul"},"v1.31 Configuration Tool or later is required.")))),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E/releases/download/v1.3.0/Binary_v130.zip"}),"Ver 1.3.0 - MQTT Ver"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Added features - MQTT",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Source code - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Wiznet/WIZ550S2E"}),"https://github.com/Wiznet/WIZ550S2E")),Object(i.b)("li",{parentName:"ul"},"AT+MQTTSET : (AT command) This command is used to initialize the necessary parameters of MQTT connection(set information automatically saved)"),Object(i.b)("li",{parentName:"ul"},"AT+MQTTCON : (AT command) Implement MQTT to connect the Broker"),Object(i.b)("li",{parentName:"ul"},"AT+MQTTPUB : (AT command) Publish the message to subscribed Client(set topic automatically saved)"),Object(i.b)("li",{parentName:"ul"},"AT+MQTTSUB : (AT command) Such topics will be pushed to the WIZ550S2E when received by the Broker(set topic automatically saved)")))),Object(i.b)("h3",{id:"archive"},"Archive"),Object(i.b)("p",null,"For more information about the changes for each version, please see\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E/blob/master/README.md#RevisionHistory"}),"Revision History"),Object(i.b)("br",{parentName:"p"}),"\n","For all revision binary files including below, you can see at the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E/releases"}),"release")," page of\nwiz550s2e's in GitHub."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/wiz550s2e/binary_v1.0.3.zip"}),"Ver 1.0.3")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/wiz550s2e/binary_v1.0.2.zip"}),"Ver 1.0.2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/wiz550s2e/binary_v1.0.1.zip"}),"Ver 1.0.1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/img/products/wiz550s2e/wiz550s2e.zip"}),"Ver 1.0.0"))),Object(i.b)("h3",{id:"firmware-uploadtftp-guide"},"Firmware upload(TFTP) guide"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/img/products/wiz550s2e/wiz550s2e_fw_uploading_tftp.pdf"}),"Guide Document"),"  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Notice"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a working gateway is needed"),Object(i.b)("li",{parentName:"ul"},"pc and module has to same subnet"),Object(i.b)("li",{parentName:"ul"},"WIZ550S2E must be done Factory reset, After a firmware update. (Factory reset pin Active Low > 5sec)")))),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/img/products/wiz550s2e/without_subtitle.mp4"}),"Guide Video")),Object(i.b)("h3",{id:"source-code"},"Source code"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/w5500/w5500_evb/icons/github.png",alt:null})),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E"}),"https://github.com/Wiznet/WIZ550S2E")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"configuration-tool"},"Configuration Tool"),Object(i.b)("h3",{id:"configtool"},"ConfigTool"),Object(i.b)("p",null,"We will not upload files in here.",Object(i.b)("br",{parentName:"p"}),"\n","We will use the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZnet_Configuration_Tool/releases"}),"release"),"\npage of configuration's in github.  "),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZnet_Configuration_Tool/releases/download/v1.3.1/WIZnet_Configuration_Tool.jar"}),"Ver 1.31"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/img/products/wiz550s2e/wiznet_configuration_tool_ver1.10.zip"}),"Ver 1.10"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/img/products/wiz550sr/wiz550sr_download/wiznet_configuration_tool_ver1.03.zip"}),"Ver 1.03"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/img/products/wiz550s2e/wiznet_configuration_tool_ver1.02.zip"}),"Ver 1.02"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/img/products/wiz550s2e/wiz550s2e_configuration_tool_ver1.00_0724.zip"}),"Ver 1.00")),Object(i.b)("h3",{id:"configuration-tool-\uc2e4\ud589-\uac00\uc774\ub4dc"},"Configuration Tool \uc2e4\ud589 \uac00\uc774\ub4dc"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/github.png",alt:null})),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550S2E"}),"https://github.com/Wiznet/WIZ550S2E")),Object(i.b)("h3",{id:"source-code-1"},"Source code"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/github.png",alt:null})),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZnet_Configuration_Tool"}),"https://github.com/Wiznet/WIZnet_Configuration_Tool")))}u.isMDXComponent=!0},516:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=u(r),s=n,m=p["".concat(o,".").concat(s)]||p[s]||d[s]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);