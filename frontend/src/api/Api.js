import axios from "axios";

const Api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api',
})

export default Api