import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import {ref} from "vue";
// import Utils from "../utils";

export default function useCalendar() {

    const showModal = ref(false)

    const calendarOptions = {
        plugins: [ dayGridPlugin, timeGridPlugin ],
        initialView: 'dayGridMonth',
        locale: 'it',
        themeSystem: 'bootstrap',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth timeGridWeek timeGridDay'
        },
        buttonText: {
            today: 'oggi',
            month: 'mese',
            week: 'settimana',
            day: 'giorno',
            list: 'lista'
        }
    };

    const addEvent = () => showModal.value = true

    const closeModal = (e) => {
        const canClose = [
            document.querySelector('.modal-backdrop'),
            document.querySelector('.close-modal')
        ]
        if (canClose.includes(e.target)) showModal.value = false
    }

    return {
        addEvent,
        closeModal,
        showModal,
        calendarOptions
    }

}