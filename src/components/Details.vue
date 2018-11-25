<template>
  <div class="columns is-desktop details">
    <div class="column">
      <GameComponent />
    </div>
    <div
      v-if="game.id && authentication && emailVerified"
      class="column is-2-desktop"
    >
      <div class="buttons">
        <RateGameButton v-if="authentication && emailVerified" />
        <DeleteGameButton v-if="authentication && emailVerified && currentUserCreatedGame" />
      </div>
    </div>
  </div>
</template>

<script>
import { Game } from '@/services/gameService';
import { mapActions, mapState } from 'vuex';
import RateGameButton from '@/components/RateGameButton';
import GameComponent from '@/components/Game';
import DeleteGameButton from './DeleteGameButton';

export default {
  name: 'Details',
  components: { DeleteGameButton, GameComponent, RateGameButton },
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
      game: 'game',
      currentUser: 'currentUser',
    }),
    currentUserCreatedGame() {
      const createdBy = this.game.createdBy;
      const currentUserId = this.currentUser.uid;
      return createdBy === currentUserId;
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
