import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signUp: false,
    authentication: false,
    noAuthentication: false,
  },
  mutations: {
    setSignUp: (state, signUp) => (state.signUp = signUp),
    setAuthentication: (state, authentication) => (state.authentication = authentication),
    setNoAuthentication: (state, noAuthentication) => (state.noAuthentication = noAuthentication),
  },
  actions: {
    setSignUp: ({ commit }, signUp) => commit('setSignUp', signUp),
    setAuthentication: ({ commit }, authentication) => commit('setAuthentication', authentication),
    setNoAuthentication: ({ commit }, noAuthentication) => commit('setNoAuthentication', noAuthentication),
  },
});
