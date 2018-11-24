<template>
  <form @submit.prevent.stop="onFormSubmit">
    <div class="modal-card create-game-modal">
      <header class="modal-card-head">
        <p class="modal-card-title">Rate game</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Rating">
          <b-input
            v-model="rating"
            type="number"
            required
            min="0"
            max="5"
          />
        </b-field>
      </section>
      <footer class="modal-card-foot buttons is-right">  
        <button
          type="button"
          class="button is-text"
          @click="$parent.close()"
        >
          Cancel
        </button>
        <button class="button is-primary">Rate</button>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import gameService from '@/services/gameService';

export default {
  name: 'RateGameModal',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    rating: 3,
  }),
  methods: {
    ...mapActions({
      loadGame: 'loadGame',
    }),
    async onFormSubmit() {
      await gameService.rateGame(this.id, this.rating);
      this.loadGame(this.id);
      this.$parent.close();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
