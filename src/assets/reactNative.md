``$data``

Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象属性的访问。

```javascript
 console.log(this.text === this.$data.text);
 console.log(this.text === this.$data.text); 
 console.log(this.text === this.$data.text); 
 console.log(this.text === this.$data.text); 
```

``$props`` 

当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象属性的访问,在子组件上使用

<!--more-->

Vue 实例使用的根 DOM 元素。在子组件上就是子组件的根DOM元素

``$options``

用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处,直接修改$options.data的值不会更改数据，也不会触发视图渲染

``$parent``

父实例，如果当前实例有的话。

``$root``

当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。

```javascript
const app = new Vue({})
this.$root === this.$root.$children[0].$root  // true
this.$root === app  //true
```

``$children``

当前实例的直接子组件。**需要注意 $children 并不保证顺序，也不是响应式的。**如果你发现自己正在尝试使用 `$children` 来进行数据绑定，考虑使用一个数组配合 `v-for` 来生成子组件，并且使用 Array 作为真正的来源。

``$slots``