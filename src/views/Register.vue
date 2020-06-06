<template>
    <v-app id="inspire" class="image">
        <v-container class="fill-height" fluid>

        
        <v-row align="center" justify="center" class="text-center">
                <v-col  sm="12" md="4" align="center" >
                    <v-img
                    src="../assets/logo.png"
                    max-width="150"
                    max-height="150"
                    class="my-5">
                    </v-img>
                </v-col>
                
            </v-row>
            <v-card class="mx-auto elevation-0" width="900" >   
                <v-row align="center" justify="center" class="text-center">
                    
                    <v-col  cols="12" sm="12" md="6" >
                       
                    </v-col>
                    <v-col class="login-background pa-10 " cols="12" sm="12" md="6">
                         <v-card-title>
                            <span class="title ma-auto white--text py-5"> Already have an account</span>
                        </v-card-title>
                        <v-card-text class="caption white--text">
                            Login to your dashboard to start <br>your transactions
                        </v-card-text>
                        <v-card-actions class="ma-7">
                        <v-spacer></v-spacer>
                            <v-btn block large 
                            color="secondary" 
                            @click="onLogin"
                            :loading="loading">
                            Login
                            </v-btn>
                         </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>           
        <v-row align="center" justify="center" >
                <v-col  sm="12" md="4" align="right" >
                    <v-img
                    src="../assets/avatars/famer-woman.png"
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