(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dc52ff8"],{"79c6":function(t,e,i){"use strict";i("ca0e")},ca0e:function(t,e,i){},cba4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("user-avatar"),i("v-container",{staticClass:"pt-3 pl-8 pr-8 mb-16"},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{lg:"8"}},[i("h4",[t._v(t._s(t.msg)+",")]),i("h1",[t._v(t._s(t.user.info.first_name)+" "+t._s(t.user.info.last_name))]),i("p",{staticClass:"grey--text lighten-1 caption mt-3"},[t._v("Welcome, Here are your updates.")])])],1),i("v-row",{staticClass:"mt-3",attrs:{justify:"center",align:"center"}},[0==t.updates.data.length?i("p",{staticClass:"grey--text mt-15 text-center pl-4"},[t._v(" It appears that you don't have any updates yet. ")]):t._e(),i("v-col",{attrs:{sm:"10",md:"12",lg:"8"}},t._l(t.updates.data,(function(e,n){return i("v-card",{key:n,staticClass:"mt-5",attrs:{elevation:"1"},on:{click:function(i){return t.setViewUpdate(e)}}},[i("v-row",{staticClass:"pr-3 pt-2",attrs:{justify:"end"}},[i("v-menu",{attrs:{bottom:"",transition:"slide-x-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",s,!1),n),[i("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[i("v-list",[i("v-list-item",[i("v-btn",{attrs:{small:"",depressed:"",rounded:"",text:""},on:{click:function(i){return t.setEditUpdate(e)}}},[i("v-icon",{attrs:{small:""}},[t._v("mdi-pencil-outline")]),t._v(" Update ")],1)],1),i("v-divider"),i("v-list-item",[i("v-dialog",{attrs:{persistent:"","max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(n){var s=n.on,a=n.attrs;return[i("v-btn",t._g(t._b({staticClass:"red--text",attrs:{small:"",depressed:"",rounded:"",text:""},on:{click:function(i){i.preventDefault(),t.delete_data.id=e.id}}},"v-btn",a,!1),s),[i("v-icon",{attrs:{small:""}},[t._v("mdi-delete")]),t._v(" Delete ")],1)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[t._v(" Confirm Delete ")]),i("v-card-text",[t._v("Are you sure you want to delete this post?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"gray",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"red darken-3",text:""},on:{click:t.deletePost}},[t._v(" Yes ")])],1)],1)],1)],1)],1)],1)],1),i("v-card-text",{staticClass:"mt-n8"},[i("p",{staticClass:"text-h5 text--primary"},[t._v(t._s(e.title))]),i("p",{},[i("small",[t._v(t._s(e.created_at))])]),i("div",{staticClass:"text--primary mt-3"},[i("p",{staticClass:"w-100"},[t._v(" "+t._s(e.post_excerpt)+" ")])]),i("div",{staticClass:"text--primary mt-3"},[i("p",{staticClass:"w-100"},[t._v("Views: "+t._s(e.views))])])])],1)})),1)],1)],1),i("v-btn",{staticClass:"mb-15",attrs:{fab:"",color:"red darken-2",dark:"",bottom:"",right:"",fixed:""},on:{click:function(e){return e.preventDefault(),t.$router.push("updates/create")}}},[i("v-icon",[t._v("mdi-plus")])],1)],1)},s=[],a=i("1da1"),o=i("5530"),r=(i("96cf"),i("3b70")),c=i("2f62"),l={data:function(){return{msg:"Good Morning",delete_data:{id:""}}},components:{UserAvatar:r["a"]},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])("auth",["user"])),Object(c["c"])("updates",["updates"])),mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.initialLoading=!0,t.greetingMsg(),t.$store.dispatch("updates/getUpdates",1),t.initialLoading=!1;case 4:case"end":return e.stop()}}),e)})))()},methods:{greetingMsg:function(){var t=new Date,e=t.getHours();this.msg=e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening"},setEditUpdate:function(t){this.$store.commit("updates/SET_EDIT_UPDATE",{data:t}),this.$router.push({name:"editupdate",params:{slug:t.id}})},setViewUpdate:function(t){this.$store.commit("updates/SET_VIEW_UPDATE",{data:t}),this.$router.push({name:"viewupdate",params:{slug:t.id}})},deletePost:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("updates/deleteUpdate",t.delete_data);case 2:i=e.sent,n=i.status,s=i.data,t.checkStatus(s,n,"","updates/getUpdates"),t.delete_data.id="";case 7:case"end":return e.stop()}}),e)})))()}}},h=l,u=(i("79c6"),i("2877")),d=i("6544"),f=i.n(d),v=i("8336"),p=i("b0af"),m=i("99d9"),g=i("62ad"),b=i("a523"),w=i("169a"),x=i("ce7e"),O=i("132d"),T=i("8860"),y=i("da13"),C=i("e449"),A=i("0fd9"),k=i("2fa4"),_=Object(u["a"])(h,n,s,!1,null,"6bcc7f42",null);e["default"]=_.exports;f()(_,{VBtn:v["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:g["a"],VContainer:b["a"],VDialog:w["a"],VDivider:x["a"],VIcon:O["a"],VList:T["a"],VListItem:y["a"],VMenu:C["a"],VRow:A["a"],VSpacer:k["a"]})},e449:function(t,e,i){"use strict";var n=i("ade3"),s=i("2909"),a=i("5530"),o=(i("a9e3"),i("7db0"),i("a630"),i("3ca3"),i("99af"),i("498a"),i("caad"),i("2532"),i("ee6f"),i("480e")),r=i("4ad4"),c=i("16b7"),l=i("b848"),h=(i("d3b7"),i("21be")),u=i("fe6c"),d=i("75eb"),f=i("58df"),v=i("80d2"),p=Object(f["a"])(h["a"],Object(u["b"])(["top","right","bottom","left","absolute"]),r["a"],d["a"]),m=p.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),s=0;if(s+=this.left?i-(n-t.width):i,this.offsetX){var a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));s+=this.left?-a:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(v["h"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(v["h"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,n=this.dimensions.activator,s=this.dimensions.content.height,a=t+s,o=i<a;return o&&this.offsetOverflow&&n.top>s?t=this.pageYOffset+(n.top-s):o&&!this.allowOverflow?t=i-s-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=r["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(a["a"])({},this.dimensions.activator),content:Object(a["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}}),g=i("e4d3"),b=i("a236"),w=i("f2e7"),x=i("7560"),O=i("a293"),T=i("dc22"),y=i("d9bd"),C=i("7d8f"),A=Object(f["a"])(l["a"],c["a"],m,g["a"],b["a"],w["a"],x["a"]);e["a"]=A.extend({name:"v-menu",directives:{ClickOutside:O["a"],Resize:T["a"]},provide:function(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(v["h"])(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){var t=this.auto?"200px":Object(v["h"])(this.maxHeight);return t||"0"},calculatedMaxWidth:function(){return Object(v["h"])(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(v["h"])(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(v["h"])(Math.min(e,t))||"0"},calculatedTop:function(){var t=this.auto?Object(v["h"])(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var i=this.tiles[t];i.classList.add("v-list-item--highlighted");var n=this.$refs.content.scrollTop,s=this.$refs.content.clientHeight;n>i.offsetTop-8?Object(C["b"])(i.offsetTop-i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):n+s<i.offsetTop+i.clientHeight+8&&Object(C["b"])(i.offsetTop-s+2*i.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y["e"])("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var i=e.offsetTop-this.calcScrollPosition(),n=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-n-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==v["z"].tab){if(t.keyCode===v["z"].down)this.nextTile();else if(t.keyCode===v["z"].up)this.prevTile();else if(t.keyCode===v["z"].end)this.lastTile();else if(t.keyCode===v["z"].home)this.firstTile();else{if(t.keyCode!==v["z"].enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=r["a"].options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?Object(a["a"])(Object(a["a"])({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=m.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(s["a"])(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:Object(a["a"])(Object(a["a"])({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:Object(a["a"])(Object(a["a"])(Object(a["a"])({},this.rootThemeClasses),this.roundedClasses),{},Object(n["a"])({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){var i=e.target;i.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile:function(){var t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile:function(){var t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown:function(t){var e=this;if(t.keyCode===v["z"].esc){setTimeout((function(){e.isActive=!1}));var i=this.getActivator();this.$nextTick((function(){return i&&i.focus()}))}else!this.isActive&&[v["z"].up,v["z"].down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this,i={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",i,[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(o["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},ee6f:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7dc52ff8.61b4cf7e.js.map