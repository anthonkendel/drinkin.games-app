<template>
  <div class="details columns">
    <div class="column">
      <GameComponent />
    </div>
    <div class="column is-1">
      <RateGameButton />
    </div>
  </div>
</template>

<script>
import { Game } from '@/services/gameService';
import { mapActions } from 'vuex';
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
