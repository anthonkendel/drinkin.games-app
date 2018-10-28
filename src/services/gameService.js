import { firestore } from '@/firebase/firebase';

const GAMES_COLLECTION = 'games';

class Game {
  constructor({ id, name, description, rating }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = rating;
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

  async createGame({ name, description, rating = [] }) {
    firestore.collection(GAMES_COLLECTION).add({
      name,
      description,
      rating,
    });
  },
};
