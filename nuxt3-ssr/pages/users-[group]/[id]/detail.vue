<template>
  <div class="component-page-user-detail">
    <h2>page-user-detail</h2>
    <pre>
        {{ JSON.stringify(routeObj, null, '  ') }}
    </pre>
  </div>
</template>

<script setup>
/* message */
// http://localhost:3000/users-admin/3/detail
const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const route = useRoute();
definePageMeta({ // 不同层级的元数据 会被合并到一个对象里面
  detailStr: "user detail str",
});

const routeObj = computed(() => {
  return _.pick(route, [
    "name",
    "fullPath",
    "path",
    "hash",
    "params",
    "query",
    "meta",
  ]);
});
</script>

<style lang="scss" scoped>
.component-page-user-detail {
  //
}
</style>
