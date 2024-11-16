import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BasePage from './components/BasePage.vue';

const app = createApp(App)

app
  .component('BasePage', BasePage)
  .use(router)
  .mount('#app')