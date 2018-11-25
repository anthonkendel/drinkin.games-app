<template>
  <button
    class="button is-danger"
    @click="openDeleteGameModal"
  >
    <span>Delete game</span>
    <b-icon
      size="is-small"
      icon="trash"
    />
  </button>
</template>

<script>
import DeleteGameModal from '@/components/DeleteGameModal';
import { mapState } from 'vuex';

export default {
  name: 'DeleteGameButton',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState({
      game: 'game',
      currentUser: 'currentUser',
    }),
  },
  methods: {
    openDeleteGameModal() {
      this.$modal.open({
        parent: this,
        component: DeleteGameModal,
        hasModalCard: true,
        props: { id: this.game.id },
      });
    },
  },
};
</script>

<style scoped>
</style>
