<template>
    <v-app id="inspire" class="image">
        <v-container  max-width="600">
            <app-logo/>

            <v-content class="mt-5">
                <v-row  justify="center" class="text-center">

                    <v-col
                        cols="12"
                        sm="8"
                        lg="5"
                        md="6">
                 
                        <v-card class="py-2 px-10" >
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

                                <router-link to="/forgotpassword" >
                                    <span class="grey--text caption " > Forgot password </span>
                                </router-link>

                            </form>
                                 <v-btn
                                  block
                                  large
                                  class="my-7 px-5 primary"
                                  >Login
                                  </v-btn>
                                <router-link to="/user" tag="v-btn">
                                    <v-btn text class="pb-2 grey--black"  > Create Account </v-btn>
                                </router-link>
                             
                        </v-card>

                    </v-col>
                    
                </v-row>
            </v-content>

            <div class="seller">
                    <v-img
                    src="@/assets/avatars/buyers.png"
                    max-width="250"
                    max-height="250"
                    class="">
                    </v-img>
               
            </div>

        </v-container>
    </v-app>
</template>

<script>
export default {
    components:{
        appLogo: () => import('@/components/Header'),
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
    .seller{
        position: absolute;
        right: 10%;
        bottom: 10%;
    }
</style>