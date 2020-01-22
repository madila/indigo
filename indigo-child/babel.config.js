const presets = [
	[
		"@babel/env",
		{
			useBuiltIns: "usage",
		},
	],
];

const plugins = [
	["@babel/plugin-transform-runtime",
		{
			"absoluteRuntime": false,
			"corejs": false,
			"helpers": true,
			"regenerator": true,
			"useESModules": false
		}
	],
	[require("@babel/plugin-proposal-class-properties"), { loose: true }]
];

module.exports = { presets, plugins };
