<template>
  <div class="component-page-home">
    <!-- 路由页面组件外面必须有一个根元素 -->
    home
    <ul>
      <li>
        <router-link to="/hello">
          hello
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
/* message */
export default {
  name: "PageHome",
    setup(props, context) { // eslint-disable-line
        const { attrs, slots, emit } = context; // eslint-disable-line
    return {};
  },
};
</script>

<style lang="scss" scoped>
.component-page-home {
    //
}
</style>
