<template>
    <div class="left-wrap">
        <div class="top">
            <img class="img" src="https://avatars1.githubusercontent.com/u/42688331?s=460&v=4" alt="gaogao">
            <h2 class="name">高高</h2>
            <h5 class="name" style="color: rgba(0,0,0,.65)">
                前端打杂人员，略微代码洁癖
            </h5>
            <div class="dec">
                <div class="item">
                    <img class="iconimg" src="https://cdn.icon-icons.com/icons2/510/PNG/512/social-github_icon-icons.com_50019.png">
                    github
                </div>

                <div class="item">
                    <img class="iconimg" src="https://cdn.icon-icons.com/icons2/510/PNG/512/social-github_icon-icons.com_50019.png">
                    gitee
                </div>
            </div>
        </div>
        <div class="center">
            <a-divider orientation="left">
                热门文章
            </a-divider>

            <div class="list">
                <div class="items">
                    <a>koa-react-ssr  学习</a>
                </div>
                <div class="items">
                    <a>koa-react-ssr  学习啦啦啦啦</a>
                </div>
                <div class="items">
                    <a>koa-react-ssr  学习tsts</a>
                </div>
                <div class="items">
                    <a>kkoa-react-ssr  学习 jsjsj</a>
                </div>
                <div class="items">
                    <a>jijiijijijijijijijijiji</a>
                </div>
                <div class="items">
                    <a>kkoa-react-ssr  学习 jsjsj</a>
                </div>
            </div>
        </div>
        <div class="bottom">
            <a-divider orientation="left">
                标签
            </a-divider>
            <div class="tags">
                <div style="margin-bottom: 5px" v-for="(item, index) in list" :key="index">
                    <a-tag 
                        :color="clolrFulList[index]" >
                        {{item}}
                    </a-tag>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import clolrFulList from '../config'

export default {

    data(){
        return {
            list: ['React', 'Vue', 'Javascript', 'Python', 'Typescript','React', 'Vue', 'Javascript', 'Python', 'Typescript','React', 'Vue', 'Javascript', 'Python', 'Typescript'],
            clolrFulList
        }
    },

    created(){
    }

};
</script>

<style lang="scss" scoped>
.left-wrap{
    width: 90%;
    height: calc(100vh - 64px - 40px);
    overflow-y: auto;
    border-right: 1px solid #ebedf0;
    margin-right: 30px;
    .bottom{
        .tags{
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 0 5px;
        }
    }
    .center{
        .header{
            font-size: 16px;
            font-weight: 500;
        }
        .list{
            padding: 0;
            margin: 0;
            .items{
            &:hover {
                background: #f0f2f5;
                a {
                    color: #40a9ff;
                }
            }
            a {
                color: #8590a6;
                padding-left: 20px;
            }
            height: 30px;
            line-height: 30px;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            border: 0;
            padding: 0;
            margin: 0;
        }
        }
    }
    .top{
        .img{
            display: block;
            width: 132px;
            height: 132px;
            border-radius: 50%;
            margin: 0 auto;
        }
        .name{
            text-align: center;
            margin-top: 10px;
        }

        .dec{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 70px;
            & :hover{
                background:#ebedf0;
            }
            .item{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                transition: 1s;
                cursor: pointer;
                border-radius: 5px;
                .iconimg{
                    width: 20px;
                    height: 20px;
                    margin-right: 5px;
                }
            }
        }
    }
}
</style>