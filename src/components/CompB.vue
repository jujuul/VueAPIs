<template>
  <div class="comp-a">
    <p>{{ bData }}</p>
    <p>{{ commonData }}</p>
    <button @click="bMethod">bMethod</button>
    <button @click="commonMethod">commonMethod</button>
  </div>
</template>

<script>
import mixin from "@/components/mixin";
export default {
  mixins: [mixin],
  data() {
    return {
      bData: "组件B的数据",
    };
  },
  methods: {
    bMethod() {
      console.log("组件B的方法");
      this.commonData = "公共的数据变为全局的数据";
    },
  },
  mounted() {
    console.log("组件B mounted");
    console.log("B组件内", this.commonData);
  },
};
</script>

<style></style>
