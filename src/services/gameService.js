import { firestore } from '@/firebase/firebase';

const GAMES_COLLECTION = 'games';

class Game {
  constructor({ name, description, id = '' }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = [];
    this.created = new Date();
    this.updated = new Date();
  }
}

export default {
  async getGames() {
    const snapshot = await firestore.collection(GAMES_COLLECTION).get();
    const games = [];
    snapshot.forEach(document =>
      games.push(
        new Game({
          id: document.id,
          ...document.data(),
        })
      )
    );
    return games;
  },

  async createGame({ name, description }) {
    const game = new Game({ name, description });
    const object = { ...game };
    firestore.collection(GAMES_COLLECTION).add(object);
  },
};
