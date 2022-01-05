<template>
    <v-container>
        <v-card style="margin-bottom:20px "> 
            <v-container>
               <!-- {{other}} -->
                <!-- {{other.nickName}} -->
                <!-- <v-row> -->
                    <!-- <v-col cols="4">팔로잉 {{other.Followings.length}}</v-col>
                    <v-col cols="4">팔로워 {{other.Followers.length}}</v-col>
                    <v-col cols="4">게시글 수 {{other.Posts.length}}</v-col>
                </v-row> -->
                <!-- {{post}} -->
            </v-container>
        </v-card>

    <div>
        <post-card v-for="p in mainPosts" :key="p.id" :post="p"/>       
    </div>
    </v-container>
</template>


<script>
    import PostCard  from '@/components/PostCard';
    
    export default {
        layouts:'default',
        components : {
            PostCard,
        },
        data() {
            return {
            }
        },
        computed :{
            other(){
                return this.$store.state.users.other ;
            },
            me (){
                return this.$store.state.users.me ; 
            },
            mainPosts (){
                return this.$store.state.posts.mainPosts;
            },
            hasMorePosts (){
                return this.$store.state.posts.hasMorePost;
            },
            // post (){
            //     return this.post;
            // }
           
        },
        fetch({store, params}) {
            
            
            return Promise.all([
            //     store.dispatch('users/loadOther',{
            //     userId : params.id , // fetch 에서는 this를 못씀(this.$route.params.id)같은...
            // }) , 
                store.dispatch('posts/loadPost',{
                postId : params.id,
                reset: true,
            }) ]);
        },
        // head(){
        //         return {
        //             title: `${this.post.User.nickName}의 게시글`,
        //             meta :[{
        //             name:'description',content : this.post.content,
        //             }
        //             ,{
        //             name : 'og:title' , content : `${this.post.User.nickName}의 게시글`,
        //             }
        //             ,{
        //             name : 'og:description' , content : this.post.contnet,
        //             }
        //             ,{
        //             property : 'og:image' , content : this.post.Images[0] ? this.post.Images[0].src : 'http://vue.nodebird.com/vue-nodebird.png',
        //             },{
        //             property : 'og:url' , content : `https://vue.nodebird.com/post/${this.post.id}`,
        //             },
        //             ]
        //         }
        //     },
        //window 는 created 에서 못쓴다.
        mounted(){
            window.addEventListener('scroll',this.onScroll);
        },
        beforeDestory(){
            window.removeEventListener('scroll',this.onScroll);
        },
        //window.scrollY : 스크롤 위치 ,  document.documentElement.clientHeight :화면 길이
        //document.documentElement.scrollHeight : 스크롤+ 화면길이
        methods : {
            onScroll (){
               if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -300 ){
                   if(this.hasMorePosts){
                       this.$store.dispatch('posts/loadPosts');
                   }
               }
            }
        }

    }
</script>

<style >

</style>