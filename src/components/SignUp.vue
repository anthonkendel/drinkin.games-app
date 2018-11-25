<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-4">
        <h2 class="title">Sign up</h2>
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
              <button class="button is-info is-fullwidth">
                <span>Sign up</span>
                <b-icon
                  icon="user-plus"
                  size="is-small"
                />
              </button>
            </p>
            <p class="control is-expanded">
              <button
                type="button"
                class="button is-text is-fullwidth"
                @click="onCancelSignUp"
              >
                <span>Cancel</span>
                <b-icon
                  icon="ban"
                  size="is-small"
                />
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { authService } from '@/services/authService';
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
