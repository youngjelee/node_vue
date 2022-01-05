<template>
    
    <div>
        <v-card style="margin:10px">
            <v-container>
                    <v-subheader>내 프로필</v-subheader>
            <v-form v-model="valid" @submit.prevent="onChangeNickName">
                <v-text-field 
                label ="닉네임" v-model="nickName" :rules="nickNameRules"
                required/>
                <v-btn color="blue" type="submit"> 수정</v-btn>
            </v-form>
            </v-container>
        </v-card>
        <v-card style="margin :10px">
                <follow-list />
        </v-card>
        
    </div>
</template>


<script>
    import FollowList from '@/components/FollowList';
    export default {
        components : {
            FollowList,
        },
        data() {
            return {
                name : "이제영",
                valid : false ,
                nickName :  '',
                nickNameRules : [v=>!!v || '닉네임임을 입력하세요.'],
            }
        },
        head() {
            return {
                title: '프로필'
            }
        },
        fetch({store}){

           
            return Promise.all([
                store.dispatch('users/loadFollowing',{offset:0}),
                 store.dispatch('users/loadFollower', {offset:0})
            ]);
        },
        methods : {
            onChangeNickName () {
                this.$store.dispatch('users/changeNickName',{
                    nickName : this.nickName
                }).then(()=>{
                    this.nickName=''
                });
            }
        },
        middleware : 'authenticated',
    }
</script>

<style >

</style>