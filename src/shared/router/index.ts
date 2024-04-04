import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/modules/Home/index.vue";
import CounterView from "@/modules/Counter/index.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/counter", name: "counter", component: CounterView },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
