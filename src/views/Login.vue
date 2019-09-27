<template>
  <div class="wrap">
    <v-row align="center">
      <div class="wlecome">
        <img src="../assets/img-6.jpeg" alt />
      </div>
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[rules.required, rules.min]"
          name="input-10-1"
          label="password"
          :type="'password'"
          hint="At least 8 characters"
          counter
          @click:append="show = !show"
        ></v-text-field>

        <v-btn color="success" class="mr-4" @click="reset">重置</v-btn>

        <v-btn color="error" class="mr-4" @click="validate">登录</v-btn>
      </v-form>
    </v-row>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

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
    lazy: false,
    show: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),

  methods: {
    ...mapActions("userInfo", [
      //userInfo是指modules文件夹下的userInfo.js
      "asyncsetUserInfo" //userInfo.js文件中的actions里的方法
    ]),
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.login();
      }
    },
    login: async function() {
      const data = {
        userName: this.name,
        userPwd: this._md5(this.password)
      };
      const res = await this._api.login(data);
      if (res.code == 0) {
        window.localStorage.setItem("token", res.data.token);
        //执行vuex中的Action方法
        let playloadInfo = {
          userInfo: this.name
        };
        this.asyncsetUserInfo(playloadInfo);

        this.$router.push({
          path: "/home"
        });
      }
    },
    reset: async function() {
      const res = await this._api.test();
      console.log(res);
    }
  }
};
</script>
<style lang="less" scoped>
.wlecome {
  width: 80vw;
  text-align: center;
  height: calc(100vh - 64px);
  img {
    margin-top: 64px;
    width: 100%;
    height: 100%;
    padding-right: 10px;
  }
}
</style>