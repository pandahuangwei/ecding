// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import Vuex from "vuex";

import Second from "./components/secondComponent";

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;
// Vue.use(VueResource);Y
const First = {
  template: "<div><h2>page{{count}}</h2></div>",
  computed: {
    count() {
      return store.state.count;
    }
  }
};


const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/first",
      component: First
    },
    {
      path: "/second",
      component: Second
    }
  ]
});

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

store.commit("increment");

console.log(store.state.count); // -> 1

const app = new Vue({
  el: "#app",
  router: router,
  store,
  render: h => h(App)
}).$mount("#app");
