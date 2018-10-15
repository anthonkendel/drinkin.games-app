<template>
  <div class="home">
    <GamesListing />
  </div>
</template>

<script>
import GamesListing from '@/components/GamesListing';

export default {
  name: 'Home',
  components: { GamesListing },
};
</script>
