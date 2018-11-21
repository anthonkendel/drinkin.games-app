<template>
  <aside class="menu">
    <div class="menu-container">
      <template v-if="totalGames > 0">
        <p class="menu-label">Top rated games</p>
        <ul
          v-if="topRatedGames.length > 0"
          class="menu-list"
        >
          <li
            v-for="game in topRatedGames"
            :key="game.id"
          >
            <router-link :to="{ name: 'Game', params: { id: game.id }}">
              {{ game.name }}
            </router-link>
          </li>
        </ul>

        <p class="menu-label">
          New games
        </p>
        <div class="menu-container">
          <ul
            v-if="newGames.length > 0"
            class="menu-list"
          >
            <li
              v-for="game in newGames"
              :key="game.id"
            >
              <router-link :to="{ name: 'Game', params: { id: game.id }}">
                {{ game.name }}
              </router-link>
            </li>
          </ul>

          <b-loading
            v-if="newGames.length < 1"
            :is-full-page="false"
            active
          />
        </div>
      </template>
      <template v-else>
        <b-loading
          :is-full-page="false"
          class="b-loading"
          active
        />
      </template>
    </div>
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
    totalGames: vm => vm.topRatedGames.length + vm.newGames.length,
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
.menu-container {
  position: relative;
  .b-loading {
    height: 10em;
    width: 10em;
    margin: 20vh auto 20vh auto;
  }
}
</style>
