const { Resvg } = require('@resvg/resvg-js');

new Resvg('<svg xmlns="http://www.w3.org/2000/svg"></svg>', {
    logLevel: 'error',
    font: {
        loadSystemFonts: false
    }
});
