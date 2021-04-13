<template>
  <div
    class="nav-bar"
    v-nav-current="{
      curIdx,
      className: 'nav-item',
      activeClass: 'nav-current',
    }"
  >
    <div
      class="nav-item"
      v-for="(item, index) of items"
      :key="index"
      @click="changeNav(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
import navCurrent from "@/directives/navCurrent";
export default {
  name: "NavBar",
  directives: {
    navCurrent,
  },
  data() {
    return {
      curIdx: 0,
      items: ["选项1", "选项2", "选项3", "选项4"],
    };
  },
  methods: {
    changeNav(idx) {
      this.curIdx = idx;
    },
  },
};
</script>

<style>
.nav-bar {
  width: 500px;
  height: 50px;
  margin: 50px auto;
  border: 1px solid #000;
}
.nav-item {
  float: left;
  width: 25%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.nav-current {
  background-color: #000;
  color: #fff;
}
</style>
