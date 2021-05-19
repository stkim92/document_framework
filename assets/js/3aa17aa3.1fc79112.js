(self.webpackChunkwi_znet_documentation=self.webpackChunkwi_znet_documentation||[]).push([[9232],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=A(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,f=p["".concat(c,".").concat(d)]||p[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var A={};for(var c in t)hasOwnProperty.call(t,c)&&(A[c]=t[c]);A.originalType=e,A.mdxType="string"==typeof e?e:o,i[1]=A;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},21938:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return A},toc:function(){return c},default:function(){return s}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i={id:"twitter_test",title:"Twitter Test",date:new Date("2020-04-03T00:00:00.000Z")},A={unversionedId:"Product/Open-Source-Hardware/twitter_test",id:"Product/Open-Source-Hardware/twitter_test",isDocsHomePage:!1,title:"Twitter Test",description:"Before Compile",source:"@site/docs/Product/Open-Source-Hardware/test_twitter.md",sourceDirName:"Product/Open-Source-Hardware",slug:"/Product/Open-Source-Hardware/twitter_test",permalink:"/Product/Open-Source-Hardware/twitter_test",editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Open-Source-Hardware/test_twitter.md",version:"current",frontMatter:{id:"twitter_test",title:"Twitter Test",date:"2020-04-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Tiny Gecko",permalink:"/Product/Open-Source-Hardware/tinygecko"},next:{title:"Cookie",permalink:"/Product/Open-Source-Hardware/cookie"}},c=[{value:"Before Compile",id:"before-compile",children:[]},{value:"Change code &amp; Compile",id:"change-code--compile",children:[]},{value:"Result",id:"result",children:[]}],u={toc:c};function s(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"before-compile"},"Before Compile"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Before tweeting, get a token at ",(0,a.kt)("a",{parentName:"li",href:"http://arduino-tweet.appspot.com/"},"http://arduino-tweet.appspot.com/"),"\n. This library send a tweet via the site to avoid using up the\nmemory of Arduino by complex OAuth signature stuff.\n",(0,a.kt)("img",{src:r(85574).Z})),(0,a.kt)("li",{parentName:"ol"},"Then you can get the token-code.\n",(0,a.kt)("img",{src:r(46207).Z})),(0,a.kt)("li",{parentName:"ol"},'Update new "Ethernet" library for ioShield. please refer ',(0,a.kt)("a",{parentName:"li",href:"/osh/ioshield-a/updatelib"},"Update\nEthernet Library")),(0,a.kt)("li",{parentName:"ol"},'You can see an example sketch from "File -',">"," Examples -",">"," Ethernet\n-",">"," Twitter","_",'SimplePost".'),(0,a.kt)("li",{parentName:"ol"},"Done","~","~","."),(0,a.kt)("li",{parentName:"ol"},"original source from\n",(0,a.kt)("a",{parentName:"li",href:"http://playground.arduino.cc/Code/TwitterLibrary"},"http://playground.arduino.cc/Code/TwitterLibrary"))),(0,a.kt)("h2",{id:"change-code--compile"},"Change code & Compile"),(0,a.kt)("p",null,"You need to create an instance of Twitter class like below:"),(0,a.kt)("p",null,"in Twitter","_","SimplePost.ino.."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'// If you don\'t specify the IP address, DHCP is used(only in Arduino 1.0 or later).\n// fill in an available IP address on your network here,\nIPAddress ip(1,1,1,1);\nIPAddress gw(1,1,1,1);\nIPAddress snip(1,1,1,1);\nIPAddress dnsip(1,1,1,1);\n\n// Your Token to Tweet (get it from http://arduino-tweet.appspot.com/)\nTwitter twitter("YOUR-TOKEN-HERE"); // this was YourID:Password in 1.0.1\n')),(0,a.kt)("p",null,"You need also to refer ",(0,a.kt)("a",{parentName:"p",href:"http://arduino.cc/en/Reference/EthernetBegin"},"begin Ethernet\nlibrary"),"."),(0,a.kt)("p",null,"please refer the below image to change code.\n",(0,a.kt)("img",{src:r(71313).Z})),(0,a.kt)("p",null,"and compile, upload code on your Arduino Board."),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("p",null,"During the run the program, You can see the log message via Serial\nMonitor as follow: ",(0,a.kt)("img",{src:r(20614).Z})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"and, you can see the first message in your twitter timeline as follow:\n",(0,a.kt)("img",{src:r(68468).Z})))}s.isMDXComponent=!0},46207:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAe8AAABlCAYAAABk1WvHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAqQSURBVHhe7d2vTyPPH8fxN9//4DAFcQSLuARDUoKpQ2AohtZdAgJZCScQiANZieCSj2sxFHMChyGQYEhOYBtOQE3/Bb4zuzO7s+0uXSgcnfb5SHrsbrvb7Y/sa98zs72pbrf7LAAAwBv/M38BAIAnCG8AADxDeAMA4BnCGwAAzxDeAAB4JiO8b6U+PS3T03U1la5ztqXun5ats45ZMmY6Z7K1dSZj+uoAAB5LD+/OX/kTTBzIaj0tvm+lsd0KploPD8Hf8dKRsx/b0mpty49ROjnRJxQDTqoAAOMvPbwLG7Kzb6YPjqUvv26vVKyH9leWzNToua0P3zIwSicnnavfEp4yHcgV6Q0AEyuzz3upeiLlYKol241kUtxeRdEtI5vdt3VZVbvZ2m6MTZVaWFkzn8kIv+8AgA+XPWBNVd8/T8KoSFTfnTM5NtldPqnK6GfIH/k7Lh3X6jP51e1Kt1vz4H0HAHyU7PBWChs7qsbT4uo7broty9pKIZiKRH2y5tbTX57ajK0q5OloYJg7UK4jZ1vOtnL28+rnCB6vy+6A2vcFs8wdgDZgX9PZ/dvq6Uqwy+Nb4nUm+qqTryvX00b08/Q+t/Oa3Vvvhu0+MAgPALz3YniLqu9qF6bz+2BVBU08UE32d2TDzW4dwgvbJtgNtU4UIlEz9g8nfFQYhQvDgWHuQLnpBbFPFTqQ497U6nMrUYt+mtZvudKbGLSvqXRwrkZ9/ZEgFPuXt7YX4u09PJjn6n9dB6v5B5/d1vXzqJORH8mTneg8xXVwldyu3Qf7HgAAvDUgvJWlqkSt56txSCUHqpkQTmOa3Dt/w1gW+SZfewr2vAYPHluSFTvQLk15TVYKg/fVVZ6bU/8mg3v/4pc5cTGj0oOlKf78DUNWbcO8hSmGGHwWnezkEO3D299/AMBoGBzeUpCNn3bwmpUcMNU5O46CrXxyL13dL3sfD3j77ZZ65TnRcdjrW0qihNu6j04e8liq6T5h9/nLcnJvlv3aEHnNvmoPDaeyDrdVs6/9thFX0fsX4bbc/f32Vb17KYLHXpguiTew2y18VVGsOa9R3YLGkt73mf5yABgbOcJbcS8dU3oHqj08mAQrn8hP25ZeWJG1V4Rur/2LrvwKtlWQr2FCvfGytJZuMY68dl9bB7qh2ggqdzOtxK0J+3JRE9PvbZrF1fbvbcpHzeaafuxbXkdHoqeLLEktOPGI+/V1X3twAqNOVJxdBQCMkXzhnbAvO4nObkdWpelqPcjgK6fLupU3YqvpN2Velhf3Ve1jnLayf2Iq89a2LKT2i+u+bFudq3DWFW5GeL77CH1bUZvWg5bua1ch/mL3PQDAa/nCuxNfHqbK3+zwcfuMnSZl3SResOXzqFy69cK+unQLQG3DvWxuNeOHX0xopzRLxxV6//a1P7nekLgFwrI/URsMjLMhbgYYHqxmjYjn19kAwHe5wvu2YQdlleWk2h/dS9EoMeeyrGhQWO8PijiPSRu9/cFet6+xwsavsC9ZsSPm4x9N0XT1bV9XfEtWwG6LwpzMmZWH/hU3PVLePmfWYDxnJD+/zgYAfhsc3omqu+fyMGupFgVbr/0LU4kurahoHAF59jXDUs0OMlPBr6977xkL0C8M67jVwdVfSb9W+naNnv55d3Cb2yUBAPDPVLfbfTbTGfSPiuhBWLpZ+OVw0824C85FzEGTc2KF5CVXLvtY/YMjx3P3ZrDacIL9ediRbkpn+aB9zVxXX9e98CA77nsRLOu5ZEwPWHP6vVNfV7Deb1m7t5eeDaLfv2OZcx+f9tx6NHvKawYAjIcc4Q0AAEbJG0abAwCAz0R4AwDgGcIbAADPEN4AAHiG8AYAwDOENwAAniG8AQDwDOENAIBnCG8AADxDeAMA4BnCGwAAzxDeAAB4hvAGAMAzhDcAAJ4hvAEA8AzhDQCAZwhvAAA8Q3gDAOAZwhsAAM8Q3gAAeIbwBgDAM4Q3AACemep2u89m+k2mp6fNVOj5Odzc1NRU8Jd55jXmmdeYZ15jfvh5Km8AADzzbpW3PSMAAAAfa+jKW4c2wQ0AwL9DszkAAJ4ZOrx1x7ntTAcAAB+PyhsAAM/Q5w0AgGeovAEA8Ax93gAAeIbKGwAAz9DnDQCAZ6i8AQDwDH3eAAB4hsobAADP0OcNAIBnqLwBAPDMJ/Z538iRXrfSlCezJOlJmpVw2/p2dGMWR15a39wX3Y7Ukl7Z6z81K8669OcDwHsLj7MVafYcgG+O4mNvdj5krz8pPqHytqG8LHtmST/9mFk5X3+MmuVLbfshDl7/5uhSSmY9fbs+3JPl6EuQ5/mVw+tofQDAO3pqSu1cZNPMWjq4l+8a8miP3YtVme2v3DLXnySf0Oc9I5WmCdbrQ7Ms6alZk+ritQrZGbNEpFipqDW1wesXd3elaKa14veGbJ6ey2WQ3oPXBwB8FFVAqeRdr9dk0SwJPUn7TtVNNXusV8fukjpG7132tJxmrT9ZRrDP+0kuz0/lsOTG73tYlPn4XAAA8EbJrsWUpuubI+f+ZLdlWJzVxKnNXrY5L/NmUnv1+mPqE/u8s7SlfbqpPqymVKIPf8h+jXZbTnu+AAPtLX/AawMAv+ngnj1fj5q2n68XpTobB3QQ7Msi1/b+55K07QFcN3dXF+V6N604m5FK7VAdes3xXj22sryXqMRfXn+yjF7l/dSWO/Xn/FKkbj78x4YkvhyvcyNHy3fSqDtfgAFmKk3zpdO3a7MUACbdjfxXleTxtPhdGpt7chkcoM39j27XZVEqQZmsm7ursnid7NZMKO6qY25N2rOqcJptS00dg+OczrH+BPmEPu981r/HX46ZSt35cryGHlG+LHeN+hBNLHxNACAQFFenqpiyraL6NivVU5G7tiqXg/vTuyjtWKaXiuZwpLkdcFySS719M2Atz/qTZAT7vLMFX47c9KhyHdyPiYFvAIBhHDpN4vEtOM7qLkrzqKRwLJPbHRle8WNOBHRAPzWlvqe3bSvrouw+X8vhXl2aTznWnzCj1+c9U5L1zVP9HeizmHvEmQ7u8FIzghsA3snMvKqr7ySzjpqfl83U+52rfKKbCmb16MajmtbldOrYJDUf5EGO9SfMCFbeM1Ja31QnWO4AiJpUpSHfc30+YXD3XmqWn1r/yP1hgMk7owOAdEUpHepqNzkG6ebIzM9UpNZ3/40084w4Lpbk8LQqNfexN/9J9fRQ3v3iozHwCX3eOlxNs8fynoj6sGZN9W5bPvSAscfGnSyb5cHIxqbtAx+wfvBhq7+J5hV9s1+mQc+vzvBK7WiZbpoBAISKu+aHr6Jj5JRcluJBZPp+9/it+7DncxVSRdkNRydH2w1HrTNALc1Ut9sdarTZly9fzBQAAPgXRq/PGwAAvMir0eYAAOBT+rwBAMAwqLwBAPAMfd4AAHiGyhsAAM/Q5w0AgGeovAEA8Ax93gAAeIbKGwAAz9DnDQCAZ6i8AQDwDH3eAAB45t0q794QZ5555pm3mGee+fedp9kcAADPDP3/eQMAgH+LyhsAAM8Q3gAAeIbwBgDAM4Q3AACeIbwBAPAM4Q0AgGcIbwAAPEN4AwDgGcIbAADPEN4AAHiG8AYAwDOENwAAXhH5P8uP+tzLXAUlAAAAAElFTkSuQmCC"},20614:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cap_2013-08-19_15-08-00-229-8be1582c55f9129ff31ef092821708b1.png"},71313:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cap_2013-08-19_15-09-30-656-40fbf84236d974db5b340d7d398ebb63.png"},85574:function(e,t,r){"use strict";t.Z=r.p+"assets/images/tweet_library_for_arduino-7068a8f5d8981a06adf157877fd2a206.png"},68468:function(e,t,r){"use strict";t.Z=r.p+"assets/images/twitter-907a835cc6b2e804bcdf3d51ee6b0027.png"}}]);