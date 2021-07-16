(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[30464],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=u(n),c=r,N=d["".concat(o,".").concat(c)]||d[c]||k[c]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77551:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],p={id:"spi_performance",title:"SPI Performance",date:new Date("2020-04-07T00:00:00.000Z")},o=void 0,u={unversionedId:"Product/iEthernet/W5500/Application/spi_performance",id:"Product/iEthernet/W5500/Application/spi_performance",isDocsHomePage:!1,title:"SPI Performance",description:"W5500 Performance",source:"@site/docs/Product/iEthernet/W5500/Application/SPI_Performance.md",sourceDirName:"Product/iEthernet/W5500/Application",slug:"/Product/iEthernet/W5500/Application/spi_performance",permalink:"/Product/iEthernet/W5500/Application/spi_performance",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/Application/SPI_Performance.md",version:"current",frontMatter:{id:"spi_performance",title:"SPI Performance",date:"2020-04-07T00:00:00.000Z"},sidebar:"docs",previous:{title:"PPPoE",permalink:"/Product/iEthernet/W5500/Application/pppoe"},next:{title:"ESD Test Document",permalink:"/Product/iEthernet/W5500/Application/esd_test_document"}},m=[{value:"W5500 Performance",id:"w5500-performance",children:[{value:"W5500 SPI transmission",id:"w5500-spi-transmission",children:[]},{value:"Data throughput according to SPI clock speed",id:"data-throughput-according-to-spi-clock-speed",children:[]}]}],k={toc:m};function d(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"w5500-performance"},"W5500 Performance"),(0,l.kt)("h3",{id:"w5500-spi-transmission"},"W5500 SPI transmission"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cortex-M3 ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"loopback-testonly-tcps1ch"},"Loopback Test(Only TCPs/1CH)"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MCU : STM32F103C8 -\nDevelopment Tool : CoIDE v1.7.4 - ARM Ver : 4.7 2013q2 - Main Clock :\n72MHz, SPI Clock(Max) : 36MHz - Test Project\n:",(0,l.kt)("a",{href:"/img/products/w5500/application/w5500_spi_performance.zip",target:"_blank"},"W5500_SPI_Performance.zip")),(0,l.kt)("li",{parentName:"ul"},"Test Tool : AX2, unit of measure: Mbps")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"buf(KB)","\\","socket(KB)"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"4"),(0,l.kt)("th",{parentName:"tr",align:null},"8"),(0,l.kt)("th",{parentName:"tr",align:null},"16"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2.648"),(0,l.kt)("td",{parentName:"tr",align:null},"3.208"),(0,l.kt)("td",{parentName:"tr",align:null},"3.208"),(0,l.kt)("td",{parentName:"tr",align:null},"3.208"),(0,l.kt)("td",{parentName:"tr",align:null},"3.195")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"2.779"),(0,l.kt)("td",{parentName:"tr",align:null},"3.342"),(0,l.kt)("td",{parentName:"tr",align:null},"3.337"),(0,l.kt)("td",{parentName:"tr",align:null},"3.337")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"3.384"),(0,l.kt)("td",{parentName:"tr",align:null},"3.407"),(0,l.kt)("td",{parentName:"tr",align:null},"3.407")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"3.441"),(0,l.kt)("td",{parentName:"tr",align:null},"3.443")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"3.284")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"buf : memory of MCU"),"/",(0,l.kt)("strong",{parentName:"li"},"socket : socket size of W5500")," ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cortex-M0",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"loopback-testonly-tcps1ch-1"},"Loopback Test(Only TCPs/1CH)"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MCU : M0516LBN -\nDevelopment Tool : CoIDE v1.7.4 - ARM Ver : 4.7 2013q2 - Main Clock :\n50MHz, SPI Clock(Max) : 25MHz - Test Project\n:",(0,l.kt)("a",{href:"/img/products/w5500/application/w5500_spi_performance.zip",target:"_blank"},"W5500_SPI_Performance.zip")),(0,l.kt)("li",{parentName:"ul"},"Test Tool : AX2, unit of measure : Mbps")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"buf(KB)","\\","socket(KB)"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"4"),(0,l.kt)("th",{parentName:"tr",align:null},"8"),(0,l.kt)("th",{parentName:"tr",align:null},"16"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1.49"),(0,l.kt)("td",{parentName:"tr",align:null},"1.624"),(0,l.kt)("td",{parentName:"tr",align:null},"1.624"),(0,l.kt)("td",{parentName:"tr",align:null},"1.624"),(0,l.kt)("td",{parentName:"tr",align:null},"1.624")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"1.592"),(0,l.kt)("td",{parentName:"tr",align:null},"1.693"),(0,l.kt)("td",{parentName:"tr",align:null},"1.693"),(0,l.kt)("td",{parentName:"tr",align:null},"1.693")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* Memory Size (Flash/SRAM)\n  * STMicro STM32F103C8 (64KB / 20KB)\n  * Nuvoton M0516LBN    (64KB / 4KB)\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"data-throughput-according-to-spi-clock-speed"},"Data throughput according to SPI clock speed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cortex-M3",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"loopback-test"},"Loopback Test"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MCU : STM32F103C8 - Development Tool :\nCoIDE v1.7.4 - ARM Ver : 4.7 2013q2 - Main Clock : 72MHz, SPI Clock :\n36MHz/18MHz/9MHz/4.5MHz/2.25MHz/1.12MHz/0.562Mz/0.281MHz - Test Project: ",(0,l.kt)("a",{href:"/img/products/w5500/application/w5500_spispeed_test_loopback_20140212.zip",target:"_blank"},"SPI_SPEEP_TEST.zip")),(0,l.kt)("li",{parentName:"ul"},"Test Setting : Only TCPs / 1CH / Databuf(2K) / No Delay ack X - Test\nTool : AX2, unit of measure : Mbps")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Hz /socket(KB)"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"4"),(0,l.kt)("th",{parentName:"tr",align:null},"8"),(0,l.kt)("th",{parentName:"tr",align:null},"16"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.281M"),(0,l.kt)("td",{parentName:"tr",align:null},"0.124"),(0,l.kt)("td",{parentName:"tr",align:null},"0.126"),(0,l.kt)("td",{parentName:"tr",align:null},"0.129"),(0,l.kt)("td",{parentName:"tr",align:null},"0.129"),(0,l.kt)("td",{parentName:"tr",align:null},"0.129")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.562M"),(0,l.kt)("td",{parentName:"tr",align:null},"0.243"),(0,l.kt)("td",{parentName:"tr",align:null},"0.249"),(0,l.kt)("td",{parentName:"tr",align:null},"0.257"),(0,l.kt)("td",{parentName:"tr",align:null},"0.257"),(0,l.kt)("td",{parentName:"tr",align:null},"0.257")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.12M"),(0,l.kt)("td",{parentName:"tr",align:null},"0.447"),(0,l.kt)("td",{parentName:"tr",align:null},"0.456"),(0,l.kt)("td",{parentName:"tr",align:null},"0.484"),(0,l.kt)("td",{parentName:"tr",align:null},"0.484"),(0,l.kt)("td",{parentName:"tr",align:null},"0.484")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2.25M"),(0,l.kt)("td",{parentName:"tr",align:null},"0.761"),(0,l.kt)("td",{parentName:"tr",align:null},"0.779"),(0,l.kt)("td",{parentName:"tr",align:null},"0.863"),(0,l.kt)("td",{parentName:"tr",align:null},"0.863"),(0,l.kt)("td",{parentName:"tr",align:null},"0.863")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4.5M"),(0,l.kt)("td",{parentName:"tr",align:null},"1.196"),(0,l.kt)("td",{parentName:"tr",align:null},"1.226"),(0,l.kt)("td",{parentName:"tr",align:null},"1.417"),(0,l.kt)("td",{parentName:"tr",align:null},"1.418"),(0,l.kt)("td",{parentName:"tr",align:null},"1.418")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9M"),(0,l.kt)("td",{parentName:"tr",align:null},"1.621"),(0,l.kt)("td",{parentName:"tr",align:null},"1.671"),(0,l.kt)("td",{parentName:"tr",align:null},"2.090"),(0,l.kt)("td",{parentName:"tr",align:null},"2.090"),(0,l.kt)("td",{parentName:"tr",align:null},"2.093")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"18M"),(0,l.kt)("td",{parentName:"tr",align:null},"2.055"),(0,l.kt)("td",{parentName:"tr",align:null},"2.108"),(0,l.kt)("td",{parentName:"tr",align:null},"2.738"),(0,l.kt)("td",{parentName:"tr",align:null},"2.738"),(0,l.kt)("td",{parentName:"tr",align:null},"2.738")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"36M"),(0,l.kt)("td",{parentName:"tr",align:null},"2.435"),(0,l.kt)("td",{parentName:"tr",align:null},"2.534"),(0,l.kt)("td",{parentName:"tr",align:null},"3.501"),(0,l.kt)("td",{parentName:"tr",align:null},"3.501"),(0,l.kt)("td",{parentName:"tr",align:null},"3.501")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SPI36MHz / SOCKBUF16K / DATABUF16K / No Delay ACK : ",(0,l.kt)("strong",{parentName:"li"},"3.63Mbps")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"socket : socket size of W5500")," "),(0,l.kt)("li",{parentName:"ul"},"Test result :\n",(0,l.kt)("a",{target:"_blank",href:n(68751).Z},"SPI_SPEED_TEST.xls"))))}d.isMDXComponent=!0},68751:function(t,e,n){"use strict";e.Z=n.p+"assets/files/spi_speed-80a9a785c488db7e4b3629ef4a57ffc2.xlsx"}}]);