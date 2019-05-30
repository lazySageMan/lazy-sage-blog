<template>
  
  <div class="home">
    <BlodList />
  </div>
</template>
<script>
import BlodList from '../components/blog-list'
export default {
  components: {
    BlodList: BlodList
  },

  created(){
    this.$store.commit("changeIndex", true);
  }

}
</script>
<style>
.home{
  width: 60vw;
  margin: auto;
}
</style>
