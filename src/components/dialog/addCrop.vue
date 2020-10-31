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
      
      width="800px"
    >
      <v-card >
        <v-form ref="form" v-model="valid">
        <v-card-title 
          class="primary darken-2 white--text justify-center">
          ADD A NEW PRODUCT
        </v-card-title>
         
          <v-container>
            <app-product/>
          </v-container>
       
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