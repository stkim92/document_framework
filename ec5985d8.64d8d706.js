(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{535:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return c})),a.d(e,"rightToc",(function(){return o})),a.d(e,"default",(function(){return O}));var n=a(2),r=a(6),i=(a(0),a(579)),b={id:"io_pin",title:"IO Pin",date:new Date("2020-05-12T00:00:00.000Z")},c={unversionedId:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin",id:"Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin",isDocsHomePage:!1,title:"IO Pin",description:"PIN Description",source:"@site/docs\\Product\\Wi-Fi-Module\\WizFi250\\Programers-Guide\\IO_Pin.md",permalink:"/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/io_pin",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/IO_Pin.md",sidebar:"docs",previous:{title:"AT Command Set",permalink:"/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/at_command_set"},next:{title:"How to Use Web Configuration",permalink:"/docs/Product/Wi-Fi-Module/WizFi250/Programers-Guide/how_to_use_web_configuration"}},o=[{value:"PIN Description",id:"pin-description",children:[]},{value:"FUNCTION Pin Usage",id:"function-pin-usage",children:[]}],l={rightToc:o};function O(t){var e=t.components,a=Object(r.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"pin-description"},"PIN Description"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Pin Name")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Direction")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BOOT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IN"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enter into boot mode When boot or reset is performed, if this pin is tied low, it will enter into boot mode. Users can do APP/DCT(DCT : Device Configuration Table for WizFi250-Configuration-Data) upload or factory recovery in the boot mode through UART.",Object(i.b)("em",{parentName:"td"}," LOW : Start as boot mode "),"  HIGH: Start as application mode")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"FUNCTION"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IN"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Perform pre-defined action Perform pre-defined action at the booting or while running. This can be used when UART cannot be used.(Refer to ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#function-pin-usage"}),"FUNCTION Pin Usage"),")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LED1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OUT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicate WiFi Association When WiFi is joined (associated) with router in STA mode or with station in AP mode, it will be changed to low state (LED On). And when left(disassociated), it will be returned to high state (LED Off).\u2666 LOW (LED ON) : WiFi is Associated \u2666 HIGH(LED OFF): WiFi is Not associated")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LED2"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OUT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicate Data/Command Mode If serial (UART or SPI) interface mode is data mode, this pin will be tied low state (LED On). And if it is command mode, it will be tied high state (LED Off).\u2666 LOW (LED ON) : Data Mode \u2666 HIGH(LED OFF): Command Mode")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SPI_DATA_READY"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OUT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicates that there is data to send through SPI When WizFi250 has data to send in the SPI mode, this will be changed to high state. This pin can be used for awakening host MCU.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO 1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IN/OUT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User Defined GPIO 1 User can utilize this pin for GPIO through AT Command.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO 5"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IN/OUT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User Defined GPIO 5 User can utilize this pin for GPIO through AT Command.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO 6"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IN/OUT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User Defined GPIO 6 User can utilize this pin for GPIO through AT Command.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO 7"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IN/OUT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User Defined GPIO 7 User can utilize this pin for GPIO through AT Command.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GPIO 8"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IN/OUT"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User Defined GPIO 8 User can utilize this pin for GPIO through AT Command.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reserved for future use")))),Object(i.b)("h2",{id:"function-pin-usage"},"FUNCTION Pin Usage"),Object(i.b)("p",null,"Through the function pin, users can perform specific actions without AT Command."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Action")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"How to enter")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Factory Recovery"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"While booting or reset, keep low state (pressing the button) together with BOOT pin over 3.5 seconds")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AP Mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"During running state, tie it to low state and release it for once.Refer to time diagram below.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OTA Mode"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"While running state, tie it to low state and release it for twice.Refer to time diagram below.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Factory Default"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"During running state, tie it to low state and release it for thrice.Refer to time diagram below.")))),Object(i.b)("p",null,"Time sequence graph is as below.\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wizfi250/wizfi250pg/function_button_time_diagram.jpg",alt:null}))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Variable")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Min")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Typ")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Max")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"t1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100 ms"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200 ms")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"t2"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"100 ms"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"200 ms")))))}O.isMDXComponent=!0},579:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=r.a.createContext({}),O=function(t){var e=r.a.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=O(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},u=r.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,b=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),d=O(a),u=n,m=d["".concat(b,".").concat(u)]||d[u]||p[u]||i;return a?r.a.createElement(m,c(c({ref:e},l),{},{components:a})):r.a.createElement(m,c({ref:e},l))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,b=new Array(i);b[0]=u;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:n,b[1]=c;for(var l=2;l<i;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);