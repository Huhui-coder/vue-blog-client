<template>
  <div class="wrap">
    <div class="list" v-for="(item,index) in list" :key="index" @click="toDetail(item.articleId)">
      <div class="top">
        <div class="title">{{item.title}}</div>
        <div class="content">
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
    }
  },

  methods: {
    toDetail(id) {
      this.$router.push({ path: "/article-detail/" + id });
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
</style>