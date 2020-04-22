---
id: documents
title: Documents
date: 2020-03-
---


## Content

# Documents
The **DataSheet** provides the ordering information and mechanical device characteristics of the W7500/W7500P microcontrollers.  
The **Reference Manual** provides the register map of peripherals and brief description.  
The **PHY Reference** provides the How to Access W7500x PHY Register and description of W7500P Internal PHY.  
The **Errata Sheet** describes error Phenomenon and solution .  
The **Getting Started** user's guide describes the installation of MDK,How to make KEIL new project for W7500, How to use MDK for W7500 Peripherals Examples, How to use GCC for W7500 Peripherals Examples and How to use ISP tool from starting a project to using the ISP tool.

-------------------
\<WRAP group\>

\<WRAP half column\>

### Data Sheet

``` 
  * [[https://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:w7500x_ds_v110.pdf|W7500x Datasheet v1.1.0 - English]]
```

\</WRAP\>

\<WRAP half column\>

| Version | Date      | Decription                                           |
| ------- | --------- | ---------------------------------------------------- |
| V 1.1.0 | 20DEC2019 | Fixed 3.17 UART speed to 460.8 Kbit/s from 3 Mbit/s. |

\</WRAP\> \</WRAP\> \<WRAP group\>

\<WRAP half column\> \<wrap classes \#id width :language\> \</wrap\>
\</WRAP\>

\++++ Old Datasheet History |

| Version | Date      | Decription                                                                                                               |
| ------- | --------- | ------------------------------------------------------------------------------------------------------------------------ |
| V 1.0.0 | 18SEP2017 | Initial Release                                                                                                          |
| V 1.0.1 | 26OCT2017 | Fixed value Driving Strength condition in PADCON.                                                                        |
| V 1.0.2 | 09NOV2017 | Fixed Typo I/O Pad Characteristics VOL description (high -\> low)                                                        |
| V 1.0.3 | 30NOV2017 | Fixed figure 8. (W7500P Pin out)                                                                                         |
| V 1.0.4 | 18DEC2017 | Add Reset & PLL characteristics.                                                                                         |
| V 1.0.5 | 30JAN2018 | 1\. Fixed figure 8 (W7500P Pin layout) / Added subhead (4.2.1 W7500, 4.2.2 W7500P) / Fixed table 8(modified Symbol name) |
| :::     | :::       | 2\. Modified SRAM description (2. Description)                                                                           |
| V 1.0.6 | 05FEB2018 | Add info about W7500P power consumption.(Current Characteristics)                                                        |
| V 1.0.7 | 27JUL2018 | Fixed figure 2. CRG Diagram (Input Information of WDOGCLK, TIMCLK0,TIMCLK1).                                             |
| V 1.0.8 | 17OCT2018 | Fixed Power Supply description                                                                                           |
| V 1.0.9 | 11NOV2019 | Fixed Power Supply description                                                                                           |

\++++ \</WRAP\>

-------------------
\<WRAP group\>

\<WRAP half column\>

