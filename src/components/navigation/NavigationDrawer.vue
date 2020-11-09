<template>
      <v-navigation-drawer
          v-model="navDialog"
          app
          dark
          class="dashContent darken-2">
    
      <v-list >
      <v-img src="@/assets/logo2.png" class="my-5 mx-auto" max-width="150" >

      </v-img>
      <v-divider/>
      <v-list-item-group color="secondary" class="my-5">
        <v-list-item
          v-for="(item, i) in items"
          :key="i" 
          :to="item.link"
          active-class="nav-active"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title small v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list-item-group>
    </v-list>

    </v-navigation-drawer>
    
</template>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-view-dashboard', text: 'Market Overview', link:'/dashboard' },
        { icon: 'mdi-cart', text: 'My orders', link:'/orders' },
        { icon: 'mdi-store', text: 'My Inventory', link:'/inventory' },
        { icon: 'mdi-receipt', text: 'Invoice', link:'/invoice' }
        
      ],
    }),
    computed:{
      ...mapState(['navDialog'])
    }

  
}
</script>

<style scoped>

.nav-active{
  background-color: #012247;
  border-left: #ffa500 8px solid;
}
</style>
