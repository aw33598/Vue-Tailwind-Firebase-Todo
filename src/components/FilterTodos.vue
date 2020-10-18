<template>
  <div class="flex flex-col items-end w-full sm:w-1/2 px-3 pb-5 mb-2 sm:mb-0">
    <label class="text-sm text-gray-700 mb-3" for="filter">Filter todos</label>
    <div class="relative">
      <button @click="showFilterDropdown = !showFilterDropdown" class="text-left flex justify-between w-40 bg-white px-3 shadow py-2 rounded-md text-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 border border-gray-300">
        <p class="inline-block">{{ getActiveFilter }}</p>
          <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div v-if="showFilterDropdown" class="absolute z-10 mt-1 overflow-hidden text-sm shadow-md border border-gray-300 bg-white w-full rounded-md">
        <div v-for="selectedFilter in filterOptions" :key="selectedFilter" class="hover:bg-gray-700 focus:hover-bg-gray-700 focus:text-white hover:text-white">
          <div :class="selectedFilter === getActiveFilter ? 'font-medium' : null " class="px-3 py-2 cursor-pointer flex items-center justify-between" @click="setActiveFilter(selectedFilter)">
            {{ selectedFilter }}
            <svg v-if="getActiveFilter === selectedFilter" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'FilterTodos',
  data() {
    return {
      showFilterDropdown: false,
      filterOptions: [ "All", "Active", "Completed" ],
    }
  },
  methods: {
    ...mapActions(["setFilter"]),
    setActiveFilter(filterValue) {
      this.filter = filterValue;
      this.showFilterDropdown = false;
      this.setFilter(filterValue);
    }
  },
  computed: {
    ...mapGetters(["getActiveFilter"])
  }
}
</script>

<style>

</style>