<!--
 * @Description: 
 * @version: 
 * @Author: pascal-cao
 * @Date: 2020-12-03 15:02:44
 * @LastEditors: pascal-cao
 * @LastEditTime: 2020-12-03 16:57:25
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Test :childProp="'我是父组件传过来的值'"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Test from './components/test.vue'

export default {
  name: 'App',
  components: {
    Test
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
