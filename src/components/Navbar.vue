<template>
  <header>
    <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <span class="icon-bar" v-for="n in 3"></span>
          </button>
          <a class="navbar-brand" href="/">撕逼头条</a>
          <p class="navbar-text">大家一起撕起来</p>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li :class="{active : $route.name==='index'}"><router-link to="/">首页</router-link></li>
            <li><a href="#">国内</a></li>
            <li><a href="#">国际</a></li>
            <li><a href="#">数码</a></li>
            <li><a href="#">体育</a></li>
            <li><a href="#">社会</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li :class="{active : $route.name==='login'}"><router-link to="login">登录</router-link></li>
            <li :class="{active : $route.name==='signup'}"><router-link to="signup">注册</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </header>
</template>
<script>
  export default {
  }
</script>
<style scoped>
</style>
