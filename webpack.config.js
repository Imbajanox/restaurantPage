const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Entry point for your JavaScript
    output: {
        filename: 'bundle.js', // Output bundle file
        path: path.resolve(__dirname, 'dist'), // Output directory
        clean: true, // Clean the output directory before emit
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html', // Use the HTML template
            filename: 'index.html', // Output HTML file
        }),
    ],
    module: {
        rules: [
            // Add loaders here if needed (e.g., for CSS, images, etc.)
        ],
    },
    mode: 'development', // Set mode to development or production
};