<template>
  <div class="component-err-child">
    <div>err-child</div>
    <div>
      <button @click="throwErrorClick">
        throw error
      </button>
    </div>
    <div>
      <button @click="createErrorClick">
        create error
      </button>
    </div>
  </div>
</template>

<script setup>
/* message */
import { createError } from "h3";
import { defineProps, defineEmits, useSlots, useAttrs } from "vue";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

function throwErrorClick () {
  throw new Error("throw error");
}
function createErrorClick () {
  throw createError({
    statusCode: 500,
    stateMessage: "create error",
    // fatal: true,
  });
}

</script>

<style lang="scss" scoped>
.component-err-child {
  //
}
</style>
