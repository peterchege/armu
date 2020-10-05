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
        <v-card flat class="mx-auto px-7">
            <v-card-title class=" ">Product Specification</v-card-title>
            <v-card-text>{{ text }}</v-card-text>

            <v-row class="mx-10">
              <form action="">
                
              </form>
                <v-col cols="12" md="6">
                    <v-select
                      :items="items"
                      class="mt-3"
                      label="Grade"
                    ></v-select>
                </v-col>

                 <v-col cols="12" md="6">
                    <v-text-field
                        v-model="noOfBags"
                         class="mt-3"
                        :rules="nameRules"
                        label="No Of Bags"
                        required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                        v-model="pricePerBag"
                         class="mt-3"
                        :rules="nameRules"
                        label="Price Per Bag"
                        required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                        v-model="farmLocation"
                         class="mt-3"
                        :rules="nameRules"
                        label="Farm Location"
                        required
                    ></v-text-field>
                  </v-col>

                   <v-col cols="12" md="12">
                    <v-text-field
                        v-model="farmLocation"
                         class="mt-3"
                        :rules="nameRules"
                        label="Pick Up Location"
                        required
                    ></v-text-field>
                  </v-col>
                
                <v-col cols="12" md="12">
                    <v-textarea
                        class="mt-10 ml-5"
                        name="input1"
                        filled
                        label="Description / characteristic"
                        auto-grow
                        value=""
                        ></v-textarea>
                </v-col>
            </v-row>

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
        items: ['A', 'B'],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>