(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{370:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var i=n(1),r=n(9),a=(n(0),n(547)),o={id:"examples_wifi_direct",title:"Examples - WiFi Direct",date:"2020-03-"},c={id:"Product/Wi-Fi Module/WizFi250/Programers Guide/examples_wifi_direct",title:"Examples - WiFi Direct",description:"## Content",source:"@site/docs/Product/Wi-Fi Module/WizFi250/Programers Guide/Examples_-_WiFi_Direct.md",permalink:"/document_framework/docs/Product/Wi-Fi Module/WizFi250/Programers Guide/examples_wifi_direct",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/Wi-Fi Module/WizFi250/Programers Guide/Examples_-_WiFi_Direct.md",sidebar:"someSidebar",previous:{title:"Examples - Association & Disassociation",permalink:"/document_framework/docs/Product/Wi-Fi Module/WizFi250/Programers Guide/examples_association_disassociation"},next:{title:"Appendix",permalink:"/document_framework/docs/Product/Wi-Fi Module/WizFi250/Programers Guide/appendix"}},p=[{value:"Content",id:"content",children:[{value:"Examples - WiFi Direct",id:"examples---wifi-direct",children:[]},{value:"Basic Information",id:"basic-information",children:[]},{value:"WiFi Direct Start",id:"wifi-direct-start",children:[]},{value:"WiFi Direct Connect",id:"wifi-direct-connect",children:[]},{value:"Data Communication",id:"data-communication",children:[]}]}],s={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"content"},"Content"),Object(a.b)("h3",{id:"examples---wifi-direct"},"Examples - WiFi Direct"),Object(a.b)("p",null,"This section explains how to connect to smartphone using WizFi250 with\n\\<WiFi Direct",">",". In this example, target smartphone information is as\nbelow.",Object(a.b)("br",{parentName:"p"}),"\n","( smartphone model : Samsung Galaxy Note 2, Android Version : 4.3, Model\nNumber : SHV-E250S )  "),Object(a.b)("h3",{id:"basic-information"},"Basic Information"),Object(a.b)("p",null,"\\<WiFi Direct",">"," is supported after WizFi250 F/W v1.0.1.1.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"WizFi250 Version 1.0.1.1 (WIZnet Co.Ltd)\nat+minfo\nFW version/HW version\n1.0.1.1/WizFi250 Rev 1.0\n[OK]\n"),"  "),Object(a.b)("h3",{id:"wifi-direct-start"},"WiFi Direct Start"),Object(a.b)("p",null,"First, you need to enable \\<WiFi Direct",">"," in your smartphone.",Object(a.b)("br",{parentName:"p"}),"\n","And, you can start \\<WiFi Direct",">"," in WizFi250 using \\<AT+WP2P","_","START",">","\ncommand.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"AT+WP2P_START\nSTA MAC: CE:52:AF:C6:CF:B5\n[OK]\n")),Object(a.b)("h3",{id:"wifi-direct-connect"},"WiFi Direct Connect"),Object(a.b)("p",null,"To connect your smartphone to WizFi250 via \\<WiFi Direct",">",", select\n\\<WizFi250-P2P",">"," in the list as below.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-31-05.png",alt:null})),Object(a.b)("br",{parentName:"p"}),"\n","After dozens of seconds, your smartphone will connect to WizFi250 via\n\\<WiFi Direct",">",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-33-00.png",alt:null})),Object(a.b)("br",{parentName:"p"}),"\n","And you can see the result of \\<WiFi Direct",">"," in WizFi250."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{}),"AT+WP2P_START\nSTA MAC: CE:52:AF:C6:CF:B5\n[OK]\nFound P2P device: SHV-E250S\nSending Identity\nSending Identity\nSending nonce\nSending hashes\nSending WSC Done\n\n[Link-Up Event]\n  IP Addr    : 192.168.49.219\n  Gateway    : 192.168.49.1\n")),Object(a.b)("p",null,"As above, ip address of WizFi250 is \\<192.168.49.219",">"," and that of\nsmartphone is \\<192.168.49.1",">","  "),Object(a.b)("h3",{id:"data-communication"},"Data Communication"),Object(a.b)("p",null,"After the connection, you can issue\n\\<AT+SCON",">"," command for for data communication.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"at+scon=o,tsn,,,4000,0\n[OK]\n")),Object(a.b)("p",null,"And, I just used a general TCP client App in the smartphone for the\ntest.",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-34-14.png",alt:null}))),Object(a.b)("p",null,"Now, WizFi250 and smartphone can communicate each other via \\<WiFi\nDirect",">",".",Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/products/wizfi250/wizfi250pg/screenshot_2014-05-12-09-35-12.png",alt:null})),Object(a.b)("br",{parentName:"p"}),"\n","`at+scon=o,tsn,,,4000,0\n","[OK]"),Object(a.b)("p",null,"[CONNECT 0]"),Object(a.b)("p",null,"{0,192.168.49.1,47160,19}Hello WizFi250.....\n{0,192.168.49.1,47160,19}Hello WizFi250.....`"),Object(a.b)("p",null,"`"))}l.isMDXComponent=!0},547:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);