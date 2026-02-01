// @ts-nocheck
const { mergeConfig } = require('vite');

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
].reduce((acc, cur) => {
  acc.push(cur, `node:${cur}`);
  return acc;
}, []);

module.exports = (config) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      rollupOptions: {
        external: [...nodeBuiltins],
      },
    },
  });
};
