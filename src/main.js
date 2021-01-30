import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import PrimeVue from "./../node_modules/primevue/config";
import PrimeVue from "primevue/config";
// import Button from "primevue/button";
import Chart from "primevue/chart";
// icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCloudSun, faSun, faMoon, faFan, faDoorOpen, faLightbulb, faAd}
  from "@fortawesome/free-solid-svg-icons";

// Vue.component("font-awesome-icon", FontAwesomeIcon)
library.add(faCloudSun);
library.add(faSun);
library.add(faMoon);
library.add(faFan);
library.add(faAd);
library.add(faDoorOpen);
library.add(faLightbulb);


// custom styles
import "./assets/css/styles.scss";

const app = createApp(App);


app.use(PrimeVue);
app.use(store)
app.use(router)
app.use(PrimeVue)
app.component('Chart', Chart);
app.component("font-awesome-icon", FontAwesomeIcon);
// app.component('Button', Button);
app.mount("#app");
