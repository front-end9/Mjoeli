import svg4everybody from 'svg4everybody';
import jQuery from 'jquery';

// Import polyfills
import 'promise-polyfill/src/polyfill';

// Manually initialize third-party libraries
svg4everybody();

window.$ = window.jQuery = jQuery;