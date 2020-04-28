(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{404:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(9),r=(n(0),n(475)),o={id:"configuration_tool_chn",title:"Configuration Tool(Chn)",date:new Date("2020-04-16T00:00:00.000Z")},c={id:"Product/S2E Module/WIZ550S2E/configuration_tool_chn",title:"Configuration Tool(Chn)",description:"## Content\r",source:"@site/docs\\Product\\S2E Module\\WIZ550S2E\\Configuration_Tool(Chn).md",permalink:"/docs/Product/S2E Module/WIZ550S2E/configuration_tool_chn",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/S2E Module/WIZ550S2E/Configuration_Tool(Chn).md",sidebar:"someSidebar",previous:{title:"AT Command(Chn)",permalink:"/docs/Product/S2E Module/WIZ550S2E/at_command_chn"},next:{title:"Tutorial(Kor)",permalink:"/docs/Product/S2E Module/WIZ550S2E/tutorial_kor"}},l=[{value:"Content",id:"content",children:[]},{value:"Description",id:"description",children:[]},{value:"Common Configurations",id:"common-configurations",children:[{value:"Search",id:"search",children:[]},{value:"Setting",id:"setting",children:[]},{value:"F/W Uploading",id:"fw-uploading",children:[]},{value:"Reset",id:"reset",children:[]},{value:"Factory Reset",id:"factory-reset",children:[]},{value:"Exit",id:"exit",children:[]},{value:"Search Window",id:"search-window",children:[]},{value:"Search Method",id:"search-method",children:[]},{value:"Firmware Version",id:"firmware-version",children:[]},{value:"Network Status",id:"network-status",children:[]}]},{value:"Network Configurations",id:"network-configurations",children:[{value:"IP",id:"ip",children:[]},{value:"Timer",id:"timer",children:[]}]},{value:"Serial Configurations",id:"serial-configurations",children:[{value:"USART",id:"usart",children:[]},{value:"AT Command",id:"at-command",children:[]},{value:"Packing Conditions",id:"packing-conditions",children:[]}]},{value:"Options Configurations",id:"options-configurations",children:[{value:"Module Name",id:"module-name",children:[]},{value:"Password",id:"password",children:[]},{value:"DHCP",id:"dhcp",children:[]},{value:"DNS",id:"dns",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"content"},"Content"),Object(r.b)("h1",{id:"configuration-tool"},"Configuration Tool"),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/products/wiz550s2e/wiz550s2epg_kr/configtool/global_config.png",alt:null})),Object(r.b)("br",{parentName:"p"}),"\n","WIZ550S2E Configuration tool is an application program which is based on\njava and can be used in most OS platforms including Windows, MAC OS and\nLinux. Please download .jar file and execute it over Java Virtual\nMachine."),Object(r.b)("p",null,"WIZ550S2E Configuration tool consists four sections"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Common Configuration Section"),Object(r.b)("li",{parentName:"ol"},"Network Configuration Section"),Object(r.b)("li",{parentName:"ol"},"Serial Configuration Section"),Object(r.b)("li",{parentName:"ol"},"Option Configuration Section")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"common-configurations"},"Common Configurations"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/products/wiz550s2e/wiz550s2epg_kr/configtool/common_config.png",alt:null}))),Object(r.b)("h3",{id:"search"},"Search"),Object(r.b)("p",null,"The Search function is used to search for all existing modules on the\nsame LAN. By using UDP broadcast, it finds all modules on the same\nsubnet, and found devices will be listed in the \u201cSerial to Ethernet\u201d\ntree(Search Window) with its MAC address.  "),Object(r.b)("h3",{id:"setting"},"Setting"),Object(r.b)("p",null,"This function is used to apply your configurations.",Object(r.b)("br",{parentName:"p"}),"\n","When you select the MAC address from the \u201cSearch Window\u201d, the default\nvalue of the module will be displayed. Modify your configurations and\nclick \u201cSetting\u201d button to apply your settings. The module will\nre-initialize and save the changed configurations.",Object(r.b)("br",{parentName:"p"}),"\n","Users can change the configurations by following the steps below.",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/products/wiz550s2e/wiz550s2epg_kr/configtool/password.png",alt:null}))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'1. Select the MAC address of the device which you would like to modify in the \u201cSearch Window\u201d\n2. Modify the settings according to your needs\n3. Click the \u201cSetting\u201d button and then "Password Input Windows" pop up\n  - Default Password is "WIZnet"\n4. Input "Setting Password" and Click "OK" button\n5. The module will be initialized by a re-booting process\n6. To verify your settings, please click \u2018Search\u2019 button and view your new settings\n')),Object(r.b)("h3",{id:"fw-uploading"},"F/W Uploading"),Object(r.b)("p",null,'Firmware will be uploaded through TFTP. Click "F/W Uploading" Button and\nthen pop up windows following figures.',Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/products/wiz550s2e/wiz550s2epg_kr/configtool/tftp_server_info.png",alt:null})),Object(r.b)("br",{parentName:"p"}),"\n","Server IP : TFTP Server IP"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Server Port : TFTP Server Port (TFTP default Port : 69)\nFile Name : Firmware File Name\nPassword : Setting Password\n")),Object(r.b)("p",null,"\u261e WIZ550S2E Configure tool is not supported TFTP server. So you use TFTP\nprogram separately."),Object(r.b)("h3",{id:"reset"},"Reset"),Object(r.b)("p",null,'This is the function which makes WIZ550S2E reboot. This requires\n"Setting Password".'),Object(r.b)("h3",{id:"factory-reset"},"Factory Reset"),Object(r.b)("p",null,"All setting value is initialized to factory default, if the \u201cFactory\nReset\u201d button is clicked. Factory default values of WIZ550S2E are listed\nbelow.",Object(r.b)("br",{parentName:"p"}),"\n","^ Category ^ Item ^ Value ^"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Network")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Local IP"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"192.168.11.100")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Local Gateway"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"192.168.11.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Local Subnet"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"255.255.255.0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Local Port"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Remote Port"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Working Mode"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TCP Server")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inactivity"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Reconnection"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1000")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Serial")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Baud Rate"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"115200")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Data Bits"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Parity"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NONE")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Stop Bits"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Flow"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NONE")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AT Command USE"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Trigger Code"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2B/ 2B / 2B")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Packing Condition Time"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Packing Condition Size"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delimeter Length"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delimeter"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2D / 2D / 2D / 2D")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delimeter Appendix"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Options")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Module Name"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WIZ550S2E")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Setting Password"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WIZnet")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Connection Password"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WIZnet")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DHCP USE"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Disable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DNS USE"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Disable")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DNS Server IP"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8.8.8.8")))),Object(r.b)("h3",{id:"exit"},"Exit"),Object(r.b)("p",null,"Close the configuration tool program window.  "),Object(r.b)("h3",{id:"search-window"},"Search Window"),Object(r.b)("p",null,"If you click the \u201cSearch\u201d button, all MAC addresses on the same subnet\nwill be displayed.  "),Object(r.b)("h3",{id:"search-method"},"Search Method"),Object(r.b)("p",null,"Reserved"),Object(r.b)("h3",{id:"firmware-version"},"Firmware Version"),Object(r.b)("p",null,"It displays the firmware version.  "),Object(r.b)("h3",{id:"network-status"},"Network Status"),Object(r.b)("p",null,"This field shows the current status of network connection."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Connected : This means that TCP connection is established.\nDisconnected : This measn that TCP connection is disconnected.\nUDP : This means that UDP mode is used.\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"network-configurations"},"Network Configurations"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/products/wiz550s2e/wiz550s2epg_kr/configtool/network_config.png",alt:null}))),Object(r.b)("h3",{id:"ip"},"IP"),Object(r.b)("p",null,"This section is for setting WIZ550S2E mode's network information  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'IP: \n    WIZ550S2E\'s IP Address\nGateway: \n    WIZ550S2E\'s Gateway Address\nSubnet mask: \n    WIZ550S2E\'s Subnet Mask\nHost IP: \n    Peer system\'s IP address which WIZ550S2E connects(or sends) to, \n    when its operating mode is "Client mode","Mixed mode" or "UDP mode".\n')),Object(r.b)("p",null,"\u261e If you are unclear about your Local IP, Subnet Mask, Gateway\ninformation, you have to get this information from your network\nadministrator. If the IP address is not correct, IP collision or network\nproblems may occur.  "),Object(r.b)("h4",{id:"port"},"Port"),Object(r.b)("p",null,"This section is for setting WIZ550S2E's Port information."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'Local port : \n    WIZ550S2E\'s local port number\nRemote port : \n    Peer system socket\'s port number which WIZ550S2E connects(or sends) to ,\n    when its operating mode is "Client mode","Mixed mode" or "UDP mode".\n')),Object(r.b)("h4",{id:"working-mode"},"Working Mode"),Object(r.b)("p",null,"Client / server / mixed TCP establishes\nconnection before data communication, but UDP processes the data\ncommunication without connection establishment. The network mode of\nWIZ550S2E can be divided into TCP Server, TCP Client and Mixed mode\naccording to the connection establishing method. During TCP server mode,\nWIZ550S2E operates as the server and waits for the connection trial from\nthe client. WIZ550S2E operates as the client in TCP Client mode and\ntries to connect to the server\u2019s IP and Port. Mixed mode supports both\nServer and Client. The communication process of each mode is as below.  "),Object(r.b)("h4",{id:"tcp-server-mode-communication"},"TCP server mode communication"),Object(r.b)("p",null,"During the TCP Server mode, WIZ550S2E waits for the connection request.\nTCP Server mode can be useful when the monitoring center attempts to\nconnect to the device, while WIZ550S2E is installed, in order to check\nthe status or provide commands. Normally WIZ550S2E is on the waiting\nstatus, and if connection request (SYN) from the monitoring center is\nreceived, the connection is established (ESTABLISH), and data\ncommunication is processed (Data Transaction), and finally connection is\nclosed (FIN). In order to operate this mode, \u201cDevice IP\u201d, \u201cSubnet mask\u201d,\n\u201cGateway\u201d and \u201cLocal port\u201d should be configured first."),Object(r.b)("p",null,"For TCP server mode communication, all network configurations including\nLocal IP, Subnet, Gateway and Local port number should be set correctly."),Object(r.b)("p",null,"The Data transmission proceeds as below."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The host connects to the WIZ550S2E which is configured as TCP Server\nmode."),Object(r.b)("li",{parentName:"ol"},"As the connection is established, data can be transmitted in both\ndirections ")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"   (host -> WIZ550S2E / WIZ550S2E -> host)\n")),Object(r.b)("h4",{id:"tcp-client-mode-communication"},"TCP client mode communication"),Object(r.b)("p",null,"If WIZ550S2E is set as TCP Client, it tries to establish connection to\nthe server. To operate this mode, \u201cDevice IP\u201d, \u201cSubnet mask\u201d, \u201cGateway\u201d,\n\u201cRemote host\u201d, and \u201cRemote port\u201d should be set. If \u201cRemote host\u201d has a\ndomain name, you should use the \u201cDNS server\u201d field. In TCP Client mode,\nWIZ550S2E can actively establish a TCP connection to a host computer\nwhen power is supplied."),Object(r.b)("p",null,"The Data transmission proceeds as below:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"As power is supplied, WIZ550S2E board operating as TCP client mode\nactively establishes a connection to the server."),Object(r.b)("li",{parentName:"ol"},"If the connection is complete, data can be transmitted in both\ndirections")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"   (host -> WIZ550S2E / WIZ550S2E -> host)\n")),Object(r.b)("h4",{id:"mixed-mode-communication"},"Mixed mode Communication"),Object(r.b)("p",null,"In this mode, WIZ550S2E normally operates as TCP Server and waits for\nthe connection request from the peer. However, if WIZ550S2E receives\ndata from the serial device before connection is established, it changes\nto the client mode and sends the data to the server IP. Therefore,\nduring mixed mode, the server mode is operated prior to the client\nmode.",Object(r.b)("br",{parentName:"p"}),"\n","Like TCP Server mode, the Mixed mode is useful in case where the\nmonitoring center attempts to connect to the serial device, while\nWIZ550S2E is used, to check the device status. In addition to this, if\nany emergency occurs in the serial device, the module will change to\nClient mode to establish the connection to the server and deliver the\nemergency status of the device.  "),Object(r.b)("h4",{id:"udp-mode-communication"},"UDP mode Communication"),Object(r.b)("p",null,"UDP is not a connection oriented protocol but the communication port\nshould be defined well. If UDP mode is selected, the data from serial\ninterface can be defined where to deliver via the \u201cRemote host\u201d and\n\u201cRemote port.\u201d The WIZ550S2E can also be defined where to receive\nEthernet data from via the \u201cRemote host\u201d and \u201cLocal port\u201d definition.",Object(r.b)("br",{parentName:"p"}),"\n","If the data destination and source are the same, the two IP addresses\nwill also be the same. Please note that the destination and source are\nusing the same port.  "),Object(r.b)("h3",{id:"timer"},"Timer"),Object(r.b)("h4",{id:"inactivity"},"Inactivity"),Object(r.b)("p",null,"When there is no data transmission, the connection will close\nautomatically after the specified inactivity time. If the default value\n\u20180\u2019 is set as the Inactivity time, the network connection is\nmaintained even though there is no data transmission. In this case, you\nshould use the \u2018Close\u2019 command to close the connection.",Object(r.b)("br",{parentName:"p"}),"\n","This function is useful when there are two or more systems connected to\nthe WIZ550S2E module. If one system is connected to the WIZ550S2E, other\nsystems cannot connect to the module simultaneously. Therefore, the\ninactivity time should be set and the other system can connect to the\nmodule after the inactivity time is elapsed.",Object(r.b)("br",{parentName:"p"}),"\n","Inactivity Time can also be used if the server system unexpectedly shuts\ndown. In this case, there is no data communication, and WIZ550S2E will\nclose the connection and enter into waiting state if the defined\ninactivity time elapses."),Object(r.b)("h4",{id:"reconnection"},"Reconnection"),Object(r.b)("p",null,'This is the interval time which WIZ550S2E tries to connect again after\nconnection is closed. This is valid only in "Client mode" or "Mixed\nmode" having data from serial prior to TCP connection is established.  '),Object(r.b)("hr",null),Object(r.b)("h2",{id:"serial-configurations"},"Serial Configurations"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/products/wiz550s2e/wiz550s2epg_kr/configtool/serial_config.png",alt:null}))),Object(r.b)("h3",{id:"usart"},"USART"),Object(r.b)("p",null,"This menu is used for setting the serial port.",Object(r.b)("br",{parentName:"p"}),"\n","Baud Rate :"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"    WIZ550S2E's Baud Rate\nData Bits : \n    WIZ550S2E's Data Bits (7,8,9)\nParity : \n    WIZ550S2E's Parity Bits\nStop Bits : \n    WIZ550S2E's stop Bits\nFlow : \n    WIZ550S2E's Flow Control & RS422/RS485\n")),Object(r.b)("h3",{id:"at-command"},"AT Command"),Object(r.b)("p",null,"This function is for module configuration through network with the\nconfiguration tool serial communication. The serial command mode is\nenabled as default.  "),Object(r.b)("h3",{id:"packing-conditions"},"Packing Conditions"),Object(r.b)("p",null,"Normally, data received from UART are sent to Ethernet immediately. But\nin many cases, users want to send data as a chunk of the whole frame\nwithout separated ones. This option is for packetizing data into one\nframe."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Time (0 ~ 65535 ms, \u20180\u2019: Function Disable) : \n    This field is for specifying time value to judge whether one frame \n    is received totally. If the time specified in this field is expired \n    after receiving one byte, then WIZ550S2E notice one data frame is finished, \n    make an Ethernet packet with all data in its serial buffer and send it to \n    the peer system via Ethernet. \n    If WIZ550S2E receives another byte from UART before the specified time is expired, \n    it restart timer and add the received one to the end of serial data buffer.       \nSize (0 ~ 255 byte, \u20180\u2019: Function Disable) : \n    This field is for specifying size value to judge whether one frame is \n    received totally. If the size specified in this field is received, then WIZ550S2E \n    notice one data frame is finished, make an Ethernet packet with specifying size's \n    data in its serial buffer and send it to the peer system via Ethernet. \nChar : \n    This field is for specifying delimiter value to judge whether one frame is received \n    totally. Char delimiters can be set up to 4 bytes in HEX and valid character count is decided \n    according to the value in Length field. In case the value of Length field is '0', \n    this option becomes inactivated. \n    Appendix is another option for this. If user selects any value in Appendix field, WIZ550S2E make \n    an ethernet packet with all received data by Char delimiter and next bytes in counts, \n    which designated by Appendix field. \n    When Appendix is set with any value, not '0', even though WIZ550S2E received Char delimiters, \n    it will wait until it receives next data.\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"options-configurations"},"Options Configurations"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/products/wiz550s2e/wiz550s2epg_kr/configtool/option_config.png",alt:null}))),Object(r.b)("h3",{id:"module-name"},"Module Name"),Object(r.b)("p",null,"The device name is displayed in this area.",Object(r.b)("br",{parentName:"p"}),"\n","User can use this name to distinguish this module with others"),Object(r.b)("h3",{id:"password"},"Password"),Object(r.b)("p",null,"This is password field for authentication.  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'Setting Password : \n    Configure Tool Setting Password. Critical functions like "Setting", "Firmware Upload", \n    "Reset" and "Factory Reset" need this password to try issued action and avoid \n    unauthorized users\' command.\n    When user wants to change its default Setting Password with new one, put new one in this field.\nConnection Password : \n    When WIZ550S2E is tcp server, it needs connection password to check whether client is \n    an unauthorized user or not. After Client is connected, it must transfer correct \n    "Connection Password" within 3 seconds. Otherwise, WIZ550S2E will close its TCP connection.\n')),Object(r.b)("h3",{id:"dhcp"},"DHCP"),Object(r.b)("p",null,'This decides how to obtain IP address. If user selects "Use DHCP" then\nWIZ550S2E will obtain IP address dynamically by DHCP operation.\nOtherwise, it will operate in static mode.  '),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'Static mode :  \n  If user uses this mode by deselecting "Use DHCP", \n  user has to set WIZ550S2E with specific network information.  \n  1) First, select "MAC address" in "Search Windows"  \n  2) Then, IP setting section will be activated  \n  3) Fill those fields with information which user want to set.  \n  4) And press "Setting" button then network information will be changed with value user entered.\nDHCP mode :\n  WIZ550S2E\'s network information will be set automatically without user\'s interference.\n')),Object(r.b)("h3",{id:"dns"},"DNS"),Object(r.b)("p",null,"This is valid in TCP Client mode only. Normally, TCP Client mode has to\nknow its peer system's IP address. But there are some cases where the IP\naddress is unknown and especially when the IP address change\nfrequently.",Object(r.b)("br",{parentName:"p"}),"\n","In this case, DNS function is needed."),Object(r.b)("p",null,"User has to select \u201cUse DNS\u201d option and set DNS Server IP address and\npeer systems' Domain name in string. Put DNS Server IP, provided by ISP,\ninto \u201cDNS Server IP\u201d field and peer system's Domain name into \u201cDomain\u201d\nfield."),Object(r.b)("hr",null))}b.isMDXComponent=!0},475:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,p=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return n?i.a.createElement(p,c({ref:t},s,{components:n})):i.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);