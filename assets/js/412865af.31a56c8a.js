"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(31792),o=n(85162);const l={title:"Requirements",sidebar_position:1,description:"The OpenBB SDK can be directly installed on your computer via our installation instructions, these are the requirements.",keywords:["installation","installer","install","guide","mac","windows","linux","python","github","macos","how to","explanation","requirements","openbb sdk"]},s=void 0,u={unversionedId:"quickstart/requirements",id:"quickstart/requirements",title:"Requirements",description:"The OpenBB SDK can be directly installed on your computer via our installation instructions, these are the requirements.",source:"@site/content/sdk/quickstart/requirements.md",sourceDirName:"quickstart",slug:"/quickstart/requirements",permalink:"/sdk/quickstart/requirements",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/quickstart/requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Requirements",sidebar_position:1,description:"The OpenBB SDK can be directly installed on your computer via our installation instructions, these are the requirements.",keywords:["installation","installer","install","guide","mac","windows","linux","python","github","macos","how to","explanation","requirements","openbb sdk"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/sdk/"},next:{title:"Installation",permalink:"/sdk/quickstart/installation"}},c={},d=[{value:"Minimum System Requirements",id:"minimum-system-requirements",level:3},{value:"Virtual Environments",id:"virtual-environments",level:2},{value:"GitHub",id:"github",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The OpenBB SDK is a set of tools for financial and data analysis. The purpose of this page is to outline some of the background information required to get the most out of the software."),(0,a.kt)("h3",{id:"minimum-system-requirements"},"Minimum System Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"4GB RAM or more"),(0,a.kt)("li",{parentName:"ul"},"5GB free storage"),(0,a.kt)("li",{parentName:"ul"},"A code editor or Jupyter Notebook"),(0,a.kt)("li",{parentName:"ul"},"Internet connection")),(0,a.kt)("p",null,"Note that installation of the SDK with all the toolkits would require downloading around 4GB of data. Querying data does not require a lot of bandwidth but you will certainly have a more pleasant experience if you will be on a fast internet line. 4G networks provide a good enough experience so if you're traveling your personal hot-spot will do. While it's technically possible to use a subset of the functionality in off-line mode, you will not be able to use any data that is queried from the APIs of data providers and services."),(0,a.kt)("admonition",{title:"OS Specific Requirements",type:"info"},(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"MacOS",label:"MacOS",mdxType:"TabItem"},(0,a.kt)("div",{class:"gdoc-page"}),(0,a.kt)("p",null,"The OpenBB platform requires MacOS Catalina or higher. The oldest Mac configuration known to work is a MacPro 3,1 (OS Catalina) and functions relying on the Intel Math Kernel (Forecast models like RNN) are not compatible with the CPU."),(0,a.kt)("p",null,"Portfolio Optimization Toolkit and Forecasting Toolkit on Apple Silicon: To install the Forecasting toolkit on M1/M2 macs you need to use the x86_64 version of conda and install certain dependencies from conda-forge. Further Instructions can be found in the Installation section"),(0,a.kt)("div",{class:"gdoc-columns"})),(0,a.kt)(o.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("div",{class:"gdoc-page"}),(0,a.kt)("p",null,"Windows 10 or higher is required."),(0,a.kt)("div",{class:"gdoc-columns"})),(0,a.kt)(o.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("div",{class:"gdoc-page"}),(0,a.kt)("p",null,"The OpenBB platform can be installed on a variety of Linux distributions. Due to the large number of system configuration variables, we are unable to verify compatibility across all distributions. It is known to work with up-do-date versions of Ubuntu, Debian and Raspberry Pi. Any 32-bit distributions are incompatible. Generally, if the system installs Miniconda3 then the OpenBB Terminal should also be installable."),(0,a.kt)("div",{class:"gdoc-columns"})))),(0,a.kt)("h2",{id:"virtual-environments"},"Virtual Environments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://packaging.python.org/en/latest/tutorials/installing-packages/"},"Installing Python Packages"))),(0,a.kt)("p",null,"Virtual Python environments are containers for Python applications, and allows the operating system to remain unchanged. The OpenBB SDK is built on top of 300+ open-source libraries. The dependency tree is complex and the components are carefully selected to work with each other. This makes it critical to install the OpenBB SDK in an isolated, dedicated, virtual environment. We recommend a Conda virtual environment because this is currently the only package manager compatible with every function. Consequently, installations within a ",(0,a.kt)("inlineCode",{parentName:"p"},"venv")," or other container will lack the ML and forecast features. The Forecast menu will not be installed unless:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Miniconda3 is installed and the version is specifically x86/x64 architecture, regardless of the CPU-type."),(0,a.kt)("li",{parentName:"ul"},"CMake must be installed within the environment created for the OpenBB installation.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"conda install -c conda-forge cmake"))))),(0,a.kt)("p",null,"It is not recommended to install in a Global environment, such as Homebrew or ",(0,a.kt)("inlineCode",{parentName:"p"},"usr/local/bin/python3"),". Create and activate a new environment before installing the OpenBB SDK."),(0,a.kt)("h2",{id:"github"},"GitHub"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal"},"GitHub")," is where the OpenBB source code is maintained. Cloning the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal.git"},"repository")," is recommended for those wishing to develop functions, inspect the source code, or be on the bleeding-edge of development. Syncing the local folder - ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," - to the main branch of the repository will keep the installation up-to-date, and ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout")," provides a way to test development or contributor branches. GitHub can also be used as a personal storage vault and take advantage of automated actions. It's a great place to build, store, and maintain small databases for free."),(0,a.kt)("p",null,"Users encountering bugs are encouraged to report them ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new/choose"},"here")," by creating a new issue, if no open issue for the bug already exists."))}h.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),a=n(67294),i=n(86010),o=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var b=n(72389);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=n(10412);function v(){const e=function(){const e=g.Z.canUseDOM?navigator.userAgent:"";return e.indexOf("Windows")>-1?"Windows":e.indexOf("Mac")>-1?"Mac":e.indexOf("X11")>-1?"UNIX":e.indexOf("Linux")>-1?"Linux":"Other"}();return"Windows"===e?"windows":"Mac"===e?"mac":"Linux"===e||"UNIX"===e?"python":"windows"}function k(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),{pathname:m,search:h}=(0,l.TH)(),f=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==s&&(p(t),u(r))};g.Z.canUseDOM&&(0,a.useEffect)((()=>{if(m.startsWith("/terminal/quickstart/installation")){const e=function(e,t){const n=e.substring(1).split("&");for(let r=0;r<n.length;r++){let e=n[r].split("=");if(decodeURIComponent(e[0])==t)return decodeURIComponent(e[1])}return null}(h,"tab"),t=v();u(e&&["mac","windows","python","docker"].includes(e)?e:t)}}),[]);const b=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},c.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:b,onClick:f},o,{className:(0,i.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",y.tabItem,o?.className,{"border-b-2 pointer-events-none":s===t,"border-b-2 text-[#669dcb] border-[#669dcb]":s===t&&m.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":s===t&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":s!==t&&m.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":s!==t&&m.startsWith("/terminal")})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function O(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return a.createElement(O,(0,r.Z)({key:String(t)},e))}}}]);