import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import {ref} from "vue";

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

    const addEvent = () => {
        console.log("opening modal....")
        showModal.value = true
    }

    return {
        addEvent,
        showModal,
        calendarOptions
    }

}