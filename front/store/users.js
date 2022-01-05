// import Vue from 'vue';

export const state = () => ({
    me : null,
    other : null, //남의정보
    followingList: [],
    followerList: [],
    hasMoreFollowing  : true,
    hasMoreFollower : true  ,

});
// const totalFollowings = 6;
// const totalFollwers = 8; 
    const limit = 3; 

//보통 mutations 는 단순한 동기작업을 할때 사용한다
export const mutations = {
    setMe(state,payload) {
        state.me = payload;
    },
    setOther(state,payload) {
        state.other = payload;
    },
    changeNickName(state,payload){
        state.me.nickName = payload.nickName;
    },

    addFollowing(state,payload){
        state.followingList.push(payload);
    } , 

    addFollower(state,payload){
        state.followerList.push(payload);
    },
    loadFollowing(state,payload){

        console.log("뜨나만 보자 제발 어디뜨니이거?");
        console.log(payload.offset===0);
        if(payload.offset===0){
            state.followingList = payload.data;
        }else{
            state.followingList = state.followingList.concat(payload.data);
        }
        state.hasMoreFollowing = payload.data.length === limit;
    },
    loadFollower (state,payload){
        if(payload.offset===0){
            state.followerList = payload.data;
        }else{
            state.followerList = state.followerList.concat(payload.data);
        }
        
        state.hasMoreFollower = payload.data.length === limit;
    },
    following(state,payload){
        state.me.Followings.push({ id:payload.userId });
    },
    removeFollowing(state,payload){
        const index = state.followingList.findIndex(v =>v.id ===payload)
        state.followingList.splice(index,1);
    },
    removeFollwer(state,payload){
        const index = state.followerList.findIndex(v =>v.id ===payload);
        state.followerList.splice(index,1);
    },

}
////////////////////////////////////////////////////////////////////
//비동기작업들은 actions 에 넣어준다 , 여러가지작업들 포함가능

export const actions = {
    
     loadUser({commit,state}){
        this.$axios.get('/user', {
        withCredentials: true,
        })
        .then((res)=>{
            commit('setMe',res.data);
            console.log(state);
        }).catch((err)=> {
            console.error(err);
        })
    },

    async loadOther({commit} ,payload){
        
        try{
            const res = await this.$axios.get(`/user/${payload.userId}`);
             commit('setOther',res.data);

        }catch(err){
            console.error(err);
        }

    },



    signUp({commit,state}, payload){
        //추후 서버에 회원가입 요청을 보내는 부분
        
        console.log(payload);

        this.$axios.post('/user',{
            email:payload.email,
            nickName : payload.nickName,
            password : payload.password
        }) // REST api 
        .then((res)=>{
            // console.log(data);
            commit('setMe',res.data);
        }).catch((err)=> {
            console.log(err);
        });
    },
    login({commit},payload){
        this.$axios.post('/user/login'
        ,{
            email : payload.email,
            password : payload.password
        },{
           withCredentials  :true,
        }).then((res) => {
            // console.log("데이터에용",data);

            commit('setMe',res.data);
        }).catch((err)=> {
            console.error(err);
        })
    },
    
    logOut({commit},payload){
        this.$axios.post('/user/logout',{},
        {withCredentials : true})
        .then((data)=>{
            commit('setMe', null);
        }).catch((err) => {
            console.error(err);
        });
    },
    changeNickName({commit},payload){
        this.$axios.patch('/user/nickName',{
            nickName: payload.nickName},{
                withCredentials:true
            })
            .then((res)=>{
                commit('changeNickName',payload);
            }).catch((err) => {
                console.error(err);
            });
        
    },
    removeFollowing({commit},payload){
        this.$axios.post(`/user/${payload.user.id}/removeFollowing`,{},{
            withCredentials:true
        })
        .then((res)=> {
            commit('removeFollowing',res.data);
        }).
        catch((err) => {
            console.error(err);
        });
        
    },
    removeFollwer({commit},payload){
        this.$axios.delete(`/user/${payload.user.id}/removeFollwer`,{
            withCredentials:true
        })
        .then((res)=> {
            commit('removeFollwer',res.data);
        }).
        catch((err) => {
            console.error(err);
        });
        
    },


    addFollowing({commit},payload){
        commit('addFollowing',payload);
    },
    addFollower({commit},payload){
        commit('addFollwer',payload);
    },

    loadFollowing ({commit,state} , payload){
        if( !(payload && payload.offset === 0) && !state.hasMoreFollowing){
            return;
        }
        let offset= state.followingList.length ; 
        if(payload && payload.offset===0){
            offset = 0;
        }
        
            return this.$axios.get(`/user/${state.me.id}/followings?limit=3&offset=${offset}`,{
                withCredentials : true
            })
            .then((res)=>{
                commit ('loadFollowing' , {
                    data: res.data,
                    offset,
                });
            })
            .catch((e)=>{
                console.error(e);
            });
        
        
    },
    loadFollower ({commit,state},payload){

        if( !(payload && payload.offset === 0) && !state.hasMoreFollower){
            return;
        }
        let offset= state.followerList.length ; 
        if(payload && payload.offset===0){
            offset = 0;
        }
    
            return this.$axios.get(`/user/${state.me.id}/followers?limit=3&offset=${offset}`,{
                withCredentials :true
            })
            .then((res)=>{
                commit ('loadFollower' , {
                    data: res.data,
                    offset,
                });
            })
            .catch((e)=>{
                console.error(e);
            });
            
       
    },

    follow({commit},payload){
        this.$axios.post(`/user/${payload.userId}/follow`,{},{
            withCredentials: true,
        })
        .then((res)=> {
            commit('following', {
                userId : payload.userId
            });
        })
        .catch((e)=>{
            console.error(e);
        });
    },
    unfollow({commit,state},payload){
        this.$axios.delete(`/user/${payload.userId}/follow`,{
            withCredentials: true,
        })
        .then((res)=> {
            commit('removeFollowing', {
                userId : payload.userId
            });
        })
        .catch((e)=>{
            console.error(e);
        });
    }
    
};