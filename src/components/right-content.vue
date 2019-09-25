<template>
    <div class="right-wrap"></div>
</template>
<script>
export default {

    created(){
        // this.$store.commit('changeIndex', true);
    }

};
</script>

<style lang="scss" scoped>
.right-wrap{
    width: 280px;
    background: red;
    height: 300px;
    position: fixed;
    top: 104px;
    right: 15px;
    list-style-type: circle;
}
</style>