### Reference Manual

  - [W7500x Reference Manual v1.1.2 -
    English](https://wizwiki.net/wiki/lib/exe/fetch.php?media=:products:w7500:w7500x_rm_v112_20181017_.pdf)

\</WRAP\>

\<WRAP half column\>

| Version | Date      | Decription                    |
| ------- | --------- | ----------------------------- |
| V 1.1.2 | 17OCT2018 | Edit Power supply description |

\</WRAP\>\</WRAP\>

\<WRAP group\>

\<WRAP half column\> \<wrap classes \#id width :language\> \</wrap\>
\</WRAP\> ++++ Old Reference Manual History |

| Version | Date      | Decription                                                                   |
| ------- | --------- | ---------------------------------------------------------------------------- |
| V 1.0.0 | 18SEP2017 | Initial Release                                                              |
| V 1.0.1 | 12OCT2017 | Edit Flash Chapter.                                                          |
| V 1.0.2 | 26OCT2017 | Edit GPIO,PADCON Register and added Open Drain function                      |
| V 1.0.3 | 27OCT2017 | TCKCNTR, RTR, Sn\_RTR, Sn\_KATMR Additional description added.               |
| V 1.0.4 | 09NOV2017 | Edit PADCON register description CS,DS inverted value.                       |
| V 1.0.5 | 17NOV2017 | Edit UARTCR register description about UARTEN.                               |
| V 1.0.6 | 29NOV2017 | Edit WZTOE Sn\_KATMR description about timer trigger.                        |
| V 1.0.7 | 26JAN2018 | Edit typo about PWM preodic mode                                             |
| V 1.0.8 | 12FAB2018 | Edit Base Address about RTC (4000\_4000 -\> 4000\_E000)                      |
| V 1.0.9 | 05MAR2018 | Edit UART2 description & register map.                                       |
| V 1.1.0 | 11APR2018 | Edit Systick description & PADCON register table fix                         |
| :::     | :::       | Edit Register Table about SSP0, SSP1 (Add FRF)                               |
| :::     | :::       | Edit DSS about SSP0, SSP1                                                    |
| :::     | :::       | Edit Register map about SSP0, SSP1 (Add FRF)                                 |
| V 1.1.1 | 27JUL2018 | Fixed figure 4. CRG Diagram (Input Information of WDOGCLK, TIMCLK0,TIMCLK1). |
| :::     | :::       | Flash memory lock function Additional description added (11.1)               |

\++++ \</WRAP\>

-------------------
\<WRAP group\>

\<WRAP half column\>

### PHY Reference

  - [How to Access W7500x PHY Register -
    English](https://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500p:ref_sch:how_to_access_phy_application_note_v100.pdf)
  - [W7500P Internal PHY Datasheet -
    English](http://www.bdtic.com/DataSheet/ICplus/IP101G_DS_R01_20121224.pdf)

\</WRAP\>

\<WRAP half column\> How to Access W7500x PHY Register

| Version | Date     | Decription      |
| ------- | -------- | --------------- |
| V1.0.0  | 7AUG2018 | Initial Release |

W7500P Internal PHY Datasheet

| Version | Date     | Decription      |
| ------- | -------- | --------------- |
| V1.0.0  | 7AUG2018 | Initial Release |

\</WRAP\> \</WRAP\>

-----

\<WRAP group\>

\<WRAP half column\>

### Errata Sheet

``` 
 *[[https://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:w7500x_erratasheet_v120e.pdf|W7500x Erratasheet v1.2.0 - English]]
 *[[https://wizwiki.net/wiki/lib/exe/fetch.php?media=products:w7500:w7500x_erratasheet_v120k.pdf|W7500x Erratasheet v1.2.0 - Korean]]
```

\</WRAP\>

\<WRAP half column\>

| Version | Date      | Decription                            |
| ------- | --------- | ------------------------------------- |
| V1.2.0  | 13MAR2019 | Erratum 3 – IAP Function Call Failure |
| :::     | :::       | Erratum 4 – Two Image Banks Failure   |
| :::     | :::       | Erratum 5 – Cold Booting Failure      |

\</WRAP\> \</WRAP\> \<WRAP group\>

\<WRAP half column\>

\<wrap classes \#id width :language\> \</wrap\>

\</WRAP\> ++++ Old Errata Sheet Histroy |

| Version | Date      | Decription                                 |
| ------- | --------- | ------------------------------------------ |
| V1.0.0  | 11JUL2016 | erratum 1 – W7500x I2C                     |
| V1.0.2  | 8DEC2016  | Correct SCL speed                          |
| V1.0.3  | 18JUN2018 | erratum 2 – W7500P Transmission Delay Case |

\++++

\</WRAP\>

-----

\<WRAP group\>

\<WRAP half column\>

### Limitation Note ARP problem in the NLB environment

``` 
 * [[https://wizwiki.net/wiki/lib/exe/fetch.php?media=design_guide:limitation_note_-_arp_problem_in_the_nlb_environment_-_english_0312_.pdf|Limitation Note
```

ARP problem in the NLB environment V1.0\]\] \</WRAP\>

| Version | Date    | Decription       |
| ------- | ------- | ---------------- |
| V 1.0   | 12MAR18 | Initial Document |

\</WRAP\>

-----

\<WRAP group\>

## Getting Started

\<WRAP half column\>

  - [How to install
    KEIL](/products/w7500/documents/appnote/install_uvision)

\</WRAP\>

  - [How to make KEIL new project for
    W7500](/products/w7500/documents/appnote/howtokeil)

\</WRAP\>

-----

\<WRAP group\> \<WRAP half column\>

``` 
 * [[products:w7500:documents:appnote:keil_exam|How to use MDK for W7500 Peripherals Examples]]
```

\</WRAP\>

``` 
 * [[products:w7500:documents:appnote:gcc|How to use GCC for W7500 Peripherals Examples]]
```

\</WRAP\>

-----

\<WRAP group\> \<WRAP half column\>

``` 
 * [[products:w7500:documents:appnote:isptool|How to use ISP tool]]
```

\</WRAP\>


\</WRAP\>
