import { createApp, provide, h } from "vue";
import App from "./App.vue";
import "@/shared/styles/_main.scss";

import { createPinia } from "pinia";
import { router } from "./shared/router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./shared/libs/apollo";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
const pinia = createPinia();

app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount("#app");
