<template>
  <div class="component-page-child">
    <h2>page-child</h2>
    <div>{{ ts }}</div>
    <div>{{ $route.params }}</div>
  </div>
</template>

<script setup>
/* message */
// http://localhost:3000/parent/child-2

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line
const ts = ref("");

onMounted(() => {
  ts.value = new Date().toLocaleString();
});

definePageMeta({
  key: route => route.fullPath, // 路径更新时刷新页面组件
});
</script>

<style lang="scss" scoped>
.component-page-child {
    //
}
</style>
