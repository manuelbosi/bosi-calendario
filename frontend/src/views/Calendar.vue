<template>
  <FullCalendar :options="calendarOptions" id="calendar"></FullCalendar>
  <div id="add-event"><i class="fas fa-plus"></i></div>
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
#add-event {
  position: fixed;
  z-index: 9999;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  padding: 5px;
  background: #041C32;
  color: white;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.1s linear;
  font-size: 20px;
}
#add-event:hover {
  background-color: #073b5b;
}
</style>