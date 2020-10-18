<template>
  <div class="h-full relative px-5 py-5 text-base text-gray-800 rounded-lg shadow border border-gray-300 bg-white">
    <div class="text-right w-24 absolute right-0 top-0 -mt-4 mr-4">
      <span v-if="todo.completed" class="inline-flex items-center shadow-xs text-xs bg-green-200 font-medium text-green-700 py-1 px-2 rounded-full">{{ 'completed' }}</span>
      <span v-else class="inline-flex items-center shadow-xs text-xs bg-red-200 font-medium text-red-700 py-1 px-2 rounded-full">{{ 'active' }}</span>
    </div>

      <form v-if="todo.editing" @submit.prevent="updateTodo(todo)">
        <input v-focus @blur="cancelEdit(todo)" class="w-full mt-2 px-3 py-2 rounded-md text-base focus:outline-none focus:border-blue-300 placeholder-gray-500 border border-gray-300" type="text" name="title" v-model="todo.title">
        <input v-if="false" type="submit" value="Update todo">
      </form>

      <p v-else class="w-full break-words">{{ todo.title }}</p>

    <div class="flex items-center justify-end text-gray-700 pt-5 mt-4 border-t border-gray-300">
      <svg @click="editTodo(todo)" class="cursor-pointer w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
      <svg @click="deleteTodo(todo)" class="cursor-pointer w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      <svg @click="updateCompleted(todo)" v-if="!todo.completed" class="cursor-pointer w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <svg @click="updateCompleted(todo)" v-else class="cursor-pointer w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Todo",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      updatedTitle: "",
      beforeEditTitle: ""
    }
  },
  methods: {
    ...mapActions(["toggleComplete", "deleteTodo", "updateTodoAction"]),
    
    updateCompleted(todo) {
      const updatedTodo = {
        ...todo,
        completed: !todo.completed
      }
      this.toggleComplete(updatedTodo);
    },

    editTodo(todo) {
      this.beforeEditTitle = todo.title;
      todo.editing = true;
    },

    cancelEdit(todo) {
      todo.editing = false;
    },

    updateTodo(todo) {
      if (todo.title.trim() === '') {
        todo.editing = false;
        todo.title = this.beforeEditTitle;
      } else {
        todo.editing = false;
      }

      this.updateTodoAction(todo);
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>