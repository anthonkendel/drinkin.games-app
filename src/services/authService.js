import { auth } from 'firebase';
import store from '@/store/store';

export default {
  listenOnAuthStateChanged() {
    auth().onAuthStateChanged(user => {
      if (user) {
        store.dispatch('setAuthentication', true);
      } else {
        store.dispatch('setAuthentication', false);
      }
    });
  },

  async createUserWithEmailAndPassword(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
  },

  async signIn(email, password) {
    await auth().setPersistence(auth.Auth.Persistence.LOCAL);
    return auth().signInWithEmailAndPassword(email, password);
  },

  async signOut() {
    return await auth().signOut();
  },
};
