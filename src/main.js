import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// custom styles
import "./assets/css/styles.scss";


createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
