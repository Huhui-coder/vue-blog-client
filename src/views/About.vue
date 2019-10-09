<template>
<div class="wrap">
<p hw-animate="fadeInUp">2019届计算机科学与技术本科毕业生</p>
<p hw-animate="fadeInUp">职业方向大前端</p>
</div>
</template>
<script>
import { runAnimate } from '@/common/animate'

export default {
  data: () => ({
    
  }),
  mounted(){
    runAnimate()
  },

  methods: {
    
    
  }
};
</script>
<style lang="less" scoped>
.wrap{
  margin-top: 163px;
  text-align: center;
}

</style>