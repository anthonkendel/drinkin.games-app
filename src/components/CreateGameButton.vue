<template>
  <button
    class="button is-primary"
    @click="openCreateGameModal"
  >
    Create
  </button>
</template>

<script>
import CreateGameModal from '@/components/CreateGameModal';

export default {
  name: 'CreateGameButton',
  methods: {
    openCreateGameModal() {
      this.$modal.open({
        parent: this,
        component: CreateGameModal,
        hasModalCard: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
