<template>
    <div style="border : 1px solid yellow">
    <v-container v-if="!me">
        <v-card>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitLogin">
                <v-container>
                    <v-text-field 
                        label="userId"
                        type="userId"
                        v-model="userId"
                        :rules ="[v=> !!v||'아이디를 입력해주세요.',
                        v => /.+@.+/.test(v) || '아이디가 유효하지 않습니다']"
                        required />
                    <v-text-field 
                        label="비밀번호"
                        type="password"
                        v-model="password"
                        :rules ="[v => !!v||'패스워드를 입력해주세요.']"
                        required/>
                    <v-btn color="green" type="submit" :disabled="!valid" >로그인</v-btn>
                    <v-btn nuxt to ="/signup">회원가입</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>

    
    <v-container v-else >
        <v-card  >
            <v-container>

            {{me.nickName}}님 로그인되었습니다.
            <v-btn @click="onLogout">로그아웃</v-btn>
                <v-row>
                    <v-col cols="4">팔로잉{{me.Followings.length}}</v-col>
                    <v-col cols="4">팔로워{{me.Followers.length}}</v-col>
                    <v-col cols="4">게시글{{me.Posts.length}}</v-col>
                </v-row>
            
            </v-container>
        </v-card>
    </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return {
            valid : false,
            userId: '',
            password :'',


        }
    },
    methods: {
        onSubmitLogin (){
            if(this.valid){
                    alert('로그인 시도');
                    this.$store.dispatch('users/login',{
                        userId: this.userId,
                        password : this.password
                    });

                }else{
                    alert('폼이 유효하지않음');
                }
                // this.$refs.form.validate()
        },
        // onLogin(){
        //     if(this.valid){
        //         this.$store.dispatch('users/login');
        //     }
        // },
        onLogout (){
            this.$store.dispatch('users/logOut');
        }
    },
    computed  :{
        me() {
            return this.$store.state.users.me;
        }
    }
    
}
</script>

<style >

</style>