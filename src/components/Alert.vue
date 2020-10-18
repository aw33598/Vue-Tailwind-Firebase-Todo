<template>
  <div :class="type === 'error' ? error : success" class="flex items-center w-full text-sm px-4 py-3 mb-16 rounded-md">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      success: {
        'text-green-800': true,
        'bg-green-200': true
      },
      error: {
        'text-red-800': true,
        'bg-red-200': true
      }
    }
  }
}
</script>

<style>

</style>