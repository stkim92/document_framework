---
id: how_to_use_gcc_for_w7500_peripherals_examples
title: How to use GCC for W7500 Peripherals Examples
date: 2020-04-20
--- 

# How to use the makefile with windows7

******************************************************************************
(C) COPYRIGHT 2015 WIZnet

  * author  : IOP Team
  * version : V1.0.0
  * date    : 1-May-2015
  * brief   : Description use a makefile with windows7.
  * develop environment : Windows 7 32/64bits
  * arm-gcc version : gcc-arm-none-eabi-4_9-2015q1-20150306-win32

******************************************************************************

## Step1 gunwin32 Installation
<p><b><span style="color: rgb(255, 0, 0); font-size: 12pt;">※ For reference, gunwin32 operate both windows7 32bit and 64bit</span></b></p>

1.Enter a **gnuwin32** in web search engine or visit the <a href="http://gnuwin32.sourceforge.net/" title="http://gnuwin32.sourceforge.net/"> http://gnuwin32.sourceforge.net/</a>
![gnuwin32](/document_framework/img/products/w7500/documents/appnote/1_gnuwin32.jpg)

2.Click the packages in left category.
![gnuwin32](/document_framework/img/products/w7500/documents/appnote/2_gnuwin32.jpg)

3.Find the **Make** file using scroll and click, Click the **Setup program** in Download.
![gnuwin32](/document_framework/img/products/w7500/documents/appnote/3_gnuwin32.jpg)

4.When download time left as '0', you get the **setup file**.
![gnuwin32](/document_framework/img/products/w7500/documents/appnote/4_gnuwin32.jpg)

5.Finish the setup,copy the program setup path(you reach until **make.exe**)

![gnuwin32](/document_framework/img/products/w7500/documents/appnote/5_gnuwin32.jpg)

6.In my case,the setup path is **C:\Program Files\GnuWin32\bin**

![gnuwin32](/document_framework/img/products/w7500/documents/appnote/6_gnuwin32.jpg)


7.**Computer** &gt; **click the right of mouse**  &gt;  **properties** &gt;  **Advanced** &gt; **Environment Variables** &gt; **System variables** &gt;  **Edit**&gt;  ** variable value** Copy and Paste.

![gnuwin32](/document_framework/img/products/w7500/documents/appnote/7_gnuwin32.jpg)

* * *

## Step2 arm gcc Installation

1.You can download the setup file from the ["https://launchpad.net/gcc-arm-embedded/+download"](https://launchpad.net/gcc-arm-embedded/+download)
(main post of <strong>2015.04.16</strong>)

![armgcc](/document_framework/img/products/w7500/documents/appnote/1_armgcc.jpg)
2.Download the **[gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe](https://launchpad.net/gcc-arm-embedded/4.9/4.9-2015-q1-update/+download/gcc-arm-none-eabi-4_9-2015q1-20150306-win32.exe)** because I use the Windows7 32bit.


3.After choice the Language selection, click the **'OK'**

![armgcc](/document_framework/img/products/w7500/documents/appnote/2_armgcc.jpg)

4.The installation path setup and click the **'NEXT'**, click the **'NEXT'** again.

![armgcc](/document_framework/img/products/w7500/documents/appnote/4_armgcc.jpg)

5.Finally,Check the box "**Add path to environment variale**" and click the **'Finish'**
(If you check the box, It will automatically set the environment variable.)

![armgcc](/document_framework/img/products/w7500/documents/appnote/5_armgcc.jpg)

6.The command window will be opened,you can know the arm gcc setup path it. 

![make](/document_framework/img/products/w7500/documents/appnote/6_make.jpg)

7.Confirm the version of arm gcc using the command of below.
> arm-none-eabi-gcc --version

![make](/document_framework/img/products/w7500/documents/appnote/7_make.jpg)
* * *
## Step3  execute the makefile

1.You set the path, you want to compile gcc compile. and enter the **make**
>**make** 

![make](/document_framework/img/products/w7500/documents/appnote/8_make.jpg)

2.You can see the compile as below.
![make](/document_framework/img/products/w7500/documents/appnote/9_make.jpg)


3.If success, the files will create. The path of make file is a place the makefile.

![make](/document_framework/img/products/w7500/documents/appnote/10_make.jpg)

- - -
# When compile error occur
<p>&nbsp;<b><span style="color: rgb(255, 0, 0); font-size: 11pt;">If you can't compile</span></b> or <b><span style="color: rgb(255, 0, 0); font-size: 11pt;"> you don't create the files</span></b>,you directly set the environment variable </p>

>**Computer** &gt; **click the right of mouse**  &gt;  **properties** &gt;  **Advanced** &gt; **Environment Variables** &gt; **System variables** &gt;  **Edit**&gt;  **variable value** Copy and Paste.
>
>Copy path is **c:\Program Files\GNU Tools ARM Embedded\4.9 2015q1\bin** : setup path

![gnuwin32](/document_framework/img/products/w7500/documents/appnote/7_gnuwin32.jpg)