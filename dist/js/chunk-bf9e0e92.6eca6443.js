(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf9e0e92"],{"0976":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-overlay",{attrs:{value:e.isLoading}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},a=[],n=r("1da1"),i=(r("96cf"),{data:function(){return{isLoading:!0}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.title="Email Verification",t.next=3,e.checkPasswordResetToken();case 3:e.isLoading=!1;case 4:case"end":return t.stop()}}),t)})))()},methods:{checkPasswordResetToken:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={token:e.$route.query.token,id:e.$route.query.id},t.next=3,e.$store.dispatch("auth/verifyEmail",r);case 3:s=t.sent,200==s.status?(e.$toast.success("Email verification successful"),e.isLoading=!1,e.$router.push("/")):(e.$toast.error("Verification request is invalid"),e.$router.push("/"));case 5:case"end":return t.stop()}}),t)})))()}}}),o=i,c=r("2877"),u=r("6544"),l=r.n(u),d=r("a797"),v=r("490a"),h=Object(c["a"])(o,s,a,!1,null,null,null);t["default"]=h.exports;l()(h,{VOverlay:d["a"],VProgressCircular:v["a"]})},"3c93":function(e,t,r){},a797:function(e,t,r){"use strict";var s=r("5530"),a=(r("a9e3"),r("3c93"),r("a9ad")),n=r("7560"),i=r("f2e7"),o=r("58df");t["a"]=Object(o["a"])(a["a"],n["a"],i["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return Object(s["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}})}}]);
//# sourceMappingURL=chunk-bf9e0e92.6eca6443.js.map