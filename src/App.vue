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
          <SidebarGames />
        </div>
        <div class="column">
          <section class="section">
            <EmailVerificationWarning />
            <router-view />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import SidebarGames from '@/components/SidebarGames';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import EmailVerificationWarning from '@/components/EmailVerificationWarning';
import { mapState } from 'vuex';

export default {
  name: 'DrinkinGamesApp',
  components: { SignUp, SignIn, Navbar, SidebarGames, EmailVerificationWarning },
  computed: {
    ...mapState({
      signUp: 'signUp',
      authentication: 'authentication',
      noAuthentication: 'noAuthentication',
    }),
  },
};
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

$section-padding: 1.5rem 0.75rem;

@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
