const presets = [
	[
		"@babel/env",
		{
			useBuiltIns: "entry",
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
	[require("@babel/plugin-proposal-class-properties"), { loose: true }]
];

module.exports = { presets, plugins };
