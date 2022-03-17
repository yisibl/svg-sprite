const cpFile = require('cp-file');

(async() => {
    await cpFile('./npm/resvgjs.win32-x64-msvc.node', './node_modules/@resvg/resvg-js-win32-x64-msvc/resvgjs.win32-x64-msvc.node');

    await cpFile('./npm/resvgjs.darwin-x64.node', './node_modules/@resvg/resvg-js-darwin-x64/resvgjs.darwin-x64.node');
    console.log('File copied');
})();
