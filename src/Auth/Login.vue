<template>
    <v-app id="inspire" class="image">
        <v-container class="fill-height" max-width="600">
            <app-logo/>

            <v-content class="mx-auto pb-4">
                <v-row align="center" justify="center" class="text-center">
                    <v-col class="login-background pa-10 ma-5" cols="11" sm="11" md="4" >
                        <span class="title ma-auto white--text py-12"> 
                            Dont have an account ?
                        </span>
                         <v-spacer></v-spacer>
                        <span class="caption white--text ">
                            Register here today to start trading
                        </span>
                        <v-content class="ma-7">
                        <v-spacer></v-spacer>
                            <v-btn block large 
                            color="secondary" 
                            @click="onLogin"
                            to="/register"
                            :loading="loading">
                            Register
                            </v-btn>
                         </v-content>
                    </v-col>
                    <v-col  cols="12" sm="12" md="5" >
                       <app-login-form/>
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
        appLoginForm :() => import('@/components/forms/LoginForm')
    }
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