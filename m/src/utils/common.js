export function isEmpty(value) {
    if (value == null) {
        return true
    }
}

export function getCookie(name) {
    let arr, 
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    return (arr === document.cookie.match(reg)) ? unescape(arr[2]) : null
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

export function webpInit(doc) {
    function addRootTag() {
        let className = doc.documentElement.className
        let name = className ? ' webpa' : 'webpa'
        doc.documentElement.className += name 
    }
    if (/webpAvaile=true/.test(document.cookie)) {
        console.log(document.cookie)
        window.webpa = true
        addRootTag();
    }
    // if (!/webpAvaile=true/.test(document.cookie)) {
    //     var image = new Image();
    //     image.onload = function() {
    //         if (image.width == 1) {
    //             addRootTag();
    //             // document.cookie = "webpAvaile=available; max-age=31536000; domain=";
    //         }
    //     };
    //     // 一张支持alpha透明度的webp的图片，使用base64编码
    //     image.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==';
    // } else {
    //     addRootTag();
    // }
}

/*
* 图片格式处理
* src 图片地址 w 宽度 h 高度 f 是否强制转换
*/
export function webpExt(src, w, h, f) {
    f ? f = 'f' : f = ''
    if (src) {
        if (global.constants.env === 'prod') {
            const  imgUrlName = src.split('.')
            const webp = global.constants.webpa ? '.webp' : ''
            src = `${global.constants.ImageHost}${src}_${w}x${h}${f}.${imgUrlName[1]}${webp}`
        }
    }
    return src
}


