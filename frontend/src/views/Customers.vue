<template>
  <navbar></navbar>
  <div class="container">
    <h1>CUSTOMERS</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import {onBeforeMount, onBeforeUnmount} from "vue";

export default {
  name: "Customers",
  components: { Navbar },
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