import Axios from 'axios';

export default {
    get (url, params) {
        console.log(params)
        return new Promise((resolve, reject) => {
            Axios.get(url, { params: params })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
        });
    },
    post (url, params) {
        return new Promise((resolve, reject) => {
            Axios.post(url, params)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
        });
    }
};