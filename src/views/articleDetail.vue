<template>
  <div hw-animate="fadeInUp" class="wrap">
    <div class="list">
      <div class="top">
        <div class="line-wrap">
          <div class="title">{{content.title}}</div>
          <button v-copy="copyText">
            <span class="copy">一键复制</span>
          </button>
        </div>
        <div class="content">
          <mavon-editor
            class="md"
            :value="content.content"
            :subfield="prop.subfield"
            :defaultOpen="prop.defaultOpen"
            :toolbarsFlag="prop.toolbarsFlag"
            :editable="prop.editable"
            :scrollStyle="prop.scrollStyle"
          ></mavon-editor>
        </div>
      </div>
      <div class="bootom">
        <div class="type">{{content.type}}</div>
        <div class="time">{{content.time | dateformat}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { runAnimate } from "@/common/animate";

export default {
  data: () => ({
    content: {},
    copyText: ""
  }),
  mounted() {
    this.fetchData();
    runAnimate();
  },
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
    }
  },

  methods: {
    fetchData: async function() {
      let params = {
        articleId: this.$route.params.id
      };

      const res = await this._api.detailArticle(params);
      if (res.code == 0) {
        this.content = res.data[0];
        this.copyText = this.content.content;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  width: 80vw;
  margin-top: 164px;
  text-align: center;
  .list {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px 0;
    position: relative;
    transition: all 0.3s;
    cursor: pointer;
    .top {
      .line-wrap {
        display: flex;
        justify-content: center;
        position: relative;
        button {
          right: 0;
          position: absolute;
        }
        .copy {
          font-size: 13px;
          color: #999;
          transition: all 0.3s;
          &:hover {
            color: #000;
          }
        }
      }
      .content {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        font-size: 18px;
        color: rgb(85, 79, 79);
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
}
</style>