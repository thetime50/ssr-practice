<template>
  <div class="component-page-err404 flex-layout justify-center align-center">
    <div>
      err404 page
    </div>
    <div class="">
      Go back home
    </div>
    <div @click="ctn++">
      {{ ctn }}
    </div>
  </div>
</template>

<script>
/* message */
import { ref } from "vue";
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
