"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81617],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(k,o(o({ref:e},s),{},{components:a})):n.createElement(k,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},34019:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(31792),o=a(85162);const i={title:"anom",description:"OpenBB SDK Function"},u="anom",p={unversionedId:"reference/forecast/anom",id:"reference/forecast/anom",title:"anom",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/forecast/anom.md",sourceDirName:"reference/forecast",slug:"/reference/forecast/anom",permalink:"/sdk/reference/forecast/anom",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forecast/anom.md",tags:[],version:"current",frontMatter:{title:"anom",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"forecast",permalink:"/sdk/reference/forecast/"},next:{title:"atr",permalink:"/sdk/reference/forecast/atr"}},s={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],m={toc:d},c="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anom"},"anom"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Get Quantile Anomaly Detection Data"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/anom_model.py#L19"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.forecast.anom(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", train_split: float = 0.6)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[pd.Series, pd.DataFrame]"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-------"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_column"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"train_split"),(0,r.kt)("td",{parentName:"tr",align:null},"(float, optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,r.kt)("td",{parentName:"tr",align:null},"0.6"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple["),(0,r.kt)("td",{parentName:"tr",align:null},"List","[TimeSeries]",",",(0,r.kt)("br",null),"List","[TimeSeries]",",",(0,r.kt)("br",null),"List","[TimeSeries]",",",(0,r.kt)("br",null),"]")))),(0,r.kt)("hr",null)),(0,r.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,r.kt)("p",null,"Display Quantile Anomaly Detection"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/anom_view.py#L24"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},'openbb.forecast.anom_chart(data: Union[pd.Series, pd.DataFrame], dataset_name: Any = "", target_column: str = "close", train_split: float = 0.6, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, external_axes: Optional[List[axes]] = None)\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[pd.Series, pd.DataFrame]"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"----------"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_column"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"train_split"),(0,r.kt)("td",{parentName:"tr",align:null},"(float, optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,r.kt)("td",{parentName:"tr",align:null},"0.6"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forecast_horizon"),(0,r.kt)("td",{parentName:"tr",align:null},"(int, optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Forecast horizon. Defaults to 5."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export"),(0,r.kt)("td",{parentName:"tr",align:null},"(str, optional)"),(0,r.kt)("td",{parentName:"tr",align:null},'Export data to csv. Defaults to "".'),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional","[datetime]",", optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date. Defaults to None."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional","[datetime]",", optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"End date. Defaults to None."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,r.kt)("td",{parentName:"tr",align:null},"(Optional[List","[plt.axes]","], optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"External axes. Defaults to None."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("hr",null))))}k.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},e)}},31792:(t,e,a)=>{a.d(e,{Z:()=>T});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),u=a(91980),p=a(67392),s=a(50012);function d(t){return function(t){return r.Children.map(t,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function m(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??d(a);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function k(t){let{queryString:e=!1,groupId:a}=t;const n=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function f(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=m(t),[o,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[u,p]=k({queryString:a,groupId:n}),[d,f]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),g=(()=>{const t=u??d;return c({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),p(t),f(t)}),[p,f,l]),tabValues:l}}var g=a(72389);const N={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=a(10412);function h(){const t=function(){const t=b.Z.canUseDOM?navigator.userAgent:"";return t.indexOf("Windows")>-1?"Windows":t.indexOf("Mac")>-1?"Mac":t.indexOf("X11")>-1?"UNIX":t.indexOf("Linux")>-1?"Linux":"Other"}();return"Windows"===t?"windows":"Mac"===t?"mac":"Linux"===t||"UNIX"===t?"python":"windows"}function y(t){let{className:e,block:a,selectedValue:u,selectValue:p,tabValues:s}=t;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),{pathname:c,search:k}=(0,i.TH)(),f=t=>{const e=t.currentTarget,a=d.indexOf(e),n=s[a].value;n!==u&&(m(e),p(n))};b.Z.canUseDOM&&(0,r.useEffect)((()=>{if(c.startsWith("/terminal/quickstart/installation")){const t=function(t,e){const a=t.substring(1).split("&");for(let n=0;n<a.length;n++){let t=a[n].split("=");if(decodeURIComponent(t[0])==e)return decodeURIComponent(t[1])}return null}(k,"tab"),e=h();p(t&&["mac","windows","python","docker"].includes(t)?t:e)}}),[]);const g=t=>{let e=null;switch(t.key){case"Enter":f(t);break;case"ArrowRight":{const a=d.indexOf(t.currentTarget)+1;e=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(t.currentTarget)-1;e=d[a]??d[d.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},s.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>d.push(t),onKeyDown:g,onClick:f},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",N.tabItem,o?.className,{"border-b-2 pointer-events-none":u===e,"border-b-2 text-[#669dcb] border-[#669dcb]":u===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==e&&c.startsWith("/terminal")})}),a??e)})))}function v(t){let{lazy:e,children:a,selectedValue:n}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function w(t){const e=f(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(y,(0,n.Z)({},t,e)),r.createElement(v,(0,n.Z)({},t,e)))}function T(t){const e=(0,g.Z)();return r.createElement(w,(0,n.Z)({key:String(e)},t))}}}]);