<template>
  <form>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Create new game</p>
      </header>
      <section class="modal-card-body">
        Modal card body
      </section>
      <footer class="modal-card-foot">
        <button
          type="button"
          class="button is-warning"
          @click="$parent.close()"
        >
          Cancel
        </button>
        <button class="button is-primary">Create</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: 'CreateNewGameModal',
};
</script>

<style scoped>
</style>
