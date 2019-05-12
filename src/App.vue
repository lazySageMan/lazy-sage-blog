<template>
  <div id="app">
    <navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import Footer from '@/components/foot.vue'
export default {
  components: {
    navbar,
    Footer
  }
}
</script>

<style lang="scss">
#app{
  background: #f7f8fa;
  font-family: -apple-system,Verdana,"PingFang SC","Helvetica Neue",Arial,"Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
}
</style>
