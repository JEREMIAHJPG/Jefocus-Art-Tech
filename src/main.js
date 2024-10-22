import { createApp, nextTick } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './firebase.js';

import posthogPlugin from "./plugins/posthog"; //import the plugin.
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';

const myCustomTheme = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: '#6200EE',
      secondary: '#03DAC6',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  };

// Components

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme,
    },
  },

  
})

// import createVuetify from './plugins/vuetify';
// import 'vuetify/styles';
// import './Twilio.js'
 
//import sendSMS from "./sendSMS.js"

const app = createApp(App);
app.use(vuetify)
app.use(posthogPlugin); //install the plugin
app.use(router);
app.use(store);
// app.use(createVuetify);
//app.use(sendSMS);
app.mount('#app');

//vuetify
// main.js

router.afterEach((to, from, failure) => {
    if (!failure){
        nextTick(()=>{ 
        app.config.globalProperties.$posthog.capture('$pageview', { path: to.fullPath});
     } ); }
})