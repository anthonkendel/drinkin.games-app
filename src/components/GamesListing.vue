<template>
  <div>
    <table class="table is-hoverable is-fullwidth is-striped">
      <thead>
        <tr>
          <th class="has-text-left">Name</th>
          <th class="has-text-left">Created</th>
          <th class="has-text-right">Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(game, index) in games"
          :key="index"
        >
          <td class="has-text-left">
            <router-link :to="{ name: 'GameDetails', params: { id: game.id } }">{{ game.name }}</router-link>
          </td>
          <td class="has-text-left">{{ new Date(game.created) | dateInWords }} ago</td>
          <td class="has-text-right">{{ game.rating | average }}</td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { dateInWords, getAverage } from '../common/filters';

export default {
  name: 'GamesListing',
  filters: {
    average: getAverage,
    dateInWords: dateInWords,
  },
  computed: {
    ...mapState({
      games: 'games',
    }),
  },
  created() {
    this.loadGames();
  },
  methods: {
    ...mapActions({ loadGames: 'loadGames' }),
  },
};
</script>

<style scoped>
</style>
