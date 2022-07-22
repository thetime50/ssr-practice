<template>
  <div class="component-error-captured">
    <div>
      error-captured
    </div>
    <div>
      <button @click="throwErrorClick">
        throw error
      </button>
    </div>
    <div>
      <button @click="renderErrorClick">
        rander error
      </button>
    </div>
    <div>
      不管是button error 还是 render error, <br>
      onErrorCaptured() 和 nuxtApp.vueApp.config.errorHandler() 都会触发到
    </div>

    <div>
      <button @click="useErrorClick">
        use error
      </button>
    </div>
    <div>
      <button @click="createErrorClick({fatal: false})">
        create error
      </button>
      <button @click="createErrorClick({statusCode: 500,fatal: true})">
        create error fatal true
      </button>
      为什么fatal true 没有效果弹出错误页面
    </div>

    <div v-if="errDomShow">
      {{ throwRandowError() }}
    </div>

    <NuxtErrorBoundary @error="someErrorLogger">
      <!-- You use the default slot to render your content -->
      <button @click="throwErrorClick">
        throw error 只对嵌套子组件有作用
      </button>
      <errChild />

      <template #error="{ error }">
        You can display the error locally here.
        <button @click="error = null">
          This will clear the error.
        </button>
        <button @click="dbg(error)">
          <!-- error.value_.stack -->
          console error
        </button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<script setup>
/* message */
import { createError } from "h3";
import errChild from "./components/err-child.vue";
import { useSlots, useAttrs, ref } from "#imports";

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

defineComponent({
  errChild,
});

function dbg () {
  console.log(...arguments);
}

function throwErrorClick () {
  throw new Error("button error");
}

const errDomShow = ref(false);
function renderErrorClick () {
  errDomShow.value = true;
}

function throwRandowError () {
  throw new Error("random error");
}

function useErrorClick () {
  console.log("useError()", useError());
}

function createErrorClick (options = {}) {
  console.log({
    statusCode: 404,
    statusMessage: "Page Not Found",
    ...options,
  });
  // function createError (err: { cause, data, message, name, stack, statusCode, statusMessage, fatal }): Error
  throw createError({ // 在服务端触发这个函数会直接返回错误页面
    statusCode: 404,
    statusMessage: "Page Not Found",
    ...options,
  });
}
</script>

<style lang="scss" scoped>
.component-error-captured {
  //
}
</style>
