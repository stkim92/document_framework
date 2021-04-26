(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),b=(a(0),a(578)),i={id:"getting_started_guide_eng",title:"Getting Started Guide(Eng)",date:new Date("2020-04-13T00:00:00.000Z")},l={unversionedId:"Product/App-Module/WIZ550web/getting_started_guide_eng",id:"Product/App-Module/WIZ550web/getting_started_guide_eng",isDocsHomePage:!1,title:"Getting Started Guide(Eng)",description:"WIZ550web is an embedded Web server module based on WIZnet\u2019s W5500",source:"@site/docs\\Product\\App-Module\\WIZ550web\\Getting_Started_Guide(Eng).md",permalink:"/Product/App-Module/WIZ550web/getting_started_guide_eng",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/App-Module/WIZ550web/Getting_Started_Guide(Eng).md",sidebar:"docs",previous:{title:"Datasheet(Kor)",permalink:"/Product/App-Module/WIZ550web/datasheet_kor"},next:{title:"Getting Started Guide(Kor)",permalink:"/Product/App-Module/WIZ550web/getting_started_guide_kor"}},o=[{value:"Product Preview",id:"product-preview",children:[]},{value:"Hello World",id:"hello-world",children:[{value:"Product Contents",id:"product-contents",children:[]},{value:"SD card Initialization",id:"sd-card-initialization",children:[]},{value:"Data flash Initialization",id:"data-flash-initialization",children:[]},{value:"Serial Debug Message",id:"serial-debug-message",children:[]}]},{value:"WIZ550web Web Server",id:"wiz550web-web-server",children:[{value:"Web Server Basic Operations",id:"web-server-basic-operations",children:[]},{value:"CGI for WIZ550web",id:"cgi-for-wiz550web",children:[]}]},{value:"Basic Webpages Demo",id:"basic-webpages-demo",children:[{value:"Device Settings",id:"device-settings",children:[]},{value:"Digital I/O Status",id:"digital-io-status",children:[]},{value:"ADC Status",id:"adc-status",children:[]},{value:"I/O Configuration",id:"io-configuration",children:[]},{value:"Serial Data",id:"serial-data",children:[]},{value:"Note",id:"note",children:[]}]},{value:"WIZ550web Customizing",id:"wiz550web-customizing",children:[{value:"Basics",id:"basics",children:[]},{value:"WIZ550web Web I/O Examples",id:"wiz550web-web-io-examples",children:[]}]}],c={rightToc:o};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"WIZ550web is an embedded Web server module based on WIZnet\u2019s W5500\nhardwired TCP/IP chip, Users can control & monitor the 16-configurable\ndigital I/O and 4-ADC inputs on module via web pages. WIZ550web provides\nthe firmware & web page examples for user\u2019s customization."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"This page describes the following topics:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Product Preview")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Hello world"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Product contents"),Object(b.b)("li",{parentName:"ul"},"SD card initialization"),Object(b.b)("li",{parentName:"ul"},"Data flash initialization"),Object(b.b)("li",{parentName:"ul"},"Serial debug message"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"WIZ550web Basic operations and CGI")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Basic Webpage Demo")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Examples for WIZ550web customization"))),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/wiz550web_front.png",alt:null}))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Users can download the following source codes from the 'WIZ550web\nGitHub Repository'")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Firmware source code (The projects base on Eclipse IDE)",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Application / Boot layer Firmware"))),Object(b.b)("li",{parentName:"ul"},"Demo webpage")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"WIZ550web GitHub Repository")),Object(b.b)("p",null,"\ud83c\udf0e",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550web"}),"https://github.com/Wiznet/WIZ550web")),Object(b.b)("p",null," ",Object(b.b)("strong",{parentName:"p"},"WIZ550web GitHub Page")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Develop Environment")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Eclipse IDE for C/C++ Developers, Kepler Service Release 2"),Object(b.b)("li",{parentName:"ul"},"ARM GCC 4.8.3 (2014q1)")),Object(b.b)("h2",{id:"product-preview"},"Product Preview"),Object(b.b)("hr",null),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/wiz550webgsg/wiz550web_product_preview.png",alt:null}))),Object(b.b)("h2",{id:"hello-world"},"Hello World"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"product-contents"},"Product Contents"),Object(b.b)("h4",{id:"part-no-wiz550web"},"Part No: WIZ550web"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"WIZ550web module x 1")),Object(b.b)("h4",{id:"part-no-wiz550web-evb"},"Part No: WIZ550web-EVB"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"WIZ550web module x 1"),Object(b.b)("li",{parentName:"ul"},"WIZ550web baseboard x 1"),Object(b.b)("li",{parentName:"ul"},"LAN cable x 1"),Object(b.b)("li",{parentName:"ul"},"Serial cable x 1"),Object(b.b)("li",{parentName:"ul"},"12V Power adapter x 1")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"WIZ550web module &\nEVB support microSD card"),"\n",Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/sdcard/sandisk-4gb-micro-sd-memory-card.mobiles_productpage.left.png",alt:null})),"\n","*"," Provides Sandisk 4GB microSD card but can be substituted with\ndifferent product that has same features depends on manufacturer."),Object(b.b)("p",null,"Recommend to use listed SD card in case of using different SD card."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Vendor"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Capacity(Bytes)"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Class"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sandisk"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2G"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SD"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"n/a")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),":::"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4G"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SDHC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),":::"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"8G"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SDHC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Samsung"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4G"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SDHC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transcend"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4G"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SDHC"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4,10")))),Object(b.b)("h3",{id:"sd-card-initialization"},"SD card Initialization"),Object(b.b)("p",null,"The WIZ550web uses a Micro SD card as a storage media for web content.\nThe SD card isn't included with module. The SD card supports\n",Object(b.b)("strong",{parentName:"p"},"FAT"),"[","1","]"," file system format and we recommend to use FAT32."),Object(b.b)("p",null,"The process for using the SD card as a storage media for web content of\nWIZ550web is described below."),Object(b.b)("h4",{id:"-the-process-for-using-the-sd-card-for-windows"},">",">"," The process for using the SD card (for Windows)"),Object(b.b)("p",null,"1","."," Format a Micro SD card with FAT32 file system"),Object(b.b)("p",null,"Insert the Micro SD card into an SD card reader and format it with the\nWindows explorer"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/sdcard/sdcard_select_format_box.jpg",alt:null}))),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/sdcard/sdcard_format_process_box.jpg",alt:null}))),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/sdcard/sdcard_format_warning_box.jpg",alt:null}))),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/sdcard/sdcard_format_complete.jpg",alt:null}))),Object(b.b)("p",null,"2","."," Download the demo web page from ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550web"}),"WIZ550web GitHub\nrepository")),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/sdcard/sdcard_github_clone_box.jpg",alt:null}))),Object(b.b)("p",null,"3","."," Copy the demo Web page to the Micro SD card"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/sdcard/sdcard_webpage_folder_merge_box.jpg",alt:null}))),Object(b.b)("p",null,"4","."," Insert the Micro SD card into the SD card slot of WIZ550web"),Object(b.b)("p",null,"5","."," After powering up the module you can access the webserver."),Object(b.b)("h3",{id:"data-flash-initialization"},"Data flash Initialization"),Object(b.b)("p",null," ",Object(b.b)("strong",{parentName:"p"},"We support storage method of data\nflash as well as SD card after v1.1.0 release."),"\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZ550web/releases"}),"https://github.com/Wiznet/WIZ550web/releases")),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"You can use one of a SD card and a data flash. The mount priority of\na SD card is higher than a data flash."),Object(b.b)("li",{parentName:"ol"},"If you wish to use a SD card, you must copy the web page to a SD\ncard and insert a SD card into a slot."),Object(b.b)("li",{parentName:"ol"},"If there is no SD card after 3 seconds, you can use a data flash.",Object(b.b)("ol",{parentName:"li"},Object(b.b)("li",{parentName:"ol"},"You must have the initialization process of data flash.(at least\nonce)"),Object(b.b)("li",{parentName:"ol"},"When SW1 and SW2 are pressed at the same time, the data flash is\ninitialized by FatFs. And reset a target."),Object(b.b)("li",{parentName:"ol"},"You must copy the web page to a data flash by FTP client\ntool.(",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"http://www.altools.com/ALTools/ALFTP.aspx"}),"ALFTP"),")")))),Object(b.b)("p",null,"Refer to WIZ550web+FatFS+FTPServer Project Tutorial.\n(",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://youtu.be/XtnT2_CNgaY"}),"http://youtu.be/XtnT2_CNgaY"),")"),Object(b.b)("p",null,"Refer to WIZ550web+WindowsFTP Tutorial. (",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://youtu.be/kelGSGj3kOQ"}),"http://youtu.be/kelGSGj3kOQ"),")\n",Object(b.b)("strong",{parentName:"p"},"Need to apply a commit\n",Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/Wiznet/WIZ550web/commit/cfce843031bf4657fc9530e5c505a9a3d555fc91"}),"cfce843"),".")),Object(b.b)("p",null,"Refer to WIZ550web+LinuxFTP Tutorial. (",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://youtu.be/6qsPZA5QKEI"}),"http://youtu.be/6qsPZA5QKEI"),")"),Object(b.b)("h3",{id:"serial-debug-message"},"Serial Debug Message"),Object(b.b)("p",null,"When power is applied to the WIZ550web module, the serial debug message\nis print out via UART1 port. This message contains information such as\nthe device name, network configurations, and SD card info."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/wiz550webgsg/serialdebug_terminal_initial_cut.jpg",alt:null}))),Object(b.b)("p",null,"The module will not work during the\ninitialization routine of the WIZ550web firmware if either the ",Object(b.b)("strong",{parentName:"p"},"PHY\nlink status")," or ",Object(b.b)("strong",{parentName:"p"},"SD Card mount")," is not operational."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Please check the following if the module is not working.")),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("strong",{parentName:"li"},"LAN cable connection and Link status (Act LED of the LAN port)")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("strong",{parentName:"li"},"SD card mount status (insertion)"))),Object(b.b)("p",null,"The factory default setting of UART1 is as below and the user can change\nsettings through the demo web pages & AT commands."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"115200-8-N-1"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Baud Rate : 115200"),Object(b.b)("li",{parentName:"ul"},"Data Bit : 8"),Object(b.b)("li",{parentName:"ul"},"Parity : NONE"),Object(b.b)("li",{parentName:"ul"},"Stop Bit : 1"),Object(b.b)("li",{parentName:"ul"},"Flow Control : NONE")))),Object(b.b)("h2",{id:"wiz550web-web-server"},"WIZ550web Web Server"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"web-server-basic-operations"},"Web Server Basic Operations"),Object(b.b)("p",null,"Common web servers and browsers communicate as follows."),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Web browser (user's Webpage) sends HTTP request to web server"),Object(b.b)("li",{parentName:"ol"},"Web server processes the user's request and prepare the results"),Object(b.b)("li",{parentName:"ol"},"Web server sends HTTP response to web browser"),Object(b.b)("li",{parentName:"ol"},"Repeat step 1 ","~"," 3 above")),Object(b.b)("p",null,"Therefore, Web server (HTTP server) of WIZ550web is consists the\nfollowing processes and operates as the flowchart below."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"HTTP Request Parser"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Parse the HTTP Request"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Web Content (web resources) Loader"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Find the requested web content from the web content storage\n(e.g., SD card) and prepare the response"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"HTTP Response Sender"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Send the HTTP response to web browser"),Object(b.b)("li",{parentName:"ul"},"Response vary depending on the processing results",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Successful HTTP requests : HTTP/1.1 200 OK"),Object(b.b)("li",{parentName:"ul"},"The requested resource could not be found : HTTP/1.1 404 Not\nFound"))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"CGI Handler"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Process the ",Object(b.b)("strong",{parentName:"li"},"User's requests")," from web browser"),Object(b.b)("li",{parentName:"ul"},"CGI is the used to set the I/O status or to get the I/O status\ninformation",Object(b.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/wiz550web/wiz550webgsg/wiznet_httpserver_flowchart_v1.png",alt:null})))))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"cgi-for-wiz550web"},"CGI for WIZ550web"),Object(b.b)("p",null,"WIZ550web uses CGI to configure the network or monitor and control the\nI/O."),Object(b.b)("p",null,"CGI is an acronym for 'Common Gateway Interface\u2019 and it operates the\nserver's program and receives results of the client via web. CGI is not\ndependent on a particular language or platform because only the\nconfiguration and policies between the web page and the server needs to\nbe satisfied."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/wiz550webgsg/wiz550web_simple_server-client_diagram.png",alt:null}))),Object(b.b)("p",null,"CGI for WIZ550web consists the 'Request name + .cgi' using HTTP GET/POST\nrequest method. The CGI for each HTTP methods are handled as below."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"GET")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The method for getting the values from web server"),Object(b.b)("li",{parentName:"ul"},"Passed in the form of a ",Object(b.b)("strong",{parentName:"li"},"JavaScript callback function parameters"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Same structures as ",Object(b.b)("strong",{parentName:"li"},"JSON"),"[","1","]"),Object(b.b)("li",{parentName:"ul"},"The function name in the HTTP response body must be the same on\nthe Web page's JavaScript Callback function name"),Object(b.b)("li",{parentName:"ul"},"e.g., If the 'function IoStatusCallback' is Javascript function\nname in the Web page, web server must pass the data as next;\n",Object(b.b)("inlineCode",{parentName:"li"},'IoStatusCallback({"din":[{"v":"1"}, {"v":"0"}],\n"led":[{"v":"1"}, {"v":"0"}]})'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"POST")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The method for putting the changed values to web server"),Object(b.b)("li",{parentName:"ul"},"Values are passing by the ",Object(b.b)("strong",{parentName:"li"},"Web form element")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Name-value pairs"),"; Each pair is separated by '&' and the\nName/value of a pair is represented by '='",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"e.g., 'Pin : 1, Val : 1' =",">"," 'Pin=1\\&Val=1'")))),Object(b.b)("p",null,"Each requests are handled by ",Object(b.b)("strong",{parentName:"p"},"AJAX"),"[","2","]"," techniques for efficient data\nprocessing in the limited resources embedded web server. The advantage\nis that the server avoids the full web page reload and reduces the load\non the server."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"basic-webpages-demo"},"Basic Webpages Demo"),Object(b.b)("p",null,"The Screenshots of Basic Demo Web Page\nwere captured from ",Object(b.b)("strong",{parentName:"p"},"Google Chrome Browser version 37")," "),Object(b.b)("p",null,"Provided basic demo web page of WIZ550web is in tab style of one HTML\npage (index.html). The configuration and purpose of each tabs are as\nbelow."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Device Settings"),": Device information, Network / Serial Port\nconfigurations",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Device Information"),Object(b.b)("li",{parentName:"ul"},"Network Configuration"),Object(b.b)("li",{parentName:"ul"},"Serial Port (for Data & Debug / AT commands)",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"UART1 : Data/Console/Debug/Program port (RS232 on the dev\nboard)"),Object(b.b)("li",{parentName:"ul"},"UART2 : AT command port (RS485/422 on the dev board)")))))),Object(b.b)("p",null,"*"," ",Object(b.b)("strong",{parentName:"p"},"Digital I/O Status"),": Indicates Digital I/O's Direction and Status"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"On-board LED Status"),Object(b.b)("li",{parentName:"ul"},"Digital I/O Direction / Status: When the I/O is output direction, users can be set On/Off")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"ADC Status"),": Displays the Analog input value changes into a bar\ngraphs",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Analog Input Signals")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"I/O Configuration"),": Digital I/O's Direction and Alias settings",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Digital I/O State and Alias Configuration"),Object(b.b)("li",{parentName:"ul"},"Digital I/O Settings Factory Default")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Serial Data"),": Serial data transfer examples via Webpage to UART1.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Serial Tx (Web to UART1) / Rx (UART1 to Web)"),Object(b.b)("li",{parentName:"ul"},"Only the Tx is implemented in the released code.")))),Object(b.b)("h3",{id:"device-settings"},"Device Settings"),Object(b.b)("p",null,"The 'Device Settings' tab is configured as below.\n",Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_1.jpg",alt:null}))),Object(b.b)("p",null,"The user can check the device information like MAC address / Firmware\nversion and set the network information (IP address, DHCP options and\netc.), serial port configuration through the 'Device Settings' tab.\nAfter adjusting the settings, if the ",Object(b.b)("strong",{parentName:"p"},"[","Save Settings and Reboot","]"),"\nbutton is pressed, the configurations is saved and the WIZ550web module\nreboots. Please note that the module will change the settings after\nreboot.  "),Object(b.b)("p",null,"If the 'DHCP' option has enabled (DHCP Enable: IP address allocated from\nDHCP server), Network information HTML input tag is disabled and\nattribute changed to disabled. If the user successfully allocated the IP\naddress from DHCP server after module reboot, the modified debug message\nis output to terminal as below."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_dhcp_enabled_checked.jpg",alt:null}))),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/serialdebug_terminal_dhcp_checked.jpg",alt:null}))),Object(b.b)("h3",{id:"digital-io-status"},"Digital I/O Status"),Object(b.b)("p",null,"The 'Digital I/O Status' tab is configured as below.\n",Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_2.jpg",alt:null}))),Object(b.b)("p",null,"[","On-board LED","]"," WIZ550web's LEDs can be control by On/Off button in web\npage.",Object(b.b)("br",{parentName:"p"}),"\n","[","Digital I/O Status","]"," Digital I/O Status indicates the current status.\nWhen the I/O is output, users can set On/Off. Each I/O information are\nconfigured as below."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Pin number")," (e.g., D0)",Object(b.b)("strong",{parentName:"li"},": Direction")," (Input / Output / NotUsed)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Status LED Images"),"\n(",Object(b.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/wiz550web/webpage_basicdemo/dio_on.png",alt:null}))," Blue LED /\n",Object(b.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/wiz550web/webpage_basicdemo/di_on.png",alt:null}))," Green LED /\n",Object(b.b)("img",Object(n.a)({parentName:"li"},{src:"/img/products/wiz550web/webpage_basicdemo/di_off.png",alt:null}))," Off)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"On/Off Buttons")," (for Output directions)\nFor 'Input',",Object(b.b)("br",{parentName:"li"}),"-"," On/Off button is not indicated. If the input signal is 'high', the\n'green LED' is turned on.",Object(b.b)("br",{parentName:"li"}),"For 'Output',",Object(b.b)("br",{parentName:"li"}),"-"," On/Off button is indicated. If the output signal is 'high', the 'blue\nLED' is turned on.",Object(b.b)("br",{parentName:"li"}),"For 'NotUsed',",Object(b.b)("br",{parentName:"li"}),"-"," On/Off button is not indicated. turned off the LED (off LED).",Object(b.b)("br",{parentName:"li"}),"")),Object(b.b)("p",null,"Users can set each I/O directions in 'I/O configuration' tab. See below\nfor digital I/O status setting examples."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_2_io_examples.jpg",alt:null}))),Object(b.b)("h3",{id:"adc-status"},"ADC Status"),Object(b.b)("p",null,"The 'ADC Status' tab is configured as below.\n",Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_3_cut.jpg",alt:null}))),Object(b.b)("p",null,"The Analog input signal through ADC changes into a bar graphs is\ndisplayed in real-time.",Object(b.b)("br",{parentName:"p"}),"\n","WIZ550web baseboard is equipped with Potentiometer and Temperature\nsensor on A0 / A1. For example, by adjusting the value of the\nPotentiometer (A0), users can see the changes in the graph as below."),Object(b.b)("h3",{id:"io-configuration"},"I/O Configuration"),Object(b.b)("p",null,"The 'I/O Configuration' tab is configured as below.\n",Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_4.jpg",alt:null}))),Object(b.b)("p",null,"Change of the I/O Directions and Aliases setting will be reflected\nimmediately. Each I/O's LED images are the same as I/O status page (Blue\n/ Green / Off)."),Object(b.b)("p",null,"Only when the 'Not Used' option is selected, the red 'X' is displayed\nfor visibility."),Object(b.b)("p",null,"When you press the ",Object(b.b)("strong",{parentName:"p"},"[","IO Settings Factory Reset and Reboot","]")," button,\nthe WIZ550web module factory reset is executed, and is rebooted. Please\nnote that the module is rebooted into default settings."),Object(b.b)("p",null,"If you change the various settings, it is displayed as below."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_2_io_examples.jpg",alt:null}))),Object(b.b)("h3",{id:"serial-data"},"Serial Data"),Object(b.b)("p",null,"The 'Serial Data' tab is configured as below.\n",Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_3_cut.jpg",alt:null}))),Object(b.b)("p",null,"In this page, user can test the 'Serial data input/output through\nWebpage to UART1' (Serial data Tx/Rx) functions."),Object(b.b)("p",null,"Type 'hello world","!","' in the ",Object(b.b)("strong",{parentName:"p"},"'Data to send'")," input box and then press\nthe ",Object(b.b)("strong",{parentName:"p"},"[","Send","]")," button."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_5_cut_helloworld_checked.jpg",alt:null})),"\nSerial terminal shows the string from web page through UART1."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/serialdebug_terminal_helloworld_checked.jpg",alt:null}))),Object(b.b)("p",null,"On the contrary, if the user types the string on serial terminal, the\n",Object(b.b)("strong",{parentName:"p"},"'Received data'")," box in web page shows the typed string."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/basic_demopage_5_cut_thanks_checked.jpg",alt:null}))),Object(b.b)("h3",{id:"note"},"Note"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Favicon"),Object(b.b)("br",{parentName:"p"}),"\n","Favicon is a complex word of 'favorites' and 'icon', and is displayed as\na small icon in the address bar / tabs of web browser (e.g., Google\nChrome, MS Internet Explorer). By using this, the user is able to know\nthe provider of the web page. The example basic demo web pages include\n'favicon'."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/webpage_basicdemo/favicon_ex.jpg",alt:null}))),Object(b.b)("p",null,"User can add the 'Favicon' as the following steps"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Create the target image to 16x16 sized icon and save in the name of\n'favicon.ico'"),Object(b.b)("li",{parentName:"ol"},"Move the 'favicon.ico' to web content storage"),Object(b.b)("li",{parentName:"ol"},"Insert the link code at the top of the 'index.html' page")),Object(b.b)("p",null,"e.g., ",Object(b.b)("inlineCode",{parentName:"p"},"<link rel='shortcut icon' href='/favicon.ico'\ntype='image/x-icon'>")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"wiz550web-customizing"},"WIZ550web Customizing"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"basics"},"Basics"),Object(b.b)("p",null,"WIZ550web provides basis for user customized web server. Users can\nimplement an embedded web server which can control the I/O by modifying\nthe firmware source code and web pages."),Object(b.b)("p",null,"Function of the Web server can be a variety of combinations depending on\nthe user's application; I/O monitor / control, transfer the string to\nUART, MCU and W5500 chip register control, Etc."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/products/wiz550web/wiz550webgsg/wiz550web_simple_requestcombination_diagram.png",alt:null}))),Object(b.b)("p",null,"Therefore, users need to modify the firmware source code (C language)\nand web pages (HTML and JavaScript)."),Object(b.b)("p",null,"In this page, we provide a description on how to get the I/O's status\n(value) of WIZ550web module and set the new value through examples of\nthe basic demo web page."),Object(b.b)("p",null,"Users can learn how to control the H/W (I/O, UART, Registers and Etc.)\nusing the web page. If users need to add additional functions, use the\nsame method described on this page."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"wiz550web-web-io-examples"},"WIZ550web Web I/O Examples"),Object(b.b)("p",null," This Section is ",Object(b.b)("strong",{parentName:"p"},"UNDER\nCONSTRUCTION"),".",Object(b.b)("br",{parentName:"p"}),"\n","Check back soon. "),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"FAT: File Allocation Table"),Object(b.b)("br",{parentName:"p"}),"\n","as File system format, because it used by the majority of memory\ncard manufacturers and should be supported by most computers. There\nare FAT12/16/32. FAT32 in WIZ550web supports up to 4G Byte for one\nfile.")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"JSON: JavaScript Object Notation"))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"AJAX: Asynchronous JavaScript And XML"),Object(b.b)("br",{parentName:"p"}),"\n","AJAX is a group of interrelated Web development techniques used on\nthe client-side to create asynchronous Web applications. With Ajax,\nWeb applications can send data to and retrieve from a server\nasynchronously (in the background) without interfering with the\ndisplay and behavior of the existing page.JavaScript and the\nXMLHttpRequest object provide a method for exchanging data\nasynchronously between browser and server to avoid full page\nreloads."))))}s.isMDXComponent=!0},578:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||b;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<b;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);