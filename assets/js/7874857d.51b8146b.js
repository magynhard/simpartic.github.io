"use strict";(self.webpackChunksipa_js_doc=self.webpackChunksipa_js_doc||[]).push([[1415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),k=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=k(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=k(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var k=2;k<o;k++)l[k]=a[k];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9734:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>k});var n=a(7462),r=(a(7294),a(3905));const o={},l=void 0,p={unversionedId:"api/SipaHooks",id:"api/SipaHooks",title:"SipaHooks",description:"SipaHooks",source:"@site/docs/api/SipaHooks.md",sourceDirName:"api",slug:"/api/SipaHooks",permalink:"/docs/api/SipaHooks",draft:!1,editUrl:"https://github.com/sipa-js/sipa-js.github.io/edit/master/docs/api/SipaHooks.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SipaHelper",permalink:"/docs/api/SipaHelper"},next:{title:"SipaOnsen",permalink:"/docs/api/SipaOnsen"}},i={},k=[{value:"SipaHooks",id:"sipahooks",level:2},{value:"SipaHooks.beforeInitPage(type, func, page_id)",id:"sipahooksbeforeinitpagetype-func-page_id",level:3},{value:"SipaHooks.beforeShowPage(type, func, page_id)",id:"sipahooksbeforeshowpagetype-func-page_id",level:3},{value:"SipaHooks.beforeDestroyPage(type, func, page_id)",id:"sipahooksbeforedestroypagetype-func-page_id",level:3},{value:"SipaHooks.beforeInitLayout(type, func, layout_id)",id:"sipahooksbeforeinitlayouttype-func-layout_id",level:3},{value:"SipaHooks.beforeDestroyLayout(type, func, layout_id)",id:"sipahooksbeforedestroylayouttype-func-layout_id",level:3},{value:"SipaHooks.HookType : <code>&#39;on&#39;</code> | <code>&#39;off&#39;</code> | <code>&#39;trigger&#39;</code>",id:"sipahookshooktype--on--off--trigger",level:3}],u={toc:k};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"SipaHooks"}),(0,r.kt)("h2",{id:"sipahooks"},"SipaHooks"),(0,r.kt)("p",null,"SipaHooks"),(0,r.kt)("p",null,"App hook manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaHooks"},"SipaHooks"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaHooks.beforeInitPage"},".beforeInitPage(type, func, page_id)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaHooks.beforeShowPage"},".beforeShowPage(type, func, page_id)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaHooks.beforeDestroyPage"},".beforeDestroyPage(type, func, page_id)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaHooks.beforeInitLayout"},".beforeInitLayout(type, func, layout_id)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaHooks.beforeDestroyLayout"},".beforeDestroyLayout(type, func, layout_id)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#SipaHooks.HookType"},".HookType")," : ",(0,r.kt)("code",null,"'","on","'")," ","|"," ",(0,r.kt)("code",null,"'","off","'")," ","|"," ",(0,r.kt)("code",null,"'","trigger","'"))))),(0,r.kt)("a",{name:"SipaHooks.beforeInitPage"}),(0,r.kt)("h3",{id:"sipahooksbeforeinitpagetype-func-page_id"},"SipaHooks.beforeInitPage(type, func, page_id)"),(0,r.kt)("p",null,"Set, remove or trigger event 'beforeInitPage'"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#SipaHooks.HookType"},(0,r.kt)("code",null,"HookType"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"func"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"function to set or remove, ignored if parameter type is 'trigger'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"SipaHooks.beforeInitPage('on', () => {\n    console.log(\"This is run before onInit() of any page is executed!\");\n}\n")),(0,r.kt)("a",{name:"SipaHooks.beforeShowPage"}),(0,r.kt)("h3",{id:"sipahooksbeforeshowpagetype-func-page_id"},"SipaHooks.beforeShowPage(type, func, page_id)"),(0,r.kt)("p",null,"Set, remove or trigger event 'beforeShowPage'"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#SipaHooks.HookType"},(0,r.kt)("code",null,"HookType"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"func"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"function to set or remove, ignored if parameter type is 'trigger'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("a",{name:"SipaHooks.beforeDestroyPage"}),(0,r.kt)("h3",{id:"sipahooksbeforedestroypagetype-func-page_id"},"SipaHooks.beforeDestroyPage(type, func, page_id)"),(0,r.kt)("p",null,"Set, remove or trigger event 'beforeDestroyPage'"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#SipaHooks.HookType"},(0,r.kt)("code",null,"HookType"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"func"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"function to set or remove, ignored if parameter type is 'trigger'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"SipaHooks.beforeDestroyPage('on', () => {\n    console.log(\"This is run before onDestroy() of any page is executed!\");\n}\n")),(0,r.kt)("a",{name:"SipaHooks.beforeInitLayout"}),(0,r.kt)("h3",{id:"sipahooksbeforeinitlayouttype-func-layout_id"},"SipaHooks.beforeInitLayout(type, func, layout_id)"),(0,r.kt)("p",null,"Set, remove or trigger event 'beforeInitLayout'"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#SipaHooks.HookType"},(0,r.kt)("code",null,"HookType"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"func"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"function to set or remove, ignored if parameter type is 'trigger'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layout_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"SipaHooks.beforeInitLayout('on', () => {\n    console.log(\"This is run before onInit() of any layout is executed!\");\n}\n")),(0,r.kt)("a",{name:"SipaHooks.beforeDestroyLayout"}),(0,r.kt)("h3",{id:"sipahooksbeforedestroylayouttype-func-layout_id"},"SipaHooks.beforeDestroyLayout(type, func, layout_id)"),(0,r.kt)("p",null,"Set, remove or trigger event 'beforeDestroyLayout'"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#SipaHooks.HookType"},(0,r.kt)("code",null,"HookType"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"func"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"function")),(0,r.kt)("td",{parentName:"tr",align:null},"function to set or remove, ignored if parameter type is 'trigger'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"layout_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"SipaHooks.beforeDestroyLayout('on', () => {\n    console.log(\"This is run before onDestroy) of any layout is executed!\");\n}\n")),(0,r.kt)("a",{name:"SipaHooks.HookType"}),(0,r.kt)("h3",{id:"sipahookshooktype--on--off--trigger"},"SipaHooks.HookType : ",(0,r.kt)("code",null,"'","on","'")," ","|"," ",(0,r.kt)("code",null,"'","off","'")," ","|"," ",(0,r.kt)("code",null,"'","trigger","'")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static typedef of ",(0,r.kt)("a",{parentName:"p",href:"#SipaHooks"},(0,r.kt)("code",null,"SipaHooks"))))}s.isMDXComponent=!0}}]);