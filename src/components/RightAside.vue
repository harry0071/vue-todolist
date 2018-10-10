<template>
  <aside class="col-sm-3">
    <div class="panel panel-info">
      <div class="panel-heading">
        相关推荐
      </div>
        <ul class="panel-body">
          <li v-for="n in 4">
            <a href="#">Lorem ipsum dolor sit amettetdts dfsf consectetur adipisicing</a> <hr>
          </li>
        </ul>
    </div>
    <div class="panel panel-success">
      <div class="panel-heading">
        广告
      </div>
        <ul class="panel-body">
          <li v-for="n in 6">
            <a href="#">Lorem ipsum dolor sit amettetdts dfsf consectetur adipisicing</a> <hr>
          </li>
        </ul>
    </div>
  </aside>
</template>
<style scoped>
  @media (max-width: 768px) {
      .col-sm-3 {
          display: none;
      }
  }
  li:last-child hr{
    display: none;
  }
</style>
