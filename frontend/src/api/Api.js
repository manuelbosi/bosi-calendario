import axios from "axios";
import * as NProgress from "nprogress/nprogress";
import User from "./User";

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
    if ([401,419].includes(error.response.status)) User().logout()
})

export default Api