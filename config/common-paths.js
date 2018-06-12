const path = require('path');

module.exports = {
    outputPath: path.resolve(__dirname, '../', 'public'),
    root: path.resolve(__dirname),
    template: './src/index.html',
    favicon: './src/favicon.ico',
    componentsPath: path.resolve(__dirname, '../', 'src/components/'),
    containersPath: path.resolve(__dirname, '../', 'src/containers/'),
    scssSettingsPath: path.resolve(__dirname, '../', 'src/styles/')
};