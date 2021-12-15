import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import {reactive, ref} from "vue";
import Api from "../api/Api";
import useCustomers from "./useCustomers";

export default function useCalendar() {

    const showModal = ref(false)
    const { customers, getCustomers } = useCustomers()

    const calendarOptions = reactive({
        plugins: [ dayGridPlugin, timeGridPlugin ],
        initialView: 'dayGridMonth',
        locale: 'it',
        themeSystem: 'bootstrap',
        defaultAllDay: true,
        dayMaxEventRows: true,
        views: {
            dayGridMonth: {
                dayMaxEventRows: 4 // adjust to 6 only for timeGridWeek/timeGridDay
            }
        },
        moreLinkContent: (args) => {
            return `+${args.num} lavori`
        },
        moreLinkClick: (info) => {
            console.log(info)
        },
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
        },
        events: []

    });

    const getEvents = () => {
        Api.get('event').then(res => {
            calendarOptions.events = res.data.data
        })
    }

    const openAddEventModal = () => {
        getCustomers()
        showModal.value = true
    }

    const closeModal = (e) => {
        const canClose = [
            document.querySelector('.modal-backdrop'),
            document.querySelector('.close-modal')
        ]
        if (canClose.includes(e.target)) showModal.value = false
    }

    return {
        customers,
        getEvents,
        openAddEventModal,
        closeModal,
        showModal,
        calendarOptions
    }

}