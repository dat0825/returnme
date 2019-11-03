import Vue from "vue";
import App from "./App.vue";
import { DatePicker } from 'ant-design-vue';
import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from "./router";
import i18n from './i18n'

Vue.use(AntDesignVue);
Vue.use(DatePicker);

Vue.config.productionTip = false;

//use before routing each page to set language
router.beforeEach((to, from, next) => {
  //set default languege if not param language in link
  let language = to.params.lang;
  if (!language) {
    language = "vi";
  }
  //set current language
  i18n.locale = language;
  next();
});

new Vue({
  el: "#app",
  router,
  i18n,
  render: h => h(App)
});
