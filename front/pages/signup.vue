<template>
    <div>
        <v-container>
            <v-card>
                <v-subheader>회원가입</v-subheader>
                <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                    <v-container>

                    <v-text-field label="이메일"
                    type="email"
                    v-model ="email"
                    :rules="emailRules"
                    required></v-text-field>

                    <v-text-field label="비밀번호"
                    type="password"
                    v-model ="password"
                    :rules="passwordRules"
                    required></v-text-field>

                    <v-text-field label="비밀번호확인"
                    type="password"
                    v-model ="passwordChk"
                    :rules="passwordChkRules"
                    required></v-text-field>

                    <v-text-field label="닉네임"
                    type="text"
                    v-model ="nickName"
                    :rules="nickNameRules"
                    required></v-text-field>
 
                    <v-checkbox required label="체크" 
                    v-model="terms" :rules="[v => !!v||'체크해주세요.']"/>
                    <v-btn color="green" type="submit">가입하기</v-btn>
                    </v-container>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                valid: false,
                email : '',
                password : '',
                passwordChk :"",
                nickName : '',
                terms : false,
                emailRules : [
                    v => !!v || '이메일은 필수입니다.',
                    v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다',
                ],
                nickNameRules : [
                    v=> !!v || '닉네임은 필수입니다.'
                ],
                passwordRules : [
                    v => !!v || '비밀번호는 필수입니다.'
                ],
                passwordChkRules : [
                    v => !!v || '비밀번호확인은 필수입니다.',
                    v => v ===this.password||'비밀번호를 확인해주세요'
                ]



            }
        },
        computed : {
            me () {
                return this.$store.state.users.me;
            }
        },
        head (){
            return {
                title:"회원가입"
            }
        },
        methods : {
            onSubmitForm () {
                if(this.$refs.form.validate()){
                    this.$store.dispatch('users/signUp',{
                        nickName : this.nickName,
                        email : this.email,
                        password : this.password 
                    }).then(()=> {
                        this.$router.push({
                        path: '/',

                        });
                    }).catch(()=> {
                        alert("회원가입 실패");
                    });
                    
                    alert('회원가입 시도');
                }else{
                    alert('폼이 유효하지않음');
                }
                // console.log(this.valid);
            }
        },
        middleware : 'anonymous',
       watch : {
           me(value,oldValue){
               if(value){
                   this.$router.push({
                       path: '/',
                   })
               }
           }
       }
    }
</script>

<style >

</style>