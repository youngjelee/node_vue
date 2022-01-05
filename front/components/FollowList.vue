<template>
<div>
    <v-container>
        <v-subheader> 팔로잉</v-subheader>
    <v-list>
        <v-col v-for="following in followingList" :key="following.id" 
                cols="12" md="4" style="display: inline-block"> 
                
            <v-list-item>
                <v-list-item-avatar color="indigo">
                    <span class="withe--text headline"> {{following.nickName[0]}}</span>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{following.nickName}}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon @click="removeFollowing(following)">mdi-minus-circle-outline</v-icon>
                   
                </v-list-item-action>
            </v-list-item>
        </v-col>
         <v-btn color="blue" style="width : 100%" 
         v-if="hasMoreFollowing" @click="loadFollowing">더보기</v-btn>    
    </v-list>

    </v-container>
    <v-container>
        <v-subheader> 팔로워</v-subheader>
        <v-list>

            <v-col v-for="follower in followerList" :key="follower.id" 
                cols="12" md="4" style="display: inline-block"> 
            <v-list-item>
                <v-list-item-avatar color="indigo">
                    <span class="withe--text headline"> {{follower.nickName[0]}}</span>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{follower.nickName}}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon @click="removeFollwer(follower)">mdi-minus-circle-outline</v-icon>
                   
                </v-list-item-action>
            </v-list-item>
            </v-col>

    </v-list>
     <v-btn color="blue" style="width : 100%"
      v-if="hasMoreFollower" @click="loadFollower">더보기</v-btn>   
     </v-container>
</div>

</template>
<script>
export default {
    computed : {

        followingList (){
            return this.$store.state.users.followingList;
        },
        
        followerList (){
            return this.$store.state.users.followerList;
        },
        hasMoreFollowing (){
            return this.$store.state.users.hasMoreFollowing;
        },
        hasMoreFollower (){
            return this.$store.state.users.hasMoreFollower;
        }
    },
    methods : {
        removeFollowing(person){
            this.$store.dispatch('users/removeFollowing',{
               user: person
            })
        },
        removeFollwer(person){
            this.$store.dispatch('users/removeFollwer',{
                user : person
            })
        },
        loadFollowing (){
            this.$store.dispatch('users/loadFollowing');
        },
        loadFollower (){
              this.$store.dispatch('users/loadFollower');
        }
    },


 
}
</script>
<style>

</style>