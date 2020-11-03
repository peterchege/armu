<template>
  <v-data-table
    :headers="headers"
    :items="fleet"
    sort-by="calories"
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
                  <h3 class=" font-weight-light"> MY INVOICE</h3>
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
        <v-dialog v-model="dialog" max-width="700px">
                    
          <v-card >
            <v-card-title class="primary darken-2 white--text justify-center mb-5 ">
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field  v-model="editedItem.id" label="id"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field disabled v-model="editedItem.make" label=" vehicle Make"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field disabled v-model="editedItem.model" label="Vehicle Model"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field disabled v-model="editedItem.yom" label="Year Of Manufacture"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field disabled v-model="editedItem.enginecc" label="Engine cc"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field disabled
                      v-model="editedItem.regno" 
                      label="Registration No.">
                    </v-text-field>
                  </v-col>
                   
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn rounded
                class="ma-5 pa-4" 
                color="red" 
                dark  
                @click="close">
                Cancel
                <v-icon dark right>
                    mdi-cancel
                    </v-icon>
                </v-btn>
              <v-btn rounded
                class="ma-5  pa-4" 
                color="secondary" 
                dark  
                @click="save">
                Save
                 <v-icon dark right>
                  mdi-checkbox-marked-circle
                  </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </template>
    <template v-slot:[`item.actions`]="{ item }">

      <app-invoice-form/>


      <v-icon
        small
        color="secondary"
        @click="deleteItem(item)"
      >
        mdi-download
      </v-icon>
    </template>
   
  </v-data-table>
</template>

<script>
import  { mapState,mapGetters } from 'vuex'
  export default {
    components:{
      appInvoiceForm:() => import('@/components/dialog/InvoiceForm'),
    },
    data: () => ({
      dialog: false,
      search: '',
      headers: [
        {
          text: 'Invoice No.',
          align: 'start',
          sortable: true,
          value: 'id',
        },
        {
          text: 'Customer Name',
          align: 'start',
          sortable: true,
          value: 'make',
        },
        {
          text: 'Customer Reg No.',
          align: 'start',
          sortable: true,
          value: 'model',
        },
        { text: 'Vendor Reg No.', value: 'yom' },
         { text: 'Amount.', value: 'yom' },
        { text: 'Created', value: 'engine_cc' },
        // { text: 'Status', value: 'vendors.0.vendor_vehicle.vehicle_status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        id: '',
        make: '',
        model: '',
        yom: '',
        enginecc: '',
        regno:'',
        vehicleStatusId: '',
  
      },
      defaultItem: {
        id: '',
        make: '',
        model: '',
        yom: '',
        enginecc: '',
        vehicleStatusId: ''
      },
     
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Vehicle' : 'Edit Vehicle'
      },
      ...mapState(['fleet','loadingText']),
      ...mapGetters(['loadingTable'])
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    
    mounted() {
      this.$store.dispatch('fetchFleet')
    },
    created () {
      this.$store.state.loadingTable = true;
      this.$store.state.loadingText = "Loading... Please wait";
      
    },

    methods: {
          
      editItem (item) {
        this.editedIndex = this.fleet.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.fleet.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.fleet.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.fleet[this.editedIndex], this.editedItem)
        } else {
          this.fleet.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>