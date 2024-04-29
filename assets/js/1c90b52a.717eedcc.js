"use strict";(self.webpackChunksipa_js_doc=self.webpackChunksipa_js_doc||[]).push([[1154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),v=i,m=d["".concat(p,".").concat(v)]||d[v]||c[v]||r;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={},l=void 0,o={unversionedId:"api/SipaEnv",id:"api/SipaEnv",title:"SipaEnv",description:"SipaEnv",source:"@site/docs/api/SipaEnv.md",sourceDirName:"api",slug:"/api/SipaEnv",permalink:"/docs/api/SipaEnv",draft:!1,editUrl:"https://github.com/sipa-js/sipa-js.github.io/edit/master/docs/api/SipaEnv.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SipaComponent",permalink:"/docs/api/SipaComponent"},next:{title:"SipaHelper",permalink:"/docs/api/SipaHelper"}},p={},u=[{value:"SipaEnv",id:"sipaenv",level:2},{value:"SipaEnv.version() \u2192 <code>string</code>",id:"sipaenvversion--string",level:3},{value:"SipaEnv.name() \u2192 <code>string</code>",id:"sipaenvname--string",level:3},{value:"SipaEnv.description() \u2192 <code>string</code>",id:"sipaenvdescription--string",level:3},{value:"SipaEnv.isRunningLocalHost() \u2192 <code>boolean</code>",id:"sipaenvisrunninglocalhost--boolean",level:3},{value:"SipaEnv.isDebugMode() \u2192 <code>boolean</code>",id:"sipaenvisdebugmode--boolean",level:3},{value:"SipaEnv.debugLog(text)",id:"sipaenvdebuglogtext",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"SipaEnv"}),(0,i.kt)("h2",{id:"sipaenv"},"SipaEnv"),(0,i.kt)("p",null,"SipaEnv"),(0,i.kt)("p",null,"Tool class with environment dependent methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaEnv"},"SipaEnv"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaEnv.version"},".version()")," ","\u2192"," ",(0,i.kt)("code",null,"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaEnv.name"},".name()")," ","\u2192"," ",(0,i.kt)("code",null,"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaEnv.description"},".description()")," ","\u2192"," ",(0,i.kt)("code",null,"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaEnv.isRunningLocalHost"},".isRunningLocalHost()")," ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaEnv.isDebugMode"},".isDebugMode()")," ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#SipaEnv.debugLog"},".debugLog(text)"))))),(0,i.kt)("a",{name:"SipaEnv.version"}),(0,i.kt)("h3",{id:"sipaenvversion--string"},"SipaEnv.version() ","\u2192"," ",(0,i.kt)("code",null,"string")),(0,i.kt)("p",null,"Get the current version of your app."),(0,i.kt)("p",null,"The returned value within this method will automatically be\nupdated from your package.json at every release build cycle."),(0,i.kt)("a",{name:"SipaEnv.name"}),(0,i.kt)("h3",{id:"sipaenvname--string"},"SipaEnv.name() ","\u2192"," ",(0,i.kt)("code",null,"string")),(0,i.kt)("p",null,"Get the current name of your app."),(0,i.kt)("p",null,"The returned value within this method will automatically be\nupdated from your package.json at every release build cycle."),(0,i.kt)("a",{name:"SipaEnv.description"}),(0,i.kt)("h3",{id:"sipaenvdescription--string"},"SipaEnv.description() ","\u2192"," ",(0,i.kt)("code",null,"string")),(0,i.kt)("p",null,"Get the current description of your app."),(0,i.kt)("p",null,"The returned value within this method will automatically be\nupdated from your package.json at every release build cycle."),(0,i.kt)("a",{name:"SipaEnv.isRunningLocalHost"}),(0,i.kt)("h3",{id:"sipaenvisrunninglocalhost--boolean"},"SipaEnv.isRunningLocalHost() ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("p",null,"Check if Sipa is running at localhost."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": ",(0,i.kt)("code",null,"boolean")," - true if localhost, otherwise false  "),(0,i.kt)("a",{name:"SipaEnv.isDebugMode"}),(0,i.kt)("h3",{id:"sipaenvisdebugmode--boolean"},"SipaEnv.isDebugMode() ","\u2192"," ",(0,i.kt)("code",null,"boolean")),(0,i.kt)("p",null,"Check if debug mode is enabled"),(0,i.kt)("p",null,"The debug mode can be enabled, by adding a query parameter 'debug=true' into your URL"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),": ",(0,i.kt)("code",null,"boolean")," - true if enabled, otherwise false  "),(0,i.kt)("a",{name:"SipaEnv.debugLog"}),(0,i.kt)("h3",{id:"sipaenvdebuglogtext"},"SipaEnv.debugLog(text)"),(0,i.kt)("p",null,"Debug output on console if debug mode is enabled"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"string")," ","|"," ",(0,i.kt)("code",null,"any"))))))}c.isMDXComponent=!0}}]);