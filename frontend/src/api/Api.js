import axios from "axios";
import * as NProgress from "nprogress/nprogress";

const Api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api',
})

// before a request is made start the nprogress
Api.interceptors.request.use(config => {
    NProgress.start()
    return config
})

// before a response is returned stop nprogress
Api.interceptors.response.use(response => {
    NProgress.done()
    return response
})

export default Api