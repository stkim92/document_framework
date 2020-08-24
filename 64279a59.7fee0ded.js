(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{249:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(581)),s={id:"udp",title:"W5500 UDP Function",date:new Date("2020-04-07T00:00:00.000Z")},i={unversionedId:"Product/iEthernet/W5500/Application/udp",id:"Product/iEthernet/W5500/Application/udp",isDocsHomePage:!1,title:"W5500 UDP Function",description:"By setting some register and memory operation, W5500 provides internet",source:"@site/docs\\Product\\iEthernet\\W5500\\Application\\UDP.md",permalink:"/docs/Product/iEthernet/W5500/Application/udp",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5500/Application/UDP.md",sidebar:"docs",previous:{title:"W5500 TCP Function",permalink:"/docs/Product/iEthernet/W5500/Application/tcp"},next:{title:"IPRAW",permalink:"/docs/Product/iEthernet/W5500/Application/ipraw"}},c=[{value:"Initialization",id:"initialization",children:[{value:"Basic Setting",id:"basic-setting",children:[]},{value:"Setting network information",id:"setting-network-information",children:[]},{value:"Set socket memory information",id:"set-socket-memory-information",children:[]}]},{value:"Data Communications",id:"data-communications",children:[{value:"UDP",id:"udp",children:[]},{value:"Unicast and Broadcast",id:"unicast-and-broadcast",children:[]},{value:"Multicast",id:"multicast",children:[]}]}],d={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By setting some register and memory operation, W5500 provides internet\nconnectivity. This chapter describes how it can be operated."),Object(o.b)("h2",{id:"initialization"},"Initialization"),Object(o.b)("p",null,"You ",Object(o.b)("strong",{parentName:"p"},"must check PHY LINK"),"\n",Object(o.b)("em",{parentName:"p"},"(0 bit of PHYCFGR)")," ",Object(o.b)("strong",{parentName:"p"},"before attempting to make a network connection"),"\nusing sockets. "),Object(o.b)("h3",{id:"basic-setting"},"Basic Setting"),Object(o.b)("p",null,"For the W5500 operation, select and utilize appropriate registers shown\nbelow."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Mode Register (MR)"),Object(o.b)("li",{parentName:"ol"},"Interrupt Mask Register (IMR)"),Object(o.b)("li",{parentName:"ol"},"Retry Time-value Register (RTR)"),Object(o.b)("li",{parentName:"ol"},"Retry Count Register (RCR)")),Object(o.b)("p",null,"For more information of above registers, refer to the \u201cRegister\nDescriptions.\u201d"),Object(o.b)("h3",{id:"setting-network-information"},"Setting network information"),Object(o.b)("p",null,"Basic network information setting for communication: It must be set the\nbasic network information."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"SHAR(Source Hardware Address Register)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It is prescribed that the source hardware addresses, which is\nset by SHAR, use unique hardware addresses (Ethernet MAC\naddress) in the Ethernet MAC layer. The IEEE manages the MAC\naddress allocation. The manufacturer which produces the network\ndevice allocates the MAC address to product."),Object(o.b)("li",{parentName:"ul"},"Details on MAC address allocation refer to the website as below."),Object(o.b)("li",{parentName:"ul"},"\ud83c\udf0e ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.ieee.org/"}),"http://www.ieee.org/")),Object(o.b)("li",{parentName:"ul"},"\ud83c\udf0e ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"http://standards.ieee.org/regauth/oui/index.shtml"}),"http://standards.ieee.org/regauth/oui/index.shtml")))),Object(o.b)("li",{parentName:"ol"},"GAR(Gateway Address Register)"),Object(o.b)("li",{parentName:"ol"},"SUBR(Subnet Mask Register)"),Object(o.b)("li",{parentName:"ol"},"SIPR(Source IP Address Register)")),Object(o.b)("h3",{id:"set-socket-memory-information"},"Set socket memory information"),Object(o.b)("p",null,"This stage sets the socket tx/rx memory information. The base address\nand mask address of each socket are fixed and saved in this stage."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"In case of, assign 2KB rx, tx memroy per SOCKET"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"In case of, assign 2KB rx, tx memory per SOCKET\n{\nSn_RXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET\nSn_TXMEM_SIZE(ch) = (uint8 *) 2; // Assign 2K rx memory per SOCKET\n\n/* Same method, set gS1_TX_BASE, gS1_TX_MASK, gS2_TX_BASE, gS2_TX_MASK,\ngS3_TX_BASE, gS3_TX_MASK, gS4_TX_BASE, gS4_TX_MASK, gS5_TX_BASE, gS5_TX_MASK,\ngS6_TX_BASE, gS6_tx_MASK, gS7_TX_BASE, gS7_TX_MASK */\n}\n")),Object(o.b)("h2",{id:"data-communications"},"Data Communications"),Object(o.b)("p",null,"After the initialization process, W5500 can transmit and receive the\ndata with others by \u2018open\u2019 the SOCKET of TCP, UDP, IPRAW, and MACRAW\nmode. The W5500 supports the independently and simultaneously usable 8\nSOCKETS. In this section, the communication method for each mode will be\nintroduced."),Object(o.b)("h3",{id:"udp"},"UDP"),Object(o.b)("p",null,"The UDP is a Connection-less protocol. It communicates without\n\u201cconnection SOCKET.\u201d The TCP protocol guarantees reliable data\ncommunication, but the UDP protocol uses datagram communication which\nhas no guarantees of data communication. Because the UDP does not use\n\u201cconnection SOCKET,\u201d it can communicate with many other devices with\nthe known host IP address and port number. This is a great advantage;\ncommunication with many others by using just one SOCKET, but also it has\nmany problems such as loss of transmitted data, unwanted data received\nfrom others, etc. To avoid these problems and guarantee reliability, the\nhost retransmits damaged data or ignores the unwanted data which is\nreceived from others. The UDP protocol supports unicast, broadcast, and\nmulticast communication. It follows the below communication flow."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5500/application/udp_flow.jpg",alt:"UDP Operation Flow"}))),Object(o.b)("h3",{id:"unicast-and-broadcast"},"Unicast and Broadcast"),Object(o.b)("p",null,"The unicast is one method of UDP communication. It transmits data to one\ndestination at one time. On the other hand, the broadcast communication\ntransmits data to all receivable destinations by using \u2018broadcast IP\naddress (255.255.255.255)\u2019. For example, suppose that the user transmits\ndata to destination A, B, and C. The unicast communication transmits\neach destination A, B, and C at each time. At this time, the\nARP",Object(o.b)("sub",null,"TO")," can also occur when the user gets the destination\nhardware address of destinations A, B and C. User cannot transmit data\nto destinations which have ARP",Object(o.b)("sub",null,"TO"),". The broadcast communication\ncan simultaneously transmit data to destination A, B and C at one time\nby using \u201c255.255.255.255\u201d or \u201clocal address | (","~","subnet address)\u201d IP\naddress. At this time, there is no need to get the destination hardware\naddress about destination A, B and C, and also ARP",Object(o.b)("sub",null,"TO"),"is not\noccurred."),Object(o.b)("h5",{id:"note-broadcast-ip"},"Note: Broadcast IP"),Object(o.b)("p",null,"=> The Broadcast IP address can be obtained by performing a bit-wise\nlogical OR operation between the bit complement of the subnet mask and\nthe host\u2019s IP address.",Object(o.b)("br",{parentName:"p"}),"\n","ex",">"," If IP:\u201d222.98.173.123\u201d and the subnet mask:\u201c255.255.255.0\u201d,\nbroadcast IP is \u201c222.98.173.255\u201d"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Decimal"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Binary"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HOST IP"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"222.098.173.123"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"11011110.01100010.10101101.01111011")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bit Complement Subnet mask"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"000.000.000.255"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"00000000.00000000.00000000.11111111")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bitwise OR"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Broadcast IP"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"222.098.173.255"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"11011110.01100010.10101101.11111111")))),Object(o.b)("h5",{id:"socket-initialization"},"SOCKET Initialization"),Object(o.b)("p",null,"For the UDP data communication, SOCKET initialization is required; it\nopens the SOCKET. The SOCKET open process is as followed. At first,\nchoose one SOCKET among the 8 SOCKETS of W5500, then set the protocol\nmode (Sn","_","MR(P3:P0)) of the chosen SOCKET and set the source port number\nSn","_","PORT0 for communication. Finally, execute the OPEN command. After\nthe OPEN command, the state of Sn","_","SR is changed to SOCK","_","UDP. Then the\nSOCKET initialization is complete."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\nSTART:\nSn_MR = 0x02; /* sets UDP mode */\nSn_PORT0 = source_port; /* sets source port number */\nSn_CR = OPEN; /* sets OPEN command */\n/* wait until Sn_SR is changed to SOCK_UDP */\nif (Sn_SR != SOCK_UDP) Sn_CR = CLOSE; goto START;\n}\n")),Object(o.b)("p",null," After W5500 ",Object(o.b)("strong",{parentName:"p"},"accepts the\ncommand, the Sn","_","CR register is automatically cleared to 0x00"),". Even\nthough Sn","_","CR is cleared to 0x00, the command is still being processed.\n",Object(o.b)("em",{parentName:"p"},"To check whether the command is completed or not, please check the\nSn","_","IR or Sn","_","SR.")," "),Object(o.b)("h5",{id:"check-received-data"},"Check received data"),Object(o.b)("p",null,"Check the reception of UDP data from destination. User can also check\nfor received data via TCP communication. It is strongly recommended to\nuse the second method because of the same reasoning from TCP. Please\nrefer to the \u201cTCP SERVER\u201d section. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"tcp#tcp-server"}),"TCP\nSERVER")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\nif (Sn_IR(RECV) == \u20181\u2019) Sn_IR(RECV) = \u20181\u2019; goto Receiving Process stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to IR, IMR\nSn_IMR and Sn_IR. */\n}\nSecond Method :\n{\nif (Sn_RX_RSR0 != 0x0000) goto Receiving Process stage;\n}\n")),Object(o.b)("h5",{id:"receiving-process"},"Receiving process"),Object(o.b)("p",null,"Process the received UDP data in Internal RX memory.",Object(o.b)("br",{parentName:"p"}),"\n","The structure of received UDP data is as below."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w5500/application/received_udp_data.jpg",alt:"The Received UDP data\nformat"}))),Object(o.b)("p",null,"The received UDP data consists of 8bytes PACKET-INFO, and DATA packet.\nThe PACKETINFO contains transmitter\u2019s information (IP address, Port\nnumber) and the length of DATA packet. The UDP can receive UDP data from\nmany others. User can classify the transmitter by transmitter\u2019s\ninformation of PACKET-INFO. It also receives broadcast SOCKET by using\n\u201c255.255.255.255\u201d IP address. So the host should ignore unwanted\nreception by analysis of transmitter\u2019s information. If the DATA size of\nSocket n is larger than Internal RX memory free size, user cannot\nreceive that DATA and also cannot receive fragmented DATA."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* Get offset address */\nsrc_ptr = Sn_RX_RD;\n/* select RX memory, refer to Datasheet 14 page */\ncntl_byte = Socket_n_RX_Buffer \n/* read head information (8 bytes) */\nheader_size = 8;\n/* copy header_size bytes of get_start_address to header_address */\nfor(i=0; i<header_size; i++)\n{\n  header[i] = W5500_READ(src_ptr, header);\n}\n/* update src_ptr */\nsrc_ptr += header_size;\n\n/* save remote peer information & received data size */\npeer_ip = header[0 to 3];\npeer_port = header[4 to 5];\nget_size = header[6 to 7];\n\n/* copy len bytes of src_ptr to destination_address */\nfor(i=0; i<get_size; i++)\n{\n  *(dst_ptr+i) = W5500_READ(addr, cntl_byte, src_ptr+1);\n}\n/* increase Sn_RX_RD as length of len+ header_size */\nSn_RX_RD += get_size;\n/* set RECV command */\nSn_CR = RECV;\n}\n")),Object(o.b)("h5",{id:"check-send-data--sending-process"},"Check send data / sending process"),Object(o.b)("p",null,"The size of DATA that the user wants to transmit cannot be larger than\nInternal TX memory. If it is larger than MTU, it is automatically\ndivided by MTU unit and transmitted. The Sn","_","DIPR0 is set\n\u201c255.255.255.255\u201d when user wants to broadcast."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* first, get the free TX memory size */\nFREESIZE:\nfreesize = Sn_TX_FSR0;\nif (freesize<len) goto FREESIZE; // len is send size\n\n/* Write the value of remote_ip, remote_port to the Socket n Destination IP Address\nRegister(Sn_DIPR), Socket n Destination Port Register(Sn_DPORT). */\nSn_DIPR0 = remote_ip;\nSn_DPORT0 = remote_port;\n\n/* Get offset address */\ndst_ptr = Sn_TX_WR;\n/* select TX memory, refer to Datasheet 14 page */\ncntl_byte = Socket_n_TX_Buffer \n/* copy len bytes of source_address to dst_ptr */\nfor(i=0; i<len; i++)\n{\n  W5500_WRITE(addr, cntl_byte, dst_ptr+i);\n}\n/* increase Sn_TX_WR0 as length of len */\nSn_TX_WR += len;\n/* set SEND command */\nSn_CR = SEND;\n}\n")),Object(o.b)("h5",{id:"check-complete-sending--timeout"},"Check complete sending / Timeout"),Object(o.b)("p",null,"To transmit the next data, user must check that the prior SEND command\nis completed. The larger the data size, the more time to complete the\nSEND command. Therefore, the user must properly divide the data to\ntransmit. The ARP",Object(o.b)("sub",null,"TO")," can occur when user transmits UDP data.\nIf ARP",Object(o.b)("sub",null,"TO")," occurs, the UDP data transmission has failed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\n/* check SEND command completion */\nwhile(Sn_IR(SENDOK)==\u20180\u2019) /* wait interrupt of SEND completion */\n{\n/* check ARPTO */\nif (Sn_IR(TIMEOUT)==\u20181\u2019) Sn_IR(TIMEOUT)=\u20181\u2019; goto Next stage;\n}\nSn_IR(SENDOK) = \u20181\u2019; /* clear previous interrupt of SEND completion */\n}\nSecond method :\n{\nIf (Sn_CR == 0x00) transmission is completed.\nIf (Sn_IR(TIMEOUT bit) == \u20181\u2019) goto next stage;\n/* In this case, if the interrupt of Socket n is activated, interrupt occurs. Refer to\nInterrupt Register(IR), Interrupt Mask Register (IMR) and Socket n Interrupt Register (Sn_IR).\n*/\n}\n")),Object(o.b)("h4",{id:"check-finished--socket-close"},"Check Finished / SOCKET close"),Object(o.b)("p",null,"If user doesn\u2019t need the communication any more, close the Socket n."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* clear remained interrupts */\nSn_IR = 0x00FF;\nIR(n) = \u20181\u2019;\n/* set CLOSE command */\nSn_CR = CLOSE;\n}\n")),Object(o.b)("h3",{id:"multicast"},"Multicast"),Object(o.b)("p",null,"The broadcast communication communicates with many and unspecified\nothers. But the multicast communication communicates with many specified\nothers who registered at a multicast-group. Suppose that A, B, and C are\nregistered at a specified multicast-group. If user transmits data to\nmulticast-group (contains A), B and C also receive the DATA for A. To\nuse multicast communication, the destination list registers to\nmulticast-group by using IGMP protocol. The multicast-group consists of\n\u2018Group hardware address,\u2019 \u2018Group IP address,\u2019 and \u2018Group port number.\u2019\nUser cannot change the \u2018Group hardware address\u2019 and \u2018Group IP address.\u2019\nBut the \u2018Group port number\u2019 can be changed.",Object(o.b)("br",{parentName:"p"}),"\n","The \u2018Group hardware address\u2019 is selected at the assigned range (From\n\u201c01:00:5e:00:00:00\u201dto \u201c01:00:5e:7f:ff:ff\u201d) and the \u2018Group IP address\u2019\nis selected in D-class IP address (From \u201c224.0.0.0\u201d to\n\u201c239.255.255.255\u201d, please refer to the website;\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.iana.org/assignments/multicast-addresses"}),"http://www.iana.org/assignments/multicast-addresses"),").",Object(o.b)("br",{parentName:"p"}),"\n","When selecting, the upper 23bit of 6bytes \u2018Group hardware address\u2019 and\nthe 4bytes \u2018Group IP address\u2019 must be the same. For example, if the user\nselects the \u2018Group IP address\u2019 to \u201c244.1.1.11,\u201d the \u2018Group hardware\naddress\u2019 is selected to \u201c01:00:5e:01:01:0b.\u201d Please refer to the\n\u201cRFC1112\u201d (",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.ietf.org/rfc.html"}),"http://www.ietf.org/rfc.html"),").",Object(o.b)("br",{parentName:"p"}),"\n","In the W5500, IGMP processing to register the multicast-group is\ninternally (automatically) processed. When the user opens the Socket n\nwith multicast mode, the \u201cJoin\u201d message is internally transmitted. If\nthe user closes it, the \u201cLeave\u201d message is internally transmitted. After\nthe SOCKET opens, the \u201cReport\u201d message is periodically and internally\ntransmitted when the user communicates.",Object(o.b)("br",{parentName:"p"}),"\n","The W5500 support IGMP version 1 and version 2 only. If user wants use\nan updated version, the host processes IGMP directly by using the IPRAW\nmode SOCKET."),Object(o.b)("h5",{id:"socket-initialization-1"},"SOCKET Initialization"),Object(o.b)("p",null,"Choose one SOCKET for multicast communication among 8 SOCKETS of W5500.\nSet the Sn","_","DHAR0 to \u2018Multicast-group hardware address\u2019 and set the\nSn","_","DIPR0 to \u2018Multicastgroup IP address.\u2019 Then set the Sn","_","PORT0 and\nSn","_","DPORT0 to \u2018Multicast-group port number.\u2019 Set the Sn","_","MR(P3:P0) to\nUDP and set the Sn","_","MR(MULTI) to \u20181.\u2019 Finally, execute OPEN command. If\nthe state of Sn","_","SR is changed to SOCK","_","UDP after the OPEN command, the\nSOCKET initialization is completed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\nSTART:\n/* set Multicast-Group information */\nSn_DHAR0 = 0x01; /* set Multicast-Group H/W address(01:00:5e:01:01:0b) */\nSn_DHAR1 = 0x00;\nSn_DHAR2 = 0x5E;\nSn_DHAR3 = 0x01;\nSn_DHAR4 = 0x01;\nSn_DHAR5 = 0x0B;\nSn_DIPR0 = 211; /* set Multicast-Group IP address(211.1.1.11) */\nSn_DIPR1 = 1;\nSn_DIPR2 = 1;\nSn_DIRP3 = 11;\nSn_DPORT0 = 0x0BB8; /* set Multicast-GroupPort number(3000) */\nSn_PORT0 = 0x0BB8; /* set SourcePort number(3000) */\nSn_MR = 0x02 | 0x80; /* set UDP mode & Multicast on Socket n Mode Register */\nSn_CR = OPEN; /* set OPEN command */\n/* wait until Sn_SR is changed to SOCK_UDP */\nif (Sn_SR != SOCK_UDP) Sn_CR = CLOSE; goto START;\n}\n")),Object(o.b)("h5",{id:"check-received-data-1"},"Check received data"),Object(o.b)("p",null,"Refer to the \u201cUnicast & Broadcast.\u201d section."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#unicast-and-broadcast"}),"Unicast & Broadcast")),Object(o.b)("h5",{id:"receiving-process-1"},"Receiving process"),Object(o.b)("p",null,"Refer to the \u201cUnicast & Broadcast.\u201d section. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#unicast-and-broadcast"}),"Unicast &\nBroadcast")),Object(o.b)("h5",{id:"check-send-data--sending-process-1"},"Check send data / Sending Process"),Object(o.b)("p",null,"Since the user sets the information about multicast-group at SOCKET\ninitialization, user does not need to set IP address and port number for\ndestination any more. Therefore, copy the transmission data to internal\nTX memory and executes SEND command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* first, get the free TX memory size */\nFREESIZE:\nfreesize = Sn_TX_FSR;\nif (freesize<len) goto FREESIZE; // len is send size\n/* calculate offset address */\ndst_mask = Sn_TX_WR0 &gSn_TX_MASK; // dst_mask is offset address\n/* calculate start address(physical address) */\ndst_ptr = gSn_TX_BASE + dst_mask; // dst_ptr is physical start address\n/* if overflow SOCKETTX memory */\nif ( (dst_mask + len) > (gSn_TX_MASK + 1) )\n{\n/* copy upper_size bytes of source_addr to destination_address */\nupper_size = (gSn_TX_MASK + 1) \u2013 dst_mask;\nmemcpy((0x0000 + source_addr), (0x0000 + dst_ptr), upper_size);\n/* update source_addr*/\nsource_addr += upper_size;\n/* copy left_size bytes of source_addr to gSn_TX_BASE */\nleft_size = len \u2013 upper_size;\nmemcpy( source_addr, gSn_TX_BASE, left_size);\n}\nelse\n{\n/* copy len bytes of source_addr to dst_ptr */\nmemcpy( source_addr, dst_ptr, len);\n}\n/* increase Sn_TX_WR as length of len */\nSn_TX_WR0 += send_size;\n/* set SEND command */\nSn_CR = SEND;\n}\n")),Object(o.b)("h5",{id:"check-complete-sending--timeout-1"},"Check complete sending / Timeout"),Object(o.b)("p",null,"Since the host manages all protocol process for data communication,\ntimeout cannot occur."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"{\n/* check SEND command completion */\nwhile(S0_IR(SENDOK)==\u20180\u2019); /* wait interrupt of SEND completion */\nS0_IR(SENDOK) = \u20181\u2019; /* clear previous interrupt of SEND completion */\n}\n")),Object(o.b)("h5",{id:"check-finished--socket-close-1"},"Check finished / SOCKET close"),Object(o.b)("p",null,"Refer to the \u201cUnicast & Broadcast.\u201d section. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#unicast-and-broadcast"}),"Unicast & Broadcast")))}l.isMDXComponent=!0},581:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),p=a,u=m["".concat(s,".").concat(p)]||m[p]||b[p]||o;return n?r.a.createElement(u,i(i({ref:t},d),{},{components:n})):r.a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);