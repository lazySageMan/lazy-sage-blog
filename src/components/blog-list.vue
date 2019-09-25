<template>
	<div class="wrap">
		<ul>
			<router-link 
				to="/content" 
				tag="li" 
				class="list" 
				v-for="(item, index) in listData" :key="index">
				<div class="bgs">
					<img class="img" :src="item.img_url">
				</div>
				<div class="info">
					<div class="title">
						{{item.title}}
					</div>
					<div class="descriptoin">
						{{item.description}}
					</div>
					<div class="time">
						<div class="tag">
							<div v-for="v in item.tag" :key="v" class="item">{{v}}</div>
						</div>
						<div class="timer">{{item.time}}</div>
					</div>
				</div>
			</router-link>
		</ul>

		<RightCon />
	</div>
</template>
<script>
import RightCon from '../components/right-content';
const listData = [];
for (let i = 0; i < 10; i++) {
    listData.push({
        img_url: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        title: `ant design vue part ${i}`,
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        time: '2019/05/09',
        tag:['Vue', 'react', 'react-native']
    });
}

export default {

	components: {
		RightCon: RightCon
	},

    data () {
        return {
            listData,
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
<style lang="scss" >
	.wrap{
		height: calc(100vh - 64px - 40px);
		overflow: auto;
		-webkit-overflow-scrolling: touch;

		ul{
			padding: 0;
			margin:0;
			width: calc(100% - 280px);

			li{
				list-style: none;
			};
			flex: 1;
			.list {
				// width: 100%;
				.bgs{
					border-radius: 10px;
					.img{
						width: 100%
					}
				}
			}
		}
	}
</style>