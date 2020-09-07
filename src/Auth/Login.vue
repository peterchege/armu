<template>
    <v-app id="inspire" class="image">
        <v-container class="fill-height" max-width="600">
            <app-logo/>

            <v-content>
                <v-row align="center" justify="center" class="text-center">

                    <v-col
                        cols="12"
                        sm="8"
                        lg="5"
                        md="6">
                 
                        <v-card class="py-5 px-10" >
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
                                    v-model="name"
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

                                <router-link class="text-right" to="/forgotpassword" >
                                    <span class=" grey--text caption"  > Forgot password </span>
                                </router-link>

                            </form>
                                 <v-btn class="my-5 primary">Login</v-btn>
                                <p to="/register">Create Account</p>
                             
                        </v-card>

                    </v-col>
                    
                </v-row>
            </v-content>

            <v-row align="center" justify="end" >
                <v-col  sm="12" md="4" align="right" >
                    <v-img
                    src="@/assets/avatars/buyers.png"
                    max-width="250"
                    max-height="250"
                    class="">
                    </v-img>
                </v-col>
               
            </v-row>

        </v-container>
    </v-app>
</template>

<script>
export default {
    components:{
        appLogo: () => import('@/components/Header'),
        // appLoginForm :() => import('@/components/forms/LoginForm')
    },
    data(){
      return{
        email: '',
        password: '',
        show: false,
      }
    },
}
</script>

<style scoped>
    .image {
        background-image: url('../assets/background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .login-background {
        background-image: url('../assets/login-background.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
  
</style>