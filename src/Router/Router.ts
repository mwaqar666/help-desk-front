import routes from "./Routes/Routes";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

export default new VueRouter({ mode: "history", routes });
