<template>
  <section class="section">
    <div class="section">
      <div class="columns is-centered">
        <div class="column is-2">
          <h2 class="title">Sign in</h2>
          <form @submit.prevent.stop="onSubmit">
            <div class="field">
              <label
                for="email"
                class="label"
              >
                Email
              </label>
              <p class="control has-icons-right">
                <input
                  id="email"
                  v-model="email"
                  required
                  type="email"
                  class="input"
                  placeholder="Email"
                >
                <span class="icon is-right">
                  <i class="fas fa-user" />
                </span>
              </p>
            </div>

            <div class="field">
              <label
                for="password"
                class="label"
              >
                Password
              </label>
              <p class="control has-icons-right">
                <input
                  id="password"
                  v-model="password"
                  required
                  type="password"
                  class="input"
                  placeholder="Password"
                >
                <span class="icon is-right">
                  <i class="fas fa-lock" />
                </span>
              </p>
            </div>

            <div class="field is-grouped">
              <p class="control is-expanded">
                <button class="button is-primary is-fullwidth">Sign in</button>
              </p>
              <p class="control is-expanded">
                <button
                  type="button"
                  class="button is-text is-fullwidth"
                  @click="onSignUp"
                >
                  Sign up
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column is-2">
          <p>Click <a @click="onNoAuthentication">here</a> to continue without an account.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import authService from '@/services/authService';
import { mapActions } from 'vuex';

export default {
  name: 'SignIn',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    ...mapActions({
      setSignUp: 'setSignUp',
      setNoAuthentication: 'setNoAuthentication',
      setAuthentication: 'setAuthentication',
    }),
    onSignUp() {
      this.setSignUp(true);
    },
    async onSubmit() {
      try {
        await authService.signIn(this.email, this.password);
        this.setAuthentication(true);
      } catch (e) {
        this.setNoAuthentication(false);
        this.setAuthentication(false);
      }
    },
    onNoAuthentication() {
      this.setNoAuthentication(true);
    },
  },
};
</script>

<style scoped>
</style>
