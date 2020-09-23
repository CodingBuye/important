import axios from 'axios'
import config from './config'
import Cookies from 'js-cookie'
import router from "@/router"

export default function $axios(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: config.baseUrl,
            headers: config.headers,
            timeout: config.timeout,
            withCredentials: config.withCredentials
        });

        // request请求拦截器
        instance.interceptors.request.use(
            config => {
                let token = Cookies.get('token');
                if(token) {
                    config.headers.token = token;
                } else { // 重定向到登录页面
                    router.push("/login")
                }
                return config
            }, error => {
                return Promise.reject(error)
            }
        );

        // 响应拦截器
        instance.interceptors.response.use(
            response => {
                return response.data
            }, error => {
                return Promise.reject(error)
            }
        );

        // 请求处理
        instance(options).then(res => {
            resolve(res)
            return false;
        }).catch(error => {
            reject(error);
        })
    })
}