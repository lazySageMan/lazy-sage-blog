<template>
  <div class="arch">
		<a-row 
			class="main-wrapper"
			type="flex">
			<a-col :xxl="4" :xl="5" :lg="5" :sm="0" :xs="0">
				<LeftCon />
			</a-col>
			<a-col :xxl="20" :xl="19" :lg="19" :sm="24" :xs="24">
                <div class="main-jianli">
                    <StyleEditor 
                        ref="styleEditor" 
                        :code="currentStyle" />
                    <ResumeEditor 
                        ref="resumeEditor" 
                        :markdown="currentMarkdown" 
                        :enableHtml="enableHtml" /> 
                </div>
			</a-col>
		</a-row>
	</div>
</template>
<script>

import StyleEditor from '../components/StyleEditor'
import ResumeEditor from '../components/ResumeEditor'
import LeftCon from '../components/left-content'

export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor,
      LeftCon
    },

    data() {
      return {
        interval: 40,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
            * Inspired by http://strml.net/
            * 大家好，我是方方
            * 二月了，好多公司都在招聘，你是不是也在准备简历呀。
            * 说做就做，我也来写一份简历！
            */

            /* 首先给所有元素加上过渡效果 */
            * {
                transition: all .3s;
            }
            /* 白色背景太单调了，我们来点背景 */
            .styleEditor {
                color: rgb(222,222,222); 
                background: rgb(0,43,54);
            }
            /* 文字离边框太近了 */
            .styleEditor {
                border: 1px solid #ccc;
                overflow: auto;
                width: calc(100vw*0.7916/2 - 40px); 
                max-height: calc(100vh - 120px - 40px);
            }
            /* 代码高亮 */
            .token.selector{ color: rgb(133,153,0); }
            .token.property{ color: rgb(187,137,0); }
            .token.punctuation{ color: yellow; }
            .token.function{ color: rgb(42,161,152); }

            /* 接下来我给自己准备一个编辑器 */
            .resumeEditor{
                width: calc(100vw*0.7916/2 - 40px); 
                max-height: calc(100vh - 120px - 40px);
                border: 1px solid #ccc;
                background: white; color: #222;
                overflow: auto;
            }
            /* 好了，我开始写简历了 */`
            ,
            `/* 这个简历好像差点什么
            * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
            * 简单，用开源工具翻译成 HTML 就行了
            */
            `
            ,
            `/* 再对 HTML 加点样式 */
            .resumeEditor{
                padding: 2em;
            }
            .resumeEditor h2{
                display: inline-block;
                border-bottom: 1px solid;
                margin: 1em 0 .5em;
            }
            .resumeEditor ul,.resumeEditor ol{
                list-style: none;
            }
            .resumeEditor ul> li::before{
                content: '•';
                margin-right: .5em;
            }
            .resumeEditor ol {
                counter-reset: section;
            }
            .resumeEditor ol li::before {
                counter-increment: section;
                content: counters(section, ".") " ";
            }
            .resumeEditor blockquote {
                padding: .5em;
                background: rgb(0,43,54);
            }`
        ],
        currentMarkdown: '',
        fullMarkdown: 
            `方应杭
            ----

            资深前端工程师，资深前端讲师，现在在 [饥人谷](http://jirengu.com) 教前端课程。

            技能
            ----

            * 前端开发
            * Rails 开发
            * Node.js 开发
            * 前端授课

            工作经历
            ----

            1. [饥人谷](http://jirengu.com)
            2. 腾讯即时通讯平台部
            3. 阿里巴巴B2B部门
            4. 彩程知人项目组

            链接
            ----

            * [GitHub](https://github.com/frankfang)
            * [我的文章](https://www.zhihu.com/people/zhihusucks/pins/posts)

            > 如果你喜欢这个效果，Fork [我的项目](https://github.com/jirengu-inc/animating-resume)，打造你自己的简历！`
        }
    },

    created() {
      this.makeResume()
    },

    methods: {
        makeResume: async function () {
            await this.progressivelyShowStyle(0)
            await this.progressivelyShowResume()
            await this.progressivelyShowStyle(1)
            await this.showHtml()
            await this.progressivelyShowStyle(2)
        },
        showHtml: function () {
            return new Promise((resolve) => {
                this.enableHtml = true
                resolve()
            })
        },
        progressivelyShowStyle(n) {
            return new Promise((resolve) => {
            let interval = this.interval
            let showStyle = (async function () {
                let style = this.fullStyle[n]
                if (!style) { return }
                // 计算前 n 个 style 的字符总数
                let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
                let prefixLength = length - style.length
                if (this.currentStyle.length < length) {
                let l = this.currentStyle.length - prefixLength
                let char = style.substring(l, l + 1) || ' '
                this.currentStyle += char
                if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                    this.$nextTick(() => {
                        this.$refs.styleEditor.goBottom()
                    })
                }
                setTimeout(showStyle, interval)
                } else {
                    resolve()
                }
            }).bind(this)
                showStyle()
            })
        },

        progressivelyShowResume() {
            return new Promise((resolve) => {
                let length = this.fullMarkdown.length
                let interval = this.interval
                let showResume = () => {
                    if (this.currentMarkdown.length < length) {
                    this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
                    // let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
                    let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
                    if (prevChar === '\n' && this.$refs.resumeEditor) {
                        this.$nextTick(() => this.$refs.resumeEditor.goBottom())
                    }
                        setTimeout(showResume, interval)
                    } else {
                        resolve()
                    }
                }
                showResume()
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    *{margin: 0; padding: 0;}
    // *{box-sizing: border-box;}
    // *::before{box-sizing: border-box;}
    // *::after{box-sizing: border-box;}
    .main-jianli {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        justify-content: space-around;
    }

    html {
        min-height: 100vh;
    }
    *{
        box-sizing: border-box;
    }
    .arch{
        background: #fff;
        padding: 40px 0 0;
        position: relative;
        margin-top: 64px;
        .main-wrapper{
            flex: 1
        }
    }
</style>