<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  padding-top: 46px;
}
.van-nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  .van-icon {
    color: #969799;
    font-size: 20px;
  }
}
</style>
