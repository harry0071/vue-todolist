<template>
  <form>
    <h1>注册</h1>
    <small>已有账号?👉
      <router-link to="login">登录</router-link>
    </small>
    <div class="form-group">
      <label>用户名</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>手机</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>验证码</label>
      <div class="input-group">
        <input type="text" class="form-control">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">发送验证码</button>
        </span>
      </div>
    </div>
    <div class="form-group">
      <label>密码</label>
      <input type="password" class="form-control">
    </div>
    <div class="form-group">
      <button class="btn btn-primary" type="submit">注册</button>
    </div>
  </form>
</template>

<style scoped>
  h1{
    display: inline-block;
  }
</style>
