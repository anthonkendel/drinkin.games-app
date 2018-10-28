<template>
  <div class="home">
    <CreateGameButton v-if="authentication" />
    <GamesListing />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CreateGameButton from '@/components/CreateGameButton';
import GamesListing from '@/components/GamesListing';

export default {
  name: 'Home',
  components: { GamesListing, CreateGameButton },
  computed: {
    ...mapState({
      authentication: 'authentication',
    }),
  },
};
</script>
