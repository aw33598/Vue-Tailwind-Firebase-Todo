<template>
  <form @submit.prevent="createTodo" class="flex flex-col sm:w-1/2 px-3 pb-5 mb-2 sm:mb-0">
    <div class="flex justify-between items-baseline">
      <label class="mb-3 text-sm text-gray-700" for="title">Todo title</label>
      <label v-if="form.error" class="mb-3 text-red-600 text-xs italic">Title can not be empty</label>
    </div>
    <input autocomplete="off" class="px-3 shadow py-2 rounded-md text-sm focus:outline-none focus:border-blue-300 placeholder-gray-500 border border-gray-300" type="text" name="title" v-model="form.title" placeholder="Bring groceries from the store">
    <input v-if="false" type="submit" value="Create todo">
  </form>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import { v4 } from 'uuid';

export default {
  name: "NewTodo",
  data() {
    return {
      form: {
        title: '',
        error: false
      }
    }
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  methods: {
    ...mapActions(["addTodo"]),
    createTodo() {
      if (this.form.title.trim() === '') {
        this.form.error = true;
        return setTimeout(() => {
          this.form.error = false;
        }, 3000);
      }
      const todo = {
        id: v4(),
        userId: this.loggedInUser.userId,
        title: this.form.title,
        completed: false,
        editing: false
      }
      this.addTodo(todo);
      this.form.title = '';
    }
  }
}
</script>

<style scoped>

</style>