"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||f[m]||l;return r?n.createElement(k,p(p({ref:t},i),{},{components:r})):n.createElement(k,p({ref:t},i))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var c=2;c<l;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"epsfc",description:"OpenBB SDK Function"},p="epsfc",o={unversionedId:"reference/stocks/fa/epsfc",id:"reference/stocks/fa/epsfc",title:"epsfc",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/stocks/fa/epsfc.md",sourceDirName:"reference/stocks/fa",slug:"/reference/stocks/fa/epsfc",permalink:"/sdk/reference/stocks/fa/epsfc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/fa/epsfc.md",tags:[],version:"current",frontMatter:{title:"epsfc",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"enterprise",permalink:"/sdk/reference/stocks/fa/enterprise"},next:{title:"est",permalink:"/sdk/reference/stocks/fa/est"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],i={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"epsfc"},"epsfc"),(0,a.kt)("p",null,"Takes the ticker, asks for seekingalphaID and gets eps estimates"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/seeking_alpha_model.py#L16"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"openbb.stocks.fa.epsfc(ticker: str)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"ticker of company"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"eps estimates for the next 10yrs")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\nopenbb.stocks.fa.epsfc("AAPL")\n')),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);