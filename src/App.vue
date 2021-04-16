<template>
  <div id="app">
    <Loading />
    <!-- <router-link to="/observable">observable</router-link> -->
    <!-- <router-link to="/sku">Sku</router-link> -->
    <router-link to="/slot">slot</router-link>
    <!-- <router-link to="/function">Function</router-link> -->
    <!-- <router-link to="/ssskkkuuu">Sku</router-link> -->
    <!-- <router-link to="/filter">filter</router-link> -->
    <!-- <router-link to="/directive">directive</router-link> -->
    <!-- <router-link to="/extend">Extend</router-link> -->
    <!-- <router-link to="/mixin">Mixin</router-link> -->
    <!-- <router-link to="/nextTick">nextTick</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
