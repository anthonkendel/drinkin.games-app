import { firestore } from 'firebase';
import { Snackbar } from 'buefy/dist/components/snackbar';

const GAMES_COLLECTION = 'games';

export class Game {
  constructor({
    id = '',
    name = '',
    description = '',
    rating = [],
    createdBy = '',
    created = new Date(),
    updated = new Date(),
  } = {}) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.createdBy = createdBy;
    this.created = created;
    this.updated = updated;
  }
}

function gameDocumentToGame(document) {
  const data = document.data();

  const created = new Date(0);
  created.setSeconds(data.created.seconds);

  const updated = new Date(0);
  updated.setSeconds(data.updated.seconds);

  return new Game({
    ...data,
    created,
    updated,
    id: document.id,
  });
}

export const gameService = {
  async getGames() {
    const snapshot = await firestore()
      .collection(GAMES_COLLECTION)
      .get();

    const games = [];
    snapshot.forEach(document => {
      const game = gameDocumentToGame(document);
      games.push(game);
    });
    return games;
  },

  async getGame(id) {
    const document = await firestore()
      .collection(GAMES_COLLECTION)
      .doc(id)
      .get();
    const game = gameDocumentToGame(document);
    return game;
  },

  async rateGame(id, rating) {
    try {
      const game = await this.getGame(id);
      const currentRating = game.rating;
      const newRating = [...currentRating, Number(rating)];
      await firestore()
        .collection(GAMES_COLLECTION)
        .doc(id)
        .update({ rating: newRating });
      Snackbar.open({
        message: `${game.name} rated`,
        type: 'is-success',
      });
    } catch (error) {
      console.log('Error:', error);
      Snackbar.open({
        message: 'Something went wrong',
        type: 'is-danger',
      });
    }
  },

  async deleteGame(id) {
    try {
      const game = await this.getGame(id);
      await firestore()
        .collection(GAMES_COLLECTION)
        .doc(id)
        .delete();
      Snackbar.open({
        message: `${game.name} game deleted`,
        type: 'is-success',
      });
    } catch (error) {
      Snackbar.open({
        message: 'Something went wrong',
        type: 'is-danger',
      });
    }
  },

  async createGame({ name, description, createdBy }) {
    const game = new Game({
      name,
      description,
      createdBy,
    });
    const object = {
      ...game,
    };
    try {
      await firestore()
        .collection(GAMES_COLLECTION)
        .add(object);
      Snackbar.open({
        message: `${name} game created`,
        type: 'is-success',
      });
    } catch (error) {
      Snackbar.open({
        message: 'Something went wrong',
        type: 'is-danger',
      });
    }
  },
};
