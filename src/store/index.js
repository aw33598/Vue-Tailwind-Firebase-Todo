import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todo from './modules/todo'
import user from './modules/user'
import ui from './modules/ui'

export default new Vuex.Store({
  modules: {
    todo,
    user,
    ui
  }
})
