const presets = [
	[
		"@babel/env",
		{
			useBuiltIns: "usage",
			corejs: 3,
			targets: {
				chrome: "68",
				ie: "11"
			}
		},
	],
];

const plugins = [
	["@babel/plugin-transform-runtime",
		{
			"absoluteRuntime": false,
			"corejs": 3,
			"helpers": true,
			"regenerator": true,
			"useESModules": false
		}
	],
	[require("@babel/plugin-proposal-class-properties"), { loose: false }]
];

module.exports = { presets, plugins };
