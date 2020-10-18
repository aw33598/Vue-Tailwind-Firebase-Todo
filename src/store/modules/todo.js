import { firestore } from '../../firebase/index';

const state = {
  todos: [],
  filter: "All"
}


const getters = {
  allTodos(state) {
    return state.todos
  },

  filterTodos(state) {
    if (state.filter === 'All') {
      return state.todos;
    } else if (state.filter === 'Active') {
      return state.todos.filter(todo => !todo.completed);
    } else if (state.filter === 'Completed') {
      return state.todos.filter(todo => todo.completed);
    }
  },

  getActiveFilter(state) {
    return state.filter;
  }
}


const mutations = {
  createTodo(state, todo) {
    state.todos.unshift(todo);
  },

  setTodos(state, todos) {
    state.todos = todos;
  },

  toggleComplete(state, updatedTodo) {
    const todoIndex = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    state.todos.splice(todoIndex, 1, updatedTodo);
  },

  deleteTodo(state, deletedTodo) {
    const todoIndex = state.todos.findIndex(todo => todo.id === deletedTodo.id);
    state.todos.splice(todoIndex, 1);
  },

  updateTodo(state, updatedTodo) {
    const todoIndex = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    state.todos.splice(todoIndex, 1, updatedTodo);
  },

  setFilter(state, selectedFilter) {
    state.filter = selectedFilter;
  }
}


const actions = {
  setTodos({ commit }, todos) {
    commit('setTodos', todos);
  },

  addTodo({ commit }, todo) {
  firestore.collection('todos').doc(todo.id).set(todo)
    .then(() => {
      commit('createTodo', todo);
    });
  },

  toggleComplete({ commit }, toggledCompletedTodo) {
    firestore.collection('todos').doc(toggledCompletedTodo.id).update({
      completed: toggledCompletedTodo.completed
    })
      .then(() => {
        commit('toggleComplete', toggledCompletedTodo);
      })
  },

  deleteTodo({ commit }, deletedTodo) {
    firestore.collection('todos').doc(deletedTodo.id).delete()
      .then(() => {
      commit('deleteTodo', deletedTodo);
    })
  },

  setFilter({ commit }, selectedFilter) {
    commit('setFilter', selectedFilter);
  },

  updateTodoAction({ commit }, updatedTodo) {
    firestore.collection('todos').doc(updatedTodo.id).update({
      title: updatedTodo.title
    })
      .then(() => {
        commit('updateTodo', updatedTodo);
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}