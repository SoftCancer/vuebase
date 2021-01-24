<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--通过 router 将组件 显示在 router-view 标签处。 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 解决子组件中 height: 100% 不生效问题 */
html,body,#app{
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

</style>
