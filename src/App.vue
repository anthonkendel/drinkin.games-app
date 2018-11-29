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
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700+Libre|Roboto|Roboto+Mono');
@import '~bulma/sass/utilities/_all';

$family-sans-serif: 'Roboto', sans-serif;
$family-monospace: 'Roboto Mono', monospace;

.title,
.subtitle {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
}

$dark-brown: #260b01;
$yellow: #f2ca52;

$orange: #d9631e;
$brown: #591902;

$lily: #a28f9d;
$teal: #628395;
$lime: #c2efb3;

$primary: $brown;
$primary-invert: findColorInvert($primary);

$info: $yellow;
$info-invert: findColorInvert($info);

$danger: $lily;
$danger-invert: findColorInvert($danger);

$warning: $teal;
$warning-invert: findColorInvert($warning);

$success: $lime;
$success-invert: findColorInvert($success);

$link: $teal;
$link-invert: findColorInvert($link);

$dark: $dark-brown;
$dark-invert: findColorInvert($dark);

$text: $dark-brown;
$text-invert: findColorInvert($text);

$link: $brown;

$size-1: 2.7rem;
$size-2: 2.2rem;
$size-3: 1.7rem;
$size-4: 1.2rem;
$size-5: 1.15rem;
$size-6: 0.85rem;
$size-7: 0.7rem;

$section-padding: 1rem 0.75rem;

$radius-small: 1px;
$radius: 2px;
$radius-large: 3px;

$speed: 100ms;

$menu-item-active-background-color: $primary;

$navbar-height: 4rem;

$colors: mergeColorMaps(
  (
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
    'link': (
      $link,
      $link-invert,
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
  ),
  $custom-colors
);

.loading-overlay .loading-background {
  background: transparent !important;
}

@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
