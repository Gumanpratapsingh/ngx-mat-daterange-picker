// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);
// context.keys().forEach(context);

console.log('require.context:', require.context);

if (typeof require.context !== 'function') {
  console.error('require.context is not defined! Check your webpack configuration.');
} else {
  const context = require.context('./', true, /\.spec\.ts$/);
  context.keys().forEach(context);
}