import{S as b,t as f,c as _,B as v}from"./index.3277bc57.js";import{n as M,b as c,C as x,V as L,c as q}from"./vendor.4be520cf.js";import{T as O,P as j}from"./GestureTap.1e432692.js";var w=Object.defineProperty,E=Object.getOwnPropertyDescriptor,i=(t,r,e,o)=>{for(var s=o>1?void 0:o?E(r,e):r,n=t.length-1,p;n>=0;n--)(p=t[n])&&(s=(o?p(r,e,s):p(s))||s);return o&&s&&w(r,e,s),s},h,S;const m=M(b.ftbot);let a=class extends L{constructor(){super(...arguments);this.timestampms=f,this.formatPercent=_}get combinedPairList(){const t=[];return this.pairlist.forEach(r=>{const e=this.trades.filter(l=>l.pair===r),o=this.currentLocks.filter(l=>l.pair===r);let s="",n;o.sort((l,$)=>l.lock_end_timestamp>$.lock_end_timestamp?-1:1),o.length>0&&([n]=o,s=`${f(n.lock_end_timestamp)} - ${n.reason}`);let p="",u=0,k=0;e.forEach(l=>{u+=l.profit_ratio,k+=l.profit_abs});const P=e.length,d=P?e[0]:void 0;e.length>0&&(p=`Current profit: ${_(u)}`),d&&(p+=`
Open since: ${f(d.open_timestamp)}`),t.push({pair:r,trade:d,locks:n,lockReason:s,profitString:p,profit:u,profitAbs:k,tradeCount:P})}),this.sortMethod==="profit"?t.sort((r,e)=>r.profit>e.profit?-1:1):t.sort((r,e)=>r.trade&&!e.trade?-1:r.trade&&e.trade?r.trade.trade_id>e.trade.trade_id?1:-1:!r.locks&&e.locks?-1:r.locks&&e.locks?r.locks.lock_end_timestamp>e.locks.lock_end_timestamp?1:-1:1),t}get tableFields(){return[{key:"pair",label:"Pair"},{key:"locks.lock_end_timestamp",label:"Lock",formatter:t=>t?`${f(t)}`:""},{key:"trade.current_profit",label:"Position",formatter:t=>_(t,3)}]}};h=v.selectedPair,S=v.stakeCurrency;i([c({required:!0})],a.prototype,"pairlist",2);i([c({required:!1,default:()=>[]})],a.prototype,"currentLocks",2);i([c({required:!0})],a.prototype,"trades",2);i([c({required:!1,default:"normal"})],a.prototype,"sortMethod",2);i([c({required:!1,default:!1})],a.prototype,"backtestMode",2);i([m.Action],a.prototype,"setSelectedPair",2);i([m.Getter],a.prototype,h,2);i([m.Getter],a.prototype,S,2);a=i([x({components:{TradeProfit:O,ProfitPill:j}})],a);var g=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("b-list-group",t._l(t.combinedPairList,function(o){return e("b-list-group-item",{key:o.pair,staticClass:"d-flex justify-content-between align-items-center py-1",attrs:{button:"",active:o.pair===t.selectedPair,title:o.pair+" - "+o.tradeCount+" trades"},on:{click:function(s){return t.setSelectedPair(o.pair)}}},[e("div",[t._v(" "+t._s(o.pair)+" "),o.locks?e("span",{attrs:{title:o.lockReason}},[t._v(" \u{1F512} ")]):t._e()]),o.trade&&!t.backtestMode?e("TradeProfit",{attrs:{trade:o.trade}}):t._e(),t.backtestMode&&o.tradeCount>0?e("ProfitPill",{attrs:{"profit-ratio":o.profit,"stake-currency":t.stakeCurrency}}):t._e()],1)}),1)},G=[];g._withStripped=!0;const y={};var C=q(a,g,G,!1,R,"115114d4",null,null);function R(t){for(let r in y)this[r]=y[r]}C.options.__file="src/components/ftbot/PairSummary.vue";var D=function(){return C.exports}();export{D as P};
//# sourceMappingURL=PairSummary.db39523a.js.map
