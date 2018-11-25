import { auth } from 'firebase';
import store from '@/store/store';
import { Snackbar } from 'buefy/dist/components/snackbar';

export const authService = {
  listenOnAuthStateChanged() {
    auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch('setCurrentUser', user);
        store.dispatch('setEmailVerified', user.emailVerified);
        store.dispatch('setAuthentication', true);
      } else {
        store.dispatch('setAuthentication', false);
      }
    });
  },

  async createUserWithEmailAndPassword(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
  },

  async sendEmailVerification() {
    const user = auth().currentUser;
    if (user) {
      await user.sendEmailVerification();
      Snackbar.open({ message: `Email verification sent to ${user.email}`, type: 'is-info' });
    }
  },

  async signIn(email, password) {
    await auth().setPersistence(auth.Auth.Persistence.LOCAL);
    return auth().signInWithEmailAndPassword(email, password);
  },

  async signOut() {
    return await auth().signOut();
  },
};
