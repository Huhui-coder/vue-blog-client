<template>
<div class="wrap">
  <v-row align="center">
    <div class="wlecome">
    <img src="../assets/img-7.jpeg" alt />
    </div>
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="password" :rules="passwordRules" label="password" required></v-text-field>

      <v-btn color="success" class="mr-4" @click="reset">重置</v-btn>

      <v-btn color="error" class="mr-4" @click="resgist">注册</v-btn>

    </v-form>
  </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    password: "",
    passwordRules: [
      v => !!v || "password is required",
      v => (v && v.length <= 10) || "password must be less than 10 characters"
    ],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.login()
      }
    },
    resgist: async function () {
      const data = {
        userName:this.name,
        userPwd:this._md5(this.password)
      }
      const res = await this._api.register(data)
      console.log(res)
      
    },
    reset: async function () {
      const res = await this._api.test()
      console.log(res)
    }
  }
};
</script>
<style lang="less" scoped>
.wlecome {
  width: 80vw;
  text-align: center;
  height: calc(100vh - 64px);
  img{
    margin-top: 64px;
    width: 100%;
    height: 100%;
    padding-right:10px;
  }
}
</style>