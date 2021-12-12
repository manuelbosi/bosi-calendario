import router from "../router";
import store from "../store";
import {reactive} from "vue";
import Api from "../api/Api";
import CsrfToken from "../api/CsrfToken";

export default function useUser() {

    const form = reactive({email: null, password: null})

    const login = async () => {
        await CsrfToken().getCookieToken()
        Api.post('/login', form).then((res) => {
            if (res.status === 201) {
                store.dispatch('setAuthenticated', true)
                router.push({name: 'Dashboard'})
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const logout = () => {
        Api.post('/logout').then(res => {
            if (res.status === 200) {
                store.dispatch('setAuthenticated', false)
                store.dispatch('setAuthenticatedUser', {})
                router.push({name: 'Home'})
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const getUser = async () => {
        await Api.get('/user').then(res => {
            let user = {}
            for(const k in res.data) user[k]=res.data[k];
            store.dispatch('setAuthenticatedUser', user)
        })
    }

    return {
        form,
        login,
        logout,
        getUser
    }

}
