<template>
    <v-app id="inspire" class="image">
        <v-container class="fill-height" max-width="600">
            <app-logo/>
            
        </v-container>
    </v-app>
</template>

<script>
import HeaderLogo from '@/components/Header'
export default {
    components:{
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
        background-image: url('../../assets/login-background.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
  
</style>