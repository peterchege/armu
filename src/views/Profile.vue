<template>
  <v-app id="inspire">
    <app-side-bar/>
    <app-header-menu/>

    <v-content class="accent">
      <v-container class="mt-10" align="center" justify="center" >
          <v-row class="mx-auto px-5 pt-5">           
            
            <h1 class=" grey--text display-1 pr-5"> MY Account </h1>
            <v-divider
            vertical
            ></v-divider>
            <p class="px-3 pt-3"> Edit Profile </p>
          </v-row>
        <v-row>
            <v-col cols="12" md="4">
                
            </v-col>
        </v-row>

      
      </v-container>
    </v-content>
    
    
  </v-app>
</template>

<script>

  export default {
    components:{
     appSideBar:() => import ('@/components/navigation/NavigationDrawer'),
     appHeaderMenu:() => import ('@/components/navigation/HeaderMenu'),

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