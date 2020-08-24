import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'
import store from './store/store'


// import AxiosPlugin from 'vue-axios-cors';

// Vue.use(AxiosPlugin);


Vue.config.productionTip = false

axios.defaults.baseURL = 'http://api.armulogistics.com:8080/'

const accessToken = localStorage.getItem('token')

axios.defaults.headers.common['x-access-token'] = accessToken;


new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')