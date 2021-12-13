<template>
  <FullCalendar :options="calendarOptions"></FullCalendar>
</template>

<script>
import {onBeforeMount, onBeforeUnmount} from "vue";
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import useCalendar from "../composables/useCalendar";

export default {
  name: "Calendar",
  components: { FullCalendar },
  setup() {

    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'calendar';
    })

    const { calendarOptions } = useCalendar()

    onBeforeUnmount(() => {
      document.getElementById('app').dataset.screen = '';
    })



    return {
      calendarOptions
    }
  }

}
</script>

<style scoped>

</style>