## vue响应式原理理解
### vue的一个例子
```js
<div id="app">
    <div>Price: {{price}}</div>
    <div>Total:{{price * quantity}}</div>
    <div>Taxes: {{totalPirceWithTax}}</div>
</div>
<script>
var vm = new Vue({
    el: '#app',
    data: {
        pricd: 2,
        quantity: 10
    },
    computed: {
        totalPriceWithTax() {
            return this.price * this.quantity * 1.03
        }
    }
})
</script>
```
vue根据data的值计算出totalPirceWithTax的值，并在页面中渲染，当price中的值变化了，计算属性会再次计算totalPirceWithTax的值，并对页面进行重绘显示。所以我们不需要关心如何更新页面的显示，只需要关心数据的变化和操作。

下面我们来看代码。
```js
var price = 5
var quantity = 2
var total = price * quantity
console.log(total) // 10
price = 10
console.log(total) // 10
```
当我们手动修改price的值的时候，时候total的值并不会自动更新。这时候我们可以手动调用total的计算。
```js
var price = 5
var quantity = 2
var total
calc () => {
    total = price * quantity 
    console.log(total) // 10
}
calc() // 10
price = 10
calc() // 20
```
这个时候当我们手动调用calc的时候total进行了更新。另外我们可以通过存储我们要调用的这段代码，当需要执行更新的时候运行这段代码就实现了更新。
```js
let price = 5
let quantity = 2
let total = 0
let target = null
target = () => { total = price * quantity}
record() // 通过调用record存储这个函数
target()

let storge = []
record () => {
    storge.push(target)
}

```
当我们想运行他时，可以通过一个replay函数来执行所记录的所有内容。
```js
replay () => {
    storge.forEach( run => run())
}
```

然后我们改变price的值后再进行更新。
```js
price = 20
cosole.log(total) // 10
record()
cosole.log(total) // 40
```
这个时候就实现了数据的变化。
上面过程的完成代码为
```js
let price = 5
let quantity = 2
let total = 0
let target = null
let storage  = [] // 存储目标函数
target = () => { total = price * quantity; console.log(total)}
record() // 通过调用record存储这个函数
target() // 10

function record () {
    storage.push(target)
}
function replay () {
    storage.forEach( run => run())
}
price = 20
replay() // 40
```

下面我们继续将记录targe的代码进行封装，这是一种实现观察者模式的依赖类。

```js
class Dep {
    constructor () {
        this.subs = [] //代替storage
    }
    depend () {
        if (target && !this.subs.includes(target)) {
            this.subs.push(target)
        }
    }
    notify () {
        this.subs.forEach(sub => sub()) // 运行观察者
    }
}
```

我们将sub代替了storage,下面运行的代码就是如下
```js
class Dep{
    constructor () {
        this.subs = [] //代替storage
    }
    depend () {
        if (target && !this.subs.includes(target)) {
            this.subs.push(target)
        }
    }
    notify () {
        this.subs.forEach(sub => sub()) // 运行观察者
    }
}
const dep = new Dep()
let price = 5
let quantity = 2
let total = 0
let target = () => { total = price * quantity; console.log(total) }
dep.depend(); // 收集依赖
target() // 运行并得到total 10
price  = 20 // 修改数值
console.log(total) // 此时数值仍旧为 10
dep.notify() // 调用subs里面的target 40
```
当我们可以继续对匿名函数进行封装，不是不是调用代码
```js
let target = () => { total = price * quantity; console.log(total) }
dep.depend(); // 收集依赖
target() 
```
我们抽象为观察者。
```js
watcher (() => {
    total = price * quantity; console.log(total)
})

// 对watcher函数的定义
function watcher (myfn) {
    target = myfn
    dep.depend()
    target()
    target = null
    
}
```
我们定义一个
```js
data = {
    a:
    b:
}
```
我们需要对获取a的是时候收集依赖a的观察者，修改a的时候需要通知观察者进行更新。对于的代码就是get的时候执行 dep.depend() set 的时候执行dep.notify()。这里有一个解决办法就是 Object.defineProperty(),它可以定义属性的get 和 set 方法。
```js
let data = { price: 5, quantity: 2}
Object.defineProperty(data, 'price', {
    get() {
        console.log(`I am get`)
    },
    set(newVal) {
        console.log(`I changed ${newVal}`)
    }
})
data.price // I am get
data.price = 20 // I changed
```
通过上面的代码我们可以看到，当获取price的值的时候，get函数被触发，设置新值的时候set函数被触发。
我们通过defineProperty改写上面的例子。

```js
let data = {price: 5, quanity: 2}
Object.keys(data).forEach(key => {
    let internalValue = data.price
    Object.defineProperty(data, 'price', {
        get() {
            console.log(`I am get`)
            return internalValue
        },
        set(newVal) {
            console.log(`I changed ${newVal}`)
            internalValue = newVal
        }
    })
})
total = data.price * data.quanity
data.price = 20
```
控制台输出
```
I am get price
I am get price
I am get quanity
setting price 20
```
结合上面的想法，当我们price get的时候就调用dep.depend() 保存当前的target
price set 的时候就调用 dep.notify(), 运行subs中所有的targets。

```js
let data = {price: 5, quanity: 2}
let target = null
class Dep{
    constructor () {
        this.subs = [] //代替storage
    }
    depend () {
        if (target && !this.subs.includes(target)) {
            this.subs.push(target)
        }
    }
    notify () {
        this.subs.forEach(sub => sub()) // 运行观察者
    }
}
Object.keys(data).forEach(key => {
    let internalValue = data[key]
    const dep = new Dep()
    Object.defineProperty(data, key, {
        get() {
            dep.depend()
            return internalValue
        },
        set(newVal) {
            internalValue = newVal
            dep.notify()
        }
    })
})

function watcher (myfn) {
    target = myfn
    target()
    target = null
}

watcher( () => {
    data.total = data.price * data.quanity
})
```
然后我们再控制台获取data.price 和设置price的值。
```
data.price
5
data.price = 20
20
data.total
40
```
至此我们已经了解了vue总数据响应式的原理。下面看下vue官方的示意图。
![avatar](https://cn.vuejs.org/images/data.png)

数据经过data中的getter收集到依赖，在稍后的setter中他通知监听器实现对组建的重新渲染。

最后总结：
vue中每个数据创建了一个dep实例，通过dep.depend()收集到了所以依赖，并通过dep.notify()通知所有依赖完成更新。
通过创建watcher来监听正在运行的代码，将其保存在target中，并添加为依赖项。
vue中数据通过defineProperty中get/set分别完成dep.depend() 和dep.notify()。
接下来我们将从源码的角度来分析vue中响应式所做的更多的处理。




