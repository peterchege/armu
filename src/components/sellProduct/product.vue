<template>
  <v-card>
    <v-tabs
      v-model="tab"
      centered      
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        maize
        <v-icon>mdi-maize</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Sorghum
        <v-icon>mdi-</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        Beans
        <v-icon>mdi-</v-icon>
      </v-tab>
      <v-tab href="#tab-4">
        Beans
        <v-icon>mdi-</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items class="mt-5" v-model="tab">
      <v-tab-item
        v-for="i in 4"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
            <v-card-title class="pl-5 ">Product Specification</v-card-title>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>