<template>
  <div class="component-page-home">
    <!-- 路由页面组件外面必须有一个根元素 -->
    home
    <ul>
      <li>
        <NuxtLink to="/hello">
          hello
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'users-group-id', query: { q: 'hello world' }, params: { group:'client',id:'0527'}}">
          users-group-id
        </NuxtLink>
        <button
          @click="navigateTo({ name: 'users-group-id', query: { q: 'hello navigateTo' }, params: { group:'client',id:'0527'}})"
        >
          navigateTo
        </button>
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
