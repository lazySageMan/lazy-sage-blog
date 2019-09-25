<template>
  <div id="app">
	<a-layout>
		<navbar />
		<router-view />
		<!-- <Footer /> -->
		<div id="components-back-top-demo-custom">
			<a-back-top>
				<div class="ant-back-top-inner">UP</div>
			</a-back-top>
		</div>
	</a-layout>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
// import Footer from '@/components/foot.vue';
export default {
    components: {
        navbar,
        // Footer
    }
};
</script>

<style lang="scss">
body{
	margin: 0;
	padding: 0;
	#app{
		background: #f7f8fa;
		font-family: -apple-system,Verdana,"PingFang SC","Helvetica Neue",Arial,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
	}
	#components-back-top-demo-custom .ant-back-top-inner {
		height: 40px;
		width: 40px;
		line-height: 40px;
		border-radius: 4px;
		background-color: #1088e9;
		color: #fff;
		text-align: center;
		font-size: 20px;
		position:fixed;
		bottom: 90px;
		right: 90px;
		transition: 0.5s;
		cursor: pointer;
	}
}
</style>
