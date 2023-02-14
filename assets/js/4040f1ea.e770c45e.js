"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88275],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),i=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(t),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<s;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const s={title:"cnews",description:"OpenBB Terminal Function"},o="cnews",c={unversionedId:"reference/stocks/disc/cnews",id:"reference/stocks/disc/cnews",title:"cnews",description:"OpenBB Terminal Function",source:"@site/content/terminal/reference/stocks/disc/cnews.md",sourceDirName:"reference/stocks/disc",slug:"/reference/stocks/disc/cnews",permalink:"/terminal/reference/stocks/disc/cnews",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/disc/cnews.md",tags:[],version:"current",frontMatter:{title:"cnews",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"asc",permalink:"/terminal/reference/stocks/disc/asc"},next:{title:"divcal",permalink:"/terminal/reference/stocks/disc/divcal"}},l={},i=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:i},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cnews"},"cnews"),(0,r.kt)("p",null,"Customized news. ","[Source: Seeking Alpha]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"cnews [-t {top-news,on-the-move,market-pulse,notable-calls,buybacks,commodities,crypto,issuance,global,guidance,ipos,spacs,politics,m-a,consumer,energy,financials,healthcare,mlps,reits,technology}] [-l LIMIT]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"s_type"),(0,r.kt)("td",{parentName:"tr",align:null},"-t  --type"),(0,r.kt)("td",{parentName:"tr",align:null},"number of news to display"),(0,r.kt)("td",{parentName:"tr",align:null},"Top-News"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"top-news, on-the-move, market-pulse, notable-calls, buybacks, commodities, crypto, issuance, global, guidance, ipos, spacs, politics, m-a, consumer, energy, financials, healthcare, mlps, reits, technology")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"-l  --limit"),(0,r.kt)("td",{parentName:"tr",align:null},"limit of news to display"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 03:52 (\ud83e\udd8b) /stocks/disc/ $ cnews\n2022-02-15 19:04:21 - 3800509 - ViacomCBS earnings call: A flood of content feeding transformation to Paramount\nhttps://seekingalpha.com/news/3800509-viacomcbs-earnings-call-a-flood-of-content-feeding-transformation-to-paramount\n\n2022-02-15 16:26:46 - 3800415 - ViacomCBS rebranding company as Paramount Global\nhttps://seekingalpha.com/news/3800415-viacomcbs-rebranding-company-as-paramount-global\n\n2022-02-15 16:25:33 - 3800411 - Airbnb stock soars after guidance comes in strong\nhttps://seekingalpha.com/news/3800411-airbnb-stock-soars-after-guidance-comes-in-strong\n\n2022-02-15 16:25:05 - 3800410 - ViacomCBS rebranding company as Paramount Global\nhttps://seekingalpha.com/news/3800410-viacomcbs-rebranding-company-as-paramount-global\n\n2022-02-15 16:14:45 - 3800380 - ViacomCBS dips as profits dip despite revenue beat, streaming gains\nhttps://seekingalpha.com/news/3800380-viacomcbs-dips-as-profits-dip-despite-revenue-beat-streaming-gains\n\n2022-02-15 16:14:20 - 3800378 - Wynn Resorts trades lower after earnings, Encore Boston sale\nhttps://seekingalpha.com/news/3800378-wynn-resorts-trades-lower-after-earnings-encore-boston-sale\n\n2022 Feb 16, 03:52 (\ud83e\udd8b) /stocks/disc/ $ cnews -t buybacks\n2022-02-15 16:24:36 - 3800409 - DHI launches new $15M in stock repurchase program\nhttps://seekingalpha.com/news/3800409-dhi-launches-new-15m-in-stock-repurchase-program\n\n2022-02-15 16:20:21 - 3800395 - Upstart stock soars after Q4 earnings beat, strong guidance, stock buyback\nhttps://seekingalpha.com/news/3800395-upstart-stock-soars-after-q4-earnings-beat-strong-guidance-stock-buyback\n\n2022-02-15 16:17:07 - 3800387 - Upstart announces $400M share repurchase program\nhttps://seekingalpha.com/news/3800387-upstart-announces-400m-share-repurchase-program\n\n2022-02-15 08:04:55 - 3800026 - GCM Grosvenor reports Q4 results, increases stock repurchase plan by $20M\nhttps://seekingalpha.com/news/3800026-gcm-grosvenor-reports-q4-results-increases-stock-repurchase-plan-by-20m\n\n2022-02-15 08:04:08 - 3800020 - Middlefield Banc declares $0.17 dividend; expands stock buyback plan\nhttps://seekingalpha.com/news/3800020-middlefield-banc-corp-declares-0_17-dividend\n\n2022-02-15 07:26:40 - 3799989 - LGI Homes expands stock repurchase program by $200M\nhttps://seekingalpha.com/news/3799989-lgi-homes-expands-stock-repurchase-program-by-200m\n")),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);