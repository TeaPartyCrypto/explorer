"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[7061],{96920:function(e,t,a){a.d(t,{Z:function(){return p}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"clearfix mb-0"},[a("span",{staticClass:"float-md-left d-none d-md-block d-md-inline-block mt-25"},[e._v(" Powered By "),a("b-link",{staticClass:"ml-25 font-weight-bolder",attrs:{href:"#",target:"_blank"}},[e._v("Ping.pub")])],1),a("router-link",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"float-md-right",attrs:{to:"/coffee"}},[e._v("Buy me a cup of coffee. "),a("span",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[a("feather-icon",{staticClass:"text-danger stroke-current",attrs:{icon:"HeartIcon",size:"21"}})],1)])],1)},r=[],s=a(67347),i=a(86429),o=a(20266),l={name:"AppFooter",components:{BLink:s.we},directives:{"b-popover":i.L,Ripple:o.Z}},c=l,u=a(1001),d=(0,u.Z)(c,n,r,!1,null,null,null),p=d.exports},80279:function(e,t,a){a.d(t,{Z:function(){return p}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-nav-item",{on:{click:function(t){e.skin=e.isDark?"light":"dark"}}},[a("feather-icon",{attrs:{size:"21",icon:(e.isDark?"Sun":"Moon")+"Icon"}})],1)},r=[],s=a(73664),i=a(25706),o=a(32450),l={components:{BNavItem:o.r},setup(){const{skin:e}=(0,s.Z)(),t=(0,i.Fl)((()=>"dark"===e.value));return{skin:e,isDark:t}}},c=l,u=a(1001),d=(0,u.Z)(c,n,r,!1,null,null,null),p=d.exports},2206:function(e,t,a){a.d(t,{Z:function(){return p}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-nav-item-dropdown",{staticClass:"dropdown-language",attrs:{id:"dropdown-grouped",variant:"link",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("b-img",{attrs:{src:e.currentLocale.img,height:"14px",width:"22px",alt:e.currentLocale.locale}}),a("span",{staticClass:"ml-50 text-body d-none"},[e._v(e._s(e.currentLocale.name))])]},proxy:!0}])},e._l(e.locales,(function(t){return a("b-dropdown-item",{key:t.locale,on:{click:function(a){e.$i18n.locale=t.locale}}},[a("b-img",{attrs:{src:t.img,height:"14px",width:"22px",alt:t.locale}}),a("span",{staticClass:"ml-50"},[e._v(e._s(t.name))])],1)})),1)},r=[],s=a(26221),i=a(87379),o=a(98156),l={components:{BNavItemDropdown:s.u,BDropdownItem:i.E,BImg:o.s},setup(){const e=[{locale:"en",img:a(27143),name:"English"},{locale:"fr",img:a(86566),name:"French"},{locale:"de",img:a(44578),name:"German"},{locale:"pt",img:a(36382),name:"Portuguese"}];return{locales:e}},computed:{currentLocale(){return this.locales.find((e=>e.locale===this.$i18n.locale))}}},c=l,u=a(1001),d=(0,u.Z)(c,n,r,!1,null,null,null),p=d.exports},17061:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ut}});var n={};a.r(n),a.d(n,{can:function(){return Ie},canViewHorizontalNavMenuGroup:function(){return Te},canViewHorizontalNavMenuHeaderGroup:function(){return He},canViewHorizontalNavMenuHeaderLink:function(){return Se},canViewHorizontalNavMenuLink:function(){return Ne},canViewVerticalNavMenuGroup:function(){return _e},canViewVerticalNavMenuHeader:function(){return Be},canViewVerticalNavMenuLink:function(){return Ve}});var r={};a.r(r),a.d(r,{_:function(){return Ze},t:function(){return ze}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout-vertical",{scopedSlots:e._u([{key:"navbar",fn:function(e){var t=e.toggleVerticalMenuActive;return[a("navbar",{attrs:{"toggle-vertical-menu-active":t}})]}}])},[a("router-view",{key:e.$route.params.chain})],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vertical-layout h-100",class:[e.layoutClasses],attrs:{"data-col":e.isNavMenuHidden?"1-column":null}},[a("b-navbar",{staticClass:"header-navbar navbar navbar-shadow align-items-center",class:[e.navbarTypeClass],attrs:{toggleable:!1,variant:e.navbarBackgroundColor}},[e._t("navbar",(function(){return[a("app-navbar-vertical-layout",{attrs:{"toggle-vertical-menu-active":e.toggleVerticalMenuActive}})]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive,navbarBackgroundColor:e.navbarBackgroundColor,navbarTypeClass:e.navbarTypeClass.concat(["header-navbar navbar navbar-shadow align-items-center"])})],2),e.isNavMenuHidden?e._e():a("vertical-nav-menu",{attrs:{"is-vertical-menu-active":e.isVerticalMenuActive,"toggle-vertical-menu-active":e.toggleVerticalMenuActive},scopedSlots:e._u([{key:"header",fn:function(t){return[e._t("vertical-menu-header",null,null,t)]}}],null,!0)}),a("div",{staticClass:"sidenav-overlay",class:e.overlayClasses,on:{click:function(t){e.isVerticalMenuActive=!1}}}),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a(e.layoutContentRenderer,{key:"layout-content-renderer-left"===e.layoutContentRenderer?e.$route.meta.navActiveLink||e.$route.name:null,tag:"component",scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,a){return{key:a,fn:function(t){return[e._t(a,null,null,t)]}}}))],null,!0)})],1),a("footer",{staticClass:"footer footer-light",class:[e.footerTypeClass]},[e._t("footer",(function(){return[a("app-footer")]}))],2),e._t("customizer")],2)},l=[],c=a(25706),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-container d-flex content align-items-center"},[a("ul",{staticClass:"nav navbar-nav d-xl-none"},[a("li",{staticClass:"nav-item"},[a("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[a("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),a("div",{staticClass:"bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"}),a("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[a("dark-Toggler",{staticClass:"d-none d-lg-block"}),a("search-bar"),a("notification-dropdown")],1)],1)},d=[],p=a(67347),m=a(29852),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"nav-item nav-search"},[a("a",{staticClass:"nav-link nav-link-search",attrs:{href:"javascript:void(0)"},on:{click:function(t){e.showSearchBar=!0}}},[a("feather-icon",{attrs:{icon:"SearchIcon",size:"21"}})],1),a("div",{staticClass:"search-input",class:{open:e.showSearchBar}},[a("div",{staticClass:"search-input-icon"},[a("feather-icon",{attrs:{icon:"SearchIcon"}})],1),e.showSearchBar?a("b-form-input",{attrs:{placeholder:"Search Height/Transaction/Account Address",state:!1,autocomplete:"off"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doQuery.apply(null,arguments)}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}):e._e(),a("b-form-text",{staticClass:"text-danger pl-3"},[e._v(" "+e._s(e.error)+" ")]),a("div",{staticClass:"search-input-close",on:{click:function(t){return e.reset()}}},[a("feather-icon",{attrs:{icon:"XIcon"}})],1)],1)])},h=[],g=(a(26699),a(22183)),b=a(51666),f=a(66665);const A=e=>"object"===typeof e&&null!==e,C=(e,t=" ")=>{if(!e)return"";const a=e.toString(),n=a.split(t),r=[];return n.forEach((e=>{const t=e.charAt(0).toUpperCase()+e.slice(1);r.push(t)})),r.join(" ")};var k=a(30635),y={components:{BFormInput:g.e,BFormText:b.m},setup(){const e=(0,c.iH)(!1),t={maxScrollbarLength:60};return{showSearchBar:e,perfectScrollbarSettings:t,title:C}},data(){return{searchQuery:null,error:null}},methods:{reset(){this.showSearchBar=!1,this.searchQuery=null,this.error=null},doQuery(){const e=/^\d+$/,t=/^[A-Z\d]{64}$/,a=/^[a-z]+1[a-z\d]{38}$/,n=this.searchQuery,r=k.Z.state.chains.selected;Object.values(this.$route.params).includes(n)||(e.test(n)?this.$router.push({name:"block",params:{chain:r.chain_name,height:n}}):t.test(n)?this.$router.push({name:"transaction",params:{chain:r.chain_name,hash:n}}):a.test(n)?this.$router.push({name:"chain-account",params:{chain:r.chain_name,address:n}}):this.error="The input not recognized")}}},w=y,M=a(1001),x=(0,M.Z)(w,v,h,!1,null,"e0b8783e",null),I=x.exports,V=a(80279),_={components:{BLink:p.we,BNavbarNav:m.o,SearchBar:I,DarkToggler:V.Z},props:{toggleVerticalMenuActive:{type:Function,default:()=>{}}}},B=_,N=(0,M.Z)(B,u,d,!1,null,null,null),S=N.exports,T=a(96920),H=a(73664),E=a(71603),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[a("div",{staticClass:"content-overlay"}),a("div",{staticClass:"header-navbar-shadow"}),a("div",{staticClass:"content-wrapper",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[a("app-breadcrumb")]})),a("div",{staticClass:"content-body"},[a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[e._t("default")],2)],1)],2)])},G=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.$route.meta.breadcrumb||e.$route.meta.pageTitle?a("b-row",{staticClass:"content-header"},[a("b-col",{staticClass:"content-header-left mb-2",attrs:{cols:"12",md:"9"}},[a("b-row",{staticClass:"breadcrumbs-top"},[a("b-col",{attrs:{cols:"12"}},[a("h2",{staticClass:"content-header-title float-left pr-1 mb-0"},[e._v(" "+e._s(e.$route.meta.pageTitle)+" ")]),a("div",{staticClass:"breadcrumb-wrapper"},[a("b-breadcrumb",[a("b-breadcrumb-item",{attrs:{to:"/"}},[a("feather-icon",{staticClass:"align-text-top",attrs:{icon:"HomeIcon",size:"16"}})],1),a("b-breadcrumb-item",{staticClass:"text-uppercase",attrs:{to:"/"+e.chainname}},[e._v(" "+e._s(e.chainname)+" ")]),e._l(e.breadcrumb,(function(t){return a("b-breadcrumb-item",{key:t.text,attrs:{active:t.active,to:t.to}},[e._v(" "+e._s(t.text)+" ")])}))],2)],1)])],1)],1),a("b-col",{staticClass:"content-header-right text-md-right d-md-block d-none mb-1",attrs:{md:"3",cols:"12"}},[e._v("   ")])],1):e._e()},L=[],U=a(74825),R=a(99729),z=a(26253),Z=a(50725),P=a(20266),F={directives:{Ripple:P.Z},components:{BBreadcrumb:U.P,BBreadcrumbItem:R.g,BRow:z.T,BCol:Z.l},computed:{chainname(){return this.$store?.state?.chains?.selected?.chain_name},breadcrumb(){const{breadcrumb:e}=this.$route.meta,t="function"===typeof e;return t?e(this.$route):e}}},O=F,W=(0,M.Z)(O,Q,L,!1,null,null,null),K=W.exports,J={components:{AppBreadcrumb:K},setup(){const{routerTransition:e,contentWidth:t}=(0,H.Z)();return{routerTransition:e,contentWidth:t}}},q=J,Y=(0,M.Z)(q,D,G,!1,null,null,null),X=Y.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[a("div",{staticClass:"content-overlay"}),a("div",{staticClass:"header-navbar-shadow"}),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a("div",{staticClass:"content-area-wrapper",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[a("app-breadcrumb")]})),a("portal-target",{attrs:{name:"content-renderer-sidebar-left",slim:""}}),a("div",{staticClass:"content-right"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[e._t("default")],2)])])],2)])],1)},j=[],ee={components:{AppBreadcrumb:K},setup(){const{routerTransition:e,contentWidth:t}=(0,H.Z)();return{routerTransition:e,contentWidth:t}}},te=ee,ae=(0,M.Z)(te,$,j,!1,null,null,null),ne=ae.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[a("div",{staticClass:"content-overlay"}),a("div",{staticClass:"header-navbar-shadow"}),a("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[a("div",{staticClass:"content-wrapper clearfix",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[a("app-breadcrumb")]})),a("div",{staticClass:"content-detached content-right"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"content-body"},[e._t("default")],2)])]),a("portal-target",{attrs:{name:"content-renderer-sidebar-detached-left",slim:""}})],2)])],1)},se=[],ie={components:{AppBreadcrumb:K},setup(){const{routerTransition:e,contentWidth:t}=(0,H.Z)();return{routerTransition:e,contentWidth:t}}},oe=ie,le=(0,M.Z)(oe,re,se,!1,null,null,null),ce=le.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-menu menu-fixed menu-accordion menu-shadow",class:[{expanded:!e.isVerticalMenuCollapsed||e.isVerticalMenuCollapsed&&e.isMouseHovered},"dark"===e.skin?"menu-dark":"menu-light"],on:{mouseenter:function(t){return e.updateMouseHovered(!0)},mouseleave:function(t){return e.updateMouseHovered(!1)}}},[a("div",{staticClass:"navbar-header expanded"},[e._t("header",(function(){return[a("ul",{staticClass:"nav navbar-nav flex-row"},[a("li",{staticClass:"nav-item mr-auto"},[a("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("span",{staticClass:"brand-logo"},[a("b-img",{attrs:{src:e.appLogoImage,alt:"logo"}})],1),a("h2",{staticClass:"brand-text"},[e._v(" "+e._s(e.appName)+" ")])])],1),a("li",{staticClass:"nav-item nav-toggle"},[a("b-link",{staticClass:"nav-link modern-nav-toggle"},[a("feather-icon",{staticClass:"d-block d-xl-none",attrs:{icon:"XIcon",size:"20"},on:{click:e.toggleVerticalMenuActive}}),a("feather-icon",{staticClass:"d-none d-xl-block collapse-toggle-icon",attrs:{icon:e.collapseTogglerIconFeather,size:"20"},on:{click:e.toggleCollapsed}})],1)],1)])]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive,toggleCollapsed:e.toggleCollapsed,collapseTogglerIcon:e.collapseTogglerIcon})],2),a("vue-perfect-scrollbar",{staticClass:"main-menu-content scroll-area",attrs:{settings:e.perfectScrollbarSettings,tagname:"ul"},on:{"ps-scroll-y":function(t){e.shallShadowBottom=t.srcElement.scrollTop>0}}},[a("vertical-nav-menu-items",{staticClass:"navigation navigation-main",attrs:{items:e.navMenuItems},on:{"update:items":function(t){e.navMenuItems=t}}})],1)],1)},de=[],pe=a(54333);function me(){const e=[],t=[];return Object.keys(k.Z.state.chains.config).forEach((e=>{const a={title:e,logo:k.Z.state.chains.config[e].logo,route:{name:"dashboard",params:{chain:e}}};t.push(a)})),t.length>1&&(e.push({header:"ecosystem"}),e.push({title:"blockchains",children:t,tag:`${t.length}`,icon:"https://ping.pub/logo.svg"})),e.push({header:"LINKS"}),(0,pe.isTestnet)()?e.push({title:"Mainnet Explorer",href:"https://ping.pub",icon:"ChromeIcon"}):e.push({title:"Testnet Explorer",href:"http://testnet.ping.pub",icon:"LifeBuoyIcon"}),e.push({title:"Twitter",href:"https://twitter.com/ping_pub",icon:"TwitterIcon"}),e.push({title:"FAQ",href:"https://github.com/ping-pub/explorer/discussions",icon:"MessageSquareIcon"}),e.push({title:"Github",href:"https://github.com/ping-pub/explorer",icon:"GithubIcon"}),e}var ve=me(),he=a(91040),ge=a.n(he),be=a(98156),fe=a(23453),Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",e._l(e.menus,(function(t){return a(e.resolveNavItemComponent(t),{key:t.header||t.title,tag:"component",attrs:{item:t}})})),1)},Ce=[];const ke=e=>e.header?"vertical-nav-menu-header":e.children?"vertical-nav-menu-group":"vertical-nav-menu-link",ye=e=>{if(A(e.route)){const{route:t}=f.Z.resolve(e.route);return t.name}return e.route},we=e=>{if(e.route&&"dashboard"===e.route.name&&e.title!==e.route.name)return!1;const t=f.Z.currentRoute.matched,a=ye(e);if(!a)return!1;let n=!0;const r=typeof f.Z.currentRoute.params,s=typeof e.route.params;return r===s&&(n=f.Z.currentRoute.params.chain===e.route.params.chain),n&&localStorage.setItem("selected_chain",e.route.params.chain),t.some((e=>{const t=e.name===a&&n||e.meta.navActiveLink===a;return t}))},Me=e=>{const t=f.Z.currentRoute.matched;return e.some((e=>e.children?Me(e.children):we(e,t)))},xe=e=>(0,c.Fl)((()=>{const t={};return e.route?t.to="string"===typeof e.route?{name:e.route}:e.route:(t.href=e.href,t.target="_blank",t.rel="nofollow"),t.target||(t.target=e.target||null),t})),Ie=(e,t)=>{const a=(0,c.FN)().proxy;return!a.$can||a.$can(e,t)},Ve=e=>Ie(e.action,e.resource),_e=e=>{const t=e.children.some((e=>Ie(e.action,e.resource)));return e.action&&e.resource?Ie(e.action,e.resource)&&t:t},Be=e=>Ie(e.action,e.resource),Ne=e=>Ie(e.action,e.resource),Se=e=>Ie(e.action,e.resource),Te=e=>{const t=e.children.some((e=>Ie(e.action,e.resource)));return e.action&&e.resource?Ie(e.action,e.resource)&&t:t},He=e=>{const t=e.children.some((e=>e.children?Te(e):Ne(e)));return e.action&&e.resource?Ie(e.action,e.resource)&&t:t},Ee=()=>({...n}),{canViewVerticalNavMenuHeader:De}=Ee();var Ge={props:{item:{type:Object,required:!0}},render(e){const t=e("span",{},this.item.header),a=e("feather-icon",{props:{icon:this.item.icon||"MoreHorizontalIcon",size:"18"}});return De(this.item)?e("li",{class:"navigation-header text-truncate"},[t,a]):e()}},Qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.canViewVerticalNavMenuLink(e.item)?a("li",{staticClass:"nav-item",class:{active:e.isActive,disabled:e.item.disabled}},[a("b-link",e._b({staticClass:"d-flex align-items-center"},"b-link",e.linkProps,!1),[e.item.logo?a("b-avatar",{staticClass:"mr-1",attrs:{variant:"transparent",src:e.item.logo,icon:"people-fill",size:"sm"}}):a("feather-icon",{attrs:{icon:e.item.icon||"ChevronRightIcon"}}),a("span",{staticClass:"text-truncate text-capitalize"},[e._v(e._s(e.t(e.item.title)))]),e.item.tag?a("b-badge",{staticClass:"mr-1 ml-auto",attrs:{pill:"",variant:e.item.tagVariant||"primary"}},[e._v(" "+e._s(e.item.tag)+" ")]):e._e()],1)],1):e._e()},Le=[],Ue=a(26034),Re=a(47389);const ze=e=>{const t=(0,c.FN)().proxy;return t.$t?t.$t(e):e},Ze=null,Pe=()=>({...r});function Fe(e){const t=(0,c.iH)(!1),a=xe(e),n=()=>{t.value=we(e)};return{isActive:t,linkProps:a,updateIsActive:n}}var Oe={watch:{$route:{immediate:!0,handler(){this.updateIsActive()}}}},We={components:{BLink:p.we,BBadge:Ue.k,BAvatar:Re.SH},mixins:[Oe],props:{item:{type:Object,required:!0}},setup(e){const{isActive:t,linkProps:a,updateIsActive:n}=Fe(e.item),{t:r}=Pe(),{canViewVerticalNavMenuLink:s}=Ee();return{isActive:t,linkProps:a,updateIsActive:n,canViewVerticalNavMenuLink:s,t:r}}},Ke=We,Je=(0,M.Z)(Ke,Qe,Le,!1,null,null,null),qe=Je.exports,Ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.canViewVerticalNavMenuGroup(e.item)?a("li",{staticClass:"nav-item has-sub",class:{open:e.isOpen,disabled:e.item.disabled,"sidebar-group-active":e.isActive}},[a("b-link",{staticClass:"d-flex align-items-center",on:{click:function(){return e.updateGroupOpen(!e.isOpen)}}},[a("b-avatar",{staticClass:"mr-1",attrs:{variant:"transparent",src:e.item.icon,icon:"people-fill",size:"sm"}}),a("span",{staticClass:"menu-title text-truncate text-uppercase"},[e._v(e._s(e.item.title))]),e.item.tag?a("b-badge",{staticClass:"mr-1 ml-auto",attrs:{pill:"",variant:e.item.tagVariant||"primary"}},[e._v(" "+e._s(e.item.tag)+" ")]):e._e()],1),a("b-collapse",{staticClass:"menu-content",attrs:{tag:"ul"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},e._l(e.item.children,(function(t){return a(e.resolveNavItemComponent(t),{key:t.header||t.title,ref:"groupChild",refInFor:!0,tag:"component",attrs:{item:t}})})),1)],1):e._e()},Xe=[],$e=a(66578);function je(e){const t=(0,c.Fl)((()=>k.Z.state.verticalMenu.isVerticalMenuCollapsed));(0,c.YP)(t,(e=>{a.value||(e?r.value=!1:!e&&i.value&&(r.value=!0))}));const a=(0,c.f3)("isMouseHovered");(0,c.YP)(a,(e=>{t.value&&(r.value=e&&i.value)}));const n=(0,c.f3)("openGroups");(0,c.YP)(n,(t=>{const a=t[t.length-1];a===e.title||i.value||l(a)||(r.value=!1)}));const r=(0,c.iH)(!1);(0,c.YP)(r,(t=>{t&&n.value.push(e.title)}));const s=e=>{r.value=e},i=(0,c.iH)(!1);(0,c.YP)(i,(e=>{e&&t.value||(r.value=e)}));const o=()=>{i.value=Me(e.children)},l=t=>e.children.some((e=>e.title===t));return{isOpen:r,isActive:i,updateGroupOpen:s,openGroups:n,isMouseHovered:a,updateIsActive:o}}var et={watch:{$route:{immediate:!0,handler(){this.updateIsActive()}}}},tt={name:"VerticalNavMenuGroup",components:{VerticalNavMenuHeader:Ge,VerticalNavMenuLink:qe,BAvatar:Re.SH,BLink:p.we,BBadge:Ue.k,BCollapse:$e.k},mixins:[et],props:{item:{type:Object,required:!0}},setup(e){const{isOpen:t,isActive:a,updateGroupOpen:n,updateIsActive:r}=je(e.item),{t:s}=Pe(),{canViewVerticalNavMenuGroup:i}=Ee();return{resolveNavItemComponent:ke,isOpen:t,isActive:a,updateGroupOpen:n,updateIsActive:r,canViewVerticalNavMenuGroup:i,t:s}}},at=tt,nt=(0,M.Z)(at,Ye,Xe,!1,null,null,null),rt=nt.exports,st=()=>[{scope:"normal",title:"dashboard.dashboard",route:"dashboard"},{scope:"normal",title:"dashboard.blocks",route:"blocks"},{scope:"normal",title:"dashboard.staking",route:"staking"},{scope:"normal",title:"dashboard.governance",route:"governance",exclude:"emoney"},{scope:"normal",title:"dashboard.uptime",route:"uptime"},{scope:"normal",title:"dashboard.parameters",route:"parameters"},{scope:"normal",title:"dashboard.statesync",route:"statesync"},{scope:"normal",title:"dashboard.consensus",route:"consensus"},{scope:"cos-mos",title:"dashboard.gravity",route:"gravity"},{scope:"osmosis",title:"dashboard.trade",route:"osmosis-trade"}],it={components:{VerticalNavMenuHeader:Ge,VerticalNavMenuLink:qe,VerticalNavMenuGroup:rt},props:{items:{type:Array,required:!0}},setup(){return(0,c.JJ)("openGroups",(0,c.iH)([])),{resolveNavItemComponent:ke}},computed:{menus(){const{selected:e}=this.$store.state.chains,{excludes:t}=e,a=[];st().forEach((n=>{void 0!==t&&-1!==t.indexOf(n.route)||(n.scope.match("normal")||n.scope.match(e.chain_name))&&a.push({title:n.title,route:{name:n.route,params:{chain:e.chain_name}}})}));const n={title:e.chain_name,icon:e.logo,route:{name:e.chain_name,params:{chain:e.chain_name}}};return n.children=a,[{header:"dashboard"},n].concat(this.items)}}},ot=it,lt=(0,M.Z)(ot,Ae,Ce,!1,null,null,null),ct=lt.exports;function ut(e){const t=(0,c.Fl)({get:()=>k.Z.state.verticalMenu.isVerticalMenuCollapsed,set:e=>{k.Z.commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),a=(0,c.Fl)((()=>e.isVerticalMenuActive?t.value?"unpinned":"pinned":"close")),n=(0,c.iH)(!1),r=e=>{n.value=e},s=()=>{t.value=!t.value};return{isMouseHovered:n,isVerticalMenuCollapsed:t,collapseTogglerIcon:a,toggleCollapsed:s,updateMouseHovered:r}}var dt={components:{VuePerfectScrollbar:ge(),VerticalNavMenuItems:ct,BLink:p.we,BImg:be.s},props:{isVerticalMenuActive:{type:Boolean,required:!0},toggleVerticalMenuActive:{type:Function,required:!0}},setup(e){const{isMouseHovered:t,isVerticalMenuCollapsed:a,collapseTogglerIcon:n,toggleCollapsed:r,updateMouseHovered:s}=ut(e),{skin:i}=(0,H.Z)(),o=(0,c.iH)(!1);(0,c.JJ)("isMouseHovered",t);const l={maxScrollbarLength:60,wheelPropagation:!1},u=(0,c.Fl)((()=>"unpinned"===n.value?"CircleIcon":"DiscIcon")),{appName:d,appLogoImage:p}=fe.QI.app;return{navMenuItems:ve,perfectScrollbarSettings:l,isVerticalMenuCollapsed:a,collapseTogglerIcon:n,toggleCollapsed:r,isMouseHovered:t,updateMouseHovered:s,collapseTogglerIconFeather:u,shallShadowBottom:o,skin:i,appName:d,appLogoImage:p}}},pt=dt,mt=(0,M.Z)(pt,ue,de,!1,null,null,null),vt=mt.exports;function ht(e,t){const a=(0,c.iH)(!0),n=()=>{a.value=!a.value},r=(0,c.iH)("xl"),s=(0,c.Fl)((()=>k.Z.state.verticalMenu.isVerticalMenuCollapsed)),i=(0,c.Fl)((()=>{const n=[];return"xl"===r.value?(n.push("vertical-menu-modern"),n.push(s.value?"menu-collapsed":"menu-expanded")):(n.push("vertical-overlay-menu"),n.push(a.value?"menu-open":"menu-hide")),n.push(`navbar-${e.value}`),"sticky"===t.value&&n.push("footer-fixed"),"static"===t.value&&n.push("footer-static"),"hidden"===t.value&&n.push("footer-hidden"),n}));(0,c.YP)(r,(e=>{a.value="xl"===e}));const o=()=>{window.innerWidth>=1200?r.value="xl":window.innerWidth>=992?r.value="lg":window.innerWidth>=768?r.value="md":window.innerWidth>=576?r.value="sm":r.value="xs"},l=(0,c.Fl)((()=>"xl"!==r.value&&a.value?"show":null)),u=(0,c.Fl)((()=>"sticky"===e.value?"fixed-top":"static"===e.value?"navbar-static-top":"hidden"===e.value?"d-none":"floating-nav")),d=(0,c.Fl)((()=>"static"===t.value?"footer-static":"hidden"===t.value?"d-none":""));return{isVerticalMenuActive:a,toggleVerticalMenuActive:n,isVerticalMenuCollapsed:s,layoutClasses:i,overlayClasses:l,navbarTypeClass:u,footerTypeClass:d,resizeHandler:o}}var gt={watch:{$route(){this.$store.state.app.windowWidth<fe.ni.xl&&(this.isVerticalMenuActive=!1)}}},bt={components:{AppNavbarVerticalLayout:S,AppFooter:T.Z,VerticalNavMenu:vt,BNavbar:E.E,LayoutContentRendererLeftDetached:ce,LayoutContentRendererLeft:ne,LayoutContentRendererDefault:X},mixins:[gt],setup(){const{routerTransition:e,navbarBackgroundColor:t,navbarType:a,footerType:n,isNavMenuHidden:r}=(0,H.Z)(),{isVerticalMenuActive:s,toggleVerticalMenuActive:i,isVerticalMenuCollapsed:o,layoutClasses:l,overlayClasses:u,resizeHandler:d,navbarTypeClass:p,footerTypeClass:m}=ht(a,n);return d(),window.addEventListener("resize",d),(0,c.Ah)((()=>{window.removeEventListener("resize",d)})),{isVerticalMenuActive:s,toggleVerticalMenuActive:i,isVerticalMenuCollapsed:o,overlayClasses:u,layoutClasses:l,navbarTypeClass:p,footerTypeClass:m,routerTransition:e,navbarBackgroundColor:t,isNavMenuHidden:r}},computed:{layoutContentRenderer(){const e=this.$route.meta.contentRenderer;return"sidebar-left"===e?"layout-content-renderer-left":"sidebar-left-detached"===e?"layout-content-renderer-left-detached":"layout-content-renderer-default"}}},ft=bt,At=(0,M.Z)(ft,o,l,!1,null,null,null),Ct=At.exports,kt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"navbar-container d-flex content align-items-center"},[a("ul",{staticClass:"nav navbar-nav d-lg-none"},[a("li",{staticClass:"nav-item"},[a("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[e.selected_chain&&e.selected_chain.logo?a("b-avatar",{staticClass:"badge-minimal",attrs:{variant:"transparent",rounded:"",size:"21",src:e.selected_chain.logo}}):a("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),a("div",{staticClass:"bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"},[e.selected_chain?a("b-media",{attrs:{"no-body":""}},[a("b-media-aside",{staticClass:"mr-75"},[a("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[a("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:e.tips,expression:"tips",modifiers:{hover:!0,bottom:!0}}],staticClass:"badge-minimal",attrs:{variant:"transparent",badge:"",rounded:"",size:"42",src:e.selected_chain.logo,"badge-variant":e.variant}})],1)],1),a("b-media-body",{staticClass:"my-auto"},[a("h6",{staticClass:"mb-0 "},[a("span",{staticClass:"text-uppercase"},[e._v(e._s(e.chainid||e.selected_chain.chain_name))])]),a("small",{attrs:{id:"data-provider"}},[a("b-dropdown",{staticClass:"ml-0",attrs:{variant:"flat-primary","no-caret":"","toggle-class":"p-0",left:"",sm:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"RepeatIcon",size:"12"}})]},proxy:!0}],null,!1,3962760674)},e._l(e.apiOptions,(function(t,n){return a("b-dropdown-item",{key:t,on:{click:function(t){return e.change(n)}}},[e._v(" "+e._s(t)+" ")])})),1),e._v(" "+e._s(e.currentApi)+" ("+e._s(e.selected_chain.sdk_version||"-")+") ")],1)])],1):e._e()],1),a("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[a("dark-Toggler"),a("search-bar"),a("locale",{staticClass:"d-none"}),a("b-dropdown",{staticClass:"ml-1",attrs:{variant:"link","no-caret":"","toggle-class":"p-0",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"primary"}},[a("feather-icon",{attrs:{icon:"KeyIcon"}}),e._v(" "+e._s(e.walletName)+" ")],1)]},proxy:!0}])},[e._l(e.accounts,(function(t,n){return a("b-dropdown-item",{key:n,attrs:{disabled:!t.address},on:{click:function(a){return e.updateDefaultWallet(t.wallet)}}},[a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"d-flex justify-content-between"},[a("span",{staticClass:"font-weight-bolder"},[e._v(e._s(t.wallet)+" "),t.wallet===e.walletName?a("b-avatar",{attrs:{variant:"success",size:"sm"}},[a("feather-icon",{attrs:{icon:"CheckIcon"}})],1):e._e()],1),a("b-link",{attrs:{to:"/"+e.selected_chain.chain_name+"/account/"+t.address.addr}},[a("feather-icon",{attrs:{icon:"ArrowRightIcon"}})],1)],1),a("small",[e._v(e._s(t.address?e.formatAddr(t.address.addr):"Not available on "+e.selected_chain.chain_name))])])])})),a("b-dropdown-divider"),a("b-dropdown-item",{attrs:{to:"/wallet/import"}},[a("feather-icon",{attrs:{icon:"PlusIcon",size:"16"}}),a("span",{staticClass:"align-middle ml-50"},[e._v("Connect Wallet")])],1),a("b-dropdown-divider"),a("b-dropdown-item",{attrs:{to:{name:"accounts"}}},[a("feather-icon",{attrs:{icon:"KeyIcon",size:"16"}}),a("span",{staticClass:"align-middle ml-50"},[e._v("Accounts")])],1),a("b-dropdown-item",{attrs:{to:{name:"delegations"}}},[a("feather-icon",{attrs:{icon:"BookOpenIcon",size:"16"}}),a("span",{staticClass:"align-middle ml-50"},[e._v("My Delegations")])],1),a("b-dropdown-item",{attrs:{to:"/"+e.selected_chain.chain_name+"/uptime/my"}},[a("feather-icon",{attrs:{icon:"AirplayIcon",size:"16"}}),a("span",{staticClass:"align-middle ml-50"},[e._v("My Validators")])],1),a("b-dropdown-item",{attrs:{to:"/wallet/votes"}},[a("feather-icon",{attrs:{icon:"PocketIcon",size:"16"}}),a("span",{staticClass:"align-middle ml-50"},[e._v("My Votes")])],1),a("b-dropdown-item",{attrs:{to:"/wallet/transactions"}},[a("feather-icon",{attrs:{icon:"LayersIcon",size:"16"}}),a("span",{staticClass:"align-middle ml-50"},[e._v("My Transactions")])],1)],2)],1)],1)},yt=[],wt=a(72775),Mt=a(87272),xt=a(81843),It=a(15193),Vt=a(31642),_t=a(87379),Bt=a(41294),Nt=a(5870),St=a(2206),Tt={components:{BLink:p.we,BNavbarNav:m.o,BAvatar:Re.SH,BMedia:wt.P,BMediaAside:Mt.D,BMediaBody:xt.D,BButton:It.T,BDropdown:Vt.R,BDropdownItem:_t.E,BDropdownDivider:Bt.a,DarkToggler:V.Z,Locale:St.Z,SearchBar:I},directives:{"b-tooltip":Nt.o,Ripple:P.Z},props:{toggleVerticalMenuActive:{type:Function,default:()=>{}}},data(){return{variant:"success",tips:"Synced",index:0,chainid:""}},computed:{walletName(){const e=this.$store?.state?.chains?.defaultWallet;return e||"Wallet"},selected_chain(){return this.block(),this.$store.state.chains.selected},chainVariant(){return this.variant},currentApi(){return this.index+1>this.apiOptions.length?this.apiOptions[0]:this.apiOptions[this.index]},apiOptions(){const e=this.$store.state.chains.selected;return Array.isArray(e.api)?e.api:[e.api]},accounts(){let e=(0,pe.getLocalAccounts)()||{};return e=Object.entries(e).map((e=>({wallet:e[0],address:e[1].address.find((e=>e.chain===this.selected_chain.chain_name))}))).filter((e=>e.address)),e.length>0&&e.findIndex((e=>e.wallet===this.walletName))<0&&this.updateDefaultWallet(e[0].wallet),e.findIndex((e=>e.wallet===this.walletName))<0&&"Wallet"!==this.walletName&&this.updateDefaultWallet(null),e}},methods:{formatAddr(e){return e.substring(0,10).concat("...",e.substring(e.length-10))},updateDefaultWallet(e){this.$store.commit("setDefaultWallet",e)},change(e){this.index=e;const t=this.$store.state.chains.selected;localStorage.setItem(`${t.chain_name}-api-index`,e),window.location.reload()},block(){const e=this.$store.state.chains.selected,t=localStorage.getItem(`${e.chain_name}-api-index`)||0;this.index=Number(t),this.$store.commit("setHeight",0),this.$http.getLatestBlock().then((e=>{this.chainid=e.block.header.chain_id,this.$store.commit("setHeight",Number(e.block.header.height)),(0,pe.timeIn)(e.block.header.time,1,"m")?(this.variant="danger",this.tips=`Halted ${(0,pe.toDay)(e.block.header.time,"from")}, Height: ${this.$store.state.chains.height} `):(this.variant="success",this.tips="Synced")}))}}},Ht=Tt,Et=(0,M.Z)(Ht,kt,yt,!1,null,null,null),Dt=Et.exports,Gt={components:{LayoutVertical:Ct,Navbar:Dt},data(){return{}}},Qt=Gt,Lt=(0,M.Z)(Qt,s,i,!1,null,null,null),Ut=Lt.exports},44578:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8AgMAAADtUfddAAAACVBMVEUAAADdAAD/zgDGIigcAAAAHElEQVR4AWMAgVEwCkJxgRElMyqzChcYSTKjMgBDzfIcJWmM/AAAAABJRU5ErkJggg=="},27143:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"},86566:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDBAMAAACYZb3pAAAAHlBMVEUpQqK2q8384OL3qa/tKTkAI5Wrt9z////5t7ztKTlzpJCAAAAABXRSTlP++vjs1BQWlgsAAAAxSURBVHgBYmRAA4yKaAJCAugqQgHtyzENAAAAAiD7pzaDr4MfRVEURVGU36IoipK5FLWNJ6UFusbWAAAAAElFTkSuQmCC"},36382:function(e){e.exports="data:image/png;base64,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"}}]);