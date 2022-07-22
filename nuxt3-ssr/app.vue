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
<script lang="ts" setup>
// import { onErrorCaptured, ComponentPublicInstance } from "#imports";
import { onErrorCaptured, ComponentPublicInstance } from "vue";
onErrorCaptured(
  (
    err: unknown,
    instance: ComponentPublicInstance | null,
    info: string,
  ) => {
    console.log("onErrorCaptured() err,instance,info", err, instance, info);
  },

);
</script>
<style lang="scss">
@import "style/common.scss";
.app-root{
  height: 100vh;
}
</style>
