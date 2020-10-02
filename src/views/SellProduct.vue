<template>
<v-app>
   <app-side-bar/>
    <app-header-menu/>
    <v-content>
      <v-container class="mx-auto">
        <v-stepper class="accent mx-5 mt-10" >
          <v-stepper-header>
            <v-stepper-step
              complete
              editable
              step="1"
            >
              Product Definition & Specs
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              complete
              step="2"
            >
              Pickup Location
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              step="3"
              editable
            >
              Personal Information
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step
              step="4"
              editable
            >
              Summary
            </v-stepper-step>
          </v-stepper-header>
        </v-stepper>
      </v-container>
        
   </v-content>
    

   
    
</v-app>
  
</template>

<script>

  export default {
    components:{
     appSideBar:() => import ('@/components/navigation/NavigationDrawer'),
     appHeaderMenu:() => import ('@/components/navigation/HeaderMenu')
     

    },
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
    }),
    
  }
</script>