<template>
  <div id="about">
    <h1>使用Vue.extend动态创建组件</h1>
    <button @click="showToast">打开弹窗</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    showToast() {
      this.$toast("弹窗");
    },
  },
};
</script>
<style scoped>
.extend {
  color: #66ccff;
}
</style>
