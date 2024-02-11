"use strict";(self.webpackChunksipa_js_doc=self.webpackChunksipa_js_doc||[]).push([[1154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),v=r,m=d["".concat(p,".").concat(v)]||d[v]||c[v]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"api/SipaEnv",id:"api/SipaEnv",title:"SipaEnv",description:"SipaEnv",source:"@site/docs/api/SipaEnv.md",sourceDirName:"api",slug:"/api/SipaEnv",permalink:"/docs/api/SipaEnv",draft:!1,editUrl:"https://github.com/sipa-js/sipa-js.github.io/edit/master/docs/api/SipaEnv.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SipaBasicView",permalink:"/docs/api/SipaBasicView"},next:{title:"SipaHelper",permalink:"/docs/api/SipaHelper"}},p={},u=[{value:"SipaEnv",id:"sipaenv",level:2},{value:"SipaEnv.version() \u2192 <code>string</code>",id:"sipaenvversion--string",level:3},{value:"SipaEnv.isRunningLocalHost() \u2192 <code>boolean</code>",id:"sipaenvisrunninglocalhost--boolean",level:3},{value:"SipaEnv.isDebugMode() \u2192 <code>boolean</code>",id:"sipaenvisdebugmode--boolean",level:3},{value:"SipaEnv.debugLog(text)",id:"sipaenvdebuglogtext",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"SipaEnv"}),(0,r.kt)("h2",{id:"sipaenv"},"SipaEnv"),(0,r.kt)("p",null,"SipaEnv"),(0,r.kt)("p",null,"Tool class with environment dependent methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaEnv"},"SipaEnv"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaEnv.version"},".version()")," ","\u2192"," ",(0,r.kt)("code",null,"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaEnv.isRunningLocalHost"},".isRunningLocalHost()")," ","\u2192"," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaEnv.isDebugMode"},".isDebugMode()")," ","\u2192"," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaEnv.debugLog"},".debugLog(text)"))))),(0,r.kt)("a",{name:"SipaEnv.version"}),(0,r.kt)("h3",{id:"sipaenvversion--string"},"SipaEnv.version() ","\u2192"," ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Get the current version of your app."),(0,r.kt)("p",null,"The returned value within this method will automatically be\nupdated at every release build cycle"),(0,r.kt)("a",{name:"SipaEnv.isRunningLocalHost"}),(0,r.kt)("h3",{id:"sipaenvisrunninglocalhost--boolean"},"SipaEnv.isRunningLocalHost() ","\u2192"," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Check if Sipa is running at localhost"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - true if localhost, otherwise false  "),(0,r.kt)("a",{name:"SipaEnv.isDebugMode"}),(0,r.kt)("h3",{id:"sipaenvisdebugmode--boolean"},"SipaEnv.isDebugMode() ","\u2192"," ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Check if debug mode is enabled"),(0,r.kt)("p",null,"The debug mode can be enabled, by adding a query parameter 'debug=true' into your URL"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - true if enabled, otherwise false  "),(0,r.kt)("a",{name:"SipaEnv.debugLog"}),(0,r.kt)("h3",{id:"sipaenvdebuglogtext"},"SipaEnv.debugLog(text)"),(0,r.kt)("p",null,"Debug output on console if debug mode is enabled"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")," ","|"," ",(0,r.kt)("code",null,"any"))))))}c.isMDXComponent=!0}}]);