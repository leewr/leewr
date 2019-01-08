import fetch from 'isomorphic-fetch'

export function getArticleList() {
  return fetch('http://localhost:7001/api/v1/topics')
    .then(response => response.json())
    .then(res => {
      console.log(res)
      return res.data
    })
}

// import Axios from '../utils/request.js'

// export function getArticleList(index) {
//     return Axios.get('http://localhost:7001/api/v1/topics', {page: index})
//     .then(res => {
//         return res.data
//     }).catch(err => {
//         console.log(err)
//     })
// }
