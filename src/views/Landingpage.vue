<template>
    <v-app id="inspire" class="image">
        <v-container class="fill-height" fluid>
            <v-card class="mx-auto pa-5 elevation-1" width="900">
                <v-row align="center" justify="center" >
                    <v-col  cols="12" sm="12" md="6">
                        <v-card-title >
                            <span class="title"> Dont have an account</span>
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
                            color="accent" 
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