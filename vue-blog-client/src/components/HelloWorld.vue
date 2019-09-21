<template>
<div class="wrap">
  <div class="list" v-for="(item,index) in list" :key="index">
    <div class="content">{{item.content}}</div>
    <div class="type">{{item.type}}</div>
    <div class="time">{{item.time}}</div>
  </div>
</div>

</template>
<script>
export default {
  data: () => ({
    
  }),
  props:[list],
  mounted(){
  },

  methods: {
    
    
  }
};
</script>
<style lang="less" scoped>
.wlecome {
  width: 80vw;
  text-align: center;
}
</style>