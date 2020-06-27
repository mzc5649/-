import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.use(ViewUI);
Vue.config.productionTip = false;
import axios from 'axios'
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
