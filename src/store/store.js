import Vue from 'vue';
import Vuex from 'vuex';
import gameService from '@/services/gameService';
import { getAverage } from '@/common/filters';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {},

    signUp: false,
    authentication: false,
    noAuthentication: false,
    emailVerified: false,

    games: [],
  },

  getters: {
    getTopRatedGames(state) {
      const games = state.games.slice(0).map(game => ({
        ...game,
        averageRating: getAverage(game.rating),
      }));
      games.sort((a, b) => a.averageRating - b.averageRating).reverse();
      return games.slice(0, 5);
    },
    getNewGames(state) {
      const games = state.games.slice(0);
      games.sort((a, b) => new Date(a.created) - new Date(b.created)).reverse();
      return games.slice(0, 5);
    },
  },

  mutations: {
    setCurrentUser: (state, currentUser) => (state.currentUser = { ...currentUser }),

    setSignUp: (state, signUp) => (state.signUp = signUp),
    setAuthentication: (state, authentication) => (state.authentication = authentication),
    setNoAuthentication: (state, noAuthentication) => (state.noAuthentication = noAuthentication),
    setEmailVerified: (state, emailVerified) => (state.emailVerified = emailVerified),

    setGames: (state, games) => (state.games = [...games]),

    clearState: state => {
      state.signUp = false;
      state.authentication = false;
      state.noAuthentication = false;
      state.games = [];
    },
  },

  actions: {
    setCurrentUser: ({ commit }, currentUser) => commit('setCurrentUser', currentUser),

    setSignUp: ({ commit }, signUp) => commit('setSignUp', signUp),
    setAuthentication: ({ commit }, authentication) => commit('setAuthentication', authentication),
    setNoAuthentication: ({ commit }, noAuthentication) => commit('setNoAuthentication', noAuthentication),
    setEmailVerified: ({ commit }, emailVerified) => commit('setEmailVerified', emailVerified),

    setGames: ({ commit }, games) => commit('setGames', games),
    async loadGames({ commit }) {
      const games = await gameService.getGames();
      commit('setGames', games);
    },

    clearState: ({ commit }) => commit('clearState'),
  },

  plugins: [
    createPersistedState({
      key: 'drinkingames',
      paths: ['signUp', 'authentication', 'noAuthentication', 'emailVerified'],
    }),
  ],
});
