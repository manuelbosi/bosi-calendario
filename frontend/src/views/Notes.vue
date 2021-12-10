<template>
  <navbar></navbar>
  <div class="container">
    <h1>NOTES</h1>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import {onBeforeMount, onBeforeUnmount} from "vue";

export default {
  name: "Notes",
  components: { Navbar },
  setup() {
    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'notes';
    })
    onBeforeUnmount(() => {
      document.getElementById('app').dataset.screen = '';
    })
  }

}
</script>

<style scoped>

</style>