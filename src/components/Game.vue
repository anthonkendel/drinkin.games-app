<template>
  <div>Game details for {{ id }}</div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
};
</script>
