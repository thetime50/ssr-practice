<template>
  <div class="component-page-home">
    <!-- 路由页面组件外面必须有一个根元素 -->
    home
    <h2><a href="https://v3.nuxtjs.org/guide/features/views/">guide/features/views/</a></h2>
    <ul>
      <li>
        client-only-test
        <NuxtLink to="/clientOnlyPage">
          /clientOnlyPage
        </NuxtLink>
      </li>
    </ul>
    <h2><a href="https://v3.nuxtjs.org/guide/directory-structure/pages/">directory-structure/pages</a></h2>
    <ul>
      <li>
        <NuxtLink to="/hello">
          hello
        </NuxtLink> // 这个页面不知道为什么back会是空页面
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
      <li>
        动态路径 group/user <NuxtLink to="/users-admin/user">
          /users-admin/user
        </NuxtLink>
      </li>
      <li>
        动态路径 <NuxtLink to="/users-admin/3">
          /users-admin/3
        </NuxtLink>
      </li>
      <li>
        动态路径 info 嵌套路由页面 <NuxtLink to="/users-admin/3/info">
          /users-admin/3/info
        </NuxtLink>
      </li>
      <li>
        动态路径 detail 嵌套路由页面 <NuxtLink to="/users-admin/3/detail">
          /users-admin/3/detail
        </NuxtLink>
      </li>
      <li>
        catch-all 页面正常匹配路径 <NuxtLink to="/catch-all/test">
          /catch-all/test
        </nuxtlink>
      </li>
      <li>
        catch-all [...slug].vue <NuxtLink to="/catch-all/apple/bee/233">
          /catch-all/apple/bee/233
        </nuxtlink>
      </li>
      <li>
        嵌套路由 <NuxtLink to="/parent/child-2">
          /parent/child-2
        </NuxtLink>
      </li>
      <li>
        嵌套路由 :page-key 重新渲染 <NuxtLink to="/parent/child-3">
          /parent/child-3
        </NuxtLink>
      </li>
      <li>
        页面元数据 definePageMeta <NuxtLink to="/parent/child-4">
          /parent/child-4
        </NuxtLink> <NuxtLink to="/users-admin/3/detail">
          /users-admin/3/detail
        </NuxtLink>
      </li>
      <li>
        特殊元数据 <NuxtLink to="/users-admin/3">
          /users-admin/3
        </NuxtLink>
        <ul>
          <li>keepalive</li>
          <li>key</li>
          <li>layout</li>
          <li>middleware</li>
          <li>layoutTransition</li>
          <li>pageTransition</li>
          <li>alias</li>
        </ul>
      </li>
      <li>
        限制元数据属性结构
      </li>
    </ul>
    <h2><a href="https://v3.nuxtjs.org/guide/directory-structure/middleware/">directory-structure/middleware</a></h2>
    <ul>
      <li>
        route-redirect.global.ts <NuxtLink to="/">
          /
        </NuxtLink>
      </li>
      <li>
        命名路由中间件参数 <NuxtLink to="/named-test">
          /named-test
        </NuxtLink>
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
ul ul ul>li {
    list-style-type: square;
}
ul ul>li {
    list-style-type: circle;
}
ul>li {
    list-style-type: disc;
}
</style>
