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
      <section class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-2 is-hidden-touch">
              <SidebarGames />
            </div>
            <div class="column">
              <EmailVerificationWarning />
              <router-view :key="$route.fullPath" />
            </div>
          </div>
        </div>
      </section>
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
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Roboto|Roboto+Mono');
@import '~bulma/sass/utilities/_all';

$family-sans-serif: 'Roboto', sans-serif;
$family-monospace: 'Roboto Mono', monospace;

.title,
.subtitle {
  font-family: 'Proza Libre', sans-serif;
}

$size-1: 2.7rem;
$size-2: 2.2rem;
$size-3: 1.7rem;
$size-4: 1.2rem;
$size-5: 1.15rem;
$size-6: 0.85rem;
$size-7: 0.7rem;

$section-padding: 1rem 0.75rem;

$radius-small: 2px;
$radius: 3px;
$radius-large: 4px;

$speed: 100ms;

$menu-item-active-background-color: $primary;

// Setup $colors to use as bulma classes
$colors: (
  'white': (
    $white,
    $black,
  ),
  'black': (
    $black,
    $white,
  ),
  'light': (
    $light,
    $light-invert,
  ),
  'dark': (
    $dark,
    $dark-invert,
  ),
  'primary': (
    $primary,
    $primary-invert,
  ),
  'info': (
    $info,
    $info-invert,
  ),
  'success': (
    $success,
    $success-invert,
  ),
  'warning': (
    $warning,
    $warning-invert,
  ),
  'danger': (
    $danger,
    $danger-invert,
  ),
);

.loading-overlay .loading-background {
  background: transparent !important;
}

@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
