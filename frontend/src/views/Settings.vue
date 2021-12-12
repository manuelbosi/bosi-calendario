<template>
  <h1>SETTINGS</h1>
</template>

<script>
import {onBeforeMount, onBeforeUnmount} from "vue";

export default {
  name: "Settings",
  setup() {
    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'settings';
    })

    onBeforeUnmount(() => {
      document.getElementById('app').dataset.screen = '';
    })
  }
}
</script>

<style scoped>

</style>