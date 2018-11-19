<template>
  <aside class="menu is-hidden-touch">
    <p class="menu-label">Top rated games</p>
    <ul
      v-if="topRatedGames.length > 0"
      class="menu-list"
    >
      <li
        v-for="(game, index) in topRatedGames"
        :key="index"
      >
        <a>{{ game.name }}</a>
      </li>
    </ul>

    <p class="menu-label">
      New games
    </p>

    <ul class="menu-list">
      <li
        v-for="(game, index) in newGames"
        :key="index"
      >
        <a>{{ game.name }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SidebarGames',
  computed: {
    ...mapGetters({
      topRatedGames: 'getTopRatedGames',
      newGames: 'getNewGames',
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

<style lang="scss" scoped>
.menu {
  padding: 1.5rem;
}
</style>
