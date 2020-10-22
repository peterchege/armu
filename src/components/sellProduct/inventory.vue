<template>
  <v-data-table
    :headers="headers"
    :items="crop"
    sort-by="Date"
    class="elevation-1"
    :search="search"
    :loading ="loadingTable"
    :loading-text="loadingText"
  >
  

    <template v-slot:top>
      <v-row >
      <v-col cols="auto" class="mx-5">
        <v-sheet
        class="v-sheet--offset"
        elevation="5"
        >
            <v-toolbar  color="primary" class="round-coners" dark>
                <v-icon large>mdi-seed</v-icon>
            </v-toolbar>
            
        </v-sheet>
        </v-col>
        <v-col >
            <v-card-title color="primary" >
               <h3 class=" font-weight-light"> My Crop</h3>
               <v-col class="d-flex align-end flex-column" >
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details>
                </v-text-field>
        </v-col>
            </v-card-title>
        </v-col>
    </v-row>
      
    </template>

    <!-- <template v-slot:item.status="{ value }">
      <v-chip  
          :color="getColor(value)" dark>
          {{ value }}
          </v-chip>
    </template> -->
    
  </v-data-table>
</template>

<script>
import  { mapState, mapGetters } from 'vuex'
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
          text: 'Customer Name',
          align: 'start',
          sortable: true,
          value: '',
        },
        {
          text: 'make',
          align: 'start',
          sortable: true,
          value: '',
        },
        {
          text: 'Model',
          align: 'start',
          sortable: true,
          value: '',
        },
        { text: 'Reg No.', value: '' },
        { text: 'Date', value: '' },
        { text: 'Phone No.', value: '' },
        { text: 'Status', value: '' },
      ],
 
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      ...mapState(['bookedVehicle','loadingTable']),
      ...mapGetters(['loadingText'])
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    
    mounted() {
    //   this.$store.dispatch('fetchBookedVehicles')
      
    },
    created () {
      this.initialize(),
      this.$store.state.loadingTable = true;
      this.$store.state.loadingText = "Loading... Please wait";
      
    },

    methods: {
      
      initialize() {
        this.desserts = this.$store.state.carRequest
      },


    },
  }
</script>