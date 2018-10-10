<template>
  <form>
    <h1>登录</h1>
    <small>没有账号?👉
      <router-link to="signup">注册</router-link>
    </small>
    <div class="form-group">
      <label>用户名</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>密码</label>
      <input type="password" class="form-control">
    </div>
    <div class="form-group">
      <button class="btn btn-primary" type="submit">登录</button>
    </div>
  </form>
</template>
<style scoped>
  h1 {
      display: inline-block;
  }
</style>
