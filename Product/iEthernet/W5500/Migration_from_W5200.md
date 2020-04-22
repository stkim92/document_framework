---
id: migration_from_w5200
title: Migration from W5200
date: 2020-04-03
---


## Content

# Migration from W5200 to W5500

This page explains migration materials to W5200 users.

-----

### Driver for W5200 Users

  - Download :
    ![w5500\_cortexm3\_firmware\_for\_legacy.zip](/products/w5500/w5500_cortexm3_firmware_for_legacy.zip)
  - \<WRAP center round important 60%\>

This driver is provided only for current W5200 users to help with a fast
migration to W5500. TTo **get the new or latest BSD version driver**,
please refer to the [W5500 Driver](/products/w5500/driver) page.
\</WRAP\>

### W5500 vs W5200 Chip in Comparison

<table border="0" cellspacing="0" cellpadding="0" >
<tbody>
<tr>
<th>Device</th><th>W5500</th><th>W5200</th>
</tr>
<tr>
<td width="356" valign="top">Process</td>
<td width="356" valign="top">0.13um</td>
<td width="356" valign="top">0.18um</td>
</tr>
<tr>
<td width="356" valign="top">Package</td>
<td width="356" valign="top">48 LQFP (7*7 mm^2)</td>
<td width="356" valign="top">48 QFN  (7*7 mm^2)</td>
</tr>
<tr>
<td width="356" valign="top">IO Voltage / Core Voltage</td>
<td width="356" valign="top">3.3V / 1.2V </td>
<td width="356" valign="top">3.3V / 1.8V </td>
</tr>
<tr>
<td width="356" valign="top">Number of sockets</td>
<td width="356" valign="top">8 ea</td>
<td width="356" valign="top">8 ea</td>
</tr>
<tr>
<td rowspan="4">SPI Frame
<td width="356" valign="top">ADD1|ADD2|Control|Data0|Data1…</td>
<td width="356" valign="top">ADD1|ADD0|OP+LEN1|LEN0|Data…</td>
</tr>
<tr>
<td width="356" valign="top">8bit |8bit |8bit |8bit | 8bit</td>
<td width="356" valign="top">8bit |8bit |1bit +7bit |8bit | 8bit</td>
</tr>
<tr>
<td width="356" valign="top">Control 1 byte (Block selection, Read/Write selection, SPI mode selection)</td>
<td width="356" valign="top">OP Code 1 bit (Read/Write Selection)</td>
</tr>
<tr>
<td width="356" valign="top">No Data Length field</td>
<td width="356" valign="top">Data Length 15bit</td>
</tr>


<tr>
<td width="356" valign="top">Memory Access</td>
<td width="356" valign="top">TX Memory and RX Memory can be used for general data memory.</td>
<td width="356" valign="top">TX Memory can be used for general data memory.</td>
</tr>
<tr>
<td width="356" valign="top">MCU Bus Interface</td>
<td width="356" valign="top">SPI</td>
<td width="356" valign="top">SPI / 8bit parallel indirect bus mode</td>
</tr>

<tr>
<td width="356" valign="top">Regulator Related Circuit</td>
<td width="356" valign="top">LDO output pin needs the capacitor. No need to supply the chip power (1.2V).</td>
<td width="356" valign="top">LDO output voltage (1.8V) must be applied to the chip power (1.8V) at the outer side of the chip package.</td>
</tr>

<tr>
<td width="356" valign="top">PHY Power Down Setting</td>
<td width="356" valign="top">PHY's power down mode can be set by configuring PHY Register.</td>
<td width="356" valign="top">PHY's power down mode can be set by external pin.</td>
</tr>

<tr>
<td width="356" valign="top">WOL Function</td>
<td width="356" valign="top">WOL over UDP Support</td>
<td width="356" valign="top">WOL over Ethernet Support</td>
</tr>

<tr>
<td width="356" valign="top">PHY Mode Setting</td>
<td width="356" valign="top">PHY mode can be set by Firmware</td>
<td width="356" valign="top"></td>
</tr>

<tr>
<td width="356" valign="top">Status LED</td>
<td width="356" valign="top">4 LEDs (SPD / DUP / ACT / Link)</td>
<td width="356" valign="top">3 LEDs (SPD / DUP / Link)</td>
</tr>

<tr>
<td width="356" valign="top">PHY Auto MDIX Function</td>
<td width="356" valign="top">No Support</td>
<td width="356" valign="top">Support</td>
</tr>

<tr>
<td width="356" valign="top">Operating Current @100Mbps Full Link</td>
<td width="356" valign="top">Typical 132mA</td>
<td width="356" valign="top">Typical 160mA</td>
</tr>
</tbody>
</table>