
## Using CMSIS-DAP Debugger

CMSIS-DAP does support USB cable and Debugger as well. You need to [Set Flash Algorithm](set_flash_algorithm.md) to use CMSIS-DAP Debugger in Keil.  

### To Follow

1. Click 'Flash' in top menu and open 'Configure Flash Tools'. Set 'Debug' on top menu with choosing 'CMSIS-DAP Debugger'. 
![](/document_framework/img/products/wizwiki_w7500/cmsis_debug_1.jpg)

2. Click 'Utilities' and choose 'CMSIS-DAP Debugger'. Open 'Settings' menu and unchecked 'SWJ' in Debug menu. Then confirm 'ARM CoreSight SW-DP' set on SW Device. 
![](/document_framework/img/products/wizwiki_w7500/cmsis_debug_2-1.jpg)

3. Next to the Debug menu bar, Click 'Flash Download' and set 'Erase Full Chip' in Download Function, '0x20000000 to 0x4000' in RAM for Algorithm, Add 'W7500_128KB_FLASH' on Programming Algorithm. After checking it with below figure, click 'OK'. 
![](/document_framework/img/products/wizwiki_w7500/cmsis_debug_3-1.jpg)  

4. Download the firmware into WIZwiki-W7500. You can check complete message and the CMSIS-DAP Debugger at the bottom. Chick the 'Debug icon' or **Ctrl+F5** to debug. 
![](/document_framework/img/products/wizwiki_w7500/cmsis_debug_4.jpg)
