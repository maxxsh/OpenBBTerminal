"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(a),h=i,c=d["".concat(s,".").concat(h)]||d[h]||p[h]||l;return a?n.createElement(c,r(r({ref:t},m),{},{components:a})):n.createElement(c,r({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},81810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const l={sidebar_position:4,title:"Customizing the Terminal",description:"To adjust the lay-out and settings of the OpenBB Terminal you can access the settings menu. This menu allows you to tweak how the terminal behaves. Next to that, to enable or disable certain functionalities of the terminal you can use the featflags menu.",keywords:["settings","featflags","feature flags","lay-out","advanced","customizing","openbb terminal"]},r=void 0,o={unversionedId:"guides/advanced/customizing-the-terminal",id:"guides/advanced/customizing-the-terminal",title:"Customizing the Terminal",description:"To adjust the lay-out and settings of the OpenBB Terminal you can access the settings menu. This menu allows you to tweak how the terminal behaves. Next to that, to enable or disable certain functionalities of the terminal you can use the featflags menu.",source:"@site/content/terminal/guides/advanced/customizing-the-terminal.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/customizing-the-terminal",permalink:"/terminal/guides/advanced/customizing-the-terminal",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/guides/advanced/customizing-the-terminal.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Customizing the Terminal",description:"To adjust the lay-out and settings of the OpenBB Terminal you can access the settings menu. This menu allows you to tweak how the terminal behaves. Next to that, to enable or disable certain functionalities of the terminal you can use the featflags menu.",keywords:["settings","featflags","feature flags","lay-out","advanced","customizing","openbb terminal"]},sidebar:"tutorialSidebar",previous:{title:"Importing and Exporting Data",permalink:"/terminal/guides/advanced/data"},next:{title:"Scripts & Routines",permalink:"/terminal/guides/advanced/scripts-and-routines"}},s={},u=[],m={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To adjust the lay-out and settings of the OpenBB Terminal you can access the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," menu. This menu allows you to\ntweak how the terminal behaves. This includes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dt")," adds or removes the datetime from the flair (which is next to the emoji)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flair")," allows you to change the emoji that is used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lang")," gives the ability to change the terminal language. At this moment, the terminal is only available in English."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"export")," defines the folder you wish to export data you acquire from the terminal. Use quotes for custom locations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tz")," allows you to change the timezone if this is incorrectly displayed for you."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"autoscaling")," automatically scales plots for you if enabled (when green)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pheight")," sets the percentage height of the plot (graphs) displayed (if autoscaling is enabled)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pwidth")," sets the percentage width of the plot (graphs) displayed (if autoscaling is enabled)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height")," sets the height of the plot (graphs) displayed (if autoscaling is disabled)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")," sets the width of the plot (graphs) displayed (if autoscaling is disabled)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dpi")," refers to the resolution that is used for the plot (graphs)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"backend")," allows you to change the backend that is used for the graphs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"monitor")," choose which monitors to scale the plot (graphs) to if applicable"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source")," allows you to select a different source file in which the default data sources are written down")),(0,i.kt)("p",null,"Next to that, to enable or disable certain functionalities of the terminal you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"featflags")," menu which\nincludes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retryload")," whenever you misspell commands, try to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"load")," command with it first (default is no)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tab")," whether to use tabulate to print DataFrames, to prettify these DataFrames (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cls")," whether to clear the command window after each command (default is no)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color")," whether to use colors within the terminal (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promptkit")," whether you wish to enable autocomplete and history (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"thoughts")," whether to receive a thought of the day (default is no)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reporthtml")," whether to open reports as HTML instead of Jupyter Notebooks (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exithelp")," whether to automatically print the help message when you use ",(0,i.kt)("inlineCode",{parentName:"li"},"q")," (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rcontext")," whether to remember loaded tickers and similar while switching menus (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rich")," whether to apply a colorful rich terminal (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"richpanel")," whether to apply a colorful rich terminal panel (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ion")," whether to enable interactive mode of MATPLOTLIB (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"watermark")," whether to include the watermark of OpenBB Terminal in figures (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cmdloc")," whether the location of the command is displayed in figures (default is yes)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tbhint")," whether usage hints are displayed in the bottom toolbar (default is yes).")))}p.isMDXComponent=!0}}]);