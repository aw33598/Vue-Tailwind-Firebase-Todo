<template>
  <div class="max-w-7xl px-4 sm:px-6 lg:px-16 mx-auto mt-8 md:mt-12 lg:mt-16">
    <div class="px-2">
      <div class="flex flex-col sm:flex-row -mx-2">
        <NewTodo></NewTodo>
        <FilterTodos></FilterTodos>
      </div>
    </div>
  </div>
</template>

<script>

import NewTodo from './NewTodo'
import FilterTodos from './FilterTodos'

export default {
  name: "Dashboard",
  components: {
    NewTodo,
    FilterTodos
  }
}
</script>

<style>

</style>