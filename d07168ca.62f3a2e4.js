(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{497:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(9),o=(n(0),n(582)),i={},c={id:"Product/iMCU/W7500P/Peripherals-internal/tcp_function",title:"tcp_function",description:"# W7500 TCP Function\r",source:"@site/docs\\Product\\iMCU\\W7500P\\Peripherals-internal\\tcp_function.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/tcp_function",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/tcp_function.md"},s=[{value:"Initialization",id:"initialization",children:[{value:"Basic Setting",id:"basic-setting",children:[]},{value:"Setting network information",id:"setting-network-information",children:[]},{value:"Set socket memory information",id:"set-socket-memory-information",children:[]}]},{value:"Data Communications",id:"data-communications",children:[{value:"TCP",id:"tcp",children:[]},{value:"TCP SERVER",id:"tcp-server",children:[]},{value:"TCP CLIENT",id:"tcp-client",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"w7500-tcp-function"},"W7500 TCP Function"),Object(o.b)("p",null,"By setting some register and memory operation, W7500 provides internet\nconnectivity. This chapter describes how it can be operated."),Object(o.b)("h2",{id:"initialization"},"Initialization"),Object(o.b)("h3",{id:"basic-setting"},"Basic Setting"),Object(o.b)("p",null,"For the W7500 operation, select and utilize appropriate registers shown\nbelow."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Mode Register (MR)"),Object(o.b)("li",{parentName:"ol"},"Interrupt Mask Register (IMR)"),Object(o.b)("li",{parentName:"ol"},"Retry Time-value Register (RTR)"),Object(o.b)("li",{parentName:"ol"},"Retry Count Register (RCR)")),Object(o.b)("p",null,"For more information of above registers, refer to the \u201cRegister\nDescriptions.\u201d"),Object(o.b)("h3",{id:"setting-network-information"},"Setting network information"),Object(o.b)("p",null,"Basic network information setting for communication: It must be set the\nbasic network information."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"SHAR(Source Hardware Address Register)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It is prescribed that the source hardware addresses, which is\nset by SHAR, use unique hardware addresses (Ethernet MAC\naddress) in the Ethernet MAC layer. The IEEE manages the MAC\naddress allocation. The manufacturer which produces the network\ndevice allocates the MAC address to product."),Object(o.b)("li",{parentName:"ul"},"Details on MAC address allocation refer to the website as below."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.ieee.org/"}),"http://www.ieee.org/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://standards.ieee.org/regauth/oui/index.shtml"}),"http://standards.ieee.org/regauth/oui/index.shtml")))),Object(o.b)("li",{parentName:"ol"},"GAR(Gateway Address Register)"),Object(o.b)("li",{parentName:"ol"},"SUBR(Subnet Mask Register)"),Object(o.b)("li",{parentName:"ol"},"SIPR(Source IP Address Register)")),Object(o.b)("h3",{id:"set-socket-memory-information"},"Set socket memory information"),Object(o.b)("p",null,"This stage sets the socket tx/rx memory information. The base address\nand mask address of each socket are fixed and saved in this stage."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"In case of, assign 2KB rx, tx memroy per SOCKET")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"In case of, assign 2KB rx, tx memory per SOCKET\n{\nSn_RXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET\nSn_TXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET\n\n/* Same method, set gS1_TX_BASE, gS1_TX_MASK, gS2_TX_BASE, gS2_TX_MASK,\ngS3_TX_BASE, gS3_TX_MASK, gS4_TX_BASE, gS4_TX_MASK, gS5_TX_BASE, gS5_TX_MASK,\ngS6_TX_BASE, gS6_tx_MASK, gS7_TX_BASE, gS7_TX_MASK */\n}\n")),Object(o.b)("h2",{id:"data-communications"},"Data Communications"),Object(o.b)("p",null,"After the initialization process, W7500 can transmit and receive the\ndata with others by \u2018open\u2019 the SOCKET of TCP, UDP, IPRAW, and MACRAW\nmode. The W7500 supports the independently and simultaneously usable 8\nSOCKETS. In this section, the communication method for each mode will be\nintroduced."),Object(o.b)("h3",{id:"tcp"},"TCP"),Object(o.b)("p",null,"The TCP is a connection-oriented protocol. The TCP make the connection\nSOCKET by using its own IP address, port number and destination IP\naddress, port number. Then transmits and receives the data by using this\nSOCKET. Methods of making the connection to SOCKET are \u201cTCP SERVER\u201d and\n\u201cTCP CLIENT\u201d. It is divided by transmitting the connect-request (SYN\npacket). The \u201cTCP SERVER\u201d listens to the connect-request from the \u201cTCP\nCLIENT\u201d, and makes connection SOCKET by accepting the transmitted\nconnect-request (Passive-open). The \u201cTCP CLIENT\u201d transmits the\nconnect-request first to \u201cTCP SERVER\u201d to make the connection\n(Active-open)."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/serverclient.jpg",alt:"TCP SERVER and TCP\nCLIENT"}))),Object(o.b)("h3",{id:"tcp-server"},"TCP SERVER"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/server_flow.jpg",alt:"TCP SERVER Operation\nFlow"}))),Object(o.b)("h5",{id:"socket-initialization"},"SOCKET Initialization"),Object(o.b)("p",null,"SOCKET initialization is required for TCP data communication. The\ninitialization is opening the SOCKET. The SOCKET opening process selects\none SOCKET from 8 SOCKETS of the W7500, and sets the protocol mode\n(Sn","_","MR) and Sn","_","PORT0 which is source port number (Listen port number\nin \u201cTCP SERVER\u201d) in the selected SOCKET, and then executes OPEN command.\nAfter the OPEN command, if the status of Sn","_","SR is changed to\nSOCK","_","INIT, the SOCKET initialization process is completed. The SOCKET\ninitialization process is identically applied in \u201cTCP SERVER\u201d and \u201cTCP\nCLIENT.\u201dThe Initialization process of Socket n in TCP mode is shown\nbelow."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\nSTART:\nSn_MR = 0x01; // sets TCP mode\nSn_PORT0 = source_port; // sets source port number\nSn_CR = OPEN; // sets OPEN command\n/* wait until Sn_SR is changed to SOCK_INIT */\nif (Sn_SR != SOCK_INIT) Sn_CR = CLOSE; goto START;\n}\n")),Object(o.b)("h5",{id:"listen"},"LISTEN"),Object(o.b)("p",null,"Run as \u201cTCP SERVER\u201d by LISTEN command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* listen SOCKET */\nSn_CR = LISTEN;\n/* wait until Sn_SR is changed to SOCK_LISTEN */\nif (Sn_SR != SOCK_LISTEN) Sn_CR = CLOSE; goto START;\n}\n")),Object(o.b)("h5",{id:"establishment"},"ESTABLISHMENT"),Object(o.b)("p",null,"When the status of Sn","_","SR is SOCK","_","LISTEN, if it receives a SYN packet,\nthe status of Sn","_","SR is changed to SOCK","_","SYNRECV and transmits the\nSYN/ACK packet. After that, the Socket n makes a connection. After it\nmakes the connection of Socket n , it enables the data communication.\nThere are two methods to confirm the connection of Socket n ."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\nif (Sn_IR(CON) == \u20181\u2019)\n/* When an interrupt occurs and the mask bit of Sn_IMR is \u20181\u2019, the interrupt bit of Sn_IR\nbecomes \u20181\u2019 */\nSn_IR(CON) = \u20181\u2019;\n/*In order to clear the Sn_IR bit, the host should write the bit as \u20181\u2019. When all the bits of\nSn_IR is cleared (\u20180\u2019), IR(n) is automatically cleared.*/\ngoto ESTABLISHED stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond method :\n{\nif (Sn_SR == SOCK_ESTABLISHED) goto ESTABLISHED stage;\n}\n")),Object(o.b)("h5",{id:"establishment--check-received-data"},"ESTABLISHMENT : Check received data"),Object(o.b)("p",null,"Confirm the reception of the TCP data."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\nif (Sn_IR(RECV) == \u20181\u2019) Sn_IR(RECV) = \u20181\u2019; goto Receiving Process stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond Method :\n{\nif (Sn_RX_RSR0 != 0x0000) goto Receiving Process stage;\n}\n")),Object(o.b)("p",null,"The First method: set the Sn","_","IR(RECV) to \u20181\u2019 whenever you receive a\nDATA packet. If the host receives the next DATA packet without setting\nthe Sn","_","IR(RECV) as \u20181\u2019 in the prior DATA packet, it cannot recognize\nthe Sn","_","IR(RECV) of the next DATA packet. This is due to the prior\nSn","_","IR(RECV) and next Sn","_","IR(RECV) being overlapped. So this method is\nnot recommended if the host cannot perfectly process the DATA packets of\neach Sn","_","IR(RECV)."),Object(o.b)("h5",{id:"establishment--receiving-process"},"ESTABLISHMENT : Receiving process"),Object(o.b)("p",null,"In this process, it processes the TCP data which was received in the\nInternal RX memory. At the TCP mode, the W7500 cannot receive the data\nif the size of received data is larger than the RX memory free size of\nSocket n . If the prior stated condition is happened, the W7500 holds on\nto the connection (pauses), and waits until the RX memory\u2019s free size is\nlarger than the size of the received data."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* first, get the received size */\nlen = Sn_RX_RSR; // len is received size\n/* select RX memory, refer to Datasheet 14 page */\ncntl_byte = Socket_n_RX_Buffer \n/* Get offset address */\nsrc_ptr = Sn_RX_RD;\n/* set memory copy len bytes of source_ptr to destination_address */\nfor (i=0; i<len; i++)\n{\n   *(dst_ptr+i) = W5500_READ(addr, cntl_byte, src_ptr+i);\n}\n/* increase Sn_RX_RD as length of len */\nSn_RX_RD += len;\n/* set RECV command */\nSn_CR = RECV;\n}\n")),Object(o.b)("h5",{id:"establishment-check-send-data--send-process"},"ESTABLISHMENT: Check send data / Send process"),Object(o.b)("p",null,"The size of the transmit data cannot be larger than assigned internal TX\nmemory of Socket n. If the size of transmit data is larger than\nconfigured MSS, it is divided by size of MSS and transmits. To transmit\nthe next data, user must check the completion of prior SEND command. An\nerror may occur if the SEND command executes before completion of prior\nSEND command. The larger the data size, the more time to complete the\nSEND command. So the user should properly divide the data to transmit.",Object(o.b)("br",{parentName:"p"}),"\n","To check the completion of the SEND command, it should be check that the\nsend data length is equal with the actual sent data length. The actual\nsent data length is calculated by the difference of the Sn","_","TX","_","RD\nbefore and after performing the SEND command. If the actual sent data is\nless than the send data length, the SEND command is retried for sending\nthe left data. The send process is therefore completed the SENDwhen the\nsum of the actual sent data is equal the send data length. A simple\nexample of the send process is as below",Object(o.b)("br",{parentName:"p"}),"\n","Ex) Send Data Length Size= 10,",Object(o.b)("br",{parentName:"p"}),"\n","-"," ",Object(o.b)("strong",{parentName:"p"},"Execute SEND Command with send data length")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Calculate the actual sent data length"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If the actual sent data length is 7 (=\nSn","_","TX","_","RD","_","after","_","SEND-Sn","_","TX","_","RD","_","befor","_","SEND),"),Object(o.b)("li",{parentName:"ul"},"the left Data length= 3"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Retry SEND Command until the sum of the actual sent data length is\nsame the send data length."),Object(o.b)("br",{parentName:"li"}),"Note: Don\u2019t copy data until the sum of the actual sent data length\nis the send data length.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* first, get the free TX memory size */\nFREESIZE:\nfreesize = Sn_TX_FSR;\nif (freesize<len) goto FREESIZE; // len is send size\n\n/* select TX memory, refer to Datasheet 14 page */\ncntl_byte = Socket_n_TX_Buffer \n/* Get offset address */\ndst_ptr = Sn_TX_RD;\n/* set memory copy len bytes of source_ptr to destination_address */\nfor (i=0; i<len; i++)\n{\n   W5500_WRITE(addr, cntl_byte, dst_ptr+i);\n}\n\n/* increase Sn_TX_WR as length of len */\nSn_TX_WR += send_size;\n/* set SEND command */\nSn_CR = SEND;\n/* return real packet size */\nreturn len;\n}\n")),Object(o.b)("h5",{id:"establishment--check-disconnect-requestfin-packet"},"ESTABLISHMENT : Check disconnect-request(FIN packet)"),Object(o.b)("p",null,"Check if the Disconnect-request(FIN packet) has been received. User can\nconfirm the reception of FIN packet as below."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\nif (Sn_IR(DISCON) == \u20181\u2019) Sn_IR(DISCON)=\u20181\u2019; goto CLOSED stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond method :\n{\nif (Sn_SR == SOCK_CLOSE_WAIT) goto CLOSED stage;\n}\n")),Object(o.b)("h5",{id:"establishment--check-disconnect--disconnecting-process"},"ESTABLISHMENT : Check disconnect / disconnecting process"),Object(o.b)("p",null,"When the user does not need data communication with others, or receives\na FIN packet, disconnect the connection SOCKET."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* set DISCON command */\nSn_CR = DISCON;\n}\n")),Object(o.b)("h5",{id:"establishment--check-closed"},"ESTABLISHMENT : Check closed"),Object(o.b)("p",null,"Confirm that the Socket n is disconnected or closed by DISCON or close\ncommand."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\nif (Sn_IR(DISCON) == \u20181\u2019) goto CLOSED stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond method :\n{\nif (Sn_SR == SOCK_CLOSED) goto CLOSED stage;\n}\n")),Object(o.b)("h5",{id:"establishment-timeout"},"ESTABLISHMENT: Timeout"),Object(o.b)("p",null,"The timeout can occur by Connect-request(SYN packet) or its\nresponse(SYN/ACK packet), the DATA packet or its response(DATA/ACK\npacket), the Disconnectrequest FIN packet) or its response(FIN/ACK\npacket) and transmission all TCP packet. If it cannot transmit the above\npackets within \u2018timeout\u2019 which is configured at RTR and RCR, the TCP\nfinal timeout(TCP",Object(o.b)("sub",null,"TO"),") occurs and the state of Sn","_","SR is set to\nSOCK","_","CLOSED. Confirming method of the TCP",Object(o.b)("sub",null,"TO")," is as below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\nif (Sn_IR(TIMEOUT bit) == \u20181\u2019) Sn_IR(TIMEOUT)=\u20181\u2019; goto CLOSED stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond method :\n{\nif (Sn_SR == SOCK_CLOSED) goto CLOSED stage;\n}\n")),Object(o.b)("h5",{id:"socket-close"},"SOCKET Close"),Object(o.b)("p",null,"It can be used to close the Socket n , which disconnected by\ndisconnect-process, or closed by TCP",Object(o.b)("sub",null,"TO")," or closed by host\u2019s\nneed without disconnect-process."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* clear the remained interrupts of Socket n */\nSn_IR = 0xFF;\nIR(n) = \u20181\u2019;\n/* set CLOSE command */\nSn_CR = CLOSE;\n}\n")),Object(o.b)("h3",{id:"tcp-client"},"TCP CLIENT"),Object(o.b)("p",null,'It is same as TCP server except \u2018CONNECT\u2019 state. User can refer to the\nabove "TCP SERVER\u201d section.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/client_flow.jpg",alt:"TCP CLIENT Operation\nFlow"}))),Object(o.b)("h5",{id:"connect"},"CONNECT"),Object(o.b)("p",null,"Transmit the connect-request (SYN packet) to \u201cTCP SERVER\u201d. It may occurs\nthe timeout such as ARP",Object(o.b)("sub",null,"TO"),", TCP",Object(o.b)("sub",null,"TO")," when make the\n\u201cconnection SOCKET\u201d with \u201cTCP SERVER\u201d"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\nSn_DIPR0 = server_ip; /* set TCP SERVER IP address*/\nSn_DPORT0 = server_port; /* set TCP SERVER listen port number*/\nSn_CR = CONNECT; /* set CONNECT command */\n}\n")))}d.isMDXComponent=!0},582:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,m=b["".concat(i,".").concat(p)]||b[p]||h[p]||o;return n?r.a.createElement(m,c({ref:t},l,{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);