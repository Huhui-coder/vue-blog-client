<template>
  <div class="wrap">
    <div class="list" v-for="(item,index) in list" :key="index">
      <div class="top">
        <div class="title">
          {{item.title}}
          <div class="ml" v-if="getUserInfo !=''">
            <svg-icon
              :icon-class="'edit'"
              :class-name="'ml'"
              @svg-Edit-click="OnEditClick(item.articleId)"
            ></svg-icon>
            <svg-icon
              :icon-class="'delete'"
              :class-name="'ml'"
              @svg-Delect-click="OnDelectClick(item.articleId)"
            ></svg-icon>
          </div>
        </div>
        <div class="content" @click="toDetail(item.articleId)">
          <mavon-editor
            class="md"
            :value="item.content"
            :subfield="prop.subfield"
            :defaultOpen="prop.defaultOpen"
            :toolbarsFlag="prop.toolbarsFlag"
            :editable="prop.editable"
            :scrollStyle="prop.scrollStyle"
          ></mavon-editor>
        </div>
      </div>
      <div class="bootom">
        <div class="type">{{item.type}}</div>
        <div class="time">{{item.time | dateformat}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data: () => ({}),
  props: ["list"],
  mounted() {},
  computed: {
    prop() {
      let data = {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true
      };
      return data;
    },
    ...mapGetters("userInfo", {
      //指的是userinfo.js文件下的  getuserinfo getter方法
      getUserInfo: "getUserInfo"
    })
  },

  methods: {
    OnEditClick(id) {
      this.$router.push({ path: "/edit/" + id });
    },
    OnDelectClick: async function(id) {
      const params = {
        articleId: id
      };
      const res = await this._api.delectlArticle(params);
      if (res.code == 0) {
        this.$emit("flash-list");//通知父组件进行刷新页面的操作
      } else {
      }
    },

    toDetail(id) {
      this.$router.push({ path: "/article-detail/" + id });
    },
    Edit() {
      console.log("click");
      this.$router.push({
        path: "/edit"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
  text-align: center;
  &:hover {
    top: -9px;
    background-color: #e4dfdf;
  }
  .top {
    .content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      font-size: 18px;
      color: rgb(85, 79, 79);
      height: 20vh;
    }
  }
  .bootom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;
    color: #aaa;
  }
}
.ml {
  display: inline-flex;
  margin-left: 20px;
}
</style>