<template>
  <navbar></navbar>
  <div class="container">
    <h1>CALENDAR</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import {onBeforeMount, onBeforeUnmount} from "vue";

export default {
  name: "Calendar",
  components: { Navbar },
  setup() {
    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'calendar';
    })

    onBeforeUnmount(() => {
      document.getElementById('app').dataset.screen = '';
    })
  }

}
</script>

<style scoped>

</style>