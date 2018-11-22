<template>
  <form @submit.prevent.stop="onFormSubmit">
    <div class="modal-card create-game-modal">
      <header class="modal-card-head">
        <p class="modal-card-title">Create game</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Name">
          <b-input
            v-model="name"
            required
            type="text"
          />
        </b-field>
        <b-field label="Description">
          <b-input
            v-model="description"
            required
            type="textarea"
            rows="10"
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
        <button class="button is-primary">Create</button>
      </footer>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex';
import gameService from '@/services/gameService';

export default {
  name: 'CreateNewGameModal',
  data: () => ({
    name: '',
    description: '',
  }),
  computed: {
    ...mapState({
      currentUser: 'currentUser',
    }),
  },
  methods: {
    async onFormSubmit() {
      const createdBy = this.currentUser.uid || undefined;
      await gameService.createGame({
        name: this.name,
        description: this.description,
        createdBy,
      });
      this.$parent.close();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
