<template>
  <b-notification
    v-if="authentication && !emailVerified"
    type="is-warning"
  >
    Please note that your email is not verified.
    Without a verified email you cannot create games,
    rank games or use any other features that require
    you to be signed in.
  </b-notification>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'EmailVerificationWarning',
  computed: {
    ...mapState({
      emailVerified: 'emailVerified',
      authentication: 'authentication',
    }),
  },
};
</script>
