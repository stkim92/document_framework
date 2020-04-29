---
id: datasheet
title: Datasheet
date: 2020-04-09
---

## Content

# WIZ750SR-110 Datasheet

\*\* Supported Languages \*\*  
\* English only

![](/products/wiz750sr/docs_icon.png)

-----

## Hardware Specification

### Product Spec Table

<table>
<thead>
<tr class="header">
<th>Category</th>
<th></th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>MCU</td>
<td>ARM<br />
Cortex-M0<br />
Core</td>
<td>W7500<br />
48Mhz maximum frequency<br />
Internal 8Mhz RC Oscillator<br />
Flash: 128KB<br />
Large flexible-size SRAM buffer for various User Application<br />
- Min 16KB available if full 32KB socket buffer used<br />
- Max 48KB available if no socket buffer used<br />
ROM for boot code: 6 KB</td>
</tr>
<tr class="even">
<td>:::</td>
<td>Hardwired<br />
TCP/IP<br />
Core</td>
<td>8 independent Sockets<br />
SRAM for socket: 32KB<br />
MII (Medium-Independent Interface)<br />
TCP/IP Protocols: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE</td>
</tr>
<tr class="odd">
<td>PHY</td>
<td>Transceiver</td>
<td>IP101GRI<br />
Single 10/100M Ethernet Transceiver</td>
</tr>
<tr class="even">
<td>Serial</td>
<td>Signal</td>
<td>TXD, RXD, RTS, CTS, GND</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>Parameters</td>
<td>Parity: None, Odd, Even<br />
Data bits: 7, 8 bit<br />
Flow control: None, RTS / CTS, XON / XOFF</td>
</tr>
<tr class="even">
<td>:::</td>
<td>Speed</td>
<td>Up to 230Kbps</td>
</tr>
<tr class="odd">
<td>Dimension</td>
<td></td>
<td>62mm x 40mm ( PCB board size )<br />
62mm x 40mm x 18mm ( Include part size )</td>
</tr>
<tr class="even">
<td>Connector type</td>
<td></td>
<td><strong>RJ-45(Ethernet Connector)</strong><br />
D-sub9 Connector(RS-232C)</td>
</tr>
<tr class="odd">
<td>Input Voltage</td>
<td></td>
<td>DC 5V, 100mA under</td>
</tr>
<tr class="even">
<td>Temperature</td>
<td></td>
<td>-40℃ ~ 85℃ (Operation), -40℃ ~ 85℃ (Storage range)</td>
</tr>
</tbody>
</table>

-----

### WIZ750SR-110 Callout

|                                                                         |
| ----------------------------------------------------------------------- |
| ![](/products/wiz750sr-110/datasheet/wiz750sr-110_callout_top_modi.png) |
| TOP                                                                     |
| ![](/products/wiz750sr-110/datasheet/wiz750sr-110_callout_bottom.png)   |
| BOTTOM                                                                  |

-----

### WIZ750SR-110 Pinout

![](/products/wiz750sr-110/datasheet/wiz750sr-110_pinout_all.png)

-----

### WIZ750SR-110 indicate

![](/products/wiz750sr-110/datasheet/wiz750sr-110_indicateled_pinout.png)

| Pin Number | Pin Name | Signal       | Description                       |
| ---------- | -------- | ------------ | --------------------------------- |
| 1          | LD1      | UART0 RX     | UART receiver indicate            |
| 2          | LD2      | UART0 TX     | UART Transceiver indicate         |
| 3          | LD3      | Status\_LED0 | PHY LINK check or initialize done |
| 4          | LD4      | Status\_LED1 | TCP Connection                    |
| 5          | LD5      | STATUS       | Not function                      |
| 6          | LD6      | COL          | Collision Detected                |
| 7          | LD7      | Power LED    | \-                                |

-----

### WIZ750SR-110 Block Diagram

![](/products/wiz750sr-110/datasheet/wiz750sr-110_blockdiagram_v2.png)

-----

## Schematic & Artwork

