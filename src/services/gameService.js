import { firestore } from 'firebase';
import { Snackbar } from 'buefy/dist/components/snackbar';

const GAMES_COLLECTION = 'games';

class Game {
  constructor({ id = '', name, description, created = new Date(), updated = new Date() }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = [];
    this.created = created;
    this.updated = updated;
  }
}

export default {
  async getGames() {
    const snapshot = await firestore()
      .collection(GAMES_COLLECTION)
      .get();

    const games = [];
    snapshot.forEach(document => {
      const data = document.data();

      const created = new Date(0);
      created.setSeconds(data.created.seconds);

      const updated = new Date(0);
      updated.setSeconds(data.updated.seconds);

      games.push(new Game({ ...data, created, updated, id: document.id }));
    });
    return games;
  },

  async createGame({ name, description }) {
    const game = new Game({ name, description });
    const object = { ...game };
    try {
      await firestore()
        .collection(GAMES_COLLECTION)
        .add(object);
      Snackbar.open({ message: 'New game created', type: 'is-success' });
    } catch (error) {
      Snackbar.open({ message: 'Something went wrong', type: 'is-danger' });
    }
  },
};
