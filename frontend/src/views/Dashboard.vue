<template>
    <h1>DASHBOARD</h1>
</template>

<script>
import {onBeforeMount, onBeforeUnmount} from "vue";

export default {
  name: "Dashboard",
  setup() {

    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'dashboard';
    })

    onBeforeUnmount(() => {
      document.getElementById('app').dataset.screen = '';
    })

  }
}
</script>

<style scoped>

</style>