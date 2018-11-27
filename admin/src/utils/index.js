export default {
  getCookie: (name) => {
    let arr, 
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null
  }
}
