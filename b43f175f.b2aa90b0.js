(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{374:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return _})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(516)),c={id:"ble_to_ethernet",title:"BLE to Ethernet",date:new Date("2020-04-03T00:00:00.000Z")},_={unversionedId:"VAR-Products-using-WIZnet/ble_to_ethernet",id:"VAR-Products-using-WIZnet/ble_to_ethernet",isDocsHomePage:!1,title:"BLE to Ethernet",description:"Using WIZnet TCP/IP Ethernet chip W5500 and the Nordic BLE SoC nRF52832",source:"@site/docs\\VAR-Products-using-WIZnet\\bletoethernet.md",permalink:"/docs/VAR-Products-using-WIZnet/ble_to_ethernet",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/VAR-Products-using-WIZnet/bletoethernet.md"},l=[{value:"Development Environment",id:"development-environment",children:[{value:"Firmware",id:"firmware",children:[]},{value:"Hardware",id:"hardware",children:[]},{value:"PC Tools",id:"pc-tools",children:[]}]},{value:"Base Protocol",id:"base-protocol",children:[]},{value:"Code configuration",id:"code-configuration",children:[{value:"uart_init",id:"uart_init",children:[]},{value:"ble_stack_init",id:"ble_stack_init",children:[]},{value:"nus_c_init",id:"nus_c_init",children:[]},{value:"db_discovery_init",id:"db_discovery_init",children:[]},{value:"spi0_master_init",id:"spi0_master_init",children:[]},{value:"user_ethernet_init",id:"user_ethernet_init",children:[]},{value:"user_app_timer_init",id:"user_app_timer_init",children:[]},{value:"user_app_timer_start",id:"user_app_timer_start",children:[]},{value:"tcp_con_timer",id:"tcp_con_timer",children:[]},{value:"tcps_to_ble",id:"tcps_to_ble",children:[]},{value:"ble_to_tcps",id:"ble_to_tcps",children:[]},{value:"ble_nus_c_evt_handler",id:"ble_nus_c_evt_handler",children:[]},{value:"uart_event_handle",id:"uart_event_handle",children:[]}]},{value:"Testing",id:"testing",children:[{value:"H/W Setting",id:"hw-setting",children:[]},{value:"BLE Stack (SoftDevice) Writing",id:"ble-stack-softdevice-writing",children:[]},{value:"Ble to ethernet Board application Writing",id:"ble-to-ethernet-board-application-writing",children:[]},{value:"PCA10040 application Writing",id:"pca10040-application-writing",children:[]},{value:"Config HyperTerminal &amp; TCP Server",id:"config-hyperterminal--tcp-server",children:[]},{value:"Data Input",id:"data-input",children:[]}]}],o={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Using WIZnet TCP/IP Ethernet chip W5500 and the Nordic BLE SoC nRF52832\nimplemented the BLE to Ethernet. BLE Central/Peripheral communicate\nusing a UART Nordic Service (NUS) Profile. And BLE Central and W5500\ncommunicate with SPI. W5500 also operates as a TCP Client, TCP Server to\ncommunicate with the LAN (through the line). The purpose of this\nApplication Note is to build a low power IoT node environment."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/1-1_bte_introduce.jpg",alt:null}))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/ble_to_tcp_article_5.png",alt:null}))),Object(i.b)("h2",{id:"development-environment"},"Development Environment"),Object(i.b)("h3",{id:"firmware"},"Firmware"),Object(i.b)("p",null,"\ud83c\udf0e",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Wiznet/WIZBLE510_ETHERNET"}),"https://github.com/Wiznet/WIZBLE510_ETHERNET")),Object(i.b)("h3",{id:"hardware"},"Hardware"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Product"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"DataSheet Download link"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRF52832"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"http://infocenter.nordicsemi.com/pdf/nRF52832_PS_v1.0.pdf"}),"Download"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PCA10040"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.nrf52/dita/nrf52/development/nrf52_dev_kit.html?cp=2_0"}),"Download"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"W5500"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"../Product/iEthernet/W5500/datasheet"}),"Download"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Schematic"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://drive.google.com/open?id=0Bx-BD_H8XJXxVWdrcVliY1E1RGM"}),"Download"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Altium"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://drive.google.com/open?id=0Bx-BD_H8XJXxek13TlBubXZZclE"}),"Download"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Gerber"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://drive.google.com/open?id=0Bx-BD_H8XJXxWmg0MDlnWVJLZ2M"}),"Download"))))),Object(i.b)("h3",{id:"pc-tools"},"PC Tools"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"PC Tools"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Download link"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Keil MDK 5.17"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.keil.com/demo/eval/arm.htm"}),"Download"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nRFgo Studio"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"https://www.nordicsemi.com/eng/Products/2.4GHz-RF/nRFgo-Studio#Downloads"}),"Download"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hercules"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"http://hercules-setup.soft32.com/"}),"Download"))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"base-protocol"},"Base Protocol"),Object(i.b)("p",null,"The project made use of TCP and BLE NUS Service. Each document is on the\nlink below."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Protocol"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Document"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"W5500 TCP"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"../Product/iEthernet/W5500/Application/tcp"}),"Doc Link"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BLE NUS Central"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.sdk5.v11.0.0/ble_sdk_app_nus_c.html?cp=5_0_0_4_2_0_3"}),"Doc Link"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"BLE NUS Peripheral"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"http://infocenter.nordicsemi.com/topic/com.nordic.infocenter.sdk5.v11.0.0/ble_sdk_app_nus_eval.html?cp=5_0_0_4_2_2_18"}),"Doc Link"))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"code-configuration"},"Code configuration"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/w5500_ethernet_shield/2_bte_codeconfiguration.jpg",alt:null}))),Object(i.b)("h3",{id:"uart_init"},"uart","_","init"),Object(i.b)("p",null,"UART Initializes for communication with a PC. The pins can be changed\nfreely."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"void uart_init(app_uart_event_handler_t event_handler, app_irq_priority_t irq_priority)\n{\n    uint32_t err_code;\n    const app_uart_comm_params_t comm_params =\n    {\n        .rx_pin_no    = RX_PIN_NUMBER,\n        .tx_pin_no    = TX_PIN_NUMBER,\n        .rts_pin_no   = 0xFF,\n        .cts_pin_no   = 0xFF,\n        .flow_control = APP_UART_FLOW_CONTROL_DISABLED,\n        .use_parity   = false,\n        .baud_rate    = UART_BAUDRATE_BAUDRATE_Baud115200\n    };  \n    APP_UART_FIFO_INIT(&comm_params,\n                        UART_RX_BUF_SIZE,\n                        UART_TX_BUF_SIZE,\n                        event_handler,\n                        irq_priority,\n                        err_code);\n    APP_ERROR_CHECK(err_code);\n}\n")),Object(i.b)("h3",{id:"ble_stack_init"},"ble","_","stack","_","init"),Object(i.b)("p",null,"Initialize BLE stack and RTC clock."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"void ble_stack_init(void)\n{\n    uint32_t err_code;    \n    nrf_clock_lf_cfg_t clock_lf_cfg = NRF_CLOCK_LFCLKSRC;    \n    // Initialize the SoftDevice handler module.\n    SOFTDEVICE_HANDLER_INIT(&clock_lf_cfg, NULL);   \n    ble_enable_params_t ble_enable_params;\n    err_code = softdevice_enable_get_default_config(CENTRAL_LINK_COUNT,\n                                                    PERIPHERAL_LINK_COUNT,\n                                                    &ble_enable_params);\n    APP_ERROR_CHECK(err_code);    \n    //Check the ram settings against the used number of links\n    CHECK_RAM_START_ADDR(CENTRAL_LINK_COUNT,PERIPHERAL_LINK_COUNT);    \n    // Enable BLE stack.\n    err_code = softdevice_enable(&ble_enable_params);\n    APP_ERROR_CHECK(err_code);\n    // Register with the SoftDevice handler module for BLE events.\n    err_code = softdevice_ble_evt_handler_set(ble_evt_dispatch);\n    APP_ERROR_CHECK(err_code);\n}\n")),Object(i.b)("h3",{id:"nus_c_init"},"nus","_","c","_","init"),Object(i.b)("p",null,"Initializes function that the NUS central service."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"void nus_c_init(ble_nus_c_evt_handler_t evt_handler)\n{\n    uint32_t         err_code;\n    ble_nus_c_init_t nus_c_init_t;\n    nus_c_init_t.evt_handler = evt_handler;\n    err_code = ble_nus_c_init(&user_m_ble_nus_c.m_ble_nus_c, &nus_c_init_t);\n    APP_ERROR_CHECK(err_code);\n    err_code = sd_ble_gap_address_get  (&user_m_ble_nus_c.own_addr); \n    APP_ERROR_CHECK(err_code);\n}\n")),Object(i.b)("h3",{id:"db_discovery_init"},"db","_","discovery","_","init"),Object(i.b)("p",null,"initializes database discovery."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"void db_discovery_init(void)\n{\n    uint32_t err_code = ble_db_discovery_init(db_disc_handler);\n    APP_ERROR_CHECK(err_code);\n}\n")),Object(i.b)("h3",{id:"spi0_master_init"},"spi0","_","master","_","init"),Object(i.b)("p",null,"initialize W5500 and SPI communication function. Pins can be changed\nfreely."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"void spi0_master_init()\n{\n    SPIConfig_t spi_info = {.Config.Fields.BitOrder = SPI_BITORDER_MSB_LSB,\n                        .Config.Fields.Mode     = SPI_MODE3,\n                        .Frequency              = SPI_FREQ_8MBPS,\n                        .Pin_SCK                = SPIM0_SCK_PIN,\n                        .Pin_MOSI               = SPIM0_MOSI_PIN,\n                        .Pin_MISO               = SPIM0_MISO_PIN,\n                        .Pin_CSN                = SPIM0_SS_PIN};    \n    spi_master_init(SPI0,&spi_info);\n}\n")),Object(i.b)("h3",{id:"user_ethernet_init"},"user","_","ethernet","_","init"),Object(i.b)("p",null,"Function that initializes the W5500 through SPI."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'void user_ethernet_init()\n{\n    uint8_t tmp;\n    uint8_t memsize[2][8] = {{2,2,2,2,2,2,2,2},{2,2,2,2,2,2,2,2}};\n    wiz_NetTimeout timeout_info;\n    reg_wizchip_cs_cbfunc(wizchip_select, wizchip_deselect);\n    reg_wizchip_spi_cbfunc(wizchip_read, wizchip_write);\n    /* WIZCHIP SOCKET Buffer initialize */  \n    printf("W5500 memory init\\r\\n");\n    if(ctlwizchip(CW_INIT_WIZCHIP,(void*)memsize) == -1)\n    {\n        printf("WIZCHIP Initialized fail.\\r\\n");\n       while(1);\n    }\n    /* PHY link status check */\n    printf("W5500 PHY Link Status Check\\r\\n");\n    do\n    {\n       if(ctlwizchip(CW_GET_PHYLINK, (void*)&tmp) == -1)\n           printf("Unknown PHY Link stauts.\\r\\n");\n    }while(tmp == PHY_LINK_OFF);\n    timeout_info.retry_cnt = 1;\n    timeout_info.time_100us = 0x3E8;    // timeout value = 10ms\n    wizchip_settimeout(&timeout_info);\n    /* Network initialization */\n    network_init();\n}\n')),Object(i.b)("h3",{id:"user_app_timer_init"},"user","_","app","_","timer","_","init"),Object(i.b)("p",null,"App Timer Task registration and period setting."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"static void user_app_timer_init(void)\n{\n    uint32_t err_code;    \n    err_code = app_timer_create(&tcp_con_timer_id, APP_TIMER_MODE_REPEATED, tcp_con_timer);\n    APP_ERROR_CHECK(err_code);\n    err_code = app_timer_create(&ble_to_tcps_timer_id, APP_TIMER_MODE_REPEATED, ble_to_tcps);\n    APP_ERROR_CHECK(err_code);  \n    err_code = app_timer_create(&tcps_to_ble_timer_id, APP_TIMER_MODE_REPEATED, tcps_to_ble);\n    APP_ERROR_CHECK(err_code);\n}\n")),Object(i.b)("h3",{id:"user_app_timer_start"},"user","_","app","_","timer","_","start"),Object(i.b)("p",null,"App","_","timer Task Start"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"static void user_app_timer_start(void)\n{\n    uint32_t err_code;    \n    err_code = app_timer_start(tcp_con_timer_id, TCP_CON_INTERVAL,NULL);\n    APP_ERROR_CHECK(err_code);\n    err_code = app_timer_start(ble_to_tcps_timer_id, BLE_TO_TCPS_INTERVAL, NULL);\n    APP_ERROR_CHECK(err_code);\n    err_code = app_timer_start(tcps_to_ble_timer_id, TCPS_TO_BLE_INTERVAL, NULL);\n    APP_ERROR_CHECK(err_code);  \n}\n")),Object(i.b)("h3",{id:"tcp_con_timer"},"tcp","_","con","_","timer"),Object(i.b)("p",null,"A connection with the TCP Server and checks periodically connected. It\ntries to reconnect when disconnected."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'void tcp_con_timer(void * p_context)\n{\n    int32_t ret; // return value for SOCK_ERRORs\n   // Port number for TCP client (will be increased)\n    uint16_t any_port = 50000;\n   // Socket Status Transitions\n   // Check the W5500 Socket n status register (Sn_SR, The \'Sn_SR\' controlled by Sn_CR command or Packet send/recv status)\n    switch(getSn_SR(SOCK_TCPC))\n    {\n        case SOCK_CLOSE_WAIT :\n#ifdef _LOOPBACK_DEBUG_\n         //printf("%d:CloseWait\\r\\n",sn);\n#endif\n            if((ret=disconnect(SOCK_TCPC)) != SOCK_OK) \n                printf("%d:Socket Closed Fail\\r\\n", SOCK_TCPC);\n#ifdef _LOOPBACK_DEBUG_\n            printf("%d:Socket Closed\\r\\n", SOCK_TCPC);\n#endif\n            break;\n        case SOCK_INIT :\n#ifdef _LOOPBACK_DEBUG_\n            printf("%d:Try to connect to the %d.%d.%d.%d : %d\\r\\n", \n                    SOCK_TCPC, targetIP[0], targetIP[1], targetIP[2], targetIP[3],tcp_targetPort);\n#endif\n            if( (ret = connect(SOCK_TCPC, targetIP, tcp_targetPort)) != SOCK_OK) \n                printf("%d:Socket Connect Fail\\r\\n", SOCK_TCPC);    \n                //Try to TCP connect to the TCP server (destination)\n            break;\n        case SOCK_CLOSED:\n            close(SOCK_TCPC);\n              if((ret=socket(SOCK_TCPC, Sn_MR_TCP, any_port++, 0x00)) != SOCK_TCPC)\n                  printf("%d:Socket Open Fail\\r\\n", SOCK_TCPC); // TCP socket open with \'any_port\' port number\n            break;              \n        default:\n            break;\n    }\n}\n')),Object(i.b)("h3",{id:"tcps_to_ble"},"tcps","_","to","_","ble"),Object(i.b)("p",null,"Data from the TCP Server delivers on the BLE Peripheral."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"void tcps_to_ble(void * p_context)\n{\n    uint32_t size, i, k=0;\n    int32_t ret;\n    char buf[DATA_BUF_SIZE];\n\n    if((size = getSn_RX_RSR(SOCK_TCPC)) > 0) // Sn_RX_RSR: Socket n Received Size Register, Receiving data length\n    {\n        size = MIN(size, DATA_BUF_SIZE); // DATA_BUF_SIZE means user defined buffer size (array)\n        ret = recv(SOCK_TCPC, (uint8_t *)buf, size); // Data Receive process (H/W Rx socket buffer -> User's buffer)\n        if (ret<0)\n        {\n            close(SOCK_TCPC); // socket close\n        }\n        else\n        {\n            while(size)\n            {\n                i = MIN(size, BLE_NUS_MAX_DATA_LEN);\n                while (ble_nus_c_string_send(&user_m_ble_nus_c.m_ble_nus_c, (uint8_t *)(buf+k), i) != NRF_SUCCESS)\n                {\n                      // repeat until sent.\n                }\n                size-=i;\n                k+=i;\n            }\n        }\n    }\n}\n")),Object(i.b)("h3",{id:"ble_to_tcps"},"ble","_","to","_","tcps"),Object(i.b)("p",null,"Data from the BLE Peripheral delivers on the TCP Server."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),'void ble_to_tcps(void * p_context)\n{\n    int32_t ret;\n    char buf[100] ;\n    \n    if (data_in_flag)\n    {\n        if (getSn_SR(SOCK_TCPC) == SOCK_ESTABLISHED)\n        {\n            sprintf(buf, "[From BLE_P] %02x:%02x:%02x:%02x:%02x:%02x ", \n            user_m_ble_nus_c.peer_addr.addr[0], user_m_ble_nus_c.peer_addr.addr[1], \n                    user_m_ble_nus_c.peer_addr.addr[2], user_m_ble_nus_c.peer_addr.addr[3],\n                    user_m_ble_nus_c.peer_addr.addr[4], user_m_ble_nus_c.peer_addr.addr[5]);\n                    ret = send(SOCK_TCPC,  (void *)buf, strlen(buf));\n                    ret = send(SOCK_TCPC,  (void *)ble_input_data, ble_input_data_len); \n                    if(ret < 0) // Send Error occurred (sent data length < 0)\n                        close(SOCK_TCPC); // socket close\n    }\n    data_in_flag = false;\n    }\n}\n')),Object(i.b)("h3",{id:"ble_nus_c_evt_handler"},"ble","_","nus","_","c","_","evt","_","handler"),Object(i.b)("p",null,"Interrupt is occurred by data that comes from BLE Peripheral. Data from\nBLE Peripheral stores on the ble","_","input","_","data buffer."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"void nus_c_init(ble_nus_c_evt_handler_t evt_handler)\n{\n    uint32_t         err_code;\n    ble_nus_c_init_t nus_c_init_t;\n    \n    nus_c_init_t.evt_handler = evt_handler;\n    err_code = ble_nus_c_init(&user_m_ble_nus_c.m_ble_nus_c, &nus_c_init_t);\n    APP_ERROR_CHECK(err_code);\n    err_code = sd_ble_gap_address_get  (&user_m_ble_nus_c.own_addr); \n    APP_ERROR_CHECK(err_code);\n}\n")),Object(i.b)("h3",{id:"uart_event_handle"},"uart","_","event","_","handle"),Object(i.b)("p",null,"The Interrupt occurs when UART Data Input. And it sends it to UART Input\nData in BLE Peripheral."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c"}),"void uart_event_handle(app_uart_evt_t * p_event)\n{\n    static uint8_t data_array[BLE_NUS_MAX_DATA_LEN];\n    static uint8_t index = 0;\n    switch (p_event->evt_type)\n    {\n        /**@snippet [Handling data from UART] */ \n        case APP_UART_DATA_READY:\n            UNUSED_VARIABLE(app_uart_get(&data_array[index]));\n            index++;\n            if ((data_array[index - 1] == '\\n') || (index >= (BLE_NUS_MAX_DATA_LEN)))\n            {\n                while (ble_nus_c_string_send(&user_m_ble_nus_c.m_ble_nus_c, data_array, index) != NRF_SUCCESS)\n                {\n                    // repeat until sent.\n                }\n                index = 0;\n            }\n            break;\n        /**@snippet [Handling data from UART] */ \n        case APP_UART_COMMUNICATION_ERROR:\n            APP_ERROR_HANDLER(p_event->data.error_communication);\n            break;\n        case APP_UART_FIFO_ERROR:\n            APP_ERROR_HANDLER(p_event->data.error_code);\n            break;\n        default:\n            break;\n    }\n}\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"testing"},"Testing"),Object(i.b)("h3",{id:"hw-setting"},"H/W Setting"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/ble_to_tcp_hw_settingpng.png",alt:null}))),Object(i.b)("h3",{id:"ble-stack-softdevice-writing"},"BLE Stack (SoftDevice) Writing"),Object(i.b)("p",null,"Program the S132","_","nrf52","_","2.0.1","_","softdevice.hex attached to\nnRF5","_","SDK","_","11.0.0","_","W5500","_","ble-to-ethernet.zip on two boards. (Ble to\nEthernet Board, PCA10040)"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/3-1_bte_testing.jpg",alt:null}))),Object(i.b)("h3",{id:"ble-to-ethernet-board-application-writing"},"Ble to ethernet Board application Writing"),Object(i.b)("p",null,"Open the\nnRF5","_","SDK","_","11.0.0","_","W5500","_","ble-to-ethernet","\\","examples","\\","ble","_","central","\\","ble","_","uart","_","c","_","to","_","tcpc","\\","pca10040","\\","s132","\\","arm5","_","no","_","packs\npath of the project. Put the IP Address of the TCP server PC to the 60th\nline of the variable targetIP main.c, build, and Program a ble to\nethernet board."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/ipconfig.png",alt:null}))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/3-3_bte_testing.jpg",alt:null}))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/3-4_bte_testing.jpg",alt:null}))),Object(i.b)("h3",{id:"pca10040-application-writing"},"PCA10040 application Writing"),Object(i.b)("p",null,"Build the project to open a path\nnRF5","_","SDK","_","11.0.0","_","89a8197","\\","examples","\\","ble","_","peripheral","\\","ble","_","app","_","uart","\\","pca10040","\\","s132","\\","arm5","_","no","_","packs,\nand Writing in PCA10040 board."),Object(i.b)("h3",{id:"config-hyperterminal--tcp-server"},"Config HyperTerminal & TCP Server"),Object(i.b)("p",null,"Three open the Hercules. Two Hercules is set to 115200 baud rate in the\nSerial Tab and open the Com port. One of the Hercules Port is set to\n5000 in the TCP Server tab and click on the listen."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/3-5_bte_testing.jpg",alt:null}))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/3-6_bte_testing.jpg",alt:null}))),Object(i.b)("h3",{id:"data-input"},"Data Input"),Object(i.b)("p",null,"Input from the WIZNET PCA10040 Terminal can see that is sent to the TCP\nServer."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/3-7_bte_testing.jpg",alt:null}))),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/img/osh/cookie/3-8_bte_testing.jpg",alt:null}))))}b.isMDXComponent=!0},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),b=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):_(_({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=b(n),s=r,u=d["".concat(c,".").concat(s)]||d[s]||p[s]||i;return n?a.a.createElement(u,_(_({ref:t},o),{},{components:n})):a.a.createElement(u,_({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var _={};for(var l in t)hasOwnProperty.call(t,l)&&(_[l]=t[l]);_.originalType=e,_.mdxType="string"==typeof e?e:r,c[1]=_;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);