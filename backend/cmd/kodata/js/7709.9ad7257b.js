"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[7709],{37709:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-alert",{attrs:{show:null!==t.error,variant:"danger"}},[r("h4",{staticClass:"alert-heading"},[t._v(" Error: ")]),r("div",{staticClass:"alert-body"},[r("span",[t._v("Tx not found on chain. "+t._s(t.error))])])]),null===t.error?r("b-card",{staticClass:"text-truncate",attrs:{title:"Summary"}},[t.tx.std?r("b-table-simple",{attrs:{striped:"",stacked:"sm"}},[r("tbody",[r("b-tr",[r("b-td",{staticStyle:{width:"200px"}},[t._v(" "+t._s("txhash")+" ")]),r("b-td",{staticClass:"text-truncate"},[t._v(t._s(t.tx.txhash))])],1),r("b-tr",[r("b-td",[t._v(" "+t._s("status")+" ")]),r("b-td",{staticClass:"text-wrap"},[0===t.tx.code?r("b-badge",{attrs:{variant:"light-success"}},[t._v(" Success ")]):r("b-badge",{attrs:{variant:"light-danger"}},[t._v(" Failed ")])],1)],1),r("b-tr",[r("b-td",[t._v(" "+t._s("height")+" ")]),r("b-td",[r("router-link",{attrs:{to:"../blocks/"+t.tx.height}},[t._v(" "+t._s(t.tx.height)+" ")])],1)],1),r("b-tr",[r("b-td",[t._v(" "+t._s("timestamp")+" ")]),r("b-td",[t._v(t._s(t.formatTime(t.tx.timestamp)))])],1),r("b-tr",[r("b-td",[t._v(" "+t._s("gas")+" ")]),r("b-td",[t._v(t._s(t.tx.gas_used)+" / "+t._s(t.tx.gas_wanted))])],1),r("b-tr",[r("b-td",[t._v(" "+t._s("fee")+" ")]),r("b-td",[t._v(t._s(t.formattoken(t.tx.tx.fee)))])],1),r("b-tr",[r("b-td",[t._v(" "+t._s("memo")+" ")]),r("b-td",[t._v(t._s(t.tx.tx.memo))])],1),r("b-tr",[r("b-td",[t._v(" "+t._s("timeout_height")+" ")]),r("b-td",[t._v(t._s(t.tx.tx.timeout_height))])],1)],1)]):r("object-field-component",{attrs:{tablefield:t.tx.raw}})],1):t._e(),t.tx.tx.messages?r("b-card",[r("b-card-title",[t._v("Messages (total: "+t._s(t.tx.tx.messages.length)+")")]),t._l(t.tx.tx.messages,(function(t,e){return r("b-card-body",{key:e,staticClass:"message px-0",attrs:{id:"message"}},[r("object-field-component",{attrs:{tablefield:t}})],1)}))],2):t._e(),t.tx.element?r("b-card",{attrs:{title:"Details"}},[r("object-field-component",{attrs:{tablefield:t.tx.element.tx_response}})],1):t._e()],1)},s=[],n=r(73106),i=r(8775),l=r(49379),o=r(40670),d=r(85589),c=r(92095),b=r(66456),m=r(26034),u=r(54333),_=r(49376),p={components:{BAlert:n.F,BCard:i._,BCardTitle:l._,BCardBody:o.O,BTableSimple:d.t,BTr:c.G,BTd:b.S,BBadge:m.k,ObjectFieldComponent:_.Z},beforeRouteUpdate(t,e,r){const{hash:a}=t.params;a!==e.params.hash&&(this.error=null,this.$http.getTxs(a).then((t=>{this.tx=t})).catch((t=>{this.error=t})),r())},data(){return{error:null,tx:{tx:{}}}},created(){const{hash:t}=this.$route.params;this.$http.getTxs(t).then((t=>{this.error=null,this.tx=t})).catch((t=>{this.error=t}))},methods:{formattoken:t=>(0,u.tokenFormatter)(t),formatTime:t=>(0,u.toDay)(t)}},f=p,h=r(1001),x=(0,h.Z)(f,a,s,!1,null,null,null),v=x.exports},9644:function(t,e,r){r.d(e,{Z:function(){return b}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return Array.isArray(t.items)?r("b-table",{staticClass:"ml-0 mr-0 dataview text-nowrap",attrs:{items:t.items,"sticky-header":!0,"no-border-collapse":!0,responsive:"md"},scopedSlots:t._u([{key:"cell()",fn:function(e){return[t.isTokenField(e.value)?r("span",[t._v(t._s(t.formatTokens(e.value)))]):t.isHex(e.value)?r("span",[t._v(t._s(t.formatHexAddress(e.value)))]):t.isArrayText(e.value)?r("array-field-component",{attrs:{tablefield:t.eval_value(e.value)}}):r("span",{attrs:{title:e.value}},[t._v(t._s(t.formatText(e.value)))])]}}],null,!1,3233310829)}):t._e()},s=[],n=r(67566),i=r(54333),l={name:"ArrayFieldComponent",components:{BTable:n.h},props:{tablefield:{type:[Array,Object],default:()=>[]}},computed:{items(){return this.tablefield.length>0&&"string"===typeof this.tablefield[0]?this.tablefield.map((t=>({array:t}))):this.tablefield}},methods:{eval_value(t){return"string"===typeof t?JSON.parse(t):t},isTokenField(t){return(0,i.isToken)(t)},isArrayText(t){const e=String(t).startsWith("[")&&String(t).endsWith("]");return e},formatText(t){const e=/^\d{4}.\d{1,2}.\d{1,2}T\d{2}:\d{2}:.+Z$/,r=/^0\.\d+/;return e.test(t)?(0,i.toDay)(t):r.test(t)?`${(0,i.percent)(t)}%`:t},formatTokens(t){return(0,i.tokenFormatter)(t)},isHex(t){return(0,i.isHexAddress)(t)},formatHexAddress(t){return(0,i.getStakingValidatorByHex)(this.$http.config.chain_name,t)}}},o=l,d=r(1001),c=(0,d.Z)(o,a,s,!1,null,"3a881559",null),b=c.exports},49376:function(t,e,r){r.d(e,{Z:function(){return v}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return"object"===typeof t.tablefield?r("b-table-simple",{attrs:{hover:"",small:t.small,striped:"",stacked:"sm",responsive:"sm"}},[r("b-tbody",t._l(t.tablefield,(function(e,a){return r("b-tr",{key:a},[r("b-td",{staticStyle:{"text-transform":"capitalize","vertical-align":"top"}},[t._v(" "+t._s(t.formatTitle(a))+" ")]),t.isTokenField(e)?r("b-td",[t._v(" "+t._s(t.formatTokens(e))+" ")]):t.isArrayText(e)?r("b-td",[t._v(" "+t._s(e.join(", "))+" ")]):t.isHex(e)?r("b-td",[t._v(" "+t._s(t.formatHexAddress(e))+" ")]):Array.isArray(e)?r("b-td",[r("array-field-component",{attrs:{tablefield:e}})],1):"object"===typeof e?r("b-td",{staticClass:"overflow-hidden",attrs:{hover:""}},[e?r("b-tabs",{attrs:{small:""}},t._l(Object.keys(e),(function(a){return r("b-tab",{key:a,staticClass:"p-0",attrs:{title:t.formatTitle(a),"title-item-class":"bg-light-primary text-capitalize"}},[Array.isArray(e[a])?r("array-field-component",{attrs:{tablefield:e[a]}}):"object"===typeof e[a]?r("object-field-component",{attrs:{tablefield:e[a]}}):t.isObjectText(e[a])?r("object-field-component",{attrs:{tablefield:t.toObject(e[a])}}):r("div",{staticStyle:{"max-width":"800px","max-height":"300px",overflow:"auto"}},[t._v(t._s(e[a]))])],1)})),1):t._e()],1):r("b-td",["description"===a?r("VueMarkdown",[t._v(" "+t._s(t.addNewLine(e))+" ")]):r("div",{staticStyle:{"max-width":"800px","max-height":"300px",overflow:"auto"}},[t._v(t._s(e))])],1)],1)})),1)],1):t._e()},s=[],n=r(85589),i=r(92095),l=r(66456),o=r(58887),d=r(51015),c=r(80560),b=r(54333),m=r(89296),u=r.n(m),_=r(9644),p={name:"ObjectFieldComponent",components:{BTableSimple:n.t,BTr:i.G,BTd:l.S,BTabs:o.M,BTab:d.L,BTbody:c.p,ArrayFieldComponent:_.Z,VueMarkdown:u()},props:{tablefield:{type:[Array,Object],default:()=>{}},small:{type:Boolean,default:!0}},data(){return{options:{markdownIt:{linkify:!0},linkAttributes:{attrs:{target:"_blank",rel:"noopener"}}}}},methods:{formatObject(t){return t},formatTitle:t=>String(t).replaceAll("_"," "),isObjectText(t){return String(t).startsWith("{")&&String(t).endsWith("}")},toObject(t){return JSON.parse(t)},formatText:t=>(0,b.abbr)(t,60),eval_value(t){return Array.from(t)},isTokenField(t){return!!t&&(0,b.isToken)(t)},isHex(t){return!!t&&(0,b.isHexAddress)(t)},formatHexAddress(t){return(0,b.getStakingValidatorByHex)(this.$http.config.chain_name,t)},isArrayText(t){return!!t&&(0,b.isStringArray)(t)},formatTokens(t){return(0,b.tokenFormatter)(t)},addNewLine(t){const e=/^0\.\d+/;return e.test(t)?`${(0,b.percent)(t)}%`:t?t.replace(/(?:\\[rn])+/g,"\n"):"-"}}},f=p,h=r(1001),x=(0,h.Z)(f,a,s,!1,null,"08f8a3cd",null),v=x.exports}}]);