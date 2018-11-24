<template>
  <button
    class="button is-info"
    @click="openRateGameModal"
  >
    <span>Rate game</span>
    <b-icon
      size="is-small"
      icon="star"
    />
  </button>
</template>

<script>
import RateGameModal from '@/components/RateGameModal';
import { mapState } from 'vuex';

export default {
  name: 'RateGameButton',
  computed: {
    ...mapState({
      game: 'game',
      currentUser: 'currentUser',
    }),
  },
  methods: {
    openRateGameModal() {
      this.$modal.open({
        parent: this,
        component: RateGameModal,
        hasModalCard: true,
        props: { id: this.game.id },
      });
    },
  },
};
</script>
