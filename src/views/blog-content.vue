<template>
  <div>
    <HelloWorld />
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  components: {
    HelloWorld :HelloWorld
  },
  created(){
    this.$store.commit("changeIndex", false)
  }
}
</script>
<style lang="less">
</style>

