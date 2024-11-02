// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Vuetifyのプラグインをインポート
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(vuetify); // Vuetifyをアプリに登録
app.mount('#app');