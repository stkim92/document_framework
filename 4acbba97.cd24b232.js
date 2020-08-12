(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{186:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return S}));var i=t(2),r=t(6),a=(t(0),t(516)),s={id:"tcp",title:"W5100S TCP Function",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/iEthernet/W5100S/Application-Note/tcp",id:"Product/iEthernet/W5100S/Application-Note/tcp",isDocsHomePage:!1,title:"W5100S TCP Function",description:"By setting some Registers and Memory Operation, W5100S provides Internet",source:"@site/docs\\Product\\iEthernet\\W5100S\\Application-Note\\TCP.md",permalink:"/docs/Product/iEthernet/W5100S/Application-Note/tcp",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iEthernet/W5100S/Application-Note/TCP.md",sidebar:"someSidebar",previous:{title:"W5100S Comparison Sheet",permalink:"/docs/Product/iEthernet/W5100S/comparison_sheet"},next:{title:"W5100S UDP Function",permalink:"/docs/Product/iEthernet/W5100S/Application-Note/udp"}},c=[{value:"Initialization",id:"initialization",children:[{value:"Basic Setting",id:"basic-setting",children:[]},{value:"Setting Network Information",id:"setting-network-information",children:[]},{value:"Set SOCKET n Buffer Information",id:"set-socket-n-buffer-information",children:[]}]},{value:"Data Communications",id:"data-communications",children:[{value:"TCP",id:"tcp",children:[]},{value:"TCP SERVER",id:"tcp-server",children:[]},{value:"TCP CLIENT",id:"tcp-client",children:[]}]}],d={rightToc:c};function S(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"By setting some Registers and Memory Operation, W5100S provides Internet\nConnectivity. This Chapter describes How to operate W5100S TCP Function."),Object(a.b)("h2",{id:"initialization"},"Initialization"),Object(a.b)("h3",{id:"basic-setting"},"Basic Setting"),Object(a.b)("p",null,"For W5100S Operation, select and utilize appropriate Registers shown\nbelow."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Mode Register (MR)"),Object(a.b)("li",{parentName:"ol"},"Interrupt Mask Register (IMR)"),Object(a.b)("li",{parentName:"ol"},"Retry Time-value Register (RTR)"),Object(a.b)("li",{parentName:"ol"},"Retry Count Register (RCR)")),Object(a.b)("p",null,"For more Information of above Registers, refer to the \u201cRegister\nDescriptions\u201d in ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../document"}),"W5100S Datasheet"),"."),Object(a.b)("h3",{id:"setting-network-information"},"Setting Network Information"),Object(a.b)("p",null,"Basic Network Information setting for Communication: It must be set the\nbasic Network Information."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"SHAR(Source Hardware Address Register)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"It is prescribed that the Source Hardware Addresses, which is\nset by SHAR, use unique Hardware Addresses (Ethernet MAC\naddress) in the Ethernet MAC Layer. The IEEE manages the MAC\naddress allocation. The manufacturer which produces the Network\ndevice allocates the MAC Address to product."),Object(a.b)("li",{parentName:"ul"},"Details on MAC address allocation refer to the website as below."),Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"http://www.ieee.org/"}),"http://www.ieee.org/")),Object(a.b)("li",{parentName:"ul"},"\ud83c\udf0e",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"http://standards.ieee.org/regauth/oui/index.shtml"}),"http://standards.ieee.org/regauth/oui/index.shtml")))),Object(a.b)("li",{parentName:"ol"},"GAR(Gateway Address Register)"),Object(a.b)("li",{parentName:"ol"},"SUBR(Subnet Mask Register)"),Object(a.b)("li",{parentName:"ol"},"SIPR(Source IP Address Register)")),Object(a.b)("h3",{id:"set-socket-n-buffer-information"},"Set SOCKET n Buffer Information"),Object(a.b)("p",null,"This stage shows SOCKET n TX/RX Buffer Information. The base Address and\nMask Address of each SOCKET are set in this stage."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"*In case of, assign 2KB TX/RX Buffer per SOCKET")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"In case of, assign 2KB TX/RX Buffer per SOCKET\n{\n   // set Base Address of TX/RX Buffer for SOCKET n\n   gS0_RX_BASE = 0x8000; // TX Buffer Block Base Address\n   gS0_RX_BASE = 0xC000; // RX Buffer Block Base Address\n   TxTotalSize = 0; // For check the total size of SOCKET n TX Buffer\n   RxTotalSize = 0; // For check the total size of SOCKET n RX Buffer\n   \n   for (n=0; n<3; n++) {\n      Sn_TXBUF_SIZE = 2; // assign 2KB TX Buffer per SOCKET\n      Sn_RXBUF_SIZE = 2; // assign 2KB RX Buffer per SOCKET\n      // 0x07FF, for getting offset address within assigned SOCKET n TX/RX Buffer\n      gSn_TX_MASK = (1024 * Sn_TXBUF_SIZE) \u2013 1;\n      gSn_RX_MASK = (1024 * Sn_RXBUF_SIZE) - 1;\n      \n      if( n != 0) {\n         gSn_TX_BASE = gSn-1_TX_BASE + (1024 * Sn-1_TXBUF_SIZE);\n         gSn_RX_BASE = gSn-1_RX_BASE + (1024 * Sn-1_RXBUF_SIZE);\n      } // end if\n      \n   TxTotalSize = TxTotalSize + Sn_TXBUF_SIZE;\n   RxTotalSize = RxTotalSize + Sn_RXBUF_SIZE;\n   If( TxTotalSize > 8 or RxTotalSize > 8 ) goto ERROR; // invalid Total Size\n   } // end for\n}\n")),Object(a.b)("h2",{id:"data-communications"},"Data Communications"),Object(a.b)("p",null,"After Initialization Process, SOCKET is opened on TCP, UDP, IPRAW or\nMACRAW Mode and able to transmit and receive Data. This stage shows How\nto use SOCKET on TCP Mode."),Object(a.b)("h3",{id:"tcp"},"TCP"),Object(a.b)("p",null,"TCP (Transmission Control Protocol) is a bidirectional Data Transmission\nProtocol based on a 1:1 communication on Transport Layer. It also\nprovides Communication between Applications by using Port Number. TCP\n1:1 communication needs the Connection Process such as transmitting\nConnection Request to Peer or receiving Connection Request from Peer. In\nthis Connection Process, the side transmitting Connection Request is\n\u2018TCP CLIENT\u2019 and the other side receiving Connection Request is \u2018TCP\nSERVER\u2019. TCP also provides reliable, ordered and error-checked delivery\nof a stream Data between applications running on hosts communicating by\nan IP network. \u2018TCP SERVER\u2019 and \u2018TCP CLIENT\u2019 are maintaining transmit\nand receive Data until the TCP connection is terminated. ",Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/w7500p/serverclient.jpg",alt:"TCP SERVER\nand TCP CLIENT"}))),Object(a.b)("h3",{id:"tcp-server"},"TCP SERVER"),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/w7500p/server_flow.jpg",alt:"TCP SERVER Operation\nFlow"}))),Object(a.b)("h4",{id:"socket-initialization"},"SOCKET Initialization"),Object(a.b)("p",null,"SOCKET Initialization is required for TCP Mode SOCKET. The\nInitialization consists of SOCKET Mode setting, SOCKET Port Number\nsetting, SOCKET Option setting and SOCKET OPEN Command. 4 SOCKETs are\nall opened as TCP Mode. After OPEN Command(Sn","_","CR = OPEN), if the SOCKET\nstatus(Sn","_","SR) is changed to SOCKET","_",'INIT, SOCKET Initialization is\ncompleted. This process is identically applied in "TCP SERVER" and "TCP\nCLIENT".'),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"{\nSTART:\n\n   Sn_MR[3:0] = \"0001\"; // set TCP Mode\n   Sn_PORTR0,1 = source_port; // sets source port number\n\n   /* configure SOCKET Option when you need it */\n   // Sn_MR[ND] = '1'; // set No Delay ACK\n\n   Sn_CR = OPEN; // sets OPEN command\n   /* wait until Sn_SR is changed to SOCK_INIT */\n   if (Sn_SR != SOCK_INIT) Sn_CR = CLOSE; goto START;\n}\n")),Object(a.b)("h4",{id:"listen"},"LISTEN"),Object(a.b)("p",null,"Run as \u201cTCP SERVER\u201d by LISTEN Command."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"{\n   /* listen SOCKET */\n   Sn_CR = LISTEN;\n   /* wait until Sn_SR is changed to SOCK_LISTEN */\n   if (Sn_SR != SOCK_LISTEN) Sn_CR = CLOSE; goto START;\n}\n")),Object(a.b)("h4",{id:"establishment"},"ESTABLISHMENT"),Object(a.b)("p",null,'"TCP SERVER" keeps Sn',"_","SR (SOCK","_",'LISTEN) until received SYN Packet. If\n"TCP SERVER" receives SYN Packet from "TCP CLIENT", it transmits SYN/ACK\nPacket to \u2018TCP CLIENT\u2019 and the Connection Process between "TCP SERVER"\nand "TCP CLIENT" is completed. If there is no response from Peer against\nof transmitted SYN Packet or SYN/ACK Packet within the Retransmission\nTime, Sn',"_","IR ","[","TIMEOUT","]"," is set to \u20181\u2019."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\n   /* check SOCKET Interrupt */\n   if (Sn_IR[CON] == \u20181\u2019)\n   {\n      /* clear SOCKET Interrupt */\n      Sn_IR[CON] = \u20181\u2019;\n      goto Received DATA?; /* or goto Send DATA?; */\n   }\n   else if(Sn_IR[TIMEOUT] == \u20181\u2019) goto Timeout?;\n}\n\nSecond method :\n{\n   if (Sn_SR == SOCK_ESTABLISHED)\n   {\n      /* clear SOCKET Interrupt */\n      Sn_IR[CON] = \u20181\u2019;\n      goto Received DATA? /* or goto Send DATA?; */\n   }\n   else if(Sn_IR[TIMEOUT] == \u20181\u2019) goto Timeout?;\n}\n")),Object(a.b)("h4",{id:"receive-data"},"Receive DATA?"),Object(a.b)("p",null,"Whether SOCKET n Data is received is confirmed by Sn","_","IR ","[","RECV","]"," or\nSn","_","RX","_","RSR."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\n   /* check SOCKET RX Memory Received Size */\n   if (Sn_RX_RSR > 0) goto Receiving Process;\n}\n\nSecond method :\n{\n   if (Sn_IR[RECV] == \u20181\u2019)\n   {\n      /* check SOCKET Interrupt */\n      Sn_IR[RECV] = \u20181\u2019; /* clear SOCKET Interrupt */\n      goto Receiving Process;\n   }\n}\n")),Object(a.b)("h4",{id:"listen-1"},"LISTEN"),Object(a.b)("p",null,"Run as \u201cTCP SERVER\u201d by LISTEN Command."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"{\n   /* listen SOCKET */\n   Sn_CR = LISTEN;\n   /* wait until Sn_SR is changed to SOCK_LISTEN */\n   if (Sn_SR != SOCK_LISTEN) Sn_CR = CLOSE; goto START;\n}\n")),Object(a.b)("h4",{id:"establishment-1"},"ESTABLISHMENT"),Object(a.b)("p",null,'"TCP SERVER" keeps Sn',"_","SR (SOCK","_",'LISTEN) until received SYN Packet. If\n"TCP SERVER" receives SYN Packet from "TCP CLIENT", it transmits SYN/ACK\nPacket to \u2018TCP CLIENT\u2019 and the Connection Process between "TCP SERVER"\nand "TCP CLIENT" is completed. If there is no response from Peer against\nof transmitted SYN Packet or SYN/ACK Packet within the Retransmission\nTime, Sn',"_","IR ","[","TIMEOUT","]"," is set to \u20181\u2019."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\n   /* check SOCKET Interrupt */\n   if (Sn_IR[CON] == \u20181\u2019)\n   {\n      /* clear SOCKET Interrupt */\n      Sn_IR[CON] = \u20181\u2019;\n      goto Received DATA?; /* or goto Send DATA?; */\n   }\n   else if(Sn_IR[TIMEOUT] == \u20181\u2019) goto Timeout?;\n}\n\nSecond method :\n{\n   if (Sn_SR == SOCK_ESTABLISHED)\n   {\n      /* clear SOCKET Interrupt */\n      Sn_IR[CON] = \u20181\u2019;\n      goto Received DATA? /* or goto Send DATA?; */\n   }\n   else if(Sn_IR[TIMEOUT] == \u20181\u2019) goto Timeout?;\n}\n")),Object(a.b)("h4",{id:"receive-data-1"},"Receive DATA?"),Object(a.b)("p",null,"Whether SOCKET n Data is received is confirmed by Sn","_","IR ","[","RECV","]"," or\nSn","_","RX","_","RSR."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"First method :\n{\n   /* check SOCKET RX Memory Received Size */\n   if (Sn_RX_RSR > 0) goto Receiving Process;\n}\n\nSecond method :\n{\n   if (Sn_IR[RECV] == \u20181\u2019)\n   {\n      /* check SOCKET Interrupt */\n      Sn_IR[RECV] = \u20181\u2019; /* clear SOCKET Interrupt */\n      goto Receiving Process;\n   }\n}\n")),Object(a.b)("h4",{id:"receiving-process"},"Receiving Process"),Object(a.b)("p",null,"Received Data is read from SOCKET n RX Buffer Block. The Read Offset\nAddress of Received Data in RX Memory Block is calculated by\ngSn","_","RX","_","BASE, gSn","_","RX","_","MASK and Sn","_","RX","_","RD. After reading received\nData, Sn","_","RX","_","RD must be increased by Data read Size and Sn","_","CR ","[","RECV","]","\nmust be set to \u20181\u2019. If there is remain Data in SOCKET n RX Buffer Block\nafter Sn","_","CR ","[","RECV","]"," Command, Sn","_","IR ","[","RECV","]"," is set to \u20181\u2019. When Read\nOffset Address calculated, it is cautious to over the boundary Address\n(n=0,1,2 : gSn","_","RX","_","BASE \u223c gSn+1","_","RX","_","BASE, n=3 : gS3","_","RX","_","BASE \u223c\n0xFFFF) of SOCKET n RX Buffer Block."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"{\n   /* get Received Size */\n   get_size = Sn_RX_RSR;\n\n   /* calculate SOCKET n RX Buffer Size & Offset Address */\n   gSn_RX_MAX = Sn_RXBUF_SIZE * 1024;\n   get_offset = Sn_RX_RD & gSn_RX_MASK;\n\n   /* calculate Read Offset Address */\n   get_start_address = gSn_RX_BASE + get_offset;\n   \n   /* if overflow the upper boundary of SOCKET n RX Buffer */\n   If( (get_offset + get_size) > gSn_RX_MAX )\n   {\n      /* copy upper_size bytes of get_start_address to destination_address\n         - destination_address is user data memory address */\n      upper_size = gSn_RX_MAX \u2013 get_offset;\n      memcpy(get_start_address, destination_address, upper_size);\n      destination_address += upper_size;\n      /* copy the remained size bytes of gSn_RX_BASE to destination_address */\n      remained_size = get_size \u2013 upper_size;\n      memcpy(gSn_RX_BASE, destination_address, remained_size);\n   }\n   else\n   {\n      /* copy get_size of get_start_address to destination_address */\n      memcpy(get_start_address, destination_address, get_size);\n   }\n   \n   /* increase Sn_RX_RD as get_size */\n   Sn_RX_RD += get_size;\n   \n   /* set RECV Command */\n   Sn_CR[RECV] = \u20181\u2019;\n   while(Sn_CR != 0x00); /* wait until RECV Command is cleared*/\n}\n")),Object(a.b)("h4",{id:"send-data--sending-process"},"Send DATA? / Sending Process"),Object(a.b)("p",null,"Written Data in SOCKET n TX Buffer Block is transmitted. The Write\nOffset Address in TX Memory Block is calculated by gSn","_","TX","_","BASE,\ngSn","_","TX","_","MASK and Sn","_","TX","_","WD. And Data to be transmitted from the Write\nOffset Address is written. After writing Data, Sn","_","TX","_","WD must be\nincreased by Data Size and Data is transmitted by Sn","_","CR ","[","SEND","]",".\nBefore Sn","_","IR ","[","SENDOK","]"," = \u20181\u2019, next Data Transmission Process is not\nexecuted. After transmitting Data, the time length until\nSn","_","IR","[","SENDOK","]"," is depending on SOCKET Count, Data Size and Network\nTraffic. Also Sn","_","IR ","[","TIMEOUT","]"," could be occurred. When Write Offset\nAddress calculated, it is cautious to over the boundary Address (n=0,1,2\n: gSn","_","TX","_","BASE \u223c gSn+1","_","TX","_","BASE, n=3 : gS3","_","TX","_","BASE \u223c 0xC000) of\nSOCKET n TX Buffer Block. If there is no response from Peer against of\ntransmitted Data Packet within the Retransmission Time, Sn","_","IR\n","[","TIMEOUT","]"," is set to \u20181\u2019."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"{\n   /* calculate SOCKETn TX Buffer Size & Offset Address */\n   gSn_TX_MAX = Sn_TXBUF_SIZE * 1024;\n   get_offset = Sn_TX_WR & gSn_TX_MASK;\n   \n   /* check the max size of DATA(send_size) & Free Size of SOCKETn TX\n      Buffer(Sn_TX_FSR)*/\n   if( send_size >gSn_TX_MAX ) send_size = gSn_TX_MAX;\n   while(send <= Sn_TX_FSR); // Wait until SOCKET n TX Buffer is free */\n\n   /* If you don\u2019t want to wait TX Buffer Free\n      send_size = Sn_TX_FSR; // write Data as size of Free Buffer */\n   /* calculate Write Offset Address */\n   get_start_address = gSn_TX_BASE + get_offset;\n   \n   /* if overflow the upper boundary of SOCKET n TX Buffer */\n   If( (get_offset + send_size) > gSn_TX_MAX )\n   {\n      /* copy upper size bytes of source_address to get_start_address\n         - source_address is the start address of user data */\n      upper_size = gSn_TX_MAX \u2013 get_offset;\n      memcpy(source_address, get_start_address, upper_size);\n      \n      /* copy the Remained Size Bytes of source_address to gSn_TX_BASE */\n      source_address += upper_size;\n      remained_size = send_size \u2013 upper_size;\n      memcpy(source_address, gSn_TX_BASE, remained_size);\n   }\n   else\n   {\n      /* copy send_size bytes of source_address to get_start_address\n         - source_address is the start address of user data */\n      memcpy(source_address, get_start_address, send_size);\n   }\n   \n   /* increase Sn_TX_WR as send_size */\n   Sn_TX_WR += send_size;\n   \n   /* set SEND Command */\n   Sn_CR = SEND;\n   while(Sn_CR != 0x00); /* wait until SEND Command is cleared*/\n   \n   /* wait until SEND Command is completed or TIMEOUT Interrupt is occurred*/\n   while(Sn_IR[SENDOK] == \u20180\u2019 and Sn_IR[TIMEOUT] = \u20180\u2019);\n   \n   /* clear SOCKET Interrupt*/\n   if(Sn_IR[SENDOK] == \u20181\u2019) Sn_IR[SENDOK] = \u20181\u2019;\n   else goto Timeout?;\n}\n")),Object(a.b)("h4",{id:"received-fin-passive-close"},"Received FIN (Passive Close)"),Object(a.b)("p",null,"When FIN Packet received from Peer."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"First Method:\n{\n   If(Sn_SR == SOCK_CLOSE_WAIT) goto Disconnecting Process;\n}\n\nSecond Method:\n{\n   If(Sn_IR[DISCON] == \u20181\u2019) goto Disconnecting Process;\n}\n")),Object(a.b)("h4",{id:"disconnected-active-close"},"Disconnected (Active Close)"),Object(a.b)("p",null,"When FIN Packet transmitted to Peer."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"{\n   /* send FIN Packet */\n   Sn_CR[DISCON] = \u20181\u2019;\n   while(Sn_CR != 0x00); /* wait until DISCON Command is cleared*/\n   goto Disconnecting Process;\n}\n")),Object(a.b)("h4",{id:"disconnecting-process"},"Disconnecting Process"),Object(a.b)("p",null,"In Passive Close, if FIN Packet is received from Peer and there is no\nData to be transmitted, SOCKET transmits FIN Packet and it will be\nclosed. If there is no response from Peer against of transmitted FIN\nPacket within the Retransmission Time, Sn","_","IR ","[","TIMEOUT","]"," is set to \u20181\u2019.\nIn Active Close, if SOCKET transmits FIN Packet to Peer, SOCKET waits\nfor Peer FIN Packet. SOCKET will be closed after receiving FIN Packet\nfrom Peer. If there is no response from Peer against of transmitted FIN\nPacket within the Retransmission Time, Sn","_","IR ","[","TIMEOUT","]"," is set to \u20181\u2019."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"Passive Close: /* received FIN Packet from Peer */\n{\n   /* send FIN Packet */\n   Sn_CR = DISCON;\n   while(Sn_CR != 0x00); /* wait until DISCON Command is cleared*/\n\n   /* wait unit ACK Packet is received*/\n   while(Sn_IR[DISCON] == \u20180\u2019 and Sn_IR[TIMEOUT] == \u20180\u2019) ;\n   if (Sn_IR[DISCON] == \u20181\u2019)\n   {\n      /* clear Interrupt */\n      Sn_IR[DISCON] = \u20181\u2019;\n      goto CLOSED;\n   }\n   else goto Timeout?;\n}\n\nActive Close : /* sent FIN Packet to Peer */\n{\n   /* wait until FIN Packet is received*/\n   while(Sn_IR[DISCON] == \u20180\u2019 and Sn_IR[TIMEOUT] == \u20180\u2019) ;\n   if (Sn_IR[DISOCN] == \u20181\u2019)\n   {\n      /* clear Interrupt */\n      Sn_IR[DISCON] = \u20181\u2019;\n      goto CLOSED;\n   }\n   else goto Timeout?;\n}\n")),Object(a.b)("h4",{id:"timeout"},"Timeout?"),Object(a.b)("p",null,"If there is no response from Peer against of transmitted SYN or SYN/ACK\nor FIN or Data Packet within the Retransmission Time, Sn","_","IR ","[","TIMEOUT","]","\nis set to \u20181\u2019."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"{\n   /* check TIMEOUT Interrupt */\n   if(Sn_IR[TIMEOUT] == \u20181\u2019)\n   {\n      /* clear Interrupt */\n      Sn_IR[TIMEOUT] = \u20181\u2019;\n      goto CLOSE;\n   }\n}\n")),Object(a.b)("h4",{id:"close"},"CLOSE"),Object(a.b)("p",null,"SOCKET n is closed by the Disconnect Process, Sn","_","IR","[","TIMEOUT","]"," = '1'\nand Sn","_","CR","[","CLOSE","]"," = '1'."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"{\n   /*wait until SOCKET n is closed*/\n   while(Sn_SR != SOCK_CLOSED);\n}\n")),Object(a.b)("h3",{id:"tcp-client"},"TCP CLIENT"),Object(a.b)("p",null,Object(a.b)("img",Object(i.a)({parentName:"p"},{src:"/img/products/w5100s/application/tcp_client_flow.png",alt:"TCP CLIENT Operation\nFlow"}))),Object(a.b)("h4",{id:"open"},"OPEN"),Object(a.b)("p",null,'It is the same as "TCP SERVER".'),Object(a.b)("h5",{id:"connect"},"CONNECT"),Object(a.b)("p",null,'SOCKET n is operated as "TCP CLIENT" by Sn',"_","CR","[","CONNECT","]",'. SYN Packet is\ntransmitted to "TCP SERVER" by Sn',"_","CR","[","CONNECT","]","."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-c"}),"{\n   /* set Destination IP Address, 192.168.0.11 */\n   Sn_DIPR[0:3] ={ 0xC0, 0xA8, 0x00, 0x0B};\n   \n   /* set Destination PORT Number, 5000(0x1388) */\n   Sn_DPORTR[0:1] = {0x13, 0x88};\n   \n   /* set CONNECT Command */\n   Sn_CR = CONNECT;\n   while(Sn_CR != 0x00); /* wait until CONNECT Command is cleared*/\n   goto ESTABLISHED?;\n}\n")),Object(a.b)("h4",{id:"established"},"ESTABLISHED?"),Object(a.b)("p",null,'"TCP CLIENT" is in Sn',"_","SR (SOCK","_",'SYNSENT) until receiving SYN/ACK Packet\nfrom "TCP SERVER" against of SYN Packet transmitted. If SYN/ACK Packet\nis received from \u2018TCP SERVER\u2019, the Connection Process between \u2018TCP\nSERVER\u2019 and \u2018TCP CLIENT\u2019 is completed. If there is no response from Peer\nagainst of transmitted SYN Packet within the Retransmission Time, Sn',"_","IR\n","[","TIMEOUT","]"," is set to \u20181\u2019."),Object(a.b)("h4",{id:"others-flow"},"Others flow"),Object(a.b)("p",null,'Refer to "TCP SERVER" flow.'))}S.isMDXComponent=!0},516:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return T}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),S=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=S(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=S(t),u=i,T=l["".concat(s,".").concat(u)]||l[u]||b[u]||a;return t?r.a.createElement(T,o(o({ref:n},d),{},{components:t})):r.a.createElement(T,o({ref:n},d))}));function T(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);