<template>
    <div class="left-wrap"></div>
</template>
<script>
export default {

    created(){
        // this.$store.commit('changeIndex', true);
    }

};
</script>

<style lang="scss" scoped>
.left-wrap{
    width: 100%;
    background: red;
    height: calc(100vh - 64px - 40px);
    overflow-y: auto;
}
</style>