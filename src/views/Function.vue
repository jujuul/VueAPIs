<template>
  <div>
    <FunctionalButton @click="log">click me</FunctionalButton>
  </div>
</template>

<script>
import FunctionalButton from "@/components/Function/FunctionButton";
export default {
  components: { FunctionalButton },
  methods: {
    log() {
      console.log("click");
    },
  },
};
</script>

<style></style>
