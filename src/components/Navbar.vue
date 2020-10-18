<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center flex-shrink-0 space-x-1">
          <img class="h-8 w-8" src="../assets/vue.png" alt="vue">
          <img class="h-8 w-8" src="../assets/firebase.png" alt="firebase">
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <div v-if="loggedInUser" class="space-x-4">
              <router-link to="/" exact>Dashboard</router-link>
              <router-link to="/about" exact>About</router-link>
              <button @click="SignOut" class="active">Sign out</button>
            </div>
            <div v-else class="space-x-4">
              <router-link to="/about" exact>About</router-link>
              <router-link to="/login" exact>Sign in</router-link>
              <router-link to="/register" exact>Sign up</router-link>
            </div>
          </div>
          
        </div>

        <div class="-mr-2 flex md:hidden" @click="toggleMenu = !toggleMenu">
          <!-- Mobile menu button -->
          <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg :class="toggleMenu ? 'hidden' : 'block' " class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg :class="toggleMenu ? 'block' : 'hidden'" class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div :class="toggleMenu ? 'block' : 'hidden' " class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <div v-if="loggedInUser" class="space-y-1">
          <router-link class="block" to="/" exact>Dashboard</router-link>
          <router-link class="block" to="/about" exact>About</router-link>
          <button @click="SignOut" class="active w-full text-left">Sign out</button>
        </div>
        <div v-else class="space-y-1">
          <router-link class="block" to="/about" exact>About</router-link>
          <router-link class="block" to="/login" exact>Login</router-link>
          <router-link class="block" to="/register" exact>Register</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Navbar',
  data() {
    return {
      toggleMenu: false
    }
  },
  computed: {
    ...mapGetters(["loggedInUser"])
  },
  methods: {
    ...mapActions(["signOut", "setTodos"]),
    SignOut() {
      this.signOut();
    }
  }
}
</script>

<style scoped>
  a, .active {
    @apply px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700;
  }

  .exact-active {
    @apply text-white bg-gray-700 focus:bg-gray-700 hover:bg-gray-700;
  }
</style>