<template>
  <div class="game-container">
    <template v-if="game.id">
      <div class="columns">
        <div class="column">
          <h2 class="title">
            {{ game.name }}
          </h2>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field
            grouped
            group-multiline
          >
            <div class="control">
              <b-taglist attached>
                <b-tag type="is-dark">Created</b-tag>
                <b-tag type="is-success">{{ game.created | dateInWords }} ago</b-tag>
              </b-taglist>
            </div>

            <div class="control">
              <b-taglist attached>
                <b-tag type="is-dark">Rating</b-tag>
                <b-tag type="is-info">{{ game.rating | average }}</b-tag>
              </b-taglist>
            </div>
          </b-field>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <p class="description">{{ game.description }}</p>
        </div>
      </div>
    </template>
    <template v-else>
      <b-loading
        :is-full-page="false"
        class="b-loading"
        active
      />
    </template>
  </div>
</template>

<script>
import { Game } from '@/services/gameService';
import { dateInWords, getAverage } from '../common/filters';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Game',
  filters: {
    average: getAverage,
    dateInWords: dateInWords,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapState({
      game: 'game',
    }),
  },
  async created() {
    this.setGame(new Game());
    this.loadGame(this.id);
  },
  methods: {
    ...mapActions({
      setGame: 'setGame',
      loadGame: 'loadGame',
    }),
  },
};
</script>

<style lang="scss" scoped>
.game-container {
  position: relative;
  .b-loading {
    height: 10em;
    width: 10em;
    margin: 20vh auto 20vh auto;
  }
}

p.description {
  white-space: pre-wrap;
}
</style>
