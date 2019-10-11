<template>
    <div class="arch">
        <a-row 
			class="main-wrapper"
			type="flex">
			<a-col :xxl="4" :xl="5" :lg="5" :sm="0" :xs="0">
				<LeftCon />
			</a-col>
			<a-col :xxl="20" :xl="19" :lg="19" :sm="24" :xs="24">
				<ul class="bg-bubbles">
                    <li 
                        @click="popoClick(item)"
                        class="popo"
                        v-for="(item, i) in list" 
                        :key="i" 
                        :style="`
                            background: ${clolrFulList[i]};
                            width:${getSizeList[i]}px;
                            height:${getSizeList[i]}px;
                            border-radius:${getSizeList[i]/2}px;
                            line-height:${getSizeList[i]}px;
                            left:${Math.random()*90}%;
                            animation-delay:${Math.round((Math.random() * (7 - 1) + 1) * 10) / 10}s;
                            animation-duration: ${Math.round((Math.random() * (10 - 5) + 5) * 10) / 10}s;
                        `">
                        {{item}}
                    </li>
                </ul>
			</a-col>
		</a-row>
        
    </div>
</template>
<script>
import LeftCon from '../components/left-content'
import clolrFulList from '../config'
export default {
    data(){
        return {
             list: [
                'React', 'Vue', 'Python', 
                'Typescript', 'Html', 'Css3', 
                'Javascript', 'Nodejs', 'Koa2',
                'Express'
            ],
            sizeList: [
                50,
                60,
                90,
                120,
                150,
                180
            ],
                
           
            clolrFulList
        }
    },

    computed: {
        getSizeList(){
            return this.list.map(item => {
                let leng = item.length;
                if(leng >= 6){
                    let index = Math.floor((Math.random()*(6-2)))
                    return  this.sizeList[index+2]
                }
                let index = Math.floor((Math.random()*(6)))
                return  this.sizeList[index]
            })
        }
    },

    methods: {
        popoClick(tagget){
            console.log(tagget)
        }
    },

    created(){

    },

    components: {
		LeftCon: LeftCon
    },
};
</script>
<style lang="scss" scoped>
    .arch{
        background: #fff;
        padding: 40px 0 0;
        position: relative;
        margin-top: 64px;
        .main-wrapper{
            flex: 1;
            .bg-bubbles {
                position: absolute;
                // 使气泡背景充满整个屏幕；
                top: 0;
                left: 0;
                width: 100%;
                height: calc(100vh - 80px - 40px);
                // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
                overflow: hidden;
                li {
                    cursor: pointer;
                    color: #fff;
                    text-align: center;
                    position: absolute;
                    // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
                    bottom: -180px;
                    // 默认的气泡大小；
                    width: 90px;
                    height: 90px;
                    border-radius: 45px;
                    list-style: none;
                    // 使用自定义动画使气泡渐现、上升和翻滚；
                    animation: square 15s infinite;
                    transition-timing-function: linear;
                    // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
                }
                // 自定义 square 动画；
                @keyframes square {
                    0% {
                        opacity: 0.5;
                        transform: translateY(0px) rotate(-180deg);
                    }
                    25% {
                        opacity: 0.75;
                        transform: translateY(-400px) rotate(-90deg)
                    }
                    50% {
                        opacity: 1;
                        transform: translateY(-600px) rotate(0deg);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-1000px) rotate(180deg);
                    }
                }
            }
        }
    }
</style>
