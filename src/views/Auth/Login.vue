<template lang="">
  <div>
    <b-container class="main d-flex align-items-center justify-content-center">
      <div class="col-6">
        <b-form @submit.stop.prevent="onSubmit">
          <b-form-group id="example-input-group-1" label="Email" label-for="example-input-1">
            <b-form-input
              id="example-input-1"
              type="email"
              name="example-input-1"
              v-model="$v.form.email.$model"
              :state="validateState('email')"
              aria-describedby="input-1-live-feedback"
              autocomplete="off"
            ></b-form-input>
            <b-form-invalid-feedback id="input-1-live-feedback"
              >This is a required field and must be at least 5 characters.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group id="example-input-group-2" label="Password" label-for="example-input-2">
            <b-form-input
              id="example-input-2"
              type="password"
              name="example-input-2"
              v-model="$v.form.password.$model"
              :state="validateState('password')"
              aria-describedby="input-2-live-feedback"
              autocomplete="off"
            ></b-form-input>
            <b-form-invalid-feedback id="input-2-live-feedback"
              >This is a required field and must be at least 5 characters.</b-form-invalid-feedback
            >
          </b-form-group>
          <div class="mt-4">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button class="ml-2" @click="resetForm()">Cancel</b-button>
            <b-button class="ml-2" variant="info" @click="newAccount()"
              >Create new account</b-button
            >
          </div>
        </b-form>
      </div>
    </b-container>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        minLength: minLength(5),
      },
      password: {
        required,
        minLength: minLength(5),
      },
    },
  },
  methods: {
    validateState(email) {
      const { $dirty, $error } = this.$v.form[email];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        email: null,
        password: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    newAccount() {
      this.$router.push('/register');
    },
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      console.log('Form submitted!');
    },
  },
};
</script>
<style lang="" scoped>
/* .row {
  width: 50%;
} */
</style>
