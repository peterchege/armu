<template>
  <v-app>

<router-view/>      
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  .v-sheet--offset {
    top: -55px;
    position: relative;
  }

  .v-sheet--offset .round-coners {
    border-radius: 5px;
  }
</style>
