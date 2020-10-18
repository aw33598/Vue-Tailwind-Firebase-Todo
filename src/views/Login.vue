<template>
  <div class="max-w-xl px-4 sm:px-6 lg:px-16 mx-auto mt-16 md:mt-20 lg:mt-24">
    <Alert v-if="alert.showAlert" :type="alert.type" :message="alert.message"></Alert>
    <div class="flex items-center justify-center">
      <img class="h-12 w-12" src="../assets/vue.png" alt="Vue">
      <img class="h-12 w-12" src="../assets/firebase.png" alt="firebase">
    </div>
    <div>
      <p class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-800">Sign in to your account</p>
      <p class="font-light text-center mt-2">Or <router-link to="/register">make a new account</router-link></p>
    </div>
    <div>
      <form @submit.prevent="signInWithEmailAndPassword">
        <input required class="mt-8 w-full px-3 shadow-xs py-2 rounded-t-md text-sm focus:outline-none focus:border-blue-300 placeholder-gray-500 border-t border-l border-r  border-gray-300" type="email" name="email" placeholder="Email address" v-model="form.email">
        <input required class="w-full px-3 shadow-xs py-2 rounded-b-md text-sm focus:outline-none focus:border-blue-300 placeholder-gray-500 border border-gray-300" type="password" name="password" placeholder="Password" v-model="form.password">
        <input :disabled="signedIn" class="font-medium w-full bg-green-600 hover:bg-green-500 text-white text-sm px-3 py-2 mt-8 focus:shadow-outline focus:outline-none rounded-lg cursor-pointer" type="submit" :value="status">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Alert from '../components/Alert';

export default {
  name: 'Login',
  components: {
    Alert
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      status: 'Sign in',
      signedIn: false,
      alert: {
        showAlert: false,
        message: '',
        type: ''
      }
    }
  },
  methods: {
    ...mapActions(["signIn", "setLoadingState"]),
    signInWithEmailAndPassword() {
      this.signedIn = true;
      this.status = 'Signing in...'
      const credentials = {
        email: this.form.email,
        password: this.form.password
      }
      this.signIn(credentials)
        .then(response => {
          this.status = 'Redirecting...';
          this.alert.type = 'success';
          this.alert.message = response;
          this.alert.showAlert = true;
          this.setLoadingState(true);
          this.$router.push({ name: 'Home' });
        })
        .catch(error => {
          this.signedIn = false;
          this.status = 'Sign in'
          this.alert.type = 'error';
          this.alert.message = error;
          this.alert.showAlert = true;
          setTimeout(() => {
            this.alert.showAlert = false;
          }, 2000);
        });
    }
  }
}
</script>

<style scoped>
  a, .active {
    @apply font-medium text-green-600 hover:text-green-500 focus:outline-none;
  }

  .exact-active {
    @apply text-green-600 hover:text-green-500 focus:outline-none;
  }

  input[type="submit"]:disabled {
    @apply bg-gray-700 cursor-not-allowed;
  }
</style>