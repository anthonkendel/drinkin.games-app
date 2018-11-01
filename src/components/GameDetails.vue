<template>
  <div>Game details for {{ id }}</div>
</template>

<script>
export default {
  name: 'GameDetails',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
};
</script>
