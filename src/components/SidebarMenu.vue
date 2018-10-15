<template>
  <aside class="menu">
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
import { mapGetters } from 'vuex';

export default {
  name: 'SidebarMenu',
  computed: {
    ...mapGetters({
      topRatedGames: 'getTopRatedGames',
      newGames: 'getNewGames',
    }),
  },
};
</script>

<style lang="scss" scoped>
.menu {
  padding: 1.5rem;
}
</style>
