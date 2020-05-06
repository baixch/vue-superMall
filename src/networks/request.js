import axios from "axios"

export function request(config) {
    const instance = axios.create({
        //106.54.54.237   152.136.185.210 "http://152.136.185.210:8000/api/n3" 
        baseURL: "http://152.136.185.210:8000/api/n3",
        timeout: 5000,
    });

    instance.interceptors.request.use(config => {
        return config
    }, err => {
        return Promise.reject(err)
    });
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        return Promise.reject(err)
    })

    return instance(config)
}