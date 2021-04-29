(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{454:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return i}));var r=n(2),c=n(6),a=(n(0),n(578)),o={id:"atcommand_tutorial-[EN]",title:"ATcommand Tutorial-[EN]",date:new Date("2020-04-16T00:00:00.000Z")},b={unversionedId:"Product/S2E-Module/WIZ550SR/atcommand_tutorial-[EN]",id:"Product/S2E-Module/WIZ550SR/atcommand_tutorial-[EN]",isDocsHomePage:!1,title:"ATcommand Tutorial-[EN]",description:"Exam 1. Example of data communication in Static IP and TCP Server mode",source:"@site/docs\\Product\\S2E-Module\\WIZ550SR\\ATcommand_Tutorial-[EN].md",permalink:"/Product/S2E-Module/WIZ550SR/atcommand_tutorial-[EN]",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/S2E-Module/WIZ550SR/ATcommand_Tutorial-[EN].md",sidebar:"docs",previous:{title:"User's Manual (Programmer's Guide)-[KO]",permalink:"/Product/S2E-Module/WIZ550SR/users_manual_programmers_guide-[KO]"},next:{title:"ATcommand Tutorial-[KO]",permalink:"/Product/S2E-Module/WIZ550SR/atcommand_tutorial-[KO]"}},l=[],p={rightToc:l};function i(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exam-1-example-of-data-communication-in-static-ip-and-tcp-server-mode"},"Exam 1. Example of data communication in Static IP and TCP Server mode"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1. Set WIZ550SR with Static IP"),"  "),Object(a.b)("p",null,"Set Network IP(192.168.3.101), Subnet Mask(255.255.255.0) and\nGateway(192.168.3.1) of WIZ550SR"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSET=S,192.168.3.101,255.255.255.0,192.168.3.1\\r\\n\n<RX> [S]\\r\\n\n")),Object(a.b)("p",null,"If you check with AT+NSTAT command after above command, you can get\nresponse like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSTAT\\r\\n\n<RX> [S,,S,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2. Set operating mode of WIZ550SR with TCP Server mode whose port\nnumber is 5000"),"  "),Object(a.b)("p",null,"Create a socket in WIZ550SR with local port number 5000"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NOPEN=S,5000\\r\\n\n<RX> [S]\\r\\n\n")),Object(a.b)("p",null,"You can check the current status of the socket which you made with\nAT+NSOCK. Below is an example of it."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSOCK=0\\r\\n\n<RX> [S,,S,5000]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3. a TCP Client connects to WIZ550SR"),"  "),Object(a.b)("p",null,"When A TCP Client of PC(or any Device) PC connected to WIZ550SR , you\nwill get a message from WIZ550SR like below"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<RX> [V,0,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4. Send data to TCP Client"),"  "),Object(a.b)("p",null,'If you send 5 bytes data "Hello" to TCP Client with AT+NSEND like below,\nyou will get two step response, Wait Response and Success Response.',Object(a.b)("br",{parentName:"p"}),"\n","[","W, 0","]"," means that WIZ550SR recognized and is processing the command\nbut it is not completed yet. And '0' means socket ID."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSEND=0,5\\r\\nHello\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},'5. Receive data "Hi" from TCP Client'),"  "),Object(a.b)("p",null,'If TCP Client sends 2 bytes data "Hi", then you will get response from\nWIZ550SR like below'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<RX> [R,0,2]\\r\\nHi\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"6. Disconnect current TCP connection"),"  "),Object(a.b)("p",null,"Do send command like below to disconnect current connection."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,"After above command, if you check the status of socket with AT+NSOCK\ncommand then you will get response like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSOCK=0\\r\\n\n<RX> [S,,I]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Appendix"),Object(a.b)("br",{parentName:"p"}),"\n","Changing mode from Data mode to Coomand mode"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> +++\n<RX> \\r\\n\\r\\n\\r\\n[W,0]\\r\\n[S,0]\\r\\n (20 Byte)\n")),Object(a.b)("p",null,"\\<Changing mode from Command mode to Data mode",">"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+MDATA\\r\\n\n<RX> [S]\\r\\n (5 Byte)\n")),Object(a.b)("h1",{id:"exam-2-example-of-retrieving-web-page-of-wwwgooglecom-in-dynamic-ip-and-tcp-client-mode"},"Exam 2. Example of retrieving web page of ",Object(a.b)("a",Object(r.a)({parentName:"h1"},{href:"http://www.google.com"}),"www.google.com")," in Dynamic IP and TCP Client mode"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1. Set WIZ550SR with Dynamic IP"),"  "),Object(a.b)("p",null,"Set WIZ550SR with Dynamic IP."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSET=D\\r\\n\n<RX> [S]\\r\\n\n")),Object(a.b)("p",null,"If you check with AT+NSTAT command after above command, you can get\nresponse like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSTAT\\r\\n\n<RX> [S,,D,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2. Get IP address of ",Object(a.b)("a",Object(r.a)({parentName:"strong"},{href:"http://www.google.com"}),"www.google.com")),"  "),Object(a.b)("p",null,"Obtain IP address of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.google.com"}),"www.google.com")," by DNS function like below command."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+FDNS=www.google.com\\r\\n\n<RX> [S,,173.194.126.168]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3. Connect to google web server"),"  "),Object(a.b)("p",null,"Make TCP Client socket to connect to google.com.",Object(a.b)("br",{parentName:"p"}),"\n","AT+NOPEN needs Server's IP address not Domain name, so you should put IP\naddress which you got by above command AT","_","FDNS",Object(a.b)("br",{parentName:"p"}),"\n","You can see that local port number was not written.",Object(a.b)("br",{parentName:"p"}),"\n","If you don't write local port number, local port number will be\nallocated dynamically by WIZ550SR."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NOPEN=C,,173.194.126.168,80\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,"You can check the current status of the socket which you made with\nAT+NSOCK. Below is an example of it."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSOCK=0\\r\\n\n<RX> [S,,C,2014,173.194.126.168,80]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4. Send data to google web server"),"  "),Object(a.b)("p",null,"Let WIZ550SR send 18 bytes data to google.com with below command"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSEND=0,18\\r\\nGET / HTTP/1.1\\r\\n\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5. receive data from google.com"),"  "),Object(a.b)("p",null,"If WIZ550SR receives data from google.com, you can know its data size\nand data like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<RX> [R,0,523]\\r\\nHTTP/1.1 302 Found\\r\\nCache-Control: private\\r\\nContent-Type: text/html; charset=UTF-8\\r\\n..............\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"6. Disconnect current TCP connection"),"  "),Object(a.b)("p",null,"Do send command like below to disconnect current connection."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("h1",{id:"exam-3-example-of-data-communication-with-more-than-two-servers-in-dynamic-ip"},"Exam 3. Example of data communication with more than two servers in Dynamic IP"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1. Set WIZ550SR with Dynamic IP"),"  "),Object(a.b)("p",null,"Set WIZ550SR with Dynamic IP."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSET=D\\r\\n\n<RX> [S]\\r\\n\n")),Object(a.b)("p",null,"If you check with AT+NSTAT command after above command, you can get\nresponse like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSTAT\\r\\n\n<RX> [S,,D,192.168.3.101,255.255.255.0,192.168.3.1,168.126.63.1]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2. Connect to the first TCP Server"),"  "),Object(a.b)("p",null,"If the first TCP Server's IP address is 192.168.3.201, its port number\nis 5000 and local port number is 2010, then You can send a command like\nbelow."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NOPEN=C,2010,192.168.3.201,5000\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,"You can check the current status of the socket which you made with\nAT+NSOCK. Below is an example of it."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSOCK=0\\r\\n\n<RX> [S,,C,2010,192.168.3.201,5000]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3. Send data to the first TCP Server"),"  "),Object(a.b)("p",null,"Send 10 bytes data to the first TCP Server like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSEND=0,10\\r\\n1111111111\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4. Disconnect the connection with the first TCP Server"),"  "),Object(a.b)("p",null,"Do below command in order to disconnect current connection."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5. Connect to the second TCP Server"),"  "),Object(a.b)("p",null,"If the second TCP Server's IP address is 192.168.3.202, its port number\nis 5000 and local port number is 2011, then You can send a command like\nbelow."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NOPEN=C,2011,192.168.3.202,5000\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"6. Send data to the second TCP Server"),"  "),Object(a.b)("p",null,"Send 10 bytes data to the second TCP Server like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSEND=0,10\\r\\n2222222222\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"7. Disconnect the connection with the second TCP Server"),"  "),Object(a.b)("p",null,"Do below command in order to disconnect current connection."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"8. Connect to the third TCP Server"),"  "),Object(a.b)("p",null,"If the third TCP Server's IP address is 192.168.3.203, its port number\nis 5000 and local port number is 2012, then You can send a command like\nbelow."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NOPEN=C,2012,192.168.3.203,5000\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"9. Send data to the third TCP Server"),"  "),Object(a.b)("p",null,"Send 10 bytes data to the third TCP Server like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSEND=0,10\\r\\n3333333333\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"10. Disconnect the connection with the third TCP Server"),"  "),Object(a.b)("p",null,"Do below command in order to disconnect current connection."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("h1",{id:"exam-4-example-of-data-communication-with-more-than-two-devices-in-static-ip"},"Exam 4. Example of data communication with more than two devices in Static IP"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1. Set WIZ550SR with Static IP"),"  "),Object(a.b)("p",null,"Set Network IP(192.168.3.101), Subnet Mask(255.255.255.0) and\nGateway(192.168.3.1) in WIZ550SR."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSET=S,192.168.3.101,255.255.255.0,192.168.3.1\\r\\n\n<RX> [S]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2. Open a UDP socket"),Object(a.b)("br",{parentName:"p"}),"\n","Open a UDP socket with its local port 5000."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NOPEN=U,5000\\r\\n\n<RX> [S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3. Get data from the first UDP device"),"  "),Object(a.b)("p",null,'If the first UDP device, which its IP address is 192.168.3.201 and port\nnumber is 4001, sent "AAAAAAAAAA"',Object(a.b)("br",{parentName:"p"}),"\n","then WIZ550SR notify to you like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<RX> [R,0,10,192.168.3.201,4001]\\r\\nAAAAAAAAAA\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4. Send data to the first UDP device"),"  "),Object(a.b)("p",null,'Send 10 bytes data "aaaaaaaaaa" to the first UDP device.'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSEND=0,10,192.168.3.201,4001\\r\\naaaaaaaaaa\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5. Get data from the second UDP device"),"  "),Object(a.b)("p",null,'If the second UDP device, which its IP address is 192.168.3.202 and port\nnumber is 4002, sent "BBBBBBBBBB"',Object(a.b)("br",{parentName:"p"}),"\n","then WIZ550SR notify to you like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<RX> [R,0,10,192.168.3.202,4002]\\r\\nBBBBBBBBBB\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"6. Send data to the second UDP device"),"  "),Object(a.b)("p",null,'Send 10 bytes data "bbbbbbbbbb" to the second UDP device.'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSEND=0,10,192.168.3.202,4002\\r\\nbbbbbbbbbb\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"7. Get data from the third UDP device"),"  "),Object(a.b)("p",null,'If the third UDP device, which its IP address is 192.168.3.203 and port\nnumber is 4003, sent "CCCCCCCCCC"',Object(a.b)("br",{parentName:"p"}),"\n","then WIZ550SR notify to you like below."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<RX> [R,0,10,192.168.3.203,4003]\\r\\nCCCCCCCCCC\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"8. Send data to the third UDP device"),"  "),Object(a.b)("p",null,'Send 10 bytes data "cccccccccc" to the second UDP device.'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NSEND=0,10,192.168.3.203,4003\\r\\ncccccccccc\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"9. Close UDP socket"),"  "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"<TX> AT+NCLOSE=0\\r\\n\n<RX> [W,0]\\r\\n[S,0]\\r\\n\n")))}i.isMDXComponent=!0},578:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),i=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=i(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,u=m["".concat(o,".").concat(d)]||m[d]||O[d]||a;return n?c.a.createElement(u,b(b({ref:t},p),{},{components:n})):c.a.createElement(u,b({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);