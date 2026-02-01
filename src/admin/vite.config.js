// @ts-nocheck
const { mergeConfig } = require('vite');
const path = require('path');

const nodeBuiltins = [
  'async_hooks',
  'assert',
  'crypto',
  'string_decoder',
  'events',
  'fs',
  'fs/promises',
  'http',
  'https',
  'net',
  'path',
  'querystring',
  'stream',
  'timers',
  'tls',
  'url',
  'zlib',
];

module.exports = (config) => {
  // Create aliases for all Node built-ins to point to the mock file
  const aliases = nodeBuiltins.reduce((acc, moduleName) => {
    acc[moduleName] = path.resolve(__dirname, 'vite-env-mock.js');
    acc[`node:${moduleName}`] = path.resolve(__dirname, 'vite-env-mock.js');
    return acc;
  }, {});

  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
        ...aliases,
      },
    },
  });
};
