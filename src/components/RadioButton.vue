<template>
  <v-container fluid>
    <v-radio-group v-model="row" row >
      <v-radio label="Farmer / seller" value="farmer"></v-radio>
      <v-radio label="Buyer" value="buyer"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        row: null,
      }
    },
  }
</script>