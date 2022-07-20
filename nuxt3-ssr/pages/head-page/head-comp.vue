<template>
  <div class="component-head-comp">
    <Title>Head Comp {{ ctn }}</Title>
    <div>
      <button @click="ctn++">
        add
      </button>
    </div>
    <div>{{ ctn }}</div>
  </div>
</template>

<script setup>
/* message */
import {
  defineProps, defineEmits, useSlots, useAttrs,
  ref,
} from "vue";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const ctn = ref(0);
</script>

<style lang="scss" scoped>
.component-head-comp {
  //
}
</style>
