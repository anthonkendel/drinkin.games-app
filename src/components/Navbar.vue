<template>
  <nav
    class="navbar is-light"
    role="navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link
          :to="{ name: 'Home' }"
          class="navbar-item"
        >
          <h1 class="title is-5">Drinkin games</h1>
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
          <div class="navbar-item">
            <button
              class="button is-primary"
              @click="onSignOut"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import authService from '@/services/authService';
import { mapActions } from 'vuex';

export default {
  name: 'Navbar',
  data: () => ({
    isOpen: false,
  }),
  methods: {
    ...mapActions({
      clearState: 'clearState',
    }),
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
    async onSignOut() {
      await authService.signOut();
      this.clearState();
    },
  },
};
</script>

<style scoped>
</style>
