<template>
  <div id="app">
    <Navbar />
    <div class="columns">
      <div class="column is-narrow">
        <SidebarMenu />
      </div>
      <div class="column router-view">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import SidebarMenu from '@/components/SidebarMenu';

export default {
  name: 'DrinkinGamesApp',
  components: { Navbar, SidebarMenu },
};
</script>

<style lang="scss" scoped>
.router-view {
  padding: 1.5rem;
}
</style>
