<template>
  <section>
    <h1>Subredddits</h1>
    <pre> {{ subreddits }}</pre>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.init();
  },
  name: 'Subreddits',
  computed: mapState('subreddits', ['subreddits']),
  methods: mapActions('subreddits', ['init']),
};
</script>

<style scoped>

</style>
