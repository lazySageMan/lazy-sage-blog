<template>
	<div class="wrap">
		<ul class="ul-list">
			<router-link 
				to="/content" 
				tag="li" 
				class="boglist"
				:class="index < listData.length - 1 ? 'list': ''"
				v-for="(item, index) in listData" :key="index">
				<a-divider orientation="left">
					<span class="title">
						{{item.title}}
					</span>
					<span class="create-time">{{item.createdAt.slice(0, 10)}}</span>
				</a-divider>
				<HtmlContent :html="item.description" />
				<div class="tag">
					<Tags type="message" :list="[{name: 100}]" :isShow="false" />
					<Tags type="read" :list="[{name: 100}]" />
					<Tags type="folder" :list="item.categories" />
					<Tags type="tag" :list="item.tags" />
				</div>
			</router-link>
			<a-pagination class="pagetion" v-model="current" :total="50" />
		</ul>
		<RightCon :list="listData" />
	</div>
</template>
<script>
import RightCon from '../components/right-content';
import HtmlContent from '../components/content'
import Tags from '../components/tag'
import { translateMarkdown } from '../utils/translateMarkdown';
import HTTP from '../api/apiCore'
export default {

	components: {
		RightCon: RightCon,
		HtmlContent: HtmlContent,
		Tags: Tags
	},

    data () {
        return {
			listData: [],
			current: 5,
            pagination: {
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            },
            searchList: false,
            actions: [
                { type: 'star-o', text: '156' },
                { type: 'like-o', text: '156' },
                { type: 'message', text: '2' },
            ],
        };
	},
	
	created(){
		const obj = {
            offset: 1,
            pageSize: 10
        }
		HTTP.GET('/admin/getBlog', obj,  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50IjoiYWRtaW4iLCJpYXQiOjE1NzA3NTU3NTAsImV4cCI6MTU3MDc5ODk1MH0.dU_4yDykvG4pv-QNeCGQnvMoApPUQFKTFkAaK0pdXgw").then(res => {
			if(res.code === 200){
				console.log(res)
				let result = res.data;
				result.forEach(v => {
					let index = v.content.indexOf('<!--more-->')
					v.description = translateMarkdown(v.content.slice(0, index));

				})
				this.listData = result;

			}
			
		})
	},

    methods:{
        showSearchList(){
            this.searchList = true;
        },
        hideSearchList(){
            this.searchList = false;
        }
	}
};
</script>
<style lang="scss">
	
	@media (max-width: 600px) {
		.wrap{
			height: calc(100vh - 64px - 40px);
			overflow: auto;
			-webkit-overflow-scrolling: touch;

			ul{
				padding: 0;
				margin:0;
				width: 100%;

				li{
					list-style: none;
				};
				flex: 1;
			}
		}
	}

	@media (min-width: 600px) {
		.wrap{
			height: calc(100vh - 64px - 40px);
			overflow: auto;
			-webkit-overflow-scrolling: touch;
			.pagetion{
				margin: 10px auto;
				
			}

			.ul-list{
				padding: 0;
				margin:0;
				width: calc(100% - 280px);
				.boglist{
					list-style: none;
					position: relative;
					border: 1px solid #ebedf0;
					padding: 16px 24px;
					transition: all 0.2s linear;
					&:hover {
						background: #effbff;
						box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
						transform: translate3d(0, -5px 0);
					}
				};

				flex: 1;
				.list {
					margin-bottom: 10px
				}

				.tag {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					height: 40px;
					margin-top: 16px;
				}

				.title {
					color: #394d69;
					font-size: 1.4rem;
					font-weight: 600;
					line-height: 1.2;
					cursor: pointer;
				}

				.create-time {
					font-size: 0.5em;
					padding-left: 20px;
				}
			}
		}
	}
</style>