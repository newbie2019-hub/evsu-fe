(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bed9469a"],{"3c93":function(t,e,r){},"77d0":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-overlay",{attrs:{value:t.isLoading}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},i=[],n=r("1da1"),s=(r("96cf"),{data:function(){return{isLoading:!0}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title="Email Verification",e.next=3,t.applicantEmailVerification();case 3:t.isLoading=!1;case 4:case"end":return e.stop()}}),e)})))()},methods:{applicantEmailVerification:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={token:t.$route.query.token,id:t.$route.query.id,type:t.$route.query.type},e.next=3,t.$store.dispatch("applicant/verifyEmail",r);case 3:a=e.sent,console.log(a),200==a.status?(t.$toast.success("Email verification successful"),t.isLoading=!1,t.$router.push("/")):(t.$toast.error("Verification request is invalid"),t.$router.push("/"));case 6:case"end":return e.stop()}}),e)})))()}}}),o=s,c=r("2877"),u=r("6544"),l=r.n(u),d=r("a797"),p=r("490a"),v=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=v.exports;l()(v,{VOverlay:d["a"],VProgressCircular:p["a"]})},a797:function(t,e,r){"use strict";var a=r("5530"),i=(r("a9e3"),r("3c93"),r("a9ad")),n=r("7560"),s=r("f2e7"),o=r("58df");e["a"]=Object(o["a"])(i["a"],n["a"],s["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(a["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})}}]);
//# sourceMappingURL=chunk-bed9469a.23c95640.js.map