<template>
  <section class="section">
    <div class="section">
      <div class="columns is-centered">
        <div class="column is-2">
          <h2 class="title">Sign up</h2>
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
                <button class="button is-info is-fullwidth">Sign up</button>
              </p>
              <p class="control is-expanded">
                <button
                  type="button"
                  class="button is-text is-fullwidth"
                  @click="onCancelSignUp"
                >
                  Cancel
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import authService from '@/services/authService';
import { mapActions } from 'vuex';

export default {
  name: 'SignUp',
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
    onCancelSignUp() {
      this.setSignUp(false);
    },
    async onSubmit() {
      try {
        await authService.createUserWithEmailAndPassword(this.email, this.password);
        await authService.sendEmailVerification();
        this.setAuthentication(true);
      } catch (e) {
        this.setAuthentication(false);
        this.setNoAuthentication(false);
      }
    },
  },
};
</script>

<style scoped>
</style>
