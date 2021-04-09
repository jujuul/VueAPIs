<template>
  <div class="container" v-if="show">
    <div>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  box-sizing: border-box;
}
</style>
