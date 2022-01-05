<template>
    <v-app> <!--  vuetify 적용시 꼭 적어줘야함  -->
        <nav>
            <v-toolbar>
                <v-toolbar-title> 
                    <nuxt-link to="/">Node Bird</nuxt-link>

                </v-toolbar-title>
            
            <v-spacer />
            <v-toolbar-items>
                
                <v-form @submit.prevent="onSearchHashtag">
                    <div :style="{display:'flex',alignItems:'center', height:'100%'}" >
                        <v-text-field 
                        v-model="hashtag"
                        label="검색" 
                        hide-details 
                        prepend-icon="mdi-search"
                        />
                    </div>
                </v-form>
                
                <v-btn text nuxt-link to ="/profile">
                    <div>프로필</div>
                </v-btn>
                <v-btn text nuxt to="/signup">
                    <div>회원가입</div>
                </v-btn>    
            </v-toolbar-items>
            </v-toolbar>
        </nav>
        <!-- <div>{{name}}</div>
        <v-btn @click="onChangeName">바이바이</v-btn> -->
        <v-row no-gutters>
            <v-col cols="12" md="4">
                
                <LoginForm />
           
            </v-col>
            <v-col cols="12" md="8">
                <nuxt />

            </v-col>
        </v-row>
    </v-app>


</template>

<script>
import LoginForm from '~/components/LoginForm';    //~ 는 소스 루트 

export default {

    components : {
        LoginForm : LoginForm,
    },

    computed : {
        name(){
            return this.$store.state.posts.name
        }
    },
    data(){
        return {
            hashtag:'',
        }
    },
    methods: {
        onSearchHashtag (){
            this.$router.push({
                path: `/hashtag/${encodeURIComponent(this.hashtag)}`,
            });
            this.hashtag = '';
        }
    }
    
}
</script>



