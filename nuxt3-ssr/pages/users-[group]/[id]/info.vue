<template>
  <div class="component-page-user-info">
    <h2>page-user-info</h2>
    <pre>
        {{ JSON.stringify(routeObj, null, '  ') }}
    </pre>
  </div>
</template>

<script setup>
/* message */
// http://localhost:3000/users-admin/3/info
import * as _ from "lodash";
const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const route = useRoute();
definePageMeta({ // 只能在页面组件中使用 在组件中使用没有效果
  infoStr: "user info info",
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
.component-page-user-info {
    //
}
</style>
