import{c as p,b as a,C as d,V as m}from"./vendor.4be520cf.js";import{t as c,j as E,k as $,c as y,e as g}from"./index.3277bc57.js";var w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",t._b({staticClass:"material-design-icon close-box-multiple-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(s){return t.$emit("click",s)}}},"span",t.$attrs,!1),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M4 20H18V22H4C2.9 22 2 21.11 2 20V6H4V20M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18 7.78 18H20.22C21.2 18 22 17.2 22 16.22V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6L12.6 10L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10L19 13.6Z"}},[t.title?r("title",[t._v(t._s(t.title))]):t._e()])])])},N=[];w._withStripped=!0;const Z={name:"CloseBoxMultipleIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},P={};var D=p(Z,w,N,!1,I,null,null,null);function I(t){for(let e in P)this[e]=P[e]}D.options.__file="node_modules/vue-material-design-icons/CloseBoxMultiple.vue";var vt=function(){return D.exports}(),U=Object.defineProperty,G=Object.getOwnPropertyDescriptor,h=(t,e,r,s)=>{for(var i=s>1?void 0:s?G(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&U(e,r,i),i};let _=class extends m{constructor(){super(...arguments);this.timestampms=c}get formattedDate(){return this.dateOnly?E(this.date):this.showTimezone?$(this.date):c(this.date)}get timezoneTooltip(){const t=$(this.date),e=$(this.date,"UTC");return t===e?e:`${t}
${e}`}};h([a({required:!0,type:Number})],_.prototype,"date",2);h([a({required:!1,type:Boolean,default:!1})],_.prototype,"showTimezone",2);h([a({required:!1,type:Boolean,default:!1})],_.prototype,"dateOnly",2);_=h([d({})],_);var O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{attrs:{title:t.timezoneTooltip}},[t._v(t._s(t.formattedDate))])},W=[];O._withStripped=!0;const b={};var j=p(_,O,W,!1,J,"3e4e55d0",null,null);function J(t){for(let e in b)this[e]=b[e]}j.options.__file="src/components/general/DateTimeTZ.vue";var dt=function(){return j.exports}(),K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,L=(t,e,r,s)=>{for(var i=s>1?void 0:s?Q(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&K(e,r,i),i};let u=class extends m{get isProfitable(){return this.profit>0}};L([a({required:!0,type:Number})],u.prototype,"profit",2);u=L([d({})],u);var R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-inline-block"},[r("div",{class:t.isProfitable?"triangle-up":"triangle-down"})])},X=[];R._withStripped=!0;const C={};var A=p(u,R,X,!1,Y,"25454173",null,null);function Y(t){for(let e in C)this[e]=C[e]}A.options.__file="src/components/general/ProfitSymbol.vue";var k=function(){return A.exports}(),tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,f=(t,e,r,s)=>{for(var i=s>1?void 0:s?et(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&tt(e,r,i),i};let l=class extends m{constructor(){super(...arguments);this.formatPercent=y,this.timestampms=c,this.formatPrice=g}get isProfitable(){return this.profitRatio!==void 0&&this.profitRatio>0||this.profitRatio===void 0&&this.profitAbs!==void 0&&this.profitAbs>0}get profitString(){return this.profitRatio!==void 0&&this.profitAbs!==void 0?`(${g(this.profitAbs,3)})`:""}};f([a({required:!1,default:void 0,type:Number})],l.prototype,"profitRatio",2);f([a({required:!1,default:void 0,type:Number})],l.prototype,"profitAbs",2);f([a({required:!0,type:String})],l.prototype,"stakeCurrency",2);f([a({required:!1,default:"",type:String})],l.prototype,"profitDesc",2);l=f([d({components:{ProfitSymbol:k}})],l);var M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-between align-items-center profit-pill pl-2 pr-1",class:t.isProfitable?"profit-pill-profit":"",attrs:{title:t.profitDesc}},[r("profit-symbol",{attrs:{profit:t.profitRatio||t.profitAbs}}),r("div",{staticClass:"d-flex justify-content-center align-items-center flex-grow-1"},[t._v(" "+t._s(t.profitRatio!==void 0?t.formatPercent(t.profitRatio,2):"")+" "),t.profitString?r("span",{staticClass:"ml-1",class:t.profitRatio?"small":"",attrs:{title:t.stakeCurrency}},[t._v(t._s(t.profitString))]):t._e()])],1)},rt=[];M._withStripped=!0;const x={};var z=p(l,M,rt,!1,it,"5e5e0954",null,null);function it(t){for(let e in x)this[e]=x[e]}z.options.__file="src/components/general/ProfitPill.vue";var st=function(){return z.exports}(),ot=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,V=(t,e,r,s)=>{for(var i=s>1?void 0:s?nt(e,r):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(s?n(e,r,i):n(i))||i);return s&&i&&ot(e,r,i),i};let v=class extends m{constructor(){super(...arguments);this.formatPercent=y,this.timestampms=c}get profitDesc(){let t=`Current profit: ${y(this.trade.profit_ratio)} (${this.trade.profit_abs})`;return t+=`
Open since: ${c(this.trade.open_timestamp)}`,t}};V([a({required:!0,type:Object})],v.prototype,"trade",2);v=V([d({components:{ProfitPill:st}})],v);var q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("profit-pill",{attrs:{"profit-ratio":t.trade.profit_ratio,"profit-abs":t.trade.profit_abs,"profit-desc":t.profitDesc,"stake-currency":"USDT"}})},at=[];q._withStripped=!0;const S={};var F=p(v,q,at,!1,lt,"561d14f2",null,null);function lt(t){for(let e in S)this[e]=S[e]}F.options.__file="src/components/ftbot/TradeProfit.vue";var mt=function(){return F.exports}(),H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",t._b({staticClass:"material-design-icon gesture-tap-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(s){return t.$emit("click",s)}}},"span",t.$attrs,!1),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M10,9A1,1 0 0,1 11,8A1,1 0 0,1 12,9V13.47L13.21,13.6L18.15,15.79C18.68,16.03 19,16.56 19,17.14V21.5C18.97,22.32 18.32,22.97 17.5,23H11C10.62,23 10.26,22.85 10,22.57L5.1,18.37L5.84,17.6C6.03,17.39 6.3,17.28 6.58,17.28H6.8L10,19V9M11,5A4,4 0 0,1 15,9C15,10.5 14.2,11.77 13,12.46V11.24C13.61,10.69 14,9.89 14,9A3,3 0 0,0 11,6A3,3 0 0,0 8,9C8,9.89 8.39,10.69 9,11.24V12.46C7.8,11.77 7,10.5 7,9A4,4 0 0,1 11,5Z"}},[t.title?r("title",[t._v(t._s(t.title))]):t._e()])])])},_t=[];H._withStripped=!0;const pt={name:"GestureTapIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},T={};var B=p(pt,H,_t,!1,ct,null,null,null);function ct(t){for(let e in T)this[e]=T[e]}B.options.__file="node_modules/vue-material-design-icons/GestureTap.vue";var ht=function(){return B.exports}();export{ht as A,dt as D,vt as F,st as P,mt as T};
//# sourceMappingURL=GestureTap.1e432692.js.map