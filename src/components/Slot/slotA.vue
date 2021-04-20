<template>
  <div>
    <div>我是slotA组件</div>
    <slot></slot>
    <slotC>{{ arr }}</slotC>
    <hr />
  </div>
</template>

<script>
import slotC from "@/components/Slot/slotC";
export default {
  components: { slotC },
  data() {
    return {
      arr: ["a", "b", "c", "d", "e"],
    };
  },
};
</script>

<style></style>
