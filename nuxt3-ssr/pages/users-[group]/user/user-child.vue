<template>
  <div class="component-page-user-child">
    <h2>page-user-child</h2>
  </div>
</template>

<script setup>
/* message */
// http://localhost:3000/users-admin/user/user-child

const props = defineProps({}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line
</script>

<style lang="scss" scoped>
.component-page-user-child {
  //
}
</style>
