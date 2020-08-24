<template>
<v-card class="pa-4">
  <ValidationObserver ref="observer" >
      <v-title>
          <h2>REGISTER</h2>
      </v-title>
    <form class="ma-7">
        <ValidationProvider rules="required" name="checkbox">
        <v-row>
       <v-spacer></v-spacer>




      <v-container fluid>
        <v-row>
          <span> I am : </span>
        </v-row>

        <v-radio-group v-model="selected" row >
          <v-radio 
              label="Farmer / seller" 
              value="farmer" 
              class="pa-5">
          </v-radio>
          <v-radio 
                label="Buyer" 
                value="buyer"
                class="pa-5 ">
          </v-radio>
        </v-radio-group>
      </v-container>

        </v-row>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="firstname" rules="required|max:10">
        <v-text-field
          v-model="firstname"
          :counter="10"
          :error-messages="errors"
          label="First Name"
          filled
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="lastname" rules="required|max:10">
        <v-text-field
          v-model="lastname"
          :counter="10"
          :error-messages="errors"
          label="Last Name"
          filled
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="Email Address"
          filled
          required
        ></v-text-field>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" name="phone" rules="required|phone">
        <v-text-field
          v-model="phone"
          :error-messages="errors"
          label="Mobile No."
          type="number"
          filled
          required
        ></v-text-field>
      </ValidationProvider>
     
     <ValidationProvider v-slot="{ errors }" name="password" rules="required|password">
        <v-text-field
          v-model="password"
          :error-messages="errors"
          label="Password"
          type="password"
          filled
          required
        ></v-text-field>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" name="password" rules="required|password">
        <v-text-field
          v-model="confirmPassword"
          :error-messages="errors"
          label="Confirm Password"
          type="password"
          filled
          required
        ></v-text-field>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors,  }" rules="required" name="checkbox">
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          :label="terms"
          type="checkbox"
          required
        ></v-checkbox>
      </ValidationProvider>
      
    <v-btn block large 
        color="primary" 
        class="my-7"
        @click="onSubmit">
        Register
    </v-btn>
    <v-spacer></v-spacer>

    </form>
  </ValidationObserver>
</v-card>
</template>

<script>
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

    },
    data: () => ({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      selected: '',
      confirmPassword: '',
      checkbox: [],
      terms: "I have read all the terms and conditions",
      
    }),

    methods: {
      onSubmit () {
        this.$refs.observer.validate()

        const formData = {
            first_name: this.firstname,
            last_name: this.lastname,
            mobile: this.phone,
            email: this.email,
            roles: this.selected,
            password: this.password
        }

        console.log(formData)
        this.$store.dispatch('Register', formData)
      },
      clear () {
        this.firstname = ''
        this.lastname = ''
        this.email = ''
        this.phone = ''
        this.password = ''
        this.confirmPassword = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>