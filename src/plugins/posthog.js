//./plugins/posthog.js
import posthog from "posthog-js";

export default {
  install(app) {
    app.config.globalProperties.$posthog = posthog.init(
      'phc_rVKkKdubX9aSHgXl0mmCLFbGlRFAWAVEtjVdipLCTD1',
      {
        api_host: 'https://us.i.posthog.com',
        capture_pageview:false 
      }
    );
  },
};