<template>
  <div class="component-use-head">
    useHead({})
  </div>
</template>

<script setup>
/* message */
import { defineProps, defineEmits, useSlots, useAttrs } from "vue";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

useHead({
  title: "useHead title",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { name: "description", content: "My amazing site." },
  ],
  bodyAttrs: {
    class: "test",
  },
  titleTemplate: "%s - Site Title",
  // titleTemplate: (titleChunk) => {
  //   return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
  // },
});

</script>

<style lang="scss" scoped>
.component-use-head {
  //
}
</style>
