<template>
  <div class="columns is-desktop details">
    <div class="column">
      <GameComponent />
    </div>
    <div
      v-if="authentication && emailVerified"
      class="column is-narrow"
    >
      <div class="buttons">
        <RateGameButton v-if="authentication && emailVerified" />
      </div>
    </div>
  </div>
</template>

<script>
import { Game } from '@/services/gameService';
import { mapActions, mapState } from 'vuex';
import RateGameButton from '@/components/RateGameButton';
import GameComponent from '@/components/Game';

export default {
  name: 'Details',
  components: { GameComponent, RateGameButton },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState({
      emailVerified: 'emailVerified',
      authentication: 'authentication',
    }),
  },
  async created() {
    this.setGame(new Game());
    this.loadGame(this.id);
  },
  methods: {
    ...mapActions({
      setGame: 'setGame',
      loadGame: 'loadGame',
    }),
  },
};
</script>
