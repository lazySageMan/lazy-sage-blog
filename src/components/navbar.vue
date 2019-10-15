<template>
    <div>
        <header class="header" :class="active">
            <router-link tag="div" to="/"  class="icon">LazySage</router-link>
            <nav class="nav">
                <ul>
                    <router-link 
                        active-class="router-active" 
                        tag="li"  
                        to="/home">HOME</router-link>
                    <router-link 
                        active-class="router-active" 
                        tag="li"  
                        to="/tags">TAGS</router-link>
                    <router-link 
                        active-class="router-active" 
                        tag="li"  
                        to="/about">ABOUT</router-link>
                    <li @click="showModal">LOGIN</li>
                    <a-modal
                        title="登录"
                        :visible="visible"
                        @ok="handleOk"
                        @cancel="handleCancel"
                        cancelText="取消"
                        okText="登录">
                        <div >
                            账号：<a-input placeholder="account" />
                        </div>
                        <div style="margin-top: 15px" >
                            密码：<a-input-password placeholder="input password" />
                        </div>
                        
                    </a-modal>
                </ul>
            </nav>
        </header>
    </div>
</template>
<script>
export default {

    data(){
        return{
            active: 'transparent',
            up: false,
            scroll: 0,
            visible: false
        };
    },

    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },

    created(){
        console.log(this.$store);
    },

    computed:{
        getStore(){
            return this.$store.state.isIndex;
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
                this.active = 'block';
            }else if(window.scrollY > 300){
                if(this.up){
                    this.active = 'block';
                }else{
                    this.active = 'hide';
                }
            }else{
                this.active = 'transparent';
            }
        },

        showModal(){
            this.visible = true;
        },

        handleOk() {
            this.visible = false;
        },

        handleCancel() {
            this.visible = false;
        },
    }
};
</script>
<style lang="scss" >
    @font-face {
        font-family: "huakang";
        src: url("../assets/huakangwawa.ttf");
        font-weight: normal;
        font-style: normal;
    }

    .router-active {
        color: rgb(45, 183, 245);
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
        box-shadow: 0 2px 8px #f0f1f2;
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
                    transition: .5s;
                    cursor: pointer;
                    & :hover{
                        color: rgb(45, 183, 245);
                    }
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
        background: rgba(255, 255, 255, 1);
        color:rgba(102, 102, 102, .7);
        box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
    }
    .transparent{
        background: rgba(255, 255, 255, 1);
        color:rgba(102, 102, 102, .7);
        box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
    }

    a{
        color: #fff;
        text-decoration: none;
    }

    .router-link-active {
        text-decoration-line: none;
    }
</style>


