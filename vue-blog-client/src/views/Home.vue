<template>
  <div class="wrap">
    <img src="../assets/img-1.jpeg" alt />
    <p class="text">{{text}}</p>
    <p class="go" @click="doEdit()" v-if="getUserInfo != ''">_去写博客</p>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'; 

export default {
  data: () => ({
    imgPath: "../assets/img-1.jpeg",
    text:'',
    textArray:[]
  }),
  create() {
    this.img();
  },
  mounted() {
    this.fetchData();
    this.changText()
  },
computed:{
    ...mapGetters('userInfo',{  //指的是userinfo.js文件下的  getuserinfo getter方法
        getUserInfo:'getUserInfo'
    })
  },

  methods: {
    doEdit(){
      this.$router.push({
          path: "/edit"
        });
    },
    img() {
      this.imgPath = `../assets/img-${i}.jpeg`;
    },
    changText(){
      this.textArray = [
        '世界上所有的相遇都是久别重逢。',
        '鲜花怒骂少年时，一日看尽长安花。',
        '愿岁月可回首，且以深情共白头。',
        '草在结它的种子，风在摇它的叶子。我们站着不说话，就十分美好。',
        '你应该是一场梦，我应该是一阵风。',
        '愿你垂垂老矣，我可明我心。',
        '今夜我不关心人类，我只想你。',
        '想起你，我这张丑脸就泛起微笑。',
        '我喜欢田野，而我愚笨。只能植荒十年，换得一时春生。',
        '哪里有人会喜欢孤独，不过是不喜欢失望。'
      ]
      let i = Math.round(Math.random() * 10);
      this.text = this.textArray[i]
    },

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
.wrap {
  width: 100vw;
  height: 100vh;
  img {
    width: 100vw;
    height: 100vh;
  }
  .go,.text{
    color: black;
    background-color: #9fc3e7;
    font-size: 19px;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-family:Arial, Helvetica, sans-serif;
  }
  .go{
    top: 60%;
    left: 60%;
    transform: translate(-40%,-40%);
    background-color: #fff;
    font-size: 16px;
    &:hover{
      background-color: #000;
      color: #fff;
      cursor: pointer;
      transition: all .3s;
    }
  }
}
</style>