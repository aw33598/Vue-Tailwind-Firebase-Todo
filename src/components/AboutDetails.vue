<template>
  <div class="max-w-7xl px-4 sm:px-6 lg:px-16 mx-auto mt-8 md:mt-12 lg:mt-16 text-gray-800">
    <p class="text-lg tracking-normal">This is a simple todo app that uses Vue.js as its front end framework and Firebase as its backend. This application is built using following technologies:</p>
    <div class="px-4">
      <ul class="list-none space-y-6 py-8">
        <li class="text-sm">
          <span class="px-2 py-1 rounded-md bg-green-500 text-white font-medium">Vue.js</span>
          <ul class="text-sm px-3 py-2 mt-4 sm:mt-0 list-none flex flex-wrap flex-col sm:flex-row sm:space-x-4 space-y-2 items-baseline">
            <li><code class="bg-white px-2 py-1 rounded-md shadow-xs border border-gray-100">vue: ^2.6.11</code></li>
            <li><code class="bg-white px-2 py-1 rounded-md shadow-xs border border-gray-100">vue-router: ^3.2.0</code></li>
            <li><code class="bg-white px-2 py-1 rounded-md shadow-xs border border-gray-100">vuex: ^3.4.0</code></li>
          </ul>
        </li>
        <li class="text-sm">
          <span class="px-2 py-1 rounded-md bg-yellow-500 text-white font-medium">Firebase</span>
          <ul class="text-sm px-3 py-2 mt-4 sm:mt-0 list-none flex flex-wrap flex-col sm:flex-row sm:space-x-4 space-y-2 items-baseline">
            <li><code class="bg-white px-2 py-1 rounded-md shadow-xs border border-gray-100">firebase: ^7.22.1</code></li>
            <li><code class="bg-white px-2 py-1 rounded-md shadow-xs border border-gray-100">firebase-firestore</code></li>
            <li><code class="bg-white px-2 py-1 rounded-md shadow-xs border border-gray-100">firebase-auth</code></li>
          </ul>
        </li>
        <li class="text-sm">
          <span class="px-2 py-1 rounded-md bg-teal-500 text-white font-medium">Tailwind</span>
          <ul class="text-sm px-3 py-2 mt-4 sm:mt-0 list-none flex flex-wrap flex-col sm:flex-row items-baseline">
            <li class="sm:mt-2"><code class="bg-white px-2 py-1 rounded-md shadow-xs border border-gray-100">tailwindcss: ^1.8.10</code></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutDetails"
}
</script>

<style>

</style>