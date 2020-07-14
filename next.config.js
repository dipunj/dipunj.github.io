// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== 'production';
const fs = require('fs');
var dotenv = require('dotenv');
var path = require('path');
const envConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, '.env')));

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
	// exportPathMap: () => ({
	// 	'/': { page: '/' },
	// }),
	env: envConfig,
});
