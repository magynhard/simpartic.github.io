"use strict";(self.webpackChunksipa_js_doc=self.webpackChunksipa_js_doc||[]).push([[4825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(a),d=n,k=s["".concat(o,".").concat(d)]||s[d]||u[d]||l;return a?r.createElement(k,p(p({ref:t},c),{},{components:a})):r.createElement(k,p({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={},p=void 0,i={unversionedId:"api/SipaHelper",id:"api/SipaHelper",title:"SipaHelper",description:"SipaHelper",source:"@site/docs/api/SipaHelper.md",sourceDirName:"api",slug:"/api/SipaHelper",permalink:"/docs/api/SipaHelper",draft:!1,editUrl:"https://github.com/sipa-js/sipa-js.github.io/edit/master/docs/api/SipaHelper.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"SipaEnv",permalink:"/docs/api/SipaEnv"},next:{title:"SipaHooks",permalink:"/docs/api/SipaHooks"}},o={},m=[{value:"SipaHelper",id:"sipahelper",level:2},{value:"SipaHelper.mergeOptions(source, addition) \u2192 <code>Object</code>",id:"sipahelpermergeoptionssource-addition--object",level:3},{value:"SipaHelper.isArrayContainingEmptyValue(value) \u2192 <code>boolean</code>",id:"sipahelperisarraycontainingemptyvaluevalue--boolean",level:3},{value:"SipaHelper.validateParams(params)",id:"sipahelpervalidateparamsparams",level:3},{value:"SipaHelper.cutLeadingCharacters(text, leading_characters) \u2192 <code>string</code>",id:"sipahelpercutleadingcharacterstext-leading_characters--string",level:3},{value:"SipaHelper.cutTrailingCharacters(text, trailing_characters) \u2192 <code>string</code>",id:"sipahelpercuttrailingcharacterstext-trailing_characters--string",level:3},{value:"SipaParamValidation : <code>Object</code>",id:"sipaparamvalidation--object",level:2}],c={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"String"}),(0,n.kt)("h2",{id:"sipahelper"},"SipaHelper"),(0,n.kt)("p",null,"SipaHelper"),(0,n.kt)("p",null,"Tool helper class with common helper methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#SipaHelper"},"SipaHelper"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#SipaHelper.mergeOptions"},".mergeOptions(source, addition)")," ","\u2192"," ",(0,n.kt)("code",null,"Object")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#SipaHelper.isArrayContainingEmptyValue"},".isArrayContainingEmptyValue(value)")," ","\u2192"," ",(0,n.kt)("code",null,"boolean")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#SipaHelper.validateParams"},".validateParams(params)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#SipaHelper.cutLeadingCharacters"},".cutLeadingCharacters(text, leading_characters)")," ","\u2192"," ",(0,n.kt)("code",null,"string")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#SipaHelper.cutTrailingCharacters"},".cutTrailingCharacters(text, trailing_characters)")," ","\u2192"," ",(0,n.kt)("code",null,"string"))))),(0,n.kt)("a",{name:"SipaHelper.mergeOptions"}),(0,n.kt)("h3",{id:"sipahelpermergeoptionssource-addition--object"},"SipaHelper.mergeOptions(source, addition) ","\u2192"," ",(0,n.kt)("code",null,"Object")),(0,n.kt)("p",null,"Merge default options (source) with custom options (addition)"),(0,n.kt)("p",null,"Works only fine with one level depth, don't merge nested (Object) options, as references are copied then!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"Object")," - merged object  "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"source"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"addition"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Object"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'SipaHelper.mergeOptions({ a: 1, b: "two"},{b: "TWO", c: null });\n// => { a: 1, b: "TWO", c: null }\n')),(0,n.kt)("a",{name:"SipaHelper.isArrayContainingEmptyValue"}),(0,n.kt)("h3",{id:"sipahelperisarraycontainingemptyvaluevalue--boolean"},"SipaHelper.isArrayContainingEmptyValue(value) ","\u2192"," ",(0,n.kt)("code",null,"boolean")),(0,n.kt)("p",null,"Check if given value is a array (slice) of size 1 and contains type empty"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("code",null,"boolean")," - true if a array of size 1 and contains empty => ","[empty]",", if size is 1 and not of type empty then false",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Throws"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Error")," if array is not of size 1")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"any"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'let arr = ["one"];\ndelete arr[1]:\narr;\n// => [empty]\nSipaHelper.isArrayContainingEmptyValue(arr);\n// => true\n')),(0,n.kt)("a",{name:"SipaHelper.validateParams"}),(0,n.kt)("h3",{id:"sipahelpervalidateparamsparams"},"SipaHelper.validateParams(params)"),(0,n.kt)("p",null,"Check the given parameter to be of the expected type.\nIf is is not valid, throw an exception.\n",(0,n.kt)("strong",{parentName:"p"},"Throws"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("code",null,"Error")," throws an error if given parameter is not valid.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"params"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#SipaParamValidation"},(0,n.kt)("code",null,"Array.","<","SipaParamValidation",">")))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function Example(param_one, other_param) {\n    SipaHelper.validateParams([\n        {param_name: 'param_one', param_value: param_one, expected_type: 'Object'},\n        {param_name: 'other_param', param_value: other_param, expected_type: 'boolean'},\n    ]);\n}\nExample(\"one\",true);\n// => Invalid parameter 'param_one' given. Expected type 'Object' but got type 'string'!`\n")),(0,n.kt)("a",{name:"SipaHelper.cutLeadingCharacters"}),(0,n.kt)("h3",{id:"sipahelpercutleadingcharacterstext-leading_characters--string"},"SipaHelper.cutLeadingCharacters(text, leading_characters) ","\u2192"," ",(0,n.kt)("code",null,"string")),(0,n.kt)("p",null,"Cut leading characters (string) from given text"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"to cut")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"leading_characters"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"to cut from text")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},".cutLeadingCharacters('/some/path/is/that','/')\n // => 'some/path/is/that'\n")),(0,n.kt)("a",{name:"SipaHelper.cutTrailingCharacters"}),(0,n.kt)("h3",{id:"sipahelpercuttrailingcharacterstext-trailing_characters--string"},"SipaHelper.cutTrailingCharacters(text, trailing_characters) ","\u2192"," ",(0,n.kt)("code",null,"string")),(0,n.kt)("p",null,"Cut trailing characters (string) from given text"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Param"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"to cut")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"trailing_characters"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"to cut from text")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},".cutLeadingCharacters('/some/path/file.ext','.ext')\n // => 'some/path/file'\n")),(0,n.kt)("a",{name:"SipaParamValidation"}),(0,n.kt)("h2",{id:"sipaparamvalidation--object"},"SipaParamValidation : ",(0,n.kt)("code",null,"Object")),(0,n.kt)("p",null,"Custom type definitions for excellent IDE auto complete support\n",(0,n.kt)("strong",{parentName:"p"},"Properties")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"param_value"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"any")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"param_name"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"expected_type,"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},"e.g. 'Object', 'String, 'Array', ...")))))}u.isMDXComponent=!0}}]);