<template>
  <div id="app">
    <div v-if="!authentication && !noAuthentication">
      <div class="container">
        <SignUp v-if="signUp" />
        <SignIn v-else />
      </div>
    </div>
    <div v-else-if="authentication || noAuthentication">
      <Navbar />
      <div class="container">
        <div class="columns">
          <div class="column is-2 is-hidden-touch">
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

$section-padding: 1rem 0.75rem;

$radius-small: 2px;
$radius: 3px;
$radius-large: 4px;

@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
