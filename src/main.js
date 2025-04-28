import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import Vue3Toastify, { toast } from "vue3-toastify";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "vue3-toastify/dist/index.css";

import "./assets/custom.scss";
import "./assets/css/style.scss";
import { VueQueryPlugin } from "@tanstack/vue-query";


const app = createApp(App);

app.use(VueQueryPlugin);
app
  .use(BootstrapVue3)
  .use(router)
  .use(Vue3Toastify, {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
    theme: "light",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  })
  .mount("#app");
