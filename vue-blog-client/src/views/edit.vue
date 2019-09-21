<template>
  <div class="wrap">
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
  mounted() {},

  methods: {
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
    let params = {
        userId:'720190921100728',
        title:this.title,
        type:this.type,
        content:this.context
    }
      const res = await this._api.addArticle(params);
      if (res.code == 0) {
         this.$router.push({
          path: "/article"
        });
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