<template>
  <div class="comp-a">
    <p>{{ aData }}</p>
    <p>{{ commonData }}</p>
    <button @click="aMethod">aMethod</button>
    <button @click="commonMethod">commonMethod</button>
  </div>
</template>

<script>
import mixin from "@/components/mixin";
export default {
  mixins: [mixin],
  data() {
    return {
      aData: "组件A的数据",
    };
  },
  methods: {
    aMethod() {
      console.log("组件A的方法");
    },
  },
  mounted() {
    console.log("组件A mounted");
  },
};
</script>

<style></style>
