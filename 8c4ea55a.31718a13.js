(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{354:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(9),i=(r(0),r(530)),o={},l={id:"Product/iMCU/W7500/Peripherals-internal/uart",title:"uart",description:"# Universal Asynchronous Receive Transmit(UART)",source:"@site/docs/Product/iMCU/W7500/Peripherals-internal/uart.md",permalink:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/uart",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500/Peripherals-internal/uart.md"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Baud rate calculation",id:"baud-rate-calculation",children:[]},{value:"Data transmission",id:"data-transmission",children:[]},{value:"Data receive",id:"data-receive",children:[]},{value:"Hardware flow control",id:"hardware-flow-control",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"universal-asynchronous-receive-transmituart"},"Universal Asynchronous Receive Transmit(UART)"),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The UART supports synchronous one-way communication, half-duplex single wire communication, and multiprocessor communications(CTS/RTS).  "),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Serial-to-parallel conversion on data received from a peripheral device"),Object(i.b)("li",{parentName:"ul"},"Parallel-to-serial conversion on data transmitted to the peripheral device"),Object(i.b)("li",{parentName:"ul"},"Data size of 5,6,7 and 8 its"),Object(i.b)("li",{parentName:"ul"},"One or two stop bits"),Object(i.b)("li",{parentName:"ul"},"Even, odd, stick, or no-parity bit generation and detection"),Object(i.b)("li",{parentName:"ul"},"Support of hardware flow control"),Object(i.b)("li",{parentName:"ul"},"Programmable FIFO disabling for 1-byte depth."),Object(i.b)("li",{parentName:"ul"},"Programmable use of UART or IrDA SIR input/output"),Object(i.b)("li",{parentName:"ul"},"False start bit detection")),Object(i.b)("h2",{id:"functional-description"},"Functional description"),Object(i.b)("p",null,"UART bidirectional communication requires a minimum of two pins: RX, TX\nThe frame are comprised of:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An Idle Line prior to transmission or reception "),Object(i.b)("li",{parentName:"ul"},"A start bit "),Object(i.b)("li",{parentName:"ul"},"A data word (8 or 9 bits) least significant bit first"),Object(i.b)("li",{parentName:"ul"},"1, 1.5, 2 Stop bits indicating that the frame is complete "),Object(i.b)("li",{parentName:"ul"},"The USART interface uses a baud rate generator "),Object(i.b)("li",{parentName:"ul"},"A status register (UART1_RISR) "),Object(i.b)("li",{parentName:"ul"},"data registers (UART1DR) "),Object(i.b)("li",{parentName:"ul"},"A baud rate register (UART1_IBRD,UART1_FBRD)")),Object(i.b)("p",null,"The below figure shows UART0,1 Block diagram"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/uart_block_diagram.jpg",alt:null,title:"Figure 1 UART block diagram"}))),Object(i.b)("p",null,"The below Figure shows the UART character frame"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/uart_character_frame.jpg",alt:null,title:"Figure 2 UART character frame"}))),Object(i.b)("h3",{id:"baud-rate-calculation"},"Baud rate calculation"),Object(i.b)("p",null,"UARTx can operate with or without using the Fractional Divider. The baud rate divisor is a 22-bit number consisting the UARTxIBRD(16-bit integer) and the UARTxFBRD(6-bit fractional).\nThis is used by the baud rate generator to determine the bit period."),Object(i.b)("img",{src:"http://latex.codecogs.com/gif.latex?Baud&space;Rate&space;Divisor&space;=",title:"Baud Rate Divisor ="}),"      ",Object(i.b)("img",{src:"http://latex.codecogs.com/gif.latex?UARTCLK/((16*baud&space;rate))=&space;\u3016BRD\u3017_I&plus;&space;\u3016BRD\u3017_F",title:"UARTCLK/((16*baud rate))= \u3016BRD\u3017_I+ \u3016BRD\u3017_F"}),Object(i.b)("p",null,"The below Figure shows UART divider flow chart"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/uart_divider_flow_chart.jpg",alt:null,title:"Figure 3 UART divider flow chart"}))),Object(i.b)("p",null,"The below Figure shows how to set the UART Initial value."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/uart_init_flow_chart.jpg",alt:null,title:"Figure 4 UART Initial setting flow chart"}))),Object(i.b)("h3",{id:"data-transmission"},"Data transmission"),Object(i.b)("p",null,"Data transmitted is stored in a 32-byte FIFOs. Transmit data is written into the transmit FIFO for transmission. If UART is enabled, it causes a data frame to start transmitting with parameters indicated in the UARTxLCR_H.\nData continues to transmit until there is no data left in the transmit FIFO. The BUSY bit of UARTxFR is \u20181\u2019 as soon as data is written to the transmit FIFO, which means the FIFO is not empty, and remains as \u20181\u2019 while data is being transmitted. "),Object(i.b)("h3",{id:"data-receive"},"Data receive"),Object(i.b)("p",null,"Received data is stored in the 32-byte FIFOs. When a start bit has been received, it begins running and data is sampled on the eighth cycle of that counter in UART mode. A valid stop bit is confirmed if UARTRXD is \u20181\u2019. When a full word is received, the data is stored in the receive FIFO. Error bit is stored in bit","[10:8]"," of UARTxCR and overrun is stored in bit","[11]"," of UARTxCR."),Object(i.b)("p",null,"The below figure shows Transmit and Receive data flow chart."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/uart_txrxdata_flow_chart.jpg",alt:null,title:"Figure 5 Transmit and Receive data flow chart"}))),Object(i.b)("h3",{id:"hardware-flow-control"},"Hardware flow control"),Object(i.b)("p",null,"The below Figure shows Hardware flow control description."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/uart_hw_flow_chart.jpg",alt:null,title:"Figure 6 Hardware flow control description"}))),Object(i.b)("p",null,"The RTS flow control is enabled by setting the RTSen of UARTxCR. If RTS is enabled, the data flow is controlled as follows.\nWhen the receiver FIFO level reaches the programmed trigger level, nUARTRTS(pin) is asserted(to a low value). nUARTRTS is reasserted(to a low level) once the receiver FIFO has reached the previous trigger level. The reasserted of nUARTRTS signals to the sending UART to continue transmitting data."),Object(i.b)("p",null,"The CTS flow control is enabled, the transmitter can only transmit data when nUARTCTS is asserted. When nUARTCTR is re-asserted(to a low) the transmitter sends the next byte. To stop the transmitter from sending the following byte, nUARTCTS must be released before the middle of the last stop bit that is currently being sent."),Object(i.b)("p",null,"The below Figure shows CTS Functinoal Timing."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/uart_cts_timing.jpg",alt:null,title:"Figure 7 CTS Functional Timing"}))),Object(i.b)("p",null,"The below Figure shows how software should use the RTS/CTR."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/uart_set_flow_chart.jpg",alt:null,title:"Figure 8 Algorithm for setting CTS/RTS flowchart"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/inter"}),"UART Interrupt example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/printf"}),"UART Printf example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/polling"}),"UART Polling example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500/Peripherals-internal/flowcontrol"}),"UART Hardware FlowControl example"))))}u.isMDXComponent=!0},530:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return r?n.a.createElement(m,l({ref:t},s,{components:r})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);