import axios from "axios";
import {config} from "process";

const BASE_URL = "https://longo-lss.sphinx-demo.com/api";

const instance = axios.create({
    baseURL: BASE_URL
});

instance.interceptors.request.use(
    async config => {
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `Bearer ${await localStorage.getItem('userToken')}`
            }
        }
    }, error => Promise.reject(error),
);

export default instance;
