<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <Footer />
  </div>
</template>
<script>
  import Navbar from 'cp/Navbar.vue';
  import Footer from 'cp/Footer.vue';
  export default {
  	components: {
  		Navbar,
  		Footer
  	}
  }
</script>
<style>
  html, body {
      height: 100%;
  }

  img {
      max-width: 100%;
      display: block;
  }

  ul {
      list-style: none;
  }

  hr {
      margin-bottom: 6px;
  }
  #app{
  	min-height: 100%;
  	position: relative;
  }
  footer{
  	position: absolute;
  	bottom: 0;
  	width: 100%;
  }
  form{
  	max-width: 500px;
  	margin: 0 auto;
  }
</style>
