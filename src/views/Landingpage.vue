<template>
    <v-app id="inspire" class="accent" >
        <v-container class="fill-height" fluid>

        
        <app-header/>
        <v-row align="center" justify="end" class="text-center">
            <v-col cols="12" md="4" >
                <v-card class="mx-auto  elevation-1 " width="400" >   
                        <v-card-title >
                            <h2 class="title ma-auto"> Dont have an account</h2>
                        </v-card-title>
                        <v-card-text class="caption">
                            Register with us today inorder to<br> start publishing your products 
                        </v-card-text>
                        
                         <v-card-actions class="ma-7 " >
                                <v-btn block large 
                                    color="secondary" 
                                    class="my-3 mb-7"                                  
                                    @click="onSubmit"
                                    :loading="loading"
                                    to="/user">
                                    Register
                                </v-btn>
                            
                      </v-card-actions>
                </v-card>  
            </v-col>

            <v-col cols="12" md="6">
                 <v-card class="py-2 px-10 mx-auto"  width="500">
                            <v-card-title>
                                <v-sheet
                                    class="v-sheet--offset"
                                    elevation="2"
                                    max-width="80"
                                    >
                                        <v-toolbar  color="primary" class="round-coners" dark>
                                            <v-icon large>mdi-account</v-icon>
                                        </v-toolbar>
                                </v-sheet> 
                            </v-card-title>
                            <form >
                                <v-text-field
                                    v-model="email"
                                    label="Email Address"
                                    prepend-icon="mdi-account"
                                    required
                                    >
                                </v-text-field>

                                <v-text-field
                                    v-model="password"
                                    label="Password"
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'"
                                    prepend-icon="mdi-lock"
                                    required
                                    >
                                </v-text-field>

                                <v-col cols="12" align="end">
                                    <router-link to="/forgotpassword" >
                                    <span class="grey--text caption " > Forgot password </span>
                                </router-link>
                                </v-col>
                                

                            </form>

                                 <v-btn
                                  block
                                  large
                                  @click="onLogin"
                                  class="my-7 px-5 primary"
                                  >Login
                                  </v-btn>
                               
                        </v-card>
            </v-col>
        </v-row>
            

        <v-row align="center" justify="center" class="text-center">
                <v-col  sm="12" md="4" align="center" >
                    <v-img
                    src="../assets/avatars/famer-woman.png"
                    max-width="150"
                    max-height="150"
                    class="my-0">
                    </v-img>
                </v-col>
                <v-col  sm="12" md="4" align="center" >
                    <v-img
                    src="../assets/avatars/buyer-man.png"
                    max-width="200"
                    max-height="200"
                    class="my-0">
                    </v-img>
                </v-col>
                <v-col  sm="12" md="4" align="center" >
                    <v-img
                    src="../assets/avatars/buyers.png"
                    max-width="150"
                    max-height="150"
                    class="my-0">
                    </v-img>
                </v-col>
            </v-row>
    
        </v-container>
    </v-app>
</template>
<script>

export default {
    components:{
        appHeader:() => import ('@/components/Header'),
    },
    
    data(){
      return{
        email: '',
        password: '',
        show: false,
      }
    },
    methods:{
        onLogin(){
            const formData ={
                email : this.email,
                password: this.password
            }
            console.log(formData)
            this.$store.dispatch('login', formData)
        }
    }
}
</script>

