## 实现异步队列总结

在leewr项目中有一个爬虫的模块，定时任务抓取文章的内容。整个过程大概是这样的，遍历一个数组，然后获取到数组中的内容，发送一个新的请求拿到详情数据。一组完成后再调用另一个数组中的内容，不断重复这个过程，直到数据抓取完成。对于爬虫高手绕道，下面是我再实现中遇到的问题就是异步队列的问题。就是在一个异步任务完成后再进行下一个异步任务。

参见 [JS如何实现一个异步队列来按顺序执行函数？](https://segmentfault.com/q/1010000005662975) 中的回答。

项目中：
假设<code>func</code>都是能够返回Promise的异步函数，然后写一个asyn方法。

``` js
var asyn = function(arr, cb) {
    arr.reduce((p, func) => p.then(func), Promise.resolve())
        .then(cb)
}
```

测试代码
``` js
var fun1 = function () {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('func1')
            resolve()
        }, 500)
    })
}
var fun2 = function () {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('func2')
            resolve()
        }, 300)
    })
}
var fun3 = function () {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('func3')
            resolve()
        }, 600)
    })
}
asyn([func1, func2, func3], function () {
    console.log('done')
})
```

将回答中的几个代码都调试了一下，就发现只有reduce + promise实现了异步队列功能。可能大佬对于这些基础问题很不屑解释，但对很多人来写测试用例真的非常重要。有了测试结果，才知道代码是否正确，并且非常直观。
