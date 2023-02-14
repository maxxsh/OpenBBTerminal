"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48417],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),h=a,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},53041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Forex",keywords:["forex","currency","money","hedge","dollar","euro","pound","currencies","market","openbb terminal"],description:"The Forex menu enables you to load any combination of currencies (e.g. USDEUR or JPYGBP), show current quote and historical data as well as forward rates. Furthermore, the menu has the ability to also apply Technical Analysis and Forecasting techniques."},i=void 0,l={unversionedId:"guides/intros/forex",id:"guides/intros/forex",title:"Forex",description:"The Forex menu enables you to load any combination of currencies (e.g. USDEUR or JPYGBP), show current quote and historical data as well as forward rates. Furthermore, the menu has the ability to also apply Technical Analysis and Forecasting techniques.",source:"@site/content/terminal/guides/intros/forex.md",sourceDirName:"guides/intros",slug:"/guides/intros/forex",permalink:"/terminal/guides/intros/forex",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/guides/intros/forex.md",tags:[],version:"current",frontMatter:{title:"Forex",keywords:["forex","currency","money","hedge","dollar","euro","pound","currencies","market","openbb terminal"],description:"The Forex menu enables you to load any combination of currencies (e.g. USDEUR or JPYGBP), show current quote and historical data as well as forward rates. Furthermore, the menu has the ability to also apply Technical Analysis and Forecasting techniques."},sidebar:"tutorialSidebar",previous:{title:"Forecast",permalink:"/terminal/guides/intros/forecast"},next:{title:"Futures",permalink:"/terminal/guides/intros/futures"}},s={},c=[{value:"How to use",id:"how-to-use",level:3},{value:"Examples",id:"examples",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Forex menu enables you to ",(0,a.kt)("a",{href:"/terminal/reference/forex/load",target:"_blank",rel:"noreferrer noopener"},"load")," any combination of currencies (e.g. USDEUR or JPYGBP), show current ",(0,a.kt)("a",{href:"/terminal/reference/forex/quote",target:"_blank",rel:"noreferrer noopener"},"quote")," and historical data (",(0,a.kt)("a",{href:"/terminal/reference/forex/candle",target:"_blank",rel:"noreferrer noopener"},"candle"),") as well as forward rates (",(0,a.kt)("a",{href:"/terminal/reference/forex/fwd",target:"_blank",rel:"noreferrer noopener"},"fwd"),"). Furthermore, the menu has the ability to also apply ",(0,a.kt)("a",{href:"/terminal/guides/intros/common/ta",target:"_blank",rel:"noreferrer noopener"},"Technical Analysis")," and ",(0,a.kt)("a",{href:"/terminal/guides/intros/forecast",target:"_blank",rel:"noreferrer noopener"},"Forecasting menu")," while also having an integration with ",(0,a.kt)("a",{href:"/terminal/reference#oanda",target:"_blank",rel:"noreferrer noopener"},"Oanda"),"."),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"The Forex menu is called upon by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"forex")," which opens the following menu:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176427424-084d3f87-f932-4b36-a651-a61475d6f9b5.png",alt:"Forex Menu"})),(0,a.kt)("p",null,"You have the ability to load any currency pair with ",(0,a.kt)("a",{href:"/terminal/reference/forex/load",target:"_blank",rel:"noreferrer noopener"},"load")," as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176427457-611077c5-6c9c-44f2-85e4-e7bbcb04d761.png",alt:"Load Currency Pair"})),(0,a.kt)("p",null,"When you do so, a lot of commands turn ",(0,a.kt)("span",{className:"text-blue-500"},"Blue"),". These can now be used to analyse the selected currency pair."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176427750-e7ed2d63-295c-46c9-b044-abaf56d64d95.png",alt:"Forex Menu with Currency Pair Loaded"})),(0,a.kt)("p",null,"For example, you are able to show the quote of the currency pair by using the ",(0,a.kt)("a",{href:"/terminal/reference/forex/quote",target:"_blank",rel:"noreferrer noopener"},"quote")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Jun 29, 07:04 (\ud83e\udd8b) /forex/ $ quote\n\n                     USD/EUR Quote\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503                    \u2503 Realtime Currency Exchange Rate \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 From_Currency Code \u2502 USD                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 To_Currency Code   \u2502 EUR                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Last Refreshed     \u2502 2022-06-29 11:08:00             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Exchange Rate      \u2502 0.94960000                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Bid Price          \u2502 0.94960000                      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Ask Price          \u2502 0.94960000                      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Or show the historical data on the currency pair with ",(0,a.kt)("a",{href:"/terminal/reference/forex/candle",target:"_blank",rel:"noreferrer noopener"},"candle")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Jun 29, 07:09 (\ud83e\udd8b) /forex/ $ candle\n")),(0,a.kt)("p",null,"Which returns the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176427844-7b99dc7d-5196-469d-af3a-538c7d7a8a59.png",alt:"Candle of USDEUR"})),(0,a.kt)("p",null,"Lastly, insights in the forward valuations can also be given with ",(0,a.kt)("a",{href:"/terminal/reference/forex/fwd",target:"_blank",rel:"noreferrer noopener"},"fwd"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Jun 29, 07:19 (\ud83e\udd8b) /forex/ $ fwd\n\n               Forward rates for USD/EUR\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Expirations   \u2503 Ask    \u2503 Bid    \u2503 Mid    \u2503 Points    \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 Overnight     \u2502 0.9499 \u2502 0.9498 \u2502 0.9499 \u2502 -0.5750   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Tomorrow Next \u2502 0.9499 \u2502 0.9498 \u2502 0.9498 \u2502 -0.7250   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Spot Next     \u2502 0.9497 \u2502 0.9496 \u2502 0.9497 \u2502 -2.3450   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 One Week      \u2502 0.9495 \u2502 0.9495 \u2502 0.9495 \u2502 -4.1550   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Two Weeks     \u2502 0.9491 \u2502 0.9491 \u2502 0.9491 \u2502 -8.2600   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Three Weeks   \u2502 0.9487 \u2502 0.9486 \u2502 0.9487 \u2502 -12.4150  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 One Month     \u2502 0.9481 \u2502 0.9480 \u2502 0.9480 \u2502 -18.8850  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Two Months    \u2502 0.9459 \u2502 0.9458 \u2502 0.9458 \u2502 -40.8200  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Three Months  \u2502 0.9436 \u2502 0.9435 \u2502 0.9436 \u2502 -63.4650  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Four Months   \u2502 0.9415 \u2502 0.9414 \u2502 0.9415 \u2502 -84.5500  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Five Months   \u2502 0.9394 \u2502 0.9392 \u2502 0.9393 \u2502 -106.2650 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Six Months    \u2502 0.9361 \u2502 0.9360 \u2502 0.9360 \u2502 -138.8800 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Seven Months  \u2502 0.9342 \u2502 0.9340 \u2502 0.9341 \u2502 -158.3750 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Eight Months  \u2502 0.9323 \u2502 0.9322 \u2502 0.9322 \u2502 -176.9850 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Nine Months   \u2502 0.9302 \u2502 0.9300 \u2502 0.9301 \u2502 -198.1200 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Ten Months    \u2502 0.9284 \u2502 0.9283 \u2502 0.9284 \u2502 -215.5000 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Eleven Months \u2502 0.9268 \u2502 0.9267 \u2502 0.9268 \u2502 -231.6250 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 One Year      \u2502 0.9252 \u2502 0.9250 \u2502 0.9251 \u2502 -248.6650 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 Two Years     \u2502 0.9111 \u2502 0.9106 \u2502 0.9109 \u2502 -390.6350 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"Furthermore, the ability exists to take the currency pair to the ",(0,a.kt)("a",{href:"/terminal/guides/intros/common/ta",target:"_blank",rel:"noreferrer noopener"},"Technical Analysis")," menu by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"ta"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176427913-ad960b1b-7a0d-4143-85d6-925e0d5797dd.png",alt:"Technical Analysis for Forex"})),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"First, let's start with looking at the currency pair USD and GBP. These are the U.S. Dollars and the Pound sterling. This is done by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," command as follows with the addition that the ",(0,a.kt)("inlineCode",{parentName:"p"},"-s")," command is used to change the start date:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Jun 29, 07:16 (\ud83e\udd8b) /forex/ $ load USDGBP -s 2015-01-01\nUSD-GBP loaded.\n")),(0,a.kt)("p",null,"Then, let's see how this currency pair has changed over the last years with ",(0,a.kt)("inlineCode",{parentName:"p"},"candle")," also adding in the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ma 60,120")," argument:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176427947-26346800-173b-4195-8a58-1add2a66ae31.png",alt:"Candle with Moving Averages"})),(0,a.kt)("p",null,"Now it's time to take this to the ",(0,a.kt)("a",{href:"/terminal/guides/intros/common/qa",target:"_blank",rel:"noreferrer noopener"},"Quantitative Analysis")," menu by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"qa"),". This returns the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176427981-4157b6ef-5fea-4c02-a7a1-d34400b7cbc1.png",alt:"Quantitative Analysis menu for Forex"})),(0,a.kt)("p",null,"Within this menu we can show some rolling statistics, for example show the rolling values for the mean and standard deviation of the currency pair:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176428039-4dcff70e-84e2-441d-9710-4d3f06af4175.png",alt:"Rolling Statistics for Forex"})),(0,a.kt)("p",null,"Lastly, more advanced techniques can also be applied regarding seasonality with ",(0,a.kt)("inlineCode",{parentName:"p"},"decompose"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Jun 29, 07:26 (\ud83e\udd8b) /forex/qa/ $ decompose\n\nTime-Series Level is 0.75\nStrength of Trend: 421.7107\nStrength of Seasonality: 0.0031\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/176428079-bdba5c17-5b3c-4e71-a92e-66aae2b787a1.png",alt:"Decompose Seasonality for Forex"})))}d.isMDXComponent=!0}}]);