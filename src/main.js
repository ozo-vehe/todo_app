import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import HeroComponent from "./components/HeroComponent.vue";
import TodosComponent from "./components/TodosComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HeroComponent },
    { path: "/todos", component: TodosComponent },
  ],
});

const app = createApp(App);
app.use(router);

app.mount("#app");
