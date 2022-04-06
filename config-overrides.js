const { override, addBabelPreset } = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = override(
  addBabelPreset('@emotion/babel-preset-css-prop')
  // addReactRefresh(),
  // rewireReactHotLoader()
);
