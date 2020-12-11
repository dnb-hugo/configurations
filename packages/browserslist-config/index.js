// https://github.com/browserslist/browserslist#readme

const supportedBrowsers = [
  '>= 0.5%',
  'last 2 major versions',
  'not dead',
  'Chrome >= 60',
  'Firefox >= 60',
  // needed since Legacy Edge still has usage; 79 was the first Chromium Edge version
  // should be removed in the future when its usage drops or when it is moved to dead browsers
  'not Edge < 79',
  'Firefox ESR',
  'iOS >= 10',
  'Safari >= 10',
  'Android >= 6',
  'not Explorer <= 11',
];

module.exports = supportedBrowsers;
