<template>
  <div class="component-page-hello flex-layout justify-ecnter">
    <div>
      hello
    </div>
    <div class="cnt" @click="cnt ++">
      {{ cnt }}
    </div>
  </div>
  <!-- eslint-disable -->
  <div class="hello-element-2">
    hello-element-2 这个不会被渲染
  </div>
  <!-- eslint-enable -->
</template>

<script setup>
/* message */
// import form 'vue' 改为了import from  "#imports";
// import { defineProps, defineEmits, useSlots, useAttrs } from "#imports";
// import { ref } from "#imports";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const cnt = ref(1);
</script>

<style lang="scss" scoped>
.component-page-hello {
  height: 100%;
  text-align: center;
}
</style>
