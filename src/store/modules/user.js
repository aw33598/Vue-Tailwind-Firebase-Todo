import { firebase } from '../../firebase/index';

import router from '../../router/index';

const state = {
  user: null
}

const getters = {
  loggedInUser(state) {
    return state.user;
  }
}

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
}

const actions = {
  setUser({ commit }, user) {
    commit('setUser', user);
  },

  signUp(context, credentials) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        resolve('User registered successfully!');
      })
      .catch(errors => {
        reject(errors.message);
      })
    });
  },

  signIn(context, credentials) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        resolve('User signed in successfully!');
      })
      .catch(errors => {
        reject(errors.message);
      })
    });
  },

  signOut() {
    firebase.auth().signOut().then(() => { router.push('/login'); });
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}