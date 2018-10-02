<template>
  <nav
    class="navbar is-light"
    role="navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="/"
      >
        <h1 class="title is-5">Drinkin games</h1>
      </a>

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

      <div class="navbar-end" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    isOpen: false,
  }),
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
</style>
