<template>
  <div class="home">
    <CreateGameButton v-if="authentication" />
    <Games />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CreateGameButton from '@/components/CreateGameButton';
import Games from '@/components/Games';

export default {
  name: 'Home',
  components: { Games, CreateGameButton },
  computed: {
    ...mapState({
      authentication: 'authentication',
    }),
  },
};
</script>
