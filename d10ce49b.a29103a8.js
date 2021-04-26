(window.webpackJsonp=window.webpackJsonp||[]).push([[428],{480:function(t,e,b){"use strict";b.r(e),b.d(e,"frontMatter",(function(){return n})),b.d(e,"metadata",(function(){return s})),b.d(e,"rightToc",(function(){return a})),b.d(e,"default",(function(){return O}));var l=b(2),r=b(6),c=(b(0),b(578)),n={id:"flash",title:"Embedded Flash memory",date:new Date("2020-06-10T00:00:00.000Z")},s={unversionedId:"Product/iMCU/W7500/Peripherals-internal/flash",id:"Product/iMCU/W7500/Peripherals-internal/flash",isDocsHomePage:!1,title:"Embedded Flash memory",description:"Flash main features",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\flash.md",permalink:"/Product/iMCU/W7500/Peripherals-internal/flash",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/flash.md",sidebar:"docs",previous:{title:"External Interrupt (EXTI)",permalink:"/Product/iMCU/W7500/Peripherals-internal/exti"},next:{title:"UART Hardware Control example",permalink:"/Product/iMCU/W7500/Peripherals-internal/flowcontrol"}},a=[{value:"Flash main features",id:"flash-main-features",children:[]},{value:"Flash memory functional description",id:"flash-memory-functional-description",children:[{value:"Flash memory organization",id:"flash-memory-organization",children:[]}]}],o={rightToc:a};function O(t){var e=t.components,b=Object(r.a)(t,["components"]);return Object(c.b)("wrapper",Object(l.a)({},o,b,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"flash-main-features"},"Flash main features"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Up to 128Kbytes of Flash memory"),Object(c.b)("li",{parentName:"ul"},"Memory organization:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Main Flash memory block:",Object(c.b)("br",{parentName:"li"}),"Up to 128Kbytes"),Object(c.b)("li",{parentName:"ul"},"Information block:",Object(c.b)("br",{parentName:"li"}),"Up to 512bytes",Object(c.b)("br",{parentName:"li"}),"Information block is read only"),Object(c.b)("li",{parentName:"ul"},"Data block:",Object(c.b)("br",{parentName:"li"}),"Up to 512bytes"))),Object(c.b)("li",{parentName:"ul"},"Flash memory interface features:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Read interface with prefetch buffer( 1 x 32-bit words )"),Object(c.b)("li",{parentName:"ul"},"Flash Program / Erase operation"),Object(c.b)("li",{parentName:"ul"},"Read / Write protection")))),Object(c.b)("h2",{id:"flash-memory-functional-description"},"Flash memory functional description"),Object(c.b)("h3",{id:"flash-memory-organization"},"Flash memory organization"),Object(c.b)("p",null,"The Flash memory is organized of 32-bit wide memory cells that can be used for storing both code and data constants.\nThe memory organization is based on a main Flash memory block containing 512 sectors of 256byte or 32 blocks of 4Kbyte. The block and sector provides read/write protection."),Object(c.b)("table",{class:"tg"},Object(c.b)("tr",null,Object(c.b)("th",{class:"tg-huh2"},"Flash area",Object(c.b)("br",null),"  "),Object(c.b)("th",{class:"tg-s6z2"},"Flash memory address",Object(c.b)("br",null),"  "),Object(c.b)("th",{class:"tg-s6z2"},"Size (bytes)",Object(c.b)("br",null),"  "),Object(c.b)("th",{class:"tg-huh2"},"Name"),Object(c.b)("th",{class:"tg-s6z2"},"Description",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2",rowspan:"18"},"M",Object(c.b)("br",null),"a",Object(c.b)("br",null),"i",Object(c.b)("br",null),"n",Object(c.b)("br",null)," ",Object(c.b)("br",null),"F",Object(c.b)("br",null),"l",Object(c.b)("br",null),"a",Object(c.b)("br",null),"s",Object(c.b)("br",null),"h",Object(c.b)("br",null),Object(c.b)("br",null),Object(c.b)("br",null),"  m",Object(c.b)("br",null),"e",Object(c.b)("br",null),"m",Object(c.b)("br",null),"o",Object(c.b)("br",null),"r",Object(c.b)("br",null),"y",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"0x0000 0000 ~ 0x0000 00FF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector 0",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2",rowspan:"6"},"Block 0",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0000 0100 ~ 0x0000 01FF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector 1",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0000 0200 ~ 0x0000 02FF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector 2",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0000 0E00 ~ 0x0000 0EFF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector 14",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0000 0F00 ~ 0x0000 0FFF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector 15",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0000 7000 ~ 0x0000 70FF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector128",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2",rowspan:"5"},"Block 7",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0000 7100 ~ 0x0000 71FF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector129",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0000 7E00 ~ 0x0000 7EFF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector142",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0000 7F00 ~ 0x0000 7FFF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector143",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0001 F000 ~ 0x0001 F0FF ",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector496",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2",rowspan:"5"},"Block 31",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0001 F100 ~ 0x0001 F1FF",Object(c.b)("br",null)),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector497",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},". . .",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0001 FE00 ~ 0x0001 FEFF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector510",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0001 FF00 ~ 0x0001 FFFF ",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Sector511",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2",rowspan:"2"},Object(c.b)("br",null),"  Information",Object(c.b)("br",null),"  block",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"0x0003 FC00 ~ 0x0003 FCFF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"}," ",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"Lock info",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0003 FD00 ~ 0x0003 FDFF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2",colspan:"3"},"Reserved",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2",rowspan:"2"},Object(c.b)("br",null),"  Data block",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"0x0003 FE00 ~ 0x0003 FEFF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"}),Object(c.b)("td",{class:"tg-s6z2"},"Data0",Object(c.b)("br",null),"  ")),Object(c.b)("tr",null,Object(c.b)("td",{class:"tg-s6z2"},"0x0003 FF00 ~ 0x0003 FFFF",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"},"256",Object(c.b)("br",null),"  "),Object(c.b)("td",{class:"tg-s6z2"}),Object(c.b)("td",{class:"tg-s6z2"},"Data1",Object(c.b)("br",null),"  "))),Object(c.b)("p",null,"The W7500 embedded Flash memory can be programmed using in-application programming.\nIAP allows the user to re-program\nthe Flash memory while the application is running.\nThe program and erase operations can be performed over the whole product voltage range."),Object(c.b)("p",null,"In W7500x_Library_Examples, there is the IAP Example Project and the below function is supported to use IAP."),Object(c.b)("p",null,"void DO_IAP( uint32_t id, uint32_t dst_addr, uint8_t* src_addr, uint32_t size);"),Object(c.b)("p",null,"This function requests those parameters, id, dst_addr, src_addr and size.\n'id' is already defined in 'main.c'. 'dst_addr' is the flash memory address in the upper table.\n'src_addr' is the buffer pointer user want to program. 'size' is the flash size user chooses.\nPlease refer flash address and size mentioned in the upper table."),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-cpp"}),"// IAP 'id' paremeter define\n#define IAP_ENTRY           0x1FFF1001     // Because Thum code\n#define IAP_ERAS            0x010\n#define IAP_ERAS_DAT0       (IAP_ERAS + 0) // Erase Data 0 block\n#define IAP_ERAS_DAT1       (IAP_ERAS + 1) // Erase Data 1 block\n#define IAP_ERAS_SECT       (IAP_ERAS + 2) // Erase a Sector in Main Flash Memory \n#define IAP_ERAS_BLCK       (IAP_ERAS + 3) // Erase a Block in Main Flash Memory \n#define IAP_ERAS_CHIP       (IAP_ERAS + 4) // Erase all code\n#define IAP_ERAS_MASS       (IAP_ERAS + 5) // Erase all code & data\n#define IAP_PROG            0x022\n")),Object(c.b)("p",null,"This is how to Erase and Program flash memory. Especially, with IAP_ERAS_DAT0 and IAP_ERAS_DAT1,\nthere is no need to put other parameters (there are default values)."),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-cpp"}),"// Step 1 DATA0 Erase, Read, Write Test\nDO_IAP(IAP_ERAS_DAT0,0,0,0);\nDO_IAP(IAP_PROG,DAT0_START_ADDR,buffer,SECT_SIZE);\n")),Object(c.b)("p",null,"Operating program can be deleted when user use 'IAP_ERAS_CHIP' or 'IAP_ERAS_MASS'."),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-cpp"}),"// Using IAP_ERAS_CHIP or IAP_ERAS_MASS\nDO_IAP(IAP_ERAS_CHIP,0,0,0);\nDO_IAP(IAP_ERAS_MASS,0,0,0);\n")))}O.isMDXComponent=!0},578:function(t,e,b){"use strict";b.d(e,"a",(function(){return u})),b.d(e,"b",(function(){return d}));var l=b(0),r=b.n(l);function c(t,e,b){return e in t?Object.defineProperty(t,e,{value:b,enumerable:!0,configurable:!0,writable:!0}):t[e]=b,t}function n(t,e){var b=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),b.push.apply(b,l)}return b}function s(t){for(var e=1;e<arguments.length;e++){var b=null!=arguments[e]?arguments[e]:{};e%2?n(Object(b),!0).forEach((function(e){c(t,e,b[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(b)):n(Object(b)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(b,e))}))}return t}function a(t,e){if(null==t)return{};var b,l,r=function(t,e){if(null==t)return{};var b,l,r={},c=Object.keys(t);for(l=0;l<c.length;l++)b=c[l],e.indexOf(b)>=0||(r[b]=t[b]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)b=c[l],e.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(t,b)&&(r[b]=t[b])}return r}var o=r.a.createContext({}),O=function(t){var e=r.a.useContext(o),b=e;return t&&(b="function"==typeof t?t(e):s(s({},e),t)),b},u=function(t){var e=O(t.components);return r.a.createElement(o.Provider,{value:e},t.children)},j={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},i=r.a.forwardRef((function(t,e){var b=t.components,l=t.mdxType,c=t.originalType,n=t.parentName,o=a(t,["components","mdxType","originalType","parentName"]),u=O(b),i=l,d=u["".concat(n,".").concat(i)]||u[i]||j[i]||c;return b?r.a.createElement(d,s(s({ref:e},o),{},{components:b})):r.a.createElement(d,s({ref:e},o))}));function d(t,e){var b=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var c=b.length,n=new Array(c);n[0]=i;var s={};for(var a in e)hasOwnProperty.call(e,a)&&(s[a]=e[a]);s.originalType=t,s.mdxType="string"==typeof t?t:l,n[1]=s;for(var o=2;o<c;o++)n[o]=b[o];return r.a.createElement.apply(null,n)}return r.a.createElement.apply(null,b)}i.displayName="MDXCreateElement"}}]);