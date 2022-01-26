import Vue from "vue";
import App from "./App/App.vue";
import router from "./Router/Router";
import store from "./Store/Store";
import vuetify from "./Plugins/Vuetify";

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
