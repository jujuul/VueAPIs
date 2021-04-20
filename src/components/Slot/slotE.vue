<template>
  <div>
    <div>我是slotE组件</div>
    <!-- <slot v-bind:user="user"></slot> -->
    <slot :users="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [
        { name: "zx", age: 18 },
        { name: "jujuul", age: 19 },
        { name: "ads", age: 12 },
      ],
    };
  },
};
</script>

<style></style>
