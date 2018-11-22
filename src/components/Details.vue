<template>
  <div class="details">
    <Game :id="id" />
  </div>
</template>

<script>
import Game from '@/components/Game';

export default {
  name: 'Details',
  components: { Game },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
};
</script>
