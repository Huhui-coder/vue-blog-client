import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";
import md5 from "js-md5";
import moment from 'moment' //引入moment 时间格式化插件
import mavonEditor from "mavon-editor"; //引入文本编辑器
import animated from 'animate.css'

import "mavon-editor/dist/css/index.css";
import './icons/index' //引入icon图标
import api from "./http/index";
Vue.use(api);
Vue.use(mavonEditor);
Vue.use(animated)


Vue.config.productionTip = false;
Vue.prototype._md5 = md5;
Vue.prototype._router = router
Vue.prototype._moment = moment; //挂载到原型链上，直接通过this._moment()使用
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD hh:mm:ss') { //将moment注册为全局过滤器
    if (dataStr) {
        return moment(dataStr).format(pattern)
    } else {
        return dataStr
    }
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");