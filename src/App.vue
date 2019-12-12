<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img id="logo" src="../public/logo.png" alt="logo">
          <router-link to="/" class="navbar-brand" style="padding: 25px 25px 25px 55px; font-size: 25px;">用户管理系统</router-link>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/" style="color: #004445; padding: 25px 25px; font-size: 18px;">主页</router-link></li>
            <li><router-link to="/about" style="color: #004445; padding: 25px 25px; font-size: 18px;">关于我们</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/add" style="color: #004445; padding: 25px 0; font-size: 18px;">添加用户</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.navbar{
  background: #f6c89f;
}
.navbar-brand{
  color: #39375b !important;
  font-weight: bold;
}
.container{
  position: relative;
}
#logo{
  width: 28px;
  height: 28px;
  position: absolute;
  top: 21px;
}
</style>
