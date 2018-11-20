<template>
  <div>
    <b-table
      :data="games"
      striped
      hoverable
    >
      <template slot-scope="{ row }">
        <b-table-column
          field="name"
          label="Name"
          sortable
        >
          {{ row.name }}
        </b-table-column>
        <b-table-column
          field="created"
          label="Created"
          sortable
        >
          {{ new Date(row.created) | dateInWords }} ago
        </b-table-column>
        <b-table-column
          field="rating"
          label="Rating"
          sortable
          numeric
        >
          {{ row.rating | average }}
        </b-table-column>
      </template>

      <template slot="empty">
        <div class="has-text-centered">
          <h2 class="title is-4">There does not seem to be anything here right now.</h2>
          <h3 class="subtitle">Maybe it is loading?</h3>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { dateInWords, getAverage } from '../common/filters';

export default {
  name: 'Games',
  filters: {
    average: getAverage,
    dateInWords: dateInWords,
  },
  computed: {
    ...mapState({
      games: 'games',
    }),
  },
  created() {
    this.loadGames();
  },
  methods: {
    ...mapActions({ loadGames: 'loadGames' }),
    routeToDetails(id) {
      this.$router.push({ name: 'Details', params: { id } });
    },
  },
};
</script>

<style scoped>
</style>
