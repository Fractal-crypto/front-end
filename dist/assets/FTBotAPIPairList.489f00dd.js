import{n as v,C as m,D as g,V as w,c as S}from"./vendor.4be520cf.js";import{S as B,B as n}from"./index.3277bc57.js";var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,r=(t,l,i,e)=>{for(var s=e>1?void 0:e?C(l,i):l,c=t.length-1,p;c>=0;c--)(p=t[c])&&(s=(e?p(l,i,s):p(s))||s);return e&&s&&P(l,i,s),s},u,h,d,_;const o=v(B.ftbot);let a=class extends w{constructor(){super(...arguments);this.newblacklistpair="",this.blackListShow=!1,this.blacklistSelect=[]}created(){this.initBlacklist()}initBlacklist(){this.whitelist.length===0&&this.getWhitelist(),this.blacklist.length===0&&this.getBlacklist()}addBlacklistPair(){this.newblacklistpair&&(this.blackListShow=!1,this.addBlacklist({blacklist:[this.newblacklistpair]}),this.newblacklistpair="")}blacklistSelectClick(t){console.log(t);const l=this.blacklistSelect.indexOf(t);l>-1?this.blacklistSelect.splice(l,1):this.blacklistSelect.push(t)}deletePairs(){if(this.blacklistSelect.length===0){console.log("nothing to delete");return}const t=this.blacklist.filter((l,i)=>this.blacklistSelect.indexOf(i)>-1);console.log("Deleting pairs: ",t),this.deleteBlacklist(t),this.blacklistSelect=[]}};u=n.whitelist,h=n.blacklist,d=n.pairlistMethods,_=n.botApiVersion;r([o.Action],a.prototype,"getWhitelist",2);r([o.Action],a.prototype,"getBlacklist",2);r([o.Action],a.prototype,"addBlacklist",2);r([o.Action],a.prototype,"deleteBlacklist",2);r([o.Getter],a.prototype,u,2);r([o.Getter],a.prototype,h,2);r([o.Getter],a.prototype,d,2);r([o.Getter],a.prototype,_,2);a=r([m({components:{DeleteIcon:g}})],a);var f=function(){var t=this,l=t.$createElement,i=t._self._c||l;return i("div",[i("div",[i("h3",[t._v("Whitelist Methods")]),t.pairlistMethods.length?i("div",{staticClass:"list"},t._l(t.pairlistMethods,function(e,s){return i("b-list-group",{key:s},[i("b-list-group-item",{staticClass:"pair white",attrs:{href:"#"}},[t._v(t._s(e))])],1)}),1):t._e()]),i("h3",[t._v("Whitelist")]),t.whitelist.length?i("div",{staticClass:"list"},t._l(t.whitelist,function(e,s){return i("b-list-group",{key:s},[i("b-list-group-item",{staticClass:"pair white"},[t._v(t._s(e))])],1)}),1):i("p",[t._v("List Unavailable. Please Login and make sure server is running.")]),i("hr"),i("div",[i("label",{staticClass:"mr-auto h3",attrs:{title:"Blacklist - Select (followed by a click on '-') to remove pairs"}},[t._v("Blacklist")]),i("div",{staticClass:"float-right d-flex d-flex-columns pr-1"},[i("b-button",{staticClass:"mr-1",class:t.botApiVersion>=1.12?"col-6":"",attrs:{id:"blacklist-add-btn",size:"sm"}},[t._v("+")]),t.botApiVersion>=1.12?i("b-button",{staticClass:"col-6",attrs:{size:"sm",title:"Select pairs to delete pairs from your blacklist.",disabled:t.blacklistSelect.length===0},on:{click:t.deletePairs}},[i("DeleteIcon",{attrs:{size:16,title:"Delete Bot"}})],1):t._e()],1),i("b-popover",{attrs:{title:"Add to blacklist",target:"blacklist-add-btn",triggers:"click blur",show:t.blackListShow},on:{"update:show":function(e){t.blackListShow=e}}},[i("form",{ref:"form",on:{submit:function(e){e.preventDefault()}}},[i("div",[i("b-form-group",{attrs:{"label-cols":"2",label:"Pair","label-for":"pair-input"}},[i("b-form-input",{attrs:{id:"pair-input",required:"",autofocus:""},model:{value:t.newblacklistpair,callback:function(e){t.newblacklistpair=e},expression:"newblacklistpair"}})],1),i("b-button",{staticClass:"float-right mb-2",attrs:{id:"blacklist-submit",size:"sm",type:"submit"},on:{click:t.addBlacklistPair}},[t._v("Add")])],1)])])],1),t.blacklist.length?i("div",{staticClass:"list"},t._l(t.blacklist,function(e,s){return i("b-list-group",{key:s},[i("b-list-group-item",{staticClass:"pair black",attrs:{active:t.blacklistSelect.indexOf(s)>-1},on:{click:function(c){return t.blacklistSelectClick(s)}}},[i("span",{staticClass:"check"},[t._v("\u2714")]),t._v(t._s(e))])],1)}),1):i("p",[t._v("BlackList Unavailable. Please Login and make sure server is running.")])])},y=[];f._withStripped=!0;const b={};var k=S(a,f,y,!1,A,"4ebb169f",null,null);function A(t){for(let l in b)this[l]=b[l]}k.options.__file="src/components/ftbot/FTBotAPIPairList.vue";var D=function(){return k.exports}();export{D as default};
//# sourceMappingURL=FTBotAPIPairList.489f00dd.js.map