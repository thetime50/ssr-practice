<template>
  <div class="component-error">
    <div>错误捕获展示页面</div>
    <button @click="handleError">
      Clear errors
    </button>
    <pre class="p-20">
{{ JSON.stringify(error,null, '  ') }}
    </pre>
    <div  class="p-20" v-html="error.description" /> <!-- eslint-disable-line -->
  </div>
</template>

<script setup>
/* message */
import { defineProps, defineEmits, useSlots, useAttrs } from "vue";

const props = defineProps({// eslint-disable-line
  error: {
    type: Object,
    required: true,
  },
  // default: () => ({}),
});

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

const handleError = () => clearError({ redirect: "/" });

console.error(props.error);
</script>

<style lang="scss" scoped>
.component-error {
  //
}
.pre{
  max-width: 100%;
  word-wrap:break-word;
}
.p-20{
  padding-left:20px;
}
</style>
