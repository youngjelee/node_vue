(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{332:function(t,e,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("5a0c65f8",content,!0,{sourceMap:!1})},333:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("215191e8",content,!0,{sourceMap:!1})},336:function(t,e,o){"use strict";o(332)},337:function(t,e,o){var n=o(16)(!1);n.push([t.i,"#image-zoom[data-v-64224a30]{position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0}#image-zoom header[data-v-64224a30]{height:44px;background:#daa520;position:relative;padding:0;text-align:center}#image-zoom header h1[data-v-64224a30]{margin:0;font-size:17px;color:#333;line-height:44px}#close-btn[data-v-64224a30]{position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer}#carousel-wrapper[data-v-64224a30]{height:calc(100% - 44px);background:#090909}#carousel-wrapper>div[data-v-64224a30]{height:auto!important}",""]),t.exports=n},338:function(t,e,o){"use strict";o(333)},339:function(t,e,o){var n=o(16)(!1);n.push([t.i,"a[data-v-5d9542ba]{text-decoration:none}",""]),t.exports=n},340:function(t,e,o){"use strict";o(124);var n={props:{postId:{required:!0}},data:function(){return{valid:!1,content:"",success:!1,successMessages:"",hideDetails:!0}},computed:{me:function(){return this.$store.state.users.me}},methods:{onChangeTextarea:function(t){t.length&&(this.hideDetails=!1,this.success=!1,this.successMessages="")},onSubmitForm:function(){var t=this;this.$refs.form.validate()&&this.$store.dispatch("posts/addComment",{postId:this.postId,content:this.content}).then((function(){t.content="",t.success=!0,t.successMessages="댓글이 작성되었습니다",t.hideDetails=!1})).catch((function(){}))}}},r=o(46),c=o(74),l=o.n(c),d=o(320),m=o(329),h=o(381),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"form",staticStyle:{position:"relative"},on:{submit:function(e){return e.preventDefault(),t.onSubmitForm.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-textarea",{attrs:{filled:"","auto-grow":"",label:"댓글달기","hide-details":t.hideDetails,success:t.success,"success-messages":t.successMessages},on:{input:t.onChangeTextarea},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),o("v-btn",{attrs:{color:"green",dark:"",absoulte:"",top:"",right:"",type:"submit"}},[t._v(" 삐약")])],1)}),[],!1,null,null,null),v=component.exports;l()(component,{VBtn:d.a,VForm:m.a,VTextarea:h.a});o(47);var f={props:{images:{type:Array,required:!0},closeModal:{type:Function,required:!0}}},_=(o(336),o(390)),y=o(391),x=o(150),k=o(211),I=o(77),w=Object(r.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"image-zoom"}},[o("header",[o("h1",[t._v("상세이미지")]),t._v(" "),o("v-icon",{attrs:{id:"close-btn"},on:{click:t.closeModal}},[t._v("mdi-close")])],1),t._v(" "),o("div",{attrs:{id:"carousel-wrapper"}},[o("v-carousel",t._l(t.images,(function(img){return o("v-carousel-item",{key:img.src},[o("v-sheet",[o("v-img",{attrs:{"max-height":"500",contain:"",src:"http://localhost:3085/"+img.src}})],1)],1)})),1)],1)])}),[],!1,null,"64224a30",null),O=w.exports;l()(w,{VCarousel:_.a,VCarouselItem:y.a,VIcon:x.a,VImg:k.a,VSheet:I.a});var $={components:{ImageZoom:O},props:{images:{type:Array,required:!0}},data:function(){return{imageZoomed:!1}},methods:{closeModal:function(){this.imageZoomed=!1},zoomImages:function(){this.imageZoomed=!0}}},P=Object(r.a)($,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return 0===t.images.length?o("div"):1===t.images.length?o("div",[o("v-img",{attrs:{src:"http://localhost:3085/"+t.images[0].src,contain:"","aspect-ratio":"2"},on:{click:t.zoomImages}}),t._v(" "),t.imageZoomed?o("ImageZoom",{attrs:{closeModal:t.closeModal,images:t.images}}):t._e()],1):2===t.images.length?o("div",{staticStyle:{display:"flex"}},[o("v-img",{staticStyle:{flex:"1"},attrs:{src:"http://localhost:3085/"+t.images[0].src,contain:"","aspect-ratio":"2"},on:{click:t.zoomImages}}),t._v(" "),o("v-img",{staticStyle:{flex:"1"},attrs:{src:"http://localhost:3085/"+t.images[1].src,contain:"","aspect-ratio":"2"}}),t._v(" "),t.imageZoomed?o("ImageZoom",{attrs:{closeModal:t.closeModal,images:t.images}}):t._e()],1):t.images.length>2?o("div",{staticStyle:{display:"flex"}},[o("v-img",{staticStyle:{flex:"1"},attrs:{src:"http://localhost:3085/"+t.images[0].src,contain:"","aspect-ratio":"2"},on:{click:t.zoomImages}}),t._v(" "),o("div",{staticStyle:{flex:"1","align-items":"center","justify-content":"center",display:"flex"},on:{click:t.zoomImages}},[o("div",[o("v-icon",[t._v("mdi-dots-horizontal")]),t._v(" "),o("div",[t._v("더보기")])],1)]),t._v(" "),t.imageZoomed?o("ImageZoom",{attrs:{closeModal:t.closeModal,images:t.images}}):t._e()],1):t._e()}),[],!1,null,null,null),V=P.exports;l()(P,{VIcon:x.a,VImg:k.a});var C={components:{PostImages:V},props:{post:{type:Object,required:!0}},computed:{nodes:function(){return this.post.content.split(/(#[^\s#]+)/)},me:function(){return this.$store.state.users.me},canFollow:function(){var t=this;return this.me&&this.post.User.id!=this.me.id&&!this.me.Followings.find((function(e){return e.id===t.post.User.id}))},canUnFollow:function(){var t=this;return this.me&&this.post.User.id!=this.me.id&&this.me.Followings.find((function(e){return e.id===t.post.User.id}))}},head:function(){return{title:"".concat(this.post.User.nickName,"의 게시글"),meta:[{name:"description",content:this.post.content},{hid:"ogtitle",name:"og:title",content:"".concat(this.post.User.nickName,"의 게시글")},{hid:"ogdesc",name:"og:description",content:this.post.contnet},{hid:"ogimage",property:"og:image",content:this.post.Images[0]?this.post.Images[0].src:"http://vue.nodebird.com/vue-nodebird.png"},{hid:"ogurl",property:"og:url",content:"https://vue.nodebird.com/post/".concat(this.post.id)}]}},methods:{onFollow:function(){this.$store.dispatch("users/follow",{userId:this.post.User.id})},onUnFollow:function(){this.$store.dispatch("users/unfollow",{userId:this.post.User.id})}}},S=o(318),M=Object(r.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{border:"1px solid grey"}},[o("post-images",{attrs:{images:t.post.Images||[]}}),t._v(" "),o("v-card-text",[o("div",[o("h3",[o("nuxt-link",{attrs:{to:"/user/"+t.post.User.id}},[t._v(t._s(t.post.User.nickName))])],1),t._v(" "),t.canFollow?o("v-btn",{on:{click:t.onFollow}},[t._v("팔로우")]):t._e(),t._v(" "),t.canUnFollow?o("v-btn",{on:{click:t.onUnFollow}},[t._v("언팔로우")]):t._e(),t._v(" "),t._l(t.nodes,(function(e,i){return[e.startsWith("#")?o("nuxt-link",{key:i,attrs:{to:"/hashtag/"+e.slice(1)}},[t._v(t._s(e)+" ")]):[t._v(t._s(e)+" ")]]})),t._v(" "),o("div",[t._v(t._s(t.post.content))])],2),t._v(" "),o("div",[t._v(t._s(t.$moment(t.post.createdAt).fromNow()))])])],1)}),[],!1,null,"734898e5",null),j=M.exports;l()(M,{VBtn:d.a,VCardText:S.b});var F={components:{CommentForm:v,PostContent:j},props:{post:{type:Object,required:!0}},data:function(){return{commentOpened:!1}},computed:{me:function(){return this.$store.state.users.me},liked:function(){var t=this.$store.state.users.me;return!!(this.post.Likers||[]).find((function(e){return e.id===(t&&t.id)}))},heartIcon:function(){return this.liked?"mdi-heart":"mdi-heart-outline"}},methods:{onRemovePost:function(){this.$store.dispatch("posts/remove",{postId:this.post.id})},onEditPost:function(){},onToggleComment:function(){this.commentOpend||this.$store.dispatch("posts/loadComments",{postId:this.post.id}),this.commentOpened=!this.commentOpened},onRetweet:function(){if(!this.me)return alert("로그인이 필요합니다.");this.$store.dispatch("posts/retweet",{postId:this.post.id})},onClickHeart:function(){return console.log(this.liked),this.me?this.liked?this.$store.dispatch("posts/unlikePost",{postId:this.post.id}):this.$store.dispatch("posts/likePost",{postId:this.post.id}):alert("로그인이 필요합니다.")}}},U=(o(338),o(319)),D=o(350),E=o(344),z=o(353),T=o(331),Z=o(383),R=o(366),L=Object(r.a)(F,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"margin-bottom":"20px",border:"1px solid orange"}},[o("v-card",[t.post.RetweetId&&t.post.Retweet?o("div",[o("v-subheader",[t._v(t._s(t.post.User.nickName)+"님이 리트윗하셨습니다.")]),t._v(" "),o("v-card",{staticStyle:{margin:"0 20px"}},[o("post-content",{attrs:{post:t.post.Retweet}})],1)],1):o("post-content",{attrs:{post:t.post}}),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:"",color:"orange"},on:{click:t.onRetweet}},[o("v-icon",[t._v("mdi-repeat-variant")])],1),t._v(" "),o("v-btn",{attrs:{text:"",color:"orange"},on:{click:t.onClickHeart}},[o("v-icon",[t._v(t._s(t.heartIcon))])],1),t._v(" "),o("v-btn",{attrs:{text:"",color:"orange"},on:{click:t.onToggleComment}},[o("v-icon",[t._v("mdi-comment-outline")])],1),t._v(" "),o("v-menu",{attrs:{"offset-y":"","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{text:"",color:"orange"}},n),[o("v-icon",[t._v("mdi-filter")])],1)]}}])},[t._v(" "),o("div",{staticStyle:{background:"white"}},[o("v-btn",{attrs:{dark:"",color:"red"},on:{click:t.onRemovePost}},[t._v("삭제")]),t._v(" "),o("v-btn",{attrs:{dark:"",color:"red"},on:{click:t.onEditPost}},[t._v("수정")])],1)])],1)],1),t._v(" "),t.commentOpened?[o("comment-form",{attrs:{postId:t.post.id}}),t._v(" "),o("v-list",t._l(t.post.Comments,(function(e){return o("v-list-item",{key:e.id},[o("v-list-item-avatar",{attrs:{color:"teal"}},[o("span",[t._v(t._s(e.User.nickName[0]))])]),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.User.nickName))]),t._v(" "),o("div",[t._v(t._s(e.content))])],1)],1)})),1)]:t._e()],2)}),[],!1,null,"5d9542ba",null);e.a=L.exports;l()(L,{VBtn:d.a,VCard:U.a,VCardActions:S.a,VIcon:x.a,VList:D.a,VListItem:E.a,VListItemAvatar:z.a,VListItemContent:T.a,VListItemTitle:T.b,VMenu:Z.a,VSubheader:R.a})},349:function(t,e,o){"use strict";o(7),o(5),o(6),o(11),o(12);var n=o(1),r=o(93);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{hideDetails:!0,successMessages:"",success:!1,valid:!1,content:""}},computed:l(l({},Object(r.b)("users",["me"])),Object(r.b)("posts",["imagePaths"])),methods:{onChangeText:function(t){t.length&&(this.hideDetails=!0,this.success=!1,this.successMessages="")},onSubmitForm:function(){var t=this;this.$refs.form.validate()&&this.$store.dispatch("posts/add",{content:this.content}).then((function(){t.content="",t.hideDetails=!1,t.success=!0,t.successMessages="게시글 등록 성공"})).catch((function(){}))},onClickImageUpload:function(){this.$refs.imageInput.click()},onChangeImages:function(t){console.log(t.target.files);var e=new FormData;[].forEach.call(t.target.files,(function(t){e.append("image",t)})),this.$store.dispatch("posts/uploadImages",e)},onRemoveImage:function(t){this.$store.commit("posts/removeImagePath",t)}}},m=o(46),h=o(74),v=o.n(h),f=o(320),_=o(319),y=o(330),x=o(329),k=o(381),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticStyle:{"margin bottom":"10px"}},[o("v-container",[o("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmitForm.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-textarea",{attrs:{outlined:"","auto-grow":"",clearable:"",label:"어떤 신기한 일이 있었나요?","hide-details":t.hideDetails,"success-messages":t.successMessages,success:t.success,rules:[function(t){return!!t.trim()||"내용을 입력하세요."}]},on:{input:t.onChangeText},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),o("v-btn",{attrs:{type:"submit",color:"green",absolute:"",right:""}},[t._v("등록")]),t._v(" "),o("input",{ref:"imageInput",attrs:{type:"file",multiple:"",hidden:""},on:{change:t.onChangeImages}}),t._v(" "),o("v-btn",{attrs:{type:"button"},on:{click:t.onClickImageUpload}},[t._v("\n            이미지업로드 ")]),t._v(" "),o("div",t._l(t.imagePaths,(function(p,i){return o("div",{key:p,staticStyle:{display:"inline-block"}},[o("img",{staticStyle:{width:"200px"},attrs:{src:"http://localhost:3085/"+p,alt:p}}),t._v(" "),o("div",[o("button",{attrs:{type:"button"},on:{click:function(e){return t.onRemoveImage(i)}}},[t._v("제거")])])])})),0)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VBtn:f.a,VCard:_.a,VContainer:y.a,VForm:x.a,VTextarea:k.a})},385:function(t,e,o){"use strict";o.r(e);var n=o(340),r=o(349),c={layouts:"default",components:{PostCard:n.a,PostForm:r.a},data:function(){return{}},computed:{me:function(){return this.$store.state.users.me},mainPosts:function(){return this.$store.state.posts.mainPosts},hasMorePosts:function(){return this.$store.state.posts.hasMorePost}},fetch:function(t){return t.store.dispatch("posts/loadPosts")},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestory:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight-300&&this.hasMorePosts&&this.$store.dispatch("posts/loadPosts")}}},l=o(46),d=o(74),m=o.n(d),h=o(330),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[t.me?o("post-form"):t._e(),t._v(" "),o("div",t._l(t.mainPosts,(function(p){return o("post-card",{key:p.id,attrs:{post:p}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VContainer:h.a})}}]);