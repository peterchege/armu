import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        idToken: localStorage.getItem('token') || '',
        username: localStorage.getItem('username') || '',
        email: localStorage.getItem('email') || '',
        roles: localStorage.getItem('role') || '',
        snackbar: {},
        loading: false,
        navDialog: true,
        itemId: '',
        loadingTable: false,
        users: [],
        myFarm: ''


    },
    mutations: {
        AUTH_USER(state, userData) {
            state.idToken = userData.token;
            state.username = userData.username;
            state.email = userData.email;
            state.snackbar = userData.snackbar;
            state.loading = userData.loading;
        },

        AUTH_FAILED(state, userData) {
            state.snackbar = userData.snackbar;
            state.loading = userData.loading;
        },
        REGISTER_RES(state, payload) {
            state.snackbar = payload.snackbar;
        },
        RESET_PASS_RES(state, payload) {
            state.message = payload.message
        },
        CREATE_PASS_RES(state, payload) {
            state.message = payload.message
        },
        CREATE_PASS_URL(state, payload) {
            state.itemId = payload
        },
        CLEAR_AUTH_DATA(state) {
            state.idToken = null;
            state.email = '';
            state.username = '';
            state.roles = '';
        },
        STORE_USERS(state, payload) {
            state.users = payload.users;
            state.loadingTable = payload.loadingTable;
        },
        AUTO_LOGIN(state, payload) {
            state.idToken = payload.token;
        },
        RESET_OTP(state, payload) {
            state.snackbar = payload.snackbar;
        },
        GET_FARMS(state, payload) {
            state.myFarm = payload.myFarm;
            state.snackbar = payload.snackbar;
            state.loading = payload.loading;
        }

    },
    actions: {

        registerFarmer({ commit }, formData) {
            axios.post('/auth/signup', formData)
                .then(res => {
                    console.log(res)
                    commit('REGISTER_RES', {
                        snackbar: {
                            showing: true,
                            text: `${ res.data.message }`,
                            color: "success"
                        }
                    })
                    router.replace('/verification')
                })
                .catch(err => {
                    console.log(err)
                    commit('REGISTER_RES', {
                        snackbar: {
                            showing: true,
                            text: `${ err.response.data.message }`,
                            color: "error"
                        }
                    })
                })
        },

        registerBuyer({ commit }, formData) {
            axios.post('/auth/signup', formData)
                .then(res => {
                    console.log(res)
                    commit('REGISTER_RES', {
                        snackbar: {
                            showing: true,
                            text: `${ res.data.message }`,
                            color: "success"
                        }
                    })
                    router.replace('/verification')
                })
                .catch(err => {
                    console.log(err)
                    commit('REGISTER_RES', {
                        snackbar: {
                            showing: true,
                            text: `${ err.response.data.message }`,
                            color: "error"
                        }
                    })
                })
        },

        login({ commit }, formData) {
            axios.post('/auth/signin', formData)
                .then(res => {
                    console.log(res)
                    localStorage.setItem('token', res.data.accessToken)
                    localStorage.setItem('username', res.data.name)
                    localStorage.setItem('role', res.data.roles[0])
                    localStorage.setItem('email', formData.email)
                    commit('AUTH_USER', {
                        token: res.data.accessToken,
                        username: res.data.name,
                        email: formData.email,
                        loading: false,
                        snackbar: {
                            showing: true,
                            text: "Login was successfully",
                            color: "success"
                        }


                    })
                    router.replace('/dashboard')
                })
                .catch(err => {
                    localStorage.setItem('email', formData.email)
                    if (err.response.data.message === "Please verify account.") {
                        router.replace('/verification');
                    }
                    commit('AUTH_FAILED', {
                        loading: false,
                        snackbar: {
                            showing: true,
                            text: `${ err.response.data.message }`,
                            color: "error"
                        }


                    })
                    console.log(err)


                })
        },
        tryAutoLogin({ commit }) {
            const token = localStorage.getItem('token')
            if (!token) {
                return router.replace('/')
            }
            commit('AUTO_LOGIN', { token })
            router.replace('/dashboard')
        },
        logout({ commit }) {
            commit('CLEAR_AUTH_DATA')
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('email')
            localStorage.removeItem('role')
            router.replace('/')
        },
        resetpassword({ commit }, resetData) {
            axios.post('/auth/password-reset/email', resetData)
                .then(res => {
                    console.log(res)
                    localStorage.setItem('token', res.data.accessToken)
                    localStorage.setItem('username', res.data.name)
                    localStorage.setItem('role', res.data.roles[0])
                    commit('RESET_PASS_RES', {
                        snackbar: {
                            showing: true,
                            text: "Login was successfully",
                            color: "success"
                        }
                    })
                    router.replace('/email')
                })
                .catch(err => {
                    console.log(err)
                })
        },
        createPassword({ commit, state }, formData) {

            axios.post('/auth/signup/' + state.itemId, formData)
                .then(res => {
                    console.log(res)
                    commit('CREATE_PASS_RES', {
                        message: res.data.message,
                    })
                    router.replace('/dashboard')
                })
                .catch(err => {
                    this.state.alertError = true
                    console.log(err)
                })
        },

        newOTP({ commit }, formData) {
            axios.post('/auth/resend-otp', formData)
                .then(res => {
                    console.log(res)
                    commit('RESET_OTP', {
                        snackbar: {
                            showing: true,
                            text: res.data.message,
                            color: "success"
                        }
                    })
                })
                .catch(err => {
                    commit('RESET_OTP', {
                        loading: false,
                        snackbar: {
                            showing: true,
                            text: `${ err.response.data.message }`,
                            color: "error"
                        }

                    })
                    console.log(err)
                })
        },

        getFarm({ commit }) {
            axios.get('/farmer/profile/farms/get')
                .then(res => {
                    console.log(res)
                    const myFarm = res.data
                    commit('GET_FARMS', myFarm)
                })
                .catch(err => {
                    commit('GET_FARMS', {
                        loading: false,
                        snackbar: {
                            showing: true,
                            text: `${ err.response.data.message }`,
                            color: "error"
                        }

                    })
                    console.log(err)
                })
        },



    },

    getters: {
        username(state) {
            return state.username
        },
        isAuthenticated(state) {
            return state.idToken !== null
        },
        alertError(state) {
            return state.alertError !== true
        },
        snackbackResponse(state) {
            return state.snackbackResponse
        },
        resetPasswordResponse(state) {
            return state.message
        }
    },

});