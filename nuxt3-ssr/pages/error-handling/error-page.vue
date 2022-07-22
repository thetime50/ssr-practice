<template>
  <div class="component-error-page">
    error-page
  </div>
</template>

<script setup>
/* message */
import { defineProps, defineEmits, useSlots, useAttrs } from "vue";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

throw new Error("setup error");
</script>

<style lang="scss" scoped>
.component-error-page {
  //
}
</style>
