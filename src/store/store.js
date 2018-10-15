import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

class Game {
  constructor(name, rating, created) {
    this.name = name;
    this.rating = rating;
    this.created = created;
  }
}

function getAverage(array) {
  return array.reduce((p, c) => p + c, 0) / array.length;
}

export default new Vuex.Store({
  state: {
    signUp: false,
    authentication: false,
    noAuthentication: false,

    games: [
      new Game('Ring of fire', [1, 4, 5], '2018-01-01'),
      new Game('Beer game', [1, 2, 3], '2018-02-02'),
      new Game('Kings cup', [1, 4, 5], '2018-03-03'),
      new Game('Never have I ever', [1, 4, 5], '2018-04-04'),
      new Game('Flip cup', [1, 4, 5], '2018-05-05'),
      new Game('Buzz', [1, 4, 5], '2018-06-06'),
      new Game('Drunk jenga', [5, 5, 5], '2017-07-07'),
    ],
  },
  getters: {
    getTopRatedGames(state) {
      const games = state.games.slice(0).map(game => ({ ...game, averageRating: getAverage(game.rating) }));
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
    setSignUp: (state, signUp) => (state.signUp = signUp),
    setAuthentication: (state, authentication) => (state.authentication = authentication),
    setNoAuthentication: (state, noAuthentication) => (state.noAuthentication = noAuthentication),

    setGames: (state, games) => (state.games = [...games]),
  },
  actions: {
    setSignUp: ({ commit }, signUp) => commit('setSignUp', signUp),
    setAuthentication: ({ commit }, authentication) => commit('setAuthentication', authentication),
    setNoAuthentication: ({ commit }, noAuthentication) => commit('setNoAuthentication', noAuthentication),

    setGames: ({ commit }, games) => commit('setGames', games),
  },
});
