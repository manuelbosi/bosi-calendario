import {ref} from "vue";
import Api from "../api/Api";

export default function useCustomers() {

    const customers = ref([])

    const getCustomers = () => {
        Api.get('/customers').then(res => {
            customers.value = res.data.data
        })
    }

    return {
        customers,
        getCustomers
    }

}