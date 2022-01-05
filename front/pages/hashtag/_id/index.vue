<template>
    <v-container>
        <v-card style="margin-bottom:20px "> 
            <v-container>

            </v-container>
        </v-card>

    <div v-if="mainPosts.length">
        <post-card v-for="p in mainPosts" :key="p.id" :post="p"/>       
    </div>
    <div v-else>
        <v-card>
        게시글이 없습니다.

        {{mainPosts.length}}
        </v-card>
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
        fetch({store, params}) {
            
            return store.dispatch('posts/loadHashtagPosts',{
                hashtag : encodeURIComponent(params.id),
                reset: true,
            });
     
        },
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