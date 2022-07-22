<template>
  <div class="component-state-child">
    state-child counter:{{ counter }}
  </div>
</template>

<script setup>
/* message */
import { defineProps, defineEmits, useSlots, useAttrs } from "vue";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const counter = useCounter();
</script>

<style lang="scss" scoped>
.component-state-child {
  //
}
</style>