### WIZ750SR-110

| H/W version | Type  | Filetype | Download Link                                                                                                                | Remarks |
| ----------- | ----- | -------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- |
| 1.0         | RS232 | Altium   | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr-110/datasheet/wiz750sr-110_v1.0_altium.zip) | \-      |
| :::         | :::   | PDF      | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr-110/datasheet/wiz750sr-110.pdf)             | \-      |

-----

## Part list

### WIZ750SR-110

| H/W version | Type  | Filetype | Download Link                                                                                                                     | Remarks |
| ----------- | ----- | -------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 1.0         | RS232 | Excel    | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr-110/datasheet/wiz750sr-110_v1.0_pl_20171227.xls) | \-      |
| :::         | :::   | PDF      | ![](/products/w5500/w5500_evb/icons/download.png) ![Download](/products/wiz750sr-110/datasheet/wiz750sr-110_v1.0_pl_20171227.pdf) | \-      |

-----

## Electrical Characteristics

### Operating Conditions

<table>
<thead>
<tr class="header">
<th>Symbol</th>
<th>Parameter</th>
<th>Pins</th>
<th>Min</th>
<th>Typ</th>
<th>Max</th>
<th>Unit</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>V<em>cc</em></td>
<td><strong>Operating Voltage</strong></td>
<td>3.3V</td>
<td>3.135</td>
<td>3.3</td>
<td>3.465</td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>ss</em></td>
<td><strong>Ground</strong></td>
<td>ALL</td>
<td></td>
<td>0</td>
<td>50</td>
<td>mV</td>
</tr>
<tr class="odd">
<td>f<em>FCLK</em></td>
<td><strong>Internal CPU clock frequency</strong></td>
<td>ALL</td>
<td>0</td>
<td>-</td>
<td>48</td>
<td>MHz</td>
</tr>
<tr class="even">
<td>T<em>stg</em></td>
<td><strong>Storage Temperature (max)</strong></td>
<td>ALL</td>
<td>-40</td>
<td></td>
<td>85</td>
<td>℃</td>
</tr>
<tr class="odd">
<td>T<em>A</em></td>
<td><strong>Ambient operating temperature</strong></td>
<td>ALL</td>
<td>-40</td>
<td>85</td>
<td></td>
<td>℃</td>
</tr>
<tr class="even">
<td>V<em>IO</em></td>
<td><strong>I/O Signal voltage (Tolerance)</strong></td>
<td>ALL</td>
<td>Vss-0.3</td>
<td>3.3</td>
<td>5</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>IH</em></td>
<td><strong>Input high voltage</strong></td>
<td>ALL</td>
<td>2.5</td>
<td></td>
<td></td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>IL</em></td>
<td><strong>Input low voltage</strong></td>
<td>ALL</td>
<td></td>
<td></td>
<td>0.6</td>
<td>V</td>
</tr>
<tr class="odd">
<td>V<em>OH</em></td>
<td><strong>Output high voltage<br />
(High driving strength Current load = 6mA)<br />
(Low driving strength Current load = 3mA)</strong></td>
<td>ALL</td>
<td>2.83</td>
<td></td>
<td></td>
<td>V</td>
</tr>
<tr class="even">
<td>V<em>OL</em></td>
<td><strong>Output high voltage<br />
(High driving strength Current load = 6mA)<br />
(Low driving strength Current load = 3mA)</strong></td>
<td>ALL</td>
<td></td>
<td></td>
<td>0.32</td>
<td>V</td>
</tr>
</tbody>
</table>

### Flash Memory

| Symbol | Parameter            | Min    | Unit   |
| ------ | -------------------- | ------ | ------ |
| N*END* | **Sector Endurance** | 10,000 | Cycles |
| T*DR*  | **Data Retention**   | 10     | Years  |

### EEPROM

| Symbol | Parameter            | Min | Unit   |
| ------ | -------------------- | --- | ------ |
| N*END* | **Sector Endurance** | 1M  | Cycles |
| T*DR*  | **Data Retention**   | 200 | Years  |

