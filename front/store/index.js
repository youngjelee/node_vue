export const state = () => ({
});

export const mutations = {
};

export const actions = {

    nuxtServerInit({commit, dispatch, state}, {req}) {
        console.log("유저 로딩!");
        return dispatch('users/loadUser');

    }
}