"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[7101],{70481:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=s(74848),n=s(28453),i=s(3514);const a={sidebar_position:5},c="API",d={id:"advanced/api/index",title:"API",description:"Overview",source:"@site/docs/advanced/api/index.mdx",sourceDirName:"advanced/api",slug:"/advanced/api/",permalink:"/docs/next/advanced/api/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Envelope file format",permalink:"/docs/next/advanced/envelope-format"},next:{title:"API Reference",permalink:"/docs/next/advanced/api/api-reference"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Base URL",id:"base-url",level:2},{value:"Resources",id:"resources",level:2},{value:"Data linkage process",id:"data-linkage-process",level:2},{value:"Requests",id:"requests",level:2},{value:"Credentials",id:"credentials",level:3},{value:"Fetching lists of items",id:"fetching-lists-of-items",level:3},{value:"Response Codes",id:"response-codes",level:3},{value:"Details",id:"details",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"api",children:"API"})}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"LinXmart provides an optional web-based API, allowing the management and orchestration of data through the system."}),"\n",(0,r.jsx)(t.p,{children:"Any client that supports HTTP can be used."}),"\n",(0,r.jsx)(t.p,{children:"The table below outlines the four main HTTP operations (methods) that are supported and their general usage."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GET"}),(0,r.jsx)(t.td,{children:"Retrieve an resource or a list of resources."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"POST"}),(0,r.jsx)(t.td,{children:"Add a new resource to an existing resource."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PUT"}),(0,r.jsx)(t.td,{children:"Update an existing resource."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DELETE"}),(0,r.jsx)(t.td,{children:"Remove an existing resource."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"base-url",children:"Base URL"}),"\n",(0,r.jsx)(t.p,{children:"All URLs referenced in the documentation will have the following base:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://<hostname>/api/v<version>\n"})}),"\n",(0,r.jsx)(t.p,{children:"The LinXmart API uses versioning via the URL - the latest version is 3.2."}),"\n",(0,r.jsx)(t.p,{children:"All calls are also forced over HTTPS for data privacy, ensuring encryption across the wire."}),"\n",(0,r.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)(t.p,{children:"The following diagram shows the Resources available via the API and their relationships."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Resources",src:s(7932).A+"#gh-light-mode-only",width:"620",height:"579"}),(0,r.jsx)(t.img,{alt:"Resources",src:s(31329).A+"#gh-dark-mode-only",width:"620",height:"579"})]}),"\n",(0,r.jsx)(t.h2,{id:"data-linkage-process",children:"Data linkage process"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/DataProviders",children:"Data Providers"})," are created to represent organisations that are custodians of data to link. Each Data Provider has one or more ",(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/EventTypes",children:"Event Types"})," created representing a dataset type, the file layout described by an ",(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/ImportFormats",children:"Import Format"}),";"]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/Projects",children:"Project"})," is created to contain the linkage data;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/Envelopes",children:"Envelopes"})," containing ",(0,r.jsx)(t.em,{children:"linkage"})," data files are uploaded to the server - these contain a reference to the Project. These data files are all linked by the system and a ",(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/Linkages",children:"Linkage"})," is created for each one;"]}),"\n",(0,r.jsxs)(t.li,{children:["An ",(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/ExtractionProjects",children:"Extraction Project"})," is created under a Project to group together a set of extraction results. This can either be for enduring linkage keys that persist over time, or point in time extractions based on the date and time of the creation of the Extraction Project;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/Envelopes",children:"Envelopes"})," containing ",(0,r.jsx)(t.em,{children:"extraction"})," data files are uploaded to the server - these contain a reference to the Extraction Project. An ",(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/Extractions",children:"Extraction"})," is created for each one;"]}),"\n",(0,r.jsxs)(t.li,{children:["When the Extractions are complete, the ",(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference#tag/Results",children:"Results"})," can be downloaded."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"requests",children:"Requests"}),"\n",(0,r.jsx)(t.p,{children:"The LinXmart Web API supports JSON with its response. The Accept header should be set appropriately."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For JSON, set the Accept header to ",(0,r.jsx)(t.em,{children:"application/json"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"credentials",children:"Credentials"}),"\n",(0,r.jsxs)(t.p,{children:["All requests require NTLM or Bearer Token authentication to be passed - this is done with the Authorization request header. If no credentials are sent, a ",(0,r.jsx)(t.code,{children:"401 UNAUTHORIZED"})," is returned."]}),"\n",(0,r.jsxs)(t.p,{children:["The account used for authentication must be added as a user in LinXmart with the ",(0,r.jsx)(t.em,{children:"Access to the system via the Web API"})," application permission."]}),"\n",(0,r.jsx)(t.h3,{id:"fetching-lists-of-items",children:"Fetching lists of items"}),"\n",(0,r.jsx)(t.p,{children:"Some resource GETs provide limit and offset query parameters for paging of large result sets."}),"\n",(0,r.jsx)(t.h3,{id:"response-codes",children:"Response Codes"}),"\n",(0,r.jsx)(t.p,{children:"The table below shows the possible response codes from the API."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Operation"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"200"})," OK"]}),(0,r.jsx)(t.td,{children:"The request was successful."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"201"})," CREATED"]}),(0,r.jsx)(t.td,{children:"The request was successful and a new resource has been created. The new resource URI is returned in the Location header response."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"202"})," ACCEPTED"]}),(0,r.jsx)(t.td,{children:"Record marked for deletion (EventType and DataProvider)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"204"})," NO CONTENT"]}),(0,r.jsx)(t.td,{children:"The request was successful and the response was empty."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"304"})," NOT MODIFIED"]}),(0,r.jsx)(t.td,{children:"Record exists but the file already deleted (Result)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"400"})," BAD REQUEST"]}),(0,r.jsx)(t.td,{children:"The data provided in the request failed validation or was not appropriate in context."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"401"})," UNAUTHORIZED"]}),(0,r.jsx)(t.td,{children:"The credentials provided for the request were invalid."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"404"})," NOT FOUND"]}),(0,r.jsx)(t.td,{children:"The resource requested was not found."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"405"})," METHOD NOT ALLOWED"]}),(0,r.jsx)(t.td,{children:"The HTTP method in the request is not supported by the resource."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"409"})," CONFLICT"]}),(0,r.jsx)(t.td,{children:"There is a conflict with the data that has been provided and the change has been abandoned."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"details",children:"Details"}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"/docs/next/advanced/api/api-reference",children:"full API reference"})," is available."]}),"\n",(0,r.jsx)(i.A,{})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3514:(e,t,s)=>{s.d(t,{A:()=>g});s(96540);var r=s(18215),n=s(26972),i=s(28774),a=s(53465),c=s(16654),d=s(21312),o=s(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=s(74848);function u(e){let{href:t,children:s}=e;return(0,h.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",l.cardContainer),children:s})}function x(e){let{href:t,icon:s,title:n,description:i}=e;return(0,h.jsxs)(u,{href:t,children:[(0,h.jsxs)(o.A,{as:"h2",className:(0,r.A)("text--truncate",l.cardTitle),title:n,children:[s," ",n]}),i&&(0,h.jsx)("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const s=(0,n.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,d.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,h.jsx)(x,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function j(e){let{item:t}=e;const s=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.cC)(t.docId??void 0);return(0,h.jsx)(x,{href:t.href,icon:s,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(j,{item:t});case"category":return(0,h.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function m(e){let{className:t}=e;const s=(0,n.$S)();return(0,h.jsx)(g,{items:s.items,className:t})}function g(e){const{items:t,className:s}=e;if(!t)return(0,h.jsx)(m,{...e});const i=(0,n.d1)(t);return(0,h.jsx)("section",{className:(0,r.A)("row",s),children:i.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(f,{item:e})},t)))})}},53465:(e,t,s)=>{s.d(t,{W:()=>o});var r=s(96540),n=s(44586);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function o(){const e=d();return{selectMessage:(t,s)=>function(e,t,s){const r=e.split("|");if(1===r.length)return r[0];r.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=s.select(t),i=s.pluralForms.indexOf(n);return r[Math.min(i,r.length-1)]}(s,t,e)}}},31329:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/web-api-resources-dark-c7cd97fa8b527ee1d1afbb2e81473d6d.svg"},7932:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/web-api-resources-06c0bce599ac1c3e63b59c70547eadc7.svg"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var r=s(96540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);