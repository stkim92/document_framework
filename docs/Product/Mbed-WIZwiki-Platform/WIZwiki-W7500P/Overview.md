---
id: overview
title: Overview
date: 2020-04-07
---

# WIZwiki-W7500P

![WIZwiki-W7500](/document_framework/img/products/w7500p/overview/wizwiki-w7500p.png)

-----


## WIZwiki Platform

WIZnet WIZwiki Platform based on WIZnet's MCU. WIZnet WIZwiki-W7500P is
a WIZwiki platform board based on W7500P. The IOP4IoT W7500P chip is the
one-chip solution which integrates an ARM Cortex-M0, 128KB Flash,
hardwired TCP/IP core for various embedded application platform, 10/100
Ethernet MAC and PHY, and especially internet of things. The TCP/IP core
is a market-proven hardwired TCP/IP stack and PHY is IC plus IP101G, an
IEEE 802.3/802.3u Fast Ethernet Transcevier for 10/100Mbps. The
Hardwired TCP/IP stack supports the TCP, UDP, IPv4, ICMP, ARP, IGMP and
PPPoE which has been used in various applications for more than 15
years. W7500P suits users who need Internet connectivity best.

-----


## Features

**WIZnet W7500P**

   * ARM Cortex-M0 Core
   * PHY (IC+(IP101G))
   * 48MHz, 128KB Flash
   * 16KB RAM
   * 32KB RAM for TCP/IP - Can be extended to system RAM
   * Hardwired TCP/IP Core
   * Internal Ethernet PHY
   * MDI Interface
   * ADC (8)
   * GPIO (34)
   * SWD (Serial Wire Debug)
   * Timer/PWM 
   * UART (3)
   * SPI (2)
   * I2C (2)
   * 64 LQFP (7x7 mm)

**CMSIS-DAP**

 
  * LPC11U35FHI33/501, ARM Cortex-M0 Core, NXP
  * Drag-n-drop programming
  * USB Serial Port
  * Easy to use C/C++ SDK


**Connector**

  * USB Mini B Type
  * Slim Size RJ45(with transformer)
  * Arduino compatible pin headers
  * Xbee Header

**ETC**

   * 5V USB Power or 5V header supply
   * 2 system SW - RESET SW, BOOT SW
   * 1 User SW
   * RGB LED
   * Micro SD card slot

**WIZwiki-W7500P Blockdiagram**  
![WIZwiki-W7500
Blockdiagram](/document_framework/img/products/w7500p/overview/wizwiki-w7500p_blockdiagram.png)  
**WIZwiki-W7500P Callout**  
![WIZwiki-W7500
Callout](/document_framework/img/products/w7500p/overview/wizwiki-w7500p_callout.png)  
**WIZwiki-W7500P Pinout**  
![WIZwiki-W7500
Pinout](/document_framework/img/products/w7500p/overview/wizwiki_w7500p_pinout_mbed_150907.png)  

-----


## Firmware

**W7500P Library**

   * [W7500P Library PAGE ](Firmware.md)

-----


## Getting Started

   * [How to start WIZwiki-W7500P Board](How_to_start_WIZwiki_W7500P_Board.md)
   * [How to install WIZwiki-W7500P serial driver](How_to_install_WIZwiki_W7500P_serial_driver.md)
   * [How to write the firmware into WIZwiki-W7500P](How_to_write_the_firmware_into_WIZwiki_W7500P.md)
   * [How to debug Wizwiki-W7500P](How_to_debug_Wizwiki_W7500P.md)
   * [How to write the firmware into CMSIS-DAP](How_to_write_the_firmware_into_CMSIS_DAP.md)

-----


## Make New WIZwiki-W7500P Projects

   * [How to use ARM mbed.org platform](../WIZwiki-W7500-Mbed-Starter-Kit/Tutorial(Eng).md)
   * [How to install KEIL uVision5](../WIZwiki-W7500/How_to_install_KEIL_uVision5.md)
   * [How to create KEIL uVision5 new project for W7500P](../WIZwiki-W7500/How_to_create_KEIL_uVision5_new_project_for_W7500.md)
   * [How to use MDK for W7500P Peripherals Examples](../WIZwiki-W7500/How_to_use_MDK_for_W7500_Peripherals_Examples.md)
   * [How to use gcc for W7500P Peripherals Examples](../WIZwiki-W7500/How_to_use_gcc_for_W7500_Peripherals_Examples.md)

-----


## Technical Reference

**Datasheet**

   * [W7500P Documents](Technical_Reference.md)
   * ![LPC11U35FHI33/501 Datasheet](/document_framework/img/products/w7500p/overview/LPC11U3X.pdf)

**Schematic**

  - If your project uses the W7500P, do not refer to the WIZwiki-W7500P
    V1.0 schematic.
  - Refer to the reference schematic of W7500P.
      - 🌎[Reference schematic of
        W7500P](https://github.com/Wiznet/Hardware-Files-of-WIZnet/tree/master/01_iMCU/W7500P/Reference%20Schematic)

<!-- end list -->

  - **Schematic Version 1.0**

<!-- end list -->

   * [WIZwiki-W7500P V1.0 Schematic (Altium Designer)]()
   * [WIZwiki-W7500P V1.0 Schematic (PDF)](/document_framework/img/products/w7500p/overview/wizwiki-w7500p_sch_v1.0.pdf)

**Part list**

   * [WIZwiki-W7500P V1.0 BOM (PDF)](/document_framework/img/products/w7500p/overview/wizwiki_w7500p_bom_v1.0_150909.pdf)

**Dimension**

   * WIZwiki-W7500P V1.0 Dimension

![WIZwiki-W7500P Dimension](/document_framework/img/products/w7500p/overview/wizwiki-w7500_dimension.png)

-----

## Etc.

**Serial Port Driver**

   * 🌎[ARM mbed Window serial configuration PAGE ](http://developer.mbed.org/handbook/Windows-serial-configuration)

**W7500P ISP Program**

  - 🌎[Go to ISP tool manual & Program download]()

**Examples Binary**

   * [WIZwiki-W7500P Examples Binary]()

-----


## See Also

   * 🌎[WizWiki Forum](http://www.wizwiki.net/forum) : WIZnet Forum for Technical support and Project shared
   * [W7500P Documents Download]()

-----
