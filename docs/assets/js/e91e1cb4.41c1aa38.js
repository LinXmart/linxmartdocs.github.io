"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[8111],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(a),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:3},i="Loading data directly from a database",d={unversionedId:"guides/loading-data/loading-from-database",id:"guides/loading-data/loading-from-database",title:"Loading data directly from a database",description:"Loading data directly from a database requires some additional context, such as the intended Linkage Project and the Event Type. The Event Type also requires a configured Data Source that supports SQL Tables.",source:"@site/docs/guides/loading-data/loading-from-database.md",sourceDirName:"guides/loading-data",slug:"/guides/loading-data/loading-from-database",permalink:"/docs/guides/loading-data/loading-from-database",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Loading in a delimited text file",permalink:"/docs/guides/loading-data/loading-text-file"},next:{title:"Destroying record-level data",permalink:"/docs/guides/destroying-record-data"}},l={},s=[{value:"Load new data for linkage",id:"load-new-data-for-linkage",level:2},{value:"Load data from a specific data source",id:"load-data-from-a-specific-data-source",level:2}],c={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"loading-data-directly-from-a-database"},"Loading data directly from a database"),(0,r.kt)("p",null,"Loading data directly from a database requires some additional context, such as the intended ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/linkage-projects"},"Linkage Project")," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/event-types"},"Event Type"),". The Event Type also requires a configured ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/data-sources"},"Data Source")," that supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/data-sources#microsoft-sql-table-data-source"},"SQL Tables"),"."),(0,r.kt)("p",null,"Loading data directly from a SQL table triggered from within a Linkage Project, and can be done in two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Directly from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Linkages")," panel on a specific Linkage Project summary page"),(0,r.kt)("li",{parentName:"ul"},"From the ",(0,r.kt)("inlineCode",{parentName:"li"},"Event Type Data Sources")," page of a specific Linkage Project")),(0,r.kt)("h2",{id:"load-new-data-for-linkage"},"Load new data for linkage"),(0,r.kt)("p",null,"On the summary page for a Linkage Project, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Linkages")," panel that will contain a list of all linkages that have been run in the context of the project. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Linkages",src:a(5868).Z,width:"1409",height:"490"})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Load New Data For Linkage")," button/link below this list."),(0,r.kt)("p",null,"You are presented with a form where you will need to choose:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/event-types"},"Event Type")," to classify the data"),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("a",{parentName:"li",href:"/docs/concepts/data-sources"},"Data Source")," that defines the format of the SQL table")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Load Data",src:a(6681).Z,width:"1402",height:"366"})),(0,r.kt)("p",null,"Once each of these fields has been selected, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," button to confirm the data is ready to link. You will then be presented with a summary and confirmation form."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Load Data Confirm",src:a(1981).Z,width:"1403",height:"640"})),(0,r.kt)("p",null,"All SQL table data loads are presented internally as 'Envelopes'. At this point you have the ability to give the new Envelope a custom name or you can leave the default one that was generated for you. Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," button here to trigger the direct access of data for linkage."),(0,r.kt)("h2",{id:"load-data-from-a-specific-data-source"},"Load data from a specific data source"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Event Type Data Sources")," page for a Linkage Project lists all ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/event-types"},"Event Types")," and their associated ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/data-sources"},"Data Sources")," that are attached to the project."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Project Data Sources",src:a(6689).Z,width:"1401",height:"562"})),(0,r.kt)("p",null,"For every ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/data-sources"},"Data Source")," that supports a SQL table, an load data icon is shown in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Options")," column. Click on this button and you will be presented with the 'Load Data' form, as you are when ",(0,r.kt)("a",{parentName:"p",href:"#load-new-data-for-linkage"},"triggered from the Linkages panel"),". This time, however, the Event Type and Data Source are already populated with the required items."))}p.isMDXComponent=!0},5868:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkages-list-d62b867534843726049165d9cd98f362.png"},1981:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkages-load-data-sql-confirm-6a9cbb401f5927555047e8074d8407d4.png"},6681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linkages-load-data-sql-869cf6e3f8f25d3018c116c968dcbd48.png"},6689:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project-datasources-sql-e498d3d48e83e9264342885fb4aff0a1.png"}}]);