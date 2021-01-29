import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import PrimeVue from "./../node_modules/primevue/config";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Chart from "primevue/chart";
// custom styles
import "./assets/css/styles.scss";

const app = createApp(App);


app.use(PrimeVue);
app.use(store)
app.use(router)
app.use(PrimeVue)
app.component('Chart', Chart);
app.component('Button', Button);
app.mount("#app");
