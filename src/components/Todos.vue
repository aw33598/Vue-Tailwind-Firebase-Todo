<template>
  <div class="max-w-7xl px-4 sm:px-6 lg:px-16 mx-auto mt-8 md:mt-12 lg:mt-16">
    <div v-if="getLoading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-gap-6 row-gap-12 mt-8 px-3 pb-6 md:pb-8 lg:pb-12">
      <div v-for="(skeleton, index) in 6" :key="index">
        <Skeleton></Skeleton>
      </div>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-gap-6 row-gap-12 mt-8 px-3 pb-6 md:pb-8 lg:pb-12">
      <div v-for="todo in filterTodos" :key="todo.id">
        <Todo :todo="todo"></Todo>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import Todo from './Todo';
import Skeleton from './Skeleton';

import { firestore } from '../firebase/index';

export default {
  name: "Todos",
  components: {
    Todo,
    Skeleton
  },
  methods: {
    ...mapActions(["setLoadingState", "setTodos"])
  },
  computed: mapGetters(["filterTodos", "getLoading", "loggedInUser"]),
  async created() {
      const querySnapshot = await firestore.collection("todos").where("userId", "==", this.loggedInUser.userId).get();
      let todos = [];
      querySnapshot.forEach(doc => {
        todos.push(doc.data());
      })
      this.setTodos(todos);
      this.setLoadingState(false);
  },
}
</script>

<style>

</style>