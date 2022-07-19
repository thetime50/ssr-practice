<template>
  <div class="app-root">
    <!-- <NuxtWelcome /> -->
    <!-- <router-view ></router-view> -->
    <div>
      $route.name:{{ $route.name }}
    </div>
    <NuxtPage /> <!-- :key="$route.name"  -->
  </div>
</template>
<style lang="scss">
@import "style/common.scss";
.app-root{
  height: 100vh;
}
</style>
