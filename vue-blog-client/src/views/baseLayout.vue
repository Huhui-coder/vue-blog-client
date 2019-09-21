<template>
  <div class="wrap">
    <div class="navbar">
      <div class="navbar-left">
        <router-link to="/home">Home</router-link>
        <router-link to="/article">Article</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="navbar-right" v-if="getUserInfo == ''">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
      <div class="navbar-right" v-else>
          <a href="javascript:return false;">{{getUserInfo}}</a>
          <a href="javascript:return false;" @click="logoout()">logo out</a>
      </div>
    </div>
    <div class="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'; 
export default {
  components: {},
  computed:{
    //   ...mapState({  //指的是userinfo文件下面的userinfo state 属性
    //       userInfo:state=>state.userInfo.userInfo
    //   })
    ...mapGetters('userInfo',{  //指的是userinfo.js文件下的  getuserinfo getter方法
        getUserInfo:'getUserInfo'
    })
  },
  methods:{
      ...mapActions("userInfo", [ //userInfo是指modules文件夹下的userInfo.js
      "asyncsetUserInfo" //userInfo.js文件中的actions里的方法
    ]),
      logoout(){
          let playload = {
          userInfo: ''
        };
        this.asyncsetUserInfo(playload);
          
      }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background-color: antiquewhite;
}
.navbar {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  .navbar-left > a,
  .navbar-right > a {
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding: 20px;
    color: #988f82;
    &:hover{
        transition: all .2s;
        transform: scale(1.2);
    }
  }
  .router-link-active::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    display: block;
    background-color: #988f82;
  }
  .router-link-active {
    transition: all 2s;
  }
}
.content {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
.fade-enter-to,
.fade-leave {
  transform: translateX(-50%);
  opacity: 1;
}
</style>
