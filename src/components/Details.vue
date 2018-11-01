<template>
  <div>Details for {{ id }}</div>
</template>

<script>
export default {
  name: 'Details',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
};
</script>
