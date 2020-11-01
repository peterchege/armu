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
                <v-card class="mx-5">
                    <v-card-title class="mt-8">
                        <v-row>
                            <v-avatar class="mx-auto my-5" size="200">
                                <img
                                    alt="user"
                                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                                >
                                </v-avatar> 
                        </v-row>
                        
                        
                    </v-card-title>

                    <v-row class="">
                        <h2 class="title mx-auto my-3">PETER CHEGE</h2><br>
                    </v-row>
                    <v-row >
                        <p class=" caption mx-auto mb-10">peterchege442@gmail.com</p>
                    </v-row>
                            
                </v-card>
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