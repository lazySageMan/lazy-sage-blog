<template>
    <div class="wrap">
        <div class="tags">
            <div v-for="v in tag" :key="v" class="item">{{v}}</div>
        </div>
        <div class="list">
            <div class="tag-list" v-for="(item, index) in listData" :key="index"> 
                <span class="name">「{{item.name}}」</span>
                <router-link to="/content" tag="div" class="list-blog" v-for="(v, i) in item.list" :key="i">{{v}}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            listData: [
                {
                    list: ['一件和阅读有关的事：Kindle Paperwhite 3 入手', '一件和阅读有关的事：Kindle Paperwhite 3 入手', '一件和阅读有关的事：Kindle Paperwhite 3 入手'],
                    name: 'react'
                },
                {
                    list: ['一件和阅读有关的事：Kindle Paperwhite 3 入手', '一件和阅读有关的事：Kindle Paperwhite 3 入手', '一件和阅读有关的事：Kindle Paperwhite 3 入手'],
                    name: 'vue'
                },
                {
                    list: ['一件和阅读有关的事：Kindle Paperwhite 3 入手', '一件和阅读有关的事：Kindle Paperwhite 3 入手', '一件和阅读有关的事：Kindle Paperwhite 3 入手'],
                    name: '小程序'
                },
                {
                    list: ['一件和阅读有关的事：Kindle Paperwhite 3 入手', '一件和阅读有关的事：Kindle Paperwhite 3 入手', '一件和阅读有关的事：Kindle Paperwhite 3 入手'],
                    name: '生活常事一件和阅读有关的事'
                },
            ],
            tag:['vue', 'react', 'react-native', '网络', '小程序', ' webpack', 'python', 'css', '生活常事', '一件和阅读有关的事', 'Kindle Paperwhite 3']
        };
    },
    created(){
        this.$store.commit('changeIndex', true);
    }

};
</script>
<style lang="scss" scoped>
    .wrap{
        width: 45vw;
        margin: -130px auto 0;
        position: relative;
        z-index: 999;
        .tags{
            width: 100%;
            min-height: 150px;
            padding: 30px 20px;
            background: #ffffff;
            margin-bottom: 15px;
            border: 1px solid #e7eaf1;
            border-radius: 3px;
            box-shadow: 0 1px 3px rgba(0,37,55,.06);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: #a6abb2;
            flex-wrap: wrap;
            .item{
                height: 25px;
                padding: 0 8px;
                text-align: center;
                line-height: 25px;
                background: #fafafa;
                margin-right: 5px;
                cursor: pointer;
            }
        }
        .tag-list{
            width: 100%;
            margin-bottom: 15px;
            padding:10px 20px;
            border: 1px solid #e7eaf1;
            border-radius: 3px;
            box-sizing: border-box;
            box-shadow: 0 1px 3px rgba(0,37,55,.06);
            margin-bottom: 20px;
            background: #fff;
            .list-blog{
                display: block;
                font-size: 16px;
                color: #666;
                text-align: center;
                margin: 16px auto;
                cursor: pointer;
            }
            .name{
                display: block;
                font-size: 20px;
                color: #333;
                text-align: center;
                margin-bottom: 20px;
            }
        }
    }
</style>
