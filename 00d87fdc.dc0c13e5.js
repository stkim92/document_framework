(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(9),o=(r(0),r(626)),c={id:"make_new_projects",title:"Make New Projects",date:new Date("2020-04-07T00:00:00.000Z")},i={id:"Product/iEthernet/W5500/W5500-EVB/make_new_projects",title:"Make New Projects",description:"## Content",source:"@site/docs/Product/iEthernet/W5500/W5500-EVB/Make_New_Projects.md",permalink:"/document_framework/docs/Product/iEthernet/W5500/W5500-EVB/make_new_projects",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Product/iEthernet/W5500/W5500-EVB/Make_New_Projects.md",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/document_framework/docs/Product/iEthernet/W5500/W5500-EVB/getting_started"},next:{title:"S2E Module",permalink:"/document_framework/docs/Product/S2E-Module/s2e_module"}},p=[{value:"Content",id:"content",children:[]},{value:"Make a new W5500 EVB project with LPCXpresso IDE",id:"make-a-new-w5500-evb-project-with-lpcxpresso-ide",children:[{value:"0. download and install Dev. enviroment &amp; compiler",id:"0-download-and-install-dev-enviroment--compiler",children:[]},{value:"1. Select &#39;New project&#39; and project type",id:"1-select-new-project-and-project-type",children:[]},{value:"2. Import libraries to LPCXpresso IDE workspace",id:"2-import-libraries-to-lpcxpresso-ide-workspace",children:[]},{value:"3. Select Chip and Board libraries",id:"3-select-chip-and-board-libraries",children:[]},{value:"4. Create a &#39;new project&#39;",id:"4-create-a-new-project",children:[]},{value:"5. Link the ioLibrary to your project",id:"5-link-the-iolibrary-to-your-project",children:[]},{value:"6. Set the library type for serial debugging",id:"6-set-the-library-type-for-serial-debugging",children:[]},{value:"7. Change the C/C++ build commands for generate firmware image",id:"7-change-the-cc-build-commands-for-generate-firmware-image",children:[]},{value:"8. Complete settings",id:"8-complete-settings",children:[]}]}],l={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"content"},"Content"),Object(o.b)("h1",{id:"make-new-w5500-evb-projects"},"Make New W5500 EVB Projects"),Object(o.b)("p",null,"This page introduce that how to make project for W5500 EVB with\ndifferent IDEs like NXP LPCXpresso."),Object(o.b)("h2",{id:"make-a-new-w5500-evb-project-with-lpcxpresso-ide"},"Make a new W5500 EVB project with LPCXpresso IDE"),Object(o.b)("h3",{id:"0-download-and-install-dev-enviroment--compiler"},"0. download and install Dev. enviroment & compiler"),Object(o.b)("p",null,"NXP provide a free (also commercial version available) Dev. Enviroment\nincl. IDE and C compiler. The free version compiler is limited to 8k\ncode but can be extended to 256k of code by a free registration."),Object(o.b)("p",null,"Download the IDE + compiler here:",Object(o.b)("br",{parentName:"p"}),"\n","\ud83c\udf0e",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.lpcware.com/lpcxpresso/download"}),"http://www.lpcware.com/lpcxpresso/download"),Object(o.b)("br",{parentName:"p"}),"\n","Parallel to the download & install you register here:",Object(o.b)("br",{parentName:"p"}),"\n","\ud83c\udf0e",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.lpcware.com/user/register"}),"http://www.lpcware.com/user/register"),"\nIn the LPCXresso IDE you can go to:",Object(o.b)("br",{parentName:"p"}),"\n","'Help' -",">"," 'Create serial number and register (Free Edition)...'",Object(o.b)("br",{parentName:"p"}),"\n","here, copy that serial number."),Object(o.b)("p",null,"Then, logged in at \ud83c\udf0e",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.lpcware.com"}),"http://www.lpcware.com")," , you can create the\nactivation code using that 'serial number':\n\ud83c\udf0e",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.lpcware.com/lpcxpresso/activate"}),"http://www.lpcware.com/lpcxpresso/activate"),Object(o.b)("br",{parentName:"p"}),"\n","copy the activation code here, and go to:",Object(o.b)("br",{parentName:"p"}),"\n","'Help' -",">"," 'Activate (Free Edition)...'",Object(o.b)("br",{parentName:"p"}),"\n","enter (paste) the activation code and now you can create projects of\n256k size."),Object(o.b)("p",null,"Now, after a restart, your LPCXress IDE is running and you can create\nnew and your own projects for the NXP MCUs."),Object(o.b)("h3",{id:"1-select-new-project-and-project-type"},"1. Select 'New project' and project type"),Object(o.b)("p",null,"QuickStart panel (Located in the lower left in LPCXpresso IDE as\ndefault) -",">"," Select 'New project'  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MCU category and Project type selection -",">"," Select 'LPC11Exx' and\n'LPCOpen - C Project'"),Object(o.b)("li",{parentName:"ul"},"Target MCU selection -",">"," Select 'LPC11E36/501'")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_quickstart_box.jpg",alt:null}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_newproject_box.jpg",alt:null}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_select_mcu_box.jpg",alt:null}))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"2-import-libraries-to-lpcxpresso-ide-workspace"},"2. Import libraries to LPCXpresso IDE workspace"),Object(o.b)("p",null,"You should import provided library projects to your new project for easy\nto configure and utilize MCU APIs. This is the required library\ncomponents for new projects as follows.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"LPCOpen Chip Library - lpc","_","chip","_","11exx"),Object(o.b)("li",{parentName:"ul"},"LPCOpen Board Library (W5500 EVB Board Library) -\nwiznet","_","evb","_","w5500evb","_","board"),Object(o.b)("li",{parentName:"ul"},"WIZnet ioLibrary - ioLibrary")),Object(o.b)("p",null,"Download the libraries and projects for W5500 EVB from\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/icons/link.png",alt:null})),Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Wiznet/W5500_EVB"}),"WIZnet GitHub\nrepository"),". After downloading,\nimport the required project libraries to your workspace."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_select_libs_box1.jpg",alt:null}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_import_lib_box.jpg",alt:null}))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"3-select-chip-and-board-libraries"},"3. Select Chip and Board libraries"),Object(o.b)("p",null,"W5500 EVB projects based on libraries as below. Select the LPCOpen Chip\nand Board Library and add on your project."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"LPCOpen Chip Library - lpc","_","chip","_","11exx"),Object(o.b)("li",{parentName:"ul"},"LPCOpen Board Library - wiznet","_","evb","_","w5500evb","_","board")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_select_libs_box2.jpg",alt:null}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_lib_chip_box.jpg",alt:null}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_lib_board_box.jpg",alt:null}))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"4-create-a-new-project"},"4. Create a 'new project'"),Object(o.b)("p",null,"Set the remaining options for your environment and press the finish\nbutton, the 'new project' is created.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_project_explorer_box.jpg",alt:null}))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"5-link-the-iolibrary-to-your-project"},"5","."," Link the ioLibrary to your project"),Object(o.b)("p",null,"The LPCXpresso IDE provides 'Smart Update' function. it also provides a\nsimple mechanism for creating the links to a static library project from\nan application project. For more details, please refer to\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.lpcware.com/content/faq/lpcxpresso/creating-linking-library-projects"}),"NXP FAQ page for 'Linking\nto library\nprojects'")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_smart_update.jpg",alt:null}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_smart_update_select_box.jpg",alt:null}))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"6-set-the-library-type-for-serial-debugging"},"6. Set the library type for serial debugging"),Object(o.b)("p",null,"If the 'printf()' / 'scanf()' functions to use a UART, user can\nretargeting to Redlib's printf() as follows. For more details, please\nrefer to ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/icons/link.png",alt:null}))," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.lpcware.com/content/faq/lpcxpresso/using-printf"}),"NXP FAQ page for\n'Using\nprintf()'")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_set_the_library_type_box.jpg",alt:null}))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"7-change-the-cc-build-commands-for-generate-firmware-image"},"7. Change the C/C++ build commands for generate firmware image"),Object(o.b)("p",null,"Build command changes in project properties for generate 'BIN' and 'HEX'\nfiles.",Object(o.b)("br",{parentName:"p"}),"\n","The following changes to the 'build commands'."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-make"}),'arm-none-eabi-size "${BuildArtifactFileName}"\narm-none-eabi-objcopy -O ihex "${BuildArtifactFileName}" "${BuildArtifactFileBaseName}.hex"\narm-none-eabi-objcopy -O binary "${BuildArtifactFileName}" "${BuildArtifactFileBaseName}.bin"\nchecksum -p ${TargetChip} -d "${BuildArtifactFileBaseName}.bin"\n')),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_properties.jpg",alt:null}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/figures/make_new_project_properties_post-build_command_box.jpg",alt:null}))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"8-complete-settings"},"8. Complete settings"),Object(o.b)("p",null,"From now on, you can make your own application project based on newly\ncreated project for W5500 EVB","!",Object(o.b)("br",{parentName:"p"}),"\n","Please refer to ",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/document_framework/img/products/w5500/w5500_evb/icons/download.png",alt:null}))," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.nxp.com/documents/other/LPCXpresso_Getting_Started_User_Guide.pdf"}),"NXP\nLPCXpresso Getting started user\nguide"),"\nfor more details."),Object(o.b)("hr",null))}b.isMDXComponent=!0},626:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return r?a.a.createElement(d,i({ref:t},l,{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);