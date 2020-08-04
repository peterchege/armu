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
            <v-card class="mx-auto elevation-1" max-width="1000">   
                <v-row align="center" justify="center" class="text-center ma-auto">
                    <v-card-title
                    class="pt-5" 
                    color="primary"> 
                    Farmer Addition Details
                    </v-card-title>

                    <v-card-text class="text-start px-10 py-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Sunt tempora explicabo ducimus deleniti necessitatibus tempore 
                        maiores at maxime repellendus ullam cumque eos, sit quaerat. 
                        Rem deleniti reiciendis hic aliquid quidem.
                    </v-card-text>

                     <v-form
                     class="mb-10 mx-7" 
                     v-model="valid">
                        <v-container>
                            <v-row>
                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="bankname"
                                    label="Bank Name"
                                    required
                                    filled
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="bankaccount"
                                    label="Bank Account"
                                    required
                                    filled
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="bankbranch"
                                    label="Bank Branch"
                                    required
                                    filled
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="kra"
                                    :rules="emailRules"
                                    label="KRA Pin"
                                    required
                                    filled
                                ></v-text-field>
                                </v-col>

                               
                            </v-row>
                        </v-container>
                        <v-row>
                            
                            <v-col
                                cols="12"
                                md="4"
                                 class="ma-auto"
                                >
                                <v-btn block large 
                                    color="primary" 
                                    @click="onSubmit"
                                    :loading="loading"
                                    to="/dashboard">
                                    Submit
                                </v-btn>
                            </v-col>
                                
                            <v-col
                                cols="12"
                                md="4"
                                >
                                <v-btn text
                                    color="primary" 
                                    @click="onSubmit"
                                    :loading="loading"
                                    to="/dashboard">
                                    Skip for now
                                </v-btn>
                            </v-col>
                        </v-row>    
                    </v-form>
                   
                </v-row>
            </v-card>           
       
        </v-container>
    </v-app>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
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