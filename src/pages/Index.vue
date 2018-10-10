<template>
	<div class="row">
		<LeftAside v-on="{getCate}" />
		<News v-bind={cate} />
		<RightAside />	
	</div>
</template>

<script>
	import LeftAside from 'cp/LeftAside.vue';
	import News from 'cp/News.vue';
	import RightAside from 'cp/RightAside.vue';
	export default {
		data(){
			return {
				cate:'recommend',
			}
		},
		components:{
			News,
			LeftAside,
			RightAside
		},
		methods:{
			getCate(cate){
				this.cate = cate;
			}
		}
	}
</script>