(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(516)),i={id:"twitter_test",title:"Twitter Test",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"Product/Open-Source-Hardware/twitter_test",id:"Product/Open-Source-Hardware/twitter_test",isDocsHomePage:!1,title:"Twitter Test",description:"Before Compile",source:"@site/docs\\Product\\Open-Source-Hardware\\test_twitter.md",permalink:"/docs/Product/Open-Source-Hardware/twitter_test",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/test_twitter.md"},l=[{value:"Before Compile",id:"before-compile",children:[]},{value:"Change code &amp; Compile",id:"change-code--compile",children:[]},{value:"Result",id:"result",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"before-compile"},"Before Compile"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Before tweeting, get a token at ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://arduino-tweet.appspot.com/"}),"http://arduino-tweet.appspot.com/"),"\n. This library send a tweet via the site to avoid using up the\nmemory of Arduino by complex OAuth signature stuff.\n",Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/img/osh/ioshield-a/tweet_library_for_arduino.png",alt:null}))),Object(a.b)("li",{parentName:"ol"},"Then you can get the token-code.\n",Object(a.b)("img",Object(n.a)({parentName:"li"},{src:"/img/osh/ioshield-a/arduino_tweet_lib_token.png",alt:null}))),Object(a.b)("li",{parentName:"ol"},'Update new "Ethernet" library for ioShield. please refer ',Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/osh/ioshield-a/updatelib"}),"Update\nEthernet Library")),Object(a.b)("li",{parentName:"ol"},'You can see an example sketch from "File -',">"," Examples -",">"," Ethernet\n-",">"," Twitter","_",'SimplePost".'),Object(a.b)("li",{parentName:"ol"},"Done","~","~","."),Object(a.b)("li",{parentName:"ol"},"original source from\n",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://playground.arduino.cc/Code/TwitterLibrary"}),"http://playground.arduino.cc/Code/TwitterLibrary"))),Object(a.b)("h2",{id:"change-code--compile"},"Change code & Compile"),Object(a.b)("p",null,"You need to create an instance of Twitter class like below:"),Object(a.b)("p",null,"in Twitter","_","SimplePost.ino.."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),'// If you don\'t specify the IP address, DHCP is used(only in Arduino 1.0 or later).\n// fill in an available IP address on your network here,\nIPAddress ip(1,1,1,1);\nIPAddress gw(1,1,1,1);\nIPAddress snip(1,1,1,1);\nIPAddress dnsip(1,1,1,1);\n\n// Your Token to Tweet (get it from http://arduino-tweet.appspot.com/)\nTwitter twitter("YOUR-TOKEN-HERE"); // this was YourID:Password in 1.0.1\n')),Object(a.b)("p",null,"You need also to refer ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"http://arduino.cc/en/Reference/EthernetBegin"}),"begin Ethernet\nlibrary"),"."),Object(a.b)("p",null,"please refer the below image to change code.\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/osh/ioshield-a/cap_2013-08-19_15-09-30-656.png",alt:null}))),Object(a.b)("p",null,"and compile, upload code on your Arduino Board."),Object(a.b)("h2",{id:"result"},"Result"),Object(a.b)("p",null,"During the run the program, You can see the log message via Serial\nMonitor as follow: ",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/osh/ioshield-a/cap_2013-08-19_15-08-00-229.png",alt:null}))),Object(a.b)("hr",null),Object(a.b)("p",null,"and, you can see the first message in your twitter timeline as follow:\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/osh/ioshield-a/twitter.png",alt:null}))))}u.isMDXComponent=!0},516:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);