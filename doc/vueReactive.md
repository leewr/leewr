# vue响应式数据理解

## 前言
#### 观察者模式理解
首先需要对发布订阅和观察者模式有所了解。[发布-订阅vs观察者模式]('http://baidu.com')。

观察者模式是一种<code>一对多</code>关系解耦的行为设计模式。主要涉及两个角色：观察目标、观察者

### 简化版的原理理解
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
    a: 1
    b: 2
}
```
我们需要对获取a的是时候收集依赖a的观察者，修改a的时候需要通知观察者进行更新。对应的代码就是get的时候执行 dep.depend() set 的时候执行dep.notify()。这里有一个解决办法就是 Object.defineProperty(),它可以定义属性的get 和 set 方法。
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


## 源码角度理解vue的依赖收集
从源码角度逐行来看源码，首先一点就是从github上下载到vue源码。这点非常关键。

#### vue源码流程
生命周期，执行过程，找到核心源码地方。

##### vue实现依赖收集有三个类：
 核心源码在```core/observer ```中
 <code>Dep</code>: 扮演观察目标的角色。每个数据都有一个Dep类的实例，内部有subs（subscribers）队列，存储这本数据依赖的观察者，调用dep.notify()通知观察者。 <code>Wacther</code>: 类扮演观察者角色，对观察者函数进行包装，如 render() 数，被包装成 Watcher的实例。 
 <code>Observer</code>： 辅助的可观察类， 数组/对象 通过defineProtype转化为可观测数据。

#### 依赖收集与观察者模式
上述依赖收集的场景，正是一对多的方式。一个数据变更了，对应到用到这个数据的地方都能做出处理。
那么vue中观察者是谁？观察对象是谁？
data中的数据是观察目标，视图、计算属性、监听器（watch）这些是观察者。

#### 一个例子
```js
var vm = new Vue({
	el: '#app',
	data: {
		a: 1,
		b: [1,2, 3],
		c: {
			d: 4
		}
	}
})
```
首先看vue 数据初始化后变成了什么样子？
图片
```

```
查阅源码，数据初始化过程在<code>core/instance/state.js</code>中<code>initData</code>函数。
```js
function initData (vm: Component) {
  let data = vm.$options.data
	...
  while (i--) {
    const key = keys[i]
    if (process.env.NODE_ENV !== 'production') {
     ...
    }
    if (props && hasOwn(props, key)) {
      ...
    } else if (!isReserved(key)) {
      proxy(vm, `_data`, key)
    }
  }
  // observe data
  observe(data, true /* asRootData */)
}
```
我们看到最核心的地方observe(data, true /* asRootData */),observe又是定义在<code>observer/index</code>中,observe返回了一个实例化Observe的ob对象。Observer类区别传入的数据类型分别采用不同的方式创建响应式数据。看到Observe类中调用的defineReactive(obj, keys[i])。这里就是创建响应式的数据的核心函数了。
defineReactive 定义在当前js文件中。defineReactive核心代码如下，注意其中的new Dep() 实例化了dep对象，在get中形成闭包。下面看Dep类中都做了哪些事情。
```js
const dep = new Dep() //实例Dep对象

Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend() //收集数据依赖
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      const value = getter ? getter.call(obj) : val
      ...
      childOb = !shallow && observe(newVal)
      dep.notify() // 响应依赖通知
    }
  })
```

查看Dep类
Dep类定义在，dep.js中。Dep代码非常简单。构造函数，id、subs、addSub、removeSub、depend、notify等熟悉和方法。dep.depend()在执行依赖收集的时候将dep实例保存在subs数组中。前面有提到，data初始化后生成了__ob__ 属性，__ob__属性中保存的 dep对象、value，vmCount。__ob__ 属性是在Observe 构造函数是def(value, '__ob__', this) 添加的。
```js
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = []
  }

  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    ...
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}
```
下面我们来看观察者
#### new Watcher创建观察者
new Watcher实例化对象创建观察者对象。观察者在get组件中的data的时候响应defineReactive中get方法，依赖被收集。我们看源码中initLifecycle函数，定义在<code>instance/init</code> 然后根据引入打开 lifecycle.js,这个vue处理组件生命周期的文件，看到mountComponent函数，在mountComponent中 实例 Watcher 对象。
```js
new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
```

查看Watcher的构造函数,Wachter接收vm实例、wxpOrFn要观察的表达式、cb当被观察值变化时的回调函数，以及传递给当前观察者对象的选项options，以及一个布尔值，是否是渲染函数的观察者。
看到上述创建渲染渲染函数观察者实例对象时传递了全部得五个参数，vm当前组件的实例对象，第二个参数<code>updateComponent</code>就是被观察者的目标，他是一个函数、第三个是noop空函数，第四个是一个对象，包含了before函数。看到构造函数中
```js
this.value = this.lazy ? undefined : this.get()
```
函数会运行到this.get()方法，最后来看get方法
```js
get () {
  pushTarget(this)
    let value
    const vm = this.vm
    try {
      value = this.getter.call(vm, vm)
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`)
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value)
      }
      popTarget()
      this.cleanupDeps()
    }
    return value
}
```
get方法首先将运行pushTarget，pushTarget 是什么可，可以看到Dep类中，pushTarget 的定义。
```js
export function pushTarget (_target: ?Watcher) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}
```
pushTarget是将Watcher 目标对象push进targetStack数组中。再看get，get通过<code>this.getter.call(vm,vm)</code>获得value值。this.getter 是构造函数传进来的要观察的表达式。

其实这里整个响应式过程已经出来了。
vue中定义的数据通过遍历<code>defineReactive</code>通过defineProperty中的set和get方法对数据进行劫持，并在get的时候调用dep.depend()收集依赖，在set中调用dep.notify()更新所有的依赖，达到数据更新的目的。中notify()触发收集Watcher中的expFn的过程。这个过程中虽然还有很多地方的细节，但大致原理是如此。


