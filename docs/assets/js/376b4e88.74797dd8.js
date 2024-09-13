"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[5585],{5822:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var a=i(5893),r=i(1151);const d={sidebar_position:1},n="Data Providers",o={id:"concepts/data-providers",title:"Data Providers",description:"Data Providers are the organisations/people who have agreed to provide data to LinXmart. All data received by the system must be associated with (i.e. belong to) a Data Provider. Event Types and Datasources both exist within the context of a Data Provider.",source:"@site/docs/concepts/data-providers.md",sourceDirName:"concepts",slug:"/concepts/data-providers",permalink:"/docs/concepts/data-providers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/docs/category/concepts"},next:{title:"Event Types",permalink:"/docs/concepts/event-types"}},s={},c=[{value:"Adding a Data Provider",id:"adding-a-data-provider",level:2},{value:"Editing a Data Providers details",id:"editing-a-data-providers-details",level:2},{value:"Deleting a Data Provider",id:"deleting-a-data-provider",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"data-providers",children:"Data Providers"}),"\n",(0,a.jsxs)(t.p,{children:["Data Providers are the organisations/people who have agreed to provide data to LinXmart. All data received by the system must be associated with (i.e. belong to) a Data Provider. ",(0,a.jsx)(t.a,{href:"/docs/concepts/event-types",children:"Event Types"})," and ",(0,a.jsx)(t.a,{href:"/docs/concepts/data-sources",children:"Datasources"})," both exist within the context of a Data Provider."]}),"\n",(0,a.jsx)(t.p,{children:"Data Providers must be added to LinXmart through the Web Interface before their data can be accepted."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Data Providers",src:i(3711).Z+"",width:"935",height:"360"})}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.mdxAdmonitionTitle,{}),(0,a.jsx)(t.p,{children:"The complete set of data providers and their settings (including Event Types and Datasources) can be exported to a file, which can then be imported into another LinXmart instance or used as a backup to the data providers configuration."}),(0,a.jsxs)(t.p,{children:["More details found at ",(0,a.jsx)(t.a,{href:"../guides/import-export-data-providers",children:"Import / Export Data Providers"}),"."]})]}),"\n",(0,a.jsx)(t.h2,{id:"adding-a-data-provider",children:"Adding a Data Provider"}),"\n",(0,a.jsxs)(t.p,{children:["To add a Data Provider to LinXmart, click on the ",(0,a.jsx)(t.code,{children:"Providers"})," tab at the top of the Web Interface.\r\nA list of the current Data Providers in the system is shown. Click on ",(0,a.jsx)(t.code,{children:"Add Data Provider"}),"  at the bottom of the screen."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add Data Provider",src:i(5941).Z+"",width:"933",height:"269"})}),"\n",(0,a.jsx)(t.p,{children:"The following fields are presented to register a Data Provider with LinXmart."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Field"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Code"}),(0,a.jsx)(t.td,{children:"This is a unique identifier assigned to each Data Provider. It is used to identify the data provider in the envelope\u2019s manifest file. This field is required and the value cannot be changed after creation."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Organisation Name"}),(0,a.jsx)(t.td,{children:"This is the organisation providing the data. This field is required."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Contact Name"}),(0,a.jsx)(t.td,{children:"The name of the individual to contact regarding the provided data."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Email Address"}),(0,a.jsx)(t.td,{children:"The email address of the individual to contact regarding the provided data."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Telephone Number"}),(0,a.jsx)(t.td,{children:"The telephone number of the individual to contact regarding the provided data."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"editing-a-data-providers-details",children:"Editing a Data Providers details"}),"\n",(0,a.jsx)(t.p,{children:"A Data Provider\u2019s contact details can be edited through the Web Interface by clicking the option next to a Provider on the 'Data Providers' screen. The Organisation Name, Contact Name, Email Address and Telephone Number can be edited. The Code is readonly and cannot be changed after creation. The history of previous details is not stored."}),"\n",(0,a.jsx)(t.h2,{id:"deleting-a-data-provider",children:"Deleting a Data Provider"}),"\n",(0,a.jsxs)(t.p,{children:["A Data Provider can be removed from the system by an operator with sufficient privileges. Deleting a Data Provider will trigger the deletion of PII data for all records in Event Types under this Provider. More information on this can be found in the ",(0,a.jsx)(t.a,{href:"../guides/destroying-record-data",children:"Destroying record-level data"})," guide. Deleted Data Providers will not be visible from the Web Interface, but their information remains stored in the database."]})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5941:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/data-provider-add-dafb7f02ab35a084762bb0919009ea19.png"},3711:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/data-provider-list-3cfbb3eaba43fb0f4452eca5a07650a9.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>n});var a=i(7294);const r={},d=a.createContext(r);function n(e){const t=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),a.createElement(d.Provider,{value:t},e.children)}}}]);