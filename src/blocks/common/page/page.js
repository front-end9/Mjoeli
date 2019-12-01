/**
 * @file Implementation of the page block
 */

import { debounce, throttle } from '../../../js/util/index';
import * as LazyLoader from '../../../js/util/lazy-loader';
import { filter } from '../../filter/filter';

// TODO: import other blocks

// -------------------------- BEGIN MODULE VARIABLES --------------------------

const RESIZE_INTERVAL = 200;    // Resize event debouncing interval
const SCROLL_INTERVAL = 200;    // Scroll event throttling interval

// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

/**
 * Handle the window scroll event
 */
function handleWindowScroll() {
    LazyLoader.scanImages();

    // TODO: add code
}

/**
 * Handle the window resize event
 */
function handleWindowResize() {
    // TODO: add code
}

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the page block.
 */
export function initBlock() {
    const debouncedWindowResize = debounce(handleWindowResize, RESIZE_INTERVAL);
    const throttledWindowScroll = throttle(handleWindowScroll, SCROLL_INTERVAL);

    window.addEventListener('resize', debouncedWindowResize);
    window.addEventListener('scroll', throttledWindowScroll);

    LazyLoader.init();

    // TODO: initialize other blocks
    filter.initBlock();

    // Process the initial window size and scroll position
    handleWindowResize();
    handleWindowScroll();
}

// ---------------------------- END PUBLIC METHODS ----------------------------
