---
id: network_exercise_1_tcp_loopback_eng
title: Network Exercise 1. TCP loopback(Eng)
date: 2020-04-08
---


## Content
# Network Exercise 1. Testing TCP loopback communication

## Outline

This is an exercise to test TCP loopback communication. The PC runs as a
TCP Client and the WIZwiki board runs as a TCP Server. The TCP server
returns the messages sent by the TCP client.

User can learn how to drive a network using the TOE (TCP/IP Offload
Engine) of W7500.

## What you need

  - WIZwiki-W7500
  - USB cable
  - LAN cable
  - Hub switch (Router with DHCP function)

## Hardware

### The Circuit

No special circuit.

### Connections

Connect the PC and the router (with DHCP function) with LAN cable.
Connect the router and the WIZwiki board with LAN cable. Connect the PC
and the WIZwiki board with USB cable.

![](/products/wizwiki_mbed_kit/kit_en/tcp_loopback_system_config_en.png)

## Software

### Test Software

  - Terminal program
      - EX) Teraterm, Hercules, Hyperterminal, etc.
      - It is for serial port message checking
      - Refer to the next link for the serial port example

<!-- end list -->

 
  * [Exercise 2. Data output using serial port]()


  - TCP/IP Client Server terminal program
      - EX) Hercules, etc.
      - It is for transmitting message using the TCP/IP Client Server
        terminal

### Example Code

Use the example code in the page below.

🌎<https://developer.mbed.org/teams/WIZnet/code/TCPEchoServer-WIZwiki-W7500/?platform=WIZwiki-W7500>

Click on the red part of the "Import this program" section in the figure
below.

![](/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_1.jpg)

A pop-up window will appear as shown below.
![](/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_2.jpg)

The "Source URL" and "Import As" have default values. User can change
the "Import Name" if one wants. If clicking on the red part of the
"Import", the program is copied to the mbed compiler environment.
### How to run and test result

Execute serial terminal in PC. First push Reset switch of WIZwiki board
and check messages.
![](/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_server1.jpg)

Execute Hercules program in PC. Select TCP Client menu and configure the
IP and Port. Click on the red part of the "Ping" button in the figure
below. ![](/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_client1.jpg)

Click the "Connect" button and check connection.
![](/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_client2.jpg)

The TCP Client sends a message to WIZwiki board and the WIZwiki board
sends a reversed message to the TCP client. Check the Loopback message
as shown below.

![](/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_client3.jpg)

![](/products/wizwiki_mbed_kit/kit_kr/ex_tcp_loop_server2.jpg)

## Learning Resources

The WIZnet team page in the ARM mbed provides mbed libraries and
examples for WIZnet products.

  - 🌎[WIZnet Team page](https://developer.mbed.org/teams/WIZnet/)

There are mbed libraries below which are used for Hardware TCP/IP chip
(W5500) and WIZnet TCP/IP Offload Engine (W7500).

  - 🌎[WIZnetInterface
    page](https://developer.mbed.org/teams/WIZnet/code/WIZnetInterface/)
    

## Related Links

  * [Starter Kit Tutorial]()
