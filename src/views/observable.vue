<template>
  <div>
    <button @click="setCount(count + 1)">count++</button>
    <hr />
    <p>{{ count }}</p>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { store, mutations } from "@/store/index";
export default {
  computed: {
    // 如果store中的数据发生变化重新计算
    count() {
      return store.count;
    },

    name() {
      return store.name;
    },
  },

  methods: {
    // 将store中的mutations方法赋值拿到
    setCount: mutations.setCount,
  },
};
</script>

<style></style>
