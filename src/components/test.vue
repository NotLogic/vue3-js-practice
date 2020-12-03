<!--
 * @Description: 
 * @version: 
 * @Author: pascal-cao
 * @Date: 2020-12-03 16:05:35
 * @LastEditors: pascal-cao
 * @LastEditTime: 2020-12-03 17:33:53
-->
<template>
  <div class="hello">
    <div>定义:{{ name }}</div>
    <div>ref函数，用于创建一个响应式数据，当数据发生改变时，Vue会自动更新UI：<input type="text" v-model="mycount"></div>
    <div>reactive()函数接收一个普通对象，返回一个响应式的数据对象：{{reactiveTest}}</div>
    <div>computed()函数用来创造计算属性，和过去一样，它返回的值是一个ref对象。 里面可以传方法，或者一个对象，对象中包含set()、get()方法：{{computedReadOnly}}</div>
    <button @click="changeMyCount">点击</button>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, isRef, toRefs, computed, watch } from 'vue';
export default defineComponent({
  name: 'HelloWorld',
  setup(props, context) {
    //1.
      console.log(props);
      console.log(context)
    // 2.ref函数，用于创建一个响应式数据，当数据发生改变时，Vue会自动更新UI
    const mycount = ref(10);
    // isRef() 用来判断某个值是否为 ref() 创建出来的对象
    console.log('isRef() 用来判断某个值是否为 ref() 创建出来的对象:'+isRef(mycount)); // true
    // 在js中获取ref 中定义的值, 需要通过value属性
    console.log('js中获取ref 中定义的值, 需要通过value属性:'+mycount.value);
    // 3.reactive() 函数接收一个普通对象，返回一个响应式的数据对象, 想要使用创建的响应式数据也很简单，创建出来之后，在setup中return出去，直接在template中调用即可
    let state = reactive({
      reactiveTest: 996
    });
    // 4.computed()函数用来创造计算属性，和过去一样，它返回的值是一个ref对象。 里面可以传方法，或者一个对象，对象中包含set()、get()方法
    // const computedReadOnly = computed(() => mycount.value + 'eeee');
    const computedReadOnly = computed({
        get() {
            return +mycount.value+1
        },
        set(value) {
            console.log(value)  //  输出新修改的值
            return mycount.value = value - 1
        }
    })
    // 5.watch监听用reactive声明的数据源
    watch(
      () => state.reactiveTest,
      (newVal, oldVal) => {
        console.log('watch监听后的新值：'+ newVal); // 100
        console.log('watch监听前的值：'+ oldVal); // 10
      }
    )
    state.reactiveTest = 99999966666;
    // 6.watch监听用ref声明的数据源
    watch(mycount, () => {
        console.log('watch监听用ref声明的数据源:', mycount.value)
    })
    // 
    // const changeMyCount = ()=>{
    //     console.log(11111);
    //     // mycount.value = mycount.value + 2 ;
    // }
    
    
    return {
       name: 'testffff455',
       mycount,
       ...state,
    //    ...toRefs(state), //toRefs() 函数可以将 reactive() 创建出来的响应式对象，转换为普通的对象，只不过，这个对象上的每个属性节点，都是 ref() 类型的响应式数据
       computedReadOnly
    }
  }
})
</script>

<style scoped>

</style>
