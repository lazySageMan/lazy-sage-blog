<template>
  <div>
    <Content :html="md" />
  </div>
</template>
<script>
import Content from '../components/content';
import md from '../assets/reactNative.md';
import {translateMarkdown} from '../utils/translateMarkdown'
export default {
    components: {
        Content :Content
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
<style lang="less">
</style>

