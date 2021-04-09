<template>
  <div>
    <p>mixin</p>
    <Comp-a></Comp-a>
    <hr />
    <Comp-b></Comp-b>
  </div>
</template>

<script>
import CompA from "@/components/CompA";
import CompB from "@/components/CompB";
export default {
  components: { CompA, CompB },
};
</script>

<style></style>
