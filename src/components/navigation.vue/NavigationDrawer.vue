<template>
      <v-navigation-drawer
          v-model="navDialog"
          app
          dark
          class="primary darken-2">
    
      <v-list shaped >
      <v-subheader class="header py-10 text-center">APA INSURANCE</v-subheader>
      <v-divider/>
      <v-list-item-group color="secondary" class="my-5">
        <v-list-item
          v-for="(item, i) in items"
          :key="i" 
          :to="item.link"
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
        { icon: 'mdi-view-dashboard', text: 'Dashboard', link:'/dashboard' },
        { icon: 'mdi-car', text: 'Fleet', link:'/fleet' },
        { icon: 'mdi-menu', text: 'Request', link:'/car-rental' },
        { icon: 'mdi-car-arrow-left', text: 'Delivered cars', link:'/delivered' },
        { icon: 'mdi-receipt', text: 'Invoices', link:'/invoice' },
        { icon: 'mdi-history', text: 'Trip History', link:'/trip' }
        
      ],
    }),
    computed:{
      ...mapState(['navDialog'])
    }

    

}
</script>

