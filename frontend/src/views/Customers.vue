<template>
    <h1>CUSTOMERS</h1>
</template>

<script>
import {onBeforeMount, onBeforeUnmount} from "vue";

export default {
  name: "Customers",
  setup() {
    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'customers';
    })

    onBeforeUnmount(() => {
      document.getElementById('app').dataset.screen = '';
    })
  }
}
</script>

<style scoped>

</style>