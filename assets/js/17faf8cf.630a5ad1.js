"use strict";(self.webpackChunksipa_js_doc=self.webpackChunksipa_js_doc||[]).push([[3364],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2686:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>O,frontMatter:()=>v,metadata:()=>g,toc:()=>w});var n=a(7462),r=a(7294),l=a(3905),o=a(6010),i=a(2389),s=a(7392),u=a(7094),c=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:i,values:m,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,u.U)(),[N,O]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==N&&(I(t),O(n),null!=h&&w(h,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function b(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(f,n),hidden:a},t)}const v={sidebar_position:3},y="Installation",g={unversionedId:"guides/installation",id:"guides/installation",title:"Installation",description:"Requirements",source:"@site/docs/guides/installation.mdx",sourceDirName:"guides",slug:"/guides/installation",permalink:"/docs/guides/installation",draft:!1,editUrl:"https://github.com/sipa-js/sipa-js.github.io/edit/master/docs/guides/installation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"History and why of Sipa",permalink:"/docs/guides/history_and_why"},next:{title:"Basics",permalink:"/docs/category/basics"}},k={},w=[{value:"Requirements",id:"requirements",level:2},{value:"Install Sipa CLI tools",id:"install-sipa-cli-tools",level:2},{value:"npm vs Yarn",id:"npm-vs-yarn",level:3},{value:"Check Sipa installation",id:"check-sipa-installation",level:2}],N={toc:w};function O(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Before you can start with the installation of Sipa itself, you need have to be installed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," runtime version 16.x or above")),(0,l.kt)("p",null,"When installed, you can check if it has been succeeded successfully, by running the following on the command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node -v\n")),(0,l.kt)("p",null,"You should get a output of the node version like this"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"v16.18.0\n")),(0,l.kt)("h2",{id:"install-sipa-cli-tools"},"Install Sipa CLI tools"),(0,l.kt)("p",null,"Sipa provides a simple but powerful set of command line (CLI) tools to make developing web apps comfortable and fun."),(0,l.kt)("h3",{id:"npm-vs-yarn"},"npm vs Yarn"),(0,l.kt)("p",null,"You can install Sipa by using npm or Yarn. npm is the default node package manager. But many people prefer using yarn as it is usually working much faster and gives a better user experience. If you are not sure what to use, then use npm."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you want to find out more about Yarn, you can find more information about it and how to install it, in its official ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs"},"docs"),".")),(0,l.kt)(h,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(b,{value:"win",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g sipa\n"))),(0,l.kt)(b,{value:"bash",label:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add sipa\n")))),(0,l.kt)("h2",{id:"check-sipa-installation"},"Check Sipa installation"),(0,l.kt)("p",null,"After installing Sipa with the command of the previous section, you can check if its CLI is available on the command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sipa -v\n")),(0,l.kt)("p",null,"You should get a response like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sipa 0.9.1 @ 2023-12-15T14:21:36.170Z\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"If you get an error instead, that the command does not exist and used Yarn to install Sipa, ensure that the Yarn bin directory is added to the ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," variable as ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/cli/global#adding-the-install-location-to-your-path"},"described in the Yarn docs"),".")),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"sipa help")," for more information."),(0,l.kt)("p",null,"Then you can continue with the ",(0,l.kt)("a",{parentName:"p",href:"guides-basics/sipa-cli"},"Sipa CLI"),"."))}O.isMDXComponent=!0}}]);