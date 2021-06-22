(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[81158],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(n),h=i,m=s["".concat(u,".").concat(h)]||s[h]||d[h]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},44996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(52263),i=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,p=void 0!==a&&a,u=o.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(p)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+c:c}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},68550:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=n(44996),p=["components"],u={id:"asg210_running_application",title:"Running Application",date:new Date("2021-06-03T00:00:00.000Z")},l=void 0,c={unversionedId:"Product/Azure-Sphere/asg210_running_application",id:"Product/Azure-Sphere/asg210_running_application",isDocsHomePage:!1,title:"Running Application",description:"This section describes how to run Dual-Ethernet Application on ASG210 (For the more details, please refer to Dual Ethernet Operating System Block Diagram. ASG210 Dual-Ethernet Application consists of High-level application and Real-time capable application.",source:"@site/docs/Product/Azure-Sphere/Running_application.md",sourceDirName:"Product/Azure-Sphere",slug:"/Product/Azure-Sphere/asg210_running_application",permalink:"/Product/Azure-Sphere/asg210_running_application",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Azure-Sphere/Running_application.md",version:"current",frontMatter:{id:"asg210_running_application",title:"Running Application",date:"2021-06-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/Product/Azure-Sphere/asg210_getting_started"},next:{title:"iMCU",permalink:"/Product/iMCU/imcu"}},d=[{value:"Step 1. Clone repository",id:"step-1-clone-repository",children:[]},{value:"Step 2. Network configuration",id:"step-2-network-configuration",children:[]},{value:"Step 3. Real-time Capable Application",id:"step-3-real-time-capable-application",children:[{value:"Set Local Network Information",id:"set-local-network-information",children:[]},{value:"Build and download",id:"build-and-download",children:[]}]},{value:"Step 4. Set High-Level application",id:"step-4-set-high-level-application",children:[{value:"Set up Azure IoT Hub for ASG210",id:"set-up-azure-iot-hub-for-asg210",children:[]},{value:"Set Azure Cloud Parameters",id:"set-azure-cloud-parameters",children:[]},{value:"Set Wi-Fi Information",id:"set-wi-fi-information",children:[]},{value:"Set up Public Ethernet interface",id:"set-up-public-ethernet-interface",children:[]},{value:"Build and download",id:"build-and-download-1",children:[]}]},{value:"Step 5. Check application operation",id:"step-5-check-application-operation",children:[{value:"Send data to ASG210 from Local Network",id:"send-data-to-asg210-from-local-network",children:[]},{value:"Check the data in Azure Cloud",id:"check-the-data-in-azure-cloud",children:[]},{value:"Auto Switch in ASG210 Network Interface",id:"auto-switch-in-asg210-network-interface",children:[]}]}],s={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section describes how to run Dual-Ethernet Application on ASG210 (For the more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"asg210_datasheet#dual-ethernet-operating-system-block-diagram"},"Dual Ethernet Operating System Block Diagram"),". ASG210 Dual-Ethernet Application consists of High-level application and Real-time capable application."),(0,o.kt)("h2",{id:"step-1-clone-repository"},"Step 1. Clone repository"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WIZnet-Azure-Sphere/ASG210_App"},"repository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone https://github.com/WIZnet-Azure-Sphere/ASG210_App\n")),(0,o.kt)("h2",{id:"step-2-network-configuration"},"Step 2. Network configuration"),(0,o.kt)("p",null,"This application sends local data to Azure cloud. User should configure ASG210 connection to Local network and Global network as shown below."),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/network_config.png"),width:"750"}),(0,o.kt)("h2",{id:"step-3-real-time-capable-application"},"Step 3. Real-time Capable Application"),(0,o.kt)("h3",{id:"set-local-network-information"},"Set Local Network Information"),(0,o.kt)("p",null,"To run Real-time capable application, user should set Local Network information. User can select static network and DHCP network."),(0,o.kt)("h4",{id:"set-up-static-network"},"Set up Static network"),(0,o.kt)("p",null,"User can set up static network in ASG210_RTApp code. Go to this directory in ASG210_App, ASG210_App/Software/ASG210_RTApp_W5500_SPI_BareMetal and open main.c. Enable ",(0,o.kt)("strong",{parentName:"p"},"#define NETINFO_USE_MANUAL")," and set local network information."),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/static_network.png"),width:"750"}),(0,o.kt)("h4",{id:"set-up-dhcp-network"},"Set up DHCP network"),(0,o.kt)("p",null,"User can set up DHCP network in ASG210_RTApp code. Go to this directory in ASG210_App, ASG210_App/Software/ASG210_RTApp_W5500_SPI_BareMetal and open main.c. Disable ",(0,o.kt)("strong",{parentName:"p"},"#define NETINFO_USE_MANUAL"),"."),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/dhcp_network.png"),width:"750"}),(0,o.kt)("h3",{id:"build-and-download"},"Build and download"),(0,o.kt)("p",null,"From the Select Startup Item menum on the tool bar, select GDB Debugger (RTCore). Click Build All on Build menu. Press F5 or Click Startup Item to start the RT application with debugging.\n(Please check Azure Sphere Development mode with Azure Sphere Developer Command Prompt.)"),(0,o.kt)("p",null,"Prepare Azure Sphere development mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"azsphere device enable-development\n")),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/rtapp_debugging.png"),width:"750"}),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/initiall_rtapp_serialdata.png"),width:"750"}),(0,o.kt)("h2",{id:"step-4-set-high-level-application"},"Step 4. Set High-Level application"),(0,o.kt)("h3",{id:"set-up-azure-iot-hub-for-asg210"},"Set up Azure IoT Hub for ASG210"),(0,o.kt)("p",null,"To run this application, user should set up user\u2019s own Azure IoT Hub service for ASG210. In this link, it describes how to create Azure IoT Hub and DPS service, then guides ASG210 authentication using DPS service."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure-sphere/app-development/setup-iot-hub"},"https://docs.microsoft.com/en-us/azure-sphere/app-development/setup-iot-hub")),(0,o.kt)("h3",{id:"set-azure-cloud-parameters"},"Set Azure Cloud Parameters"),(0,o.kt)("p",null,"To connect Azure Cloud, user must fullfil the parameters about Azure IoT Hub, DPS and Tenant ID on app_manifest.json in ASG210_HLApp."),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/cloud_parameters.png"),width:"750"}),(0,o.kt)("h4",{id:"azure-dps-scope-id"},"Azure DPS Scope ID"),(0,o.kt)("p",null,"Copy the ID Scope from Device Provisioning Service in Azure Portal."),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/scope_id.png"),width:"750"}),(0,o.kt)("h4",{id:"azure-iot-hub-endpoint-url"},"Azure IoT Hub endpoint URL"),(0,o.kt)("p",null,"Copy the IoT Hub endpoint URL from IoT Hun in Azure Portal."),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/iothub_endpoint.png"),width:"750"}),(0,o.kt)("h4",{id:"azure-sphere-tenant-id"},"Azure Sphere Tenant ID"),(0,o.kt)("p",null,"Copy the Azure Sphere Tenant ID from Azure Sphere Developer Command Prompt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"azsphere tenant show-selected\n")),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/tenant_id.png"),width:"750"}),(0,o.kt)("h3",{id:"set-wi-fi-information"},"Set Wi-Fi Information"),(0,o.kt)("p",null,"ASG210 supports auto switching between Public Ethernet and Wi-Fi. Public Ethernet interface has high priority. Please refer ",(0,o.kt)("a",{parentName:"p",href:"asg210_getting_started#configuration-wi-fi-network-settings"},"Configuration Wi-Fi Network Settings"),"."),(0,o.kt)("h3",{id:"set-up-public-ethernet-interface"},"Set up Public Ethernet interface"),(0,o.kt)("p",null,"To enable ethernet interface for public network and communication with Azure IoT, install ethernet imagepackage by deploying a board configuration image to ASG210. The board configuration image contains information that the Azure Sphere Security Service requires to add support for Ethernet to the Azure Sphere OS."),(0,o.kt)("p",null,"Follow these steps to enable public ethernet interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a board configuration image package")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"azsphere image-package pack-board-config \u2013-preset lan-enc28j60-isu0-int5 \u2013-output \n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Prepare ASG210 for development mode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"azsphere device enable-development\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Sideload a board configuration image package")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check the sideloaded imagepackage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"azsphere device image list-installed\n")),(0,o.kt)("h3",{id:"build-and-download-1"},"Build and download"),(0,o.kt)("p",null,"From the Select Startup Item menum on the tool bar, select GDB Debugger (HLCore). Click Build All on Build menu. Press F5 or Click Startup Item to start the HL application with debugging.\n(Please check Azure Sphere Development mode with Azure Sphere Developer Command Prompt.)"),(0,o.kt)("p",null,"Prepare Azure Sphere development mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"azsphere device enable-development\n")),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/start_hl_app.png"),width:"750"}),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/debugging_message.png"),width:"750"}),(0,o.kt)("h2",{id:"step-5-check-application-operation"},"Step 5. Check application operation"),(0,o.kt)("h3",{id:"send-data-to-asg210-from-local-network"},"Send data to ASG210 from Local Network"),(0,o.kt)("p",null,"Set user device network address range and connect to ASG210 network address in Local network with TCP Client. After connection between user device and ASG210, user device can send JSON format data to transmit it to Azure Cloud through ASG210. "),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/network_address.png"),width:"750"}),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/send_json.png"),width:"750"}),(0,o.kt)("h3",{id:"check-the-data-in-azure-cloud"},"Check the data in Azure Cloud"),(0,o.kt)("p",null,"ASG210 sends user device data to Azure Cloud. User can check the data sent from user device in Azure Cosmos DB or Storage. "),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/azure_cosmosdb.png"),width:"750"}),(0,o.kt)("h3",{id:"auto-switch-in-asg210-network-interface"},"Auto Switch in ASG210 Network Interface"),(0,o.kt)("p",null,"This application supports auto switching network interface to guarantee Azure Cloud connection. If Ethernet connection is not working anymore, ASG210 switches from Ethernet to Wi-Fi interface and re-connects to Azure Cloud. (Vice versa works as well.)"),(0,o.kt)("img",{src:(0,a.Z)("img/AzureSphere/running_app/autonetwork_switching.png"),width:"750"}))}h.isMDXComponent=!0}}]);