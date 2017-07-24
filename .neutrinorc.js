const autoprefixer = require('autoprefixer');
const vars = require('postcss-simple-vars');
const variables = require('./src/styles/variables');

module.exports = neutrino => {
  neutrino.use('neutrino-preset-react', {
    hot: true,
    devServer: {
      overlay: true,
    },
    html: {
      title: 'My React App',
      links: ['https://fonts.googleapis.com/css?family=Nunito'],
      // more config options here: https://github.com/jaketrent/html-webpack-template
    },
  });
  neutrino.use('neutrino-preset-jest');
  neutrino.use('neutrino-middleware-eslint', {
    eslint: {
      useEslintrc: true,
    },
  });
  neutrino.use('neutrino-middleware-styles-loader', {
    extractCSS: false,
    cssModules: true,
    postcss: [autoprefixer(), vars({ variables })],
  });
};
