### options api的弊端

- 在vue2中，编写组件的方式是Options API：
    - options api的一大特点就是在对应的属性中编写对应的功能模块
    - 比如`data定义数据`，`methods中定义方法`、`computed中定义计算属性`、`watch中监听属性改变`，也包括`生命周期钩子`
    
- 但是这种代码有一个很大的弊端：
    - 当实现某个功能时，这个功能对应的代码逻辑会被拆分到各个属性中；
    - 当组件变得更大、更复杂时，逻辑关注点的列表就会增长，那么同一个功能的逻辑就会被拆分得很分散；
    - 尤其对于那些一开始没有编写这些组件的人来说，这个组件的代码是难以阅读和理解的
    
- vue3中使用了setup函数
    - 它其实就是组件的另外一个选项
    - 这个选项强大到可以用它来替代之前所编写的大部分其他选项，比如methods、computed、watch、data、生命周期等
  
  setup函数的参数：
  - 第一个参数：props
    - 它其实就是父组件传递过来的属性，会被放到props对象中，如果需要在setup函数中使用，那么可以直接通过props参数获取
    - 对于定义props的类型，还是和之前的规则一样，在props选项中定义
    - 在template中依然可以正常去使用props中的属性
    - 如果在setup中想要使用props，不可以通过this去获取
  - 第二个参数：context
    - 也称之为SetupContext，包含三个属性
      - attrs：所有的非prop的attribute
      - slots：父组件传递过来的插槽
      - emit：当组件内部需要发出事件时会泳道emit（因为不能访问this，所以不可以通过this.$emit发出事件）
  
  setup作为一个函数，可以有返回值：
  - 返回值可以在模板template中被使用
  - 也就是说可以通过setup的返回值来替代data选项