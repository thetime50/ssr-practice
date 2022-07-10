<template>
  <div class="component-page-parent">
    <h2>page-parent</h2>
    <button class="ctn" @click="ctn ++">
      ctn: {{ ctn }}
    </button>
    <NuxtPage :page-key="ctn" />
  </div>
</template>

<script setup>
/* message */
const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const ctn = ref(0);
</script>

<style lang="scss" scoped>
.component-page-parent {
  //
}
</style>
