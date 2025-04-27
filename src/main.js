import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";

const BASE_API_URL = "http://127.0.0.1:8000/api";
const BASE_IMAGE_URL = "http://127.0.0.1:8000/storage/";

export { BASE_API_URL, BASE_IMAGE_URL };
const app = createApp(App);
app.use(BootstrapVue3).use(router).mount("#app");
