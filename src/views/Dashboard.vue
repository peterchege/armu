<template>
  <v-app id="inspire">
    <app-side-bar/>
    <app-header-menu/>

    <v-content class="accent">
      <v-container class="mx-3" align="center" justify="center" fill-height>
              
        
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