const resvg = require('@resvg/resvg-js');

resvg.render('<svg xmlns="http://www.w3.org/2000/svg"></svg>', {
    logLevel: 'error',
    font: {
        loadSystemFonts: false
    }
});
