export function isEmpty(value) {
  if (value == null) {
    return true
  }
}

export function getCookie(name) {
  let arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null
}

export function apiStatusCheck(props, res, callback) {
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
    addRootTag()
  }
}

/*
 * 图片格式处理
 * src 图片地址 w 宽度 h 高度 f 是否强制转换
 */
export function webpExt(src, w, h, f) {
  f ? (f = 'f') : (f = '')
  if (src) {
    if (global.constants.env === 'prod') {
      const imgUrlName = src.split('.')
      const webp = global.constants.webpa ? '.webp' : ''
      src = `${global.constants.ImageHost}${src}_${w}x${h}${f}.${
        imgUrlName[1]
      }${webp}`
    }
  }
  return src
}

export function dateFtt(date, fmt) {
  //author: meizz
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  }
  if (arguments.length === 1) {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

export function parseParam(param, key) {
  var paramStr = ''
  if (
    param instanceof String ||
    param instanceof Number ||
    param instanceof Boolean
  ) {
    paramStr += '&' + key + '=' + encodeURIComponent(param)
  } else {
    console.log(param)
    for (let i in param) {
      var k =
        key === null
          ? i
          : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
      paramStr += '&' + parseParam(this, k)
    }
  }
  return paramStr.substr(1)
}
