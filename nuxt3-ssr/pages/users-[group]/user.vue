<template>
  <div class="component-page-user">
    <h2>page-user</h2>
    <NuxtPage />
  </div>
</template>

<script setup>
/* message */
const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line
</script>

<style lang="scss" scoped>
.component-page-user {
  //
}
</style>
