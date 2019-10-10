<template>
    <div class="preview">
        <a-divider>文章列表</a-divider>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <router-link :to="`/content?id=${item.id}`">
                    {{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

    props: {
        list: {
            type: Array
        }
    },

    data(){
        return {}
    },

    created(){
        console.log(this.list)
    }

};
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
    .preview{
        width: 0;
        background: red;
        height: 300px;
        position: fixed;
        top: 104px;
        right: 15px;
        list-style-type: circle;
    }
}
@media (min-width: 600px){
    .preview {
        position: fixed;
        width: 280px;
        top: 104px;
        right: 20px;
        list-style-type: circle;
        padding-left: 20px;
        .title {
            color: #394d69;
            font-size: 22px;
        }
        ul{
            padding:0;
            margin: 0;
        }
        li {
            &:hover {
                background: #f0f2f5;
                a {
                    color: #40a9ff;
                }
            }
            a {
                color: #8590a6;
            }
            width: 265px;
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
</style>