(function(e){function t(t){for(var r,a,o=t[0],s=t[1],i=t[2],h=0,d=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return s.p+"js/"+({index:"index"}[e]||e)+"."+{"chunk-02ee1dba":"f4933090","chunk-08c0d230":"0545832b","chunk-48d521a2":"e7b875b3","chunk-2d0b97d6":"4f566c65","chunk-2d0c9596":"3008bd91","chunk-2d0e5060":"06a25bfc","chunk-2d0e886d":"1918634c","chunk-2d2380a7":"e9f15b78","chunk-3dac332c":"b63df622","chunk-347ac986":"2a2568dc","chunk-4f696de1":"f3408f2a","chunk-8843433c":"a14dc175","chunk-33185fe8":"7b78406d","chunk-2d0c85d5":"4fb6074e","chunk-350aa2a6":"c8fb8508","chunk-75edbe47":"897bccb0","chunk-37f7dfc9":"49464aad","chunk-3a52b36c":"273da92c","chunk-3c73bab4":"254a16da","chunk-53ffc5f2":"6198e0ec","chunk-6b24b1c1":"90f90c96","chunk-26f66b72":"fac40d32","chunk-0bff00d2":"0aebfb03","chunk-59ab24be":"a4af6583","chunk-8a599596":"fa880049",index:"7843861a","chunk-bed9469a":"23c95640","chunk-bf9e0e92":"6eca6443","chunk-f653c808":"77639703"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-02ee1dba":1,"chunk-48d521a2":1,"chunk-3dac332c":1,"chunk-347ac986":1,"chunk-4f696de1":1,"chunk-8843433c":1,"chunk-33185fe8":1,"chunk-350aa2a6":1,"chunk-75edbe47":1,"chunk-37f7dfc9":1,"chunk-3a52b36c":1,"chunk-3c73bab4":1,"chunk-53ffc5f2":1,"chunk-6b24b1c1":1,"chunk-26f66b72":1,"chunk-0bff00d2":1,"chunk-59ab24be":1,"chunk-8a599596":1,index:1,"chunk-bed9469a":1,"chunk-bf9e0e92":1,"chunk-f653c808":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({index:"index"}[e]||e)+"."+{"chunk-02ee1dba":"d65c8eee","chunk-08c0d230":"31d6cfe0","chunk-48d521a2":"ab5d0106","chunk-2d0b97d6":"31d6cfe0","chunk-2d0c9596":"31d6cfe0","chunk-2d0e5060":"31d6cfe0","chunk-2d0e886d":"31d6cfe0","chunk-2d2380a7":"31d6cfe0","chunk-3dac332c":"cb159bf5","chunk-347ac986":"4a5e18cf","chunk-4f696de1":"4a5e18cf","chunk-8843433c":"10121ac9","chunk-33185fe8":"6f8e5c02","chunk-2d0c85d5":"31d6cfe0","chunk-350aa2a6":"5520929e","chunk-75edbe47":"4502b15d","chunk-37f7dfc9":"f31978f5","chunk-3a52b36c":"890a378c","chunk-3c73bab4":"d1383c22","chunk-53ffc5f2":"03efae28","chunk-6b24b1c1":"30c7113b","chunk-26f66b72":"c21131e8","chunk-0bff00d2":"ea3c4e9d","chunk-59ab24be":"48bc3304","chunk-8a599596":"92cbdd84",index:"571ea710","chunk-bed9469a":"487f8d50","chunk-bf9e0e92":"487f8d50","chunk-f653c808":"d65c8eee"}[e]+".css",c=s.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],h=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(h===r||h===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],h=i.getAttribute("data-href");if(h===r||h===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var i,h=document.createElement("script");h.charset="utf-8",h.timeout=120,s.nc&&h.setAttribute("nonce",s.nc),h.src=o(e);var d=new Error;i=function(t){h.onerror=h.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:h})}),12e4);h.onerror=h.onload=i,document.head.appendChild(h)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var p=h;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09ab":function(e,t,n){"use strict";var r=n("bc3a"),a=n.n(r),c=localStorage.getItem("auth")||"",u=a.a.create({baseURL:"https://be.tesgrant.info/api"});u.defaults.headers.common["Authorization"]="Bearer ".concat(c),t["a"]=u},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},c=[],u={data:function(){return{group:{},drawer:!1}}},o=u,s=n("2877"),i=n("6544"),h=n.n(i),d=n("7496"),p=Object(s["a"])(o,a,c,!1,null,null,null),m=p.exports;h()(p,{VApp:d["a"]});var f=n("f309");r["a"].use(f["a"]);var l=new f["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}}),b=(n("5363"),n("6c42")),g=(n("da96"),n("2f62")),k=n("1da1"),v=(n("96cf"),n("09ab")),w={namespaced:!0,state:{user:{info:{first_name:"Evsu",last_name:"Tacloban"}},userinfo:[],useraccount:[],signup:"",accounts:[],token:localStorage.getItem("auth")||"",selectedAccount:[]},getters:{GET_USER:function(e){return e.user}},mutations:{SET_ACCOUNTS:function(e,t){e.accounts=t},SET_VIEW_ACCOUNT:function(e,t){e.selectedAccount=t.data},SET_AUTH_ACC:function(e,t){e.userinfo=t.user_info,e.useraccount=t.user_account;var n=localStorage.getItem("auth")||"";v["a"].defaults.headers.common["Authorization"]="Bearer ".concat(n)},SET_ACC:function(e,t){e.user=t;var n=localStorage.getItem("auth")||"";v["a"].defaults.headers.common["Authorization"]="Bearer ".concat(n)},SET_USER_ACC:function(e,t){e.user=t},SET_USER_TOKEN:function(e,t){localStorage.setItem("auth",t),localStorage.setItem("isUser","true"),e.token=t;var n=localStorage.getItem("auth")||"";v["a"].defaults.headers.common["Authorization"]="Bearer ".concat(n)},SET_AUTH_TOKEN:function(e,t){localStorage.setItem("auth",t),localStorage.setItem("isAdmin","true"),e.token=t;var n=localStorage.getItem("auth")||"";v["a"].defaults.headers.common["Authorization"]="Bearer ".concat(n)},SET_ORG_DEPARTMENT:function(e,t){e.signup=t},UNSET_USER:function(e){localStorage.removeItem("auth"),localStorage.removeItem("isUser"),localStorage.removeItem("isAdmin"),e.token="",e.user={info:{first_name:"Evsu",last_name:"Tacloban"}},v["a"].defaults.headers.common["Authorization"]=""}},actions:{loginAccount:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v["a"].post("/auth/admin/login",t).then((function(e){return r("SET_AUTH_ACC",e.data),r("SET_AUTH_TOKEN",e.data.access_token),e})).catch((function(e){return e}));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()},loginUserAccount:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v["a"].post("/auth/user/login",t).then((function(e){return r("SET_USER_ACC",e.data.user),r("SET_USER_TOKEN",e.data.access_token),e})).catch((function(e){return e.response}));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()},registerAccount:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("/auth/user/store",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},getAccounts:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v["a"].get("/auth/admin/accounts?search=".concat(t)).then((function(e){return r("SET_ACCOUNTS",e.data),e})).catch((function(e){return e.response}));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()},getSignUpInfo:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,v["a"].get("depandorg").then((function(e){return n("SET_ORG_DEPARTMENT",e.data),e})).catch((function(e){return e.response}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},updateAccount:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("auth/user/update",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},updateAdminAccount:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("auth/admin/update",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},logoutUser:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,v["a"].post("auth/admin/logout?token="+localStorage.getItem("auth")).then((function(e){return n("UNSET_USER"),e})).catch((function(e){return e.response}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},logoutAuthUser:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,v["a"].post("auth/user/logout?token="+localStorage.getItem("auth")).then((function(e){return n("UNSET_USER"),e})).catch((function(e){return e.response}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},checkUser:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,e.dispatch,t.next=3,v["a"].post("auth/admin/me?token="+localStorage.getItem("auth")).then((function(e){return n("SET_ACC",e.data),e})).catch((function(e){return 401==e.response.status&&(n("UNSET_USER"),location.reload()),e.response}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},changeAdminPassword:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("auth/admin/change_password",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},changeUserPassword:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("auth/user/change_password",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},checkAuthUser:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,v["a"].post("auth/user/me?token="+localStorage.getItem("auth")).then((function(e){return n("SET_ACC",e.data),e})).catch((function(e){return e.response}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},checkEmail:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("request/account/reset",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},deleteAccount:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].delete("/admin/account/".concat(t.id)).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},approveAccount:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].put("/admin/account/approve/".concat(t.id)).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},verifyEmail:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("user/email/verify",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},checkResetPassword:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("request/check/reset",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},saveResetPassword:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("request/reset/password",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()}}},x={namespaced:!0,state:{edit_update:{title:"",post_content:"",post_excerpt:""},view_update:{title:"",post_content:"",post_excerpt:""},updates:{data:[]},drawer:!1},getters:{},mutations:{SET_UPDATES:function(e,t){e.updates=t},SET_EDIT_UPDATE:function(e,t){var n=t.data;e.edit_update=n},SET_VIEW_UPDATE:function(e,t){var n=t.data;e.view_update=n},SET_DRAWER_STATE:function(e,t){e.drawer=!e.drawer}},actions:{getUpdates:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v["a"].get("/admin/post?page=".concat(t)).then((function(e){return r("SET_UPDATES",e.data),e})).catch((function(e){return e.response}));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()},saveUpdate:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("/admin/post",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},editUpdate:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].put("/admin/post/".concat(t.id),t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},viewUpdate:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].get("/admin/post/view/".concat(t.id),t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},deleteUpdate:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].delete("/admin/post/".concat(t.id)).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},getUserUpdates:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v["a"].get("/user/post?page=".concat(t)).then((function(e){return r("SET_UPDATES",e.data),e})).catch((function(e){return e.response}));case 3:return a=n.sent,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))()}}},R=(n("ac1f"),n("841c"),n("99af"),{namespaced:!0,state:{applicants:[{info:{first_name:"",middle_name:"",last_name:""}}],selectedApplicant:[]},getters:{},mutations:{SET_APPLICANTS:function(e,t){e.applicants=t},SET_VIEW_APPLICANT:function(e,t){e.selectedApplicant=t.data}},actions:{getApplicants:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r,a,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.status,c=t.search,n.next=4,v["a"].get("/admin/applicant?status=".concat(a,"&search=").concat(c)).then((function(e){return r("SET_APPLICANTS",e.data),e})).catch((function(e){return e.response}));case 4:return u=n.sent,n.abrupt("return",u);case 6:case"end":return n.stop()}}),n)})))()},verifyEmail:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("user/applicant/email/verify",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},saveApplicant:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].post("/admin/applicant",t).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},deleteApplicant:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,n.next=3,v["a"].delete("/admin/applicant/".concat(t.id)).then((function(e){return e})).catch((function(e){return e.response}));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()}}}),S={namespaced:!0,state:{summary:[]},getters:{},mutations:{SET_SUMMARY:function(e,t){e.summary=t}},actions:{getSummary:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,v["a"].get("/admin/summary").then((function(e){return n("SET_SUMMARY",e.data),e})).catch((function(e){return e.response}));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()}}};r["a"].use(g["a"]);var _=new g["a"].Store({modules:{auth:w,updates:x,applicant:R,dashboard:S}}),E=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-hero"},[r("v-container",[r("v-row",{staticClass:"h-device",attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{lg:"6",md:"8"}},[r("v-layout",{attrs:{"align-center":"","justify-center":"",column:""}},[r("img",{attrs:{src:n("9d64"),alt:"",width:"120",height:"120"}}),r("v-form",{ref:"form",staticClass:"pl-10 pr-10",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("p",{staticClass:"white--text text-center mt-4 mb-2"},[e._v("Welcome, Please enter your credentials to proceed")]),r("v-text-field",{attrs:{label:"Email",rules:e.emailRules,"hide-details":"auto",required:"",color:"white",clearable:"",dark:""},model:{value:e.data.email,callback:function(t){e.$set(e.data,"email",t)},expression:"data.email"}}),r("v-text-field",{attrs:{type:"password",dark:"",label:"Password"},model:{value:e.data.password,callback:function(t){e.$set(e.data,"password",t)},expression:"data.password"}}),r("v-switch",{staticClass:"mt-0",attrs:{label:"Admin login",dark:""},model:{value:e.adminlogin,callback:function(t){e.adminlogin=t},expression:"adminlogin"}}),r("v-btn",{attrs:{type:"submit",depressed:"",color:"primary",block:"",loading:e.isLoading}},[e._v(" Login "),r("v-icon",{attrs:{right:""}},[e._v(" mdi-arrow-right-thin-circle-outline ")])],1)],1),r("router-link",{staticClass:"text-decoration-none white--text container text-center",attrs:{to:"/register"}},[r("small",[e._v("Register")])])],1)],1)],1)],1)],1)},T=[],O=n("5530"),U={data:function(){return{data:{email:"",password:""},adminlogin:!1,isLoading:!1,rules:[function(e){return!!e||"Required."}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}]}},mounted:function(){document.title="Welcome, Please login to proceed",this.$toast.success("Welcome, Please log-in to proceed")},methods:Object(O["a"])(Object(O["a"])({},Object(g["b"])("auth",["loginAccount","loginUserAccount"])),{},{login:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isLoading=!0,!e.adminlogin){t.next=6;break}return t.next=4,e.loginAccount(e.data).then((function(t){200==t.status?(e.$toast.success("Welcome, ".concat(t.data.user_info.first_name," ").concat(t.data.user_info.last_name,"!")),e.$router.push("/home/updates")):422==t.status?e.UnprocEntity(t.data):e.$toast.error("Invalid Credentials")}));case 4:t.next=8;break;case 6:return t.next=8,e.loginUserAccount(e.data).then((function(t){200==t.status?e.$router.push("/user/dashboard"):422==t.status?e.UnprocEntity(t.data):e.$toast.error(t.data.msg)}));case 8:e.isLoading=!1;case 9:case"end":return t.stop()}}),t)})))()}})},y=U,j=n("8336"),P=n("62ad"),C=n("a523"),I=n("4bd4"),L=n("132d"),N=n("a722"),B=n("0fd9"),D=n("b73d"),V=n("8654"),$=Object(s["a"])(y,A,T,!1,null,null,null),F=$.exports;h()($,{VBtn:j["a"],VCol:P["a"],VContainer:C["a"],VForm:I["a"],VIcon:L["a"],VLayout:N["a"],VRow:B["a"],VSwitch:D["a"],VTextField:V["a"]});var M=function(){return n.e("chunk-2d0c9596").then(n.bind(null,"5984"))},q=function(){return n.e("chunk-2d0e5060").then(n.bind(null,"935e"))},z=function(){return n.e("chunk-bf9e0e92").then(n.bind(null,"0976"))},W=function(){return n.e("chunk-bed9469a").then(n.bind(null,"77d0"))},H=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-350aa2a6"),n.e("chunk-0bff00d2")]).then(n.bind(null,"146a"))},K=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-33185fe8"),n.e("chunk-350aa2a6"),n.e("chunk-75edbe47"),n.e("chunk-37f7dfc9")]).then(n.bind(null,"b75b"))},G=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-33185fe8"),n.e("chunk-3c73bab4")]).then(n.bind(null,"4af2"))},J=function(){return n.e("chunk-2d2380a7").then(n.bind(null,"fe4f"))},Y=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-33185fe8"),n.e("chunk-350aa2a6"),n.e("chunk-75edbe47"),n.e("chunk-3a52b36c")]).then(n.bind(null,"38c0"))},X=function(){return n.e("chunk-f653c808").then(n.bind(null,"493a"))},Q=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-350aa2a6"),n.e("chunk-59ab24be")]).then(n.bind(null,"cba4"))},Z=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-33185fe8"),n.e("chunk-75edbe47"),n.e("chunk-08c0d230"),n.e("chunk-26f66b72")]).then(n.bind(null,"1efd"))},ee=function(){return Promise.all([n.e("chunk-3dac332c"),n.e("chunk-4f696de1")]).then(n.bind(null,"8e9c"))},te=function(){return Promise.all([n.e("chunk-3dac332c"),n.e("chunk-347ac986")]).then(n.bind(null,"3db0"))},ne=function(){return n.e("chunk-2d0e886d").then(n.bind(null,"8a3a"))},re=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-33185fe8"),n.e("chunk-53ffc5f2")]).then(n.bind(null,"3d8e"))},ae=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-33185fe8"),n.e("chunk-6b24b1c1")]).then(n.bind(null,"c82e"))},ce=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-8a599596")]).then(n.bind(null,"f287"))},ue=function(){return Promise.all([n.e("chunk-08c0d230"),n.e("chunk-48d521a2")]).then(n.bind(null,"25b7"))},oe=function(){return Promise.all([n.e("chunk-8843433c"),n.e("chunk-33185fe8"),n.e("chunk-2d0c85d5")]).then(n.bind(null,"5521"))},se=function(){return n.e("chunk-2d0b97d6").then(n.bind(null,"32bc"))},ie=function(){return n.e("chunk-02ee1dba").then(n.bind(null,"f431"))};r["a"].use(E["a"]);var he=[{path:"/",name:"Select",component:M,meta:{hasUser:!0}},{path:"/login",name:"Login",component:F,meta:{hasUser:!0}},{path:"/account",name:"VerifyEmail",component:z,meta:{hasUser:!0}},{path:"/applicant",name:"ApplicantVerifyEmail",component:W,meta:{hasUser:!0}},{path:"/application",name:"Apply",component:ae},{path:"/register",name:"Register",component:q},{path:"/home",name:"Home",component:function(){return Promise.all([n.e("chunk-8843433c"),n.e("index")]).then(n.bind(null,"0dc1"))},meta:{isAdmin:!0,requiresLogin:!0},children:[{path:"dashboard",name:"Dashboard",components:{dashboard:H}},{path:"accounts",name:"Accounts",components:{accounts:Y}},{path:"records",name:"Records",components:{records:K}},{path:"chat",name:"adminchat",components:{adminchat:Z}},{path:"applicant/view/:slug",name:"viewapplicant",components:{viewapplicant:G}},{path:"account/view/:slug",name:"viewaccount",components:{viewaccount:X}},{path:"scholars",name:"Scholar",components:{scholar:J}},{path:"updates",name:"Updates",components:{updates:Q}},{path:"updates/create",name:"CreateUpdate",components:{createupdate:ee}},{path:"updates/edit/:slug",name:"editupdate",components:{editupdate:te}},{path:"updates/view/:slug",name:"viewupdate",components:{viewupdate:ne}},{path:"settings",name:"Settings",components:{settings:re}}]},{path:"/user",name:"User",component:function(){return Promise.all([n.e("chunk-8843433c"),n.e("index")]).then(n.bind(null,"e088"))},meta:{isUser:!0,requiresLogin:!0},children:[{path:"dashboard",name:"userdashboard",components:{userdashboard:ce}},{path:"chat",name:"userchat",components:{userchat:ue}},{path:"updates",name:"userstatus",components:{userstatus:oe}},{path:"updates/view/:slug",name:"userviewupdate",components:{userviewupdate:se}},{path:"settings",name:"usersettings",components:{usersettings:ie}}]}],de=new E["a"]({mode:"history",base:"/",routes:he});de.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresLogin}))&&!localStorage.getItem("auth")?n({name:"Login"}):e.matched.some((function(e){return e.meta.hasUser}))&&localStorage.getItem("auth")&&localStorage.getItem("isAdmin")?n({name:"Dashboard"}):e.matched.some((function(e){return e.meta.hasUser}))&&localStorage.getItem("auth")&&localStorage.getItem("isUser")||e.matched.some((function(e){return e.meta.isAdmin}))&&localStorage.getItem("auth")&&localStorage.getItem("isUser")?n({name:"User"}):e.matched.some((function(e){return e.meta.isUser}))&&localStorage.getItem("auth")&&localStorage.getItem("isAdmin")?n({name:"Dashboard"}):n()}));var pe=de,me=(n("6672"),n("4e82"),n("b64b"),{data:function(){return{dialog:!1,isLoading:!1,initialLoading:!1}},methods:{checkStatus:function(e,t,n,r){var a=this;return Object(k["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(422!=t){c.next=4;break}a.UnprocEntity(e),c.next=12;break;case 4:if(200!=t){c.next=11;break}if("update"==n){c.next=8;break}return c.next=8,a.$store.dispatch(r,{page:1,sort:a.sort});case 8:a.successResponse(e),c.next=12;break;case 11:a.errResponse(e);case 12:a.isLoading=!1;case 13:case"end":return c.stop()}}),c)})))()},UnprocEntity:function(e){console.log(e);for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];this.$toast.error(e[r][0])}this.isLoading=!1},successResponse:function(e){return this.closeModal(),this.isLoading=!1,this.$toast.success(e.msg)},errResponse:function(e){return this.closeModal(),this.isLoading=!1,this.$toast.error(e.msg)},closeModal:function(){this.dialog=!1}}}),fe=n("59ca");r["a"].config.productionTip=!1,r["a"].mixin(me),r["a"].use(b["a"],{position:"top-center",timeout:2e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:!1,icon:!0,rtl:!1,maxToasts:2,transition:"Vue-Toastification__fade",newestOnTop:!0});var le={apiKey:"AIzaSyBOaR27yo2yX4A0uWwbkK8tzISTrocTems",authDomain:"evsuchat-88018.firebaseapp.com",databaseURL:"https://evsuchat-88018-default-rtdb.firebaseio.com",projectId:"evsuchat-88018",storageBucket:"evsuchat-88018.appspot.com",messagingSenderId:"284760977948",appId:"1:284760977948:web:88af639d52278234f765d9"};Object(fe["initializeApp"])(le),new r["a"]({vuetify:l,router:pe,store:_,render:function(e){return e(m)}}).$mount("#app")},6672:function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"img/logo.f3fcae65.png"}});
//# sourceMappingURL=app.5f4077d3.js.map