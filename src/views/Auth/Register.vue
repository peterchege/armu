<template>
    <v-app id="inspire" class="image">
        <v-container class="fill-height" max-width="600">

            <app-logo/>
        
            <v-content class="mx-auto">   
                <v-row align="center" justify="center" class="text-center">
                    
                    <v-col  cols="12" sm="12" md="5" >
                       <app-register/>
                    </v-col>
                    <v-col class="login-background pa-10 ma-5 " cols="11" sm="10" md="4" >
                        <span class="title ma-auto white--text py-5"> 
                            Already have an account
                        </span>
                         <v-spacer></v-spacer>
                        <span class="caption white--text">
                            Login to your dashboard to start <br>your transactions
                        </span>
                        <v-content class="ma-7">
                        <v-spacer></v-spacer>
                            <v-btn block large 
                            color="secondary" 
                            @click="onLogin"
                            to="/login"
                            :loading="loading">
                            Login
                            </v-btn>
                         </v-content>
                    </v-col>
                </v-row>
            </v-content>           
        <v-row align="center" justify="end" >
                <v-col  sm="12" md="4" align="right" >
                    <v-img
                    src="@/assets/avatars/famer-woman.png"
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
import registerForm from '@/components/RegisterForm'
import HeaderLogo from '@/components/Header'
export default {
    components:{
        appRegister: registerForm,
        appLogo: HeaderLogo,
    }
}
</script>

<style scoped>
    .image {
        background-image: url('../../assets/background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .login-background {
        background-image: url('../../assets/register-background.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
    }
  
</style>