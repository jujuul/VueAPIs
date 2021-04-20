<template>
  <div>
    <p>slot</p>
    <div>父组件</div>
    <slotA>
      <p>{{ arr }}</p>
    </slotA>
    <hr />
    <slotB>
      <template #header>头部</template>
      <template #main
        ><p>A paragraph for the main content.</p>
        <p>And another one.</p></template
      >
      <template v-slot:footer>腿部</template>
    </slotB>
    <hr />
    <slotD></slotD>
    <hr />
    <slotE v-slot="slotProps">
      <div v-for="(item, index) in slotProps.users" :key="index">
        {{ item.name }} --- {{ item.age }}
      </div>
    </slotE>
    <hr />
  </div>
</template>

<script>
import slotA from "@/components/Slot/slotA";
import slotB from "@/components/Slot/slotB";
import slotD from "@/components/Slot/slotD";
import slotE from "@/components/Slot/slotE";
export default {
  components: { slotA, slotB, slotD, slotE },
  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style></style>
