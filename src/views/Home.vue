<template>
	<div class="home">
		<a-row 
			class="main-wrapper"
			type="flex">
			<a-col :xxl="4" :xl="5" :lg="5" :sm="0" :xs="0">
				<LeftCon />
			</a-col>
			<a-col :xxl="20" :xl="19" :lg="19" :sm="24" :xs="24">
				<BlodList />
			</a-col>
		</a-row>
	</div>
</template>
<script>
import BlodList from '../components/blog-list';
import LeftCon from '../components/left-content';
export default {

    components: {
		BlodList: BlodList,
		LeftCon: LeftCon
    },

    created(){
        this.$store.commit('changeIndex', true);
	},
	methods: {
		toTag(){
			return document.querySelector('.header')
		}
	}

};
</script>
<style lang="scss" >
.home{
	background: #fff;
    padding: 40px 0 0;
    position: relative;
	margin-top: 64px;
	.main-wrapper{
		flex: 1
	}
}
</style>
