<template>
    <v-container>
        <post-form v-if="me"/>


    <div>
        <post-card v-for="p in mainPosts" :key="p.id" :post="p"/>       
    </div>
    </v-container>
</template>


<script>
    import PostCard  from '@/components/PostCard';
    import PostForm  from '@/components/PostForm';
    
    export default {
        layouts:'default',
        components : {
            PostCard,
            PostForm
        },
        data() {
            return {
            }
        },
        computed :{
            me (){
                return this.$store.state.users.me ; 
            },
            mainPosts (){
                return this.$store.state.posts.mainPosts;
            },
            hasMorePosts (){
                return this.$store.state.posts.hasMorePost;
            }
        },
        //return 꼭 붙여줘야함 아니면 다른페이지 갔다가 와야 보임 ssr
        fetch({store}) {
            console.log("게시글 불러오기 발동111");
            return store.dispatch('posts/loadPosts',{reset:true});
        }, 
        asyncData(){
            return {};
        } ,

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