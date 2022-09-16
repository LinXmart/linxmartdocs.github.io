"use strict";(self.webpackChunklxm_web=self.webpackChunklxm_web||[]).push([[7642],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),h=o(t),d=r,g=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return t?n.createElement(g,i(i({ref:a},p),{},{components:t})):n.createElement(g,i({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=h;var m={};for(var l in a)hasOwnProperty.call(a,l)&&(m[l]=a[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var o=2;o<s;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3635:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>o});var n=t(7462),r=(t(7294),t(3905));const s={sidebar_position:1},i="Defining matching strategies",m={unversionedId:"guides/matching-config",id:"guides/matching-config",title:"Defining matching strategies",description:"LinXmart utilises a probabilistic linkage engine. This engine uses a 'match configuration' that tells it how to compare records, and when to designate two records as a match. Each Linkage Project has a separate match configuration, and a Linkage Project\u2019s match configuration can be modified at any time. After modification, all future linkages will use the new match configuration, while previous linkages will not change.",source:"@site/docs/guides/matching-config.md",sourceDirName:"guides",slug:"/guides/matching-config",permalink:"/docs/guides/matching-config",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Linkage in LinXmart",permalink:"/docs/guides/record-linkage"},next:{title:"Merge vs best-link grouping",permalink:"/docs/guides/grouping-config"}},l={},o=[{value:"The default config",id:"the-default-config",level:2},{value:"Match strategies",id:"match-strategies",level:2},{value:"Blocking",id:"blocking",level:3},{value:"Deterministic strategy",id:"deterministic-strategy",level:3},{value:"Probabalistic strategy",id:"probabalistic-strategy",level:3},{value:"Strategy configuration",id:"strategy-configuration",level:2},{value:"Blocking fields",id:"blocking-fields",level:3},{value:"Matching fields",id:"matching-fields",level:3},{value:"Comparison types",id:"comparison-types",level:3},{value:"Exact",id:"exact",level:4},{value:"Jaro-Winkler",id:"jaro-winkler",level:4},{value:"Numerical (Year)",id:"numerical-year",level:4},{value:"Strict Numerical",id:"strict-numerical",level:4},{value:"Hierarchical String Contains",id:"hierarchical-string-contains",level:4},{value:"Bloom Field (Dice)",id:"bloom-field-dice",level:4},{value:"Bloom Field (Hamming)",id:"bloom-field-hamming",level:4},{value:"Bloom Field (Jaccard)",id:"bloom-field-jaccard",level:4},{value:"Hierarchical Bloom Field Contains",id:"hierarchical-bloom-field-contains",level:4}],p={toc:o};function c(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"defining-matching-strategies"},"Defining matching strategies"),(0,r.kt)("p",null,"LinXmart utilises a probabilistic linkage engine. This engine uses a 'match configuration' that tells it how to compare records, and when to designate two records as a match. Each Linkage Project has a separate match configuration, and a Linkage Project\u2019s match configuration can be modified at any time. After modification, all future linkages will use the new match configuration, while previous linkages will not change. "),(0,r.kt)("p",null,"To appropriately modify the match configuration, it is important that the operator has some understanding of ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/probabilistic-linkage"},"probabilistic record linkage"),". "),(0,r.kt)("h2",{id:"the-default-config"},"The default config"),(0,r.kt)("p",null,"Each new ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/linkage-projects"},"Linkage Project")," will be created with a default match configuration.Operators can modify the configuration for each Linkage Project through the web UI if and when required. The default strategy has been designed to cater for a wide variety of administrative type datasets, so should give accurate results out of the box. However, all data is different, and as you develop a better understanding of your data and probabilistic linkage, you may benefit from changing this over time."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The default matching strategies for all new Linkage Projects can be configured at a global level. Set this default to suit your most common data matching scenarios.")),(0,r.kt)("h2",{id:"match-strategies"},"Match strategies"),(0,r.kt)("p",null,"The match configuration consists of one or more ",(0,r.kt)("em",{parentName:"p"},"strategies"),". Each strategy must have one or more blocking fields and (optionally) a list of matching fields, the latter of which have associated comparison types and matching/non-matching probabilities. Each linkage strategy has its own threshold value associated with it. "),(0,r.kt)("h3",{id:"blocking"},"Blocking"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/probabilistic-linkage#blocking"},"Blocking")," is an indexing technique that is used to reduce the number of comparisons required for a match strategy. Comparing every record to every other record is not always practical, so defining a a set of fields that can reduce the comparisons space is desirable. Each strategy defines a set of fields to ",(0,r.kt)("em",{parentName:"p"},"block")," on before records are compared."),(0,r.kt)("p",null,"As an example, LinXmart\u2019s default match configuration has two linkage strategies with different blocks. The blocks for these strategies are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Strategy 1:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Date of Birth")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Sex")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Strategy 2:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Soundex of Surname")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Initial of Given Name"))),(0,r.kt)("p",null,"During the match processing, the first strategy will only compare records with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Date of Birth")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Sex"),". The second strategy will only compare records with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"Soundex of Surname")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Initial of Given Name"),". This gives very high coverage of the desirable comparison space."),(0,r.kt)("h3",{id:"deterministic-strategy"},"Deterministic strategy"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"deterministic")," strategy is one based on a defined set of equal fields. For example, if two records have the same ",(0,r.kt)("em",{parentName:"p"},"jurisdictional linkage key")," value, match them together. A deterministic strategy is one that has no matching fields defined, only blocking fields. These blocking fields are used to deterministically match all records together within the same blocks."),(0,r.kt)("p",null,"A deterministic strategy does not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Threshold")," value that is defined."),(0,r.kt)("h3",{id:"probabalistic-strategy"},"Probabalistic strategy"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"probabilistic")," strategy uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/probabilistic-linkage#match-and-non-match-probabilities-m-and-u-probabilities"},"conditional probabilities")," to determine the likelihood that particular records belong to the same entity. Matching fields can be defined for each linkage field, with a comparison type and conditional probabilities that determine how weights for agreement and disagreement are determined."),(0,r.kt)("p",null,"During the matching process, a comparison between two records will involve comparisons for each matching field defined in the strategy. The sum of each field level comparison will be summed to produce an overall ",(0,r.kt)("em",{parentName:"p"},"score")," for the record comparison. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Threshold")," value is used to determine whether the record comparison results in a matching pair (the score is greater than or equal to the threshold value), or whether it is discarded."),(0,r.kt)("h2",{id:"strategy-configuration"},"Strategy configuration"),(0,r.kt)("p",null,"Each match strategy has a number of fields that can be modified as required."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit Match Strategy",src:t(9273).Z,width:"932",height:"238"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"A descriptive name given to the strategy for identification by an operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"The value used to determine if a record comparison is classified as a match. If the ",(0,r.kt)("em",{parentName:"td"},"score")," from the record comparison is at least as much as the threshold value, it results in a matched pair.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Order"),(0,r.kt)("td",{parentName:"tr",align:null},"The order in which this strategy is run against the other strategies in the match configuration. Two records will not be compared if a previous strategy has already classified them as a match.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"A flag indicating if this strategy will be used.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Put your deterministic strategies first in order, as these will run faster than probabilistic comparisons.")),(0,r.kt)("h3",{id:"blocking-fields"},"Blocking fields"),(0,r.kt)("p",null,"Each blocking field is combined to produce discrete sets of records to compare during the match processing. The more fields added here, the smaller the size of the record sets. Smaller record sets produces less comparisons, so they are more likely to be matches, but potentially miss out on other record pairs that could be matches."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Blocking Fields",src:t(4916).Z,width:"933",height:"309"})),(0,r.kt)("p",null,"In addition to specifying the linkage field, you can specify whether to include empty values (",(0,r.kt)("inlineCode",{parentName:"p"},"Match Empty"),"). Setting this to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," will include ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or empty values in the set of acceptable value combinations. This will only allow you to compare records that ",(0,r.kt)("em",{parentName:"p"},"both")," have that value set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h3",{id:"matching-fields"},"Matching fields"),(0,r.kt)("p",null,"There are several ways to add matching fields to a strategy. LinXmart allows the operator to add matching fields one by one, to choose the default matching fields defined in LinXmart, or to copy the matching fields from a previously created strategy, if one exists.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Matching Fields",src:t(6782).Z,width:"930",height:"230"})),(0,r.kt)("p",null,"To add the default matching fields, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Default Matching Fields")," link below the Matching Fields section when editing a strategy. To copy the matching fields from the previous match strategy (in terms of its order), click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy Matching Fields from Previous Strategy")," link."),(0,r.kt)("p",null,"To add matching fields individually, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Matching Field")," from this pane. The following fields are presented:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The linkage field to be compared. A drop-down box allows for selection from the available fields.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Comparison"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of comparator to be used. Options available depend on the linkage fields selected. ",(0,r.kt)("a",{parentName:"td",href:"#comparison-types"},"Available options are listed below."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Match probability"),(0,r.kt)("td",{parentName:"tr",align:null},"Also known as the m-probability. The estimated probability that two records belonging to the same person have the same value of this linkage field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Non-match probability"),(0,r.kt)("td",{parentName:"tr",align:null},"Also known as the u-probability. The estimated probability that two records belonging to different people have the same value of this linkage field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Agreement weight (override)"),(0,r.kt)("td",{parentName:"tr",align:null},"The score to be given if two records have the same value of this linkage field. If a value is entered here, the match and non-match probabilities are ignored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Disagreement weight (override)"),(0,r.kt)("td",{parentName:"tr",align:null},"The score to be given if two records do not have the same value of this linkage field. If a value is entered here, the match and non-match probabilities are ignored.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Weight curve"),(0,r.kt)("td",{parentName:"tr",align:null},"Weight curves are used to convert the score found from an approximate comparison type (such as the Jaro-Winkler string comparator function or the several available Bloom filter comparison methods) to a score that lies somewhere between the agreement and disagreement weight. LinXmart provides several weight curve options, one for each approximate comparator type. In nearly all circumstances, the weight curve associated with the string-matching comparator should be used. For exact matching or other non-approximate approaches, this can be left as ",(0,r.kt)("inlineCode",{parentName:"td"},"(none)"),".")))),(0,r.kt)("h3",{id:"comparison-types"},"Comparison types"),(0,r.kt)("h4",{id:"exact"},"Exact"),(0,r.kt)("p",null,"This compares the two fields values as strings and if they are exactly the same, they are assigned the field\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"Agreement Weight"),". If they are in any way different, they are assigned the ",(0,r.kt)("inlineCode",{parentName:"p"},"Disagreement Weight"),". These are the only two possible weights that can be assigned."),(0,r.kt)("h4",{id:"jaro-winkler"},"Jaro-Winkler"),(0,r.kt)("p",null,"Jaro-Winkler is a string similarity algorithm designed for use with names. Compared values that are not exactly the same but are very similar will be given a high weight, with those less similar given a lower weight. These weights will be in between the agreement and disagreement weight for this field. "),(0,r.kt)("h4",{id:"numerical-year"},"Numerical (Year)"),(0,r.kt)("p",null,"This compares years as numbers with some tolerance in matching. The comparator computes the difference in years relative to a base year (the year in which the Linkage Project was created). If the minimum value is less than 20 years from the base year and the values differ by no more than a year, then the full agreement weight is assigned.  If the minimum value is 20 years or more from the base year and the values differ by no more than 2 years then the full agreement weight is assigned. Otherwise, the weight is linearly interpolated between full agreement and full disagreement weights with a slope proportional to |year1 \u2013 year2|/min(year1,year2)."),(0,r.kt)("h4",{id:"strict-numerical"},"Strict Numerical"),(0,r.kt)("p",null,"This converts the field values to integers before comparing them as numbers with a tolerance of +/- 1.   E.g. 11 will match 12. Also, field values like \u20180009\u2019 and \u20189\u2019 will match (whereas they would not have in an exact string comparison). Full agreement and disagreement weights are the only two possible weights that can be assigned.\nString Contains\tThis comparison will look for the existence of one field value within the other record. This is a bidirectional check If one of the values exists within the other, full agreement is returned, otherwise full disagreement is returned."),(0,r.kt)("h4",{id:"hierarchical-string-contains"},"Hierarchical String Contains"),(0,r.kt)("p",null,"The comparison allows each side of the field comparison to have a delimited list of \u2018hierarchical\u2019 strings. When the comparison runs, only one value in the delimited lists of each side needs to match. The \u2018hierarchical\u2019 part means that each item in the list represents a value or code that can be broken down into hierarchies. For example, Canadian postcodes have two levels of hierarchy \u2013 the first 3 characters represents a wide geographic region (the forward sortation area (FSA) code) and the last 3 characters represents a local region within it. So, when each item in the delimited lists is compared, the levels within the hierarchies are checked. The first hierarchy achieves full agreement weight. The last hierarchy achieves a weight half-way between disagreement and agreement. The remaining hierarchies are even distributed between."),(0,r.kt)("p",null,"This comparison has two parameters: ",(0,r.kt)("inlineCode",{parentName:"p"},"Value Levels")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Delimiters"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Value Levels")," is a delimited list of hierarchies in the field. Zero means the entire string is checked. A positive value refers to the first n characters. A negative value refers to the last n characters. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Delimiters")," field defines the characters used to separate the Value Levels as well as the values in the fields."),(0,r.kt)("h4",{id:"bloom-field-dice"},"Bloom Field (Dice)"),(0,r.kt)("p",null,"This comparison type is used for comparing Bloom filters.  It computes the Dice coefficient, allowing string similarity matching to occur on encoded data fields. This comparison is only available for binary fields."),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"D"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"B"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mn",{parentName:"mrow"},"2"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u2229"),(0,r.kt)("mi",{parentName:"mrow"},"B"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223")),(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow"},"B"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223")))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Dice(A,B) = \\frac {2|A \\cap B|} {|A| + |B|}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"D"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ce"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.363em",verticalAlign:"-0.936em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.427em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2229"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.936em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,r.kt)("h4",{id:"bloom-field-hamming"},"Bloom Field (Hamming)"),(0,r.kt)("p",null,"This comparison type is used for comparing Bloom filters.  It computes the Hamming distance, allowing string similarity matching to occur on encoded data fields. This comparison is only available for binary fields."),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"H"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"B"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u2295"),(0,r.kt)("mi",{parentName:"mrow"},"B"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Hamming(A,B) = |A \\oplus B|")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.08125em"}},"H"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ammin"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2295"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223")))))),(0,r.kt)("h4",{id:"bloom-field-jaccard"},"Bloom Field (Jaccard)"),(0,r.kt)("p",null,"This comparison type is used for comparing Bloom filters.  It computes the Jaccard distance, allowing string similarity matching to occur on encoded data fields. This comparison is only available for binary fields."),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"J"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mi",{parentName:"mrow"},"B"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u2229"),(0,r.kt)("mi",{parentName:"mrow"},"B"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223")),(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow"},"A"),(0,r.kt)("mo",{parentName:"mrow"},"\u222a"),(0,r.kt)("mi",{parentName:"mrow"},"B"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223")))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Jaccard(A,B) = \\frac {|A \\cap B|} {|A \\cup B|}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.09618em"}},"J"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"cc"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.363em",verticalAlign:"-0.936em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.427em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u222a"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"A"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2229"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05017em"}},"B"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.936em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"}))))))),(0,r.kt)("h4",{id:"hierarchical-bloom-field-contains"},"Hierarchical Bloom Field Contains"),(0,r.kt)("p",null,"This works similarly to the String version with the exception that it is only 1 to many, not many to many. That is, one side of the comparison can only have a single item; the other side can have a list of items. This works on the same premise as the Hierarchical String Contains comparator in that you specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Value Levels")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Delimiters")," as part of the transform."))}c.isMDXComponent=!0},4916:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/blocking-field-list-459233c7c053761141da7a3cc8fa5d38.png"},9273:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/match-strategy-edit-faa1a65fdb1db35ec69b1bcb783c5d73.png"},6782:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/matching-field-emptylist-66e45def0fc748a42766d459b6775558.png"}}]);