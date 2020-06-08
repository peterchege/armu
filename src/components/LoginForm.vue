<template>
<v-card class="pa-4">
  <ValidationObserver ref="observer" v-slot="{  }">
      <v-title>
          <h2>LOGIN</h2>
      </v-title>
    <form class="ma-7">
        <ValidationProvider v-slot="{  }" rules="required" name="radioButton">
        <v-row>
        <span> I am :</span>
       <v-spacer></v-spacer>
        <app-option/>
        </v-row>
      </ValidationProvider>
      
      <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="Email Address"
          required
        ></v-text-field>
      </ValidationProvider>
     
     <ValidationProvider v-slot="{ errors }" name="password" rules="required|password">
        <v-text-field
          v-model="password"
          :error-messages="errors"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </ValidationProvider>
      
    <v-btn block large 
        color="primary" 
        class="my-4"
        @click="submit">
        Login
    </v-btn>
    <v-spacer></v-spacer>

      <v-btn @click="clear">clear</v-btn>
    </form>
  </ValidationObserver>
</v-card>
</template>

<script>
  import RadioButton from '@/components/RadioButton'
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  extend('phone', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('password', {
    ...required,
    message: '{_field_} can not be empty',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
      appOption : RadioButton

    },
    data: () => ({
      email: '',
      password: '',
      farmer: "Farmer / Seller",
      Buyer: "Buyer"
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.email = ''
        this.password = ''
        this.$refs.observer.reset()
      },
    },
  }
</script>