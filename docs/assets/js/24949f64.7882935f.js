"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[3160],{3227:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(5893),d=i(1151);const r={sidebar_position:4},a="Import Formats",s={id:"concepts/import-formats",title:"Import Formats",description:"The Import Format provides a description of the layout of the data files to be received for a Data Source. Each Data Source has one import format associated with it, and it is assumed that all files/data received for a single Data Source be in the same format. A Data Source's import format can be modified if the format changes over time.",source:"@site/docs/concepts/import-formats.md",sourceDirName:"concepts",slug:"/concepts/import-formats",permalink:"/docs/concepts/import-formats",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Sources",permalink:"/docs/concepts/data-sources"},next:{title:"Envelopes",permalink:"/docs/concepts/envelopes"}},o={},l=[{value:"Import Format Types",id:"import-format-types",level:2},{value:"By Index (Delimited) Format",id:"by-index-delimited-format",level:3},{value:"By Name (Delimited) Format",id:"by-name-delimited-format",level:3},{value:"Fixed Width Format",id:"fixed-width-format",level:3},{value:"Creating an Import Format",id:"creating-an-import-format",level:2},{value:"Adding Columns to an Import Format",id:"adding-columns-to-an-import-format",level:2},{value:"Field Types",id:"field-types",level:3},{value:"Example dates",id:"example-dates",level:3},{value:"Editing an Import Format",id:"editing-an-import-format",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"import-formats",children:"Import Formats"}),"\n",(0,n.jsxs)(t.p,{children:["The Import Format provides a description of the layout of the data files to be received for a ",(0,n.jsx)(t.a,{href:"/docs/concepts/data-sources",children:"Data Source"}),". Each Data Source has one import format associated with it, and it is assumed that all files/data received for a single Data Source be in the same format. A Data Source's import format can be modified if the format changes over time."]}),"\n",(0,n.jsx)(t.p,{children:"The same Import Format can be used for different event types from the same or different Data Providers, provided the file layout is identical. Typically, new Import Formats are required for each new Event Type."}),"\n",(0,n.jsx)(t.p,{children:"Import formats can be edited, but never deleted from the system."}),"\n",(0,n.jsx)(t.h2,{id:"import-format-types",children:"Import Format Types"}),"\n",(0,n.jsx)(t.p,{children:"LinXmart currently accepts text files only, containing data in either delimited or fixed-width format. LinXmart expects all datasets to contain one record per row, and with each row to have a field that is a unique identifier. LinXmart will also accept ingesting data from SQL tables or views. For these data source types, the format must be specified by index (or ordinal value) or name of the column."}),"\n",(0,n.jsx)(t.h3,{id:"by-index-delimited-format",children:"By Index (Delimited) Format"}),"\n",(0,n.jsx)(t.p,{children:"A delimited file is one in which the fields in each record (such as name, address, date of birth, id, etc.) are separated by a single character, such as a comma or a tab."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Delimited Data",src:i(4713).Z+"",width:"842",height:"27"}),"\r\n",(0,n.jsx)(t.em,{children:"A row of a comma delimited data file."})]}),"\n",(0,n.jsxs)(t.p,{children:["When configuring rows, each field has a specific ",(0,n.jsx)(t.code,{children:"Index"})," value that determines which column it refers to. For delimited data files, such as the one above, this is simply the index of the column specified by the delimiters. For SQL tables, this corresponds to the Ordinal value of the column in the table."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Use this for SQL tables if you want to specify the column by its ordinal position."})}),"\n",(0,n.jsx)(t.h3,{id:"by-name-delimited-format",children:"By Name (Delimited) Format"}),"\n",(0,n.jsx)(t.p,{children:"Delimited files and SQL tables can also use this this setting to determine column mappings. Delimited files must have a header row for this to work."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Delimited Data With Header",src:i(8343).Z+"",width:"813",height:"51"}),"\r\n",(0,n.jsx)(t.em,{children:"A row of a comma delimited data file with a header row."})]}),"\n",(0,n.jsx)(t.p,{children:"For SQL tables, the system will match the name of the Import Format Column with the name of the SQL table column."}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Use this for SQL tables if you want to specify the column by column name."})}),"\n",(0,n.jsx)(t.h3,{id:"fixed-width-format",children:"Fixed Width Format"}),"\n",(0,n.jsx)(t.p,{children:"A fixed width data file is one in which each field is determined by a start and end position in the record. In these files, a field is given a set number of characters (e.g. 20), and for values that are less than 20 characters in length, the remainder are filled with spaces. LinXmart removes these spaces before processing the field."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Fixed-Width Data",src:i(8862).Z+"",width:"940",height:"48"}),"\r\n",(0,n.jsx)(t.em,{children:"Two rows from a fixed width file."})]}),"\n",(0,n.jsx)(t.h2,{id:"creating-an-import-format",children:"Creating an Import Format"}),"\n",(0,n.jsxs)(t.p,{children:["Import formats can only be created while adding or editing a ",(0,n.jsx)(t.a,{href:"/docs/concepts/data-sources",children:"Data Source"})," by clicking ",(0,n.jsx)(t.code,{children:"Add"})," next to the ",(0,n.jsx)(t.code,{children:"Import Format"})," field."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Add Import Format",src:i(4308).Z+"",width:"932",height:"209"})}),"\n",(0,n.jsx)(t.p,{children:"The following fields must be completed when creating a new Import Format through the Web Interface."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Name"}),(0,n.jsx)(t.td,{children:"Each Import Format must be given a unique name, and will thereafter appear in the drop-down list of previously created import formats."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Column Positions"}),(0,n.jsxs)(t.td,{children:["For delimited files or SQL tables, select ",(0,n.jsx)(t.code,{children:"By Index"})," or ",(0,n.jsx)(t.code,{children:"By Name"}),". Alternatively, select ",(0,n.jsx)(t.code,{children:"Fixed Width"})," as explained above."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Column Validation"}),(0,n.jsx)(t.td,{children:"Gives you the option to validate the existence of all columns in the data source, or to ignore those that are not found."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Click on ",(0,n.jsx)(t.code,{children:"Save"})," and you will be prompted to add columns to this Import Format."]}),"\n",(0,n.jsx)(t.h2,{id:"adding-columns-to-an-import-format",children:"Adding Columns to an Import Format"}),"\n",(0,n.jsxs)(t.p,{children:["A description of each column in the input data that is to be stored in LinXmart is required. A column can be added by selecting the ",(0,n.jsx)(t.code,{children:"Add New Column for this Import Format"})," button."]}),"\n",(0,n.jsx)(t.p,{children:"The following fields will need to be completed:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Linkage Field"}),(0,n.jsx)(t.td,{children:"This informs LinXmart which of its linkage fields will correspond to this column. The drop-down list contains all of the linkage fields that are available. These are listed in Appendix A."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Name"}),(0,n.jsx)(t.td,{children:"This field\u2019s value will default to the Linkage Field name. The operator may override this by using a more representative name.  This is particularly recommended for text fields, and binary fields, and will assist in meaningfully identifying these fields later. An operator-provided name is mandatory for non-linkage fields."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Format"}),(0,n.jsx)(t.td,{children:"This field only appears for some linkage fields. For example, dates can be provided and parsed by the system in a myriad of formats. Below are some example date formats that can be entered. A full list of formats for day, month and year components are provided in Appendix B. Note that month formats are specified in uppercase."})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Additional fields for delimited files:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Index"}),(0,n.jsx)(t.td,{children:"The column number of the field in question. The first field in the file has an index of 1, the second field 2, etc."})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Additional fields for fixed width files:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Start Position"}),(0,n.jsx)(t.td,{children:"The column start position of the field in question."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"End Position"}),(0,n.jsx)(t.td,{children:"The column end position of the field in question \u2013 the position of the last character."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["Most linkage fields have a defined maximum length. LinXmart will notify during processing if the maximum is exceeded and a record was not able to be parsed. When all fields (columns) have been added, click the ",(0,n.jsx)(t.code,{children:"Save"})," button above the list to save the Import Format."]}),"\n",(0,n.jsx)(t.p,{children:"Not all fields in the supplied data file need to be added to the Import Format. Any that are not included as either linkage or non-linkage fields will be ignored."}),"\n",(0,n.jsx)(t.h3,{id:"field-types",children:"Field Types"}),"\n",(0,n.jsxs)(t.p,{children:["An important LinXmart field is the ",(0,n.jsx)(t.code,{children:"Source Unique ID"}),". It is a field in the dataset that contains a unique value for each record in the file. All Import Formats require a Source Unique ID field. It is used by LinXmart to uniquely identify records, and is returned when data is extracted from the system."]}),"\n",(0,n.jsxs)(t.p,{children:["If date of birth is supplied as a single field, this can be added as ",(0,n.jsx)(t.code,{children:"Date of Birth"}),". If it is supplied as components (day, month and year of birth) these can be added separately. However, only full date of birth or the separate components can be added \u2013 not both."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Jurisdictional Linkage Key"})," refers to any field in the dataset that is a unique person identifier (that is, has the same value across different records within the collection belonging to the same person)."]}),"\n",(0,n.jsx)(t.p,{children:"In addition to the named personally identifying fields, there are some additional fields (Text Fields 1-15) that can be used to store any other identifiers for use in linkage."}),"\n",(0,n.jsxs)(t.p,{children:["Non-linkage fields can also be stored in LinXmart. These are not used by LinXmart, but are there for the operator\u2019s reference. To add these, select the value ",(0,n.jsx)(t.code,{children:"(none)"})," for the Linkage Field."]}),"\n",(0,n.jsx)(t.p,{children:"Finally, there also exists a number of Binary Fields. These are used for storing encoded fields in privacy preserving linkage. For more information on privacy preserving linkage, see Section 9."}),"\n",(0,n.jsx)(t.h3,{id:"example-dates",children:"Example dates"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Example date"}),(0,n.jsx)(t.th,{children:"Format code"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"11/08/1986"}),(0,n.jsx)(t.td,{children:"dd/MM/yyyy"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"19860811"}),(0,n.jsx)(t.td,{children:"yyyyMMdd"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1181986 or 11101986"}),(0,n.jsx)(t.td,{children:"ddMyyyy"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"11-AUG-1986"}),(0,n.jsx)(t.td,{children:"dd-MMM-yyyy"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"11-08-86"}),(0,n.jsx)(t.td,{children:"dd-MM-yy"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"editing-an-import-format",children:"Editing an Import Format"}),"\n",(0,n.jsxs)(t.p,{children:["To edit an import format, you must first select to Edit an existing event type that uses the Import Format. From here, the Import Format can be edited by clicking ",(0,n.jsx)(t.code,{children:"Edit"})," next to the Import Format listed. The ",(0,n.jsx)(t.code,{children:"Row Format"})," is the only Import Format metadata field that cannot be changed. Any Import Format Columns (i.e. fields) entries can be changed or deleted, and new fields can be added."]})]})}function c(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8343:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/data-delimited-name-76f5352659d5eae1bcc0357600cf5422.png"},4713:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/data-delimited-85fecb2d989949d69d92fcffeaae4212.png"},8862:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/data-fixedwidth-53ca39fc4a9de41afb30800201a36a55.png"},4308:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/import-format-add-94954906ac137f2e3b93f88ec34b5e8c.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>a});var n=i(7294);const d={},r=n.createContext(d);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);