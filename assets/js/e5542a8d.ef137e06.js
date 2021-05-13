(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[96140],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):_(_({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=o(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||s[u]||i;return n?r.createElement(m,_(_({ref:t},d),{},{components:n})):r.createElement(m,_({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,_=new Array(i);_[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,_[1]=c;for(var o=2;o<i;o++)_[o]=n[o];return r.createElement.apply(null,_)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41202:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return _},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=n(74034),a=n(79973),i=(n(67294),n(3905)),_={id:"ble_to_ethernet",title:"BLE to Ethernet",date:new Date("2020-04-03T00:00:00.000Z")},c={unversionedId:"VAR-Products-using-WIZnet/ble_to_ethernet",id:"VAR-Products-using-WIZnet/ble_to_ethernet",isDocsHomePage:!1,title:"BLE to Ethernet",description:"Using WIZnet TCP/IP Ethernet chip W5500 and the Nordic BLE SoC nRF52832",source:"@site/docs/VAR-Products-using-WIZnet/bletoethernet.md",sourceDirName:"VAR-Products-using-WIZnet",slug:"/VAR-Products-using-WIZnet/ble_to_ethernet",permalink:"/VAR-Products-using-WIZnet/ble_to_ethernet",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/VAR-Products-using-WIZnet/bletoethernet.md",version:"current",frontMatter:{id:"ble_to_ethernet",title:"BLE to Ethernet",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Wi-Fi Shield",permalink:"/VAR-Products-using-WIZnet/wi_fi_shield"},next:{title:"W5500BoB (ESoPe)",permalink:"/VAR-Products-using-WIZnet/w5500BoB_ESoPe"}},l=[{value:"Development Environment",id:"development-environment",children:[{value:"Firmware",id:"firmware",children:[]},{value:"Hardware",id:"hardware",children:[]},{value:"PC Tools",id:"pc-tools",children:[]}]},{value:"Base Protocol",id:"base-protocol",children:[]},{value:"Code configuration",id:"code-configuration",children:[{value:"uart_init",id:"uart_init",children:[]},{value:"ble_stack_init",id:"ble_stack_init",children:[]},{value:"nus_c_init",id:"nus_c_init",children:[]},{value:"db_discovery_init",id:"db_discovery_init",children:[]},{value:"spi0_master_init",id:"spi0_master_init",children:[]},{value:"user_ethernet_init",id:"user_ethernet_init",children:[]},{value:"user_app_timer_init",id:"user_app_timer_init",children:[]},{value:"user_app_timer_start",id:"user_app_timer_start",children:[]},{value:"tcp_con_timer",id:"tcp_con_timer",children:[]},{value:"tcps_to_ble",id:"tcps_to_ble",children:[]},{value:"ble_to_tcps",id:"ble_to_tcps",children:[]},{value:"ble_nus_c_evt_handler",id:"ble_nus_c_evt_handler",children:[]},{value:"uart_event_handle",id:"uart_event_handle",children:[]}]},{value:"Testing",id:"testing",children:[{value:"H/W Setting",id:"hw-setting",children:[]},{value:"BLE Stack (SoftDevice) Writing",id:"ble-stack-softdevice-writing",children:[]},{value:"Ble to ethernet Board application Writing",id:"ble-to-ethernet-board-application-writing",children:[]},{value:"PCA10040 application Writing",id:"pca10040-application-writing",children:[]},{value:"Config HyperTerminal &amp; TCP Server",id:"config-hyperterminal--tcp-server",children:[]},{value:"Data Input",id:"data-input",children:[]}]}],o={toc:l};function s(e){var t=e.components,_=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},o,_,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using WIZnet TCP/IP Ethernet chip W5500 and the Nordic BLE SoC nRF52832\nimplemented the BLE to Ethernet. BLE Central/Peripheral communicate\nusing a UART Nordic Service (NUS) Profile. And BLE Central and W5500\ncommunicate with SPI. W5500 also operates as a TCP Client, TCP Server to\ncommunicate with the LAN (through the line). The purpose of this\nApplication Note is to build a low power IoT node environment."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(95372).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(17854).Z})),(0,i.kt)("h2",{id:"development-environment"},"Development Environment"),(0,i.kt)("h3",{id:"firmware"},"Firmware"),(0,i.kt)("p",null,"\ud83c\udf0e",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Wiznet/WIZBLE510_ETHERNET"},"https://github.com/Wiznet/WIZBLE510_ETHERNET")),(0,i.kt)("h3",{id:"hardware"},"Hardware"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Product"),(0,i.kt)("th",{parentName:"tr",align:null},"DataSheet Download link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nRF52832"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://infocenter.nordicsemi.com/pdf/nRF52832_PS_v1.0.pdf"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PCA10040"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.nrf52/dita/nrf52/development/nrf52_dev_kit.html?cp=2_0"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"W5500"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../Product/iEthernet/W5500/datasheet"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Schematic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://drive.google.com/open?id=0Bx-BD_H8XJXxVWdrcVliY1E1RGM"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Altium"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://drive.google.com/open?id=0Bx-BD_H8XJXxek13TlBubXZZclE"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Gerber"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://drive.google.com/open?id=0Bx-BD_H8XJXxWmg0MDlnWVJLZ2M"},"Download"))))),(0,i.kt)("h3",{id:"pc-tools"},"PC Tools"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PC Tools"),(0,i.kt)("th",{parentName:"tr",align:null},"Download link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Keil MDK 5.17"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.keil.com/demo/eval/arm.htm"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nRFgo Studio"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.nordicsemi.com/eng/Products/2.4GHz-RF/nRFgo-Studio#Downloads"},"Download"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hercules"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://hercules-setup.soft32.com/"},"Download"))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"base-protocol"},"Base Protocol"),(0,i.kt)("p",null,"The project made use of TCP and BLE NUS Service. Each document is on the\nlink below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,i.kt)("th",{parentName:"tr",align:null},"Document"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"W5500 TCP"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../Product/iEthernet/W5500/Application/tcp"},"Doc Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BLE NUS Central"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.sdk5.v11.0.0/ble_sdk_app_nus_c.html?cp=5_0_0_4_2_0_3"},"Doc Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BLE NUS Peripheral"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.sdk5.v11.0.0/ble_sdk_app_nus_eval.html?cp=5_0_0_4_2_2_18"},"Doc Link"))))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"code-configuration"},"Code configuration"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(10852).Z})),(0,i.kt)("h3",{id:"uart_init"},"uart","_","init"),(0,i.kt)("p",null,"UART Initializes for communication with a PC. The pins can be changed\nfreely."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void uart_init(app_uart_event_handler_t event_handler, app_irq_priority_t irq_priority)\n{\n    uint32_t err_code;\n    const app_uart_comm_params_t comm_params =\n    {\n        .rx_pin_no    = RX_PIN_NUMBER,\n        .tx_pin_no    = TX_PIN_NUMBER,\n        .rts_pin_no   = 0xFF,\n        .cts_pin_no   = 0xFF,\n        .flow_control = APP_UART_FLOW_CONTROL_DISABLED,\n        .use_parity   = false,\n        .baud_rate    = UART_BAUDRATE_BAUDRATE_Baud115200\n    };  \n    APP_UART_FIFO_INIT(&comm_params,\n                        UART_RX_BUF_SIZE,\n                        UART_TX_BUF_SIZE,\n                        event_handler,\n                        irq_priority,\n                        err_code);\n    APP_ERROR_CHECK(err_code);\n}\n")),(0,i.kt)("h3",{id:"ble_stack_init"},"ble","_","stack","_","init"),(0,i.kt)("p",null,"Initialize BLE stack and RTC clock."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void ble_stack_init(void)\n{\n    uint32_t err_code;    \n    nrf_clock_lf_cfg_t clock_lf_cfg = NRF_CLOCK_LFCLKSRC;    \n    // Initialize the SoftDevice handler module.\n    SOFTDEVICE_HANDLER_INIT(&clock_lf_cfg, NULL);   \n    ble_enable_params_t ble_enable_params;\n    err_code = softdevice_enable_get_default_config(CENTRAL_LINK_COUNT,\n                                                    PERIPHERAL_LINK_COUNT,\n                                                    &ble_enable_params);\n    APP_ERROR_CHECK(err_code);    \n    //Check the ram settings against the used number of links\n    CHECK_RAM_START_ADDR(CENTRAL_LINK_COUNT,PERIPHERAL_LINK_COUNT);    \n    // Enable BLE stack.\n    err_code = softdevice_enable(&ble_enable_params);\n    APP_ERROR_CHECK(err_code);\n    // Register with the SoftDevice handler module for BLE events.\n    err_code = softdevice_ble_evt_handler_set(ble_evt_dispatch);\n    APP_ERROR_CHECK(err_code);\n}\n")),(0,i.kt)("h3",{id:"nus_c_init"},"nus","_","c","_","init"),(0,i.kt)("p",null,"Initializes function that the NUS central service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void nus_c_init(ble_nus_c_evt_handler_t evt_handler)\n{\n    uint32_t         err_code;\n    ble_nus_c_init_t nus_c_init_t;\n    nus_c_init_t.evt_handler = evt_handler;\n    err_code = ble_nus_c_init(&user_m_ble_nus_c.m_ble_nus_c, &nus_c_init_t);\n    APP_ERROR_CHECK(err_code);\n    err_code = sd_ble_gap_address_get  (&user_m_ble_nus_c.own_addr); \n    APP_ERROR_CHECK(err_code);\n}\n")),(0,i.kt)("h3",{id:"db_discovery_init"},"db","_","discovery","_","init"),(0,i.kt)("p",null,"initializes database discovery."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void db_discovery_init(void)\n{\n    uint32_t err_code = ble_db_discovery_init(db_disc_handler);\n    APP_ERROR_CHECK(err_code);\n}\n")),(0,i.kt)("h3",{id:"spi0_master_init"},"spi0","_","master","_","init"),(0,i.kt)("p",null,"initialize W5500 and SPI communication function. Pins can be changed\nfreely."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void spi0_master_init(/)\n{\n    SPIConfig_t spi_info = {.Config.Fields.BitOrder = SPI_BITORDER_MSB_LSB,\n                        .Config.Fields.Mode     = SPI_MODE3,\n                        .Frequency              = SPI_FREQ_8MBPS,\n                        .Pin_SCK                = SPIM0_SCK_PIN,\n                        .Pin_MOSI               = SPIM0_MOSI_PIN,\n                        .Pin_MISO               = SPIM0_MISO_PIN,\n                        .Pin_CSN                = SPIM0_SS_PIN};    \n    spi_master_init(SPI0,&spi_info);\n}\n")),(0,i.kt)("h3",{id:"user_ethernet_init"},"user","_","ethernet","_","init"),(0,i.kt)("p",null,"Function that initializes the W5500 through SPI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'void user_ethernet_init(/)\n{\n    uint8_t tmp;\n    uint8_t memsize[2][8] = {{2,2,2,2,2,2,2,2},{2,2,2,2,2,2,2,2}};\n    wiz_NetTimeout timeout_info;\n    reg_wizchip_cs_cbfunc(wizchip_select, wizchip_deselect);\n    reg_wizchip_spi_cbfunc(wizchip_read, wizchip_write);\n    /* WIZCHIP SOCKET Buffer initialize */  \n    printf("W5500 memory init\\r\\n");\n    if(ctlwizchip(CW_INIT_WIZCHIP,(void*)memsize) == -1)\n    {\n        printf("WIZCHIP Initialized fail.\\r\\n");\n       while(1);\n    }\n    /* PHY link status check */\n    printf("W5500 PHY Link Status Check\\r\\n");\n    do\n    {\n       if(ctlwizchip(CW_GET_PHYLINK, (void*)&tmp) == -1)\n           printf("Unknown PHY Link stauts.\\r\\n");\n    }while(tmp == PHY_LINK_OFF);\n    timeout_info.retry_cnt = 1;\n    timeout_info.time_100us = 0x3E8;    // timeout value = 10ms\n    wizchip_settimeout(&timeout_info);\n    /* Network initialization */\n    network_init(/);\n}\n')),(0,i.kt)("h3",{id:"user_app_timer_init"},"user","_","app","_","timer","_","init"),(0,i.kt)("p",null,"App Timer Task registration and period setting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"static void user_app_timer_init(void)\n{\n    uint32_t err_code;    \n    err_code = app_timer_create(&tcp_con_timer_id, APP_TIMER_MODE_REPEATED, tcp_con_timer);\n    APP_ERROR_CHECK(err_code);\n    err_code = app_timer_create(&ble_to_tcps_timer_id, APP_TIMER_MODE_REPEATED, ble_to_tcps);\n    APP_ERROR_CHECK(err_code);  \n    err_code = app_timer_create(&tcps_to_ble_timer_id, APP_TIMER_MODE_REPEATED, tcps_to_ble);\n    APP_ERROR_CHECK(err_code);\n}\n")),(0,i.kt)("h3",{id:"user_app_timer_start"},"user","_","app","_","timer","_","start"),(0,i.kt)("p",null,"App","_","timer Task Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"static void user_app_timer_start(void)\n{\n    uint32_t err_code;    \n    err_code = app_timer_start(tcp_con_timer_id, TCP_CON_INTERVAL,NULL);\n    APP_ERROR_CHECK(err_code);\n    err_code = app_timer_start(ble_to_tcps_timer_id, BLE_TO_TCPS_INTERVAL, NULL);\n    APP_ERROR_CHECK(err_code);\n    err_code = app_timer_start(tcps_to_ble_timer_id, TCPS_TO_BLE_INTERVAL, NULL);\n    APP_ERROR_CHECK(err_code);  \n}\n")),(0,i.kt)("h3",{id:"tcp_con_timer"},"tcp","_","con","_","timer"),(0,i.kt)("p",null,"A connection with the TCP Server and checks periodically connected. It\ntries to reconnect when disconnected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'void tcp_con_timer(void * p_context)\n{\n    int32_t ret; // return value for SOCK_ERRORs\n   // Port number for TCP client (will be increased)\n    uint16_t any_port = 50000;\n   // Socket Status Transitions\n   // Check the W5500 Socket n status register (Sn_SR, The \'Sn_SR\' controlled by Sn_CR command or Packet send/recv status)\n    switch(getSn_SR(SOCK_TCPC))\n    {\n        case SOCK_CLOSE_WAIT :\n#ifdef _LOOPBACK_DEBUG_\n         //printf("%d:CloseWait\\r\\n",sn);\n#endif\n            if((ret=disconnect(SOCK_TCPC)) != SOCK_OK) \n                printf("%d:Socket Closed Fail\\r\\n", SOCK_TCPC);\n#ifdef _LOOPBACK_DEBUG_\n            printf("%d:Socket Closed\\r\\n", SOCK_TCPC);\n#endif\n            break;\n        case SOCK_INIT :\n#ifdef _LOOPBACK_DEBUG_\n            printf("%d:Try to connect to the %d.%d.%d.%d : %d\\r\\n", \n                    SOCK_TCPC, targetIP[0], targetIP[1], targetIP[2], targetIP[3],tcp_targetPort);\n#endif\n            if( (ret = connect(SOCK_TCPC, targetIP, tcp_targetPort)) != SOCK_OK) \n                printf("%d:Socket Connect Fail\\r\\n", SOCK_TCPC);    \n                //Try to TCP connect to the TCP server (destination)\n            break;\n        case SOCK_CLOSED:\n            close(SOCK_TCPC);\n              if((ret=socket(SOCK_TCPC, Sn_MR_TCP, any_port++, 0x00)) != SOCK_TCPC)\n                  printf("%d:Socket Open Fail\\r\\n", SOCK_TCPC); // TCP socket open with \'any_port\' port number\n            break;              \n        default:\n            break;\n    }\n}\n')),(0,i.kt)("h3",{id:"tcps_to_ble"},"tcps","_","to","_","ble"),(0,i.kt)("p",null,"Data from the TCP Server delivers on the BLE Peripheral."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void tcps_to_ble(void * p_context)\n{\n    uint32_t size, i, k=0;\n    int32_t ret;\n    char buf[DATA_BUF_SIZE];\n\n    if((size = getSn_RX_RSR(SOCK_TCPC)) > 0) // Sn_RX_RSR: Socket n Received Size Register, Receiving data length\n    {\n        size = MIN(size, DATA_BUF_SIZE); // DATA_BUF_SIZE means user defined buffer size (array)\n        ret = recv(SOCK_TCPC, (uint8_t *)buf, size); // Data Receive process (H/W Rx socket buffer -> User's buffer)\n        if (ret<0)\n        {\n            close(SOCK_TCPC); // socket close\n        }\n        else\n        {\n            while(size)\n            {\n                i = MIN(size, BLE_NUS_MAX_DATA_LEN);\n                while (ble_nus_c_string_send(&user_m_ble_nus_c.m_ble_nus_c, (uint8_t *)(buf+k), i) != NRF_SUCCESS)\n                {\n                      // repeat until sent.\n                }\n                size-=i;\n                k+=i;\n            }\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"ble_to_tcps"},"ble","_","to","_","tcps"),(0,i.kt)("p",null,"Data from the BLE Peripheral delivers on the TCP Server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'void ble_to_tcps(void * p_context)\n{\n    int32_t ret;\n    char buf[100] ;\n    \n    if (data_in_flag)\n    {\n        if (getSn_SR(SOCK_TCPC) == SOCK_ESTABLISHED)\n        {\n            sprintf(buf, "[From BLE_P] %02x:%02x:%02x:%02x:%02x:%02x ", \n            user_m_ble_nus_c.peer_addr.addr[0], user_m_ble_nus_c.peer_addr.addr[1], \n                    user_m_ble_nus_c.peer_addr.addr[2], user_m_ble_nus_c.peer_addr.addr[3],\n                    user_m_ble_nus_c.peer_addr.addr[4], user_m_ble_nus_c.peer_addr.addr[5]);\n                    ret = send(SOCK_TCPC,  (void *)buf, strlen(buf));\n                    ret = send(SOCK_TCPC,  (void *)ble_input_data, ble_input_data_len); \n                    if(ret < 0) // Send Error occurred (sent data length < 0)\n                        close(SOCK_TCPC); // socket close\n    }\n    data_in_flag = false;\n    }\n}\n')),(0,i.kt)("h3",{id:"ble_nus_c_evt_handler"},"ble","_","nus","_","c","_","evt","_","handler"),(0,i.kt)("p",null,"Interrupt is occurred by data that comes from BLE Peripheral. Data from\nBLE Peripheral stores on the ble","_","input","_","data buffer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void nus_c_init(ble_nus_c_evt_handler_t evt_handler)\n{\n    uint32_t         err_code;\n    ble_nus_c_init_t nus_c_init_t;\n    \n    nus_c_init_t.evt_handler = evt_handler;\n    err_code = ble_nus_c_init(&user_m_ble_nus_c.m_ble_nus_c, &nus_c_init_t);\n    APP_ERROR_CHECK(err_code);\n    err_code = sd_ble_gap_address_get  (&user_m_ble_nus_c.own_addr); \n    APP_ERROR_CHECK(err_code);\n}\n")),(0,i.kt)("h3",{id:"uart_event_handle"},"uart","_","event","_","handle"),(0,i.kt)("p",null,"The Interrupt occurs when UART Data Input. And it sends it to UART Input\nData in BLE Peripheral."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void uart_event_handle(app_uart_evt_t * p_event)\n{\n    static uint8_t data_array[BLE_NUS_MAX_DATA_LEN];\n    static uint8_t index = 0;\n    switch (p_event->evt_type)\n    {\n        /**@snippet [Handling data from UART] */ \n        case APP_UART_DATA_READY:\n            UNUSED_VARIABLE(app_uart_get(&data_array[index]));\n            index++;\n            if ((data_array[index - 1] == '\\n') || (index >= (BLE_NUS_MAX_DATA_LEN)))\n            {\n                while (ble_nus_c_string_send(&user_m_ble_nus_c.m_ble_nus_c, data_array, index) != NRF_SUCCESS)\n                {\n                    // repeat until sent.\n                }\n                index = 0;\n            }\n            break;\n        /**@snippet [Handling data from UART] */ \n        case APP_UART_COMMUNICATION_ERROR:\n            APP_ERROR_HANDLER(p_event->data.error_communication);\n            break;\n        case APP_UART_FIFO_ERROR:\n            APP_ERROR_HANDLER(p_event->data.error_code);\n            break;\n        default:\n            break;\n    }\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("h3",{id:"hw-setting"},"H/W Setting"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(98439).Z})),(0,i.kt)("h3",{id:"ble-stack-softdevice-writing"},"BLE Stack (SoftDevice) Writing"),(0,i.kt)("p",null,"Program the S132","_","nrf52","_","2.0.1","_","softdevice.hex attached to\nnRF5","_","SDK","_","11.0.0","_","W5500","_","ble-to-ethernet.zip on two boards. (Ble to\nEthernet Board, PCA10040)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(51178).Z})),(0,i.kt)("h3",{id:"ble-to-ethernet-board-application-writing"},"Ble to ethernet Board application Writing"),(0,i.kt)("p",null,"Open the\nnRF5","_","SDK","_","11.0.0","_","W5500","_","ble-to-ethernet","\\","examples","\\","ble","_","central","\\","ble","_","uart","_","c","_","to","_","tcpc","\\","pca10040","\\","s132","\\","arm5","_","no","_","packs\npath of the project. Put the IP Address of the TCP server PC to the 60th\nline of the variable targetIP main.c, build, and Program a ble to\nethernet board."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(90963).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(35298).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15220).Z})),(0,i.kt)("h3",{id:"pca10040-application-writing"},"PCA10040 application Writing"),(0,i.kt)("p",null,"Build the project to open a path\nnRF5","_","SDK","_","11.0.0","_","89a8197","\\","examples","\\","ble","_","peripheral","\\","ble","_","app","_","uart","\\","pca10040","\\","s132","\\","arm5","_","no","_","packs,\nand Writing in PCA10040 board."),(0,i.kt)("h3",{id:"config-hyperterminal--tcp-server"},"Config HyperTerminal & TCP Server"),(0,i.kt)("p",null,"Three open the Hercules. Two Hercules is set to 115200 baud rate in the\nSerial Tab and open the Com port. One of the Hercules Port is set to\n5000 in the TCP Server tab and click on the listen."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(14610).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62815).Z})),(0,i.kt)("h3",{id:"data-input"},"Data Input"),(0,i.kt)("p",null,"Input from the WIZNET PCA10040 Terminal can see that is sent to the TCP\nServer."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23580).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(80437).Z})))}s.isMDXComponent=!0},95372:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1-1_bte_introduce-a3e2fae751e81c82641299a82aa082eb.jpg"},51178:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-1_bte_testing-4ada528be0842b35b36834c150656fe4.jpg"},35298:function(e,t){"use strict";t.Z="data:image/jpeg;base64,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"},15220:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-4_bte_testing-89dbed8beb3ed3fc1ee39f26d87153c8.jpg"},14610:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-5_bte_testing-46789ea9e27f086564f584ec67108197.jpg"},62815:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-6_bte_testing-4812631c57da332490674d7dfd45ec43.jpg"},23580:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-7_bte_testing-799319b2564149eca448c6c40e2a8e69.jpg"},80437:function(e,t,n){"use strict";t.Z=n.p+"assets/images/3-8_bte_testing-78bdc2eee28e6845cf876210d4bb1d1f.jpg"},17854:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ble_to_tcp_article_5-6f9b4e28be388e60078d79e90eccd301.png"},98439:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ble_to_tcp_hw_settingpng-0cfc83e79705362ceca0bca187ee3c32.png"},90963:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ipconfig-8b84bcd3d72be00a9737f9b669b77669.png"},10852:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2_bte_codeconfiguration-1899e539093185cb622837039fca9d6e.jpg"}}]);