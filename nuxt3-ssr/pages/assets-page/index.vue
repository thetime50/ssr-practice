<template>
  <div class="component-assets-page">
    <img src="/img/nuxt.svg" alt="Discover Nuxt 3">
    <img src="/img/nuxt3.png" alt="Discover Nuxt 3">
    <img src="~/assets/img/nuxt.svg" alt="Discover Nuxt 3">
  </div>
</template>

<script setup>
/* message */
import { defineProps, defineEmits, useSlots, useAttrs } from "vue";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line
</script>

<style lang="scss" scoped>
.component-assets-page {
  //
}
img{
  width: 80px;
  height: 40px;
}
</style>
