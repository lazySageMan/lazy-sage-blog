
<template>
    <div class="tags">
        <a-divider v-show="isShow" type="vertical" />
        <a-icon 
            style="margin-right: 5px" 
            :type="type" />
        <a-tag 
            :color="type === 'tag' ? clolrFulList[index] : '#2db7f5'" 
            v-for="(item, index) in list" 
            :key="index">
            {{item.name}}
        </a-tag>
    </div>
</template>

<script>

import clolrFulList from '../config'

export default {
    props: {
        type: {
            type: String
        },
        list: {
            type: Array
        },
        isShow: {
            type: Boolean,
            default: true
        }
    },

    data(){
        return{
            clolrFulList
        }
    }
}
</script>

<style lang="scss">
    .tags{
        display: flex;
        justify-content: flex-start;
        align-items: center
    }
</style>