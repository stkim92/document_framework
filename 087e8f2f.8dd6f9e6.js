(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(9),o=(n(0),n(626)),r={id:"configuration_tool_eng",title:"Configuration Tool(Eng)",date:new Date("2020-04-16T00:00:00.000Z")},c={id:"Product/S2E-Module/WIZ550S2E/configuration_tool_eng",title:"Configuration Tool(Eng)",description:"## Content\r",source:"@site/docs\\Product\\S2E-Module\\WIZ550S2E\\Configuration_Tool(Eng).md",permalink:"/document_framework/docs/Product/S2E-Module/WIZ550S2E/configuration_tool_eng",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/S2E-Module/WIZ550S2E/Configuration_Tool(Eng).md",sidebar:"someSidebar",previous:{title:"Configuration Tool(Kor)",permalink:"/document_framework/docs/Product/S2E-Module/WIZ550S2E/configuration_tool_kor"},next:{title:"Configuration Tool(Chn)",permalink:"/document_framework/docs/Product/S2E-Module/WIZ550S2E/configuration_tool_chn"}},l=[{value:"Content",id:"content",children:[]},{value:"Description",id:"description",children:[]},{value:"Common Configurations",id:"common-configurations",children:[{value:"Search",id:"search",children:[]},{value:"Setting",id:"setting",children:[]},{value:"F/W Uploading",id:"fw-uploading",children:[]},{value:"Reset",id:"reset",children:[]},{value:"Factory Reset",id:"factory-reset",children:[]},{value:"Exit",id:"exit",children:[]},{value:"Search Window",id:"search-window",children:[]},{value:"Search Method",id:"search-method",children:[]},{value:"Firmware Version",id:"firmware-version",children:[]},{value:"Network Status",id:"network-status",children:[]}]},{value:"Network Configurations",id:"network-configurations",children:[{value:"Timer",id:"timer",children:[]}]},{value:"Serial Configurations",id:"serial-configurations",children:[{value:"USART",id:"usart",children:[]},{value:"AT Command",id:"at-command",children:[]}]},{value:"Options Configurations",id:"options-configurations",children:[{value:"Module Name",id:"module-name",children:[]},{value:"Password",id:"password",children:[]},{value:"DHCP",id:"dhcp",children:[]},{value:"DNS",id:"dns",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"content"},"Content"),Object(o.b)("h1",{id:"configuration-tool"},"Configuration Tool"),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/global_config.png",alt:null})),"\nWIZ550S2E Configuration tool is an application program which is based on\njava and can be used in most OS platforms including Windows, MAC OS and\nLinux. Please download .jar file and execute it over Java Virtual\nMachine."),Object(o.b)("p",null,"There are two options on how to run the configuration tool."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run the jar file from the GUI environment.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"The jar file cannot be opened if the jar file is perceived as a\ncompressed file. In this case, modify the setting of the\ncompression software and do not open the jar file in compressed\nfile method."),Object(o.b)("li",{parentName:"ol"},"In case of Linux or Mac, the following must be given permission.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"chmod 0755 WIZ550S2E","_","Configuration","_","Tool.jar"))))),Object(o.b)("li",{parentName:"ol"},"Enter the following command in the terminal to run the program.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"java -jar WIZ550S2E","_","Configuration","_","Tool.jar")))),Object(o.b)("p",null,"WIZ550S2E Configuration tool consists four sections"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Common Configuration Section"),Object(o.b)("li",{parentName:"ol"},"Network Configuration Section"),Object(o.b)("li",{parentName:"ol"},"Serial Configuration Section"),Object(o.b)("li",{parentName:"ol"},"Option Configuration Section")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"common-configurations"},"Common Configurations"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/common_config.png",alt:null}))),Object(o.b)("h3",{id:"search"},"Search"),Object(o.b)("p",null,"The Search function is used to search for all existing WIZnet's WIZ550\nseries modules on the same LAN. By using UDP broadcast, it finds all\nmodules on the same subnet, and found devices will be listed in the\n\u201cSerial to Ethernet\u201d tree(Search Window) with its MAC address.  "),Object(o.b)("h3",{id:"setting"},"Setting"),Object(o.b)("p",null,"This function is used to apply your configurations.",Object(o.b)("br",{parentName:"p"}),"\n","When you select the MAC address from the \u201cSearch Window\u201d, the default\nvalue of the module will be displayed. Modify your configurations and\nclick \u201cSetting\u201d button to apply your settings. The module will\nre-initialize and save the changed configurations.",Object(o.b)("br",{parentName:"p"}),"\n","Users can change the configurations by the following steps.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/products/wiz550s2e/wiz550s2epg_kr/configtool/password.png",alt:null}))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'1. Select the MAC address of the device which you would like to modify in the\n   \u201cSearch Window\u201d\n2. Modify the settings according to your needs\n3. Click the \u201cSetting\u201d button and then "Password Input Windows" pop up\n  - Default Password is "WIZnet"\n4. Input "Setting Password" and Click "OK" button\n5. The module will be initialized by a re-booting process\n6. To verify your settings, please click \u2018Search\u2019 button and view your new \n   settings\n')),Object(o.b)("h3",{id:"fw-uploading"},"F/W Uploading"),Object(o.b)("p",null,"Firmware will be uploaded through TFTP. Click \u201cF/W Uploading\u201d Button and\na popup window will shows as follow.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/tftp_server_info.png",alt:null})),Object(o.b)("br",{parentName:"p"}),"\n","Server IP : TFTP Server IP"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Server Port : TFTP Server Port (TFTP default Port : 69)\nFile Name : Firmware File Name\nPassword : Setting Password\n")),Object(o.b)("p",null,"\u261e WIZ550S2E Configure tool is not supported TFTP server. So you use TFTP\nprogram separately."),Object(o.b)("h3",{id:"reset"},"Reset"),Object(o.b)("p",null,"This is the function which makes Module reboot. This requires password\nto reboot."),Object(o.b)("h3",{id:"factory-reset"},"Factory Reset"),Object(o.b)("p",null,"All setting value is initialized to factory default, if the \u201cFactory\nReset\u201d button is clicked. Factory default values of WIZ550S2E are listed\nbelow.",Object(o.b)("br",{parentName:"p"}),"\n","^ Category ^ Item ^ Value ^"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null})))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Network")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Local IP"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"192.168.11.100")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Local Gateway"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"192.168.11.1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Local Subnet"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"255.255.255.0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Local Port"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5000")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Remote Port"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"5000")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Working Mode"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TCP Server")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Inactivity"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Reconnection"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1000")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Serial")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Baud Rate"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"115200")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Data Bits"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Parity"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NONE")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Stop Bits"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Flow"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NONE")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"AT Command USE"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Enable")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Trigger Code"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2B/ 2B / 2B")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Packing Condition Time"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Packing Condition Size"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delimeter Length"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delimeter"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2D / 2D / 2D / 2D")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delimeter Appendix"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Options")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Module Name"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WIZ550S2E")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Setting Password"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WIZnet")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Connection Password"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"WIZnet")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DHCP USE"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Disable")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DNS USE"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Disable")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),":::"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DNS Server IP"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8.8.8.8")))),Object(o.b)("h3",{id:"exit"},"Exit"),Object(o.b)("p",null,"Close the configuration tool program window.  "),Object(o.b)("h3",{id:"search-window"},"Search Window"),Object(o.b)("p",null,"If you click the \u201cSearch\u201d button, all MAC addresses on the same subnet\nwill be displayed.  "),Object(o.b)("h3",{id:"search-method"},"Search Method"),Object(o.b)("p",null,"Reserved"),Object(o.b)("h3",{id:"firmware-version"},"Firmware Version"),Object(o.b)("p",null,"It displays the firmware version.  "),Object(o.b)("h3",{id:"network-status"},"Network Status"),Object(o.b)("p",null,"This field shows the current status of network connection."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Connected : This means that TCP connection is established.\nDisconnected : This measn that TCP connection is disconnected.\nUDP : This means that UDP mode is used.\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"network-configurations"},"Network Configurations"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/network_config.png",alt:null})),"  "),Object(o.b)("h4",{id:"ip"},"IP"),Object(o.b)("p",null,"This section is for setting WIZ550S2E mode's network information  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'IP: \n    WIZ550S2E\'s IP Address\nGateway: \n    WIZ550S2E\'s Gateway Address\nSubnet mask: \n    WIZ550S2E\'s Subnet Mask\nHost IP: \n    Peer system\'s IP address which WIZ550S2E connects(or sends) to, \n    when its operating mode is "TCP Client","TCP Mixed" or "UDP".\n')),Object(o.b)("p",null,"\u261e If you are unclear about your Local IP, Subnet Mask, Gateway\ninformation, you have to get this information from your network\nadministrator. If the IP address is not correct, IP collision or network\nproblems may occur.  "),Object(o.b)("h4",{id:"port"},"Port"),Object(o.b)("p",null,"This section is for setting WIZ550S2E's Port information."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Local port : \n    WIZ550S2E\'s local port number\nRemote port : \n    Peer system socket\'s port number which WIZ550S2E connects(or sends) to ,\n    when its operating mode is "TCP Client","TCP Mixed" or "UDP".\n')),Object(o.b)("h4",{id:"working-mode"},"Working Mode"),Object(o.b)("p",null,"The working mode of WIZ550S2E can be divided into TCP Server, TCP Client and TCP Mixed according to the connection\nestablishing method, but UDP processes the data communication without connection establishment.  "),Object(o.b)("p",null,"During TCP server mode, WIZ550S2E operates as the server and waits for\nthe connection trial from the client. WIZ550S2E operates as the client\nin TCP Client mode and tries to connect to the server\u2019s IP and Port.\nMixed mode supports both Server and Client. The communication process of\neach mode is as below."),Object(o.b)("h4",{id:"tcp-server-mode-communication"},"TCP server mode communication"),Object(o.b)("p",null,"During the TCP Server mode, WIZ550S2E waits for the connection request.\nTCP Server mode can be useful when the monitoring center attempts to\nconnect to the device, while WIZ550S2E is installed, in order to check\nthe status or provide commands. Normally WIZ550S2E is on the waiting\nstatus, and if connection request (SYN) from the monitoring center is\nreceived, the connection is established (ESTABLISH), and data\ncommunication is processed (Data Transaction), and finally connection is\nclosed (FIN). In order to operate this mode, \u201cDevice IP\u201d, \u201cSubnet mask\u201d,\n\u201cGateway\u201d and \u201cLocal port\u201d should be configured first."),Object(o.b)("p",null,"For TCP server mode communication, all network configurations including\nLocal IP, Subnet, Gateway and Local port number should be set correctly."),Object(o.b)("p",null,"The Data transmission proceeds as below."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The host connects to the WIZ550S2E which is configured as TCP Server\nmode."),Object(o.b)("li",{parentName:"ol"},"As the connection is established, data can be transmitted in both\ndirections ")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"   (host -> WIZ550S2E / WIZ550S2E -> host)\n")),Object(o.b)("h4",{id:"tcp-client-mode-communication"},"TCP client mode communication"),Object(o.b)("p",null,"If WIZ550S2E is set as TCP Client, it tries to establish connection to\nthe TCP server. To operate this mode, \u201cDevice IP\u201d, \u201cSubnet mask\u201d,\n\u201cGateway\u201d, \u201cRemote host\u201d, and \u201cRemote port\u201d should be set. If \u201cRemote\nhost\u201d has a domain name, you should use the \u201cDNS server\u201d field. In TCP\nClient mode, WIZ550S2E can actively establish a TCP connection to a host\ncomputer when power is supplied."),Object(o.b)("p",null,"The Data transmission proceeds as below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"As power is supplied, WIZ550S2E board operating as TCP client mode\nactively establishes a connection to the TCP server."),Object(o.b)("li",{parentName:"ol"},"If the connection is complete, data can be transmitted in both\ndirections")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"   (host -> WIZ550S2E / WIZ550S2E -> host)\n")),Object(o.b)("h4",{id:"tcp-mixed-mode-communication"},"TCP Mixed mode Communication"),Object(o.b)("p",null,"In this mode, WIZ550S2E normally operates as TCP Server and waits for\nthe connection request from the peer. However, if WIZ550S2E receives\ndata from the serial device before connection is established, it changes\nto the TCP client mode and sends the data to the TCP server IP.\nTherefore, during TCP mixed mode, the TCP server mode is operated prior\nto the TCP client mode.  "),Object(o.b)("p",null,"Like TCP Server mode, the TCP Mixed mode is useful in case where the\nmonitoring center attempts to connect to the serial device, while\nWIZ550S2E is used, to check the device status. In addition to this, if\nany emergency occurs in the serial device, the module will change to TCP\nClient mode to establish the connection to the TCP server and deliver\nthe emergency status of the device."),Object(o.b)("h4",{id:"udp-mode-communication"},"UDP mode Communication"),Object(o.b)("p",null,"UDP is not a connection oriented protocol but the communication port\nshould be defined well. If UDP mode is selected, the data from serial\ninterface can be defined where to deliver via the \u201cRemote host\u201d and\n\u201cRemote port.\u201d The WIZ550S2E can also be defined where to receive\nEthernet data from via the \u201cRemote host\u201d and \u201cLocal port\u201d definition.  "),Object(o.b)("p",null,"If the data destination and source are the same, the two IP addresses\nwill also be the same. Please note that the destination and source are\nusing the same port.  "),Object(o.b)("h3",{id:"timer"},"Timer"),Object(o.b)("h4",{id:"inactivity"},"Inactivity"),Object(o.b)("p",null,"When there is no data transmission, the connection will close\nautomatically after the specified inactivity time. If the default value\n\u20180\u2019 is set as the Inactivity time, the network connection is\nmaintained even though there is no data transmission. In this case, you\nshould use the \u2018Close\u2019 command to close the connection.  "),Object(o.b)("p",null,"This function is useful when there are two or more systems connected to\nthe WIZ550S2E module. If one system is connected to the WIZ550S2E, other\nsystems cannot connect to the module simultaneously. Therefore, the\ninactivity time should be set and the other system can connect to the\nmodule after the inactivity time is elapsed.  "),Object(o.b)("p",null,"Inactivity Time can also be used if the TCP server system unexpectedly\nshuts down. In this case, there is no data communication, and WIZ550S2E\nwill close the connection and enter into waiting state if the defined\ninactivity time elapses."),Object(o.b)("h4",{id:"reconnection"},"Reconnection"),Object(o.b)("p",null,'This is the interval time which WIZ550S2E tries to connect again after\nconnection is closed. This is valid only in "TCP Client" or "TCP Mixed"\nhaving data from serial prior to TCP connection is established.  '),Object(o.b)("hr",null),Object(o.b)("h2",{id:"serial-configurations"},"Serial Configurations"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/serial_config.png",alt:null}))),Object(o.b)("h3",{id:"usart"},"USART"),Object(o.b)("p",null,"This menu is used for setting the serial port.",Object(o.b)("br",{parentName:"p"}),"\n","Baud Rate :"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"    WIZ550S2E's Baud Rate\nData Bits : \n    WIZ550S2E's Data Bits (7,8,9)\nParity : \n    WIZ550S2E's Parity Bits\nStop Bits : \n    WIZ550S2E's stop Bits\nFlow : \n    WIZ550S2E's Flow Control & RS422/RS485\n")),Object(o.b)("h3",{id:"at-command"},"AT Command"),Object(o.b)("p",null,"This function is controlling the module to allow the module could be\ncapable to control the module through serial terminal (AT command).  "),Object(o.b)("p",null,"Module Default setting: Enable",Object(o.b)("br",{parentName:"p"}),"\n","Default trigger to AT command: 2B 2B 2B in Hex.  "),Object(o.b)("h4",{id:"packing-conditions"},"Packing Conditions"),Object(o.b)("p",null,"Normally, data received from UART are sent to Ethernet immediately. But in many cases, users want to send data as a\nchunk of the whole frame without separated ones. This option is for packetizing data into one frame."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Time (0 ~ 65535 ms, \u20180\u2019: Function Disable) : \n    This field is for specifying time value (in ms) to judge whether one frame \n    is received totally. If the time specified in this field is expired \n    after receiving one byte, then WIZ550S2E notice one data frame is finished, \n    make an Ethernet packet with all data in its serial buffer and send it to \n    the peer system via Ethernet. \n    If WIZ550S2E receives another byte from UART before the specified time is expired, \n    it restart timer and add the received one to the end of serial data buffer.\nSize (0 ~ 255 byte, \u20180\u2019: Function Disable) : \n    This field is for specifying size value to judge whether one frame is \n    received totally. If the size specified in this field is received, then WIZ550S2E \n    notice one data frame is finished, make an Ethernet packet with specifying size's \n    data in its serial buffer and send it to the peer system via Ethernet.       \nChar : \n    This field is for specifying delimiter value to judge whether one frame is \n    received totally. Char delimiters can be set up to 4 bytes in HEX and valid \n    character count is decided according to the value in Length field. In case the \n    value of Length field is '0', this option becomes inactivated. \n    Appendix is another option for this. If user selects any value in Appendix field,\n    WIZ550S2E make an ethernet packet with all received data by Char delimiter and \n    next bytes in counts, which designated by Appendix field. \n    When Appendix is set with any value, not '0', even though WIZ550S2E received Char \n    delimiters, it will wait until it receives next data.\n    -----\n")),Object(o.b)("h2",{id:"options-configurations"},"Options Configurations"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/wiz550s2e/wiz550s2epg_kr/configtool/option_config.png",alt:null}))),Object(o.b)("h3",{id:"module-name"},"Module Name"),Object(o.b)("p",null,"The device name is displayed in this area.",Object(o.b)("br",{parentName:"p"}),"\n","User can use this name to distinguish this module with others"),Object(o.b)("h3",{id:"password"},"Password"),Object(o.b)("p",null,"This is password field for authentication.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Setting Password : \n    Setting Password for Configuration Tool. Critical functions like "Setting", \n    "Firmware Upload","Reset" and "Factory Reset" need this password to try issued \n    action and avoid unauthorized users\' command.\n    When user wants to change its default Setting Password with new one, put new \n    one in this field.\nConnection Password : \n    When WIZ550S2E is TCP server, it needs connection password to check whether TCP \n    client is an unauthorized user or not. After TCP Client is connected, it must \n    transfer correct "Connection Password" within 3 seconds. Otherwise, WIZ550S2E \n    will close its TCP connection.\n')),Object(o.b)("h3",{id:"dhcp"},"DHCP"),Object(o.b)("p",null,'This decides how to obtain IP address. If user selects "Use DHCP" then\nWIZ550S2E will obtain IP address dynamically by DHCP operation.\nOtherwise, it will operate in static mode.  '),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'Static mode :  \n  If user uses this mode by deselecting "Use DHCP", \n  user has to set WIZ550S2E with specific network information.  \n  1) First, select "MAC address" in "Search Windows"  \n  2) Then, IP setting section will be activated  \n  3) Fill those fields with information which user want to set.  \n  4) And press "Setting" button then network information will be \n     changed with value user entered.\nDHCP mode :\n  WIZ550S2E\'s network information will be set automatically without user\'s interference.\n')),Object(o.b)("h3",{id:"dns"},"DNS"),Object(o.b)("p",null,"This is valid in TCP Client mode only. Normally, TCP Client mode has to\nknow its peer system's IP address. But there are some cases where the IP\naddress is unknown and especially when the IP address change\nfrequently.",Object(o.b)("br",{parentName:"p"}),"\n","In this case, DNS function is needed."),Object(o.b)("p",null,"User has to select \u201cUse DNS\u201d option and set DNS Server IP address and\npeer systems' Domain name in string. Put DNS Server IP, provided by ISP,\ninto \u201cDNS Server IP\u201d field and peer system's Domain name into \u201cDomain\u201d\nfield."),Object(o.b)("hr",null))}b.isMDXComponent=!0},626:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,p=d["".concat(r,".").concat(m)]||d[m]||u[m]||o;return n?i.a.createElement(p,c({ref:t},s,{components:n})):i.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);