<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'home',
  methods: mapActions('auth', ['login', 'logout']),
};
</script>
