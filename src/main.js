import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css' // Import Vuetify CSS
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountCircleOutline } from '@mdi/js';
import { mdiStore } from '@mdi/js';

const vuetify = createVuetify({
  components,
  directives
});

const app = createApp(App);
app.use(router).use(vuetify);
app.component('svg-icon', SvgIcon);
app.config.globalProperties.mdiAccountCircleOutline = mdiAccountCircleOutline;
app.config.globalProperties.mdiStore = mdiStore;
app.mount('#app');
