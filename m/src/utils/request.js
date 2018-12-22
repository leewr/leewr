import Axios from 'axios'
import { getCookie } from '../utils/common'
const instance = Axios.create({
    timeout: 5000,
    headers: {'x-csrf-token': getCookie('csrfToken')}
})
export default {
    get (url, params) {
        console.log(params)
        return new Promise((resolve, reject) => {
            instance.get(url, { params: params })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
        });
    },
    post (url, params) {
        getCookie('csrfToken')
        return new Promise((resolve, reject) => {
            instance.post(url, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err);
            });
        });
    }
};

/**
 * 处理api接口状态跳转
 * @param {*} props 
 * @param {*} res 
 * @param {*} callback 
 */
export function apiStatusCheck (props, res, callback) {
    if (res.status === 200) {
        if (res.success) {
            callback && typeof callback === 'function' && callback()
        }
    } else {
        switch (res.status) {
            case 401:
            case 403:
                props.history.push('/login')
                break
            default:
                break
        }
    }
}
