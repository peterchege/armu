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
            <v-row class="mx-10">
              <form action="">
                
              </form>
                <v-col cols="12" md="6">
                    <v-select
                      :items="items"
                      label="Grade"
                      v-model="grade"
                    ></v-select>
                </v-col>

                 <v-col cols="12" md="6">
                    <v-text-field
                        type="number"
                        v-model="noOfBags"
                        :rules="nameRules"
                        label="No Of Bags"
                        required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                        type="number"
                        v-model="pricePerBag"
                        :rules="nameRules"
                        label="Price Per Bag (Kshs)"
                        required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                        v-model="farmLocation"
                        :rules="nameRules"
                        label="Farm Location"
                        required
                        
                    ></v-text-field>
                  </v-col>

                   <v-col cols="12" md="12">
                    <v-text-field
                        v-model="farmLocation"
                        :rules="nameRules"
                        label="Pick Up Location"
                        required
                        
                    ></v-text-field>
                  </v-col>
                
                <v-col cols="12" md="12">
                    <v-textarea
                        filled
                        v-model="description"
                        label="Description / characteristic"
                        auto-grow
                        ></v-textarea>
                </v-col>

                <v-col cols="12" md="12">
                  <h2 class="pb-4" color="primary">Total Amount: Kshs {{ totalAmount }}</h2>
                </v-col>

                 <v-btn 
                    large
                    block
                    class="mt-2 mb-7 secondary">
                  ADD PRODUCT
                </v-btn>
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
        grade:'',
        noOfBags:'',
        pricePerBag:'',
        farmLocation:'',
        description:'',
        items: ['A', 'B'],
      }
    },
    computed:{
       totalAmount (){ 
         return this.noOfBags * this.pricePerBag
         }
    },
    mounted(){
      this.$store.dispatch('getFarm')

    },

  }
</script>