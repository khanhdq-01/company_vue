import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import CKEditor from '@ckeditor/ckeditor5-vue';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";

export const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
export const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

export { BASE_API_URL, BASE_IMAGE_URL };

const app = createApp(App);
app.use(CKEditor);
app.use(BootstrapVue3);
app.use(router);
app.mount("#app");
