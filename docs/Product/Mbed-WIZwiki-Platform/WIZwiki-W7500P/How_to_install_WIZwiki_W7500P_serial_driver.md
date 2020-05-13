# How to install WIZwiki-W7500p serial driver

-----


## Overview

CMSIS-DAP of WIZwiki-W7500p has two functions. The first function is
firmware writing to the W7500p (Target MCU) through USB Interface. The
second function is to receive and transmit data in the UART1 of W7500p
using the USB Interface.  
The first function is used without the driver, but the second function
is used after install the driver.  
CMSIS-DAP Interface of WIZwiKI-W7500 has shows as the photo below.  
![CMSIS-DAP Interface](/document_framework/img/products/w7500/overview/cmsis-dap_block.png)

-----


## Serial driver installation

The driver could be found on the LINK below, click on the "Download
latest driver" can download the latest driver.  
🌎[ARM mbed Window serial configuration PAGE](http://developer.mbed.org/handbook/Windows-serial-configuration)  
If the driver is successfully installed, serial port that is created as
"mbed Seral Port (COMn)" in Device Manager.

-----
