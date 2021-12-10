// import router from "../router";
// import store from "../store";
import Api from "./Api";
import router from "../router";

const User = () => {

    const logout = () => {
        Api.post('/logout').then(res => {
            if (res.status === 200) router.push({name: 'Home'})
        }).catch(err => {
            console.log(err)
        })
    }

    return {
        logout
    }

}
export default User