<template>
  <div class="component-state-management">
    counter: {{ counter }}
    <button @click="addClick">
      add
    </button>
    <stateChild />
  </div>
</template>

<script setup>
/* message */
import { defineProps, defineEmits, useSlots, useAttrs } from "vue";
import stateChild from "./components/state-child";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const counter = useCounter();

defineComponent({
  stateChild,
});

function addClick () {
  counter.value++;
}
</script>

<style lang="scss" scoped>
.component-state-management {
  //
}
</style>
