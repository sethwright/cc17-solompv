import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import App from "./App.vue";

Vue.use(VueGoogleMaps, {
  load: {
    key:
    /* Your Maps Javascript API key here: */"",
    libraries: "geometry,drawing,places"
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
