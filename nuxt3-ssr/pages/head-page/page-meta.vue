<template>
  <div class="component-page-meta">
    page-meta
  </div>
</template>

<script setup>
/* message */
import { defineProps, defineEmits, useSlots, useAttrs } from "vue";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const route = useRoute();

definePageMeta({
  myTitle: "Some Page",
});
useHead({
  meta: [{ name: "og:title", content: `App Name - ${route.meta.myTitle}` }],
  titleTemplate: () => {
    return `${route.meta.myTitle} - App`;
  },
});
</script>

<style lang="scss" scoped>
.component-page-meta {
  //
}
</style>
