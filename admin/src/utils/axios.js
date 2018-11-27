import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import Config from '../config/'
import store from '../store'
import utils from './index'

const service = axios.create({
    baseURL: Config.apiUrl + '/' + Config.apiPrefix, // api的base_url
    headers: {
        'Accept': '*/*',
        'x-csrf-token': utils.getCookie('csrfToken')
    },
    timeout: Config.timeout
})

// request拦截器
service.interceptors.request.use(
        config => {
            return config
        },
        error => {
            // Do something with request error
            Promise.reject(error)
        }
)

// respone拦截器
service.interceptors.response.use(
        response => {
            /**
             * code为非20000是抛错 可结合自己业务进行修改
             */
            const res = response
            if (res.status !== 200) {
                Message({
                    message: res.message,
                    type: 'error',
                    duration: 5 * 1000
                })
                return Promise.reject('error')
            } else {
                return response.data
            }
        },
        error => {
            // console.log('err' + error) // for debug
            Message({
                message: error.message,
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(error)
        }
)

export default service



