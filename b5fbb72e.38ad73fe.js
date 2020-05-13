(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{479:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(9),i=(a(0),a(623)),o={},l={id:"Product/iMCU/W7500P/Peripherals-internal/i2c",title:"i2c",description:"# Inter-Integrated Circuit(I2C)\r",source:"@site/docs\\Product\\iMCU\\W7500P\\Peripherals-internal\\i2c.md",permalink:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/i2c",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iMCU/W7500P/Peripherals-internal/i2c.md"},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Functional description",id:"functional-description",children:[{value:"Master mode",id:"master-mode",children:[]},{value:"Slave mode",id:"slave-mode",children:[]}]},{value:"Peripheral_Examples",id:"peripheral_examples",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"inter-integrated-circuiti2c"},"Inter-Integrated Circuit(I2C)"),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"I2C"),"(Inter-Integrated Circuit) bus interface handles communications between the microcontroller and the serial I2C bus. It supports standard speed mode(100Kbps), Fast Mode(400Kbps)."),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use APB interface"),Object(i.b)("li",{parentName:"ul"},"Supports Slave and Master Mode"),Object(i.b)("li",{parentName:"ul"},"Standard mode (up to 100 KHz)"),Object(i.b)("li",{parentName:"ul"},"Fast mode (up to 400 KHz)"),Object(i.b)("li",{parentName:"ul"},"Supports 7bit Slave address mode"),Object(i.b)("li",{parentName:"ul"},"Start/Stop/Repeated Start detection"),Object(i.b)("li",{parentName:"ul"},"Start/Stop/Repeated Start/Acknowledge generation"),Object(i.b)("li",{parentName:"ul"},"Control the Read/Write operation"),Object(i.b)("li",{parentName:"ul"},"General Call enable or disable"),Object(i.b)("li",{parentName:"ul"},"Slave busy detection"),Object(i.b)("li",{parentName:"ul"},"Repeated START")),Object(i.b)("h2",{id:"functional-description"},"Functional description"),Object(i.b)("p",null,"I2C is comprised of both master and slave functions. For proper operation, the SDA and SCL pins must be configured as open-drain signals. A I2C bus configuration is shown below Figure."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/i2c_bus_configuration.jpg",alt:"Figure 1 I2C Bus Configuration",title:"Figure 1 I2C Bus Configuration"}))),Object(i.b)("p",null,"In addition to receiving and transmitting data, this interface converts it from serial to parallel format and vice versa. The interrupt is enabled or disabled by software. The interface is connected to the I2C bus by a data pin (SDA) and by a Clock pin (SCL). It can be connected with a standard (up to 100 KHz), Fast mode (up to 400 KHz) I2C bus."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/i2c_block_diagram.jpg",alt:"Figure 2 I2C block diagram",title:"Figure 2 I2C block diagram"}))),Object(i.b)("p",null,"SDA is the bi- directions serial data line and SCL is the bi-directions serial clock line. The bus is considered idle when both lines are high. Every transaction on the I2C bus is nine bits long, consisting of eight data bits and a single acknowledge bit and data must be transferred MSB first."),Object(i.b)("p",null,"###Data validity"),Object(i.b)("p",null,"The data on the SDA line must be stable during the HIGH period of the SCL. The HIGH or LOW state of the data line can only change when the clock signal on the SCL line is LOW (The below Figure). One clock pulse is generated for each data bit transferred."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/i2c_data_validity.jpg",alt:null,title:"Figure 3 Data Validity"}))),Object(i.b)("p",null,"###Acknowledge"),Object(i.b)("p",null,"All bus transactions have a required acknowledge clock cycle that is generated by the master. During the acknowledge cycle, the transmitter cannot operate the next operation."),Object(i.b)("p",null,"###Bit Command Controller"),Object(i.b)("p",null,"The Bit command Controller handles the actual transmission of data and the generation of the specific levels for START, STOP and Repeated START signals by controlling the SCL and SDA lines. The Byte Command controller tells the Bit command Controller which operation has to be performed. For a single byte read, the Bit command Controller receives 8 separate read command. Each bit-operation is divided into 5 pieces (idle and A,B,C,and D) except for a STOP operation which is divided into 4 pieces(idle and A, B,C)"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/i2c_bit_condition.jpg",alt:null,title:"Figure 4 Bit Condition"}))),Object(i.b)("p",null,"####START and STOP Conditions"),Object(i.b)("p",null,"The protocol of the I2C bus defines two states to START and STOP conditions.\nA High to Low transition on the SDA line while SCL is High is one unique case and indicates a START condition. A Low to High transition on the SDA line while SCL is high defines a STOP condition."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/i2c_start_stop_condition.jpg",alt:null,title:"Figure 5 START and STOP Conditions"}))),Object(i.b)("p",null,"START and STOP conditions are always generated by the master.\nThis bus is considered to be again a certain time after the STOP condition. The bus stays busy if a Repeated START is generated instead of a STOP condition."),Object(i.b)("p",null,"####RESTART Condition"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/i2c_restart_condition.jpg",alt:null,title:"Figure 6 RESTART Conditions"}))),Object(i.b)("p",null,"###Slave address"),Object(i.b)("p",null,"The SDA line must be eight bits long.\nEach byte must be followed by an Acknowledge bit. "),Object(i.b)("p",null,"![]",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/document_framework/img/products/w7500p/peripheral/i2c_7bit_slave_addr.jpg"}),"https://github.com/Wiznet/document_framework/img/products/w7500p/peripheral/i2c_7bit_slave_addr.jpg"),' "Figure 7 7-bit Slave address")'),Object(i.b)("p",null,"###Read/Write bit"),Object(i.b)("p",null,'This address is seven bits followed by an eight bit which is a data direction bit(R/\xaf("W" )) :\n\u20180\u2019 indicates a WRITE, \u20181\u2019 indicates a READ\nThere are two methods of setting data direction bit by I2Cx_CTR.\nThe 32-bits I2Cx_CTR is reconfigured with COREEN, INTEREN, MODE, ADDR10, CTRRWN, CTREN.\nCTREN bit select the R/W \u2013 a \u2018Zero\u2019 indicates the slave address bit 0, a \u2018one\u2019 indicates a CTRRWN bit.'),Object(i.b)("p",null,"###Acknowledge(ACK) and Acknowledge(NACK)"),Object(i.b)("p",null,"The acknowledge bit takes place after every bytes. The acknowledge bit allows the receiver to signal the transmitter that the byte was successfully received and another byte may be sent. The master generates all clock pulses, including acknowledge ninth clock."),Object(i.b)("p",null,"###Data transfer"),Object(i.b)("p",null,"The data transfer is managed through the shift, transmit data, and receive data registers.\nData transfers follow the format shown in the below Figure. After START condition, a Slave address is transmitted. If CTREN bit in the I2Cx_CTR register is enable, LSB of Slave address (bit 0) is superseded by value of CTRRWN bit in the I2Cx_CTR register."),Object(i.b)("p",null,"If CTREN bit in the I2Cx_CTR register is disable, LSB of slave address is used for Read/Write operation."),Object(i.b)("p",null,"###Operating Modes"),Object(i.b)("p",null,"The interface can operate in one of four following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Master Transmitter Mode "),Object(i.b)("li",{parentName:"ul"},"Master Receiver Mode"),Object(i.b)("li",{parentName:"ul"},"Slave Transmitter Mode"),Object(i.b)("li",{parentName:"ul"},"Slave Receiver Mode")),Object(i.b)("p",null,"By default, it operates in slave mode. The interface switches from slave to master when it generates the mode bit in the I2Cx_CTR. And COREEN bit in the I2Cx_CTR must be switched from 1 to 0."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"In Master mode"),Object(i.b)("br",{parentName:"p"}),"\n","Master Transmitter Mode:\nIn this mode, data is transmitted from master to slave before the master transmitter mode can be entered and I2Cx_CTR must be initialized   "),Object(i.b)("p",null,"Master Receiver Mode:\nIn this mode, data is received from slave to master before the master receive mode can be entered and I2Cx_CTR must be initialized    "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"In Slave mode"),Object(i.b)("br",{parentName:"p"}),"\n","Slave Transmitter Mode:\nIn this mode, data is transmitted from slave to master and setting of I2Cx_SADDR must be done. "),Object(i.b)("p",null,"Slave Receiver Mode:\nIn this mode, data is received from master to slave before the master transmitter mode can be entered and setting of I2Cx_SADDR must be done. "),Object(i.b)("p",null,"###Interrupts"),Object(i.b)("p",null,"The I2C can generate interrupt when the following conditions are observed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Start conditions on bus detected"),Object(i.b)("li",{parentName:"ul"},"Stop conditions on bus detected"),Object(i.b)("li",{parentName:"ul"},"Timeout error"),Object(i.b)("li",{parentName:"ul"},"Master transaction completed"),Object(i.b)("li",{parentName:"ul"},"Slave transaction received")),Object(i.b)("p",null,"I2C bus have separate interrupt signals."),Object(i.b)("h3",{id:"master-mode"},"Master mode"),Object(i.b)("h4",{id:"initialization"},"Initialization"),Object(i.b)("p",null,"The below figures that follow show the command sequences available for the I2C master."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/i2c_init_flow_chart.jpg",alt:null,title:"Figure 10 I2C initial setting"}))),Object(i.b)("p",null,"The below figure shows the master operation using a 7-bit slave address."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/i2c_tx_flow_chart.jpg",alt:null,title:"Figure 11 Master TRANSMIT with ADDR10=0 in the I2Cx_CTR"}))),Object(i.b)("p",null,"below Figure shows the operation of repeated START.",Object(i.b)("br",{parentName:"p"}),"\n","The repeated START operates for data read operation execution.",Object(i.b)("br",{parentName:"p"}),"\n","The operation sequences are Slave address, send data, repeated START, and send data.  "),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_frameworkc/img/products/w7500p/peripheral/i2c_tx_repeat_flow_chart.jpg",alt:null,title:"Figure 12 Master Transmit with Repeated START"}))),Object(i.b)("h3",{id:"slave-mode"},"Slave mode"),Object(i.b)("p",null,"The below Figure shows the command sequences available for the I2C slave."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w7500p/peripheral/i2c_slave_command_flow_chart.jpg",alt:null,title:"Figure 13 Slave Command Sequence"}))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"peripheral_examples"},"Peripheral_Examples"),Object(i.b)("p",null,":!: ",Object(i.b)("strong",{parentName:"p"},"When data read operation use,you have to use the repeat(restart condition). It use between write and read operation.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/init"}),"I2C Read/Write example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/document_framework/docs/Product/iMCU/W7500P/Peripherals-internal/eeprom"}),"I2C and M24CXX EEPROM communication example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"lm75_temperature.md"}),"I2C and LM75 Temperature Sensor communication example"))))}b.isMDXComponent=!0},623:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),u=n,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return a?r.a.createElement(m,l({ref:t},s,{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);