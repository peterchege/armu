<template>
    <v-app class="background-color">
        <v-container class="fill-height">

        
        <v-card
            class="mx-auto"
            max-width="600"
            elevation="2">
            
            <v-row class="mt-10">
                <v-img 
                src="@/assets/logo.png"
                max-width="200"
                max-height="200"
                class="mx-auto my-3">

                </v-img>

            </v-row>

            <v-row class="py-5 px-10 mb-10">
                <v-card-title>
                    Verification Success
                </v-card-title>
                <v-card-text>
                    Thank you for your support. We have sucessfully verified your email address.
                    You can now proceed.
                    <br> <br>
                    <v-card-action>
                    <span> You can now proceed. </span> 
                    <v-btn text 
                    color="primary"
                    @click="resetOTP">
                        Take me home
                    </v-btn>
                </v-card-action>
                </v-card-text>
                
            </v-row>
            
        </v-card>

        </v-container>
    </v-app>
</template>

<script>
export default {
    
    methods:{
        resetOTP(){
            const formData = {
                email: localStorage.getItem('email')
                };
            console.log(formData)
            this.$store.dispatch('newOTP', formData)
        }
    },
}
</script>

<style scoped>
     .background-color {
       background-color:#F8F9FB;
    }
</style>