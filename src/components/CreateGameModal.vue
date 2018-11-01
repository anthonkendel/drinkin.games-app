<template>
  <form @submit.prevent.stop="onFormSubmit">
    <div class="modal-card create-game-modal">
      <header class="modal-card-head">
        <p class="modal-card-title">Create game</p>
      </header>
      <section class="modal-card-body">
        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input
                  v-model="name"
                  required
                  class="input"
                  type="text"
                >
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <label class="label">Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <textarea
                  v-model="description"
                  required
                  class="textarea"
                  rows="10"
                />
              </p>
            </div>
          </div>
        </div>
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
import gameService from '@/services/gameService';

export default {
  name: 'CreateNewGameModal',
  data: () => ({
    name: '',
    description: '',
  }),
  methods: {
    async onFormSubmit() {
      await gameService.createGame({
        name: this.name,
        description: this.description,
      });
      this.$parent.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.create-game-modal {
  width: 960px;
}
</style>
