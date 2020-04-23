---
id: wizarduino_mega_wifi
title: WizArduino MEGA WIFI
date: 2020-04-03
---


## Content
# WizArduino MEGA WIFI

![](/document_framework/img/osh/wizarduino_mega_wifi/1st_1894_1.png)

-----

## Overview

WizArduino MEGA WIFI는 Arduino의 🌎[MEGA 2560
board](http://www.arduino.org/products/boards/arduino-mega-2560) 를 기반으로
[WizFi310]() 가 추가되어 Arduino UNO 플랫폼처럼 간단하면서도
IoT기능 구현을 위한 기본 기능을 가지고 있습니다.

![](/document_framework/img/osh/wizarduino_mega_wifi/mega2560_wizfi310_1.png)

**Arduino MEGA 2560과 WizFi310 이 합쳐진**

**경제적인 WizArduino MEGA WIFI와 함께**

**IoT, 홈 오토메이션, 로봇, 드론 등 메이커 프로젝트를 시작해 보세요.**

-----

## Features

### Hardware Features

  - Microcontroller : ATmega2560
  - Operating Voltage : 5V
  - Digital I/O Pins : 20 (of which 12 provide PWM output)
  - Analog Input Pins : 6
  - DC Current per I/O Pin : 20 mA
  - DC Current for 3.3V Pin : 50 mA
  - Flash Memory : 256 KB of which 8 KB used by bootloader
  - SRAM : 8 KB
  - EEPROM : 4 KB
  - Clock Speed : 16 MHz
  - PCB Size : 53 x 68.5mm

### WiFi Features

  - Single band 2.4GHz IEEE 802.11b/g/n
  - Serial Interface : UART
  - UART Max Baud : 921600 bps
  - Soft AP : Enough memory retention, Wi-Fi Security (WEP,
    WPA/WPA2PSK), L2 Switching
  - OTA(Over The Air F/W Upgrading)
  - 더 자세한 내용은 [WizFi310 WiKi page](WizFi310.md)를 참고 하세요.

### PinOut

![](/document_framework/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_pinout_170316.png)

-----
## Getting Started

### Basic

WizArduino MEGA WIFI는 Arduino 의 MEGA 2560 board와 호환 됩니다. Arduino IDE를 설치
하고, 보드를 연결 하세요. Select board 시 Arduino MEGA 2560를 선택 하세요.

자세한 내용은 아래 페이지를 참고 하세요.

🌎[Arduino
org](http://www.arduino.org/learning/tutorials/first-steps-with-arduino-ide) 

🌎[Arduino cc](https://www.arduino.cc/en/Guide/HomePage)  

![](/document_framework/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_jumper_cap_170320.png)

### WiFi

#### Hardware

WiFi 기능이용시 위 사진과 같이 보드 우측 상단에 위치한 2x2 Pin Header가 쇼트 되어 있어야 합니다.

| WiFi | MCU |
| ---- | --- |
| RX   | TX  |
| TX   | RX  |

#### Software

WizArduino MEGA WIFI내 WizFi310은 Main Chip(ATmega 2560)과 Serial로 연결되어
있습니다. 연결된 Serial 번호는 3번입니다. 아래와 같이 초기화 과정이 필요합니다.

    #include "WizFi310.h"
    void setup()
    {
        Serial3.begin(115200);
        WiFi.init(&Serial3);
    }

WiFi 이용 관련하여 더 자세한 내용은 **Examples/IoT** 단락을 참고해 주세요.

-----
## WiFi Library

WizArduino MEGA WIFI에서 WiFi 응용 프로그램을 하려면 WizFi310용 라이브러리를 사용해야 합니다.
GitHub와 아두이노 스케치에서 다운로드 및 설치 하는 방법에 대해서 아래를 참고 하기 바랍니다.

### GitHub

1.  Dwonload 🌎[WizFi310 Arduino
    Library](https://github.com/Wiznet/WizFi310_arduino_library)
    ![](/document_framework/img/osh/wizarduino_mega_wifi/github_1.png)
    ![](/document_framework/img/osh/wizarduino_mega_wifi/github_2.png)

2.  다운로드 받은 zip파일을 압축을 풀어서 해당 폴더를 **내문서/Arduino/Libraries**에 복사합니다. 
      - 압축을 풀면 하나의 폴더가 더 있습니다. 그 폴더를 복사 해야함을 주의 합니다.
      - \\WizFi310\_arduino\_library-master**WizFi310\_arduino\_library-master**

3.  sketch에서 아래 사진과 같이 WizFi310 예제가 나온다면 정상적으로 설치 된 것입니다.
    ![](/document_framework/img/osh/wizarduino_mega_wifi/github3.png)

### sketch

1.  메뉴탭의 스케치 - 라이브러리 포함하기 - **라이브러리
    관리**![](/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager1.png)
2.  검색란에서 **wizfi**
    검색![](/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager3.png)
3.  검색된 WizFi310 라이브러리
    **설치**![](/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager4.png)
    ![](/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager5.png)
    
4.  설치완료 및 예제
    확인![](/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager6.png)
    ![](/document_framework/img/osh/wizarduino_mega_wifi/wizfi310_library_manager7.png)

-----

## Examples

#### IoT

  - 🌎[ThingSpeak
    연동](http://wiznetian.com/article/wizarduino-wifi-thingspeak-%EC%97%B0%EB%8F%99%ED%95%98%EA%B3%A0-%EC%84%BC%EC%84%9C-%EA%B0%92%EC%9D%84-%EB%B3%B4%EB%82%B4%EA%B8%B0/)
  - 🌎[OpenWeatherMap
    연동](http://wiznetian.com/article/wizarduino-wifi%EB%A1%9C-openweathermap-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90%EC%84%9C-%EB%82%A0%EC%94%A8%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0/)
  - 🌎[Dweet.io
    연동](http://wiznetian.com/article/wizarduino-wifi-cloud%ec%97%90-%ec%84%bc%ec%84%9c-%ec%a0%95%eb%b3%b4-%ec%a0%80%ec%9e%a5%ed%95%98%ea%b8%b0-dweet-io/)
  - 🌎[CoAP
    통신](http://wiznetian.com/article/wizaruino-wifi-coap-%ed%86%b5%ec%8b%a0%ed%95%98%ea%b8%b0/)
  - 🌎[Ubidots
    연동](http://wiznetian.com/article/wizarduino-wifi-ubidots-%ed%81%b4%eb%9d%bc%ec%9a%b0%eb%93%9c-%ec%97%b0%eb%8f%99/)
  - 🌎[MQTT](http://wiznetian.com/article/wizarduino-wifimqtt-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0/)
  - You can find more examples at
    🌎[WizFi310\_arduino\_library/examples](https://github.com/Wiznet/WizFi310_arduino_library/tree/master/examples)

-----
## Maker Projects

  - Coming Soon

-----

## Technical Reference

### Schematic & Reference Design

  - ![schematic.pdf](/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_sch_170314.pdf)
  - ![reference
    design.zip](/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_design_170314.zip)

### Dimension

![](/document_framework/img/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_o_ver1.0_dimension_170315.png)

### Part List

  - ![Part
    List](/osh/wizarduino_mega_wifi/wizarduino_mega_wifi_ver1.0_pl_170320.pdf)  

-----

## FAQ

  - [WizArduino MEGA WIFI에 장착된 WizFi310과 다른 WiFi모듈과 차이점은
    뭔가요?](W5100S_(MKR-)Ethernet_Shield.md)
  - [WiFi 통신 거리는 어떻게 되나요?]()
  - [WizArduino WiFi에서 Software Serial 사용하는
    방법?]()

-----

## Where to Buy



![WIZnet Online Shop](/document_framework/img/osh/w5100s_ethernet_shield/start/buynow.png)  
![WIZnetKorea Online Shop,
Korea](/document_framework/img/osh/w5100s_ethernet_shield/start/won.png)



-----