-----

## Connector Specification

### Data D-SUB9 Connector (P2)

![](/products/wiz750sr-105/datasheet/wiz750sr-105-evb_pinout.png)

| Pin Number | Signal | Description                  |
| ---------- | ------ | ---------------------------- |
| 1          | DCD    | NC                           |
| 2          | RXD    | Receive Data                 |
| 3          | TXD    | Transmit Data                |
| 4          | DTR    | NC                           |
| 5          | GND    | System Ground(Signal Ground) |
| 6          | DSR    | NC                           |
| 7          | RTS    | Request To Send              |
| 8          | CTS    | Clear To Send                |
| 9          | RI     | NC                           |

  - WIZ750SR-110 supports only 4 signals. (TXD, RXD, CTS, RTS)

<!-- end list -->

  - If you want to use all 9 signals, you have to make them separately.
    or you must design new hardware

<!-- end list -->

  - TXD, RXD, CTS, RTS are provided as peripheral functions.
  - And already made DSR and DTR signal in GPIO functions.(WIZ750SR
    Firmware code)
  - Therefore, DCD and RI functions must be created.

<!-- end list -->

  - RXD, TXD, GND: These are all you need if the device does not use
    hardware handshaking.
  - RXD, TXD, GND, RTS, CTS: These are the signals used when serial
    device uses hardware handshaking.
  - DTR, DSR: Not used

![](/products/wiz750sr-100/datasheet/wiz750sr-100-serial_cable.png)

-----

### BOOT Pin (J4, J5)

![](/products/wiz750sr-110/datasheet/wiz750sr-110_pinout_boot.png)

| Parts | Pin Number | Signal   | Description                   |
| ----- | ---------- | -------- | ----------------------------- |
| J4    | 1          | APP BOOT | Application Jump at BOOT mode |
| :::   | 2          | GND      | System Ground                 |

| Parts | Pin Number | Signal | Description         |
| ----- | ---------- | ------ | ------------------- |
| J5    | 1          | BOOT   | System Ground       |
| :::   | 2          | VCC    | System Power (3.3V) |

-----

### SWD(JTAG) Pin (J3)

![](/products/wiz750sr-110/datasheet/wiz750sr-110_pinout_swd.png)

| Pin Number | Signal | Description                      |
| ---------- | ------ | -------------------------------- |
| 1          | VCC    | System Power (3.3V)              |
| 2          | SWDIO  | SWD(JTAG) Data I/O pin           |
| 3          | SWCLK  | SWD(JTAG) Clock pin              |
| 4          | nRESET | System Reset signal (Active Low) |
| 5          | GND    | System Ground                    |

-----

### ISP Port & Expansion GPIO (J1, J2)

![](/products/wiz750sr-110/datasheet/wiz750sr-110_pinout_expansion.png)

| Parts | Pin Number | Signal          | Description                          |
| ----- | ---------- | --------------- | ------------------------------------ |
| J1    | 1          | VCC             | System Power (3.3V)                  |
| :::   | 2          | Expansion GPIOD | Expansion User's depend on GPIO port |
| :::   | 3          | Expansion GPIOC | :::                                  |
| :::   | 4          | Expansion GPIOB | :::                                  |
| :::   | 5          | Expansion GPIOA | :::                                  |
| :::   | 6          | GND             | System Ground                        |

<table>
<thead>
<tr class="header">
<th>Parts</th>
<th>Pin Number</th>
<th>Signal</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>J2</td>
<td>1</td>
<td>VCC</td>
<td>System Power (3.3V)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>2</td>
<td>BOOT</td>
<td>BOOT SW</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>3</td>
<td>U_TXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="even">
<td>:::</td>
<td>4</td>
<td>U_RXD2</td>
<td>Simple UART2(Debug port)<br />
ISP mode firmware downloader port</td>
</tr>
<tr class="odd">
<td>:::</td>
<td>5</td>
<td>nRESET</td>
<td>System Reset signal (Active Low)</td>
</tr>
<tr class="even">
<td>:::</td>
<td>6</td>
<td>GND</td>
<td>System Ground</td>
</tr>
</tbody>
</table>

