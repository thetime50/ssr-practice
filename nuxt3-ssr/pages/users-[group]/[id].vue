<template>
  <div class="component-page-user">
    <h2>page-user</h2>
    <pre>
{{ JSON.stringify(routeObj, null,'  ') }}
    </pre>
    {{ Object.keys( $route) }}
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
const routeObj = computed(() => {
  return _.pick(route, [
    "name",
    "fullPath",
    "path",
    "hash",
    "params",
    "query",
  ]);
});

</script>

<style lang="scss" scoped>
.component-page-user {
  //
}
</style>
