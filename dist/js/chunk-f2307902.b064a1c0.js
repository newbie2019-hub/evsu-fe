(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f2307902"],{"25b7":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"mr-6 ml-6",attrs:{cols:"12",sm:"10",md:"10",lg:"10"}},[s("v-app-bar-nav-icon",{staticClass:"mt-6",on:{click:function(t){return t.stopPropagation(),e.setDrawerState.apply(null,arguments)}}}),s("section",[s("main",[e._l(e.messages,(function(t,n){return s("div",{key:"index-"+n,class:["message",e.sentOrReceived(t.userUID)]},[s("p",[e._v(e._s(t.text))])])})),s("div",{ref:"scrollable"})],2),s("form",{on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"Enter your message!"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("button",{staticClass:"btn-send",attrs:{disabled:!e.message,type:"submit"}},[e._v("📩")])])])],1)],1)],1)},a=[],r=s("5530"),c=s("1da1"),o=(s("96cf"),s("d81d"),s("2f62")),u=s("8aa50"),i=s.n(u),d={mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.title="Chat Application - Evsu-TES",t.next=3,e.$store.dispatch("auth/checkAuthUser");case 3:s=i.a.firestore().collection("messages"),s=s.where("chatID","==",e.user.student_number),s=s.orderBy("createdAt"),s.onSnapshot((function(t){e.messages=t.docs.map((function(e){return e.data()}))}));case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{db:i.a.firestore(),message:"",messages:[],chatID:""}},computed:Object(r["a"])({},Object(o["c"])("auth",["user"])),methods:{setDrawerState:function(){this.$store.commit("updates/SET_DRAWER_STATE")},sentOrReceived:function(e){return e===this.user.student_number?"sent":"received"},sendMessage:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s={userUID:e.user.student_number,displayName:e.user.info.first_name+" "+e.user.info.last_name,text:e.message,createdAt:Date.now(),chatID:e.user.student_number},t.next=3,e.db.collection("messages").add(s);case 3:e.message="",e.$refs["scrollable"].scrollIntoView({behavior:"smooth"});case 5:case"end":return t.stop()}}),t)})))()}}},l=d,m=(s("628d"),s("2877")),p=s("6544"),f=s.n(p),v=s("5bc1"),g=s("62ad"),h=s("a523"),b=s("0fd9"),w=Object(m["a"])(l,n,a,!1,null,"4e15b2d8",null);t["default"]=w.exports;f()(w,{VAppBarNavIcon:v["a"],VCol:g["a"],VContainer:h["a"],VRow:b["a"]})},"628d":function(e,t,s){"use strict";s("94dc")},"94dc":function(e,t,s){}}]);
//# sourceMappingURL=chunk-f2307902.b064a1c0.js.map