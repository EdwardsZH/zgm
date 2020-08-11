<template>
  <div id="app">
    <h2>zgm - test</h2>
    <h3>--------------------- 测试 -------------------------  </h3>
    <ul>
      <li class='home-li'><router-link to="/native">打开 native 调试页面</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  mounted() {
    console.log()
  },
  methods: {

  }
}
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-bottom: 80px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .home-li {
    display: inline-block;
    margin: 5px 10px;
    width: 90%;
    color: #42b983;
  }

  a{
    color: pink;
    color: #42b983;
  }
</style>
