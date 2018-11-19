<template>
  <div id="app">
    <div v-if="!authentication && !noAuthentication">
      <SignUp v-if="signUp" />
      <SignIn v-else />
    </div>
    <div v-else-if="authentication || noAuthentication">
      <Navbar />
      <div class="columns">
        <div class="column is-2">
          <SidebarMenu />
        </div>
        <div class="column router-view">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import SidebarMenu from '@/components/SidebarMenu';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { mapState } from 'vuex';

export default {
  name: 'DrinkinGamesApp',
  components: { SignUp, SignIn, Navbar, SidebarMenu },
  computed: {
    ...mapState({
      signUp: 'signUp',
      authentication: 'authentication',
      noAuthentication: 'noAuthentication',
    }),
  },
};
</script>

<style lang="scss" scoped>
.router-view {
  padding: 1.5rem;
}
</style>
