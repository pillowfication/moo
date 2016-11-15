#!/usr/bin/env node
const path = require('path');
const packageJSON = require('../package.json');

const relativeMainFileName = packageJSON.main;
const absoluteMainFileName = path.join(
  __dirname,
  '..',
  relativeMainFileName
);

require(absoluteMainFileName);
