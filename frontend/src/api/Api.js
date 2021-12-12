import axios from "axios";
import * as NProgress from "nprogress/nprogress";
import useUser from "../composables/useUser";

const { logout } = useUser();

const Api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api',
})

// Actions before request was made
Api.interceptors.request.use(config => {
    NProgress.start()
    return config
})

// Actions after request was made
Api.interceptors.response.use(response => {
    NProgress.done()
    return response
}, (error) => {
    if ([401,419].includes(error.response.status)) logout()
})

export default Api