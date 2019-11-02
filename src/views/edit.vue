<template>
  <div hw-animate="fadeInUp" class="wrap">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="title" :counter="10" :rules="titleRules" label="title" required></v-text-field>
      <v-text-field v-model="type" :rules="typeRules" label="type" required></v-text-field>
    </v-form>
    <mavon-editor
      v-model="context"
      :toolbars="toolbars"
      @save="$save"
      ref="md"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
    />
  </div>
</template>
<script>
import { runAnimate } from '@/common/animate'

export default {
  data: () => ({
    valid: true,
    title: "",
    titleRules: [
      v => !!v || "title is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    type: "",
    typeRules: [
      v => !!v || "type is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    context: " ", //输入的数据
    toolbars: {
      bold: true, // 粗体
      italic: true, // 斜体
      header: true, // 标题
      underline: true, // 下划线
      mark: true, // 标记
      superscript: true, // 上角标
      quote: true, // 引用
      ol: true, // 有序列表
      link: true, // 链接
      imagelink: true, // 图片链接
      help: true, // 帮助
      code: true, // code
      subfield: true, // 是否需要分栏
      fullscreen: true, // 全屏编辑
      readmodel: true, // 沉浸式阅读
      /* 1.3.5 */
      undo: true, // 上一步
      trash: true, // 清空
      save: true, // 保存（触发events中的save事件）
      /* 1.4.2 */
      navigation: true // 导航目录
    }
  }),
  mounted() {
    this.TokenAuth();
    this.fetchData();
    runAnimate()
  },

  methods: {
    fetchData: async function() {
      if (this.$route.params.id) {
        let params = {
          articleId: this.$route.params.id
        };
        const res = await this._api.detailArticle(params);
        if (res.code == 0) {
          let content = res.data[0];
          this.title = content.title;
          this.type = content.type;
          this.context = content.content;
        }
      }
    },
    // 绑定@imgAdd event
    $imgAdd: async function(pos, $file) {
      var formdata = new FormData();
      formdata.append("singleFile", $file);
      const res = await this._api.uploadImg(formdata);
      $vm.$img2Url(pos, res);
    },
    $imgDel(pos) {
      delete this.img_file[pos];
    },
    addData: async function() {
      let adddata = {
        userId: "720190921100728",
        title: this.title,
        type: this.type,
        content: this.context
      };
      if (this.$route.params.id) {  //如果id存在，则为更改现有文章
      let editdata = {
        userId: "720190921100728",
        title: this.title,
        type: this.type,
        content: this.context,
        articleId:this.$route.params.id
      };
        const res = await this._api.editArticle(editdata);
        if (res.code == 0) {
          this.$router.push({
            path: "/article-detail/"+this.$route.params.id
          });
        }
      } else { //id不存在，则为新增文章
        const res = await this._api.addArticle(adddata);
        if (res.code == 0) {
          this.$router.push({
            path: "/article"
          });
        }
      }
    },
    TokenAuth: async function() {
      const res = await this._api.test();
      if (res.code == 0) {
      } else {
        alert("Token 验证已过期");
      }
    },
    $save() {
      this.addData();
    }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  margin-top: 136px;
  width: 100vw;
  height: 80wh;
}
</style>