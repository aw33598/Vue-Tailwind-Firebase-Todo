import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import { firebase } from "./firebase/index";

import "./styles/tailwind.css";

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(userReceived => {
  if (userReceived) {
    const user = {
      userId: userReceived.uid,
      email: userReceived.email
    }
    store.commit("setUser", user);
  } else {
    store.commit("setUser", userReceived);
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app")
});

firebase.auth.Auth.Persistence.LOCAL;