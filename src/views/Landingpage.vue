<template>
    <v-app id="inspire" class="image">
        <v-container class="fill-height" fluid>
            <v-card class="mx-auto  elevation-1" width="900">   
                <v-row align="center" justify="center" >
                    <v-col  sm="12" md="12" align="center" >
                    <v-img
                    src="../assets/logo.png"
                    max-width="200"
                    max-height="100">
                    </v-img>
                 </v-col>
                    <v-col  cols="12" sm="12" md="6" >
                        <v-card-title >
                            <h2 class="title"> Dont have an account</h2>
                        </v-card-title>
                        <v-card-text class="caption">
                            Register with us today inorder to<br> start publishing your products 
                        </v-card-text>
                        
                         <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn block large 
                            color="primary" 
                            class="my-3"
                            @click="onSubmit"
                            :loading="loading">
                            Register
                            </v-btn>
                      </v-card-actions>

                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                         <v-card-title>
                            <span class="title"> Already have an account</span>
                        </v-card-title>
                        <v-card-text class="caption">
                            Login to your dashboard to start <br>your transactions
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn block large 
                            color="secondary" 
                            class="my-3"
                            @click="onLogin"
                            :loading="loading">
                            Login
                            </v-btn>
                         </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
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
  
</style>