<template>
  <div>
    <div class="navbar">
      <router-link to="/">home</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
<style lang="less" scoped>
.navbar {
  list-style: none;
  text-align: center;
  & > a {
    text-decoration: none;
    margin: 20px;
  }
}
.content {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
