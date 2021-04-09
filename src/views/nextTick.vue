<template>
  <div class="next-tick">
    <ul ref="ulRef">
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["项目1", "项目2", "项目3"],
    };
  },
  methods: {
    add() {
      this.items.push(Math.random());
      this.items.push(Math.random());
      this.items.push(Math.random());

      this.$nextTick(() => {
        const ulElem = this.$refs.ulRef;
        const length = ulElem.childNodes.length;
        console.log("length", length);
      });
    },
  },
};
</script>

<style></style>
