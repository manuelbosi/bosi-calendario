<template>
    <h1>NOTES</h1>
</template>

<script>
import {onBeforeMount, onBeforeUnmount} from "vue";

export default {
  name: "Notes",
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