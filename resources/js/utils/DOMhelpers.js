/**
 * general Helper Classes for using DOM API
 */

export const querySelector = (selector) => document.querySelector(selector);


export const addEventListener = (event, handler, useCapture = false) => {
    return document.addEventListener(event, handler, useCapture);
};

/**
 * Scrolls smooth to Top
 */
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - (c / 8));
    }
};
