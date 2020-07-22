import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import axios from 'axios'

import AxiosPlugin from 'vue-axios-cors';

Vue.use(AxiosPlugin);


Vue.config.productionTip = false

axios.defaults.baseURL = 'http://api.armulogistics.com:8080/'

const accessToken = localStorage.getItem('token')

// const accessToken = store.state.idToken



axios.defaults.headers.common['x-access-token'] = accessToken;


new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')