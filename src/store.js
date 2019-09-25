import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isIndex: true
    },
    mutations: {
        changeIndex(state, value){
            state.isIndex = value;
        }
    },

    actions: {

    }
});
