<template>
    <v-card>
        <v-row >
          <v-col cols="auto" class="mx-5">
            <v-sheet
            class="v-sheet--offset"
            elevation="2"
            max-width="80"
            >
                <v-toolbar  color="primary" class="round-coners" dark>
                    <v-icon large>mdi-receipt</v-icon>
                </v-toolbar>
                
            </v-sheet>
            </v-col>
            <v-col >
                <v-card-title color="primary" >
                  <h3 class=" font-weight-bold"> Order No: #3242</h3>
                </v-card-title>
            </v-col>

            <v-col >
                <v-card-title color="primary" >
                  <h3 class="body-1"> status: sold</h3>
                </v-card-title>
            </v-col>
        </v-row>
        <v-row class="mx-auto">
            <v-col class="mx-auto" cols="12" md="6">
                <v-avatar class="ml-10 my-5" size="200">
                    <img
                        alt="user"
                        src="https://www.sustainability-times.com/wp-content/uploads/thumbs/maize-prefered-37pblkn7qln96uhmqhh2io.jpg"
                     >
                </v-avatar>
                <v-card-text >
                    <v-btn
                    class="ml-10 secondary"
                    >
                        Request Details
                    </v-btn>
                </v-card-text> 
            </v-col>
            <v-col  cols="12" md="6">
                <v-divider></v-divider>
                <v-row class="pt-3">
                    <v-col  cols="12" md="6">
                        <p>Product</p>
                    </v-col>
                    <v-col cols="12" md="6">
                       <p>maize</p> 
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="pt-3">
                    <v-col cols="12" md="6">
                        <p>Quality</p>
                    </v-col>
                    <v-col cols="12" md="6">
                       <p>Grade A</p> 
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="pt-3">
                    <v-col cols="12" md="6">
                        <p>Quantity</p>
                    </v-col>
                    <v-col cols="12" md="6">
                       <p> 200 Kg</p> 
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="pt-3">
                    <v-col cols="12" md="6">
                        <p class="title">Total Amount</p>
                    </v-col>
                    <v-col cols="12" md="6">
                       <p> Kshs 35,000</p> 
                    </v-col>
                </v-row>
                
            </v-col>
            
        </v-row>

    </v-card>
        
    
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    data: () => ({
      dialog: false,
      search: '',
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        {
          text: 'Product',
          align: 'start',
          sortable: true,
          value: 'productGrade.product.name',
        },
        {
          text: 'Grade',
          align: 'start',
          sortable: true,
          value: 'productGrade.grade.name',
        },
        {
          text: 'No. of Bags',
          align: 'start',
          sortable: true,
          value: 'numberOfBags',
        },
        {
          text: 'Price offer',
          align: 'start',
          sortable: true,
          value: 'pricePerBag',
        },
        { text: 'Created', value: 'createdAt' },
        { text: 'Location', value: 'pickUpLocation' },
        { text: 'Status', value: 'status' },
      ],
 
    }),

    computed: {
      ...mapState(['product','loading']),
      ...mapGetters(['availableProducts','loadingText'])
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    
    mounted() {
      this.$store.dispatch('getProduct')
      
    },
    created () {
      this.$store.state.loading = true;
      this.$store.state.loadingText = "Loading... Please wait";
      
    },

}
</script>