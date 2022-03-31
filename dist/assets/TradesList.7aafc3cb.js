import{z as R,c as f,n as g,b as l,C as x,D as q,V as b}from"./vendor.4be520cf.js";import{e as v,c as $,S as w,B as _}from"./index.3277bc57.js";import{D,T as P,F as H,A as V}from"./GestureTap.1e432692.js";import{T as Z}from"./TradeDetail.5acb8285.js";import"./ValuePair.422b28cf.js";var W=R({components:{DateTimeTZ:D,TradeProfit:P},props:{trade:{type:Object,required:!0},stakeCurrencyDecimals:{type:Number,required:!0},showDetails:{type:Boolean,default:!1}},setup(){return{formatPrice:v,formatPercent:$}}}),L=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"d-flex"},[t("div",{staticClass:"px-1 d-flex flex-row flex-fill text-left justify-content-between align-items-center"},[t("span",[t("span",{staticClass:"mr-1 font-weight-bold"},[e._v(e._s(e.trade.pair))]),t("small",{staticClass:"text-secondary"},[e._v("(#"+e._s(e.trade.trade_id)+")")])]),t("small",[t("DateTimeTZ",{attrs:{date:e.trade.open_timestamp,"date-only":!0,title:"open Date"}})],1)]),t("trade-profit",{staticClass:"col-5",attrs:{trade:e.trade}})],1)},J=[];L._withStripped=!0;const y={};var S=f(W,L,J,!1,K,"33426007",null,null);function K(e){for(let r in y)this[r]=y[r]}S.options.__file="src/components/ftbot/CustomTradeListEntry.vue";var Q=function(){return S.exports}(),U=Object.defineProperty,X=Object.getOwnPropertyDescriptor,i=(e,r,t,s)=>{for(var a=s>1?void 0:s?X(r,t):r,d=e.length-1,u;d>=0;d--)(u=e[d])&&(a=(s?u(r,t,a):u(a))||a);return s&&a&&U(r,t,a),a};const m=g(w.ftbot);let o=class extends b{constructor(){super(...arguments);this.formatPercent=$,this.formatPrice=v,this.currentPage=1,this.selectedItemIndex=void 0,this.filterText="",this.perPage=this.activeTrades?200:25}get rows(){return this.trades.length}get filteredTrades(){return this.trades.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)}formatPriceWithDecimals(e){return v(e,this.stakeCurrencyDecimals)}forcesellHandler(e,r=void 0){this.$bvModal.msgBoxConfirm(`Really forcesell trade ${e.trade_id} (Pair ${e.pair})?`).then(t=>{if(t){const s={tradeid:String(e.trade_id),botId:e.botId};r&&(s.ordertype=r),this.forceSellMulti(s).then(a=>console.log(a)).catch(a=>console.log(a.response))}})}handleContextMenuEvent(e,r,t){!this.activeTrades||(t.preventDefault(),console.log(e))}removeTradeHandler(e){console.log(e),this.$bvModal.msgBoxConfirm(`Really delete trade ${e.trade_id} (Pair ${e.pair})?`).then(r=>{if(r){const t={tradeid:String(e.trade_id),botId:e.botId};this.deleteTradeMulti(t).catch(s=>console.log(s.response))}})}tradeClick(e){this.setDetailTrade(e)}};i([l({required:!0})],o.prototype,"trades",2);i([l({default:"Trades"})],o.prototype,"title",2);i([l({required:!1,default:""})],o.prototype,"stakeCurrency",2);i([l({default:!1})],o.prototype,"activeTrades",2);i([l({default:!1})],o.prototype,"showFilter",2);i([l({default:!1,type:Boolean})],o.prototype,"multiBotView",2);i([l({default:"No Trades to show."})],o.prototype,"emptyText",2);i([l({default:3,type:Number})],o.prototype,"stakeCurrencyDecimals",2);i([m.Action],o.prototype,"setDetailTrade",2);i([m.Action],o.prototype,"forceSellMulti",2);i([m.Action],o.prototype,"deleteTradeMulti",2);o=i([x({components:{DeleteIcon:q,ForceSellIcon:H,ActionIcon:V,DateTimeTZ:D,TradeProfit:P,CustomTradeListEntry:Q}})],o);var k=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"h-100 overflow-auto p-1"},[t("b-list-group",{attrs:{id:"tradeList"}},e._l(e.filteredTrades,function(s){return t("b-list-group-item",{key:s.trade_id,staticClass:"border border-secondary rounded my-05 px-1",on:{click:function(a){return e.tradeClick(s)}}},[t("CustomTradeListEntry",{attrs:{trade:s,"stake-currency-decimals":e.stakeCurrencyDecimals}})],1)}),1),e.trades.length==0?t("span",{staticClass:"mt-5"},[e._v(e._s(e.emptyText))]):e._e(),t("div",{staticClass:"w-100 d-flex justify-content-between mt-1"},[e.activeTrades?e._e():t("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"tradeList"},model:{value:e.currentPage,callback:function(s){e.currentPage=s},expression:"currentPage"}}),e.showFilter?t("b-input",{staticStyle:{width:"unset"},attrs:{type:"text",placeholder:"Filter",size:"sm"},model:{value:e.filterText,callback:function(s){e.filterText=s},expression:"filterText"}}):e._e()],1)],1)},Y=[];k._withStripped=!0;const h={};var I=f(o,k,Y,!1,ee,"2c20f34a",null,null);function ee(e){for(let r in h)this[r]=h[r]}I.options.__file="src/components/ftbot/CustomTradeList.vue";var te=function(){return I.exports}(),M=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("span",e._b({staticClass:"material-design-icon arrow-left-icon",attrs:{"aria-hidden":!e.title,"aria-label":e.title,role:"img"},on:{click:function(s){return e.$emit("click",s)}}},"span",e.$attrs,!1),[t("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[t("path",{attrs:{d:"M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"}},[e.title?t("title",[e._v(e._s(e.title))]):e._e()])])])},re=[];M._withStripped=!0;const se={name:"ArrowLeftIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},T={};var j=f(se,M,re,!1,ae,null,null,null);function ae(e){for(let r in T)this[r]=T[r]}j.options.__file="node_modules/vue-material-design-icons/ArrowLeft.vue";var oe=function(){return j.exports}(),ie=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,c=(e,r,t,s)=>{for(var a=s>1?void 0:s?ne(r,t):r,d=e.length-1,u;d>=0;d--)(u=e[d])&&(a=(s?u(r,t,a):u(a))||a);return s&&a&&ie(r,t,a),a},B,O,E,F,A,z;const p=g(w.ftbot);let n=class extends b{};B=_.openTrades,O=_.closedTrades,E=_.stakeCurrencyDecimals,F=_.stakeCurrency,A=_.detailTradeId,z=_.tradeDetail;c([l({default:!1})],n.prototype,"history",2);c([p.Getter],n.prototype,B,2);c([p.Getter],n.prototype,O,2);c([p.Getter],n.prototype,E,2);c([p.Getter],n.prototype,F,2);c([p.Getter],n.prototype,A,2);c([p.Getter],n.prototype,z,2);c([p.Action],n.prototype,"setDetailTrade",2);n=c([x({components:{CustomTradeList:te,TradeDetail:Z,BackIcon:oe}})],n);var G=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[!e.history&&!e.detailTradeId?t("CustomTradeList",{attrs:{trades:e.openTrades,title:"Open trades","active-trades":!0,"stake-currency-decimals":e.stakeCurrencyDecimals,"empty-text":"No open Trades."}}):e._e(),e.history&&!e.detailTradeId?t("CustomTradeList",{attrs:{trades:e.closedTrades,title:"Trade history","stake-currency-decimals":e.stakeCurrencyDecimals,"empty-text":"No closed trades so far."}}):e._e(),e.detailTradeId?t("div",{staticClass:"d-flex flex-column"},[t("b-button",{staticClass:"align-self-start mt-1 ml-1",attrs:{size:"sm"},on:{click:function(s){return e.setDetailTrade(null)}}},[t("BackIcon"),e._v(" Back")],1),t("TradeDetail",{attrs:{trade:e.tradeDetail,"stake-currency":e.stakeCurrency}})],1):e._e()],1)},le=[];G._withStripped=!0;const C={};var N=f(n,G,le,!1,ce,"34be0407",null,null);function ce(e){for(let r in C)this[r]=C[r]}N.options.__file="src/views/TradesList.vue";var ve=function(){return N.exports}();export{ve as default};
//# sourceMappingURL=TradesList.7aafc3cb.js.map