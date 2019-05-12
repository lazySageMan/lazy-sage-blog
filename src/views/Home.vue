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
  }
}
</script>
<style>
.home{
  width: 60vw;
  margin: auto;
}
</style>
