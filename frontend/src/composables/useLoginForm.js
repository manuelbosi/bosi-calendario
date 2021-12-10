import Api from "../api/Api";
import store from "../store";
import router from "../router";
import {reactive} from "vue";
import CsrfToken from "../api/CsrfToken";

export default function useLoginForm() {

    const form = reactive({email: null, password: null})

    const login = async (form) => {
        await CsrfToken().getCookieToken()
        Api.post('/login', form).then((res) => {
            console.log(res)
            if (res.status === 201) {
                store.dispatch('setAuthenticated', true)
                router.push({name: 'Dashboard'})
            }

        }).catch(err => {
            console.log(err)
        })
    }

    return {
        form,
        login
    }
}