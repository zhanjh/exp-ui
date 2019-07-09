#!/usr/bin/env node

/* eslint-env node */
/* eslint-disable no-console */

'use strict';

const path = require('path');
const localSetting = require('./../setting/node.front.local');

const baseDir = path.resolve(__dirname, '..');
const port = localSetting.front.port || 8007;
const staticHost = localSetting.site.static.host || 'localhost';

const front = require('gap-node-front')({
  baseDir: baseDir,
  port: port,
  staticHost: staticHost,
  scss: {
    publicSlug: {
      dev: 'ui/dev/css',
      dist: 'ui/dist/css'
    },
    inputDir: 'src/scss',
    outputDir: {
      dev: 'site/static/ui/dev/css',
      dist: 'site/static/ui/dist/css'
    },
    includePaths: [
      'node_modules/foundation-sites/scss'
    ]
  },
  public: {
    publicSlug: '',
    publicDir: 'site/public'
  }
});

const cmd = process.argv[2];

if (cmd === 'server') {
  front.runServer();
} else if (cmd === 'release') {
  front.release();
}
