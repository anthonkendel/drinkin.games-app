<template>
  <nav
    class="navbar is-info"
    role="navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link
          :to="{ name: 'Home' }"
          class="navbar-item"
        >
          <img
            src="./../assets/drinkin-games-short-transparent.png"
            alt="drinking games logo"
          >
        </router-link>

        <a
          :class="{ 'is-active': isOpen }"
          role="button"
          class="navbar-burger is-light"
          @click="toggleIsOpen"
        >
          <span />
          <span />
          <span />
        </a>
      </div>

      <div
        :class="{ 'is-active': isOpen }"
        class="navbar-menu"
      >
        <div class="navbar-start" />

        <div class="navbar-end">
          <div
            v-if="authentication"
            class="navbar-item"
          >
            <button
              class="button is-dark"
              @click="onSignOut"
            >
              <span>Sign out</span>
              <b-icon
                icon="user-minus"
                size="is-small"
              />
            </button>
          </div>
          <div
            v-else-if="noAuthentication"
            class="navbar-item"
          >
            <button
              class="button is-dark"
              @click="onSignUp"
            >
              <b-icon
                icon="user-plus"
                size="is-small"
              />
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { authService } from '@/services/authService';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Navbar',
  data: () => ({
    isOpen: false,
  }),
  computed: {
    ...mapState({
      authentication: 'authentication',
      noAuthentication: 'noAuthentication',
    }),
  },
  methods: {
    ...mapActions({
      clearState: 'clearState',
      setSignUp: 'setSignUp',
    }),
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
    async onSignOut() {
      await authService.signOut();
      this.clearState();
    },
    onSignUp() {
      this.clearState();
      this.setSignUp(true);
    },
  },
};
</script>

<style scoped>
</style>
