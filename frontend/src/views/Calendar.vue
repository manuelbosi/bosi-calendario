<template>
    <h1>CALENDAR</h1>
</template>

<script>
import {onBeforeMount, onBeforeUnmount} from "vue";

export default {
  name: "Calendar",
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