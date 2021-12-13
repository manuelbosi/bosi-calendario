<template>
  <FullCalendar :options="calendarOptions" id="calendar"></FullCalendar>
  <div id="add-event" @click="addEvent"><i class="fas fa-plus"></i></div>
  <FadeTransition>
    <Modal v-if="showModal" @close="closeModal($event)">
      <template v-slot:title><h1>AGGIUNGI LAVORO</h1></template>
      <template v-slot:body>MODAL CONTENT</template>
      <template v-slot:footer>
        <Button>SALVA</Button>
      </template>
    </Modal>
  </FadeTransition>
</template>

<script>
import {onBeforeMount, onBeforeUnmount} from "vue";
import '@fullcalendar/core/vdom' // solves problem with Vite
import FullCalendar from '@fullcalendar/vue3'
import useCalendar from "../composables/useCalendar";
import Modal from "../components/Modal";
import FadeTransition from "../components/FadeTransition";
import Button from "../components/Button";

export default {
  name: "Calendar",
  components: { FullCalendar, FadeTransition, Modal, Button },
  setup() {

    onBeforeMount(() => {
      document.getElementById('app').dataset.screen = 'calendar';
    })

    const { addEvent, closeModal, showModal, calendarOptions } = useCalendar()

    onBeforeUnmount(() => {
      document.getElementById('app').dataset.screen = '';
    })



    return {
      addEvent,
      closeModal,
      showModal,
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