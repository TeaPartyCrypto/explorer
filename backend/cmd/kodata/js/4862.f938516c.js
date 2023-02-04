"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[4862],{54862:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-tabs",{attrs:{"content-class":"mt-1"}},[a("b-tab",{attrs:{title:"Active Proposals",pill:""}},[a("b-row",{staticClass:"match-height"},t._l(t.list,(function(e,s){return a("b-col",{key:e.id+"-"+s,attrs:{lg:"6",md:"12"}},[a("b-card",[a("b-card-title",{on:{click:function(e){return t.description("model-"+s)}}},[a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:e.chain.logo,variant:"light-primary",size:"22",title:e.chain.chain_name}}),t._v(" #"+t._s(e.id)+". "),a("router-link",{attrs:{to:"/"+e.chain.chain_name+"/gov/"+e.id+"?from=/wallet/votes"}},[t._v(" "+t._s(e.title)+" ")])],1),a("div",{staticClass:"overflow-auto",class:t.descId==="model-"+s?"d-block":"d-none"},[a("object-field-component",{attrs:{tablefield:e.contents,small:!1}})],1),a("div",{staticClass:"gov-wrapper d-flex flex-wrap"},[a("div",{staticClass:"gov"},[a("p",{staticClass:"card-text mb-25"},[t._v(" Type ")]),a("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.formatType(e.contents["@type"]))+" ")])]),a("div",{staticClass:"gov"},[a("p",{staticClass:"card-text mb-25"},[t._v(" Start Date ")]),a("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.formatDate(e.voting_start_time))+" ")])]),a("div",{staticClass:"gov"},[a("p",{staticClass:"card-text mb-25"},[t._v(" End Date ")]),a("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.formatDate(e.voting_end_time))+" ")])]),a("div",{staticClass:"gov"},[a("p",{staticClass:"card-text mb-25"},[t._v(" Deposit ")]),a("h6",{staticClass:"mb-0"},[t._v(" "+t._s(t.formatToken(e.total_deposit)||"-")+" ")])])]),a("b-progress",{staticClass:"my-2",attrs:{max:100,height:"2rem","show-progress":""}},[a("b-progress-bar",{attrs:{id:"vote-yes"+e.id,variant:"success",value:t.percent(e.tally.yes),"show-progress":"",label:t.percent(e.tally.yes).toFixed()+"%"}}),a("b-progress-bar",{attrs:{id:"vote-no"+e.id,variant:"danger",value:t.percent(e.tally.no),label:t.percent(e.tally.no).toFixed()+"%","show-progress":""}}),a("b-progress-bar",{staticClass:"bg-danger bg-darken-4",attrs:{id:"vote-veto"+e.id,value:t.percent(e.tally.veto),label:t.percent(e.tally.veto).toFixed()+"%","show-progress":""}}),a("b-progress-bar",{attrs:{id:"vote-abstain"+e.id,variant:"secondary",value:t.percent(e.tally.abstain),label:t.percent(e.tally.abstain).toFixed()+"%","show-progress":""}})],1),a("b-tooltip",{attrs:{target:"vote-yes"+e.id}},[t._v(" "+t._s(t.percent(e.tally.yes))+"% voted Yes ")]),a("b-tooltip",{attrs:{target:"vote-no"+e.id}},[t._v(" "+t._s(t.percent(e.tally.no))+"% voted No ")]),a("b-tooltip",{attrs:{target:"vote-veto"+e.id}},[t._v(" "+t._s(t.percent(e.tally.veto))+"% voted No With Veto ")]),a("b-tooltip",{attrs:{target:"vote-abstain"+e.id}},[t._v(" "+t._s(t.percent(e.tally.abstain))+"% voted Abstain ")]),a("b-card-footer",{staticClass:"pb-0"},t._l(e.votes,(function(e,s){return a("span",{key:s},[a("b-badge",{attrs:{variant:t.color(e.vote.option)}},[t._v(t._s(e.keyname)+" : "+t._s(t.formatOption(e.vote.option)))])],1)})),0)],1)],1)})),1)],1),a("b-tab",{attrs:{title:"Upgrade Events",lazy:""}},[a("wallet-upgrade-events")],1)],1)},r=[],o=a(47389),i=a(51015),n=a(58887),l=a(26253),c=a(50725),d=a(8775),p=a(37674),h=a(49379),v=a(26034),u=a(45752),m=a(22981),f=a(18365),b=a(5870),_=a(20266),g=a(54333),y=a(27484),T=a.n(y),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"match-height"},t._l(t.list,(function(e,s){return a("b-col",{key:e.id+"-"+s,attrs:{lg:"6",md:"12"}},[a("b-card",{attrs:{"bg-variant":e.variant}},[a("b-card-title",{staticClass:"mb-1"},[a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{src:e.chain.logo,title:e.chain.chain_name,variant:"light-primary",size:"22"}}),t._v(" #"+t._s(e.id)+". "),a("router-link",{attrs:{to:"/"+e.chain.chain_name+"/gov/"+e.id+"?from=/wallet/votes"}},[t._v(" "+t._s(e.title)+" "+t._s(e.status)+" ")])],1),a("flip-countdown",{attrs:{deadline:e.countdown,"countdown-size":"28px","label-size":"12px"}})],1)],1)})),1)],1)},k=[],w=(a(26699),a(65167)),C=a.n(w),O={name:"WalletUpgradeEvents",components:{BAvatar:o.SH,BRow:l.T,BCol:c.l,BCard:d._,BCardTitle:h._,FlipCountdown:C()},directives:{"b-tooltip":b.o},props:{content:{type:String,default:()=>""}},data(){return{proposals:[],latest:{}}},computed:{list(){return this.proposals.filter((t=>[2,3].includes(t.status))).map((t=>{const e=t;return e.countdown=this.estmatetime(t.chain.chain_name,t.contents.plan),e.variant=T()().isAfter(T()(e.countdown))?"dark":"",e})).sort(((t,e)=>T()(e.voting_end_time).unix()-T()(t.voting_end_time).unix()))}},mounted(){const t=(0,g.getLocalAccounts)();if(t){const e=(0,g.getLocalChains)(),a={};Object.keys(t).forEach((s=>{t[s].address.forEach((t=>{const s=e[t.chain];s&&(a[t.chain]=s)}))})),Object.values(a).forEach((t=>{this.fetchProposals(t)}))}},methods:{estmatetime(t,e){if(e.height>0){const a=this.latest[t];if(a){const a=e.height-this.latest[t].height;if(a>0)return T()().add(6*a,"second").format("YYYY-MM-DD hh:mm:ss")}return"1990-01-01"}return T()(e.time).format("YYYY-MM-DD hh:mm:ss")},fetchProposals(t){this.$http.getGovernanceList("",t).then((e=>{e.proposals.forEach((e=>{const a=e.contents["@type"];if(a.indexOf("SoftwareUpgradeProposal")>0){const a=e;a.chain=t,T()(e.voting_end_time).add(15,"day").isAfter(T()())&&this.proposals.push(a)}}))}),(t=>{throw new Error(t)})),this.$http.getLatestBlock(t).then((e=>{this.$set(this.latest,t.chain_name,e.block.header)}))}}},A=O,B=a(1001),S=(0,B.Z)(A,x,k,!1,null,null,null),E=S.exports,j=a(49376),$={components:{BAvatar:o.SH,BTab:i.L,BTabs:n.M,BRow:l.T,BCol:c.l,BCard:d._,BCardFooter:p.F,BCardTitle:h._,BBadge:v.k,BProgress:u.D,BProgressBar:m.Q,BTooltip:f.T,WalletUpgradeEvents:E,ObjectFieldComponent:j.Z},directives:{"b-tooltip":b.o,Ripple:_.Z},data(){return{islive:!0,proposals:[],descId:null,tally:{},votes:[]}},computed:{list(){return this.proposals.map((t=>{const e=t;return e.tally=this.tally[`${t.chain.chain_name}-${t.id}`]||new g.ProposalTally,e.votes=this.votes.filter((e=>e.vote.proposal_id===t.id)),e})).sort(((t,e)=>T()(e.voting_start_time).unix()-T()(t.voting_start_time).unix()))}},created(){this.init()},beforeDestroy(){this.islive=!1},methods:{description(t){this.descId=t===this.descId?null:t},color(t){switch(t){case"VOTE_OPTION_YES":return"success";case"VOTE_OPTION_NO":return"warning";case"VOTE_OPTION_NOWITHVETO":return"danger";case"VOTE_OPTION_ABSTAIN":return"info";default:return"danger"}},keyname(t){const e=Object.values(this.accounts).find((e=>e.address.findIndex((e=>e.addr===t))>-1));return e?e.name:t.substring(t.length-6)},formatType(t){const e=String(t).replace("Proposal",""),a=e.lastIndexOf(".");return a>0?e.substring(a+1):e},percent:t=>(0,g.percent)(t),formatDate:t=>T()(t).format("YYYY-MM-DD"),formatToken:t=>(0,g.tokenFormatter)(t,{}),formatOption:t=>{const e=String(t).lastIndexOf("_");return e>0?String(t).substring(e+1):t},init(){if(this.accounts=(0,g.getLocalAccounts)(),this.accounts){const t=(0,g.getLocalChains)(),e={};Object.keys(this.accounts).forEach((a=>{this.accounts[a].address.forEach((a=>{const s=t[a.chain];s&&(e[a.chain]?e[a.chain].addresses.push(a.addr):e[a.chain]={conf:s,addresses:[a.addr]})}))})),Object.values(e).forEach((t=>{this.fetchProposals(t)}))}},fetchProposals(t){if(this.islive){let e=Promise.resolve();this.$http.getGovernanceListByStatus(2,t.conf).then((a=>{a.proposals.forEach((a=>{const s=a;s.chain=t.conf,this.proposals.push(s),t.addresses.forEach((s=>{e=e.then((()=>new Promise((e=>{this.fetchMyVote(a.id,s,t.conf,e)}))))}))})),this.updateTally(a.proposals,t.conf)}),(t=>{throw new Error(t)}))}},fetchMyVote(t,e,a,s){this.islive&&this.$http.getGovernanceProposalVote(t,e,a).then((t=>{s();const e=t;e.keyname=this.keyname(t.vote.voter),this.votes.push(e)})).catch((()=>{s()}))},updateTally(t,e){t.length>0&&t.forEach((t=>this.$http.getGovernanceTally(t.id,0,e).then((a=>{this.$set(this.tally,`${e.chain_name}-${t.id}`,a)}))))}}},F=$,P=(0,B.Z)(F,s,r,!1,null,"0b4a9fbc",null),D=P.exports},9644:function(t,e,a){a.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return Array.isArray(t.items)?a("b-table",{staticClass:"ml-0 mr-0 dataview text-nowrap",attrs:{items:t.items,"sticky-header":!0,"no-border-collapse":!0,responsive:"md"},scopedSlots:t._u([{key:"cell()",fn:function(e){return[t.isTokenField(e.value)?a("span",[t._v(t._s(t.formatTokens(e.value)))]):t.isHex(e.value)?a("span",[t._v(t._s(t.formatHexAddress(e.value)))]):t.isArrayText(e.value)?a("array-field-component",{attrs:{tablefield:t.eval_value(e.value)}}):a("span",{attrs:{title:e.value}},[t._v(t._s(t.formatText(e.value)))])]}}],null,!1,3233310829)}):t._e()},r=[],o=a(67566),i=a(54333),n={name:"ArrayFieldComponent",components:{BTable:o.h},props:{tablefield:{type:[Array,Object],default:()=>[]}},computed:{items(){return this.tablefield.length>0&&"string"===typeof this.tablefield[0]?this.tablefield.map((t=>({array:t}))):this.tablefield}},methods:{eval_value(t){return"string"===typeof t?JSON.parse(t):t},isTokenField(t){return(0,i.isToken)(t)},isArrayText(t){const e=String(t).startsWith("[")&&String(t).endsWith("]");return e},formatText(t){const e=/^\d{4}.\d{1,2}.\d{1,2}T\d{2}:\d{2}:.+Z$/,a=/^0\.\d+/;return e.test(t)?(0,i.toDay)(t):a.test(t)?`${(0,i.percent)(t)}%`:t},formatTokens(t){return(0,i.tokenFormatter)(t)},isHex(t){return(0,i.isHexAddress)(t)},formatHexAddress(t){return(0,i.getStakingValidatorByHex)(this.$http.config.chain_name,t)}}},l=n,c=a(1001),d=(0,c.Z)(l,s,r,!1,null,"3a881559",null),p=d.exports},49376:function(t,e,a){a.d(e,{Z:function(){return g}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return"object"===typeof t.tablefield?a("b-table-simple",{attrs:{hover:"",small:t.small,striped:"",stacked:"sm",responsive:"sm"}},[a("b-tbody",t._l(t.tablefield,(function(e,s){return a("b-tr",{key:s},[a("b-td",{staticStyle:{"text-transform":"capitalize","vertical-align":"top"}},[t._v(" "+t._s(t.formatTitle(s))+" ")]),t.isTokenField(e)?a("b-td",[t._v(" "+t._s(t.formatTokens(e))+" ")]):t.isArrayText(e)?a("b-td",[t._v(" "+t._s(e.join(", "))+" ")]):t.isHex(e)?a("b-td",[t._v(" "+t._s(t.formatHexAddress(e))+" ")]):Array.isArray(e)?a("b-td",[a("array-field-component",{attrs:{tablefield:e}})],1):"object"===typeof e?a("b-td",{staticClass:"overflow-hidden",attrs:{hover:""}},[e?a("b-tabs",{attrs:{small:""}},t._l(Object.keys(e),(function(s){return a("b-tab",{key:s,staticClass:"p-0",attrs:{title:t.formatTitle(s),"title-item-class":"bg-light-primary text-capitalize"}},[Array.isArray(e[s])?a("array-field-component",{attrs:{tablefield:e[s]}}):"object"===typeof e[s]?a("object-field-component",{attrs:{tablefield:e[s]}}):t.isObjectText(e[s])?a("object-field-component",{attrs:{tablefield:t.toObject(e[s])}}):a("div",{staticStyle:{"max-width":"800px","max-height":"300px",overflow:"auto"}},[t._v(t._s(e[s]))])],1)})),1):t._e()],1):a("b-td",["description"===s?a("VueMarkdown",[t._v(" "+t._s(t.addNewLine(e))+" ")]):a("div",{staticStyle:{"max-width":"800px","max-height":"300px",overflow:"auto"}},[t._v(t._s(e))])],1)],1)})),1)],1):t._e()},r=[],o=a(85589),i=a(92095),n=a(66456),l=a(58887),c=a(51015),d=a(80560),p=a(54333),h=a(89296),v=a.n(h),u=a(9644),m={name:"ObjectFieldComponent",components:{BTableSimple:o.t,BTr:i.G,BTd:n.S,BTabs:l.M,BTab:c.L,BTbody:d.p,ArrayFieldComponent:u.Z,VueMarkdown:v()},props:{tablefield:{type:[Array,Object],default:()=>{}},small:{type:Boolean,default:!0}},data(){return{options:{markdownIt:{linkify:!0},linkAttributes:{attrs:{target:"_blank",rel:"noopener"}}}}},methods:{formatObject(t){return t},formatTitle:t=>String(t).replaceAll("_"," "),isObjectText(t){return String(t).startsWith("{")&&String(t).endsWith("}")},toObject(t){return JSON.parse(t)},formatText:t=>(0,p.abbr)(t,60),eval_value(t){return Array.from(t)},isTokenField(t){return!!t&&(0,p.isToken)(t)},isHex(t){return!!t&&(0,p.isHexAddress)(t)},formatHexAddress(t){return(0,p.getStakingValidatorByHex)(this.$http.config.chain_name,t)},isArrayText(t){return!!t&&(0,p.isStringArray)(t)},formatTokens(t){return(0,p.tokenFormatter)(t)},addNewLine(t){const e=/^0\.\d+/;return e.test(t)?`${(0,p.percent)(t)}%`:t?t.replace(/(?:\\[rn])+/g,"\n"):"-"}}},f=m,b=a(1001),_=(0,b.Z)(f,s,r,!1,null,"08f8a3cd",null),g=_.exports}}]);