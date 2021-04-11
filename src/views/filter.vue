<template>
  <div>
    <div v-for="(r, index) in item" :key="index">
      {{ r | replaceNumToChs }}
    </div>
  </div>
</template>

<script>
import { replaceNumToChs } from "@/filters";
export default {
  data() {
    return {
      item: ["1", "2", "3", "4"],
    };
  },
  filters: {
    replaceNumToChs,
  },
};
</script>

<style></style>
