import Api from "./Api";
import router from "../router";
import store from "../store";

const User = () => {

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

    return {
        logout
    }

}
export default User