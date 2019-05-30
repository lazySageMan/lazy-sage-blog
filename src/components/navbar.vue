<template>
    <div>
        <header class="header" :class="active">
            <router-link tag="div" to="/"  class="icon">LazySage</router-link>
            <nav class="nav">
                <ul>
                    <router-link tag="li"  to="/home">HOME</router-link>
                    <router-link tag="li"  to="/tags">TAGS</router-link>
                    <li>LOGIN</li>
                </ul>
            </nav>
            
        </header>
        <div class="bg">
            <img src="../assets/hero.jpg" class="head-img">
            <div class="des">
                <div class="index" v-if="getStore">
                    <p class="title">Work hard & have passion</p>
                    <p class="con">努力奋进有激情</p>
                </div>
                <div class="content" v-if="!getStore">
                    <p class="con-title">React的基础知识</p>
                    <p class="user"> <a-icon type="user" class="icon"/>&nbsp;彭一高 <a-icon type="clock-circle" class="icon"/>&nbsp;2019/05/13</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    data(){
        return{
            active: "transparent",
            up: false,
            scroll: 0
        }
    },



    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },

    created(){
        console.log(this.$store)
    },

    computed:{
        getStore(){
            return this.$store.state.isIndex
        }
    },

    watch: {
        scroll : { //监听滚动条滚动
            handler(newVal, oldVal){
                if(newVal < oldVal && newVal > 300){
                    this.up = true;
                }else {
                    this.up = false;
                }
            }
        }
    },

    methods: {
        handleScroll(){
            this.scroll = window.scrollY;
            if(window.scrollY > 60 && window.scrollY < 300){
                this.active = "block";
            }else if(window.scrollY > 300){
                if(this.up){
                    this.active = "block";
                }else{
                    this.active = "hide";
                }

               
            }else{
                this.active = "transparent";
            }
        },
    }
}
</script>
<style lang="scss">
    @font-face {
        font-family: "huakang";
        src: url("../assets/huakangwawa.ttf");
        font-weight: normal;
        font-style: normal;
    }
    
    .header{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        transition: .5s;
        z-index: 1000;
        .icon{
            width: 80px;
            height: 40px;
            font-family: "huakang";
            font-size: 20px;
            line-height: 40px;
            text-align: center;
        }
        .nav{
            height: 40px;
            ul{
                display: flex;
                justify-content:space-around;
                padding: 0;
                li {
                    list-style: none;
                    width: 70px;
                    height: 40px;
                    font-size: 15px;
                    line-height: 40px;
                    text-align: center;
                    cursor: pointer;
                }
            }
        }
    }

    .bg{
        width: 100%;
        height: 500px;
        overflow: hidden;
        position: relative;
        margin-bottom: 50px;
        .head-img{
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 0;
        }
        .des{
            width: 50vw;
            margin: auto;
            margin-top: 230px;
            position: relative;
            z-index: 5;
            .index{
                color: #fff;
                .title{
                    text-align: center;
                    font-size: 35px;
                    margin-bottom: 15px;
                }
                .con{
                    text-align: center;
                    font-size: 20px;
                }
            }
        }
        .content{
            text-align: left;
            color: #fff;
            .con-title{
                font-size: 35px;
                margin-bottom: 30px;
            }
            .user{
                height:30px;
                font-size: 18px;
                line-height: 30px;
                color: rgba(255, 255, 255, 0.7);
                .icon{
                    display: inline-block;
                    vertical-align: middle;
                    box-sizing:  border-box;
                }
            }
        }
    }
    
    .block{
        background: rgba(255, 255, 255, 1);
        color:rgba(102, 102, 102, .7);
        box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
    }
    .hide{
        top: -60px;
    }
    .transparent{
        background: transparent;
        color: rgba(255, 255, 255, .7);
    }

    a{
        color: #fff;
        text-decoration: none;
    }

    .router-link-active {
        text-decoration-line: none;
    }
</style>


