(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(t,e,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("5a0c65f8",content,!0,{sourceMap:!1})},333:function(t,e,o){var content=o(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("215191e8",content,!0,{sourceMap:!1})},336:function(t,e,o){"use strict";o(332)},337:function(t,e,o){var n=o(16)(!1);n.push([t.i,"#image-zoom[data-v-64224a30]{position:fixed;z-index:5000;top:0;left:0;right:0;bottom:0}#image-zoom header[data-v-64224a30]{height:44px;background:#daa520;position:relative;padding:0;text-align:center}#image-zoom header h1[data-v-64224a30]{margin:0;font-size:17px;color:#333;line-height:44px}#close-btn[data-v-64224a30]{position:absolute;right:0;top:0;padding:15px;line-height:14px;cursor:pointer}#carousel-wrapper[data-v-64224a30]{height:calc(100% - 44px);background:#090909}#carousel-wrapper>div[data-v-64224a30]{height:auto!important}",""]),t.exports=n},338:function(t,e,o){"use strict";o(333)},339:function(t,e,o){var n=o(16)(!1);n.push([t.i,"a[data-v-5d9542ba]{text-decoration:none}",""]),t.exports=n},340:function(t,e,o){"use strict";o(124);var n={props:{postId:{required:!0}},data:function(){return{valid:!1,content:"",success:!1,successMessages:"",hideDetails:!0}},computed:{me:function(){return this.$store.state.users.me}},methods:{onChangeTextarea:function(t){t.length&&(this.hideDetails=!1,this.success=!1,this.successMessages="")},onSubmitForm:function(){var t=this;this.$refs.form.validate()&&this.$store.dispatch("posts/addComment",{postId:this.postId,content:this.content}).then((function(){t.content="",t.success=!0,t.successMessages="댓글이 작성되었습니다",t.hideDetails=!1})).catch((function(){}))}}},r=o(46),c=o(74),l=o.n(c),d=o(320),m=o(329),h=o(381),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"form",staticStyle:{position:"relative"},on:{submit:function(e){return e.preventDefault(),t.onSubmitForm.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-textarea",{attrs:{filled:"","auto-grow":"",label:"댓글달기","hide-details":t.hideDetails,success:t.success,"success-messages":t.successMessages},on:{input:t.onChangeTextarea},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),o("v-btn",{attrs:{color:"green",dark:"",absoulte:"",top:"",right:"",type:"submit"}},[t._v(" 삐약")])],1)}),[],!1,null,null,null),v=component.exports;l()(component,{VBtn:d.a,VForm:m.a,VTextarea:h.a});o(47);var f={props:{images:{type:Array,required:!0},closeModal:{type:Function,required:!0}}},_=(o(336),o(390)),x=o(391),k=o(150),y=o(211),I=o(77),w=Object(r.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"image-zoom"}},[o("header",[o("h1",[t._v("상세이미지")]),t._v(" "),o("v-icon",{attrs:{id:"close-btn"},on:{click:t.closeModal}},[t._v("mdi-close")])],1),t._v(" "),o("div",{attrs:{id:"carousel-wrapper"}},[o("v-carousel",t._l(t.images,(function(img){return o("v-carousel-item",{key:img.src},[o("v-sheet",[o("v-img",{attrs:{"max-height":"500",contain:"",src:"http://localhost:3085/"+img.src}})],1)],1)})),1)],1)])}),[],!1,null,"64224a30",null),V=w.exports;l()(w,{VCarousel:_.a,VCarouselItem:x.a,VIcon:k.a,VImg:y.a,VSheet:I.a});var $={components:{ImageZoom:V},props:{images:{type:Array,required:!0}},data:function(){return{imageZoomed:!1}},methods:{closeModal:function(){this.imageZoomed=!1},zoomImages:function(){this.imageZoomed=!0}}},C=Object(r.a)($,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return 0===t.images.length?o("div"):1===t.images.length?o("div",[o("v-img",{attrs:{src:"http://localhost:3085/"+t.images[0].src,contain:"","aspect-ratio":"2"},on:{click:t.zoomImages}}),t._v(" "),t.imageZoomed?o("ImageZoom",{attrs:{closeModal:t.closeModal,images:t.images}}):t._e()],1):2===t.images.length?o("div",{staticStyle:{display:"flex"}},[o("v-img",{staticStyle:{flex:"1"},attrs:{src:"http://localhost:3085/"+t.images[0].src,contain:"","aspect-ratio":"2"},on:{click:t.zoomImages}}),t._v(" "),o("v-img",{staticStyle:{flex:"1"},attrs:{src:"http://localhost:3085/"+t.images[1].src,contain:"","aspect-ratio":"2"}}),t._v(" "),t.imageZoomed?o("ImageZoom",{attrs:{closeModal:t.closeModal,images:t.images}}):t._e()],1):t.images.length>2?o("div",{staticStyle:{display:"flex"}},[o("v-img",{staticStyle:{flex:"1"},attrs:{src:"http://localhost:3085/"+t.images[0].src,contain:"","aspect-ratio":"2"},on:{click:t.zoomImages}}),t._v(" "),o("div",{staticStyle:{flex:"1","align-items":"center","justify-content":"center",display:"flex"},on:{click:t.zoomImages}},[o("div",[o("v-icon",[t._v("mdi-dots-horizontal")]),t._v(" "),o("div",[t._v("더보기")])],1)]),t._v(" "),t.imageZoomed?o("ImageZoom",{attrs:{closeModal:t.closeModal,images:t.images}}):t._e()],1):t._e()}),[],!1,null,null,null),M=C.exports;l()(C,{VIcon:k.a,VImg:y.a});var S={components:{PostImages:M},props:{post:{type:Object,required:!0}},computed:{nodes:function(){return this.post.content.split(/(#[^\s#]+)/)},me:function(){return this.$store.state.users.me},canFollow:function(){var t=this;return this.me&&this.post.User.id!=this.me.id&&!this.me.Followings.find((function(e){return e.id===t.post.User.id}))},canUnFollow:function(){var t=this;return this.me&&this.post.User.id!=this.me.id&&this.me.Followings.find((function(e){return e.id===t.post.User.id}))}},head:function(){return{title:"".concat(this.post.User.nickName,"의 게시글"),meta:[{name:"description",content:this.post.content},{hid:"ogtitle",name:"og:title",content:"".concat(this.post.User.nickName,"의 게시글")},{hid:"ogdesc",name:"og:description",content:this.post.contnet},{hid:"ogimage",property:"og:image",content:this.post.Images[0]?this.post.Images[0].src:"http://vue.nodebird.com/vue-nodebird.png"},{hid:"ogurl",property:"og:url",content:"https://vue.nodebird.com/post/".concat(this.post.id)}]}},methods:{onFollow:function(){this.$store.dispatch("users/follow",{userId:this.post.User.id})},onUnFollow:function(){this.$store.dispatch("users/unfollow",{userId:this.post.User.id})}}},P=o(318),U=Object(r.a)(S,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{border:"1px solid grey"}},[o("post-images",{attrs:{images:t.post.Images||[]}}),t._v(" "),o("v-card-text",[o("div",[o("h3",[o("nuxt-link",{attrs:{to:"/user/"+t.post.User.id}},[t._v(t._s(t.post.User.nickName))])],1),t._v(" "),t.canFollow?o("v-btn",{on:{click:t.onFollow}},[t._v("팔로우")]):t._e(),t._v(" "),t.canUnFollow?o("v-btn",{on:{click:t.onUnFollow}},[t._v("언팔로우")]):t._e(),t._v(" "),t._l(t.nodes,(function(e,i){return[e.startsWith("#")?o("nuxt-link",{key:i,attrs:{to:"/hashtag/"+e.slice(1)}},[t._v(t._s(e)+" ")]):[t._v(t._s(e)+" ")]]})),t._v(" "),o("div",[t._v(t._s(t.post.content))])],2),t._v(" "),o("div",[t._v(t._s(t.$moment(t.post.createdAt).fromNow()))])])],1)}),[],!1,null,"734898e5",null),F=U.exports;l()(U,{VBtn:d.a,VCardText:P.b});var O={components:{CommentForm:v,PostContent:F},props:{post:{type:Object,required:!0}},data:function(){return{commentOpened:!1}},computed:{me:function(){return this.$store.state.users.me},liked:function(){var t=this.$store.state.users.me;return!!(this.post.Likers||[]).find((function(e){return e.id===(t&&t.id)}))},heartIcon:function(){return this.liked?"mdi-heart":"mdi-heart-outline"}},methods:{onRemovePost:function(){this.$store.dispatch("posts/remove",{postId:this.post.id})},onEditPost:function(){},onToggleComment:function(){this.commentOpend||this.$store.dispatch("posts/loadComments",{postId:this.post.id}),this.commentOpened=!this.commentOpened},onRetweet:function(){if(!this.me)return alert("로그인이 필요합니다.");this.$store.dispatch("posts/retweet",{postId:this.post.id})},onClickHeart:function(){return console.log(this.liked),this.me?this.liked?this.$store.dispatch("posts/unlikePost",{postId:this.post.id}):this.$store.dispatch("posts/likePost",{postId:this.post.id}):alert("로그인이 필요합니다.")}}},z=(o(338),o(319)),E=o(350),Z=o(344),j=o(353),L=o(331),R=o(383),N=o(366),T=Object(r.a)(O,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"margin-bottom":"20px",border:"1px solid orange"}},[o("v-card",[t.post.RetweetId&&t.post.Retweet?o("div",[o("v-subheader",[t._v(t._s(t.post.User.nickName)+"님이 리트윗하셨습니다.")]),t._v(" "),o("v-card",{staticStyle:{margin:"0 20px"}},[o("post-content",{attrs:{post:t.post.Retweet}})],1)],1):o("post-content",{attrs:{post:t.post}}),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:"",color:"orange"},on:{click:t.onRetweet}},[o("v-icon",[t._v("mdi-repeat-variant")])],1),t._v(" "),o("v-btn",{attrs:{text:"",color:"orange"},on:{click:t.onClickHeart}},[o("v-icon",[t._v(t._s(t.heartIcon))])],1),t._v(" "),o("v-btn",{attrs:{text:"",color:"orange"},on:{click:t.onToggleComment}},[o("v-icon",[t._v("mdi-comment-outline")])],1),t._v(" "),o("v-menu",{attrs:{"offset-y":"","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-btn",t._g({attrs:{text:"",color:"orange"}},n),[o("v-icon",[t._v("mdi-filter")])],1)]}}])},[t._v(" "),o("div",{staticStyle:{background:"white"}},[o("v-btn",{attrs:{dark:"",color:"red"},on:{click:t.onRemovePost}},[t._v("삭제")]),t._v(" "),o("v-btn",{attrs:{dark:"",color:"red"},on:{click:t.onEditPost}},[t._v("수정")])],1)])],1)],1),t._v(" "),t.commentOpened?[o("comment-form",{attrs:{postId:t.post.id}}),t._v(" "),o("v-list",t._l(t.post.Comments,(function(e){return o("v-list-item",{key:e.id},[o("v-list-item-avatar",{attrs:{color:"teal"}},[o("span",[t._v(t._s(e.User.nickName[0]))])]),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.User.nickName))]),t._v(" "),o("div",[t._v(t._s(e.content))])],1)],1)})),1)]:t._e()],2)}),[],!1,null,"5d9542ba",null);e.a=T.exports;l()(T,{VBtn:d.a,VCard:z.a,VCardActions:P.a,VIcon:k.a,VList:E.a,VListItem:Z.a,VListItemAvatar:j.a,VListItemContent:L.a,VListItemTitle:L.b,VMenu:R.a,VSubheader:N.a})},386:function(t,e,o){"use strict";o.r(e);var n={layouts:"default",components:{PostCard:o(340).a},data:function(){return{}},computed:{me:function(){return this.$store.state.users.me},mainPosts:function(){return this.$store.state.posts.mainPosts},hasMorePosts:function(){return this.$store.state.posts.hasMorePost}},fetch:function(t){var e=t.store,o=t.params;return e.dispatch("posts/loadHashtagPosts",{hashtag:encodeURIComponent(o.id),reset:!0})},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestory:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(){window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight-300&&this.hasMorePosts&&this.$store.dispatch("posts/loadPosts")}}},r=o(46),c=o(74),l=o.n(c),d=o(319),m=o(330),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-card",{staticStyle:{"margin-bottom":"20px"}},[o("v-container")],1),t._v(" "),t.mainPosts.length?o("div",t._l(t.mainPosts,(function(p){return o("post-card",{key:p.id,attrs:{post:p}})})),1):o("div",[o("v-card",[t._v("\n    게시글이 없습니다.\n\n    "+t._s(t.mainPosts.length)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VContainer:m.a})}}]);