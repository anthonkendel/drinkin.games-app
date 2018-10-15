<template>
  <div>
    <table class="table is-hoverable is-fullwidth is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(game, index) in games"
          :key="index"
        >
          <td>{{ game.name }}</td>
          <td>{{ new Date(game.created).toDateString() }}</td>
          <td>{{ game.rating }}</td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GamesListing',
  computed: {
    ...mapState({
      games: 'games',
    }),
  },
};
</script>

<style scoped>
</style>
