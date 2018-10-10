<template>
  <div class="col-sm-2">
    <div class="list-group">
    	<a href="#" :class="{active:currentCate==='recommend'}" class="list-group-item" @click="getNews('recommend')">推荐</a>
      <a href="#" :class="{active:currentCate==='hot'}" class="list-group-item" @click="getNews('hot')">热点</a>
      <a href="#" :class="{active:currentCate==='gossip'}" class="list-group-item" @click="getNews('gossip')">八卦</a>
    </div>
  </div>
</template>

<script>
	export default {
		data(){
			return {
				currentCate:'recommend',
			}
		},
		methods:{
			getNews(cate){
				this.$emit('getCate',cate);
				this.currentCate = cate;
			}
		}
	}
</script>

<style scoped>
	.list-group-item{
		border: 0;
		margin-bottom: 5px;
	}
	@media (max-width: 768px) {
		.col-sm-2 {
			display: none;
		}
	}
</style>
