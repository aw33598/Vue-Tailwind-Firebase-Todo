<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  @apply antialiased bg-gray-100;
}
</style>
