<template>
  <div class="component-layout-page">
    <div>
      <button @click="changeLayout">
        change layout
      </button>
    </div>
    <NuxtLayout>
      layout-page
    </NuxtLayout>
    <NuxtLayout :name="layout">
      layout-page
    </NuxtLayout>
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
const layout = "custom";

definePageMeta({
//   layout: "custom",
  layout: false, // nuxt-layout 不使用任何组件
});

function changeLayout () {
  if (route.meta.layout) {
    route.meta.layout = false;
  } else {
    route.meta.layout = "custom";
  }
}
</script>

<style lang="scss" scoped>
.component-layout-page {
  //
}
</style>
