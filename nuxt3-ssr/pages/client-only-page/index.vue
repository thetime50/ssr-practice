<template>
  <div class="component-client-only-page">
    <div>serve</div>
    <clientOnyTest ref="serveRef" info="serve" /> <!-- setup 在服务端执行 -->
    <clientOnly>
      <div>client</div>
      <clientOnyTest ref="clientRef" info="client" /> <!-- setup 在客户端执行 -->
    </clientOnly>
    <client-only>
      <lazy-jot-form />  <!-- 也不能确定在客户端执行 对v-if 生效  -->
      <JotFormSetup />
    </client-only>
  </div>
</template>

<script setup>
/* message */
import {
  defineProps, defineEmits, useSlots, useAttrs,
  ref, onMounted,
} from "vue";
// import { JotFormSetup } from "#components"; // 这样会触发服务端执行

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const serveRef = ref(null);
const clientRef = ref(null);
onMounted(() => {
  console.log("serveRef", serveRef.value); // 服务端渲染可以立即拿到ref
  console.log("clientRef", clientRef.value);
});

</script>

<style lang="scss" scoped>
.component-client-only-page {
  //
}
</style>
