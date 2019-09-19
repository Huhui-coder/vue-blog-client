<template>
</template>
<script>
export default {
  data: () => ({
    
  }),
  mounted(){
    this.fetchData()
  },

  methods: {
    fetchData: async function () {
      const res = await this._api.test()
      if (res.data.success) {
        alert('请求成功')
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