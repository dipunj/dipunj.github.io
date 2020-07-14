// const env = require('./env-config');

module.exports = {
	presets: ['next/babel'],
	plugins: [
		['@babel/plugin-proposal-optional-chaining'],
		[
			'styled-components',
			{
				ssr: true,
				displayName: true,
				preprocess: false,
			},
		],
		// [('transform-define', env)],
	],
};
