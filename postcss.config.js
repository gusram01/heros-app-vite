/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [autoprefixer, nested, postcssPresetEnv({ stage: 1 })],
};
