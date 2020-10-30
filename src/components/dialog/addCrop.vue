<template>
    <v-app>
        <v-btn
      bottom
      class="secondary"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      persistent
      width="800px"
    >
      <v-card >
        <v-form ref="form" v-model="valid">
        <v-card-title 
          class="primary darken-2 white--text justify-center">
          ADD A NEW PRODUCT
        </v-card-title>
         
        <!-- <v-container>
          
          <v-row class="mx-2">
            
              <v-col cols="6">
                <v-text-field
                  prepend-icon="mdi-account"
                  label="Full Names"
                  v-model="full_names"
                  :rules="[required('Full Names')]"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  prepend-icon="mdi-account-box-multiple"
                  label="Policy No."
                  v-model="policy_no"
                  :rules="[required('Policy No.')]"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
              <v-text-field
                type="tel"
                prepend-icon="mdi-phone"
                label="Phone No."
                v-model="phone"
                :rules="[required('Extension No.'), numberFormat()]"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-mail"
                label="Email"
                v-model="email"
                :rules="[required('Email')]"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-box"
                label="National ID "
                v-model="national_id"
                :rules="[required('National ID')]"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-box"
                label="KRA PIN "
                v-model="kra_pin"
                :rules="[required('KRA PIN')]"
              ></v-text-field>
            </v-col>

              <v-col cols="6">
                <v-text-field
                  prepend-icon="mdi-car-side"
                  label="Vehicle Make"
                  v-model="vehicle_make"
                  :rules="[required('Vehicle Make')]"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  prepend-icon="mdi-car-sports"
                  label="Vehicle Model"
                  v-model="vehicle_model"
                  :rules="[required('Vehicle Model')]"
                ></v-text-field>
              </v-col>

            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-car"
                label="Registration No."
                v-model="reg_no"
                :rules="[required('Registration No.')]"
              ></v-text-field>
            </v-col>
            
            <v-col cols="6">
              <v-text-field
                type="tel"
                prepend-icon="mdi-calendar"
                label="Year of Manufacture"
                v-model="yom"
                :rules="[required('Year of Manufacture')]"
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                type="tel"
                prepend-icon="mdi-invert-colors"
                label="Vehicle Color"
                v-model="vehicle_color"
                :rules="[required('vehicle_color')]"
              ></v-text-field>
            </v-col>
          </v-row>

          <h2 class="title pl-4 py-5">Damaged Vehicle Photos</h2>

          <v-divider></v-divider>

          <p class="pl-4 pt-4 caption">
            Attach and submit the photos of the damaged vehicle to show where necessarilly
            repairs should be done.
          </p>

        </v-container> -->

          <v-container>
            <app-product/>
          </v-container>
        <v-card-actions>
          
       
        </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    
    </v-app>
</template>

<script>
import  { mapState } from 'vuex'
import validation from '@/utils/Validations'
export default {
   components:{
     appProduct:()=> import('@/components/sellProduct/product')
     

    },
    data: () => ({
      valid :false,
      full_names: '',
      vehicle_make: '',
      reg_no:'',
      date:'',
      assignedRole:'',
      email:'',
      phone:'',
      vehicle_color:'',
      dialog: false,
      dialogInvite: false,
      ...validation
    }),

    computed: {
     
      ...mapState(['loading']),
    },
    
    methods:{
      inviteUser(){        
         this.dialogInvite= true;
         this.$store.state.loading= true;

        const inviteData = {
          fname: this.firstname,
          lname: this.lastname,
          email: this.email,
          department: this.department,
          role: this.assignedRole,
          extension: this.extension,
        }
        console.log(inviteData)
        this.$store.dispatch('inviteUser', inviteData)
        this.$refs.form.reset()
      },

      userCancel(){
        this.dialog = false;
        this.$refs.form.reset()
      },

      clear(){
        this.$refs.form.reset()
      }
    }
}
</script>