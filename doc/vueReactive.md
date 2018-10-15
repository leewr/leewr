## vue响应式数据理解

### 实现原理
#### 观察者模式理解
首先需要对发布订阅和观察者模式有所了解。[发布-订阅vs观察者模式]('http://baidu.com')。

观察者模式是一种<code>一对多</code>关系解耦的行为设计模式。主要设计两个角色：观察目标、观察者

#### vue中的依赖收集
首先看下官方的示意图。
![avatar](https://cn.vuejs.org/images/data.png)

组件渲染函数render将组件转换成虚拟dom,在这个过程中使用组件中的data getter 数组完成依赖收集的过程，实例化Watcher对象并保存在数据dep.sub的队列中。当数据响应set重新赋值的时候响应setter方法，观察目标dep.notify()通知观察者，并响应重新渲染re-render。

vue实现依赖收集有三个类 <code>Dep</code>: 扮演观察目标的角色。每个数据都有一个Dep类的实例，内部有subs（subscribers）队列，存储这本数据依赖的观察者，调用dep.notify()通知观察者。 Wacther 类扮演观察者角色，对观察者函数进行包装，如 render() 数，被包装成 Watcher的实例。  Observer： 辅助的可观察类， 数组/对象 通过defineProtype转化为可观测数据。

#### 依赖收集与观察者模式
上述依赖收集的场景，正是一对多的方式。一个数据变更了，对应到用到这个数据的地方都能做出处理。
那么vue中观察者是谁？观察对象是谁？
很显然依赖的数据，data中的数据是观察目标，视图、计算属性、监听器（watch）这些是观察者。


#### 响应式defineProperty实现原理
defineProperty如何实现数据的拦截。
```
```

### 源码角度理解vue的依赖收集
#### 一个例子
```
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
```
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
defineReactive 定义在当前js文件中。defineReactive核心代码如下
```
const dep = new Dep() //实例Dep对象
...
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
Dep类定义在，
#### new Watcher创建观察者
new Watcher实例化对象创建观察者。下面看类Watcher的构造函数。
```
```
查看Watcher 

#### initData开始
#### observe函数、Observer类