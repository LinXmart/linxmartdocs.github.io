"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[2593],{2634:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(5893),n=i(1151);const r={sidebar_position:1},s="Tutorial - Getting started",o={id:"tutorials/tutorial-getting-started",title:"Tutorial - Getting started",description:"This tutorial-style introduction to LinXmart focuses on the basic features LinXmart requires to link one or two files together and only briefly touches on the more complex features that are useful to a linkage unit.",source:"@site/docs/tutorials/tutorial-getting-started.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-getting-started",permalink:"/docs/tutorials/tutorial-getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"}},d={},c=[{value:"Part 1 \u2013 First Linkage",id:"part-1--first-linkage",level:2},{value:"Creating a Linkage Project",id:"creating-a-linkage-project",level:3},{value:"Adding data to a Linkage Project",id:"adding-data-to-a-linkage-project",level:3},{value:"Linking your first file",id:"linking-your-first-file",level:3},{value:"Part 2 \u2013 Second Linkage",id:"part-2--second-linkage",level:2},{value:"Registering a Data Provider",id:"registering-a-data-provider",level:3},{value:"Registering an Event Type",id:"registering-an-event-type",level:3},{value:"Adding data to a Linkage Project",id:"adding-data-to-a-linkage-project-1",level:3},{value:"Linking our second file",id:"linking-our-second-file",level:3},{value:"Where is the data stored?",id:"where-is-the-data-stored",level:3},{value:"Part 3 \u2013 Data Extraction",id:"part-3--data-extraction",level:2},{value:"Creating an Extraction Project",id:"creating-an-extraction-project",level:3},{value:"Requesting the linkage map",id:"requesting-the-linkage-map",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"tutorial---getting-started",children:"Tutorial - Getting started"}),"\n",(0,a.jsx)(t.p,{children:"This tutorial-style introduction to LinXmart focuses on the basic features LinXmart requires to link one or two files together and only briefly touches on the more complex features that are useful to a linkage unit."}),"\n",(0,a.jsx)(t.p,{children:"The Tutorial is aimed at new operators, outlining key concepts and guiding through a series of linkages."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"This Tutorial can be used with any LinXmart deployment but requires a user with permissions to create Data Providers, Event Types and Linkage Projects, as well as loading data for linkage and extracting the linkage map."})}),"\n",(0,a.jsx)(t.p,{children:"Before you begin using LinXmart, you will need access to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"LinXmart via the web interface"}),"\n",(0,a.jsxs)(t.li,{children:["Tutorial datasets - ",(0,a.jsx)(t.a,{target:"_blank",href:i(7487).Z+"",children:"download the tutorial data"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"part-1--first-linkage",children:"Part 1 \u2013 First Linkage"}),"\n",(0,a.jsx)(t.p,{children:"This first part of the Tutorial will guide you through setting up and conducting a linkage."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 1:"})," Connect to the LinXmart web interface by typing in the LinXmart web address. You will see a screen similar to this:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Home Page",src:i(7965).Z+"",width:"1614",height:"1311"})}),"\n",(0,a.jsx)(t.p,{children:"The LinXmart web interface is used by operators of LinXmart to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Enter and manage information about the datasets being provided for linkage"}),"\n",(0,a.jsx)(t.li,{children:"Set the linkage strategy or strategies"}),"\n",(0,a.jsx)(t.li,{children:"Submit data for linkage and other operation"}),"\n",(0,a.jsx)(t.li,{children:"Determine the current status of the system and the job queue"}),"\n",(0,a.jsx)(t.li,{children:"Run reporting"}),"\n",(0,a.jsx)(t.li,{children:"Perform manual quality checks."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"By using the tabs across the top of the page, we can navigate the web interface."}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-linkage-project",children:"Creating a Linkage Project"}),"\n",(0,a.jsx)(t.p,{children:"Before data can be linked, we first have to define some metadata in the system \u2013 i.e. information about the data to be used and the linkages we wish to conduct."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 2:"})," Click on the ",(0,a.jsx)(t.code,{children:"PROJECTS"})," tab at the top of the web page."]}),"\n",(0,a.jsxs)(t.p,{children:["This screen lists all the Linkage Projects that have been created in the system. Each ",(0,a.jsx)(t.a,{href:"/docs/concepts/linkage-projects",children:"Linkage Project"})," specifies which datasets will be linked. We will now create a new Linkage Project."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 3:"})," Click on the ",(0,a.jsx)(t.code,{children:"Add Project"})," link at the bottom of the page."]}),"\n",(0,a.jsxs)(t.p,{children:["Enter the Linkage Project details in the fields provided. For the purposes of this Tutorial we will assume the Project`s Code is ",(0,a.jsx)(t.code,{children:"Tutorial"}),". As the value for Code must be unique in the system, another value will need to be used if ",(0,a.jsx)(t.code,{children:"Tutorial"})," has already been used."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add Project",src:i(7352).Z+"",width:"1398",height:"548"})}),"\n",(0,a.jsx)(t.h3,{id:"adding-data-to-a-linkage-project",children:"Adding data to a Linkage Project"}),"\n",(0,a.jsxs)(t.p,{children:["The next thing we need to do before we can link our data is to add a data collection to this newly created Linkage Project. Data collections are called ",(0,a.jsx)(t.a,{href:"/docs/concepts/event-types",children:"Event Types"})," in LinXmart, and they belong to a ",(0,a.jsx)(t.a,{href:"/docs/concepts/data-providers",children:"Data Provider"}),". A single Data Provider can supply multiple Event Types to LinXmart."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 4:"})," Click on the Tutorial project to bring up the Project Details page."]}),"\n",(0,a.jsx)(t.p,{children:"You are presented with an empty project. Before data can be added, one or more Event Types need to be attached to the Project."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Empty Project",src:i(5364).Z+"",width:"1614",height:"1359"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 5:"})," Click on the ",(0,a.jsx)(t.code,{children:"Attach some event types"})," link presented to you below the record stats for the empty project. Check the tickbox next to Data Provider ",(0,a.jsx)(t.code,{children:"WA Department of Health (WA-DOH)"})," and Event Type ",(0,a.jsx)(t.code,{children:"WA Hospital Records (WAMORB)"})," and click ",(0,a.jsx)(t.code,{children:"Attach"}),". Note that this Data Provider and Event Type have already been defined within the system for this tutorial."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Attach Event Type",src:i(8501).Z+"",width:"1261",height:"351"})}),"\n",(0,a.jsx)(t.h3,{id:"linking-your-first-file",children:"Linking your first file"}),"\n",(0,a.jsxs)(t.p,{children:["We have now added sufficient information into LinXmart to perform our first linkage. We will link the ",(0,a.jsx)(t.em,{children:"WAHospital.txt"})," dataset found in the Tutorial Data folder. You may wish to view this file in a text editor to see its contents. It is a comma delimited file contains personal identifiers and a unique record identifier. The format of this file (called the ",(0,a.jsx)(t.em,{children:"Import Format"}),") has already been defined within the system."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 6:"})," Click the ",(0,a.jsx)(t.code,{children:"Load"})," icon on the WA Hospital Records row on the Event Type Data Sources page. (To reach this page if you are not already on it, select ",(0,a.jsx)(t.code,{children:"Data Sources"})," under the list of event types on the Tutorial Linkage Project main page.) Select the ",(0,a.jsx)(t.code,{children:"Choose File"})," icon, and select the ",(0,a.jsx)(t.em,{children:"WAHospital.txt"})," file from the Tutorial Data folder. Click ",(0,a.jsx)(t.code,{children:"Load"}),". This may take a minute while the dataset is uploaded to the LinXmart server from your local machine."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Load Data",src:i(6561).Z+"",width:"1260",height:"411"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 7:"})," On the Load Data Confirmation screen select ",(0,a.jsx)(t.code,{children:"Load"}),". This will begin the linkage process; its process can be monitored in real-time through the Jobs screen."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 8:"})," Select the ",(0,a.jsx)(t.code,{children:"JOBS"})," tab at the top of the screen. Next select the ",(0,a.jsx)(t.code,{children:"All Jobs"})," sub-tab."]}),"\n",(0,a.jsxs)(t.p,{children:["The jobs tab shows all the jobs that have been carried out in the system. Each linkage will result in a series of jobs being carried out, corresponding to the different stages of the linkage process. The ",(0,a.jsx)(t.code,{children:"All Envelopes"})," sub-tab groups these jobs together for each linkage or other task, while the ",(0,a.jsx)(t.code,{children:"All Jobs"})," tab shows these separately."]}),"\n",(0,a.jsx)(t.p,{children:"As the linkage is conducted, information regarding the current job's status will be updated here."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Jobs Page",src:i(5790).Z+"",width:"1614",height:"1359"})}),"\n",(0,a.jsx)(t.p,{children:"This data in this file was internally linked or de-duplicated, identifying records within the file belonging to the same person. As there were no other datasets in the Project, this is the only linkage that took place."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 9:"})," Click on the ",(0,a.jsx)(t.code,{children:"PROJECTS"})," tab and go back to the Linkage Project that was created."]}),"\n",(0,a.jsx)(t.p,{children:"The dashboard will now reflect the new data, showing you the records that were added, pairs created and groups (unique individuals) that were found."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Project Page",src:i(6065).Z+"",width:"1614",height:"1359"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 10:"})," In the Linkages section below the dashboard click on the report icon in the Options column for the linkage you just ran."]}),"\n",(0,a.jsx)(t.p,{children:"The Linkage Report details information on the changes made to the system for this particular Envelope, including storing a snapshot of the configuration used."}),"\n",(0,a.jsx)(t.p,{children:"Take your time to read through the report."}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Congratulations, you have just completed your first linkage!"})}),"\n",(0,a.jsx)(t.h2,{id:"part-2--second-linkage",children:"Part 2 \u2013 Second Linkage"}),"\n",(0,a.jsx)(t.p,{children:"We are now going to link another dataset, this time from a new Data Provider. This dataset is not currently recognised by the system.\r\nBefore LinXmart can process data from a Data Provider, that Provider must be registered in LinXmart. In the first part of the Tutorial, we had already completed that task for you."}),"\n",(0,a.jsx)(t.h3,{id:"registering-a-data-provider",children:"Registering a Data Provider"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 1:"})," Click on the ",(0,a.jsx)(t.code,{children:"PROVIDERS"})," tab on the LinXmart web interface."]}),"\n",(0,a.jsx)(t.p,{children:"You will see that the Data Provider listed in the Envelope's manifest file for your first linkage job appears here."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 2:"})," Click on the ",(0,a.jsx)(t.code,{children:"Add Data Provider"})," button at bottom of screen. Enter the Data Provider details as shown below, clicking ",(0,a.jsx)(t.code,{children:"Save"})," when completed."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add Data Provider",src:i(8930).Z+"",width:"1261",height:"356"})}),"\n",(0,a.jsx)(t.p,{children:"The Code field is used by LinXmart to identify this Data Provider. It must be unique."}),"\n",(0,a.jsx)(t.h3,{id:"registering-an-event-type",children:"Registering an Event Type"}),"\n",(0,a.jsx)(t.p,{children:"Along with registering a Data Provider, details of the data collections they will provide also need to be registered. These are called Event Types in LinXmart."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 3:"})," To add an Event Type for the Data Provider NSW-DOH previously created, click on the ",(0,a.jsx)(t.code,{children:"Edit"})," button for the NSW-DOH data provider on the LinXmart Providers screen."]}),"\n",(0,a.jsx)(t.p,{children:"The Edit Data Provider Details screen will be displayed as below."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Edit Data Provider",src:i(1185).Z+"",width:"1614",height:"1359"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 4:"})," Click on the ",(0,a.jsx)(t.code,{children:"Add New Event Type for this Data Provider"})," link at the bottom of the page.\r\nEnter the fields as shown below and click ",(0,a.jsx)(t.code,{children:"Save"})," when completed."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add Event Type",src:i(9410).Z+"",width:"1262",height:"317"})}),"\n",(0,a.jsx)(t.p,{children:"The next step is to add a Data Source to this Event Type. A Data Source describes where the data files come from and what the data file looks like."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 5:"})," Select ",(0,a.jsx)(t.code,{children:"Add New Data Source for this Event Type"})," from the Edit Event Type for Data Provider screen.\r\nEnter the fields as shown below."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add Data Source",src:i(4659).Z+"",width:"1257",height:"587"})}),"\n",(0,a.jsx)(t.p,{children:"LinXmart has two data source types; data can be read from delimited text files, or it can be read directly from SQL tables. For this tutorial data is read from a text file (Delimited File Data Source)."}),"\n",(0,a.jsxs)(t.p,{children:["The Import Format selected here tells the system about each field found within the data file and their position (Index) within the file. The selected Import Format has already been created for this Tutorial. When linking our own data, you will most likely need to create a specific import format, which can be done by clicking the ",(0,a.jsx)(t.code,{children:"Add"})," button on this screen."]}),"\n",(0,a.jsxs)(t.p,{children:["Step 6:\tClick ",(0,a.jsx)(t.code,{children:"Save"})," to complete. The Data Source details and Import Format will be shown."]}),"\n",(0,a.jsx)(t.h3,{id:"adding-data-to-a-linkage-project-1",children:"Adding data to a Linkage Project"}),"\n",(0,a.jsxs)(t.p,{children:["The last step before we can link a file from our new Event Type is to add this Event Type to our Linkage Project. The ",(0,a.jsx)(t.code,{children:"Tutorial"})," Linkage Project created in Part 1 is where we will add our new Event Type."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 7:"})," Click on the ",(0,a.jsx)(t.code,{children:"PROJECTS"})," tab at the top of the LinXmart web interface. Then click on the ",(0,a.jsx)(t.code,{children:"Tutorial"})," project to bring up the Project Details screen."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 8:"})," Click on the ",(0,a.jsx)(t.code,{children:"Data Sources"})," link below the list of Event Types. Then click ",(0,a.jsx)(t.code,{children:"Attach Event Types"}),". Select the NSW Hospital Records (NSWMORB) row and click ",(0,a.jsx)(t.code,{children:"Attach"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Attach Event Type",src:i(6870).Z+"",width:"1261",height:"352"})}),"\n",(0,a.jsx)(t.p,{children:"We have now set up the metadata for our second Envelope. Any future requests to link records from this dataset will not require any more metadata changes."}),"\n",(0,a.jsx)(t.p,{children:"From the Tutorial project screen we can also change the match configuration \u2013 the settings used by our linkage engine to link records. Each linkage project has its own match configuration which can be modified through the Web Interface. LinXmart uses a probabilistic linkage approach, and associated parameters (blocks, comparison fields, weights, thresholds) can all be modified here. A default match configuration is provided for every Linkage Project that is created in the system."}),"\n",(0,a.jsx)(t.h3,{id:"linking-our-second-file",children:"Linking our second file"}),"\n",(0,a.jsx)(t.p,{children:"It is now time to link our second data file."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 9:"})," As previously, click the ",(0,a.jsx)(t.code,{children:"Load"})," icon on the ",(0,a.jsx)(t.code,{children:"NSW Hospital Records"})," row on the Event Type Data Sources page. Select the ",(0,a.jsx)(t.code,{children:"Choose File"})," icon, and select the ",(0,a.jsx)(t.em,{children:"NSWHospital.txt"})," file from the Tutorial Data folder. Click ",(0,a.jsx)(t.code,{children:"Load"}),". This may take a minute while the dataset is uploaded to the LinXmart server from your local machine. On the Load Data Confirmation screen select ",(0,a.jsx)(t.code,{children:"Load"}),". This will begin the linkage process; its process can be monitored in real-time through the Jobs screen."]}),"\n",(0,a.jsx)(t.p,{children:"This linkage will both internally link (de-duplicate) the incoming dataset and link it to all other datasets in the chosen linkage project. In this case, it will link it against all records in the WA hospital dataset we previously added. The linkage map, outlining which inputted records belong to the same person, will automatically be updated as a part of this linkage."}),"\n",(0,a.jsx)(t.h3,{id:"where-is-the-data-stored",children:"Where is the data stored?"}),"\n",(0,a.jsx)(t.p,{children:"The linkage map, as well as the input records and the pairs created through linkage, are all stored in the LinXmart database. The metadata information we have added to the system is also stored here. Some of the information stored in the LinXmart database is not directly accessible through the Web interface. The next part of the Tutorial will explain how to extract the linkage map to supply to researchers."}),"\n",(0,a.jsx)(t.p,{children:"There are situations where access to the raw data by operators would be useful. This includes validating consistency, performing specific home-grown quality checks, and generating custom reports. Direct access to the database can be provided by your administrator. Standalone programs such as SQL Server Management Studio can be used to directly query the database; and, if your institution uses a statistical package such as SAS or SPSS, these can also access the data directly, with LinXmart database tables appearing as datasets within these products."}),"\n",(0,a.jsx)(t.h2,{id:"part-3--data-extraction",children:"Part 3 \u2013 Data Extraction"}),"\n",(0,a.jsx)(t.p,{children:"Now that we have linked two datasets, we are going to extract data from the system."}),"\n",(0,a.jsx)(t.p,{children:"LinXmart has been built to service researchers with linked data. To do this, a method of extracting linked data information (i.e. linkage maps) has been built into LinXmart. LinXmart maintains a complete historical record of all data, allowing linkage maps to be extracted consistently at specific points in time. This is achieved through Extraction Projects which will extract linkage maps as they were at the date and time the Extraction Project was created."}),"\n",(0,a.jsx)(t.p,{children:"In LinXmart an Extraction Project is defined within a Linkage Project. A Linkage Project (a container for linking data sets) can have multiple Extraction Projects."}),"\n",(0,a.jsx)(t.p,{children:"Now we are going to create an Extraction Project."}),"\n",(0,a.jsx)(t.h3,{id:"creating-an-extraction-project",children:"Creating an Extraction Project"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 1:"})," Click on the ",(0,a.jsx)(t.code,{children:"PROJECTS"})," tab on the LinXmart web interface. Then click ",(0,a.jsx)(t.code,{children:"View Details"})," on the Tutorial as before. Next click ",(0,a.jsx)(t.code,{children:"Add Extraction Project"})," near the bottom of the screen. Then type in the details below, and click ",(0,a.jsx)(t.code,{children:"Save"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Add Extraction Project",src:i(4661).Z+"",width:"1261",height:"285"})}),"\n",(0,a.jsx)(t.p,{children:"Data can be extracted using this Extraction Project at any time. As we have not specified 'enduring' linkage keys, even if additional datasets are added to the Linkage Project, any requested extractions that refer to this Extraction Project will revert back to how the linkage map looked at the moment this Extraction Project was created - a snapshot of the linkage map. If you were to specify the Extraction Project to use 'enduring' linkage keys, they would be consistent across the life of the Linkage Project."}),"\n",(0,a.jsx)(t.h3,{id:"requesting-the-linkage-map",children:"Requesting the linkage map"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 2:"})," Click on the ",(0,a.jsx)(t.code,{children:"Request New Data Extraction"})," link at the bottom of the Extraction Project page.\r\nYou are shown a list of Event Types that have been attached to the Linkage Project. While you can request the linkage map for all data at once, the extraction results are separated based on Event Type and will be available in different files."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 3:"})," Select the checkboxes next to each Event Type, then click the ",(0,a.jsx)(t.code,{children:"Request"})," button."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Request Data Extraction",src:i(9672).Z+"",width:"1261",height:"386"})}),"\n",(0,a.jsx)(t.p,{children:"This will add a job to the queue for the extraction of each Event Type selected. You can see the progress of these on the All Jobs page. When the jobs are completed, the Extraction Project Details page will display the results in a table."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Extraction Project",src:i(302).Z+"",width:"1614",height:"1359"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Step 4:"})," Click the ",(0,a.jsx)(t.code,{children:"Download Results"})," button in the Options column of one of the extraction results. Open the downloaded zip file and view the file named ",(0,a.jsx)(t.em,{children:"data-extract.csv"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Inside this file, you will see five columns. The first column is the linkage project code \u2013 in this case, it will be ",(0,a.jsx)(t.code,{children:"Tutorial"}),". The second column is the unique record identifier. These are the same identifiers found in the file that was originally loaded into LinXmart. The fourth column is the generated person identifier created by LinXmart. LinXmart does not release the person identifiers used internally within the system. Instead, LinXmart gives out different person identifiers for each Extraction Project. This provides an additional layer of security, allowing only recipients of linkage maps from the same Extraction Project to join their datasets together. The fifth column is only applicable for Project to Project linkages and can be ignored for now."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"This concludes the Tutorial \u2013 you have just linked your first datasets with LinXmart. Well done!"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7487:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/files/TutorialData-073deb5b970c9be001811c46566843e1.zip"},8930:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/add-data-provider-328f6fe0f8a4acacafd05e3f92d4ce25.png"},4659:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/add-data-source-db3838fde5936dad94c84d008cf44493.png"},9410:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/add-event-type-2b4d0f8134a177b989a7101a1bb62594.png"},4661:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/add-extraction-project-bef52da8f19b2e57293bf31dd35aa151.png"},7352:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/add-project-55929d4af51f006eabcb96104fbcf881.png"},8501:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/attach-event-type-7b857d211f50d1c607af826f5585f56a.png"},6870:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/attach-event-type2-2c48e621462a7916c6673e62de2dca8e.png"},1185:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/edit-data-provider-7671f977a3efdb25cbb57e93494bb337.png"},302:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/extraction-project-view-36078a9e6f653ffd402cee372d1f76b7.png"},7965:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/home-page-bfa71e364175c79bfec5996d0644aa14.png"},5790:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/jobs-page-af4200d59f60c95e2659305a31c3b157.png"},6561:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/load-data-17143f023f78ed14ace985605d7ab47a.png"},6065:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/project-page-linkage-3be821ac649fff546607b9192f189692.png"},5364:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/project-page-new-19525bb270302275069224c376e5eb36.png"},9672:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/request-data-extraction-8e5192c9128554300949d6af55799a51.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>s});var a=i(7294);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);