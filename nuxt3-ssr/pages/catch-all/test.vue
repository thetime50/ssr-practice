<template>
  <div class="component-page-catch-all-test">
    <!--  -->
    <h2>page-catch-all-test</h2>
    <pre>
{{ JSON.stringify(routeObj, null,'  ') }}
    </pre>
  </div>
</template>

<script setup>
/* message */

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
.component-page-catch-all-test {
  //
}
</style>
