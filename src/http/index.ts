import axios, { AxiosInstance } from "axios";

const baseURL = process.env.VUE_APP_BASE_URL;

const clienteHttp: AxiosInstance = axios.create({
    baseURL: baseURL
})

export default clienteHttp;