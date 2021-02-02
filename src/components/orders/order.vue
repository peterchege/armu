<template>
    <v-card >
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
  
        </v-row>

        <v-row class="mx-auto" v-for=" product in bookedProducts" :key="product.id" >
            <v-col class="mx-auto" cols="12" md="6">
                <v-avatar class="ml-10 my-5" size="200">
                    <img
                        alt="user"
                        src="https://www.sustainability-times.com/wp-content/uploads/thumbs/maize-prefered-37pblkn7qln96uhmqhh2io.jpg"
                     >
                     
                </v-avatar>
                 <h3 class="pl-5 pt-8 header"> Product: {{product.productGrade.product.name}}</h3>

            </v-col>
            <v-col  cols="12" md="6">
                <v-divider></v-divider>
                <v-row class="pt-3">
                    <v-col  cols="12" md="6">
                        <p>Order No:</p>
                    </v-col>
                    <v-col cols="12" md="6">
                       <p>{{product.id}}</p> 
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="pt-3">
                    <v-col cols="12" md="6">
                        <p>Quality</p>
                    </v-col>
                    <v-col cols="12" md="6">
                       <p>{{product.productGrade.grade.name}}</p> 
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="pt-3">
                    <v-col cols="12" md="6">
                        <p>No of Bags</p>
                    </v-col>
                    <v-col cols="12" md="6">
                       <p> {{product.numberOfBags}}</p> 
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="pt-3">
                    <v-col cols="12" md="6">
                        <p>pickup Location</p>
                    </v-col>
                    <v-col cols="12" md="6">
                       <p> {{product.pickUpLocation}}</p> 
                    </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row class="pt-3">
                    <v-col cols="12" md="6">
                        <p class="title">Total Amount</p>
                    </v-col>
                    <v-col cols="12" md="6">
                       <p> Kshs {{product.pricePerBag}}</p> 
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
      ...mapGetters(['bookedProducts'])
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