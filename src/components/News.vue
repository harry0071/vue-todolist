<template>
	<div class="col-sm-7">
		<article class="news-item clearfix"
		v-for="newsItem in news"
		:key="newsItem.aid"
		>
			<div class="col-sm-5">
				<img :src="newsItem.img_url">
			</div>
			<div class="col-sm-7">
				<a :href="newsItem.wap_url">
					<h4>
						{{newsItem.short_name}}
						<span class="badge"><span class="glyphicon glyphicon-thumbs-up"></span>
					{{newsItem.comment_total}}</span>
					</h4>					
				</a>

				<div class="content">
					{{newsItem.intro}}
				</div>
			</div>
		</article>
    </div>
</template>

<script>
	export default {
		props:['cate'],
		data(){
			return {
				news:null,
			}
		},
		created(){
			this.getNews();
		},
		watch:{
			cate(newVal,oldVal){
				this.getNews();
			}
		},
		methods:{
			getNews(){
				$.ajax({
					url:'https://photo.sina.cn/aj/index',
					data:{
						page:1,
						cate:this.cate
					},
					dataType: 'jsonp'
				})
				.then(({data})=>{
					this.news = data;
				})
			}
		},
	}
</script>

<style scoped>
	.news-item{
		margin-bottom: 40px;
	}
	.content{
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	img{
		height: 150px;
		width: 100%;
	}
</style>