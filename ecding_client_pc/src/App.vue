<template>
  <div id="app">
    <router-link to="/first">点击跳到第一个路由</router-link>
    <router-link to="/second">点击跳到第二个路由</router-link>
    <router-view/>
  </div>
</template>

<script>
import firstComponent from "./components/firstComponent"; //引入组件

export default {
  name: "App",
  components: { firstComponent } //注册组件
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
