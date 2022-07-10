<template>
  <div class="component-page-user">
    <h2>page-user</h2>
    <pre>
{{ JSON.stringify(routeObj, null,'  ') }}
    </pre>
    <div>
      {{ Object.keys( $route) }}
    </div>
    <NuxtPage /> <!-- 渲染不了 嵌套页面 -->
  </div>
</template>

<script setup>
/* message */
// http://localhost:3000/users-admin/3

import { useRoute } from "vue-router";
import * as _ from "lodash";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const route = useRoute();

definePageMeta({ // 只能在页面组件中使用 在组件中使用没有效果
  key: route => route.fullPath, // 路径更新时刷新页面组件
  title: "hello-route-meta",
  // keepalive: true, // 页面组件保持缓存
  // layout: ,// https://v3.nuxtjs.org/guide/directory-structure/pages/#layout
  // middleware: , // 中间件
  // layoutTransition: , // 布局切换动画
  // pageTransition: , // 页面切换动画
  // alias: '', // 别名 通过不同路径访问到同一个页面组件

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
.component-page-user {
  //
}
</style>
