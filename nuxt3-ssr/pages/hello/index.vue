<template>
  <div class="component-page-hello">  <!-- 路由页面组件外面必须有一个根元素 -->
    hello
  </div>
</template>

<script lang="ts">
/* message */
export default {
  name: "page-hello",
  setup(props, context) { // eslint-disable-line
    const { attrs, slots, emit } = context; // eslint-disable-line
    return {};
  },
};
</script>

<style lang="scss" scoped>
.component-page-hello {
  //
}
</style>