import{S as _,o as d,p as c,L as V,a as y,A as D,i as m}from"./index.3277bc57.js";import{n as g,C as G,V as U,G as I,c as P}from"./vendor.4be520cf.js";var j=Object.defineProperty,B=Object.getOwnPropertyDescriptor,s=(e,a,t,n)=>{for(var r=n>1?void 0:n?B(a,t):a,u=e.length-1,p;u>=0;u--)(p=e[u])&&(r=(n?p(a,t,r):p(r))||r);return n&&r&&j(a,t,r),r},L,v,b,f,T,k,S,z,x,w,A;const l=g(_.layout),i=g(_.uiSettings),F=g(_.alerts);let o=class extends U{constructor(){super(...arguments);this.openTradesOptions=[{value:d.showPill,text:"Show pill in icon"},{value:d.asTitle,text:"Show in title"},{value:d.noOpenTrades,text:"Don't show open trades in header"}],this.timezoneOptions=["UTC",Intl.DateTimeFormat().resolvedOptions().timeZone]}get timezoneLoc(){return this.timezone}set timezoneLoc(e){this[c.setTimeZone](e)}get openTradesVisualization(){return this.openTradesInTitle}set openTradesVisualization(e){this.setOpenTradesInTitle(e)}get layoutLockedLocal(){return this.getLayoutLocked}set layoutLockedLocal(e){this.setLayoutLocked(e)}get backgroundSyncLocal(){return this.backgroundSync}set backgroundSyncLocal(e){this.setBackgroundSync(e)}resetDynamicLayout(){this.resetTradingLayout(),this.resetDashboardLayout(),this.addAlert({message:"Layouts have been reset."})}};L=V.getLayoutLocked,v=y.setLayoutLocked,b=y.resetTradingLayout,f=y.resetDashboardLayout,T=D.addAlert,k=m.openTradesInTitle,S=m.timezone,z=m.backgroundSync,x=c.setOpenTradesInTitle,w=c.setTimeZone,A=c.setBackgroundSync;s([I],o.prototype,"getUiVersion",2);s([l.Getter],o.prototype,L,2);s([l.Action],o.prototype,v,2);s([l.Action],o.prototype,b,2);s([l.Action],o.prototype,f,2);s([F.Action],o.prototype,T,2);s([i.Getter],o.prototype,k,2);s([i.Getter],o.prototype,S,2);s([i.Getter],o.prototype,z,2);s([i.Action],o.prototype,x,2);s([i.Action],o.prototype,w,2);s([i.Action],o.prototype,A,2);o=s([G({})],o);var O=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container mt-3"},[t("b-card",{attrs:{header:"FreqUI Settings"}},[t("div",{staticClass:"text-left"},[t("p",[e._v("UI Version: "+e._s(e.getUiVersion))]),t("b-form-group",{attrs:{description:"Lock dynamic layouts, so they cannot move anymore. Can also be set from the navbar at the top."}},[t("b-checkbox",{model:{value:e.layoutLockedLocal,callback:function(n){e.layoutLockedLocal=n},expression:"layoutLockedLocal"}},[e._v("Lock layout")])],1),t("b-form-group",{attrs:{description:"Reset dynamic layouts to how they were."}},[t("b-button",{attrs:{size:"sm"},on:{click:e.resetDynamicLayout}},[e._v("Reset layout")])],1),t("b-form-group",{attrs:{label:"Show open trades in header",description:"Decide if open trades should be visualized"}},[t("b-form-select",{attrs:{options:e.openTradesOptions},model:{value:e.openTradesVisualization,callback:function(n){e.openTradesVisualization=n},expression:"openTradesVisualization"}})],1),t("b-form-group",{attrs:{label:"UTC Timezone",description:"Select timezone (we recommend UTC is recommended as exchanges usually work in UTC)"}},[t("b-form-select",{attrs:{options:e.timezoneOptions},model:{value:e.timezoneLoc,callback:function(n){e.timezoneLoc=n},expression:"timezoneLoc"}})],1),t("b-form-group",{attrs:{description:"Keep background sync running while other bots are selected."}},[t("b-checkbox",{model:{value:e.backgroundSyncLocal,callback:function(n){e.backgroundSyncLocal=n},expression:"backgroundSyncLocal"}},[e._v("Background sync")])],1)],1)])],1)},R=[];O._withStripped=!0;const h={};var C=P(o,O,R,!1,Z,"53cc84dd",null,null);function Z(e){for(let a in h)this[a]=h[a]}C.options.__file="src/views/Settings.vue";var $=function(){return C.exports}();export{$ as default};
//# sourceMappingURL=Settings.2d42a5db.js.map
