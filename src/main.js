import { createApp, nextTick } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './firebase.js';
// import './Twilio.js'
import posthogPlugin from "./plugins/posthog"; //import the plugin. 
//import sendSMS from "./sendSMS.js"

const app = createApp(App);
app.use(posthogPlugin); //install the plugin
app.use(router);
app.use(store);
//app.use(sendSMS);
app.mount('#app');

router.afterEach((to, from, failure) => {
    if (!failure){
        nextTick(()=>{ 
        app.config.globalProperties.$posthog.capture('$pageview', { path: to.fullPath});
     } ); }
})