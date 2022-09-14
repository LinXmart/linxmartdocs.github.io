"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[1372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Overview",s={unversionedId:"overview",id:"overview",title:"Overview",description:"What is LinXmart?",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Concepts",permalink:"/docs/category/concepts"}},l={},c=[{value:"What is LinXmart?",id:"what-is-linxmart",level:2},{value:"Not just a linkage engine",id:"not-just-a-linkage-engine",level:3},{value:"Enterprise-grade",id:"enterprise-grade",level:3},{value:"Privacy preserving linkage",id:"privacy-preserving-linkage",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("h2",{id:"what-is-linxmart"},"What is LinXmart?"),(0,r.kt)("p",null,"LinXmart is a secure, fast and scalable record linkage system with sophisticated data management capabilities. It has been developed to deliver large scale production data linkage services to support leading edge research. LinXmart has the capability of supporting multiple linkage projects and multiple users, and many features can be configured to suit varying environments. "),(0,r.kt)("p",null,"Central to LinXmart\u2019s capabilities is record linkage. The system determines links between records based on the probabilistic matching of demographic information. Records which are determined to belong to the same person are grouped together and stored in a project linkage map. Project-specific masked identifiers from this map are extracted and provided to data providers to enable the release of non-identifiable data for research. "),(0,r.kt)("p",null,"There are some key design features that differentiate LinXmart from other linkage products. These are outlined below. "),(0,r.kt)("h3",{id:"not-just-a-linkage-engine"},"Not just a linkage engine"),(0,r.kt)("p",null,"Along with a fast, fully customisable probabilistic linkage engine, LinXmart provides a raft of important features for managing and maintaining linkage data. It provides ongoing linkage capability for all linkage projects, allowing any number of datasets to be linked together. This allows complex, long-running linkage projects to be managed, with new records added incrementally over time as data collections are updated and new collections come on stream. Multiple linkage projects can be created, with each project siloed and data only linked within a project. LinXmart has been designed to provide for a range of common linkage scenarios, including the linking of client-provided data to an ongoing linkage map. The software handles both static and dynamic records, where field values can change over time. It has a suite of tools for ensuring high linkage quality. The full history of all changes to the linkage map is stored, with the ability to effectively \u2018roll back\u2019 to any point in time to re-establish the groupings. LinXmart can also manage all data extractions for research projects, providing masked project-specific linkage keys for any project. "),(0,r.kt)("h3",{id:"enterprise-grade"},"Enterprise-grade"),(0,r.kt)("p",null,"LinXmart is designed to be secure, scalable and fast. Authentication occurs through Active Directory or Azure Active Directory, with granular customisable role-based permissions, including project-based access. It has been developed within an ISO/ISEC 27001 certified Information Security Management System to ensure the systems security, continuity and ongoing maintenance. The software is multi-user, with a queue-based job management system. LinXmart has been designed for deployment on premises or within the Azure cloud. The system allows automated, end-to-end linkage processing, or alternately a bespoke approach with operator intervention. LinXmart includes a web API for integration and automation, providing functions to configure projects, ingest data for linkage and extract linkage maps. "),(0,r.kt)("h3",{id:"privacy-preserving-linkage"},"Privacy preserving linkage"),(0,r.kt)("p",null,"LinXmart provides the ability to conduct privacy preserving linkage; linkage that occurs on encoded personal identifiers. This allows linkage to occur without the exchange of personally identifying information, and has been used where legal or privacy concerns have prevented the release of data. Numerous evaluations of LinXmart\u2019s privacy preserving technology have shown linkage results equalling that achieved by standard un-encoded linkage. To carry out privacy preserving linkage, data is encoded at source using LinXmart\u2019s own Simple Envelope Builder \u2013 usable as a separate stand-alone desktop application, or provided as NuGet packages that can be integrated into your own .NET applications."))}p.isMDXComponent=!0}}]);