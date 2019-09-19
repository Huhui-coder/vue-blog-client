<template>
  <v-row align="center">
    <div class="wlecome">欢迎登录~</div>
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-btn color="success" class="mr-4" @click="validate">重置</v-btn>

      <v-btn color="error" class="mr-4" @click="reset">登录</v-btn>

      <v-btn color="warning" @click="resetValidation">注册</v-btn>
    </v-form>
  </v-row>
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
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
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