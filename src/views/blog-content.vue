<template>
  <div class="blog-content">
		<a-row 
			class="main-wrapper"
			type="flex">
			<a-col :xxl="4" :xl="5" :lg="5" :sm="0" :xs="0">
				<LeftCon />
			</a-col>
			<a-col :xxl="20" :xl="19" :lg="19" :sm="24" :xs="24">
				<div class="main-content">
					<div class="content">
						<Content :html="md" />
					</div>
					
					<a-anchor class="anchor">
						<a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
						<a-anchor-link href="#components-anchor-demo-static-anchor" title="Fixed demo" />
						<a-anchor-link href="#APIsss" title="API" />
						<a-anchor-link href="#components-anchor-demo-basicsss" title="Basic demossss" />
						<a-anchor-link href="#components-anchor-demo-static-anchorsss" title="Fixed demoppp" />
						<a-anchor-link href="#API222" title="API222222" />
						<a-anchor-link href="#components-anchor-demo-basic333" title="Basic demo2313131" />
						<a-anchor-link href="#components-anchor-demo-static-anchor5555" title="Fixed demo12121" />
						<a-anchor-link href="#API999" title="API8989989" />
					</a-anchor>
				</div>
			</a-col>
		</a-row>
	</div>
</template>
<script>
import Content from '../components/content';
import md from '../assets/reactNative.md';
import LeftCon from '../components/left-content';
import {translateMarkdown} from '../utils/translateMarkdown'
export default {
    components: {
        Content :Content,
        LeftCon: LeftCon
    },
    data(){
      return {
        md: translateMarkdown(md)
      }
    },
    created(){
        this.$store.commit('changeIndex', false);
    }
};
</script>
<style lang="scss" >
.blog-content{
    background: #fff;
    padding: 40px 0 0;
    position: relative;
    margin-top: 64px;
    .main-wrapper{
		flex: 1;
		.main-content{
			flex: 1;
			display: flex;
			justify-content: flex-start;
			.content{
				width: calc(100% - 280px);
			}
			.anchor{
				margin-left: 30px;
			}
		}
		
    }
}
</style>

