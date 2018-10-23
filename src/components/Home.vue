<template>
  <div class="home">
    <div>
      <button
        class="button is-primary"
        @click="createNewGame"
      >Create new game</button>
    </div>
    <GamesListing />
  </div>
</template>

<script>
import CreateNewGameModal from '@/components/CreateNewGameModal';
import GamesListing from '@/components/GamesListing';

export default {
  name: 'Home',
  components: { GamesListing },
  methods: {
    createNewGame() {
      this.$modal.open({
        parent: this,
        component: CreateNewGameModal,
        hasModalCard: true,
      });
    },
  },
};
</script>
