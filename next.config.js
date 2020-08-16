// next.config.js
const withPlugins = require('next-compose-plugins');

const withSass = require("@zeit/next-sass");
const withOptimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withPlugins(
    [
        [
            withSass,
            {
                /* plugin config here ... */
            },
        ],
        [
            withOptimizedImages,
            {
                /* plugin config here ... */

            },
        ],
    ], {
        /* global config here ... */
    }
);