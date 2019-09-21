<template>
  <div class="wrap">
    <div class="list">
      <div class="top">
        <div class="title">{{content.title}}</div>
        <div class="content">{{content.content}}</div>
      </div>
      <div class="bootom">
        <div class="type">{{content.type}}</div>
        <div class="time">{{content.time | dateformat}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    content: {}
  }),
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData: async function() {
      let params = {
        articleId: this.$route.params.id
      };

      const res = await this._api.detailArticle(params);
      if (res.code == 0) {
        this.content = res.data[0];
      }
    }
  }
};
</script>
<style lang="less" scoped>
.wrap{
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