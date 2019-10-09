<template>
  <div hw-animate="fadeInUp" class="wrap">
    <div class="type-list">
      <li @click="doEdit()" v-if="getUserInfo != ''">去写博客</li>
      <li @click="filterType('')">全部</li>
      <li v-for="(item,index) in typeList" :key="index" @click="filterType(item)">{{item}}</li>
    </div>
    <article-list :list="list" @flash-list="onFlashList()"></article-list>  
  </div>
</template>
<script>
import articleList from "../components/articleList";
import { mapState, mapGetters, mapActions } from "vuex";
import { runAnimate } from '@/common/animate'

export default {
  components: {
    articleList
  },
  computed: {
    ...mapGetters("userInfo", {
      //指的是userinfo.js文件下的  getuserinfo getter方法
      getUserInfo: "getUserInfo"
    })
  },
  data: () => ({
    list: [],
    typeList: []
  }),
  mounted() {
    this.fetchData();
    this.fetchList();
    runAnimate();
  },

  methods: {
    fetchData: async function() {
      const res = await this._api.fetchArticle();
      this.list = res.data;
    },
    fetchList: async function() {
      const res = await this._api.fetchArticleList();
      this.typeList = new Set([...res.data]);
    },
    filterType: async function(keywords) {
      console.log(keywords);
      const params = {
        keyword: keywords
      };
      const res = await this._api.filterArticleList(params);
      this.list = res.data;
    },
    doEdit() {
      this.$router.push({
        path: "/edit"
      });
    },
    onFlashList() {  //通过emit和on 去进行父子组件的一个通讯 
      this.fetchData();
      this.fetchList();
    }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  margin-top: 63px;
  width: 70vw;
  .type-list {
    position: absolute;
    left: 10px;
    top: 63px;
    li {
      list-style: none;
      padding: 10px;
      margin: 10px;
      cursor: pointer;
      background-color: aliceblue;
      border-radius: 25px;
      text-align: center;
      &:hover {
        background-color: rgb(180, 184, 172);
      }
    }
  }
}
</style>