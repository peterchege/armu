<template>
<v-card class="pa-4">
  <ValidationObserver ref="observer" v-slot="{  }">
      <v-title>
          <h2>REGISTER</h2>
      </v-title>
    <form class="ma-7">
        <ValidationProvider v-slot="{ errors,  }" rules="required" name="farmerCheckbox">
        <v-row>
        <span> I am :</span>
        <spacer></spacer>
        <v-checkbox
          v-model="farmerCheckbox"
          :error-messages="errors"
          value="1"
          :label="farmer"
          type="checkbox"
          required
        ></v-checkbox>
        </v-row>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="firstname" rules="required|max:10">
        <v-text-field
          v-model="firstname"
          :counter="10"
          :error-messages="errors"
          label="First Name"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="lastname" rules="required|max:10">
        <v-text-field
          v-model="lastname"
          :counter="10"
          :error-messages="errors"
          label="Last Name"
          required
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="Email Address"
          required
        ></v-text-field>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" name="phone" rules="required|number">
        <v-text-field
          v-model="phone"
          :error-messages="errors"
          label="Mobile No."
          type="number"
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

      <v-btn class="mr-4" @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </ValidationObserver>
</v-card>
</template>

<script>
  import { required, email, max, } from 'vee-validate/dist/rules'
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
    message: 'phone must be valid',
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
      select: null,
      checkbox: null,
      terms: "I have read all the terms and conditions",
      farmer: "Farmer / Seller",
      Buyer: "Buyer"
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.firstname = ''
        this.lastname
        this.email = ''
        this.phone = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>