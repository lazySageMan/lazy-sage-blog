<template>

    <div class="list-wrap">
        <div class="wraps">
          <router-link to="/content" tag="div" class="list" v-for="(item, index) in listData" :key="index">
              <div class="bgs">
                  <img class="img" :src="item.img_url">
              </div>
              <div class="info">
                  <div class="title">
                      {{item.title}}
                  </div>
                  <div class="descriptoin">
                      {{item.description}}
                  </div>
                  <div class="time">
                      <div class="tag">
                          <div v-for="v in item.tag" :key="v" class="item">{{v}}</div>
                      </div>
                      <div class="timer">{{item.time}}</div>
                  </div>
              </div>
          </router-link>
        </div>
        <div class="user-wrap">
          <div class="user">
            <div class="userimg">
              <div class="imgs">
                <!-- <img src="" alt=""> -->
              </div>
              <div class="name">彭一高</div>
              <div class="des">JAVASCRIPT工程师，努力奋进&有激情，致力成为全栈工程师，年薪百万</div>
            </div>
            <div class="link">
              <a href="https://github.com/lazySageMan"><a-icon type="github" class="icon github"></a-icon></a>
              <a-icon type="weibo-circle" class="icon weibo" />
              <a-icon type="wechat" class="icon wechat" />
              <a-icon type="twitter" class="icon twitter"/>
            </div>
          </div>
          <div class="serch">
            <input 
              type="text" 
              class="input" 
              @focus="showSearchList"
              @blur="hideSearchList"
              placeholder="Search...">
          </div>
          <div class="search-list" v-if="searchList">
            <div class="list-item">JAVASCRIPT工程师</div>
            <div class="list-item">JAVASCRIPT工程师</div>
            <div class="list-item">JAVASCRIPT工程师</div>
            <div class="list-item">JAVASCRIPT工程师</div>
            <div class="list-item">JAVASCRIPT工程师searchListsearchListsearchList</div>
          </div>
        </div>
    </div>

</template>
<script>
const listData = []
for (let i = 0; i < 10; i++) {
  listData.push({
    img_url: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png",
    title: `ant design vue part ${i}`,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    time: "2019/05/09",
    tag:["Vue", "react", "react-native"]
  })
}

export default {
  data () {
    return {
      listData,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      },
      searchList: false,
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    }
  },
  methods:{
    showSearchList(){
      this.searchList = true
    },
    hideSearchList(){
      this.searchList = false
    }
  }
}
</script>
<style lang="scss">
.list-wrap{
  display: flex;
  justify-content: center;
  width: 900px;
  .wraps{
    .list{
        width: 45vw;
        padding: 30px;
        margin-bottom: 20px;
        border: 1px solid #e7eaf1;
        border-radius: 3px;
        box-sizing: border-box;
        box-shadow: 0 1px 3px rgba(0,37,55,.06);
        cursor: pointer;
        background: #fff;
        margin-right: 30px;
        .bgs{
          .img{
              width: 100%;
              height: 320px;
          }
        }
        .info{
          .title{
              font-size: 25px;
              font-weight: bold;
              height: 35px;
              line-height: 35px;
              margin: 15px 0;
          }
        }
        .time{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: 15px;
            color: #a6abb2;
            .tag{
              display: flex;
              justify-content: flex-start;
              .item{
                height: 25px;
                padding: 0 8px;
                text-align: center;
                line-height: 25px;
                background: #fafafa;
                margin-right: 5px;
            }
          }
        }
    }
  }
  .user-wrap{
    width: 17vw;
    .user{
      width: 17vw;
      height: 300px;
      background: #fff;
      border: 1px solid #e7eaf1;
      border-radius: 3px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(0,37,55,.06);
      padding: 20px;
      .userimg{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .imgs{
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: plum;
          margin-top: 20px;
        }
        .name{
          margin: 10px 0;
          width: 100%;
          text-align: center;
          font-size: 16px;
          color: #4e4e4e;
        }
        .des{
          color: #656565;
          font-size: 14px;
          text-align: center;
          line-height: 20px;
        }
      }
      .link{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        margin-top: 10px;
        .icon{  font-size: 20px;
          transition: .2s;
          color: #b8bdc3;
        }
        .github:hover{
          font-size: 25px;
          color: #4e4e4e;
        }
        .weibo:hover{
          font-size: 25px;
          color: red;
        }
        .wechat:hover{
          font-size: 25px;
          color:chartreuse;
        }
        .twitter:hover{
          color: blue;
          font-size: 25px;
        }
      }
    }
    .serch{
      width: 17vw;
      width: 100%;
      background: #fff;
      height: 45px;
      margin-top: 15px;
      border: 1px solid #e7eaf1;
      border-radius: 3px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(0,37,55,.06);
      display: flex;
      justify-content: space-around;
      align-items: center;
      .input{
        border: 0;
        outline: 0;
        height: 40px;
        line-height: 45px;
        font-size: 18px;
        width: 100%;
        text-indent: 1em;
        color: #4E4E53;
      }
    }
    .search-list{
      width: 17vw;
      width: 100%;
      height: auto;
      text-align: left;
      overflow: scroll;
      background: #fff;
      border: 1px solid #e7eaf1;
      border-radius: 3px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(0,37,55,.06);
      .list-item{
        width: 100%;
        height: 50px;
        font-size: 18px;
        line-height: 50px;
        padding: 0 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .list-item:hover{
        background: #b8bdc3;
      }
    }
  }
}

</style>