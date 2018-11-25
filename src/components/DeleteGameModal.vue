<template>
  <form @submit.prevent.stop="onFormSubmit">
    <div class="modal-card create-game-modal">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete game</p>
      </header>
      <section class="modal-card-body">
        <p>Are you sure you want to delete this game?</p>
      </section>
      <footer class="modal-card-foot buttons is-right">
        <button
          type="button"
          class="button is-text"
          @click="$parent.close()"
        >
          Cancel
        </button>
        <button class="button is-danger">Delete</button>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import { gameService } from '../services/gameService';

export default {
  name: 'DeleteGameModal',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  methods: {
    ...mapActions({
      loadGame: 'loadGame',
    }),
    async onFormSubmit() {
      await gameService.deleteGame(this.id);
      this.$router.push({ name: 'Home' });
      this.$parent.close();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
