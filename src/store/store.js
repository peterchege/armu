import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        idToken: localStorage.getItem('token') || null,
        username: localStorage.getItem('username') || '',
        email: localStorage.getItem('email') || '',
        roles: localStorage.getItem('role') || '',
        snackbar: {},
        loading: false,
        itemId: '',
        loadingTable: false,
        users: [],


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

    },
    actions: {

        Register({ commit }, formData) {
            axios.post('/api/auth/signup ', formData)
                .then(res => {
                    console.log(res)
                    commit('REGISTER_RES', {
                        snackbar: {
                            showing: true,
                            text: `You have successfully added , ${formData.fname} as ${formData.service}`,
                            color: "success"
                        }
                    })
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
                    commit('AUTH_FAILED', {
                        loading: false,
                        snackbar: {
                            showing: true,
                            text: `${ err.response.data.error }`,
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

        fetchUser({ commit, state }) {
            if (!state.idToken) {
                return
            }
            axios.get('/admin/users')
                .then(res => {
                    const users = res.data.users
                    console.log(users)
                    commit('STORE_USERS', {
                        users,
                        loadingTable: false
                    })

                })
                .catch(err => console.log(err))
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