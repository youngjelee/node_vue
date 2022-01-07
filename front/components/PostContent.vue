<template>

    <div style="border : 1px solid grey">
    <post-images :images="post.Images || []"/>
        <v-card-text>
            <div>
                <h3><nuxt-link :to="'/user/'+post.User.id">{{post.User.nickName}}</nuxt-link></h3>

                <v-btn v-if="canFollow" @click="onFollow">팔로우</v-btn>
                <v-btn v-if="canUnFollow" @click="onUnFollow">언팔로우</v-btn>
                <template v-for="(node,i) in nodes">
                    <nuxt-link v-if="node.startsWith('#')" :key ="i" :to="`/hashtag/${node.slice(1)}`">{{node}} </nuxt-link>
                    <template v-else>{{node}} </template>
                    
                </template>
                
                <!-- {{nodes}} -->

                <div>{{post.content}}</div>
                <!-- <nuxt-link :to="'/post/'+post.id">{{post.content}}</nuxt-link>  -->
            </div>
            <div>{{$moment(post.createdAt).fromNow()}}</div>    
        </v-card-text>
                
    </div>

</template>

<script>
import PostImages from '@/components/PostImages';

export default {
    components : {
        
        PostImages
    },
     props : {
        post : {
            type: Object,
            required : true
        }
    },
    computed :{
        nodes(){
           return this.post.content.split(/(#[^\s#]+)/);
        }

        ,me() {
            return this.$store.state.users.me;
        },
        canFollow() {
            return this.me && this.post.User.id !=this.me.id &&
            !this.me.Followings.find(v=>v.id ===this.post.User.id);
        },
        canUnFollow(){
             return this.me && this.post.User.id !=this.me.id &&
            this.me.Followings.find(v=>v.id ===this.post.User.id);
        }   
    },
     head(){
                return {
                    title: `${this.post.User.nickName}의 게시글`,
                    meta :[{
                     name:'description',content : this.post.content,
                    }
                    ,{
                    hid: 'ogtitle' , name : 'og:title' , content : `${this.post.User.nickName}의 게시글`,
                    }
                    ,{
                    hid: 'ogdesc' ,  name : 'og:description' , content : this.post.contnet,
                    }
                    ,{
                    hid: 'ogimage' , property : 'og:image' , content : this.post.Images[0] ? this.post.Images[0].src : 'http://vue.nodebird.com/vue-nodebird.png',
                    },{
                    hid: 'ogurl' ,  property : 'og:url' , content : `https://vue.nodebird.com/post/${this.post.id}`,
                    },
                    ]
                }
            },
    methods: {
        onFollow (){
            this.$store.dispatch('users/follow',
            { userId : this.post.User.id});
        },
        onUnFollow (){
            this.$store.dispatch('users/unfollow',
            { userId : this.post.User.id});     
        },
    }
}

</script>

<style scoped>

</style>
