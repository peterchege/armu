<template>
    <v-app id="inspire" class="image">
        <v-container class="fill-height" fluid>

        
        <app-header/>

            <v-card class="mx-auto elevation-1" width="900">   
                <v-row align="center" justify="center" class="text-center">
                    
                    <v-col  cols="12" sm="12" md="6" >
                        <v-card-title >
                            <h2 class="title ma-auto"> Dont have an account</h2>
                        </v-card-title>
                        <v-card-text class="caption">
                            Register with us today inorder to<br> start publishing your products 
                        </v-card-text>
                        
                         <v-card-actions class="ma-7">
                        <v-spacer></v-spacer>
                            <v-btn block large 
                            color="primary" 
                            class="my-3"
                            @click="onSubmit"
                            :loading="loading"
                            to="/user">
                            Register
                            </v-btn>
                      </v-card-actions>

                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                         <v-card-title>
                            <span class="title ma-auto"> Already have an account</span>
                        </v-card-title>
                        <v-card-text class="caption">
                            Login to your dashboard to start <br>your transactions
                        </v-card-text>
                        <v-card-actions class="ma-7">
                        <v-spacer></v-spacer>
                            <v-btn block large 
                            color="secondary" 
                            @click="login"
                            :loading="loading"
                            to='/login'>
                            Login
                            </v-btn>
                         </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>           
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