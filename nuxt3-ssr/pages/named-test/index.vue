<template>
  <div class="component-named-test">
    named-test
  </div>
</template>

<script setup>
/* message */
import { defineProps, defineEmits, useSlots, useAttrs } from "vue";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

definePageMeta({
  middleware: ["named-test"],
});

</script>

<style lang="scss" scoped>
.component-named-test {
  //
}
</style>
