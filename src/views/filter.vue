<template>
  <div>
    <div v-for="(r, index) in item" :key="index">
      <td :class="r | replaceNumToChs | setStatusStyle">
        {{ r | replaceNumToChs }}
      </td>
    </div>
  </div>
</template>

<script>
import { replaceNumToChs, setStatusStyle } from "@/filters";
export default {
  data() {
    return {
      item: ["1", "2", "3", "4"],
    };
  },
  filters: {
    replaceNumToChs,
    setStatusStyle,
  },
};
</script>

<style scoped>
.one {
  color: red;
}
.two {
  color: yellow;
}
.three {
  color: greenyellow;
}
.four {
  color: aqua;
}
</style>
