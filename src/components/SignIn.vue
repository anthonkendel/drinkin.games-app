<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-4">
        <h2 class="title">Sign in</h2>
        <form @submit.prevent.stop="onSubmit">
          <b-field label="Email">
            <b-input
              v-model="email"
              required
              type="email"
              placeholder="Email"
            />
          </b-field>

          <b-field label="Password">
            <b-input
              v-model="password"
              required
              type="password"
              password-reveal
              placeholder="Password"
            />
          </b-field>

          <div class="field is-grouped">
            <p class="control is-expanded">
              <button class="button is-primary is-fullwidth">
                <span>Sign in</span>
                <b-icon
                  icon="user-check"
                  size="is-small"
                />
              </button>
            </p>
            <p class="control is-expanded">
              <button
                type="button"
                class="button is-text is-fullwidth"
                @click="onSignUp"
              >
                <span>Sign up</span>
                <b-icon
                  icon="user-plus"
                  size="is-small"
                />
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>

    <div class="columns is-centered">
      <div class="column is-4 has-text-centered">
        <p>Click <a @click="onNoAuthentication">here</a> to continue without an account.</p>
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
