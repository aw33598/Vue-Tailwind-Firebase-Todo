<template>
  <div class="h-calc w-full flex flex-col items-center justify-center px-8">
    <img class="h-64" src="../assets/404_not_found.svg" alt="not found">
    <p class="mt-8 text-lg font-mono">Not Found</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
  .h-calc {
    min-height: calc(100vh - 4rem);
  }
</style>