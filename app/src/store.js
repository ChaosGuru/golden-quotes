import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loggedIn: false,
    },
    getters: {
        user(state) {
            return state.loggedIn
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.loggedIn = value;
        }
    },
    actions: {
        logInUser({ commit }, user) {
            commit("SET_LOGGED_IN", user!==null);
        }
    }
})