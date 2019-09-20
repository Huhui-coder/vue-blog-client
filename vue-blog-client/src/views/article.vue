<template>
  <div>
    <p>this is article page</p>
    <div class="article-wrap">
      <div class="article-list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData: async function() {
      const res = await this._api.test();
      if (res.data.success) {
        alert("请求成功");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.wlecome {
  width: 80vw;
  text-align: center;
}
</style>