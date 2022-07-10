<template>
  <div class="component-page-err404 flex-layout justify-center align-center">
    <h2>
      404.vue
    </h2>
    <router-link to="/home">
      Go back home
    </router-link>
    <div @click="ctn++">
      {{ ctn }}
    </div>
  </div>
</template>

<script>
/* message */
import { ref } from "#imports";
export default {
  name: "PageErr404",
  setup(props, context) { // eslint-disable-line
    const { attrs, slots, emit } = context; // eslint-disable-line
    const ctn = ref(1);
    return {
      ctn,
    };
  },
};
</script>

<style lang="scss" scoped>
.component-page-err404 {
  //
}
</style>
