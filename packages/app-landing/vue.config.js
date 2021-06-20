const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') return;

    return {
      plugins: [
        new PrerenderSpaPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/', '/about'],
        ),
      ],
    };
  },
};
