"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},87406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"active",description:"OpenBB Terminal Function"},i="active",c={unversionedId:"reference/crypto/dd/active",id:"reference/crypto/dd/active",title:"active",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/crypto/dd/active.md",sourceDirName:"reference/crypto/dd",slug:"/reference/crypto/dd/active",permalink:"/terminal/reference/crypto/dd/active",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/active.md",tags:[],version:"current",frontMatter:{title:"active",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"candle",permalink:"/terminal/reference/crypto/candle"},next:{title:"ath",permalink:"/terminal/reference/crypto/dd/ath"}},o={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"active"},"active"),(0,a.kt)("p",null,"Display active blockchain addresses over time ","[Source: https://glassnode.org]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"active [-i {24h,1w,1month}] [-s SINCE] [-u UNTIL]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"interval"),(0,a.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Frequency interval. Default: 24h"),(0,a.kt)("td",{parentName:"tr",align:null},"24h"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"24h, 1w, 1month")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"since"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --since"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial date. Default: 1 year ago"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-02-14"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"until"),(0,a.kt)("td",{parentName:"tr",align:null},"-u  --until"),(0,a.kt)("td",{parentName:"tr",align:null},"Final date. Default: Today"),(0,a.kt)("td",{parentName:"tr",align:null},"2023-02-14"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154058739-e30fed47-c86f-4aef-a699-1bc69180c607.png",alt:"active"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);