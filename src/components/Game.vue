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
          <div class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Created</p>
                <p class="title">{{ game.created | dateInWords }} ago</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Rating</p>
                <p class="title">{{ game.rating | average }}</p>
              </div>
            </div>
          </div>
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
import { dateInWords, getAverage } from '../common/filters';
import { mapState } from 'vuex';

export default {
  name: 'Game',
  filters: {
    average: getAverage,
    dateInWords: dateInWords,
  },
  computed: {
    ...mapState({
      game: 'game',
      currentUser: 'currentUser',
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