-----

### RJ-45 Connector (BS-RB10005)

![](/products/wiz750sr/datasheet/wiz750sr_magjack.png)

| Pin Number | Pin              | Signal              |
| ---------- | ---------------- | ------------------- |
| 1          | R1               | TX+                 |
| 2          | R2               | TX-                 |
| 3          | R3               | TCT/RCT(Center tap) |
| 4          | R7               | RX+                 |
| 5          | R8               | RX-                 |
| 6          | L1+(Active LED)  | Anode               |
| 7          | L2- (Active LED) | Cathode             |
| 8          | L3+(LINK LED)    | Anode               |
| 9          | L4- (LINK LED)   | Cathode             |

-----

## Dimension

  - WIZ750SR-110 Rev1.0 Dimension : 
      - 63mm x 45mm ( PCB board size )
      - 75mm x 45mm x 18mm ( Included part size )

![](/products/wiz750sr-110/datasheet/wiz750sr-110_dimension_v3.png)

-----

## Navigation

-----

\<WRAP group\> \<WRAP centeralign half column\>
[![arrow\_upward.png](/etc/arrow_upward.png)](#WIZ750SR-110_Datasheet)  
**Scroll to Top** \</WRAP\>

\<WRAP centeralign half column\>
[![arrow\_refresh.png](/etc/arrow_refresh.png)](/products/wiz750sr-110/start)  
**Back to Product Main** \</WRAP\> \</WRAP\>

-----

\<WRAP round box group\> \<WRAP half column\> \<WRAP centeralign\> \*\*
WIZ750SR series Common Documents \*\* \</WRAP\>

  - **[User's Manual](/products/wiz750sr/usermanual/en)** 

<!-- end list -->

  - **[Device Command Manual](/products/wiz750sr/commandmanual/en)**

<!-- end list -->

  - **[Troubleshooting Guide](/products/wiz750sr/troubleshooting/en)**

<!-- end list -->

  - **[Update History](/products/wiz750sr/history/en)**

-----

\<WRAP centeralign\> \*\* WIZ750SR series Downloads \*\* \</WRAP\>

  - **[Software Downloads](/products/wiz750sr/download/start)**

<!-- end list -->

  - **[Technical Reference](/products/wiz750sr/reference/start)**

\</WRAP\>

\<WRAP half column\> \<WRAP centeralign\> \*\* WIZ750SR Individual
documents \*\* \</WRAP\>

  - **[WIZ750SR Product Overview](/products/wiz750sr/overview/en)**
  - **[WIZ750SR Getting Started
    Guide](/products/wiz750sr/gettingstarted/en)**
  - **[WIZ750SR Datasheet](/products/wiz750sr/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-100 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-100 Product
    Overview](/products/wiz750sr-100/overview/en)**
  - **[WIZ750SR-100 Getting Started
    Guide](/products/wiz750sr-100/gettingstarted/en)**
  - **[WIZ750SR-100 Datasheet](/products/wiz750sr-100/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-105 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-105 Product
    Overview](/products/wiz750sr-105/overview/en)**
  - **[WIZ750SR-105 Getting Started
    Guide](/products/wiz750sr-105/gettingstarted/en)**
  - **[WIZ750SR-105 Datasheet](/products/wiz750sr-105/datasheet/start)**

-----

\<WRAP centeralign\> \*\* WIZ750SR-110 Individual documents \*\*
\</WRAP\>

  - **[WIZ750SR-110 Product
    Overview](/products/wiz750sr-110/overview/en)**
  - **[WIZ750SR-110 Getting Started
    Guide](/products/wiz750sr-110/gettingstarted/en)**
  - **[WIZ750SR-110 Datasheet](/products/wiz750sr-110/datasheet/start)**

\</WRAP\> \</WRAP\>
