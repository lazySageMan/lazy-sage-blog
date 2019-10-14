<template>
  <div class="blog-content">
		<a-row 
			class="main-wrapper"
			type="flex">
			<a-col :xxl="4" :xl="5" :lg="5" :sm="0" :xs="0">
				<LeftCon />
			</a-col>
			<a-col :xxl="20" :xl="19" :lg="19" :sm="24" :xs="24">
				<div @scroll="scrollHandle" class="main-content">
					<div ref="content" class="content" >
						<Content :html="md" />
					</div>
					
					<a-anchor 
						:affix="false" 
						:showInkInFixed="true"
						@click="handleClick"
						class="anchor">
						<a-anchor-link
							:key="index"
							v-for="(item, index) in titleList" 
							:href="`#${item}`" 
							:title="item" />
					</a-anchor>
				</div>
			</a-col>
		</a-row>
	</div>
</template>
<script>
import Content from '../components/content';
import LeftCon from '../components/left-content';
import {translateMarkdown} from '../utils/translateMarkdown';
import HTTP from '../api/apiCore'
export default {
    components: {
        Content :Content,
        LeftCon: LeftCon
    },
    data(){
		return {
			md: '',
			titleList: []
		}
    },
    created(){
		const id = this.$route.query.id;
		HTTP.GET('/blog/getblogbyId', {id: id}).then(res => {
			console.log(res)
			if(res.code === 200){
				this.md = translateMarkdown(res.data[0].content);
				this.md.replace(/<(h[3])[\s\S]+?(?=<\/\1>)/g, (item) => {
					this.titleList.push(item.split('>')[1])
				})
			}
		})

	},
	
	methods: {
		handleClick(e, link){

			e.preventDefault();

			this.jump(link.href);

		},

		jump(id){
			console.log(id)
			let oDiv=document.querySelector(id);
			// 获取对应的id

			let total=oDiv.offsetTop;
			// 获取该元素距离顶部的距离
			let Main = document.querySelector('.main-content')
			let distance = Main.scrollTop
			// 获取滚动条高度corll
			let step = total / 50 
			//平滑滚动的效果，把总距离分成50个小段，每10ms执行一次

			if (total > distance) {
				//向下滑动
				smoothDown()
			} else {
				// 向上滑动
				let newTotal = distance - total
				step = newTotal / 50
				smoothUp()
			}

			//向下滑动
			function smoothDown () {
				if (distance < total) {
					distance = distance + step
					Main.scrollTop = distance
					setTimeout(smoothDown, 50)
				} else {
					Main.scrollTop = total
				}
			}

			//向上滑动
			function smoothUp () {

				if (distance > total) {
					distance -= step
					Main.scrollTop = distance
					setTimeout(smoothUp, 50)
				} else {
					Main.scrollTop = total
				}
			}
		},

		scrollHandle(e){
			console.log(e)
		}

	}
};
</script>
<style lang="scss">
.blog-content{
    background: #fff;
    padding: 40px 0 0;
    position: relative;
    margin-top: 64px;
    .main-wrapper{
		flex: 1;
		.main-content{
			overflow: auto;
			-webkit-overflow-scrolling: touch;
			height: calc(100vh - 64px - 40px);
			position: relative;
			.content{

				width: calc(100% - 280px);
			}
			.anchor{
				position: fixed;
				width: 270px;
				top: 104px;
				right: 20px;
				list-style-type: circle;
				padding-left: 20px;
			}
		}
    }
}
</style>

