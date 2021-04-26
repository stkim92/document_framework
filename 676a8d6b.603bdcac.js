(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{260:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),i=r(6),n=(r(0),r(579)),l={id:"uart",title:"Universal Asynchronous Receive Transmit (UART)",date:new Date("2020-04-03T00:00:00.000Z")},o={unversionedId:"Product/iMCU/W7500/Peripherals-internal/uart",id:"Product/iMCU/W7500/Peripherals-internal/uart",isDocsHomePage:!1,title:"Universal Asynchronous Receive Transmit (UART)",description:"Introduction",source:"@site/docs\\Product\\iMCU\\W7500\\Peripherals-internal\\uart.md",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/uart",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/iMCU/W7500/Peripherals-internal/uart.md",sidebar:"docs",previous:{title:"TCP/IP core Offload Engine (TOE)",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/toe"},next:{title:"Watchdog Timer (WDT)",permalink:"/docs/Product/iMCU/W7500/Peripherals-internal/wdt"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Baud rate calculation",id:"baud-rate-calculation",children:[]},{value:"Data transmission",id:"data-transmission",children:[]},{value:"Data receive",id:"data-receive",children:[]},{value:"Hardware flow control",id:"hardware-flow-control",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"The UART supports synchronous one-way communication, half-duplex single wire communication, and multiprocessor communications(CTS/RTS).  "),Object(n.b)("h2",{id:"features"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Serial-to-parallel conversion on data received from a peripheral device"),Object(n.b)("li",{parentName:"ul"},"Parallel-to-serial conversion on data transmitted to the peripheral device"),Object(n.b)("li",{parentName:"ul"},"Data size of 5,6,7 and 8 its"),Object(n.b)("li",{parentName:"ul"},"One or two stop bits"),Object(n.b)("li",{parentName:"ul"},"Even, odd, stick, or no-parity bit generation and detection"),Object(n.b)("li",{parentName:"ul"},"Support of hardware flow control"),Object(n.b)("li",{parentName:"ul"},"Programmable FIFO disabling for 1-byte depth."),Object(n.b)("li",{parentName:"ul"},"Programmable use of UART or IrDA SIR input/output"),Object(n.b)("li",{parentName:"ul"},"False start bit detection")),Object(n.b)("h2",{id:"functional-description"},"Functional description"),Object(n.b)("p",null,"UART bidirectional communication requires a minimum of two pins: RX, TX\nThe frame are comprised of:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"An Idle Line prior to transmission or reception "),Object(n.b)("li",{parentName:"ul"},"A start bit "),Object(n.b)("li",{parentName:"ul"},"A data word (8 or 9 bits) least significant bit first"),Object(n.b)("li",{parentName:"ul"},"1, 1.5, 2 Stop bits indicating that the frame is complete "),Object(n.b)("li",{parentName:"ul"},"The USART interface uses a baud rate generator "),Object(n.b)("li",{parentName:"ul"},"A status register (UART1_RISR) "),Object(n.b)("li",{parentName:"ul"},"data registers (UART1DR) "),Object(n.b)("li",{parentName:"ul"},"A baud rate register (UART1_IBRD,UART1_FBRD)")),Object(n.b)("p",null,"The below figure shows UART0,1 Block diagram"),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/uart_block_diagram.jpg",alt:null,title:"Figure 1 UART block diagram"}))),Object(n.b)("p",null,"The below Figure shows the UART character frame"),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/uart_character_frame.jpg",alt:null,title:"Figure 2 UART character frame"}))),Object(n.b)("h3",{id:"baud-rate-calculation"},"Baud rate calculation"),Object(n.b)("p",null,"UARTx can operate with or without using the Fractional Divider. The baud rate divisor is a 22-bit number consisting the UARTxIBRD(16-bit integer) and the UARTxFBRD(6-bit fractional).\nThis is used by the baud rate generator to determine the bit period."),Object(n.b)("img",{src:"http://latex.codecogs.com/gif.latex?Baud&space;Rate&space;Divisor&space;=",title:"Baud Rate Divisor ="}),"      ",Object(n.b)("img",{src:"http://latex.codecogs.com/gif.latex?UARTCLK/((16*baud&space;rate))=&space;\u3016BRD\u3017_I&plus;&space;\u3016BRD\u3017_F",title:"UARTCLK/((16*baud rate))= \u3016BRD\u3017_I+ \u3016BRD\u3017_F"}),Object(n.b)("p",null,"The below Figure shows UART divider flow chart"),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/uart_divider_flow_chart.jpg",alt:null,title:"Figure 3 UART divider flow chart"}))),Object(n.b)("p",null,"The below Figure shows how to set the UART Initial value."),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/uart_init_flow_chart.jpg",alt:null,title:"Figure 4 UART Initial setting flow chart"}))),Object(n.b)("h3",{id:"data-transmission"},"Data transmission"),Object(n.b)("p",null,"Data transmitted is stored in a 32-byte FIFOs. Transmit data is written into the transmit FIFO for transmission. If UART is enabled, it causes a data frame to start transmitting with parameters indicated in the UARTxLCR_H.\nData continues to transmit until there is no data left in the transmit FIFO. The BUSY bit of UARTxFR is \u20181\u2019 as soon as data is written to the transmit FIFO, which means the FIFO is not empty, and remains as \u20181\u2019 while data is being transmitted. "),Object(n.b)("h3",{id:"data-receive"},"Data receive"),Object(n.b)("p",null,"Received data is stored in the 32-byte FIFOs. When a start bit has been received, it begins running and data is sampled on the eighth cycle of that counter in UART mode. A valid stop bit is confirmed if UARTRXD is \u20181\u2019. When a full word is received, the data is stored in the receive FIFO. Error bit is stored in bit","[10:8]"," of UARTxCR and overrun is stored in bit","[11]"," of UARTxCR."),Object(n.b)("p",null,"The below figure shows Transmit and Receive data flow chart."),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/uart_txrxdata_flow_chart.jpg",alt:null,title:"Figure 5 Transmit and Receive data flow chart"}))),Object(n.b)("h3",{id:"hardware-flow-control"},"Hardware flow control"),Object(n.b)("p",null,"The below Figure shows Hardware flow control description."),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/uart_hw_flow_chart.jpg",alt:null,title:"Figure 6 Hardware flow control description"}))),Object(n.b)("p",null,"The RTS flow control is enabled by setting the RTSen of UARTxCR. If RTS is enabled, the data flow is controlled as follows.\nWhen the receiver FIFO level reaches the programmed trigger level, nUARTRTS(pin) is asserted(to a low value). nUARTRTS is reasserted(to a low level) once the receiver FIFO has reached the previous trigger level. The reasserted of nUARTRTS signals to the sending UART to continue transmitting data."),Object(n.b)("p",null,"The CTS flow control is enabled, the transmitter can only transmit data when nUARTCTS is asserted. When nUARTCTR is re-asserted(to a low) the transmitter sends the next byte. To stop the transmitter from sending the following byte, nUARTCTS must be released before the middle of the last stop bit that is currently being sent."),Object(n.b)("p",null,"The below Figure shows CTS Functinoal Timing."),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/uart_cts_timing.jpg",alt:null,title:"Figure 7 CTS Functional Timing"}))),Object(n.b)("p",null,"The below Figure shows how software should use the RTS/CTR."),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/products/w7500p/peripheral/uart_set_flow_chart.jpg",alt:null,title:"Figure 8 Algorithm for setting CTS/RTS flowchart"}))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/Product/iMCU/W7500/Peripherals-internal/inter"}),"UART Interrupt example")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/Product/iMCU/W7500/Peripherals-internal/printf"}),"UART Printf example")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/Product/iMCU/W7500/Peripherals-internal/polling"}),"UART Polling example")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/Product/iMCU/W7500/Peripherals-internal/flowcontrol"}),"UART Hardware FlowControl example"))))}u.isMDXComponent=!0},579:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=a,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||n;return r?i.a.createElement(m,o(o({ref:t},s),{},{components:r})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<n;s++)l[s]=r[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);