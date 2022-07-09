<template>
  <div class="page-error flex-layout align-center">
    <div>404 page</div>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ // eslint-disable-line
  error: { type: Object, default: null },
});

const handleError = () => clearError({ redirect: "/home" });
</script>
<style lang="scss">
.page-error {
  height: 100vh;
}
</style>
