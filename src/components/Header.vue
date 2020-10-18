<template>
  <header class="bg-white">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
        {{ headerTitle }}
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    headerTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>