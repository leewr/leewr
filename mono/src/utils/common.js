export function isEmpty(value) {
    if (value == null) {
        return true
    }

}

export function getCookie(name) {
    let arr, 
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null
}

export function apiStatusCheck (props, res, callback) {
    if (res.status === 200) {
        if (res.success) {
            callback && typeof callback === 'function' && callback()
        }
    } else if (res.status === 403) {
        props.history.push('/login')
    }
}