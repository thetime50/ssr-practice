<template>
  <div class="component-client-ony-test">
    client-ony-test
  </div>
</template>

<script>
/* message */
console.log("hello ClientOnyTest");// 都是在服务端执行

export default {
  name: "ClientOnyTest",
  props: {
    info: {
      type: String,
      default: "",
    },
  },
  setup(props, context) { // eslint-disable-line
    const { attrs, slots, emit } = context; // eslint-disable-line
    console.log("props.info", props.info);
    onBeforeMount(() => { // 都是在客户端执行
      console.log("ClientOnyTest onBeforeMount", props.info);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
.component-client-ony-test {
  //
}
</style>
