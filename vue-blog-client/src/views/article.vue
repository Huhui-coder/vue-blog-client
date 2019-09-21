<template>
  <div class="wrap">
    <article-list :list=list></article-list>
  </div>
</template>
<script>
import articleList from "../components/articleList";
export default {
  components: {
    articleList
  },
  data: () => ({
    list:[]
  }),
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData: async function() {
      const res = await this._api.fetchArticle();
      this.list = res.data;
    }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  margin-top: 63px;
  width: 70vw;
  text-align: center;
}
</style>